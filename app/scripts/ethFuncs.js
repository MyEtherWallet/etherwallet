'use strict';
var ethFuncs = function() {}
ethFuncs.validateEtherAddress = function(address){
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address))return false;
    else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) return true;
    else return this.isChecksumAddress(address);
}
ethFuncs.isChecksumAddress = function(address) {    
    return address == ethUtil.toChecksumAddress(address);
};
module.exports = ethFuncs;