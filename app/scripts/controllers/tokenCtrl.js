'use strict';
var tokenCtrl = function($scope, $sce, walletService) {
	$scope.sendTxModal = new Modal(document.getElementById('sendTransaction'));
	walletService.wallet = null;
	walletService.password = '';
	$scope.tokens = [{
		"address": "0xbb9bc244d798123fde783fcc1c72d3bb8c189413",
		"symbol": "DAO",
		"decimal": 16
	},
	{
		"address": "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
		"symbol": "DGD",
		"decimal": 9
	},
	{
		"address": "0xc66ea802717bfb9833400264dd12c2bceaa34a6d",
		"symbol": "MKR",
		"decimal": 18
	},
	{
		"address": "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
		"symbol": "UNICORN",
		"decimal": 0
	}];
	$scope.tokenTx = {
		to: '',
		value: 0,
		id: 0,
		gasLimit: 50000
	}
	$scope.$watch(function() {
		if (walletService.wallet == null) return null;
		return walletService.wallet.getAddressString();
	}, function() {
		if (walletService.wallet == null) return;
		$scope.wallet = walletService.wallet;
		$scope.setBalance();
		$scope.setTokens();
	});
	$scope.setTokens = function() {
	   	$scope.tokenObjs = [];
		for (var i = 0; i < $scope.tokens.length; i++) {
			$scope.tokenObjs.push(new Token($scope.tokens[i].address, $scope.wallet.getAddressString(), $scope.tokens[i].symbol, $scope.tokens[i].decimal));
		}
	}
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
	$scope.onDonateClick = function() {
		$scope.tokenTx.to = globalFuncs.donateAddress;
		$scope.tokenTx.value = "50";
		$scope.validateAddress();
	}
	$scope.validateAddress = function() {
		if (ethFuncs.validateEtherAddress($scope.tokenTx.to)) {
			$scope.validateAddressStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[0]));
		} else {
			$scope.validateAddressStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[5]));
		}
	}
	$scope.generateTokenTx = function() {
        var tokenData = $scope.tokenObjs[$scope.tokenTx.id].getData($scope.tokenTx.to,$scope.tokenTx.value);
        if(tokenData.isError){
            $scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(tokenData.error));
            return;
        }
        tokenData = tokenData.data;
		uiFuncs.generateTx({
			to: $scope.tokenObjs[$scope.tokenTx.id].getContractAddress(),
			value: 0,
			unit: 'ether',
			gasLimit: $scope.tokenTx.gasLimit,
			data: tokenData,
			from: $scope.wallet.getAddressString(),
			privKey: $scope.wallet.getPrivateKeyString()
		}, function(rawTx) {
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
		uiFuncs.sendTx($scope.signedTx, function(resp) {
			if (!resp.isError) {
				$scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[2] + "<a href='http://etherscan.io/tx/" + resp.data + "' target='_blank'>" + resp.data + "</a>"));
				$scope.setBalance();
			} else {
				$scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(resp.error));
			}
		});
	}
};
module.exports = tokenCtrl;