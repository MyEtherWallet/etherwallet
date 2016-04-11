'use strict';
var sendTxCtrl = function($scope, $sce, walletService) {
	new Modal(document.getElementById('sendTransaction'));
	walletService.wallet = null;
	walletService.password = '';
	$scope.showAdvance = false;
	$scope.showRaw = false;
	$scope.tx = {
		gasLimit: globalFuncs.defaultTxGasLimit,
		data: "",
		to: "",
		unit: "ether",
		value: '',
		nonce: null,
		gasPrice: null,
		donate: false
	}
	$scope.$watch(function() {
		if (walletService.wallet == null) return null;
		return walletService.wallet.getAddressString();
	}, function() {
		if (walletService.wallet == null) return;
		$scope.wallet = walletService.wallet;
		$scope.setBalance();
	});
	$scope.setBalance = function() {
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
	}
	$scope.$watch('tx', function() {
		$scope.showRaw = false;
		$scope.sendTxStatus = "";
	}, true);
	$scope.validateAddress = function() {
		if (ethFuncs.validateEtherAddress($scope.tx.to)) {
			$scope.validateAddressStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[0]));
		} else {
			$scope.validateAddressStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[5]));
		}
	}
	$scope.toggleShowAdvance = function() {
		$scope.showAdvance = !$scope.showAdvance;
	}
	$scope.onDonateClick = function() {
		$scope.tx.to = globalFuncs.donateAddress;
		$scope.tx.donate = true;
		$scope.validateAddress();
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
                  $scope.tx.value = etherUnits.toEther(maxVal,'wei');
			});
		} catch (e) {
			$scope.showRaw = false;
			$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	}
};
module.exports = sendTxCtrl;