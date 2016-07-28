'use strict';
var digixCtrl = function($scope, $sce, walletService) {
	$scope.sendTxModal = new Modal(document.getElementById('sendTransaction'));
	walletService.wallet = null;
	walletService.password = '';
	$scope.showSend = true;
	$scope.showRaw = false;
	$scope.digixContract = "0xf0160428a8552ac9bb7e050d90eeade4ddd52843";
	$scope.digixUserInfo = "0x1959a002";
	$scope.digixClaim = "0x4e71d92d";
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
	$scope.generateTx = function(){
	   uiFuncs.generateTx(uiFuncs.getTxData($scope), function(rawTx) {
			if (!rawTx.isError) {
				$scope.rawTx =rawTx.rawTx;
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
		uiFuncs.sendTx($scope.signedTx, function(resp){
		  if(!resp.isError) {
            $scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[2] + "<a href='http://etherscan.io/tx/" + resp.data + "' target='_blank'>" + resp.data + "</a>"));
		      $scope.setBalance();
          } else {
            $scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(resp.error));
		  }
		});
	}
	$scope.onDonateClick = function() {
		$scope.tokenTx.to = globalFuncs.donateAddress;
		$scope.tokenTx.value = "0.5";
		$scope.tx.donate = true;
		$scope.validateAddress();
	}
};
module.exports = digixCtrl;
