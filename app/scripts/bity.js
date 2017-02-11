'use strict';
var bity = function() {
    var _this = this;
    _this.refreshRates();
}
bity.SERVERURL = "https://bity.myetherapi.com";
bity.prototype.refreshRates = function() {
    var _this = this;
    bity.get('/rates', function(data) {
        if (data.error) throw data.msg;
        _this.curRate = {};
        data.data.forEach(function(pair) {
            _this.curRate[pair.pair] = parseFloat(pair.rate_we_buy);
            _this.curRate[pair.pair.substring(3) + pair.pair.substring(0, 3)] = parseFloat((1.0 / pair.rate_we_sell).toFixed(6));
        });
    });
}
bity.get = function(path, callback) {
    ajaxReq.http.get(this.SERVERURL + path).then(function(data) {
        callback(data.data);
    }, function(data) {
        callback({ error: true, msg: "connection error", data: "" });
    });
}
module.exports = bity;
