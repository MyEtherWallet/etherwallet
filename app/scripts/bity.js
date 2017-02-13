'use strict';
var bity = function() {}
bity.SERVERURL = "https://bity.myetherapi.com";
bity.decimals = 6;
bity.prototype.refreshRates = function(callback) {
    var _this = this;
    ajaxReq.getRates(function(data) {
        _this.curRate = {};
        data.forEach(function(pair) {
            _this.curRate[pair.pair] = parseFloat(pair.rate_we_buy);
            _this.curRate[pair.pair.substring(3) + pair.pair.substring(0, 3)] = parseFloat((1.0 / pair.rate_we_sell).toFixed(bity.decimals));
        });
        callback();
    });
}
bity.prototype.openOrder = function(orderInfo, callback) {
    var _this = this;
    bity.post('/order', orderInfo, callback);
}
bity.postConfig = {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
};
bity.get = function(path, callback) {
    ajaxReq.http.get(this.SERVERURL + path).then(function(data) {
        callback(data.data);
    }, function(data) {
        callback({ error: true, msg: "connection error", data: "" });
    });
}
bity.post = function(path, data, callback) {
    ajaxReq.http.post(this.SERVERURL + path, JSON.stringify(data), bity.postConfig).then(function(data) {
        callback(data.data);
    }, function(data) {
        callback({ error: true, msg: "connection error", data: "" });
    });
}
module.exports = bity;
