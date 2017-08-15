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
    this.key = Crypto.createHash('sha256').update(new Buffer(DigitalBitboxEth.sec, 'ascii')).digest();
    this.key = Crypto.createHash('sha256').update(this.key).digest();
    clearTimeout(DigitalBitboxEth.to);
    DigitalBitboxEth.to = setTimeout(function(){ DigitalBitboxEth.sec = ''; }, 60000);
}

DigitalBitboxEth.sec = '';
DigitalBitboxEth.to = null;

DigitalBitboxEth.aes_cbc_b64_decrypt = function(ciphertext, key) {
    var res;
    try {
        var ub64 = new Buffer(ciphertext, "base64").toString("binary");
        var iv   = new Buffer(ub64.slice(0, 16), "binary");
        var enc  = new Buffer(ub64.slice(16), "binary");
        var decipher = Crypto.createDecipheriv("aes-256-cbc", key, iv);
        var dec = decipher.update(enc) + decipher.final();
        res = dec.toString("utf8");
    }
    catch(err) {
        res = ciphertext;
    }
    return res;
}

DigitalBitboxEth.aes_cbc_b64_encrypt = function(plaintext, key) {
    try {
        var iv = Crypto.pseudoRandomBytes(16);
        var cipher = Crypto.createCipheriv("aes-256-cbc", key, iv);
        var ciphertext = Buffer.concat([iv, cipher.update(plaintext), cipher.final()]);
        return ciphertext.toString("base64");
    }
    catch(err) {
        return '';
    }
}

DigitalBitboxEth.parseError = function(errObject) {
    var errMsg = {
        err101: 'The Digital Bitbox is not initialized. First use the <a href="https://digitalbitbox.com/start" target="_blank" rel="noopener">Digital Bitbox desktop app</a> to set up a wallet.',// No password set
        err250: 'The Digital Bitbox is not initialized. First use the <a href="https://digitalbitbox.com/start" target="_blank" rel="noopener">Digital Bitbox desktop app</a> to set up a wallet.',// Wallet not seeded
        err251: 'The Digital Bitbox is not initialized. First use the <a href="https://digitalbitbox.com/start" target="_blank" rel="noopener">Digital Bitbox desktop app</a> to set up a wallet.',// Wallet not seeded
        err109: 'The Digital Bitbox received unexpected data. Was the correct password used? ' + errObject.message,
    };
    var code = 'err' + errObject.code.toString();
    var msg = errMsg[code] || errObject.message;
    return msg;
}

DigitalBitboxEth.prototype.getAddress = function(path, callback) {
    var self = this;
    var cmd = '{"xpub":"' + path + '"}';
        cmd = DigitalBitboxEth.aes_cbc_b64_encrypt(cmd, this.key);
    var localCallback = function(response, error) {
		if (typeof error != "undefined") {
			callback(undefined, error);
		}
		else {
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
                    var hdkey = HDKey.fromExtendedKey(response.xpub);
                    var result = {
			            publicKey: hdkey.publicKey.toString('hex'),
                        chainCode: hdkey.chainCode.toString('hex'),
                    };
                    callback(result);
                    return;
                }
            }
            catch(err) {
                callback(undefined, 'Unexpected error: ' + err.message);
            }
		}
	};
    self.comm.exchange(cmd, localCallback);
}

DigitalBitboxEth.prototype.signTransaction = function(path, eTx, callback) {
    var self = this;
    var hashToSign = eTx.hash(false).toString('hex');
    var cmd = '{"sign":{"data":[{"hash":"' + hashToSign + '","keypath":"' + path + '"}]}}';
        cmd = DigitalBitboxEth.aes_cbc_b64_encrypt(cmd, self.key);

    var localCallback = function(response, error) {
		if (typeof error != "undefined") {
			callback(undefined, error);
		}
		else {
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
                    if ('echo' in response) {
                        // Echo from first sign command. (Smart verification not implemented.)
                        // Send second sign command.
                        var cmd = '{"sign":""}';
                            cmd = DigitalBitboxEth.aes_cbc_b64_encrypt(cmd, self.key);
                        self.comm.exchange(cmd, localCallback);
                        return;
                    }
                    if ('sign' in response) {
                        var vOffset = eTx._chainId ? eTx._chainId * 2 + 8 : 0;
                        var v = new Buffer([parseInt(response.sign[0].recid, 16) + 27 + vOffset]);
                        var result = {
                            v: v.toString('hex'),
                            r: response.sign[0].sig.slice(0, 64),
                            s: response.sign[0].sig.slice(64, 128),
                        };
                        callback(result);
                        return;
                    }
                }
            }
            catch(err) {
                callback(undefined, 'Unexpected error:' + err.message);
            }
		}
	};
    self.comm.exchange(cmd, localCallback);
}

module.exports = DigitalBitboxEth;
