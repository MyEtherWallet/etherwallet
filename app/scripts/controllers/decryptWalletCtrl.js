'use strict';
var decryptWalletCtrl = function($scope, $sce, walletService) {
    $scope.walletType = "";
    $scope.requireFPass = $scope.requirePPass = $scope.showFDecrypt = $scope.showPDecrypt = $scope.showAOnly = false;
    $scope.filePassword = "";
    $scope.fileContent = "";
    $scope.Validator = Validator;
    $scope.isSSL = window.location.protocol == 'https:';
    $scope.isChrome = true;
    $scope.HDWallet = {
        numWallets: 0,
        walletsPerDialog: 5,
        wallets: [],
        id: 0,
        hdk: null,
        dPath: '',
        defaultDPath: "m/44'/60'/0'/0", // first address: m/44'/60'/0'/0/0
        alternativeDPath: "m/44'/60'/0'", // first address: m/44'/60'/0'/0
        customDPath: "m/44'/60'/1'/0",
        ledgerPath: "m/44'/60'/0'",
        trezorTestnetPath: "m/44'/1'/0'/0", // first address: m/44'/1'/0'/0/0
        trezorClassicPath: "m/44'/61'/0'/0", // first address: m/44'/61'/0'/0/0
        trezorPath: "m/44'/60'/0'/0", // first address: m/44'/60'/0'/0/0
    };
    $scope.HDWallet.dPath = $scope.HDWallet.defaultDPath;
    $scope.mnemonicModel = new Modal(document.getElementById('mnemonicModel'));

    $scope.onHDDPathChange = function() {
        $scope.HDWallet.hdk = hd.HDKey.fromMasterSeed(hd.bip39.mnemonicToSeed($scope.manualmnemonic.trim()));
        $scope.HDWallet.numWallets = 0;
        $scope.setHDAddresses($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog);
    }
    $scope.onCustomHDDPathChange = function() {
        $scope.HDWallet.dPath = $scope.HDWallet.customDPath;
        $scope.onHDDPathChange();
    }
    $scope.showContent = function($fileContent) {
        $scope.fileStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[4] + document.getElementById('fselector').files[0].name));
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
        $scope.showFDecrypt = $scope.filePassword.length > 0;
    };
    $scope.onPrivKeyChange = function() {
        $scope.requirePPass = $scope.manualprivkey.length == 128 || $scope.manualprivkey.length == 132;
        $scope.showPDecrypt = $scope.manualprivkey.length == 64;
    };
    $scope.onPrivKeyPassChange = function() {
        $scope.showPDecrypt = $scope.privPassword.length > 0;
    };
    $scope.onMnemonicChange = function() {
        $scope.showMDecrypt = hd.bip39.validateMnemonic($scope.manualmnemonic);
        $scope.showTrezorSeparate = ajaxReq.type !== 'ETH';
    };
    $scope.onAddressChange = function() {
        $scope.showAOnly = $scope.Validator.isValidAddress($scope.addressOnly);
    };
    $scope.setHDAddresses = function(start, limit) {
        $scope.HDWallet.wallets = [];
        for (var i = start; i < start + limit; i++) {
            $scope.HDWallet.wallets.push(new Wallet($scope.HDWallet.hdk.derive($scope.HDWallet.dPath + "/" + i)._privateKey));
            $scope.HDWallet.wallets[$scope.HDWallet.wallets.length - 1].setBalance(false);
        }
        $scope.HDWallet.id = 0;
        $scope.HDWallet.numWallets = start + limit;
    }
    $scope.setHDAddressesHWWallet = function(start, limit, ledger) {
        $scope.HDWallet.wallets = [];
        for (var i = start; i < start + limit; i++) {
            var derivedKey = $scope.HDWallet.hdk.derive("m/" + i);
            if (ledger) {
                $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, $scope.HDWallet.dPath + "/" + i, "ledger", $scope.ledger));
            } else {
                $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, $scope.HDWallet.dPath + "/" + i, "trezor"));
            }
            $scope.HDWallet.wallets[$scope.HDWallet.wallets.length - 1].setBalance(false);
        }
        $scope.HDWallet.id = 0;
        $scope.HDWallet.numWallets = start + limit;
    }
    $scope.AddRemoveHDAddresses = function(isAdd) {
        if ($scope.walletType == "ledger" || $scope.walletType == "trezor") {
            var ledger = $scope.walletType == "ledger";
            if (isAdd) $scope.setHDAddressesHWWallet($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog, ledger);
            else $scope.setHDAddressesHWWallet($scope.HDWallet.numWallets - 2 * $scope.HDWallet.walletsPerDialog, $scope.HDWallet.walletsPerDialog, ledger);
        } else {
            if (isAdd) $scope.setHDAddresses($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog);
            else $scope.setHDAddresses($scope.HDWallet.numWallets - 2 * $scope.HDWallet.walletsPerDialog, $scope.HDWallet.walletsPerDialog);
        }
    }
    $scope.setHDWallet = function() {
        walletService.wallet = $scope.wallet = $scope.HDWallet.wallets[$scope.HDWallet.id];
        $scope.mnemonicModel.close();
        $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[1]));
    }
    $scope.decryptWallet = function() {
        $scope.wallet = null;
        $scope.decryptStatus = "";
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
                $scope.onHDDPathChange();
            }
            walletService.wallet = $scope.wallet;
        } catch (e) {
            $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[6] + e));
        }
        if ($scope.wallet != null) $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[1]));
    };
    $scope.decryptAddressOnly = function() {
        if ($scope.Validator.isValidAddress($scope.addressOnly)) {
            var tempWallet = new Wallet();
            $scope.wallet = {
                type: "addressOnly",
                address: $scope.addressOnly,
                getAddressString: function() {
                    return this.address;
                },
                getChecksumAddressString: function() {
                    return ethUtil.toChecksumAddress(this.getAddressString());
                },
                setBalance: tempWallet.setBalance,
                setTokens: tempWallet.setTokens
            }
            $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[1]));
            walletService.wallet = $scope.wallet;
        }
    }
    $scope.HWWalletCreate = function(publicKey, chainCode, ledger, path) {
        $scope.mnemonicModel.open();
        $scope.HDWallet.hdk = new hd.HDKey();
        $scope.HDWallet.hdk.publicKey = new Buffer(publicKey, 'hex');
        $scope.HDWallet.hdk.chainCode = new Buffer(chainCode, 'hex');
        $scope.HDWallet.numWallets = 0;
        $scope.HDWallet.dPath = path;
        $scope.setHDAddressesHWWallet($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog, ledger);
        walletService.wallet = null;
    }
    $scope.ledgerCallback = function(result, error) {
        if (typeof result != "undefined") {
            $scope.HWWalletCreate(result['publicKey'], result['chainCode'], true, $scope.HDWallet.ledgerPath);
        }
    }
    $scope.trezorCallback = function(response) {
        if (response.success) {
            $scope.HWWalletCreate(response.publicKey, response.chainCode, false, $scope.getTrezorPath());
        } else {
            $scope.trezorError = true;
            $scope.trezorErrorString = response.error;
            $scope.$apply();
        }
    }
    $scope.scanLedger = function() {
        $scope.ledger = new Ledger3("w0w");
        var app = new ledgerEth($scope.ledger);
        var path = $scope.HDWallet.ledgerPath;
        app.getAddress(path, $scope.ledgerCallback, false, true);
    };
    $scope.scanTrezor = function() {
        // trezor is using the path without change level id
        var path = $scope.getTrezorPath();
        TrezorConnect.getXPubKey(path, $scope.trezorCallback, '1.4.0');
    };
    $scope.getTrezorPath = function() {
        var type = ajaxReq.type;
        if (type === "ETH") {
            return $scope.HDWallet.trezorPath;
        } else if (type === "ETC") {
            return $scope.HDWallet.trezorClassicPath;
        } else {
            return $scope.HDWallet.trezorTestnetPath;
        }
    };
};
module.exports = decryptWalletCtrl;
