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
		privKey: $scope.wallet.getPrivateKeyString()
	};
}
uiFuncs.generateClassicTx = function(txData, callback) {
	try {
		if (!ethFuncs.validateEtherAddress(txData.to)) throw globalFuncs.errorMsgs[5];
		else if (!globalFuncs.isNumeric(txData.value) || parseFloat(txData.value) < 0) throw globalFuncs.errorMsgs[7];
		else if (!globalFuncs.isNumeric(txData.gasLimit) || parseFloat(txData.gasLimit) <= 0) throw globalFuncs.errorMsgs[8];
		else if (!ethFuncs.validateHexString(txData.data)) throw globalFuncs.errorMsgs[9];
		ajaxReq.getClassicTransactionData(txData.from, function(data) {
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
			eTx.sign(new Buffer(txData.privKey, 'hex'));
			rawTx.rawTx = JSON.stringify(rawTx);
			rawTx.signedTx = '0x' + eTx.serialize().toString('hex');
			rawTx.isError = false;
			if (callback !== undefined) callback(rawTx);
		});
	} catch (e) {
		if (callback !== undefined) callback({
			isError: true,
			error: e
		});
	}
}
uiFuncs.sendClassicTx = function(signedTx, callback) {
	ajaxReq.sendClassicRawTx(signedTx, function(data) {
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
uiFuncs.generateTx = function(txData, callback) {
	try {
		if (!ethFuncs.validateEtherAddress(txData.to)) throw globalFuncs.errorMsgs[5];
		else if (!globalFuncs.isNumeric(txData.value) || parseFloat(txData.value) < 0) throw globalFuncs.errorMsgs[7];
		else if (!globalFuncs.isNumeric(txData.gasLimit) || parseFloat(txData.gasLimit) <= 0) throw globalFuncs.errorMsgs[8];
		else if (!ethFuncs.validateHexString(txData.data)) throw globalFuncs.errorMsgs[9];
		ajaxReq.getTransactionData(txData.from, function(data) {
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
			eTx.sign(new Buffer(txData.privKey, 'hex'));
			rawTx.rawTx = JSON.stringify(rawTx);
			rawTx.signedTx = '0x' + eTx.serialize().toString('hex');
			rawTx.isError = false;
			if (callback !== undefined) callback(rawTx);
		});
	} catch (e) {
		if (callback !== undefined) callback({
			isError: true,
			error: e
		});
	}
}
uiFuncs.sendTx = function(signedTx, callback) {
	ajaxReq.sendRawTx(signedTx, function(data) {
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
uiFuncs.transferAllBalance = function(fromAdd, gasLimit, callback) {
	try {
		ajaxReq.getTransactionData(fromAdd, function(data) {
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