'use strict';
var rpc = require('node-json-rpc');
var BN = require('bignumber.js');
var wait = require('wait.for');
var nodeInfo = require('./nodeIP.json');
var Response = function() {}
var clientConfigs = {
	client: {
		conns: 0,
		maxConns: 10000
	},
	clientClassic: {
		conns: 0,
		maxConns: 10000
	}
};
Response.client = new rpc.Client({
	port: 8545,
	host: nodeInfo.node_ip,
	path: '/',
	strict: true
});
Response.clientClassic = new rpc.Client({
	port: 8545,
	host: nodeInfo.node_classic_ip,
	path: '/',
	strict: true
});
Response.getResponse = function(method, data, isClassic, callback) {
	var client = isClassic ? "clientClassic" : "client";
	var timer = setInterval(function() {
		if (clientConfigs[client].conns < clientConfigs[client].maxConns) {
			clearInterval(timer);
            clientConfigs[client].conns++;
			Response[client].call({
				"jsonrpc": "2.0",
				"method": method,
				"params": data,
				"id": Math.floor(Math.random() * 10000000)
			}, function(err, res) {
                clientConfigs[client].conns--;
				if (err) callback(null, {
					error: true,
					data: err
				})
				else if (res && "error" in res) callback(null, {
					error: true,
					data: res.error.message
				});
				else callback(null, {
					error: false,
					data: res.result
				});
			});
		}
	}, 500);
}
Response.getResponseSync = function(method, data, isClassic) {
	var resp = wait.
	for (Response.getResponse, method, data, isClassic);
	if (resp.error) throw resp.data;
	return resp.data;
}
Response.getBalance = function(addr, isClassic) {
	return this.runInTryCatch(function(data) {
		addr = Response.formatAddress(addr);
		data.data = {
			address: addr,
			balance: new BN(Response.getResponseSync("eth_getBalance", [addr, "pending"], isClassic))
		};
	});
}
Response.getTraceCall = function(objCall, isClassic) {
	return this.runInTryCatch(function(data) {
		data.data = Response.getResponseSync("trace_call", [objCall, ["stateDiff", "trace", "vmTrace"]], isClassic);
	});
}
Response.getCurrentBlock = function(isClassic) {
	return this.runInTryCatch(function(data) {
		data.data = new BN(Response.getResponseSync("eth_blockNumber", [], isClassic));
	});
}
Response.getTransactionData = function(addr, isClassic) {
	var parent = this;
	return this.runInTryCatch(function(data) {
		addr = parent.formatAddress(addr);
		data.data = {
			address: addr,
			balance: new BN(Response.getResponseSync("eth_getBalance", [addr, "pending"], isClassic)),
			nonce: Response.getResponseSync("eth_getTransactionCount", [addr, "pending"], isClassic),
			gasprice: Response.getResponseSync("eth_gasPrice", [], isClassic)
		};
	});
}
Response.sendRawTransaction = function(rawTx, isClassic) {
	var parent = this;
	return this.runInTryCatch(function(data) {
		data.data = Response.getResponseSync("eth_sendRawTransaction", [rawTx], isClassic);
	});
}
Response.getEthCall = function(txObj, isClassic) {
	var parent = this;
	return this.runInTryCatch(function(data) {
		data.data = Response.getResponseSync("eth_call", [txObj, "pending"], isClassic);
	});
}
Response.getEstimatedGas = function(txObj, isClassic) {
	var parent = this;
	return this.runInTryCatch(function(data) {
		data.data = Response.getResponseSync("eth_estimateGas", [txObj], isClassic);
	});
}
Response.getErrorResponse = function(e) {
	var data = this.getDefaultResponse();
	data.error = true;
	data.msg = e;
	return JSON.stringify(data);
}
Response.getDefaultResponse = function() {
	return {
		"error": false,
		"msg": "",
		"data": ""
	};
}
Response.runInTryCatch = function(func) {
	var data = this.getDefaultResponse();
	try {
		func(data);
	} catch (e) {
		data.error = true;
		data.msg = e.toString();
	}
	return JSON.stringify(data);
}
Response.formatAddress = function(addr) {
	if (addr.substring(0, 2) == "0x") return addr;
	return "0x" + addr;
}
module.exports = Response;