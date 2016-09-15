'use strict';
var sendTxCtrl = function($scope, $sce, walletService) {
	$scope.sendTxModal = new Modal(document.getElementById('sendTransaction'));
	$scope.txInfoModal = new Modal(document.getElementById('txInfoModal'));
	walletService.wallet = null;
	walletService.password = '';
	$scope.showAdvance = false;
	$scope.showRaw = false;
	$scope.replayContract = "0xaa1a6e3e6ef20068f7f8d8c835d2d22fd5116444";
	$scope.splitHex = "0x0f2c9329";
    $scope.Validator = Validator;
	$scope.tx = {
		gasLimit: globalFuncs.urlGet('gaslimit') == null ? globalFuncs.defaultTxGasLimit : globalFuncs.urlGet('gaslimit'),
		data: globalFuncs.urlGet('data') == null ? "" : globalFuncs.urlGet('data'),
		to: globalFuncs.urlGet('to') == null ? "" : globalFuncs.urlGet('to'),
		unit: "ether",
		value: globalFuncs.urlGet('value') == null ? "" : globalFuncs.urlGet('value'),
		nonce: null,
		gasPrice: null,
		donate: false,
		sendMode: globalFuncs.urlGet('sendMode') == null ? 0 : globalFuncs.urlGet('value')
	}
	globalFuncs.urlGet('gaslimit') == null ? '' : $scope.showAdvance = true
	globalFuncs.urlGet('data') == null ? '' : $scope.showAdvance = true
	$scope.$watch(function() {
		if (walletService.wallet == null) return null;
		return walletService.wallet.getAddressString();
	}, function() {
		if (walletService.wallet == null) return;
		$scope.wallet = walletService.wallet;
        $scope.wd = true;
		$scope.setBalance();
	});
    $scope.$watch('[tx.to,tx.value,tx.data,tx.sendMode]', function () {
        if($scope.Validator.isValidAddress($scope.tx.to)&&$scope.Validator.isPositiveNumber($scope.tx.value)&&$scope.Validator.isValidHex($scope.tx.data)){
            if($scope.estimateTimer) clearTimeout($scope.estimateTimer);
            $scope.estimateTimer = setTimeout(function(){
                $scope.estimateGasLimit();
            },500);
        }
    }, true);
    $scope.estimateGasLimit = function(){
        var estObj = {
            to: $scope.tx.to,
            from: $scope.wallet.getAddressString(),
            value: ethFuncs.sanitizeHex(ethFuncs.decimalToHex(etherUnits.toWei($scope.tx.value, $scope.tx.unit)))
        }
        if ($scope.tx.data!="") estObj.data = ethFuncs.sanitizeHex($scope.tx.data);
        if ($scope.tx.sendMode == 1) estObj.data = $scope.splitHex + ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.tx.to), 64) + ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.wallet.getAddressString()), 64);
        else if ($scope.tx.sendMode == 2) estObj.data = $scope.splitHex + ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.wallet.getAddressString()), 64) + ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.tx.to), 64);
        if ($scope.tx.sendMode != 0) estObj.to = $scope.replayContract;
        ethFuncs.estimateGas(estObj,$scope.tx.sendMode==2,function(data){
            if(!data.error) $scope.tx.gasLimit = data.data; 
        });
    }
	$scope.setBalance = function() {
		ajaxReq.getBalance($scope.wallet.getAddressString(), false, function(data) {
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
		ajaxReq.getBalance($scope.wallet.getAddressString(), true, function(data) {
			if (data.error) {
				$scope.etcBalance = data.msg;
			} else {
				$scope.etcBalance = etherUnits.toEther(data.data.balance, 'wei');
			}
		});
	}
	$scope.$watch('tx', function(newValue, oldValue) {
		$scope.showRaw = false;
		$scope.sendTxStatus = "";
		if (oldValue.sendMode!=newValue.sendMode && newValue.sendMode == 0) {
			$scope.tx.data = "";
			$scope.tx.gasLimit = globalFuncs.defaultTxGasLimit;
		}
	}, true);
	$scope.validateAddress = function() {
        return ethFuncs.validateEtherAddress($scope.tx.to)
	}
	$scope.toggleShowAdvance = function() {
		$scope.showAdvance = !$scope.showAdvance;
	}
	$scope.onDonateClick = function() {
		$scope.tx.to = globalFuncs.donateAddress;
		$scope.tx.value = "0.5";
		$scope.tx.donate = true;
	}
	$scope.generateTx = function() {
	   if (!ethFuncs.validateEtherAddress($scope.tx.to)) {
	       $scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[5]));
           return;
	   }
		var txData = uiFuncs.getTxData($scope);
		if ($scope.tx.sendMode != 0) {
			txData.to = $scope.replayContract;
			if ($scope.tx.sendMode == 1) txData.data = $scope.splitHex + ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.tx.to), 64) + ethFuncs.padLeft(ethFuncs.getNakedAddress(txData.from), 64);
			else if ($scope.tx.sendMode == 2) txData.data = $scope.splitHex + ethFuncs.padLeft(ethFuncs.getNakedAddress(txData.from), 64) + ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.tx.to), 64);
		}
		uiFuncs.generateTx(txData, $scope.tx.sendMode == 2, function(rawTx) {
			if (!rawTx.isError) {
				$scope.rawTx = rawTx.rawTx;
				$scope.signedTx = rawTx.signedTx;
				$scope.showRaw = true;
				$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(''));
			} else {
				$scope.showRaw = false;
				$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(rawTx.error));
			}
		});
	}
	$scope.sendTx = function() {
		$scope.sendTxModal.close();
		uiFuncs.sendTx($scope.signedTx, $scope.tx.sendMode == 2, function(resp) {
			if (!resp.isError) {
				$scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[2] + "<br />" + resp.data + "<br /><a href='http://etherscan.io/tx/" + resp.data + "' target='_blank'> ETH TX via EtherScan.io </a> & <a href='http://gastracker.io/tx/" + resp.data + "' target='_blank'> ETC TX via GasTracker.io</a>"));
				$scope.setBalance();
			} else {
				$scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(resp.error));
			}
		});
	}
	$scope.transferAllBalance = function() {
		uiFuncs.transferAllBalance($scope.wallet.getAddressString(), $scope.tx.gasLimit, $scope.tx.sendMode == 2, function(resp) {
			if (!resp.isError) {
				$scope.tx.unit = resp.unit;
				$scope.tx.value = resp.value;
			} else {
				$scope.showRaw = false;
				$scope.validateTxStatus = $sce.trustAsHtml(resp.error);
			}
		});
	}
};
module.exports = sendTxCtrl;
