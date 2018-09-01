'use strict';
var decryptWalletCtrl = function($scope, $sce, walletService) {
    $scope.walletType = "";
    $scope.requireFPass = $scope.requirePPass = $scope.showFDecrypt = $scope.showPDecrypt = $scope.showAOnly = $scope.showParityDecrypt = false;
    $scope.filePassword = "";
    $scope.fileContent = "";
    $scope.Validator = Validator;
    $scope.isSSL = window.location.protocol == 'https:';
    $scope.ajaxReq = ajaxReq;
    $scope.nodeType = $scope.ajaxReq.type;
    $scope.HDWallet = {
        numWallets: 0,
        walletsPerDialog: 5,
        wallets: [],
        id: 0,
        hdk: null,
        dPath: '',
        defaultDPath:      "m/44'/60'/0'/0",       // first address: m/44'/60'/0'/0/0
        alternativeDPath:  "m/44'/60'/0'",         // first address: m/44'/60'/0/0
        customDPath:       "m/44'/60'/1'/0",       // first address: m/44'/60'/1'/0/0
        ledgerPath:        "m/44'/60'/0'",         // first address: m/44'/60'/0/0
        ledgerClassicPath: "m/44'/60'/160720'/0'", // first address: m/44'/60'/160720'/0/0
        trezorTestnetPath: "m/44'/1'/0'/0",        // first address: m/44'/1'/0'/0/0
        trezorClassicPath: "m/44'/61'/0'/0",       // first address: m/44'/61'/0'/0/0
        trezorPath:        "m/44'/60'/0'/0",       // first address: m/44'/60'/0'/0/0
        hwUbqPath:         "m/44'/108'/0'/0",      // first address: m/44'/40'/0'/0/0
        hwExpansePath:     "m/44'/40'/0'/0",       // first address: m/44'/40'/0'/0/0
        hwEllaismPath:     "m/44'/163'/0'/0",      // first address: m/44'/163'/0'/0/0
        hwPirlPath:        "m/44'/164'/0'/0",      // first address: m/44'/164'/0'/0/0
        hwEtherGemPath:    "m/44'/1987'/0'/0",     // first address: m/44'/1987'/0'/0/0
        hwCallistoPath:    "m/44'/820'/0'/0",      // first address: m/44'/820'/0'/0/0
        hwSocialPath:      "m/44'/1128'/0'/0",     // first address: m/44'/1128'/0'/0/0
        hwMusicoinPath:    "m/44'/184'/0'/0",      // first address: m/44'/184'/0'/0/0
        singularDTVPath:   "m/0'/0'/0'",           // first address: m/0'/0'/0'/0
        goPath:            "m/44'/6060'/0'/0",     // first address: m/44'/6060'/0'/0/0
        hwEOSClassicPath:  "m/44'/2018'/0'/0",     // first address: m/44'/2018'/0'/0/0
        hwAkromaPath:      "m/44'/200625'/0'/0",   // first address: m/44'/200625'/0'/0/0
        hwESNetworkPath:   "m/44'/31102'/0'/0",    // first address: m/44'/31102'/0'/0/0
        hwEther1Path:      "m/44'/1313114'/0'/0",  // first address: m/44'/1313114'/0'/0/0
        hwAtheiosPath:     "m/44'/1620'/0'/0",     // first address: m/44'/1620'/0'/0/0
    };
    $scope.HDWallet.dPath = $scope.HDWallet.defaultDPath;
    $scope.mnemonicModel = new Modal(document.getElementById('mnemonicModel'));
    $scope.$watch('ajaxReq.type', function() {
        $scope.nodeType = $scope.ajaxReq.type;
        $scope.setdPath();
    });
    $scope.$watch('walletType', function() {
        $scope.setdPath();
    });
    $scope.setdPath = function() {
        if ($scope.walletType == "ledger") {
            switch ($scope.nodeType) {
                case nodes.nodeTypes.ETH:
                    $scope.HDWallet.dPath = $scope.HDWallet.ledgerPath;
                    break;
                case nodes.nodeTypes.ETC:
                    $scope.HDWallet.dPath = $scope.HDWallet.ledgerClassicPath;
                    break;
                case nodes.nodeTypes.CLO:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwCallistoPath;
                    break;
                case nodes.nodeTypes.EXP:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwExpansePath;
                    break;
                case nodes.nodeTypes.UBQ:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwUbqPath;
                    break;
                case nodes.nodeTypes.POA:
                    $scope.HDWallet.dPath = $scope.HDWallet.ledgerPath;
                    break;
                case nodes.nodeTypes.AKROMA:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwAkromaPath;
                    break;
                case nodes.nodeTypes.PIRL:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwPirlPath;
                    break;
                case nodes.nodeTypes.ETHO:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwEther1Path;
                    break;
                case nodes.nodeTypes.ATH:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwAtheiosPath;
                    break;
                case nodes.nodeTypes.EGEM:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwEtherGemPath;
                    break;
                case nodes.nodeTypes.MUSIC:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwMusicoinPath;
                    break;
                default:
                    $scope.HDWallet.dPath = $scope.HDWallet.ledgerPath;
            }
        } else if ($scope.walletType == "trezor") {
            switch ($scope.nodeType) {
                case nodes.nodeTypes.ETH:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorPath;
                    break;
                case nodes.nodeTypes.ETC:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorClassicPath;
                    break;
                case nodes.nodeTypes.Ropsten:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorTestnetPath;
                    break;
                case nodes.nodeTypes.Rinkeby:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorTestnetPath;
                    break;
                case nodes.nodeTypes.Kovan:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorTestnetPath;
                    break;
                case nodes.nodeTypes.EXP:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwExpansePath;
                    break;
                case nodes.nodeTypes.UBQ:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwUbqPath;
                    break;
                case nodes.nodeTypes.ELLA:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwEllaismPath;
                    break;
                case nodes.nodeTypes.EGEM:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwEtherGemPath;
                    break;
                case nodes.nodeTypes.CLO:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwCallistoPath;
                    break;
                case nodes.nodeTypes.ETSC:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwSocialPath;
                    break;
                case nodes.nodeTypes.MUSIC:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwMusicoinPath;
                    break;
                case nodes.nodeTypes.GO:
                    $scope.HDWallet.dPath = $scope.HDWallet.goPath;
                    break;
                case nodes.nodeTypes.EOSC:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwEOSClassicPath;
                    break;
                case nodes.nodeTypes.AKROMA:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwAkromaPath;
                    break;
                case nodes.nodeTypes.ESN:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwESNetworkPath;
                    break;
                case nodes.nodeTypes.PIRL:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwPirlPath;
                    break;
                case nodes.nodeTypes.ETHO:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwEther1Path;
                    break;
                case nodes.nodeTypes.ATH:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwAtheiosPath;
                    break;
                default:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorPath;
            }
        } else {
          switch ($scope.nodeType) {
                case nodes.nodeTypes.ETH:
                    $scope.HDWallet.dPath = $scope.HDWallet.defaultDPath;
                    break;
                case nodes.nodeTypes.ETC:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorClassicPath;
                    break;
                case nodes.nodeTypes.Ropsten:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorTestnetPath;
                    break;
                case nodes.nodeTypes.Rinkeby:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorTestnetPath;
                    break;
                case nodes.nodeTypes.Kovan:
                    $scope.HDWallet.dPath = $scope.HDWallet.trezorTestnetPath;
                    break;
                case nodes.nodeTypes.EXP:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwExpansePath;
                    break;
                case nodes.nodeTypes.UBQ:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwUbqPath;
                    break;
                case nodes.nodeTypes.CLO:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwCallistoPath;
                    break;
                case nodes.nodeTypes.ETSC:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwSocialPath;
                    break;
                case nodes.nodeTypes.MUSIC:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwMusicoinPath;
                    break;
                case nodes.nodeTypes.GO:
                    $scope.HDWallet.dPath = $scope.HDWallet.goPath;
                    break;
                case nodes.nodeTypes.EOSC:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwEOSClassicPath;
                    break;
                case nodes.nodeTypes.AKROMA:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwAkromaPath;
                    break;
                case nodes.nodeTypes.ESN:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwESNetworkPath;
                    break;
                case nodes.nodeTypes.PIRL:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwPirlPath;
                    break;
                case nodes.nodeTypes.ETHO:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwEther1Path;
                    break;
                case nodes.nodeTypes.ATH:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwAtheiosPath;
                    break;
                default:
                  $scope.HDWallet.dPath = $scope.HDWallet.defaultDPath;
            }
        }
    }
    $scope.onHDDPathChange = function(password = $scope.mnemonicPassword) {
        $scope.HDWallet.numWallets = 0;
        if ($scope.walletType == 'pastemnemonic') {
            $scope.HDWallet.hdk = hd.HDKey.fromMasterSeed(hd.bip39.mnemonicToSeed($scope.manualmnemonic.trim(), password));
            $scope.setHDAddresses($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog);
        } else if ($scope.walletType == 'ledger') {
            $scope.scanLedger();
        } else if ($scope.walletType == 'trezor') {
            $scope.scanTrezor();
        } else if ($scope.walletType == 'digitalBitbox') {
            $scope.scanDigitalBitbox();
        } else if ($scope.walletType == 'secalot') {
            $scope.scanSecalot();
        }
    }
    $scope.onCustomHDDPathChange = function() {
        $scope.HDWallet.dPath = $scope.HDWallet.customDPath;
        $scope.onHDDPathChange();
    }
    $scope.showContent = function($fileContent) {
        $scope.notifier.info(globalFuncs.successMsgs[4] + document.getElementById('fselector').files[0].name);
        try {
            $scope.requireFPass = Wallet.walletRequirePass($fileContent);
            $scope.showFDecrypt = !$scope.requireFPass;
            $scope.fileContent = $fileContent;
        } catch (e) {
            $scope.notifier.danger(e);
        }
    };
    $scope.openFileDialog = function($fileContent) {
        $scope.showAOnly = false;
        document.getElementById('fselector').click();
    };
    $scope.onFilePassChange = function() {
        $scope.showAOnly = false;
        $scope.showFDecrypt = $scope.filePassword.length >= 0;
    };
    $scope.onPrivKeyChange = function() {
        $scope.showAOnly = false;
        const manualprivkey = fixPkey($scope.manualprivkey);

        $scope.requirePPass = manualprivkey.length == 128 || manualprivkey.length == 132;
        $scope.showPDecrypt = manualprivkey.length == 64;
    };
    $scope.onPrivKeyPassChange = function() {
        $scope.showAOnly = false;
        $scope.showPDecrypt = $scope.privPassword.length > 0;
    };
    $scope.onMnemonicChange = function() {
        $scope.showAOnly = false;
        $scope.showMDecrypt = hd.bip39.validateMnemonic($scope.manualmnemonic);
    };
    $scope.onParityPhraseChange = function() {
        if ($scope.parityPhrase) $scope.showParityDecrypt = true;
        else $scope.showParityDecrypt = false;
    };
    $scope.onAddressChange = function() {
        $scope.requireFPass = $scope.requirePPass = $scope.showFDecrypt = $scope.showPDecrypt = $scope.showParityDecrypt = false;
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
            if ($scope.walletType == "ledger") {
                $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, $scope.HDWallet.dPath + "/" + i, $scope.walletType, $scope.ledger));
            } else if ($scope.walletType == "digitalBitbox") {
                $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, $scope.HDWallet.dPath + "/" + i, $scope.walletType, $scope.digitalBitbox));
            } else if ($scope.walletType == "secalot") {
                $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, $scope.HDWallet.dPath + "/" + i, $scope.walletType, $scope.secalot));
            } else {
                $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, $scope.HDWallet.dPath + "/" + i, $scope.walletType));
            }
            $scope.HDWallet.wallets[$scope.HDWallet.wallets.length - 1].type = "addressOnly";
            $scope.HDWallet.wallets[$scope.HDWallet.wallets.length - 1].setBalance(false);
        }
        $scope.HDWallet.id = 0;
        $scope.HDWallet.numWallets = start + limit;
    }
    $scope.AddRemoveHDAddresses = function(isAdd) {
        if ($scope.walletType == "ledger" || $scope.walletType == "trezor" || $scope.walletType == "digitalBitbox" || $scope.walletType == "secalot") {
            if (isAdd) $scope.setHDAddressesHWWallet($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog);
            else $scope.setHDAddressesHWWallet($scope.HDWallet.numWallets - 2 * $scope.HDWallet.walletsPerDialog, $scope.HDWallet.walletsPerDialog);
        } else {
            if (isAdd) $scope.setHDAddresses($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog);
            else $scope.setHDAddresses($scope.HDWallet.numWallets - 2 * $scope.HDWallet.walletsPerDialog, $scope.HDWallet.walletsPerDialog);
        }
    }
    $scope.setHDWallet = function() {
        walletService.wallet = $scope.wallet = $scope.HDWallet.wallets[$scope.HDWallet.id];
        $scope.mnemonicModel.close();
        $scope.notifier.info(globalFuncs.successMsgs[1]);
        $scope.wallet.type = "default";
    }
    $scope.decryptWallet = function() {
        $scope.wallet = null;
        try {
          if ($scope.showPDecrypt && $scope.requirePPass) {
            $scope.wallet = Wallet.fromMyEtherWalletKey($scope.manualprivkey, $scope.privPassword);
            walletService.password = $scope.privPassword;
          } else if ($scope.showPDecrypt && !$scope.requirePPass) {
            let privKey = $scope.manualprivkey.indexOf("0x") === 0 ? $scope.manualprivkey : "0x" + $scope.manualprivkey;

            if (!$scope.Validator.isValidHex($scope.manualprivkey)) {
              $scope.notifier.danger(globalFuncs.errorMsgs[37]);
              return;
            } else if(!ethUtil.isValidPrivate(ethUtil.toBuffer(privKey))) {
              $scope.wallet = null;
              $scope.notifier.danger(globalFuncs.errorMsgs[40]);
              return;
            } else {
              $scope.wallet = new Wallet(fixPkey($scope.manualprivkey));
              walletService.password = '';
            }
          } else if ($scope.showFDecrypt) {
            $scope.wallet = Wallet.getWalletFromPrivKeyFile($scope.fileContent, $scope.filePassword);
            walletService.password = $scope.filePassword;
          } else if ($scope.showMDecrypt) {
            $scope.mnemonicModel = new Modal(document.getElementById('mnemonicModel'));
            $scope.mnemonicModel.open();
            $scope.onHDDPathChange($scope.mnemonicPassword);
          } else if ($scope.showParityDecrypt) {
            $scope.wallet = Wallet.fromParityPhrase($scope.parityPhrase);
          }
          walletService.wallet = $scope.wallet;
        } catch (e) {
          $scope.notifier.danger(globalFuncs.errorMsgs[6] + e);
        }

        if ($scope.wallet !== null) {
          $scope.notifier.info(globalFuncs.successMsgs[1]);
          $scope.wallet.type = "default";
        }
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
            $scope.notifier.info(globalFuncs.successMsgs[1]);
            walletService.wallet = $scope.wallet;
        }
    }
    $scope.HWWalletCreate = function(publicKey, chainCode, walletType, path) {
        $scope.mnemonicModel = new Modal(document.getElementById('mnemonicModel'));
        $scope.mnemonicModel.open();
        $scope.HDWallet.hdk = new hd.HDKey();
        $scope.HDWallet.hdk.publicKey = new Buffer(publicKey, 'hex');
        $scope.HDWallet.hdk.chainCode = new Buffer(chainCode, 'hex');
        $scope.HDWallet.numWallets = 0;
        $scope.HDWallet.dPath = path;
        $scope.setHDAddressesHWWallet($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog, walletType);
        walletService.wallet = null;
    }
    $scope.ledgerCallback = function(result, error) {
        if (typeof result != "undefined") {
            $scope.HWWalletCreate(result['publicKey'], result['chainCode'], "ledger", $scope.getLedgerPath());
        }
        else {
            $scope.ledgerError = true;
            $scope.ledgerErrorString = error;
            $scope.$apply();
        }
    }
    $scope.trezorCallback = function(response) {
        if (response.success) {
            $scope.HWWalletCreate(response.publicKey, response.chainCode, "trezor", $scope.getTrezorPath());
        } else {
            $scope.trezorError = true;
            $scope.trezorErrorString = response.error;
            $scope.$apply();
        }
    }
    $scope.digitalBitboxCallback = function(result, error) {
        $scope.HDWallet.digitalBitboxSecret = '';
        if (typeof result != "undefined") {
            $scope.HWWalletCreate(result['publicKey'], result['chainCode'], "digitalBitbox", $scope.HDWallet.dPath);
        } else
            $scope.notifier.danger(error);
    }
    $scope.secalotCallback = function(result, error) {
        if (typeof result != "undefined") {
            $scope.HWWalletCreate(result['publicKey'], result['chainCode'], "secalot", $scope.HDWallet.dPath);
        } else
            $scope.notifier.danger(error);
    }
    $scope.scanLedger = function() {
        $scope.ledgerError = false;
        $scope.ledger = new Ledger3("w0w");
        var app = new ledgerEth($scope.ledger);
        var path = $scope.getLedgerPath();
        app.getAddress(path, $scope.ledgerCallback, false, true);
    };
    $scope.scanDigitalBitbox = function() {
        $scope.digitalBitbox = new DigitalBitboxUsb();
        var app = new DigitalBitboxEth($scope.digitalBitbox, $scope.HDWallet.digitalBitboxSecret);
        var path = $scope.HDWallet.dPath;
        app.getAddress(path, $scope.digitalBitboxCallback);
    };
    $scope.scanSecalot = function() {
        $scope.secalot = new SecalotUsb();
        if (typeof $scope.HDWallet.secalotSecret == "undefined") {
            $scope.HDWallet.secalotSecret = "";
        }
        var app = new SecalotEth($scope.secalot, $scope.HDWallet.secalotSecret);
        var path = $scope.HDWallet.dPath;
        app.getAddress(path, $scope.secalotCallback);
    };
    $scope.scanTrezor = function() {
        // trezor is using the path without change level id
        var path = $scope.getTrezorPath();

        console.warn("SCANTR", path, $scope.HDWallet)
        TrezorConnect.getXPubKey(path, $scope.trezorCallback, '1.5.2');
    };
    $scope.getLedgerPath = function() {
        return $scope.HDWallet.dPath;
    }
    $scope.getTrezorPath = function() {
        return $scope.HDWallet.dPath;
    };
    $scope.scanMetamask = function() {
        window.web3.eth.getAccounts(function (err, accounts) {
          if (err) $scope.notifier.danger(err + '. Are you sure you are on a secure (SSL / HTTPS) connection?')
          if (!accounts.length) {
            $scope.notifier.danger('Could not read your accounts from MetaMask. Try unlocking it.');
            return;
          }
          var address = accounts[0]
          var addressBuffer = Buffer.from(address.slice(2), 'hex');
          var wallet = new Web3Wallet(addressBuffer);
          wallet.setBalance(false);
          // set wallet
          $scope.wallet = wallet
          walletService.wallet = wallet
          $scope.notifier.info(globalFuncs.successMsgs[6])
          $scope.wallet.type = "default";
        });
    };

    // helper function that removes 0x prefix from strings
    function fixPkey(key) {
        if (key.indexOf('0x') === 0) {
            return key.slice(2);
        }
        return key;
    }
};
module.exports = decryptWalletCtrl;
