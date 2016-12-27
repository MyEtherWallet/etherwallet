'use strict';
var mainPopCtrl = function($scope, $sce) {
	$scope.allWallets = [];
	$scope.allWatchOnly = [];
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
                $scope[varWal][id].balanceR = new BigNumber($scope[varWal][id].balance).toPrecision(5);
			}
		});
	};
  $scope.setAllWallets();
};
module.exports = mainPopCtrl;
