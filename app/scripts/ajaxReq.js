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
	this.http.post(this.SERVERURL, this.postSerializer({
		balance: addr
	}), this.config).then(function(data){callback(data.data)});
}
ajaxReq.getTransactionData = function(addr, callback) {
	this.http.post(this.SERVERURL, this.postSerializer({
		txdata: addr
	}), this.config).then(function(data){callback(data.data)});
}
ajaxReq.sendRawTx = function(rawTx, callback) {
	this.http.post(this.SERVERURL, this.postSerializer({
		rawtx: rawTx
	}), this.config).then(function(data){callback(data.data)});
}
ajaxReq.getEstimatedGas = function(txobj, callback) {
	this.http.post(this.SERVERURL, this.postSerializer({
		estimatedGas: txobj
	}), this.config).then(function(data){callback(data.data)});
}
ajaxReq.getEthCall = function(txobj, callback) {
	this.http.post(this.SERVERURL, this.postSerializer({
		ethCall: txobj
	}), this.config).then(function(data){callback(data.data)});
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