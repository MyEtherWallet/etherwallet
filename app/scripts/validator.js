'use strict';
var validator = function() {}
validator.isValidAddress =  function(address){
    return ethFuncs.validateEtherAddress(address);
}
validator.isPositiveNumber = function(value){
    return globalFuncs.isNumeric(value) && parseFloat(value) >= 0;
}
validator.isValidHex = function(hex){
    return ethFuncs.validateHexString(hex);
}
validator.isValidPrivKey = function(privkeyLen){
    return privkeyLen == 64 || privkeyLen == 128 || privkeyLen == 132;
}
validator.isPasswordLenValid = function(pass, len){
    if(pass === 'undefined' || pass == null ) return false;
    return pass.length > len;
}
module.exports = validator;
