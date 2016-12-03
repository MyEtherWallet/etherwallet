'use strict';
var http;
var ajaxReq = function() {}
ajaxReq.http = null;
ajaxReq.postSerializer = null;
ajaxReq.SERVERURL = "https://rpc.myetherwallet.com/api.mew";
ajaxReq.COINMARKETCAPAPI = "https://coinmarketcap-nexuist.rhcloud.com/api/";
ajaxReq.config = {
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	}
};
ajaxReq.getCurrentBlock = function(isClassic, callback) {
	this.post({
		currentBlock: '',
        isClassic: isClassic
	}, callback);
}
ajaxReq.getBalance = function(addr, isClassic, callback) {
	this.post({
		balance: addr,
        isClassic: isClassic
	}, callback);
}
ajaxReq.getTransactionData = function(addr, isClassic, callback) {
	this.post({
		txdata: addr,
        isClassic: isClassic
	}, callback);
}
ajaxReq.sendRawTx = function(rawTx, isClassic, callback) {
	this.post({
		rawtx: rawTx,
        isClassic: isClassic
	}, callback);
}
ajaxReq.getEstimatedGas = function(txobj, isClassic, callback) {
	this.post({
		estimatedGas: txobj,
        isClassic: isClassic
	}, callback);
}
ajaxReq.getEthCall = function(txobj, isClassic, callback) {
	this.post({
		ethCall: txobj,
        isClassic: isClassic
	}, callback);
}
ajaxReq.getTraceCall = function(txobj, isClassic, callback) {
	this.post({
		traceCall: txobj,
        isClassic: isClassic
	}, callback);
}
ajaxReq.post = function(data, callback) {
    this.http.post(this.SERVERURL, this.postSerializer(data), this.config).then(function(data) {
		callback(data.data);
	});
}
ajaxReq.getETHvalue = function(callback) {
	var prefix = "eth";
	this.http.get(this.COINMARKETCAPAPI + prefix).then(function(data) {
		data = data['data']['price'];
		var priceObj = {
			usd: data['usd'].toFixed(6),
			eur: data['eur'].toFixed(6),
			btc: data['btc'].toFixed(6)
		};
		callback(priceObj);
	});
}
module.exports = ajaxReq;
