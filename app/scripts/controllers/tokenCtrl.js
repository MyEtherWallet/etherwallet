'use strict';
var tokenCtrl = function($scope, $sce, walletService) {
	$scope.tokenVisibility = "hidden";
	$scope.sendTxModal = new Modal(document.getElementById('sendTransaction'));
	walletService.wallet = null;
	walletService.password = '';
	$scope.tokens = Token.popTokens;
	$scope.Validator = Validator;
    $scope.etherBalance = $scope.etcBalance = $scope.usdBalance = $scope.eurBalance = $scope.btcBalance = "loading";
	$scope.tokenTx = {
		to: '',
		value: 0,
		id: -1,
		gasLimit: 150000
	};
	$scope.localToken = {
		contractAdd: "",
		symbol: "",
		decimals: "",
		type: "custom",
	};
	$scope.$watch(function() {
		if (walletService.wallet == null) return null;
		return walletService.wallet.getAddressString();
	}, function() {
		if (walletService.wallet == null) return;
		$scope.wallet = walletService.wallet;
		$scope.wd = true;
		$scope.setBalance();
		$scope.setTokens();
	});
	$scope.setTokens = function() {
		$scope.tokenObjs = [];
		for (var i = 0; i < $scope.tokens.length; i++) {
			$scope.tokenObjs.push(new Token($scope.tokens[i].address, $scope.wallet.getAddressString(), $scope.tokens[i].symbol, $scope.tokens[i].decimal, $scope.tokens[i].type));
            $scope.tokenObjs[$scope.tokenObjs.length-1].setBalance();
		}
		var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
		for (var i = 0; i < storedTokens.length; i++) {
			$scope.tokenObjs.push(new Token(storedTokens[i].contractAddress, $scope.wallet.getAddressString(), globalFuncs.stripTags(storedTokens[i].symbol), storedTokens[i].decimal, storedTokens[i].type));
            $scope.tokenObjs[$scope.tokenObjs.length-1].setBalance();
        }
		$scope.tokenTx.id = -1;
	}
	$scope.$watch('[tokenTx.to,tokenTx.value,tokenTx.id]', function() {
		if ($scope.tokenObjs !== undefined && $scope.tokenObjs[$scope.tokenTx.id] !== undefined && $scope.Validator.isValidAddress($scope.tokenTx.to) && $scope.Validator.isPositiveNumber($scope.tokenTx.value)) {
			if ($scope.estimateTimer) clearTimeout($scope.estimateTimer);
			$scope.estimateTimer = setTimeout(function() {
				$scope.estimateGasLimit();
			}, 500);
		}
	}, true);
	$scope.estimateGasLimit = function() {
		var estObj = {
			to: $scope.tokenObjs[$scope.tokenTx.id].getContractAddress(),
			from: $scope.wallet.getAddressString(),
			value: '0x00',
			data: $scope.tokenObjs[$scope.tokenTx.id].getData($scope.tokenTx.to, $scope.tokenTx.value).data
		}
		ethFuncs.estimateGas(estObj, false, function(data) {
			if (!data.error) $scope.tokenTx.gasLimit = data.data;
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
	$scope.onDonateClick = function() {
		$scope.tokenTx.to = globalFuncs.donateAddress;
		$scope.tokenTx.value = "50";
	}
	$scope.generateTokenTx = function() {
		if ($scope.tokenTx.id == -1) {
			$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[19]));
			return;
		}
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
			privKey: $scope.wallet.getPrivateKeyString(),
		  path: $scope.wallet.getPath(),
		  hwType: $scope.wallet.getHWType(),
		  hwTransport: $scope.wallet.getHWTransport()
		}, false, function(rawTx) {
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
		uiFuncs.sendTx($scope.signedTx, false, function(resp) {
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
				decimal: parseInt($scope.localToken.decimals),
				type: $scope.localToken.type
			});
			$scope.localToken = {
				contractAdd: "",
				symbol: "",
				decimals: "",
				type: "custom"
			};
			localStorage.setItem("localTokens", JSON.stringify(storedTokens));
			$scope.setTokens();
			$scope.validateLocalToken = $sce.trustAsHtml('');
		} catch (e) {
			$scope.validateLocalToken = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	}
	$scope.removeTokenFromLocal = function(tokenSymbol) {
		var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
		// remove from localstorage so it doesn't show up on refresh
		for (var i = 0; i < storedTokens.length; i++)
		if (storedTokens[i].symbol === tokenSymbol) {
			storedTokens.splice(i, 1);
			break;
		}
		localStorage.setItem("localTokens", JSON.stringify(storedTokens));
		// remove from tokenObj so it removes from display
		for (var i = 0; i < $scope.tokenObjs.length; i++)
		if ($scope.tokenObjs[i].symbol === tokenSymbol) {
			$scope.tokenObjs.splice(i, 1);
			break;
		}
	}
};
module.exports = tokenCtrl;