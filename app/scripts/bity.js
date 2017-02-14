'use strict';
var bity = function() {}
bity.SERVERURL = "https://bity.myetherapi.com";
bity.decimals = 6;
bity.ethExplorer = 'https://etherscan.io/tx/[[txHash]]';
bity.btcExplorer = 'https://blockchain.info/tx/[[txHash]]';
bity.validStatus = ["RCVE", "FILL", "CONF", "EXEC"];
bity.invalidStatus = ["CANC"];
bity.mainPairs = ['REP', 'ETH'];
bity.min = 0.01;
bity.max = 3;
bity.prototype.priceLoaded = false;
bity.prototype.refreshRates = function(callback) {
    var _this = this;
    ajaxReq.getRates(function(data) {
        _this.curRate = {};
        data.forEach(function(pair) {
            if (bity.mainPairs.indexOf(pair.pair.substring(3)) != -1) _this.curRate[pair.pair] = parseFloat(pair.rate_we_sell);
            else if (bity.mainPairs.indexOf(pair.pair.substring(0, 3)) != -1) _this.curRate[pair.pair] = parseFloat(pair.rate_we_buy);
            else _this.curRate[pair.pair] = parseFloat(pair.rate);
        });
        _this.priceLoaded = true;
        if (callback) callback();
    });
}
bity.prototype.openOrder = function(orderInfo, callback) {
    var _this = this;
    bity.post('/order', orderInfo, callback);
}
bity.prototype.getStatus = function(orderInfo, callback) {
    var _this = this;
    bity.post('/status', orderInfo, callback);
}
bity.prototype.requireLogin = function(callback) {
    if (this.token) callback();
    else this.login(callback);
}
bity.prototype.login = function(callback) {
    var _this = this;
    bity.post('/login', {}, function(data) {
        _this.token = data.data.token;
        if (callback) callback();
    });
}
bity.prototype.logout = function(callback) {
    var _this = this;
    bity.post('/logout', { token: _this.token }, function(data) {
        _this.token = null;
        if (callback) callback();
    });
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
