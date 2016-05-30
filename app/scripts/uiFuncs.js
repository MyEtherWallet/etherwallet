'use strict';
var uiFuncs = function() {}
uiFuncs.generateTx = function($scope, $sce, callback) {
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
            if($scope.autoSend){
                uiFuncs.sendTx($scope, $sce);
                $scope.autoSend = false;
            }
            if(callback !== undefined) callback();
		});
		$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(''));
	} catch (e) {
		$scope.showRaw = false;
		$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
	}
}
uiFuncs.sendTx = function($scope, $sce) {
    if(document.getElementById('sendTransaction')!=null)
        new Modal(document.getElementById('sendTransaction')).close();
	ajaxReq.sendRawTx($scope.signedTx, function(data) {
		if (data.error) {
			$scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(data.msg));
		} else {
			if( $scope.setBalance !== undefined ) $scope.setBalance();
			$scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[2] + " " + data.data));
		}
	});
}
uiFuncs.transferAllBalance = function($scope, $sce) {
	try {
		ajaxReq.getTransactionData($scope.wallet.getAddressString(), function(data) {
			if (data.error) throw data.msg;
			data = data.data;
			var gasPrice = new BigNumber(ethFuncs.sanitizeHex(ethFuncs.addTinyMoreToGas(data.gasprice))).times($scope.tx.gasLimit);
			var maxVal = new BigNumber(data.balance).minus(gasPrice);
			$scope.tx.unit = "ether";
			$scope.tx.value = etherUnits.toEther(maxVal, 'wei');
            $scope.tx.value = $scope.tx.value < 0 ? 0 : $scope.tx.value;
		});
	} catch (e) {
		$scope.showRaw = false;
		$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
	}
}
module.exports = uiFuncs;