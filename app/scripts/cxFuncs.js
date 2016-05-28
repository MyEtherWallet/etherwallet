'use strict';
var cxFuncs = function() {}
cxFuncs.storage = chrome.storage.sync;
cxFuncs.getAllNickNames = function(callback) {
	var nickNames = [];
	this.storage.get(null, function(items) {
		for (var key in items) {
			if (items.hasOwnProperty(key)) {
				var tobj = JSON.parse(items[key]);
				if (tobj.type == 'wallet' || tobj.type == 'watchOnly') {
				    nickNames.push(tobj.nick);
                    nickNames.push(key);
                }
			}
		}
		callback(nickNames);
	});
}
cxFuncs.addWalletToStorage = function(address, encStr, nickname, callback) {
	nickname = nickname.replace(/(<([^>]+)>)/ig, "");
	var value = {
		nick: nickname,
		priv: encStr,
		type: 'wallet'
	};
	var keyname = ethUtil.toChecksumAddress(address);
	var obj = {};
	obj[keyname] = JSON.stringify(value);
	this.storage.set(obj, callback);
}
cxFuncs.addWatchOnlyAddress = function(address, nickname, callback) {
	nickname = nickname.replace(/(<([^>]+)>)/ig, "");
	var value = {
		nick: nickname,
		type: 'watchOnly'
	};
	var keyname = ethUtil.toChecksumAddress(address);;
	var obj = {};
	obj[keyname] = JSON.stringify(value);
	this.storage.set(obj, callback);
}
cxFuncs.getStorageArr = function(filter, callback) {
	var wallets = [];
	this.storage.get(null, function(items) {
		for (var key in items) {
			if (items.hasOwnProperty(key)) {
				var tobj = JSON.parse(items[key]);
				if (tobj.type == filter) {
					tobj['addr'] = key;
					wallets.push(tobj);
				}
			}
		}
		wallets.sort(function(a, b) {
			if (a.nick < b.nick) return -1;
			if (a.nick > b.nick) return 1;
			return 0;
		});
		callback(wallets);
	});
}
cxFuncs.getWalletsArr = function(callback) {
	this.getStorageArr('wallet', callback);
}
cxFuncs.getWatchOnlyArr = function(callback) {
	this.getStorageArr('watchOnly', callback);
}
cxFuncs.deleteAccount = function(address,callback){
    this.storage.remove(address,function(){
        callback(address);
    });
}
cxFuncs.editNickName = function(address,newNick, callback){
    newNick = newNick.replace(/(<([^>]+)>)/ig,"");
    this.storage.get(address, function(account) {
        var accountInfo = account[address];
        accountInfo = JSON.parse(accountInfo);
        accountInfo['nick'] = newNick;
        account[address] = JSON.stringify(accountInfo);
        cxFuncs.storage.set(account,function(){
            callback(newNick);
        });
    });
}
module.exports = cxFuncs;