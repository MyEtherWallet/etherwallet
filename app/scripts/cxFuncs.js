'use strict';
var cxFuncs = function() {}
cxFuncs.storage = chrome.storage.sync;
cxFuncs.getAllNickNames = function(callback){
    var nickNames = [];
    this.storage.get(null, function(items) {
        for (var key in items) {
            if (items.hasOwnProperty(key)) {
                var tobj = JSON.parse(items[key]);
                 if(tobj.type=='wallet')
                    nickNames.push(tobj.nick);
            }
        }
        callback(nickNames);
    });
}
cxFuncs.addWalletToStorage = function (address, encStr, nickname, callback){
    nickname = nickname.replace(/(<([^>]+)>)/ig,"");
    var value = {nick:nickname, priv:encStr, type:'wallet'};
    var keyname = address;
    var obj= {};
    obj[keyname] = JSON.stringify(value);
    this.storage.set(obj,callback);
}
cxFuncs.addWatchOnlyAddress = function(address, nickname, callback){
    nickname = nickname.replace(/(<([^>]+)>)/ig,"");
    var value = {nick:nickname, type:'watchOnly'};
    var keyname = address;
    var obj= {};
    obj[keyname] = JSON.stringify(value);
    this.storage.set(obj,callback);
}
module.exports = cxFuncs;