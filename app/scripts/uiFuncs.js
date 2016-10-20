'use strict';
var uiFuncs = function() {}
uiFuncs.getTxData = function($scope) {
	return {
		to: $scope.tx.to,
		value: $scope.tx.value,
		unit: $scope.tx.unit,
		gasLimit: $scope.tx.gasLimit,
		data: $scope.tx.data,
		from: $scope.wallet.getAddressString(),
		privKey: $scope.wallet.getPrivateKeyString(),
		path: $scope.wallet.getPath(),
		hwType: $scope.wallet.getHWType(),
		hwTransport: $scope.wallet.getHWTransport()
	};
}
uiFuncs.isTxDataValid = function(txData) {
	if (txData.to != "0xCONTRACT" && !ethFuncs.validateEtherAddress(txData.to)) throw globalFuncs.errorMsgs[5];
	else if (!globalFuncs.isNumeric(txData.value) || parseFloat(txData.value) < 0) throw globalFuncs.errorMsgs[7];
	else if (!globalFuncs.isNumeric(txData.gasLimit) || parseFloat(txData.gasLimit) <= 0) throw globalFuncs.errorMsgs[8];
	else if (!ethFuncs.validateHexString(txData.data)) throw globalFuncs.errorMsgs[9];
	if (txData.to == "0xCONTRACT") txData.to = '';
}
uiFuncs.signTxLedger = function(eTx, rawTx, txData, callback) {
	var txToSign = ethUtil.rlp.encode(eTx.raw.slice(0, 6));
	var app = new ledgerEth(txData.hwTransport);
	var localCallback = function(result, error) {
		if (typeof error != "undefined") {
			if (callback !== undefined) callback({
				isError: true,
				error: error
			});
			return;
		}
		rawTx.v = "0x" + result['v'];
		rawTx.r = "0x" + result['r'];
		rawTx.s = "0x" + result['s'];		
		eTx = new ethUtil.Tx(rawTx);
		rawTx.rawTx = JSON.stringify(rawTx);
		rawTx.signedTx = '0x' + eTx.serialize().toString('hex');
		rawTx.isError = false;
		if (callback !== undefined) callback(rawTx);
	}
	app.signTransaction(txData.path, txToSign.toString('hex'), localCallback);
}
uiFuncs.generateTx = function(txData, isClassic, callback) {
	try {
		uiFuncs.isTxDataValid(txData);
		ajaxReq.getTransactionData(txData.from, isClassic, function(data) {
			if (data.error) throw data.msg;
			data = data.data;
			var rawTx = {
				nonce: ethFuncs.sanitizeHex(data.nonce),
				gasPrice: ethFuncs.sanitizeHex(ethFuncs.addTinyMoreToGas(data.gasprice)),
				gasLimit: ethFuncs.sanitizeHex(ethFuncs.decimalToHex(txData.gasLimit)),
				to: ethFuncs.sanitizeHex(txData.to),
				value: ethFuncs.sanitizeHex(ethFuncs.decimalToHex(etherUnits.toWei(txData.value, txData.unit))),
				data: ethFuncs.sanitizeHex(txData.data)
			}
			var eTx = new ethUtil.Tx(rawTx);
			if ((typeof txData.hwType != "undefined") && (txData.hwType == "ledger")) {
				uiFuncs.signTxLedger(eTx, rawTx, txData, callback);
			}
			else {
				eTx.sign(new Buffer(txData.privKey, 'hex'));
				rawTx.rawTx = JSON.stringify(rawTx);
				rawTx.signedTx = '0x' + eTx.serialize().toString('hex');
				rawTx.isError = false;
				if (callback !== undefined) callback(rawTx);
			}
		});
	} catch (e) {
		if (callback !== undefined) callback({
			isError: true,
			error: e
		});
	}
}
uiFuncs.sendTx = function(signedTx, isClassic, callback) {
	ajaxReq.sendRawTx(signedTx, isClassic, function(data) {
		var resp = {};
		if (data.error) {
			resp = {
				isError: true,
				error: data.msg
			};
		} else {
			resp = {
				isError: false,
				data: data.data
			};
		}
		if (callback !== undefined) callback(resp);
	});
}
uiFuncs.transferAllBalance = function(fromAdd, gasLimit, isClassic, callback) {
	try {
		ajaxReq.getTransactionData(fromAdd, isClassic, function(data) {
			if (data.error) throw data.msg;
			data = data.data;
			var gasPrice = new BigNumber(ethFuncs.sanitizeHex(ethFuncs.addTinyMoreToGas(data.gasprice))).times(gasLimit);
			var maxVal = new BigNumber(data.balance).minus(gasPrice);
			maxVal = etherUnits.toEther(maxVal, 'wei') < 0 ? 0 : etherUnits.toEther(maxVal, 'wei');
			if (callback !== undefined) callback({
				isError: false,
				unit: "ether",
				value: maxVal
			});
		});
	} catch (e) {
		if (callback !== undefined) callback({
			isError: true,
			error: e
		});
	}
}
module.exports = uiFuncs;
