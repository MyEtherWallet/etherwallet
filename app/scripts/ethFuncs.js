'use strict';
var ethFuncs = function() {}
ethFuncs.validateEtherAddress = function(address) {
	if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) return false;
	else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) return true;
	else
	return this.isChecksumAddress(address);
}
ethFuncs.isChecksumAddress = function(address) {
	return address == ethUtil.toChecksumAddress(address);
}
ethFuncs.validateHexString = function(str) {
	if (str == "") return true;
	str = str.substring(0, 2) == '0x' ? str.substring(2) : str;
    var re = /[0-9A-Fa-f]+$/g;
	return re.test(str);
}
ethFuncs.sanitizeHex = function(hex){
    hex = hex.substring(0, 2) == '0x' ? hex.substring(2) : hex;
    if(hex=="") return "";
    return '0x'+this.padLeftEven(hex); 
}
ethFuncs.padLeftEven = function(hex){
    hex = hex.length % 2 != 0 ? '0' + hex : hex;
	return hex;
}
ethFuncs.addTinyMoreToGas = function(hex){
    hex = this.sanitizeHex(hex);
    return new BigNumber(hex).plus(etherUnits.getValueOfUnit('gwei')).toDigits(2).toString(16);
}
ethFuncs.decimalToHex = function(dec){
    return new BigNumber(dec).toString(16);
}
ethFuncs.hexToDecimal = function(hex){
    return new BigNumber(this.sanitizeHex(hex)).toString();
}
module.exports = ethFuncs;