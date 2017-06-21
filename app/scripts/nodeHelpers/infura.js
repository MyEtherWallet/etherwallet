'use strict';
var customNode = require('./customNode');
var infura = function(srvrUrl, port, httpBasicAuthentication) {
    var _temp = new customNode(srvrUrl, port, httpBasicAuthentication);
    for (var attr in _temp) {
        this[attr] = _temp[attr];
    }
    this.getRandomID = function() {
        return new BigNumber('0x' + globalFuncs.getRandomBytes(5).toString('hex')).toNumber();
    }
}
module.exports = infura;
