'use strict';
var decryptWalletCtrl = function($scope, $sce, walletService) {
	$scope.walletType = "";
	$scope.requireFPass = $scope.requirePPass = $scope.showFDecrypt = $scope.showPDecrypt = false;
	$scope.filePassword = "";
	$scope.fileContent = "";
    $scope.Validator = Validator;
    $scope.HDWallet = {
        numWallets: 0,
        walletsPerDialog: 5,
        wallets: [],
        id:0,
        hdk: null,
        dPath: '',
        jmPath : "m/44'/60'/0'/0/0",
        ledgerPath : "m/44'/60'/0'/0"
    };
    $scope.mnemonicModel = new Modal(document.getElementById('mnemonicModel'));
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
    $scope.setHDAddresses = function(start, limit){
        $scope.HDWallet.wallets = [];
        var dPath = $scope.HDWallet.dPath;
        dPath = dPath.substr(0, dPath.length-1);
        for(var i=start; i < start+limit; i++) {
            $scope.HDWallet.wallets.push(new Wallet($scope.HDWallet.hdk.derive(dPath+i)._privateKey));
            $scope.HDWallet.wallets[$scope.HDWallet.wallets.length-1].setBalance(false);
        }
        $scope.HDWallet.id = 0;
        $scope.HDWallet.numWallets = start+limit;
    }
    $scope.setHDAddressesLedger = function(start, limit){
        $scope.HDWallet.wallets = [];
        var dPath = $scope.HDWallet.dPath;
        dPath = dPath.substr(0, dPath.length-1);
        for(var i=start; i < start+limit; i++) {
            var derivedKey = $scope.HDWallet.hdk.derive("m/" + i);
            $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, dPath + i, "ledger", $scope.ledger));
            $scope.HDWallet.wallets[$scope.HDWallet.wallets.length-1].setBalance(false);
        }
        $scope.HDWallet.id = 0;
        $scope.HDWallet.numWallets = start+limit;
    }    
    $scope.AddRemoveHDAddresses = function(isAdd){
        if ($scope.walletType == "ledger") {
            if(isAdd) $scope.setHDAddressesLedger($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog);
            else $scope.setHDAddressesLedger($scope.HDWallet.numWallets-2*$scope.HDWallet.walletsPerDialog, $scope.HDWallet.walletsPerDialog);
        }
        else {
            if(isAdd) $scope.setHDAddresses($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog);
            else $scope.setHDAddresses($scope.HDWallet.numWallets-2*$scope.HDWallet.walletsPerDialog, $scope.HDWallet.walletsPerDialog);
        }
    }
    $scope.setHDWallet = function(){
        walletService.wallet = $scope.wallet = $scope.HDWallet.wallets[$scope.HDWallet.id];
        $scope.mnemonicModel.close();
        $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[1]));
    }
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
                 $scope.mnemonicModel.open();
			     var numWords = $scope.manualmnemonic.trim().split(' ').length;
                 $scope.HDWallet.hdk = hd.HDKey.fromMasterSeed(hd.bip39.mnemonicToSeed($scope.manualmnemonic.trim()));
                 $scope.HDWallet.numWallets = 0;
                 if(numWords==12) {//jaxx and metamask
                    $scope.HDWallet.dPath = $scope.HDWallet.jmPath;
                    $scope.setHDAddresses($scope.HDWallet.numWallets,$scope.HDWallet.walletsPerDialog);
                 } else if(numWords==24) {//ledger
                    $scope.HDWallet.dPath = $scope.HDWallet.ledgerPath;
                    $scope.setHDAddresses($scope.HDWallet.numWallets,$scope.HDWallet.walletsPerDialog);
                 }
			}
            walletService.wallet = $scope.wallet;
		} catch (e) {
            $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[6]+e));
		}
        if($scope.wallet!=null) $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[1]));

	};
    $scope.ledgerCallback = function(result, error) {
        if (typeof result != "undefined") {
            $scope.mnemonicModel.open();
            $scope.HDWallet.hdk = new hd.HDKey();
            $scope.HDWallet.hdk.publicKey = new Buffer(result['publicKey'], 'hex');
            $scope.HDWallet.hdk.chainCode = new Buffer(result['chainCode'], 'hex');
            $scope.HDWallet.numWallets = 0;
            $scope.HDWallet.dPath = $scope.HDWallet.ledgerPath;
            $scope.setHDAddressesLedger($scope.HDWallet.numWallets,$scope.HDWallet.walletsPerDialog);
            walletService.wallet = null;
        }
    }
    $scope.scanLedger = function() {
        $scope.ledger = new Ledger3("w0w");
        var app = new ledgerEth($scope.ledger);
        app.getAddress("44'/60'/0'", $scope.ledgerCallback, false, true);
    };

};
module.exports = decryptWalletCtrl;
