'use strict';
var validator = function() {}
validator.isValidAddress = function(address) {
    if (address && address == "0x0000000000000000000000000000000000000000") return false;
    if (address)
        return ethFuncs.validateEtherAddress(address);
    return false;
}
validator.isValidENSorEtherAddress = function(address) {
    return (validator.isValidAddress(address) || validator.isValidENSAddress(address));
}
validator.isValidENSName = function(str) {
    try {
        return (str.length > 6 && ens.normalise(str) != '');
    } catch (e) {
        return false;
    }
}
validator.isValidENSAddress = function(address) {
    address = ens.normalise(address);
    var tld = address.substr(address.lastIndexOf('.') + 1);
    var _ens = new ens();
    if (_ens.curRegistry.tlds[tld]) return true;
    return false;
}
validator.isValidBTCAddress = function(address) {
    return ethUtil.WAValidator.validate(address, 'BTC');
}
validator.isPositiveNumber = function(value) {
    return globalFuncs.isNumeric(value) && parseFloat(value) >= 0;
}
validator.isValidHex = function(hex) {
    return ethFuncs.validateHexString(hex);
}
validator.isValidPrivKey = function(privkeyLen) {
    return privkeyLen == 64 || privkeyLen == 128 || privkeyLen == 132;
}
validator.isValidMnemonic = function(mnemonic) {
    return hd.bip39.validateMnemonic(mnemonic);
}
validator.isPasswordLenValid = function(pass, len) {
    if (pass === 'undefined' || pass == null) return false;
    return pass.length > len;
}
validator.isAlphaNumeric = function(value) {
    return globalFuncs.isAlphaNumeric(value);
}
validator.isAlphaNumericSpace = function(value) {
    if (!value) return false;
    return globalFuncs.isAlphaNumeric(value.replace(/ /g, ''));
}
validator.isJSON = function(json) {
    return ethUtil.solidityUtils.isJson(json);
}
validator.isValidURL = function(str) {
    var pattern = new RegExp('^(https?:\\/\\/)' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
}
module.exports = validator;
