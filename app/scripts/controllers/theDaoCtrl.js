'use strict';
var theDaoCtrl = function($scope, $sce, walletService) {
	$scope.curTab = "withdrawETC";
	$scope.withdrawModal = new Modal(document.getElementById('withdrawTransaction'));
    $scope.withdrawModalETC = new Modal(document.getElementById('withdrawTransactionETC'));
    $scope.withdrawExtraBModal = new Modal(document.getElementById('withdrawExtraBalance'));
	walletService.wallet = null;
	walletService.password = '';
	$scope.showAdvance = false;
	$scope.showRaw = false;
	$scope.slockitContract = "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413"; //0xd838f9c9792bf8398e1f5fbfbd3b43c5a86445aa
	$scope.withdrawContract = "0xbf4ed7b27f1d666546e30d74d50d173d20bca754"; //0xd838f9c9792bf8398e1f5fbfbd3b43c5a86445aa
    $scope.daoCContract = "0x180826b05452ce96e157f0708c43381fee64a6b8";
    $scope.daoWithdrawContract = "0x9f5304da62a5408416ea58a17a92611019bd5ce3";
    $scope.eBWithdrawContract = "0x755cdba6AE4F479f7164792B318b2a06c759833B";
    $scope.eBTokenContract = "0x5c40eF6f527f4FbA68368774E6130cE6515123f2";
    $scope.hexCodes = {
        balanceOf : "0x70a08231",
        daoWithdraw : "0x3ccfd60b",
        approveWithdraw : "0x095ea7b3",
        withdrawDAOC : "0xf3fef3a3",
        numETChex : "0x02ef6c86"
    };
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
        eBTokenBalance: 0,
        eBEthBalance: 0,
        eBBalanceBN: 0
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
		var userInfo = ethFuncs.getDataObj($scope.slockitContract, $scope.hexCodes.balanceOf, [ethFuncs.getNakedAddress($scope.wallet.getAddressString())]);
		ajaxReq.getEthCall(userInfo, false, function(data) {
			if (!data.error) {
				$scope.token.balance = new BigNumber(data.data).div(etherUnits.getValueOfUnit('milli') * 10).toString();
				$scope.token.balanceEth = new BigNumber($scope.token.balance).div(100).toString();
				$scope.token.balanceBN = new BigNumber(data.data).toString();
			}
		});
        var userInfo = ethFuncs.getDataObj($scope.eBTokenContract, $scope.hexCodes.balanceOf, [ethFuncs.getNakedAddress($scope.wallet.getAddressString())]);
		ajaxReq.getEthCall(userInfo, false, function(data) {
			if (!data.error) {
				$scope.token.eBTokenBalance = new BigNumber(data.data).div(etherUnits.getValueOfUnit('milli') * 10).toString();
				$scope.token.eBEthBalance = new BigNumber($scope.token.eBTokenBalance).div(100).toString();
				$scope.token.eBBalanceBN = new BigNumber(data.data).toString();
			}
		});
        var userInfo = ethFuncs.getDataObj($scope.daoCContract, $scope.hexCodes.balanceOf, [ethFuncs.getNakedAddress($scope.wallet.getAddressString())]);
		ajaxReq.getEthCall(userInfo, true, function(data) {
			if (!data.error) {
				$scope.token.DCbalance = new BigNumber(data.data).div(etherUnits.getValueOfUnit('milli') * 10).toString();
			}
		});
        var userInfo = ethFuncs.getDataObj($scope.daoWithdrawContract, $scope.hexCodes.numETChex, [ethFuncs.getNakedAddress($scope.wallet.getAddressString())]);
		ajaxReq.getEthCall(userInfo, true, function(data) {
			if (!data.error) {
				$scope.token.DCbalanceEth = new BigNumber(data.data).div(etherUnits.getValueOfUnit('milli') * 1000).toString();
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
	$scope.$watch('curTab', function() {
		$scope.tx.data = '';
		$scope.showRaw = $scope.showProposal = false;
	});
	$scope.$watch('[tx,curTab]', function() {
		$scope.showRaw = false;
		$scope.sendTxStatus = "";
        $scope.withdrawTxStatus = "";
	}, true);
	$scope.generateAndSendWithdrawTx = function(tokenContract,withdrawContract,balanceBN, modal) {
		$scope.tx.to = tokenContract;
		$scope.tx.data = $scope.hexCodes.approveWithdraw + ethFuncs.padLeft(ethFuncs.getNakedAddress(withdrawContract), 64) + ethFuncs.padLeft(new BigNumber(balanceBN).toString(16), 64);
		$scope.tx.value = 0;
		uiFuncs.generateTx(uiFuncs.getTxData($scope), false, function(rawTx) {
            uiFuncs.sendTx(rawTx.signedTx, false, function(resp){
                if(resp.isError){
                    $scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(resp.error));
                } else {
                    $scope.sendTxStatus = $sce.trustAsHtml("Please Wait");
                    var approveTx = resp.data;
                    setTimeout(function(){
                        $scope.tx.to = withdrawContract;
						$scope.tx.data = $scope.hexCodes.daoWithdraw;
                        uiFuncs.generateTx(uiFuncs.getTxData($scope), false, function(rawTx) {
                            uiFuncs.sendTx(rawTx.signedTx, false, function(resp){
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
        $scope[modal].close();
	}
    $scope.generateAndWithdrawDAOC = function() {
        if(!Validator.isPositiveNumber($scope.daoC.donation)){
            $scope.withdrawETCTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[0]));
            return;
        }
		$scope.tx.to = $scope.daoWithdrawContract;
		$scope.tx.data = $scope.hexCodes.withdrawDAOC + ethFuncs.padLeft(ethFuncs.getNakedAddress($scope.daoC.to), 64) + ethFuncs.padLeft(new BigNumber($scope.daoC.donation).toString(16), 64);
		$scope.tx.value = 0;
		uiFuncs.generateTx(uiFuncs.getTxData($scope), true, function(rawTx) {
            uiFuncs.sendTx(rawTx.signedTx, true, function(resp){
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
