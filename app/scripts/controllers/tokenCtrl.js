'use strict';
var tokenCtrl = function($scope, $sce, walletService) {
	$scope.sendTxModal = new Modal(document.getElementById('sendTransaction'));
	walletService.wallet = null;
	walletService.password = '';
	$scope.tokens = Token.popTokens;
	$scope.tokenTx = {
		to: '',
		value: 0,
		id: 0,
		gasLimit: 150000
	};
	$scope.localToken = {
		contractAdd: "",
		symbol: "",
		decimals: ""
	};
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
        var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
        for (var i = 0; i < storedTokens.length; i++) {
			$scope.tokenObjs.push(new Token(storedTokens[i].contractAddress, $scope.wallet.getAddressString(), globalFuncs.stripTags(storedTokens[i].symbol), storedTokens[i].decimal));
		}
        $scope.tokenTx.id = 0;
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
		var tokenData = $scope.tokenObjs[$scope.tokenTx.id].getData($scope.tokenTx.to, $scope.tokenTx.value);
		if (tokenData.isError) {
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
                $scope.tokenObjs[$scope.tokenTx.id].setBalance();
			} else {
				$scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(resp.error));
			}
		});
	}
	$scope.saveTokenToLocal = function() {
		try {
			if (!ethFuncs.validateEtherAddress($scope.localToken.contractAdd)) throw globalFuncs.errorMsgs[5];
			else if (!globalFuncs.isNumeric($scope.localToken.decimals) || parseFloat($scope.localToken.decimals) < 0) throw globalFuncs.errorMsgs[7];
			else if (!globalFuncs.isAlphaNumeric($scope.localToken.symbol) || $scope.localToken.symbol == "") throw globalFuncs.errorMsgs[19];
			var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
			storedTokens.push({
				contractAddress: $scope.localToken.contractAdd,
				symbol: $scope.localToken.symbol,
				decimal: parseInt($scope.localToken.decimals)
				});
			$scope.localToken = {
				contractAdd: "",
				symbol: "",
				decimals: ""
			};
            localStorage.setItem("localTokens",JSON.stringify(storedTokens));
            $scope.setTokens();
			$scope.validateLocalToken = $sce.trustAsHtml('');
		} catch (e) {
			$scope.validateLocalToken = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	}
};
module.exports = tokenCtrl;