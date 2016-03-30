var stdTransactionGas = 21000;

function createTransaction(privkey, to, amountinwei, gasL, successcb, errorcb) {
	if (privkey.length != 64) {
		errorcb("Invalid Private key, try again");
		return;
	}
	if (!validateEtherAddress(to)) {
		errorcb("Invalid to Address, try again");
		return;
	}
	if (!$.isNumeric(amountinwei) || amountinwei <= 0) {
		errorcb("Invalid amount, try again");
		return;
	}
	var privateKey = new Buffer(privkey, 'hex');
	var address = strPrivateKeyToAddress(privkey);
	getTransactionData(address, function(data) {
		if (data.error) {
			errorcb("Error occurred: " + data.msg);
			return;
		}
		data = data.data;
		var nonce = padLeftEven(BNtoHex(new BigNumber(data.nonce)));
		var gasPrice = padLeftEven(BNtoHex(new BigNumber(data.gasprice).plus(1000000000).toDigits(2))); //adding extra 1gwei to be safer
		var gasLimit = padLeftEven(BNtoHex(new BigNumber(gasL))); //standard 21000 per transaction
		var value = padLeftEven(BNtoHex(new BigNumber(String(amountinwei))));
		var rawTx = {
			nonce: '0x' + nonce,
			gasPrice: '0x' + gasPrice,
			gasLimit: '0x' + gasLimit,
			to: to,
			value: '0x' + value,
			data: ''
		};
		var tx = new Tx(rawTx);
		tx.sign(privateKey);
		verifyUpFrontCost(rawTx, function(estimatedCost) {
			if (estimatedCost > data.balance) {
				errorcb("You dont have enough balance in your account to process is transaction");
				return
			}
			var serializedTx = '0x' + tx.serialize().toString('hex');
			var rdata = {
				raw: JSON.stringify(rawTx),
				signed: serializedTx
			}
			successcb(rdata);
		}, errorcb);
	});
}

function createTransactionFromRaw(rawObj, privkey, successcb, errorcb) {
	if (privkey.length != 64) {
		errorcb("Invalid Private key, try again");
		return;
	}
	if (!validateEtherAddress(rawObj.to)) {
		errorcb("Invalid Address, try again");
		return;
	}
	if (!$.isNumeric(rawObj.value) || rawObj.value < 0) { //
		errorcb("Invalid amount, try again");
		return;
	}
    if (!$.isNumeric(rawObj.nonce) || rawObj.nonce < 0) {
		errorcb("Invalid nonce, try again");
		return;
	}
    if (!$.isNumeric(rawObj.gasPrice) || rawObj.gasPrice <= 0) {
		errorcb("Invalid gas price, try again");
		return;
	}
    if (!$.isNumeric(rawObj.gasLimit) || rawObj.gasLimit <= 0) {
		errorcb("Invalid gas limit, try again");
		return;
	}
    if (rawObj.data!=''&&!/^[0-9A-F]+$/i.test(rawObj.data)) {
		errorcb("Invalid data, try again");
		return;
	}
	var privateKey = new Buffer(privkey, 'hex');
	var address = strPrivateKeyToAddress(privkey);
	var nonce = padLeftEven(BNtoHex(new BigNumber(rawObj.nonce)));
	var gasPrice = padLeftEven(BNtoHex(new BigNumber(rawObj.gasPrice)));
	var gasLimit = padLeftEven(BNtoHex(new BigNumber(rawObj.gasLimit)));
	var value = padLeftEven(BNtoHex(new BigNumber(String(rawObj.value))));
	var rawTx = {
		nonce: '0x' + nonce,
		gasPrice: '0x' + gasPrice,
		gasLimit: '0x' + gasLimit,
		to: rawObj.to,
		value: '0x' + value,
		data: rawObj.data=='' ? '' : '0x' + rawObj.data
	};
	var tx = new Tx(rawTx);
	tx.sign(privateKey);
	var serializedTx = '0x' + tx.serialize().toString('hex');
	var rdata = {
		raw: JSON.stringify(rawTx),
		signed: serializedTx,
        address: address
	}
	successcb(rdata);
}
function rawToTransaction(serializedTx){
    var tx = new Tx(serializedTx);
    var rawTx = {
		nonce: tx.nonce.toString('hex')=="" ? 0 : new BigNumber('0x'+tx.nonce.toString('hex')).toString(),
		gasPrice: tx.gasPrice.toString('hex')=="" ? 0 : new BigNumber('0x'+tx.gasPrice.toString('hex')).toString(),
		gasLimit: tx.gasLimit.toString('hex')=="" ? 0 : new BigNumber('0x'+tx.gasLimit.toString('hex')).toString(),
		to: '0x'+tx.to.toString('hex'),
		value: tx.value.toString('hex')=="" ? 0 : new BigNumber('0x'+tx.value.toString('hex')).toString(),
		data: tx.data.toString('hex')
	};
    return rawTx;
}
function verifyUpFrontCost(rawTx, successcb, errorcb) {
	getEstimatedGas(rawTx, function(data) {
		if (data.error) {
			errorcb("Error occurred: " + data.msg);
		} else {
			if (new BigNumber(formatHexString(data.data, 'hex')).greaterThan(new BigNumber(formatHexString(rawTx.gasLimit, 'hex')))) {
				errorcb("Gas limit is too low");
			} else {
				var gasPrice = new BigNumber(formatHexString(rawTx.gasPrice, 'hex')).times(new BigNumber(formatHexString(rawTx.gasLimit, 'hex')));
				successcb(gasPrice.plus(new BigNumber(formatHexString(rawTx.value, 'hex'))).toNumber());
			}
		}
	});
}

function getMaxSendAmount(address, gasL, successcb, errorcb) {
	getTransactionData(address, function(data) {
		if (data.error) {
			errorcb("Error occurred: " + data.msg);
			return;
		}
		data = data.data;
		var gasPrice = new BigNumber(data.gasprice).plus(1000000000).toDigits(2).times(gasL);
		var maxVal = new BigNumber(String(data.balance)).minus(gasPrice);
		if (maxVal.lessThan(0)) {
			errorcb("Not enough balance to send a transaction");
		} else {
			successcb(toEther(maxVal.toString(), 'wei'));
		}
	});
}

function sendTransaction(signedRawTx, successcb, errorcb) {
	sendRawTx(signedRawTx, function(data) {
		if (data.error) {
			errorcb("Error occurred: " + data.msg);
			return;
		}
		successcb(data.data);
	});
}

function BNtoHex(bn) {
	return bn.toString(16);
}

function padLeftEven(hex) {
	if (hex.length % 2 != 0) return '0' + hex;
	else
	return hex;
}

function formatHexString(hex, format) {
	if (format == 'hex') {
		if (hex.substring(0, 2) == '0x') return hex;
		else
		return '0x' + hex;
	} else if (format == 'raw') {
		if (hex.substring(0, 2) == '0x') return hex.substring(2);
		else
		return hex;
	}
}

function fiatToWei(number, pricePerEther) {
	var returnValue = new BigNumber(String(number)).div(pricePerEther).times(getValueOfUnit('ether')).round(0);
	return returnValue.toString(10);
}

function toFiat(number, unit, multi) {
	var returnValue = new BigNumber(toEther(number, unit)).times(multi).round(5);
	return returnValue.toString(10);
}

function toEther(number, unit) {
	var returnValue = new BigNumber(toWei(number, unit)).div(getValueOfUnit('ether'));
	return returnValue.toString(10);
}

function toWei(number, unit) {
	var returnValue = new BigNumber(String(number)).times(getValueOfUnit(unit));
	return returnValue.toString(10);
}

function getValueOfUnit(unit) {
	unit = unit ? unit.toLowerCase() : 'ether';
	var unitValue = unitMap[unit];
	if (unitValue === undefined) {
		throw new Error('This unit doesn\'t exists, please use the one of the following units' + JSON.stringify(unitMap, null, 2));
	}
	return new BigNumber(unitValue, 10);
}

function getBestEtherKnownUnit(amountInWei) {
	amountInWei = String(amountInWei);
	var curUnit = 'wei';
	var tAmount = new BigNumber(amountInWei);
	for (var key in knownUnitMap) {
		if (knownUnitMap.hasOwnProperty(key)) {
			if (new BigNumber(amountInWei).greaterThan(new BigNumber(knownUnitMap[key]))) {
				curUnit = key;
				tAmount = new BigNumber(amountInWei).div(new BigNumber(knownUnitMap[key]));
			}
		}
	}
	return {
		unit: curUnit,
		amount: tAmount.toDigits(10).toString(10)
	};
}
var knownUnitMap = {
	'wei': '1',
	'kwei': '1000',
	'gwei': '1000000000',
	'szabo': '1000000000000',
	'finney': '1000000000000000',
	'ether': '1000000000000000000'
};
var unitMap = {
	'wei': '1',
	'kwei': '1000',
	'ada': '1000',
	'femtoether': '1000',
	'mwei': '1000000',
	'babbage': '1000000',
	'picoether': '1000000',
	'gwei': '1000000000',
	'shannon': '1000000000',
	'nanoether': '1000000000',
	'nano': '1000000000',
	'szabo': '1000000000000',
	'microether': '1000000000000',
	'micro': '1000000000000',
	'finney': '1000000000000000',
	'milliether': '1000000000000000',
	'milli': '1000000000000000',
	'ether': '1000000000000000000',
	'kether': '1000000000000000000000',
	'grand': '1000000000000000000000',
	'einstein': '1000000000000000000000',
	'mether': '1000000000000000000000000',
	'gether': '1000000000000000000000000000',
	'tether': '1000000000000000000000000000000'
};