'use strict';
var quickSendCtrl = function($scope, $sce) {
	$scope.allWallets = [];
	$scope.selectedWallet = "";
	$scope.showConfirm = false;
	$scope.tx = {
		gasLimit: globalFuncs.defaultTxGasLimit,
		data: "",
		to: "",
		unit: "ether",
		value: "",
		nonce: null,
		gasPrice: null,
		donate: false
	}
	$scope.setAllWallets = function() {
		cxFuncs.getWalletsArr(function(wlts) {
			$scope.allWallets = wlts;
			$scope.updateBalance('allWallets');
		});
	};
	$scope.updateBalance = function(varWal) {
		for (var i = 0; i < $scope[varWal].length; i++) {
			$scope.setBalance($scope[varWal][i].addr, i, varWal);
		}
	};
	$scope.setBalance = function(address, id, varWal) {
		ajaxReq.getBalance(address, function(data) {
			if (data.error) {
				$scope[varWal][id].balance = data.msg;
			} else {
				$scope[varWal][id].balance = etherUnits.toEther(data.data.balance, 'wei');
				$scope[varWal][id].balanceR = new BigNumber($scope[varWal][id].balance).toPrecision(5);
			}
		});
	};
	$scope.validateAddress = function() {
		if (ethFuncs.validateEtherAddress($scope.tx.to)) {
			$scope.validateAddressStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[0]));
		} else {
			$scope.validateAddressStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[5]));
		}
	}
	$scope.transferAllBalance = function() {
		$scope.wallet = {};
		$scope.wallet.getAddressString = function() {
			return $scope.allWallets[$scope.selectedWallet].addr;
		}
        uiFuncs.transferAllBalance($scope.wallet.getAddressString(), $scope.tx.gasLimit, function(resp) {
			if (!resp.isError) {
				$scope.tx.unit = resp.unit;
				$scope.tx.value = resp.value;
			} else {
				$scope.validatetxView = $sce.trustAsHtml(resp.error);
			}
		});
	}
	$scope.prepTX = function() {
		try {
			if (!ethFuncs.validateEtherAddress($scope.tx.to)) throw globalFuncs.errorMsgs[5];
			else if (!globalFuncs.isNumeric($scope.tx.value) || parseFloat($scope.tx.value) < 0) throw globalFuncs.errorMsgs[0];
			$scope.showConfirm = true;
		} catch (e) {
			$scope.preptxView = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	}
	$scope.unlockAndSend = function() {
		try {
			$scope.decryptWallet();
			var txData = uiFuncs.getTxData($scope);
			uiFuncs.generateTx(txData, function(rawTx) {
				if (!rawTx.isError) {
					uiFuncs.sendTx(rawTx.signedTx, function(resp) {
						if (!resp.isError) {
							$scope.sendtxView = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[2] + "<br />" + resp.data + "<br /><a href='http://etherscan.io/tx/" + resp.data + "' target='_blank' rel='noopener'> ETH TX via EtherScan.io </a>"));
							$scope.setBalance();
						} else {
							$scope.sendtxView = $sce.trustAsHtml(globalFuncs.getDangerText(resp.error));
						}
					});
					$scope.validatetxView = $sce.trustAsHtml(globalFuncs.getDangerText(''));
				} else {
					$scope.validatetxView = $sce.trustAsHtml(globalFuncs.getDangerText(rawTx.error));
				}
			});
		} catch (e) {
			$scope.validatetxView = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	}
	$scope.decryptWallet = function() {
		$scope.wallet = null;
		$scope.validatetxView = "";
		$scope.wallet = Wallet.getWalletFromPrivKeyFile($scope.allWallets[$scope.selectedWallet].priv, $scope.password);
	};
	$scope.setAllWallets();
};
module.exports = quickSendCtrl;
