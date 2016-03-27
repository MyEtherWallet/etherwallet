'use strict';
var decryptWalletCtrl = function($scope, $sce) {
	$scope.walletType = "";
	$scope.requireFPass = $scope.requirePPass = $scope.showFDecrypt = $scope.showPDecrypt = false;
	$scope.filePassword = "";
	$scope.fileContent = "";
	$scope.showContent = function($fileContent) {
		$scope.fileStatus = $sce.trustAsHtml(globalFuncs.getSuccessText("File Selected: " + document.getElementById('fselector').files[0].name));
		try {
			$scope.requireFPass = Wallet.walletRequirePass($fileContent);
			$scope.showFDecrypt = !$scope.requireFPass;
			$scope.fileContent = $fileContent;
		} catch (e) {
			$scope.fileStatus = $sce.trustAsHtml(globalFuncs.getDangerText(e));
		}
	};
	$scope.openFileDialog = function($fileContent) {
		document.getElementById('fselector').click();
	};
	$scope.onFilePassChange = function() {
		$scope.showFDecrypt = $scope.filePassword.length > 3;
	};
	$scope.onPrivKeyChange = function() {
		$scope.requirePPass = $scope.manualprivkey.length == 128 || $scope.manualprivkey.length == 132;
		$scope.showPDecrypt = $scope.manualprivkey.length == 64;
	};
	$scope.onPrivKeyPassChange = function() {
		$scope.showPDecrypt = $scope.privPassword.length > 6;
	};
	$scope.decryptWallet = function() {
	    $scope.wallet=null;
        $scope.decryptStatus="";
		try {
			if ($scope.showPDecrypt && $scope.requirePPass) {
				$scope.wallet = Wallet.fromMyEtherWalletKey($scope.manualprivkey, $scope.privPassword);
			} else if ($scope.showPDecrypt && !$scope.requirePPass) {
				$scope.wallet = new Wallet($scope.manualprivkey);
			} else if ($scope.showFDecrypt) {
				$scope.wallet = Wallet.getWalletFromPrivKeyFile($scope.fileContent, $scope.filePassword);
			}
		} catch (e) {
            $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getDangerText("Wrong Password: "+e));
		}
        if($scope.wallet!=null) $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getSuccessText("Wallet successfully decrypted"));
	};
};
module.exports = decryptWalletCtrl;