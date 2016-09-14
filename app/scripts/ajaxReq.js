'use strict';
var http;
var ajaxReq = function() {}
ajaxReq.http = null;
ajaxReq.postSerializer = null;
ajaxReq.SERVERURL = "https://rpc.myetherwallet.com/api.mew";
ajaxReq.COINMARKETCAPAPI = "https://coinmarketcap-nexuist.rhcloud.com/api/";
ajaxReq.pendingPosts = [];
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
ajaxReq.sendRawTx = function(rawTx, callback) {
	this.post({
		rawtx: rawTx,
        isClassic: false
	}, callback);
}
ajaxReq.sendClassicRawTx = function(rawTx, callback) {
	this.post({
		rawtx: rawTx,
        isClassic: true
	}, callback);
}
ajaxReq.getEstimatedGas = function(txobj, callback) {
	this.post({
		estimatedGas: txobj,
        isClassic: false
	}, callback);
}
ajaxReq.getClassicEstimatedGas = function(txobj, callback) {
	this.post({
		estimatedGas: txobj,
        isClassic: true
	}, callback);
}
ajaxReq.getEthCall = function(txobj, callback) {
	this.post({
		ethCall: txobj,
        isClassic: false
	}, callback);
}
ajaxReq.getClassicEthCall = function(txobj, callback) {
	this.post({
		ethCall: txobj,
        isClassic: true
	}, callback);
}
ajaxReq.getTraceCall = function(txobj, isClassic, callback) {
	this.post({
		traceCall: txobj,
        isClassic: isClassic
	}, callback);
}
ajaxReq.queuePost = function() {
	var data = this.pendingPosts[0].data;
	var callback = this.pendingPosts[0].callback;
	this.http.post(this.SERVERURL, this.postSerializer(data), this.config).then(function(data) {
		callback(data.data);
		ajaxReq.pendingPosts.splice(0, 1);
		if (ajaxReq.pendingPosts.length > 0) ajaxReq.queuePost();
	});
}
ajaxReq.post = function(data, callback) {
	this.pendingPosts.push({
		data: data,
		callback: callback
	});
	if (this.pendingPosts.length == 1) this.queuePost();
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