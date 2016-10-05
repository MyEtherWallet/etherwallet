'use strict';
var decryptWalletCtrl = function($scope, $sce, walletService) {
	$scope.walletType = "";
	$scope.requireFPass = $scope.requirePPass = $scope.showFDecrypt = $scope.showPDecrypt = false;
	$scope.filePassword = "";
	$scope.fileContent = "";
    $scope.Validator = Validator;
	$scope.showContent = function($fileContent) {
		$scope.fileStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[5] + document.getElementById('fselector').files[0].name));
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
	$scope.onMnemonicChange = function() {
        var numWords = $scope.manualmnemonic.trim().split(' ').length;
		$scope.showMDecrypt = hd.bip39.validateMnemonic($scope.manualmnemonic) && (numWords == 12 || numWords == 24);
	};
	$scope.decryptWallet = function() {
	    $scope.wallet=null;
        $scope.decryptStatus="";
		try {
			if ($scope.showPDecrypt && $scope.requirePPass) {
				$scope.wallet = Wallet.fromMyEtherWalletKey($scope.manualprivkey, $scope.privPassword);
                walletService.password = $scope.privPassword;
			} else if ($scope.showPDecrypt && !$scope.requirePPass) {
				$scope.wallet = new Wallet($scope.manualprivkey);
                walletService.password = '';
			} else if ($scope.showFDecrypt) {
				$scope.wallet = Wallet.getWalletFromPrivKeyFile($scope.fileContent, $scope.filePassword);
                walletService.password = $scope.filePassword;
			} else if ($scope.showMDecrypt) {
			     var numWords = $scope.manualmnemonic.trim().split(' ').length;
                 var hdk = hd.HDKey.fromMasterSeed(hd.bip39.mnemonicToSeed($scope.manualmnemonic.trim()));
                 if(numWords==12) //jaxx and metamask
                    $scope.wallet = new Wallet(hdk.derive("m/44'/60'/0'/0/0")._privateKey);
                 else if(numWords==24) //ledger
                    $scope.wallet = new Wallet(hdk.derive("m/44'/60'/0'/0")._privateKey);
			}
            walletService.wallet = $scope.wallet;
		} catch (e) {
            $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[6]+e));
		}
        if($scope.wallet!=null) $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[1]));

	};
};
module.exports = decryptWalletCtrl;
