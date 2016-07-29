'use strict';
var Token = function(contractAddress, userAddress, symbol, decimal) {
	this.contractAddress = contractAddress;
	this.userAddress = userAddress
	this.symbol = symbol;;
	this.decimal = decimal;
	this.setBalance();
}
Token.balanceHex = "0x70a08231";
Token.transferHex = "0xa9059cbb";
Token.popTokens = [{
	"address": "0xbb9bc244d798123fde783fcc1c72d3bb8c189413",
	"symbol": "DAO",
	"decimal": 16
},
{
	"address": "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
	"symbol": "DGD",
	"decimal": 9
},
{
	"address": "0xc66ea802717bfb9833400264dd12c2bceaa34a6d",
	"symbol": "MKR",
	"decimal": 18
},
{
	"address": "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
	"symbol": "🦄 Unicorn",
	"decimal": 0
},
{
	"address": "0x74c1e4b8cae59269ec1d85d3d4f324396048f4ac",
	"symbol": "🍺 BeerCoin",
	"decimal": 0
}];
Token.prototype.getContractAddress = function() {
	return this.contractAddress;
}
Token.prototype.getUserAddress = function() {
	return this.userAddress;
}
Token.prototype.getSymbol = function() {
	return this.symbol;
}
Token.prototype.getDecimal = function() {
	return this.decimal;
}
Token.prototype.getBalance = function() {
	return this.balance;
}
Token.prototype.getBalanceBN = function() {
	return this.balanceBN;
}
Token.prototype.setBalance = function() {
	var balanceCall = ethFuncs.getDataObj(this.contractAddress, Token.balanceHex, [ethFuncs.getNakedAddress(this.userAddress)]);
	var parentObj = this;
	ajaxReq.getEthCall(balanceCall, function(data) {
		if (!data.error) {
			parentObj.balance = new BigNumber(data.data).div(new BigNumber(10).pow(parentObj.getDecimal())).toString();
			parentObj.balanceBN = new BigNumber(data.data).toString();
		}
	});
}
Token.prototype.getData = function(toAdd, value) {
	try {
		if (!ethFuncs.validateEtherAddress(toAdd)) throw globalFuncs.errorMsgs[5];
		else if (!globalFuncs.isNumeric(value) || parseFloat(value) < 0) throw globalFuncs.errorMsgs[7];
		var value = ethFuncs.padLeft(new BigNumber(value).times(new BigNumber(10).pow(this.getDecimal())).toString(16), 64);
		var toAdd = ethFuncs.padLeft(ethFuncs.getNakedAddress(toAdd), 64);
		var data = Token.transferHex + toAdd + value;
		return {
			isError: false,
			data: data
		};
	} catch (e) {
		return {
			isError: true,
			error: e
		};
	}
}
module.exports = Token;
