'use strict';
var mewSrv = require('./mewServerTpl');
var mewEth = new mewSrv();
mewEth.post = function(data, callback) {
	data.isClassic = false;
    ajaxReq.http.post(this.SERVERURL, ajaxReq.postSerializer(data), this.config).then(function(data) {
        callback(data.data);
    });
}
module.exports = mewEth;
