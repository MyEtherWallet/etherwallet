'use strict';

var SecalotEth = function(comm, pinCode) {
	this.comm = comm;
    if (typeof pinCode != 'undefined') {
        this.pinCode = pinCode;
    }
}

SecalotEth.splitPath = function(path) {
    var result = [];
    var components = path.split('/');
    components.forEach(function (element, index) {
        var number = parseInt(element, 10);
        if (isNaN(number)) {
            return;
        }
        if ((element.length > 1) && (element[element.length - 1] == "'")) {
            number += 0x80000000;
        }
        result.push(number);
    });
    return result;
}

SecalotEth.getErrorMessage = function(sw, operation) {
    var errorMessage;

    if (sw == 0x6d00) {
        errorMessage = "Ethereum wallet on your Secalot is not initialized.";
    }
    else if (sw == 0x6982) {
        if(operation == "getPublicKey") {
            errorMessage = "Invalid PIN-code. Be careful, after entering a wrong PIN-code three times in a row, your Secalot Ethereum wallet would be permanently wiped.";
        }
        else {
            errorMessage = "PIN-code not verified."
        }
    }
    else if (sw == 0x6700) {
        errorMessage = "Invalid PIN-code length."
    }
    else if (sw == 0x6985) {
        errorMessage = "Operation timed out."
    }
    else {
        errorMessage = "An error has occurred. SW = " + sw.toString(16) + ".";
    }

    return errorMessage;
}

SecalotEth.prototype.getAddress = function(path, callback) {
    var splitPath = SecalotEth.splitPath(path);
    var apdus = [];
    var buffer;

    if( typeof this.pinCode != 'undefined')
    {
        var pin = Buffer.from(this.pinCode, 'utf8');

        buffer = new Buffer(5 + pin.length);

        buffer[0] = 0x80;
        buffer[1] = 0x22;
        buffer[2] = 0x00;
        buffer[3] = 0x00;
        buffer[4] = pin.length;

        pin.copy(buffer, 5, 0, pin.length);

        apdus.push(buffer.toString('hex'));
    }

    buffer = new Buffer(5 + 1 + splitPath.length * 4);

    buffer[0] = 0x80;
    buffer[1] = 0x40;
    buffer[2] = 0x00;
    buffer[3] = 0x00;
    buffer[4] = 1 + splitPath.length * 4;
    buffer[5] = splitPath.length;
    splitPath.forEach(function (element, index) {
        buffer.writeUInt32BE(element, 6 + 4 * index);
    });

    apdus.push(buffer.toString('hex'));

    var self = this;
    var localCallback = function(response, error) {
        if (typeof error != "undefined") {
            callback(undefined, error);
        }
        else {
            var result = {};
            response = new Buffer(response, 'hex');
            var sw = response.readUInt16BE(response.length - 2);
            if (sw != 0x9000) {
                callback(undefined, SecalotEth.getErrorMessage(sw, "getPublicKey"));
                return;
            }
            if (apdus.length == 0) {
                result['publicKey'] = response.slice(0, 65).toString('hex');
                result['chainCode'] = response.slice(65, 97).toString('hex');
                callback(result);
            }
            else
            {
                self.comm.exchange(apdus.shift(), localCallback);
            }
        }
    };
    self.comm.exchange(apdus.shift(), localCallback);
}

SecalotEth.prototype.signTransaction = function(path, eTx, callback) {
    var splitPath = SecalotEth.splitPath(path);
    var offset = 0;
    var rawData;
    var apdus = [];

    // EIP155 spec:
    // when computing the hash of a transaction for purposes of signing or recovering,
    // instead of hashing only the first six elements (ie. nonce, gasprice, startgas, to, value, data),
    // hash nine elements, with v replaced by CHAIN_ID, r = 0 and s = 0

    var savedRaw = eTx.raw.slice();
    eTx.v = eTx._chainId;
    eTx.r = 0;
    eTx.s = 0;
    var dataToHash = eTx.serialize();
    eTx.raw = savedRaw;

    rawData = new Buffer(dataToHash, 'hex');

    while (offset != rawData.length) {
        var maxChunkSize = 64;
        var chunkSize = (offset + maxChunkSize > rawData.length ? rawData.length - offset : maxChunkSize);
        var buffer = new Buffer(5 + chunkSize);
        buffer[0] = 0x80;
        buffer[1] = 0xF2;
        buffer[2] = (offset == 0 ? 0x00 : 0x01);
        buffer[3] = 0x00;
        buffer[4] = chunkSize;

        rawData.copy(buffer, 5, offset, offset + chunkSize);

        apdus.push(buffer.toString('hex'));
        offset += chunkSize;
    }

    var buffer = new Buffer(5 + 1 + splitPath.length * 4);

    buffer[0] = 0x80;
    buffer[1] = 0xF2;
    buffer[2] = 0x02;
    buffer[3] = 0x00;
    buffer[4] = (1 + splitPath.length * 4);

    buffer[5] = splitPath.length;
    splitPath.forEach(function (element, index) {
        buffer.writeUInt32BE(element, 6 + 4 * index);
    });

    apdus.push(buffer.toString('hex'));

    var self = this;
    var localCallback = function(response, error) {
        if (typeof error != "undefined") {
            callback(undefined, error);
        }
        else {
            response = new Buffer(response, 'hex');
            var sw = response.readUInt16BE(response.length - 2);
            if (sw != 0x9000) {
                callback(undefined, SecalotEth.getErrorMessage(sw, "signTransaction"));
                return;
            }
            if (apdus.length == 0) {
                var result = {};
                var v = response[0] + 27;

                if (eTx._chainId > 0) {
                    v += eTx._chainId * 2 + 8;
                }

                result['v'] = new Buffer([v]).toString('hex');
                result['r'] = response.slice(1, 1 + 32).toString('hex');
                result['s'] = response.slice(1 + 32, 1 + 32 + 32).toString('hex');
                callback(result);
            }
            else {
                self.comm.exchange(apdus.shift(), localCallback);
            }
        }
    };
    self.comm.exchange(apdus.shift(), localCallback);

}

SecalotEth.prototype.signMessage = function(path, message, callback) {
    var splitPath = SecalotEth.splitPath(path);
    var offset = 0;
    var rawData;
    var apdus = [];

    message = '\x19Ethereum Signed Message:\n' + message.length.toString() + message;
    rawData = new Buffer( Buffer.from(message).toString("hex"), 'hex');

    while (offset != rawData.length) {
        var maxChunkSize = 64;
        var chunkSize = (offset + maxChunkSize > rawData.length ? rawData.length - offset : maxChunkSize);
        var buffer = new Buffer(5 + chunkSize);
        buffer[0] = 0x80;
        buffer[1] = 0xF2;
        buffer[2] = (offset == 0 ? 0x00 : 0x01);
        buffer[3] = (offset == 0 ? 0x01 : 0x00);
        buffer[4] = chunkSize;

        rawData.copy(buffer, 5, offset, offset + chunkSize);

        apdus.push(buffer.toString('hex'));
        offset += chunkSize;
    }

    var buffer = new Buffer(5 + 1 + splitPath.length * 4);

    buffer[0] = 0x80;
    buffer[1] = 0xF2;
    buffer[2] = 0x02;
    buffer[3] = 0x00;
    buffer[4] = (1 + splitPath.length * 4);

    buffer[5] = splitPath.length;
    splitPath.forEach(function (element, index) {
        buffer.writeUInt32BE(element, 6 + 4 * index);
    });

    apdus.push(buffer.toString('hex'));

    var self = this;
    var localCallback = function(response, error) {
        if (typeof error != "undefined") {
            callback(undefined, error);
        }
        else {
            response = new Buffer(response, 'hex');
            var sw = response.readUInt16BE(response.length - 2);
            if (sw != 0x9000) {
                callback(undefined, SecalotEth.getErrorMessage(sw, "signMessage"));
                return;
            }
            if (apdus.length == 0) {
                var result = {};
                var v = response[0] + 27;
                result['v'] = new Buffer([v]).toString('hex');
                result['r'] = response.slice(1, 1 + 32).toString('hex');
                result['s'] = response.slice(1 + 32, 1 + 32 + 32).toString('hex');
                callback(result);
            }
            else {
                self.comm.exchange(apdus.shift(), localCallback);
            }
        }
    };
    self.comm.exchange(apdus.shift(), localCallback);
}

module.exports = SecalotEth;
