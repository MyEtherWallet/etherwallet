'use strict';
var etherUnits = function() {};
etherUnits.unitMap = {
	'wei': '1',
	'kwei': '1000',
	'ada': '1000',
	'femtoether': '1000',
	'mwei': '1000000',
	'babbage': '1000000',
	'picoether': '1000000',
	'gwei': '1000000000',
	'shannon': '1000000000',
	'nanoether': '1000000000',
	'nano': '1000000000',
	'szabo': '1000000000000',
	'microether': '1000000000000',
	'micro': '1000000000000',
	'finney': '1000000000000000',
	'milliether': '1000000000000000',
	'milli': '1000000000000000',
	'ether': '1000000000000000000',
	'kether': '1000000000000000000000',
	'grand': '1000000000000000000000',
	'einstein': '1000000000000000000000',
	'mether': '1000000000000000000000000',
	'gether': '1000000000000000000000000000',
	'tether': '1000000000000000000000000000000'
};
etherUnits.getValueOfUnit = function(unit) {
	unit = unit ? unit.toLowerCase() : 'ether';
	var unitValue = this.unitMap[unit];
	if (unitValue === undefined) {
		throw new Error(globalFuncs.errorMsgs[4] + JSON.stringify(this.unitMap, null, 2));
	}
	return new BigNumber(unitValue, 10);
};
etherUnits.fiatToWei = function(number, pricePerEther) {
	var returnValue = new BigNumber(String(number)).div(pricePerEther).times(this.getValueOfUnit('ether')).round(0);
	return returnValue.toString(10);
};

etherUnits.toFiat = function(number, unit, multi) {
	var returnValue = new BigNumber(this.toEther(number, unit)).times(multi).round(5);
	return returnValue.toString(10);
};

etherUnits.toEther = function(number, unit) {
	var returnValue = new BigNumber(this.toWei(number, unit)).div(this.getValueOfUnit('ether'));
	return returnValue.toString(10);
};
etherUnits.toGwei = function(number, unit) {
	var returnValue = new BigNumber(this.toWei(number, unit)).div(this.getValueOfUnit('gwei'));
	return returnValue.toString(10);
};
etherUnits.toWei = function(number, unit) {
	var returnValue = new BigNumber(String(number)).times(this.getValueOfUnit(unit));
	return returnValue.toString(10);
};

etherUnits.unitToUnit = function(number, from, to) {
	var returnValue = new BigNumber(String(number)).times(this.getValueOfUnit(from)).div(this.getValueOfUnit(to));
	return returnValue.toString(10);
};

module.exports = etherUnits;
