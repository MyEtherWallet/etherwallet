'use strict';
var walletBalanceCtrl = function($scope, $sce) {
	$scope.ajaxReq = ajaxReq;
	$scope.localToken = {
		contractAdd: "",
		symbol: "",
		decimals: "",
		type: "custom",
	};
	$scope.customTokenField = false;
	$scope.saveTokenToLocal = function() {
		globalFuncs.saveTokenToLocal($scope.localToken, function(data) {
			if (!data.error) {
				$scope.localToken = {
					contractAdd: "",
					symbol: "",
					decimals: "",
					type: "custom"
				};
				$scope.wallet.setTokens();
				$scope.validateLocalToken = $sce.trustAsHtml('');
				$scope.customTokenField = false;
			} else {
				$scope.validateLocalToken = $sce.trustAsHtml(data.msg);
			}
		});
	}
	$scope.removeTokenFromLocal = function(tokenSymbol) {
		globalFuncs.removeTokenFromLocal(tokenSymbol, $scope.wallet.tokenObjs);
	}
};
module.exports = walletBalanceCtrl;