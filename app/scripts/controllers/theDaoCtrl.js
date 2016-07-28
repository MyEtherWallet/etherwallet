'use strict';
var theDaoCtrl = function($scope, $sce, walletService) {
	$scope.curTab = "withdraw";
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
	$scope.approveWithdraw = "0x095ea7b3";
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
		balanceEth: 0,
		balanceBN: 0
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
				$scope.token.balanceBN = new BigNumber(data.data).toString();
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
	$scope.generateAndSendWithdrawTx = function() {
		$scope.tx.to = $scope.slockitContract;
		$scope.tx.data = $scope.approveWithdraw + ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.withdrawContract), 64) + ethFuncs.padLeft(new BigNumber($scope.token.balanceBN).toString(16), 64);
		$scope.tx.value = 0;
		uiFuncs.generateTx(uiFuncs.getTxData($scope),function(rawTx) {
            uiFuncs.sendTx(rawTx.signedTx, function(resp){
                if(resp.isError){
                    $scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(resp.error));
                } else {
                    $scope.sendTxStatus = $sce.trustAsHtml("Please Wait");
                    var approveTx = resp.data;
                    setTimeout(function(){
                        $scope.tx.to = $scope.withdrawContract;
						$scope.tx.data = $scope.daoWithdraw;
                        uiFuncs.generateTx(uiFuncs.getTxData($scope),function(rawTx) {
                            uiFuncs.sendTx(rawTx.signedTx, function(resp){
                                 if(resp.isError) {
									$scope.withdrawTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(data.error));
								} else {
								    $scope.sendTxStatus = $sce.trustAsHtml("Approval Transaction: " + globalFuncs.getSuccessText(globalFuncs.successMsgs[2] + "<a href='http://etherscan.io/tx/" + approveTx + "' target='_blank'>" + approveTx + "</a>"));
									$scope.withdrawTxStatus = $sce.trustAsHtml("Withdrawal Transaction: " + globalFuncs.getSuccessText(globalFuncs.successMsgs[2] + "<a href='http://etherscan.io/tx/" + resp.data + "' target='_blank'>" + resp.data + "</a>"));
                                    $scope.setBalance();
                                }
                            });
                        });
                    },3000)
                }
            });
		});
        $scope.withdrawModal.close();
	}
};
module.exports = theDaoCtrl;