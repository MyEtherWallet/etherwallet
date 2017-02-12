'use strict';
var http;
var ethPrice = function() {}
var getValue = function(arr, pair) {
    for (var i in arr)
        if (arr[i].pair == pair) return arr[i].rate;
}
ethPrice.getETHvalue = function(callback) {
    var BITYRATEAPI = "https://bity.com/api/v1/rate2/";
    ajaxReq.http.get(BITYRATEAPI).then(function(data) {
        data = data['data']['objects'];
        var priceObj = {
            usd: parseFloat(getValue(data,'ETHUSD')).toFixed(6),
            eur: parseFloat(getValue(data,'ETHEUR')).toFixed(6),
            btc: parseFloat(getValue(data,'ETHBTC')).toFixed(6),
            chf: parseFloat(getValue(data,'ETHCHF')).toFixed(6),
            rep: parseFloat(getValue(data,'ETHREP')).toFixed(6)
        };
        callback(priceObj);
    });
}
module.exports = ethPrice;
