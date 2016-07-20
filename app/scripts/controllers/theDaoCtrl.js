'use strict';
var theDaoCtrl = function($scope, $sce, walletService) {
	$scope.curTab = "withdraw";
	new Modal(document.getElementById('sendTransaction'));
    $scope.withdrawModal = new Modal(document.getElementById('withdrawTransaction'));
	walletService.wallet = null;
	walletService.password = '';
	$scope.showAdvance = false;
	$scope.showRaw = false;
	$scope.slockitContract = "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413"; //0xd838f9c9792bf8398e1f5fbfbd3b43c5a86445aa
    $scope.withdrawContract = "0xbf4ed7b27f1d666546e30d74d50d173d20bca754"; //0xd838f9c9792bf8398e1f5fbfbd3b43c5a86445aa
	$scope.slockitTransfer = "0xa9059cbb";
    $scope.slockitBalance = "0x70a08231";
    $scope.daoWithdraw = "0x3ccfd60b";
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
		balanceEth: 0
	}
	$scope.tokenTx = {
		to: '',
		value: 0,
		unit: "dao"
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
		var userInfo = ethFuncs.getDataObj($scope.slockitContract, $scope.slockitBalance, [ethFuncs.getNakedAddress($scope.wallet.getAddressString())]);
		ajaxReq.getEthCall(userInfo, function(data) {
			if (!data.error) {
                $scope.token.balance = new BigNumber(data.data).div(etherUnits.getValueOfUnit('milli') * 10).toString();
                $scope.token.balanceEth = new BigNumber($scope.token.balance).div(100).toString();
            }
		});
	}
	$scope.$watch('curTab', function() {
		$scope.tx.data = '';
		$scope.showRaw = $scope.showProposal = false;
	});
	$scope.$watch('[tx,curTab]', function() {
		$scope.showRaw = false;
		$scope.sendTxStatus = "";
	}, true);
	// sending
	$scope.generateTokenTx = function() {
		try {
			if (!ethFuncs.validateEtherAddress($scope.tokenTx.to)) throw globalFuncs.errorMsgs[5];
			else if (!globalFuncs.isNumeric($scope.tokenTx.value) || parseFloat($scope.tokenTx.value) < 0) throw globalFuncs.errorMsgs[7];
			$scope.tx.to = $scope.slockitContract;
			var value = ethFuncs.padLeft(new BigNumber($scope.tokenTx.value).times(etherUnits.getValueOfUnit('milli') * 10).toString(16), 64);
			var toAdd = ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.tokenTx.to), 64);
			$scope.tx.data = $scope.slockitTransfer + toAdd + value;
			$scope.tx.value = 0;
			$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(''));
			$scope.generateTx();
		} catch (e) {
			$scope.showRaw = false;
			$scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	};
    $scope.generateAndSendWithdrawTx = function() {
        $scope.tx.to = $scope.withdrawContract;
        $scope.tx.data = $scope.daoWithdraw;
        $scope.tx.value = 0;
        $scope.autoSend = true;
        uiFuncs.generateTx($scope, $sce, function (){
            $scope.withdrawModal.close();
        });
    }
	$scope.generateTx = function() {
		uiFuncs.generateTx($scope, $sce);
	}
	$scope.sendTx = function() {
		uiFuncs.sendTx($scope, $sce);
	}
	$scope.onDonateClick = function() {
		$scope.tokenTx.to = globalFuncs.donateAddress;
		$scope.tokenTx.value = "50";
		$scope.tx.donate = true;
		$scope.validateAddress();
	}
};
module.exports = theDaoCtrl;
