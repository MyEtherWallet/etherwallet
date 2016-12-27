'use strict';
var mewServer = function() {}
mewServer.prototype.SERVERURL = "https://rpc.myetherwallet.com/api.mew";
mewServer.prototype.config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};
mewServer.prototype.getCurrentBlock = function(callback) {
    this.post({
        currentBlock: '',
    }, callback);
}
mewServer.prototype.getBalance = function(addr, callback) {
    this.post({
        balance: addr,
    }, callback);
}
mewServer.prototype.getTransactionData = function(addr, callback) {
    this.post({
        txdata: addr,
    }, callback);
}
mewServer.prototype.sendRawTx = function(rawTx, callback) {
    this.post({
        rawtx: rawTx,
    }, callback);
}
mewServer.prototype.getEstimatedGas = function(txobj, callback) {
    this.post({
        estimatedGas: txobj,
    }, callback);
}
mewServer.prototype.getEthCall = function(txobj, callback) {
    this.post({
        ethCall: txobj,
    }, callback);
}
mewServer.prototype.getTraceCall = function(txobj, callback) {
    this.post({
        traceCall: txobj,
    }, callback);
}
mewServer.prototype.post = function(data, callback) {
	//overide this
}
module.exports = mewServer;
