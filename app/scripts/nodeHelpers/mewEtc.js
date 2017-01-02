'use strict';
var mewSrv = require('./mewServerTpl');
var mewEtc = new mewSrv();
mewEtc.post = function(data, callback) {
    data.isClassic = true;
    ajaxReq.http.post(this.SERVERURL, ajaxReq.postSerializer(data), this.config).then(function(data) {
        callback(data.data);
    },function(data){
        callback({ error: true, msg: "connection error", data: "" });
    });
}
module.exports = mewEtc;
