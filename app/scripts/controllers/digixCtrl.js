'use strict';
var digixCtrl = function($scope, $sce, walletService) {
	new Modal(document.getElementById('sendTransaction'));
	walletService.wallet = null;
	walletService.password = '';
	$scope.showSend = true;
	$scope.showRaw = false;
	$scope.digixContract = "0xf0160428a8552ac9bb7e050d90eeade4ddd52843";
	$scope.tokenContract = "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a";
	$scope.badgeContract = "0x54bda709fed875224eae569bb6817d96ef7ed9ad";
	$scope.digixUserInfo = "0x1959a002";
	$scope.digixClaim = "0x4e71d92d";
	$scope.digixTransfer = "0xa9059cbb";
	$scope.balanceOf = "0x70a08231";
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
		var userInfo = ethFuncs.getDataObj($scope.digixContract, $scope.digixUserInfo, [ethFuncs.getNakedAddress($scope.wallet.getAddressString())]);
		ajaxReq.getEthCall(userInfo, function(data) {
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
		var tokenBalance = ethFuncs.getDataObj($scope.tokenContract, $scope.balanceOf, [ethFuncs.getNakedAddress($scope.wallet.getAddressString())]);
		ajaxReq.getEthCall(tokenBalance, function(data) {
			if (data.error) {
				$scope.etherBalance = data.msg;
			} else {
				$scope.tokenBalance = new BigNumber(data.data).div(1000000000).toString();
			}
		});
		var badgeBalance = ethFuncs.getDataObj($scope.badgeContract, $scope.balanceOf, [ethFuncs.getNakedAddress($scope.wallet.getAddressString())]);
		ajaxReq.getEthCall(badgeBalance, function(data) {
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
	$scope.generateTx = function(){
	   uiFuncs.generateTx($scope,$sce);
    }
	$scope.sendTx = function() {
		uiFuncs.sendTx($scope,$sce);
	}
};
module.exports = digixCtrl;
