'use strict';
var walletGenCtrl = function($scope) {
	$scope.password = "";
	$scope.wallet = null;
	$scope.showWallet = false;
    $scope.blob = "";
	$scope.genNewWallet = function() {
		if ($scope.password.length < 7) {
			alert("Your password must be at least 7 characters");
		} else {
			$scope.wallet = Wallet.generate(false);
			$scope.showWallet = true;
            $scope.blob = $scope.getBlob($scope.wallet.toJSON());
		}
	}
	$scope.getBlob = function(json) {
	   if($scope.wallet==null) return '';
		var fileType = "text/json;charset=UTF-8";
		var blob = new Blob([JSON.stringify(json)], {
			type: fileType
		});
        return window.URL.createObjectURL(blob);
	}
};
module.exports = walletGenCtrl;