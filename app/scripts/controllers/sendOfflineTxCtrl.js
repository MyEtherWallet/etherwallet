'use strict';
var sendOfflineTxCtrl = function($scope, $sce, walletService) {
	walletService.wallet = null;
	walletService.password = '';
	$scope.showAdvance = false;
	$scope.showRaw = false;
	$scope.showWalletInfo = false;
	$scope.gasPriceDec = 0;
	$scope.nonceDec = 0;
	$scope.tx = {
		gasLimit: globalFuncs.defaultTxGasLimit,
		from: "",
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
	});
	$scope.getWalletInfo = function() {
		if (ethFuncs.validateEtherAddress($scope.tx.from)) {
			ajaxReq.getTransactionData($scope.tx.from, function(data) {
				if (data.error) throw data.msg;
				data = data.data;
				$scope.gasPriceDec = ethFuncs.hexToDecimal(ethFuncs.sanitizeHex(ethFuncs.addTinyMoreToGas(data.gasprice)));
				$scope.nonceDec = ethFuncs.hexToDecimal(data.nonce);
				$scope.showWalletInfo = true;
			});
		}
	}
	$scope.$watch('tx', function() {
		$scope.showRaw = false;
		$scope.sendTxStatus = "";
	}, true);
	$scope.validateAddress = function(address, status) {
		if (ethFuncs.validateEtherAddress(address)) {
			$scope[status] = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[0]));
		} else {
			$scope[status] = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[5]));
		}
	}
	$scope.generateTx = function() {
		try {
			if (!ethFuncs.validateEtherAddress($scope.tx.to)) throw globalFuncs.errorMsgs[5];
			else if (!globalFuncs.isNumeric($scope.tx.value) || parseFloat($scope.tx.value) < 0) throw globalFuncs.errorMsgs[7];
			else if (!globalFuncs.isNumeric($scope.gasPriceDec) || parseFloat($scope.gasPriceDec) <= 0) throw globalFuncs.errorMsgs[10];
			else if (!globalFuncs.isNumeric($scope.nonceDec) || parseFloat($scope.nonceDec) < 0) throw globalFuncs.errorMsgs[11];
			else if (!globalFuncs.isNumeric($scope.tx.gasLimit) || parseFloat($scope.tx.gasLimit) <= 0) throw globalFuncs.errorMsgs[8];
			else if (!ethFuncs.validateHexString($scope.tx.data)) throw globalFuncs.errorMsgs[9];
			var rawTx = {
				nonce: ethFuncs.sanitizeHex(ethFuncs.decimalToHex($scope.nonceDec)),
				gasPrice: ethFuncs.sanitizeHex(ethFuncs.decimalToHex($scope.gasPriceDec)),
				gasLimit: ethFuncs.sanitizeHex(ethFuncs.decimalToHex($scope.tx.gasLimit)),
				to: ethFuncs.sanitizeHex($scope.tx.to),
				value: ethFuncs.sanitizeHex(ethFuncs.decimalToHex(etherUnits.toWei($scope.tx.value, $scope.tx.unit))),
				data: ethFuncs.sanitizeHex($scope.tx.data)
			}
			var eTx = new ethUtil.Tx(rawTx);
			eTx.sign(new Buffer($scope.wallet.getPrivateKeyString(), 'hex'));
			$scope.rawTx = JSON.stringify(rawTx);
			$scope.signedTx = '0x' + eTx.serialize().toString('hex');
			$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(''));
		} catch (e) {
			$scope.showRaw = false;
			$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	}
    $scope.confirmSendTx =  function(){
        try {
            if($scope.signedTx=="" || !ethFuncs.validateHexString($scope.signedTx)) throw globalFuncs.errorMsgs[12];
            var eTx = new ethUtil.Tx($scope.signedTx);
            $scope.tx.to = '0x'+eTx.to.toString('hex');
            $scope.tx.value = eTx.value.toString('hex')!='' ? etherUnits.toEther('0x'+eTx.value.toString('hex'),'wei') : 0;
            $scope.tx.unit = 'ether';
            new Modal(document.getElementById('sendTransactionOffline')).open();
        } catch (e){
            $scope.offlineTxPublishStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
        }
    }
	$scope.sendTx = function() {
		new Modal(document.getElementById('sendTransactionOffline')).close();
		ajaxReq.sendRawTx($scope.signedTx, function(data) {
			if (data.error) {
				$scope.offlineTxPublishStatus = $sce.trustAsHtml(globalFuncs.getDangerText(data.msg));
			} else {
				$scope.offlineTxPublishStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[2] + " " + data.data));
			}
		});
	}
};
module.exports = sendOfflineTxCtrl;