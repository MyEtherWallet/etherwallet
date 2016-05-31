'use strict';
var sendTxCtrl = function($scope, $sce, walletService) {
	new Modal(document.getElementById('sendTransaction'));
	walletService.wallet = null;
	walletService.password = '';
	$scope.showAdvance = false;
	$scope.showRaw = false;
	$scope.tx = {
		gasLimit: globalFuncs.urlGet('gaslimit') == null ? globalFuncs.defaultTxGasLimit : globalFuncs.urlGet('gaslimit'),
		data: globalFuncs.urlGet('data') == null ? "" : globalFuncs.urlGet('data'),
		to: globalFuncs.urlGet('to') == null ? "" : globalFuncs.urlGet('to'),
		unit: "ether",
		value: globalFuncs.urlGet('value') == null ? "" : globalFuncs.urlGet('value'),
		nonce: null,
		gasPrice: null,
		donate: false
	}

	globalFuncs.urlGet('gaslimit') == null ? '' : $scope.showAdvance = true
	globalFuncs.urlGet('data') == null ? '' : $scope.showAdvance = true

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
	$scope.generateTx = function(){
	   uiFuncs.generateTx($scope,$sce);
    }
	$scope.sendTx = function() {
		uiFuncs.sendTx($scope,$sce);
	}
	$scope.transferAllBalance = function() {
		uiFuncs.transferAllBalance($scope,$sce);
	}
};
module.exports = sendTxCtrl;
