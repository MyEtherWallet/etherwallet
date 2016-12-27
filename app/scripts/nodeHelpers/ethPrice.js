'use strict';
var http;
var ethPrice = function() {}
ethPrice.getETHvalue = function(callback) {
	var COINMARKETCAPAPI = "https://coinmarketcap-nexuist.rhcloud.com/api/";
	var prefix = "eth";
	ajaxReq.http.get(COINMARKETCAPAPI + prefix).then(function(data) {
		data = data['data']['price'];
		var priceObj = {
			usd: data['usd'].toFixed(6),
			eur: data['eur'].toFixed(6),
			btc: data['btc'].toFixed(6)
		};
		callback(priceObj);
	});
}
module.exports = ethPrice;
