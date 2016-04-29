'use strict';
var digixCtrl = function($scope, $sce, walletService) {
	new Modal(document.getElementById('sendTransaction'));
	walletService.wallet = null;
	walletService.password = '';
	$scope.showSend = true;
	$scope.showRaw = false;
	$scope.digixContract = "0xf0160428a8552ac9bb7e050d90eeade4ddd52843";
	$scope.digixUserInfo = "0x1959a002";
	$scope.digixClaim = "0x4e71d92d";
	$scope.digixTransfer = "0xa9059cbb";
	$scope.balanceOf = "0x70a08231";
	$scope.tokenContract = "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a";
	$scope.badgeContract = "0x54bda709fed875224eae569bb6817d96ef7ed9ad";
	$scope.tx = {
		gasLimit: globalFuncs.digixClaimTxGasLimit,
		data: $scope.digixClaim,
		to: $scope.digixContract,
		unit: "ether",
		value: 0,
		nonce: null,
		gasPrice: null,
		donate: false
	}
	$scope.tokenTx = {
		to: '',
		value: 0,
		unit: "dgd"
	}
	$scope.$watch(function() {
		if (walletService.wallet == null) return null;
		return walletService.wallet.getAddressString();
	}, function() {
		if (walletService.wallet == null) return;
		$scope.wallet = walletService.wallet;
		$scope.setBalance();
	});
	$scope.validateAddress = function(address, status) {
		if (ethFuncs.validateEtherAddress(address)) {
			$scope[status] = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[0]));
		} else {
			$scope[status] = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[5]));
		}
	}
	$scope.setBalance = function() {
		var tUserInfo = {
			to: $scope.digixContract,
			data: $scope.digixUserInfo
		};
		ajaxReq.getBalance($scope.wallet.getAddressString(), function(data) {
			if (data.error) {
				$scope.etherBalance = data.msg;
			} else {
				$scope.etherBalance = etherUnits.toEther(data.data.balance, 'wei');
				ajaxReq.getETHvalue(function(data) {
					$scope.usdBalance = etherUnits.toFiat($scope.etherBalance, 'ether', data.usd);
					$scope.eurBalance = etherUnits.toFiat($scope.etherBalance, 'ether', data.eur);
					$scope.btcBalance = etherUnits.toFiat($scope.etherBalance, 'ether', data.btc);
				});
			}
		});
		tUserInfo.data = tUserInfo.data + ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.wallet.getAddressString()), 64);
		ajaxReq.getEthCall(tUserInfo, function(data) {
			if (data.error) {
				$scope.etherBalance = data.msg;
			} else {
				var digixObj = $scope.processDigixInfo(data.data);
				$scope.centsTotal = digixObj.centstotal;
				$scope.weiTotal = digixObj.weitotal;
				$scope.shareTotal = digixObj.share;
				$scope.badgesTotal = digixObj.badges;
				$scope.claimedTotal = digixObj.claimed.toString();
			}
		});
		tUserInfo = {
			data: $scope.balanceOf + ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.wallet.getAddressString()), 64),
			to: $scope.tokenContract
		};
		ajaxReq.getEthCall(tUserInfo, function(data) {
			if (data.error) {
				$scope.etherBalance = data.msg;
			} else {
				$scope.tokenBalance = new BigNumber(data.data).div(1000000000).toString();
			}
		});
		var badgeInfo = {
			data: $scope.balanceOf + ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.wallet.getAddressString()), 64),
			to: $scope.badgeContract
		};
		ajaxReq.getEthCall(badgeInfo, function(data) {
			if (data.error) {
				$scope.etherBalance = data.msg;
			} else {
				$scope.badgeBalance = new BigNumber(data.data).toString();
			}
		});
	}
	$scope.processDigixInfo = function(data) {
		data = data.replace('0x', '');
		var values = data.match(/.{1,64}/g);
		var digixObj = {
			centstotal: new BigNumber('0x' + values[0]).div(100).toString(),
			weitotal: new BigNumber('0x' + values[1]).div(etherUnits.getValueOfUnit('ether')).toString(),
			share: new BigNumber('0x' + values[2]).div(etherUnits.getValueOfUnit('gwei')).toString(),
			badges: new BigNumber('0x' + values[3]).toString(),
			claimed: new BigNumber('0x' + values[4]).toString() == '1'
		};
		return digixObj;
	}
	$scope.$watch('tx', function() {
		$scope.showRaw = false;
		$scope.sendTxStatus = "";
	}, true);
	$scope.$watch('showSend', function() {
		$scope.showRaw = false;
		$scope.sendTxStatus = "";
		if (!$scope.showSend) {
			$scope.tx.data = $scope.digixClaim;
			$scope.tx.to = $scope.digixContract;
			$scope.tx.gasLimit = globalFuncs.digixClaimTxGasLimit;
		}
	});
	$scope.generateTokenTx = function() {
		try {
			if (!ethFuncs.validateEtherAddress($scope.tokenTx.to)) throw globalFuncs.errorMsgs[5];
			else if (!globalFuncs.isNumeric($scope.tokenTx.value) || parseFloat($scope.tokenTx.value) < 0) throw globalFuncs.errorMsgs[7];
			else if ($scope.tokenTx.unit == "dgd" && new BigNumber($scope.tokenTx.value).greaterThan(new BigNumber($scope.tokenBalance))) throw globalFuncs.errorMsgs[7];
			else if ($scope.tokenTx.unit == "dgdb" && new BigNumber($scope.tokenTx.value).greaterThan(new BigNumber($scope.badgeBalance))) throw globalFuncs.errorMsgs[7];
			var value = 0;
			if ($scope.tokenTx.unit == "dgd") {
				value = new BigNumber($scope.tokenTx.value).times(etherUnits.getValueOfUnit('gwei')).toString(16);
				$scope.tx.to = $scope.tokenContract;
			} else {
				value = new BigNumber($scope.tokenTx.value).toString(16);
				$scope.tx.to = $scope.badgeContract;
			}
			value = ethFuncs.padLeft(value, 64);
			var toAdd = ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.tokenTx.to), 64);
			$scope.tx.data = $scope.digixTransfer + toAdd + value;
			$scope.tx.value = 0;
			$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(''));
			$scope.generateTx();
		} catch (e) {
			$scope.showRaw = false;
			$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	}
	$scope.generateTx = function() {
		try {
			if (!ethFuncs.validateEtherAddress($scope.tx.to)) throw globalFuncs.errorMsgs[5];
			else if (!globalFuncs.isNumeric($scope.tx.value) || parseFloat($scope.tx.value) < 0) throw globalFuncs.errorMsgs[7];
			else if (!globalFuncs.isNumeric($scope.tx.gasLimit) || parseFloat($scope.tx.gasLimit) <= 0) throw globalFuncs.errorMsgs[8];
			else if (!ethFuncs.validateHexString($scope.tx.data)) throw globalFuncs.errorMsgs[9];
			ajaxReq.getTransactionData($scope.wallet.getAddressString(), function(data) {
				if (data.error) throw data.msg;
				data = data.data;
				var rawTx = {
					nonce: ethFuncs.sanitizeHex(data.nonce),
					gasPrice: ethFuncs.sanitizeHex(ethFuncs.addTinyMoreToGas(data.gasprice)),
					gasLimit: ethFuncs.sanitizeHex(ethFuncs.decimalToHex($scope.tx.gasLimit)),
					to: ethFuncs.sanitizeHex($scope.tx.to),
					value: ethFuncs.sanitizeHex(ethFuncs.decimalToHex(etherUnits.toWei($scope.tx.value, $scope.tx.unit))),
					data: ethFuncs.sanitizeHex($scope.tx.data)
				}
				var eTx = new ethUtil.Tx(rawTx);
				eTx.sign(new Buffer($scope.wallet.getPrivateKeyString(), 'hex'));
				$scope.rawTx = JSON.stringify(rawTx);
				$scope.signedTx = '0x' + eTx.serialize().toString('hex');
				$scope.showRaw = true;
			});
			$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(''));
		} catch (e) {
			$scope.showRaw = false;
			$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	}
	$scope.sendTx = function() {
		new Modal(document.getElementById('sendTransaction')).close();
		ajaxReq.sendRawTx($scope.signedTx, function(data) {
			if (data.error) {
				$scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(data.msg));
			} else {
				$scope.setBalance();
				$scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[2] + " " + data.data));
			}
		});
	}
	$scope.transferAllBalance = function() {
		try {
			ajaxReq.getTransactionData($scope.wallet.getAddressString(), function(data) {
				if (data.error) throw data.msg;
				data = data.data;
				var gasPrice = new BigNumber(ethFuncs.sanitizeHex(ethFuncs.addTinyMoreToGas(data.gasprice))).times($scope.tx.gasLimit);
				var maxVal = new BigNumber(data.balance).minus(gasPrice);
				$scope.tx.unit = "ether";
				$scope.tx.value = etherUnits.toEther(maxVal, 'wei');
			});
		} catch (e) {
			$scope.showRaw = false;
			$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	}
};
module.exports = digixCtrl;
