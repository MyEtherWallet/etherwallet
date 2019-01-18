/**
 *  (c) 2017 Douglas Bakkum, Shift Devices AG
 *  MIT license
**/

// Hijacks the U2F auth command to pass HWW API commands

// TODO - Integrate the smart verification mobile app (send result['echo'] from sign response).
//        Requires pairing, for example copy-pasting the pairing code from the desktop app (needs implementation).

'use strict';

var Crypto = require('crypto');
var HDKey = require('hdkey');

var DigitalBitboxEth = function(comm, sec) {
	this.comm = comm;
    DigitalBitboxEth.sec = sec || DigitalBitboxEth.sec;
    this.key = Crypto.createHash('sha256').update(new Buffer(DigitalBitboxEth.sec, 'utf8')).digest();
    this.key = Crypto.createHash('sha256').update(this.key).digest();
    clearTimeout(DigitalBitboxEth.to);
    DigitalBitboxEth.to = setTimeout(function(){ DigitalBitboxEth.sec = ''; }, 60000);
}

var BitBoxSupportedMajorVersion = 6;

DigitalBitboxEth.sec = '';
DigitalBitboxEth.to = null;

DigitalBitboxEth.aes_cbc_b64_decrypt = function(ciphertext, key) {
    try {
        var h = Crypto.createHash('sha512').update(key).digest();
        var encryptionKey = h.slice(0, 32);
        var authenticationKey  = h.slice(32, 64);

        var ub64 = new Buffer(ciphertext, "base64").toString("binary");
        var cipher = new Buffer(ub64.slice(0, ub64.length - 32), "binary");
        var hmac = new Buffer(ub64.slice(ub64.length - 32), "binary");
        var expectedHmac = Crypto.createHmac('sha256', authenticationKey).update(cipher).digest();
        if (!hmac.equals(expectedHmac)) {
            throw "hmac check failed";
        }
        var iv   = new Buffer(cipher.slice(0, 16), "binary");
        var enc  = new Buffer(cipher.slice(16), "binary");
        var decipher = Crypto.createDecipheriv("aes-256-cbc", encryptionKey, iv);
        var dec = decipher.update(enc) + decipher.final();
        return dec.toString("utf8");
    }
    catch(err) {
        return ciphertext;
    }
}

DigitalBitboxEth.aes_cbc_b64_encrypt = function(plaintext, key) {
    try {
        var h = Crypto.createHash('sha512').update(key).digest();
        var encryptionKey = h.slice(0, 32);
        var authenticationKey  = h.slice(32, 64);

        var iv = Crypto.pseudoRandomBytes(16);
        var cipher = Crypto.createCipheriv("aes-256-cbc", encryptionKey, iv);
        var ciphertext = Buffer.concat([iv, cipher.update(plaintext), cipher.final()]);
        var hmac = Crypto.createHmac('sha256', authenticationKey).update(ciphertext).digest();
        return Buffer.concat([ciphertext, hmac]).toString("base64");
    }
    catch(err) {
        return '';
    }
}

DigitalBitboxEth.parseError = function(errObject) {
    var errMsg = {
        err101: 'The BitBox is not initialized. First use the <a href="https://shiftcrypto.ch/start" target="_blank" rel="noopener noreferrer">Digital Bitbox desktop app</a> to set up a wallet.',// No password set
        err250: 'The BitBox is not initialized. First use the <a href="https://shiftcrypto.ch/start" target="_blank" rel="noopener noreferrer">BitBox desktop app</a> to set up a wallet.',// Wallet not seeded
        err251: 'The BitBox is not initialized. First use the <a href="https://shiftcrypto.ch/start" target="_blank" rel="noopener noreferrer">BitBox desktop app</a> to set up a wallet.',// Wallet not seeded
        err109: 'The BitBox received unexpected data. Was the correct password used? ' + errObject.message,
    };
    var code = 'err' + errObject.code.toString();
    var msg = errMsg[code] || errObject.message;
    return msg;
}

DigitalBitboxEth.prototype.send = function(cmd, callback) {
    var self = this;

    this.comm.exchange('{"ping":""}', function(pingResponse, pingError) {
        if (typeof pingError !== 'undefined') {
			callback(undefined, pingError);
            return;
        }
        pingResponse = JSON.parse(pingResponse.toString('utf8'));
        if (!('device' in pingResponse)) {
            callback(undefined, 'Please upgrade to the newest firmware using the <a href="https://shiftcrypto.ch/start" target="_blank">BitBox Desktop app.</a>');
            return;
        }
        var match = (/^v(\d+)\.\d+\.\d+/).exec(pingResponse.device.version);
        if (match === null || match.length != 2) {
            throw 'unexpected reply';
        }
        var majorVersion = parseInt(match[1]);
        if (majorVersion < BitBoxSupportedMajorVersion) {
            callback(undefined, 'Please upgrade to the newest firmware using the <a href="https://shiftcrypto.ch/start" target="_blank">BitBox Desktop app.</a>');
            return;
        }
        if (majorVersion > BitBoxSupportedMajorVersion) {
            callback(undefined, 'MyEtherWallet does not yet support this version of the firmware');
            return;
        }
        var cipher = DigitalBitboxEth.aes_cbc_b64_encrypt(cmd, self.key)
        self.comm.exchange(cipher, function(response, error) {
            if (typeof pingError !== 'undefined') {
			    callback(undefined, pingError);
                return;
            }
            try {
                response = JSON.parse(response.toString('utf8'));
                if ('error' in response) {
				    callback(undefined, DigitalBitboxEth.parseError(response.error));
                    return;
                }
                if ('ciphertext' in response) {
                    response = JSON.parse(DigitalBitboxEth.aes_cbc_b64_decrypt(response.ciphertext, self.key));
                    if ('error' in response) {
				        callback(undefined, DigitalBitboxEth.parseError(response.error));
                        return;
                    }
                    callback(response, undefined);
                }
            }
            catch(err) {
                callback(undefined, 'Unexpected error: ' + err.message);
            }
        });
    });
}

DigitalBitboxEth.prototype.getAddress = function(path, callback) {
    var self = this;
    var cmd = '{"xpub":"' + path + '"}';
    var localCallback = function(response, error) {
		if (typeof error != "undefined") {
			callback(undefined, error);
            return;
		}
		var hdkey = HDKey.fromExtendedKey(response.xpub);
        var result = {
			publicKey: hdkey.publicKey.toString('hex'),
            chainCode: hdkey.chainCode.toString('hex'),
        };
        callback(result);
        return;
	};
    self.send(cmd, localCallback);
}

DigitalBitboxEth.signGeneric = function(self, path, chainId, hashToSign, callback) {
    var cmd = '{"sign":{"data":[{"hash":"' + hashToSign + '","keypath":"' + path + '"}]}}';
    var localCallback = function(response, error) {
		if (typeof error != "undefined") {
			callback(undefined, error);
            return;
		}
        if ('echo' in response) {
            // Echo from first sign command. (Smart verification not implemented.)
            // Send second sign command.
            var cmd = '{"sign":""}';
            self.send(cmd, localCallback);
            return;
        }
        if ('sign' in response) {
            var vOffset = chainId ? chainId * 2 + 8 : 0;
            var v = new Buffer([parseInt(response.sign[0].recid, 16) + 27 + vOffset]);
            var result = {
                v: v.toString('hex'),
                r: response.sign[0].sig.slice(0, 64),
                s: response.sign[0].sig.slice(64, 128),
            };
            callback(result);
            return;
        }
	};
    self.send(cmd, localCallback);
}

DigitalBitboxEth.prototype.signTransaction = function(path, eTx, callback) {
    var self = this;
    var hashToSign = eTx.hash(false).toString('hex');
    DigitalBitboxEth.signGeneric(self, path, eTx._chainId, hashToSign, callback);
}

DigitalBitboxEth.prototype.signMessage = function(path, messageHex, callback) {
    var self = this;
    var hashToSign = messageHex.toString('hex');
    DigitalBitboxEth.signGeneric(self, path, 0, hashToSign, callback);
}

module.exports = DigitalBitboxEth;
