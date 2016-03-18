'use strict';
var globalFuncs = function() {}
globalFuncs.getBlockie = function(address) {
	return blockies.create({
		seed: address.toLowerCase(),
		size: 8,
		scale: 16
	}).toDataURL();
}
module.exports = globalFuncs;