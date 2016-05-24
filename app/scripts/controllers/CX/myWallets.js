'use strict';
var myWallets = function($scope, $sce) {
	$scope.allWallets = [];
	$scope.allWatchOnly = [];
    $scope.fiatVal = {usd:0, eur:0, btc:0};
	$scope.setAllWallets = function() {
		cxFuncs.getWalletsArr(function(wlts) {
			$scope.allWallets = wlts;
			$scope.updateBalance('allWallets');
		});
		cxFuncs.getWatchOnlyArr(function(wlts) {
			$scope.allWatchOnly = wlts;
			$scope.updateBalance('allWatchOnly');
            $scope.$apply();
		});
	};
	$scope.updateBalance = function(varWal) {
		for (var i = 0; i < $scope[varWal].length; i++) {
			$scope.setBalance($scope[varWal][i].addr, i, varWal);
		}
	};
	$scope.setBalance = function(address, id, varWal) {
		ajaxReq.getBalance(address, function(data) {
			if (data.error) {
				$scope[varWal][id].balance = data.msg;
			} else {
				$scope[varWal][id].balance = etherUnits.toEther(data.data.balance, 'wei');
                $scope[varWal][id].usd = etherUnits.toFiat($scope[varWal][id].balance, 'ether', $scope.fiatVal.usd);
                $scope[varWal][id].eur = etherUnits.toFiat($scope[varWal][id].balance, 'ether', $scope.fiatVal.eur);
                $scope[varWal][id].btc = etherUnits.toFiat($scope[varWal][id].balance, 'ether', $scope.fiatVal.btc);
			}
		});
	};
	ajaxReq.getETHvalue(function(data) {
        $scope.fiatVal.usd = data.usd;
        $scope.fiatVal.eur = data.eur;
        $scope.fiatVal.btc = data.btc;
       	$scope.setAllWallets();
	});
};
module.exports = myWallets;