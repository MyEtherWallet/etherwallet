'use strict';
var validator = function() {}

validator.isValidAddress = function(address) {
    if (address && address == "0x0000000000000000000000000000000000000000") return false;
    if (address)
        return ethFuncs.validateEtherAddress(address);
    return false;
}
validator.isChecksumAddress = function(address) {
    return ethFuncs.isChecksumAddress(address);
}
validator.isValidENSorEtherAddress = function(address) {
  return (validator.isValidAddress(address) || validator.isValidENSAddress(address));
}
validator.isValidSubName = function(str) {
    try {
        return (str.length > 0 && ens.normalise(str) != '' && str.substring(0, 2) != '0x');
    } catch (e) {
        return false;
    }
}
validator.isValidENSName = function(str) {
    try {
        return (str.length > 6 && ens.normalise(str) != '' && str.substring(0, 2) != '0x');
    } catch (e) {
        return false;
    }
}
validator.isValidTxHash = function(txHash) {
    return txHash.substring(0, 2) == "0x" && txHash.length == 66 && this.isValidHex(txHash);
}
validator.isValidENSAddress = function(address) {
  try {
    address = ens.normalise(address);
  } catch (e) {
    return false
  }
    return address.lastIndexOf(".") != -1;
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
    return privkeyLen == 64 || privkeyLen == 66 || privkeyLen == 128 || privkeyLen == 132;
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
