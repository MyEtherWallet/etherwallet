'use strict';
var theDaoCtrl = function($scope, $sce, walletService) {
	new Modal(document.getElementById('sendTransaction'));
	walletService.wallet = null;
	walletService.password = '';
	$scope.showAdvance = false;
	$scope.showRaw = false;
	$scope.slockitContract = "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413";
	$scope.slockitBalance = "0x70a08231";
	$scope.slockitSupply = "0x18160ddd";
	$scope.tx = {
		gasLimit: 100000,
		data: '',
		to: $scope.slockitContract,
		unit: "ether",
		value: 0,
		nonce: null,
		gasPrice: null,
		donate: false
	}
	$scope.token = {
		balance: 0,
		total: 0,
		totRaised: 0
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
		var userInfo = ethFuncs.getDataObj($scope.slockitContract, $scope.slockitBalance, [$scope.wallet.getAddressString()]);
		ajaxReq.getEthCall(userInfo, function(data) {
			if (data.error) {
				$scope.etherBalance = data.msg;
			} else {
				$scope.token.balance = new BigNumber(data.data).div(etherUnits.getValueOfUnit('milli') * 10).toString();
			}
		});
		var totSupply = ethFuncs.getDataObj($scope.slockitContract, $scope.slockitSupply, []);
		ajaxReq.getEthCall(totSupply, function(data) {
			if (data.error) {
				$scope.etherBalance = data.msg;
			} else {
				$scope.token.total = new BigNumber(data.data).toString();
			}
		});
		ajaxReq.getBalance($scope.slockitContract, function(data) {
			if (data.error) {
				$scope.etherBalance = data.msg;
			} else {
				$scope.token.totRaised = etherUnits.toEther(data.data.balance, 'wei');
			}
		});
	}
	$scope.$watch('tx', function() {
		$scope.showRaw = false;
		$scope.sendTxStatus = "";
	}, true);
	$scope.generateTx = function(){
	   uiFuncs.generateTx($scope,$sce);
    }
	$scope.sendTx = function() {
		uiFuncs.sendTx($scope,$sce);
	}
};
module.exports = theDaoCtrl;
