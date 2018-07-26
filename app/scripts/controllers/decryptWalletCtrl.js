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
        hwEtherGemPath:    "m/44'/1987'/0'/0",     // first address: m/44'/1987'/0'/0/0
        hwCallistoPath:    "m/44'/820'/0'/0",      // first address: m/44'/820'/0'/0/0
        hwSocialPath:      "m/44'/1128'/0'/0",     // first address: m/44'/1128'/0'/0/0
        hwMusicoinPath:    "m/44'/184'/0'/0",      // first address: m/44'/184'/0'/0/0
        singularDTVPath:   "m/0'/0'/0'",           // first address: m/0'/0'/0'/0
        hwRskPath:         "m/44'/137'/0'/0",      // first address : m/44'/137'/0'/0/0
        goPath:            "m/44'/6060'/0'/0",     // first address: m/44'/6060'/0'/0/0
        hwEOSClassicPath:  "m/44'/2018'/0'/0",     // first address: m/44'/2018'/0'/0/0
    };
    $scope.canUseMewConnect = MewConnectEth.checkWebRTCAvailable()
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
                case nodes.nodeTypes.EXP:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwExpansePath;
                    break;
                case nodes.nodeTypes.UBQ:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwUbqPath;
                    break;
                case nodes.nodeTypes.POA:
                    $scope.HDWallet.dPath = $scope.HDWallet.ledgerPath;
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
                case nodes.nodeTypes.RSK:
                    $scope.HDWallet.dPath = $scope.HDWallet.hwRskPath;
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
                default:
                  $scope.HDWallet.dPath = $scope.HDWallet.defaultDPath;
            }
        }
    }

  $scope.onHDDPathChange = function (password = $scope.mnemonicPassword) {
    $scope.HDWallet.numWallets = 0
    if ($scope.walletType == 'pastemnemonic') {
      $scope.HDWallet.hdk = hd.HDKey.fromMasterSeed(hd.bip39.mnemonicToSeed($scope.manualmnemonic.trim(), password))
      $scope.setHDAddresses($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog)
    } else if ($scope.walletType == 'ledger') {
      $scope.scanLedger()
    } else if ($scope.walletType == 'trezor') {
      $scope.scanTrezor()
    } else if ($scope.walletType == 'digitalBitbox') {
      $scope.scanDigitalBitbox()
    } else if ($scope.walletType == 'secalot') {
      $scope.scanSecalot()
    } else if ($scope.walletType == 'mewConnect') {
      $scope.scanMewConnect()
    }
  }
  $scope.onCustomHDDPathChange = function () {
    $scope.HDWallet.dPath = $scope.HDWallet.customDPath
    $scope.onHDDPathChange()
  }
  $scope.showContent = function ($fileContent) {
    $scope.notifier.info(globalFuncs.successMsgs[4] + document.getElementById('fselector').files[0].name)
    try {
      $scope.requireFPass = Wallet.walletRequirePass($fileContent)
      $scope.showFDecrypt = !$scope.requireFPass
      $scope.fileContent = $fileContent
    } catch (e) {
      $scope.notifier.danger(e)
    }
  }

  $scope.onAddressChange = function () {
    $scope.requireFPass = $scope.requirePPass = $scope.showFDecrypt = $scope.showPDecrypt = $scope.showParityDecrypt = false
    $scope.showAOnly = $scope.Validator.isValidAddress($scope.addressOnly)
  }
  $scope.setHDAddresses = function (start, limit) {
    $scope.HDWallet.wallets = []
    for (var i = start; i < start + limit; i++) {
      $scope.HDWallet.wallets.push(new Wallet($scope.HDWallet.hdk.derive($scope.HDWallet.dPath + '/' + i)._privateKey))
      $scope.HDWallet.wallets[$scope.HDWallet.wallets.length - 1].setBalance(false)
    }
    $scope.HDWallet.id = 0
    $scope.HDWallet.numWallets = start + limit
  }
  $scope.setHDAddressesHWWallet = function (start, limit, ledger) {
    $scope.HDWallet.wallets = []
    for (var i = start; i < start + limit; i++) {
      var derivedKey = $scope.HDWallet.hdk.derive('m/' + i)
      if ($scope.walletType == 'ledger') {
        $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, $scope.HDWallet.dPath + '/' + i, $scope.walletType, $scope.ledger))
      } else if ($scope.walletType == 'digitalBitbox') {
        $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, $scope.HDWallet.dPath + '/' + i, $scope.walletType, $scope.digitalBitbox))
      } else if ($scope.walletType == 'mewConnect') {
        $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, $scope.HDWallet.dPath + '/' + i, $scope.walletType, $scope.mewConnect))
      } else if ($scope.walletType == 'secalot') {
        $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, $scope.HDWallet.dPath + '/' + i, $scope.walletType, $scope.secalot))
      } else {
        $scope.HDWallet.wallets.push(new Wallet(undefined, derivedKey.publicKey, $scope.HDWallet.dPath + '/' + i, $scope.walletType))
      }
      $scope.HDWallet.wallets[$scope.HDWallet.wallets.length - 1].type = 'addressOnly'
      $scope.HDWallet.wallets[$scope.HDWallet.wallets.length - 1].setBalance(false)
    }
    $scope.HDWallet.id = 0
    $scope.HDWallet.numWallets = start + limit
  }
  $scope.AddRemoveHDAddresses = function (isAdd) {
    if ($scope.walletType == 'ledger' || $scope.walletType == 'trezor' || $scope.walletType == 'digitalBitbox' || $scope.walletType == 'secalot' || $scope.walletType == 'mewConnect') {
      if (isAdd) $scope.setHDAddressesHWWallet($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog)
      else $scope.setHDAddressesHWWallet($scope.HDWallet.numWallets - 2 * $scope.HDWallet.walletsPerDialog, $scope.HDWallet.walletsPerDialog)
    } else {
      if (isAdd) $scope.setHDAddresses($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog)
      else $scope.setHDAddresses($scope.HDWallet.numWallets - 2 * $scope.HDWallet.walletsPerDialog, $scope.HDWallet.walletsPerDialog)
    }
  }
  $scope.setHDWallet = function () {
    walletService.wallet = $scope.wallet = $scope.HDWallet.wallets[$scope.HDWallet.id]
    $scope.mnemonicModel.close()
    $scope.notifier.info(globalFuncs.successMsgs[1])
    $scope.wallet.type = 'default'
  }
  $scope.decryptWallet = function () {
    $scope.wallet = null
    try {
      if ($scope.showPDecrypt && $scope.requirePPass) {
        $scope.wallet = Wallet.fromMyEtherWalletKey($scope.manualprivkey, $scope.privPassword)
        walletService.password = $scope.privPassword
      } else if ($scope.showPDecrypt && !$scope.requirePPass) {
        let privKey = $scope.manualprivkey.indexOf('0x') === 0 ? $scope.manualprivkey : '0x' + $scope.manualprivkey

        if (!$scope.Validator.isValidHex($scope.manualprivkey)) {
          $scope.notifier.danger(globalFuncs.errorMsgs[37])
          return
        } else if (!ethUtil.isValidPrivate(ethUtil.toBuffer(privKey))) {
          $scope.wallet = null
          $scope.notifier.danger(globalFuncs.errorMsgs[40])
          return
        } else {
          $scope.wallet = new Wallet(fixPkey($scope.manualprivkey))
          walletService.password = ''
        }
      } else if ($scope.showFDecrypt) {
        $scope.wallet = Wallet.getWalletFromPrivKeyFile($scope.fileContent, $scope.filePassword)
        walletService.password = $scope.filePassword
      } else if ($scope.showMDecrypt) {
        $scope.mnemonicModel = new Modal(document.getElementById('mnemonicModel'))
        $scope.mnemonicModel.open()
        $scope.onHDDPathChange($scope.mnemonicPassword)
      } else if ($scope.showParityDecrypt) {
        $scope.wallet = Wallet.fromParityPhrase($scope.parityPhrase)
      }
      walletService.wallet = $scope.wallet
    } catch (e) {
      $scope.notifier.danger(globalFuncs.errorMsgs[6] + e)
    }

    if ($scope.wallet !== null) {
      $scope.notifier.info(globalFuncs.successMsgs[1])
      $scope.wallet.type = 'default'
    }
  }
  $scope.decryptAddressOnly = function () {
    if ($scope.Validator.isValidAddress($scope.addressOnly)) {
      var tempWallet = new Wallet()
      $scope.wallet = {
        type: 'addressOnly',
        address: $scope.addressOnly,
        getAddressString: function () {
          return this.address
        },
        getChecksumAddressString: function () {
          return ethUtil.toChecksumAddress(this.getAddressString())
        },
        setBalance: tempWallet.setBalance,
        setTokens: tempWallet.setTokens
      }
      $scope.notifier.info(globalFuncs.successMsgs[1])
      walletService.wallet = $scope.wallet
    }
  }
  $scope.HWWalletCreate = function (publicKey, chainCode, walletType, path) {
    $scope.mnemonicModel = new Modal(document.getElementById('mnemonicModel'))
    $scope.mnemonicModel.open()
    $scope.HDWallet.hdk = new hd.HDKey()
    $scope.HDWallet.hdk.publicKey = new Buffer(publicKey, 'hex')
    $scope.HDWallet.hdk.chainCode = new Buffer(chainCode, 'hex')
    $scope.HDWallet.numWallets = 0
    $scope.HDWallet.dPath = path
    $scope.setHDAddressesHWWallet($scope.HDWallet.numWallets, $scope.HDWallet.walletsPerDialog, walletType)
    walletService.wallet = null
  }

  // ================= Mew Connect (start)==============================
  $scope.scanMewConnect = function () {
    var app = new MewConnectEth()

    $scope.mewConnect = MewConnect.init(null, null, {
      wrtc: MewRTC,
      io: window.socketIo,
      ethUtils: window.ethUtil
    })

    Reflect.defineProperty(MewConnect, 'instance', {
      value: $scope.mewConnect
    })

    $scope.$on('$destroy', function () {
      $scope.mewConnect.disconnectRTC()
      if (MewConnect.instance) {
        Reflect.deleteProperty(MewConnect, 'instance')
      }
    })

    $scope.mewConnect.on('codeDisplay', codeDisplay)
    $scope.mewConnect.on('RtcConnectedEvent', rtcConnected)
    $scope.mewConnect.on('RtcClosedEvent', rtcClosed)
    $scope.mewConnect.on('address', makeWallet)

    app.setMewConnect($scope.mewConnect)
    app.signalerConnect()

    $scope.connectionCodeTimeout = null

    function rtcConnected (data) {
      if ($scope.connectionCodeTimeout) {
        clearTimeout($scope.connectionCodeTimeout)
      }
      $scope.connectionCodeTimeout = null
      uiFuncs.notifier.info('Connected Via Mew Connect')
      $scope.mewConnect.sendRtcMessage('address', '')
      $scope.mewConnectionStatus = 2
    }

    function rtcClosed (data) {
      $scope.mewConnectionStatus = 0
      $scope.wallet = null
      walletService.wallet = null
      uiFuncs.notifier.danger('Disconnected', 10000)
      if (!$scope.$$phase) $scope.$apply()
    }

    function codeDisplay (data) {
      $scope.mewConnectionStatus = 1
      $scope.mewConnectCode = data
      $scope.connectionCodeTimeout = setTimeout(() => {
        $scope.mewConnectionStatus = 3
        if (!$scope.$$phase) $scope.$apply()
      }, 120800) // 200ms before the actual server timeout happens. (to account for transit time, ui lag, etc.)
      if (!$scope.$$phase) $scope.$apply()
    }

    function makeWallet (data) {
      var wallet = app.createWallet(data)
      $scope.wallet = wallet
      walletService.wallet = wallet
      if (!$scope.$$phase) $scope.$apply()
    }
  }

  $scope.mewConnectDisconnect = function () {
    $scope.mewConnect.disconnectRTC()
  }
  //= ================ Mew Connect (end)==============================

  // helper function that removes 0x prefix from strings
  function fixPkey (key) {
    if (key.indexOf('0x') === 0) {
      return key.slice(2)
    }
    return key
  }
}
module.exports = decryptWalletCtrl
