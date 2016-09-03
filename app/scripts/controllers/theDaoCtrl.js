'use strict';
var theDaoCtrl = function($scope, $sce, walletService) {
	$scope.curTab = "withdrawETC";
	$scope.withdrawModal = new Modal(document.getElementById('withdrawTransaction'));
    $scope.withdrawModalETC = new Modal(document.getElementById('withdrawTransactionETC'));
	walletService.wallet = null;
	walletService.password = '';
	$scope.showAdvance = false;
	$scope.showRaw = false;
	$scope.slockitContract = "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413"; //0xd838f9c9792bf8398e1f5fbfbd3b43c5a86445aa
	$scope.withdrawContract = "0xbf4ed7b27f1d666546e30d74d50d173d20bca754"; //0xd838f9c9792bf8398e1f5fbfbd3b43c5a86445aa
    $scope.daoCContract = "0x180826b05452ce96e157f0708c43381fee64a6b8";
    // change this to go live
    $scope.daoWithdrawContract = "0x9f5304da62a5408416ea58a17a92611019bd5ce3";
	$scope.slockitTransfer = "0xa9059cbb";
	$scope.balanceOf = "0x70a08231";
	$scope.daoWithdraw = "0x3ccfd60b";
	$scope.approveWithdraw = "0x095ea7b3";
    $scope.withdrawDAOC = "0xf3fef3a3";
    $scope.numETChex = "0x02ef6c86";
    $scope.Validator = Validator;
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
    $scope.daoC = {
		to: '',
        donation: null
	}
	$scope.token = {
		balance: 0,
        DCbalance: 0,
		balanceEth: 0,
        DCbalanceEth: 0,
		balanceBN: 0,
	}
	$scope.$watch(function() {
		if (walletService.wallet == null) return null;
		return walletService.wallet.getAddressString();
	}, function() {
		if (walletService.wallet == null) return;
		$scope.wallet = walletService.wallet;
        $scope.wd = true;
        $scope.daoC.to = $scope.wallet.getChecksumAddressString();
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
		var userInfo = ethFuncs.getDataObj($scope.slockitContract, $scope.balanceOf, [ethFuncs.getNakedAddress($scope.wallet.getAddressString())]);
		ajaxReq.getEthCall(userInfo, function(data) {
			if (!data.error) {
				$scope.token.balance = new BigNumber(data.data).div(etherUnits.getValueOfUnit('milli') * 10).toString();
				$scope.token.balanceEth = new BigNumber($scope.token.balance).div(100).toString();
				$scope.token.balanceBN = new BigNumber(data.data).toString();
			}
		});
        var userInfo = ethFuncs.getDataObj($scope.daoCContract, $scope.balanceOf, [ethFuncs.getNakedAddress($scope.wallet.getAddressString())]);
		ajaxReq.getClassicEthCall(userInfo, function(data) {
			if (!data.error) {
				$scope.token.DCbalance = new BigNumber(data.data).div(etherUnits.getValueOfUnit('milli') * 10).toString();
			}
		});
        var userInfo = ethFuncs.getDataObj($scope.daoWithdrawContract, $scope.numETChex, [ethFuncs.getNakedAddress($scope.wallet.getAddressString())]);
		ajaxReq.getClassicEthCall(userInfo, function(data) {
			if (!data.error) {
				$scope.token.DCbalanceEth = new BigNumber(data.data).div(etherUnits.getValueOfUnit('milli') * 1000).toString();
			}
		});
        ajaxReq.getClassicBalance($scope.wallet.getAddressString(), function(data) {
			if (data.error) {
				$scope.etcBalance = data.msg;
			} else {
				$scope.etcBalance = etherUnits.toEther(data.data.balance, 'wei');
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
    $scope.generateAndWithdrawDAOC = function() {
        if(!Validator.isPositiveNumber($scope.daoC.donation)){
            $scope.withdrawETCTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[0]));
            return;
        }
		$scope.tx.to = $scope.daoWithdrawContract;
		$scope.tx.data = $scope.withdrawDAOC + ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.daoC.to), 64) + ethFuncs.padLeft(new BigNumber($scope.daoC.donation).toString(16), 64);
		$scope.tx.value = 0;
		uiFuncs.generateClassicTx(uiFuncs.getTxData($scope),function(rawTx) {
            uiFuncs.sendClassicTx(rawTx.signedTx, function(resp){
                if(resp.isError){
                    $scope.withdrawETCTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(resp.error));
                } else {
                    $scope.withdrawETCTxStatus = $sce.trustAsHtml("Withdrawal Transaction: " + globalFuncs.getSuccessText(globalFuncs.successMsgs[2] + "<a href='http://gastracker.io/tx/" + resp.data + "' target='_blank'> ETC TX via GasTracker.io</a>"));
                    $scope.setBalance();
                }
            });
		});
        $scope.withdrawModalETC.close();
	}
};
module.exports = theDaoCtrl;
