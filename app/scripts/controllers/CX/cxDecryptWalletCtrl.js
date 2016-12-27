'use strict';
var cxDecryptWalletCtrl = function($scope, $sce, walletService) {
	$scope.allWallets = [];
    $scope.selectedWallet = $scope.password = "";
	$scope.setAllWallets = function() {
		cxFuncs.getWalletsArr(function(wlts) {
			$scope.allWallets = wlts;
            $scope.updateBalance();
			$scope.$apply();
		});
	};
	$scope.updateBalance = function() {
		for (var i = 0; i < $scope.allWallets.length; i++) {
			$scope.setBalance($scope.allWallets[i].addr,i);
		}
	};
	$scope.setBalance = function(address,id) {
		ajaxReq.getBalance(address, function(data) {
			if (data.error) {
				$scope.allWallets[id].balance = data.msg;
			} else {
                $scope.allWallets[id].balance = etherUnits.toEther(data.data.balance, 'wei');
			}
		});
	};
	$scope.setAllWallets();
    $scope.getPrivFromAdd = function(){
        if ($scope.selectedWallet=="") throw globalFuncs.errorMsgs[5];
       for (var i = 0; i < $scope.allWallets.length; i++) {
            if( $scope.allWallets[i].addr==$scope.selectedWallet)
                return $scope.allWallets[i].priv;
        }
        throw globalFuncs.errorMsgs[14];
    }
    $scope.decryptWallet = function() {
	    $scope.wallet=null;
        $scope.decryptStatus="";
		try {
            var priv = $scope.getPrivFromAdd();
            if (priv.length==132)
				$scope.wallet = Wallet.fromMyEtherWalletKey(priv, $scope.password);
            else
                $scope.wallet = Wallet.getWalletFromPrivKeyFile(priv, $scope.password);
            walletService.password = $scope.password;
            walletService.wallet = $scope.wallet;
		} catch (e) {
            $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[6] + ":" + e));
		}
        if($scope.wallet!=null) $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[1]));
	};
};
module.exports = cxDecryptWalletCtrl;