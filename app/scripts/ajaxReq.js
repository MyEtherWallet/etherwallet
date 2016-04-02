'use strict';
var http;
var ajaxReq = function() {}
ajaxReq.http = null;
ajaxReq.postSerializer = null;
ajaxReq.SERVERURL = "https://rpc.myetherwallet.com/api.php";
ajaxReq.COINMARKETCAPAPI = "https://coinmarketcap-nexuist.rhcloud.com/api/";
ajaxReq.config = {
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	}
};
ajaxReq.getBalance = function(addr, callback) {
	this.post({
		balance: addr
	}, callback);
}
ajaxReq.getTransactionData = function(addr, callback) {
	this.post({
		txdata: addr
	}, callback);
}
ajaxReq.sendRawTx = function(rawTx, callback) {
	this.post({
		rawtx: rawTx
	}, callback);
}
ajaxReq.getEstimatedGas = function(txobj, callback) {
	this.post({
		estimatedGas: txobj
	}, callback);
}
ajaxReq.getEthCall = function(txobj, callback) {
	this.post({
		ethCall: txobj
	}, callback);
}
ajaxReq.post = function (data, callback) {
	this.http.post(this.SERVERURL, this.postSerializer(data), this.config).then(function(data) {
		callback(data.data)
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