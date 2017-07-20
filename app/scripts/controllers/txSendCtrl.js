'use strict';
var txSendCtrl = function($scope, $sce, $interval, walletService) {
    $scope.ajaxReq = ajaxReq;
    $scope.dropdownEnabled = true;
    $scope.unitReadable = 'ether';
    $scope.gasLimitChanged = false;
    $scope.sendTxModal = new Modal(document.getElementById('txSend'));
    $scope.offlineSignModal = new Modal(document.getElementById('offlineDecrypt'));
    $scope.tx = {gasLimit: globalFuncs.defaultTxGasLimit,
      from: "",
      data: "",
      to: "",
      unit: "ether",
      value: '',
      nonce: null,
      gasPrice: null,
      donate: false
    };
    $scope.tx.readOnly = globalFuncs.urlGet('readOnly') == null ? false : true;
    $scope.unitReadable = ajaxReq.type;
    $scope.Validator = Validator;

    walletService.password = '';
    walletService.wallet = null;
    walletService.walletType = null;

    // Visibility Controls for Advanced Fields
    $scope.advancedVisible = true;
    $scope.gasPriceVisible = true;
    $scope.nonceVisible = true;
    $scope.gasLimitChanged = globalFuncs.urlGet('gaslimit') != null ? true : false;

    // Custom Gas Limit / Msg
    $scope.customGasMsg = '';
    $scope.customGas = CustomGasMessages;

    // Tokens
    $scope.tokenVisibility = "hidden";
    $scope.tokenTx = {
        to: '',
        value: 0,
        id: -1,
        tokenSymbol: 'ether'
    };
    //set initial offline
    $scope.onlyOffline ={
      isOnline  : '',
      isOffline : 'disabled',
      offMsg    : 'ERROR_38',
      onMsg     : 'TX_Broadcast'
    };

    $scope.setSendMode = function(sendMode, tokenId = '', tokenSymbol = '') {
        $scope.unitReadable = '';
        if ( globalFuncs.urlGet('tokensymbol') != null ) {
            $scope.unitReadable = $scope.tx.tokensymbol;
            $scope.tx.sendMode = 'token';
        } else if (sendMode == 'ether') {
            $scope.unitReadable = ajaxReq.type;
        } else {
            $scope.unitReadable = tokenSymbol;
            $scope.tokenTx.id = tokenId;
        }
        $scope.dropdownAmount = false;
    }

    $scope.setTokenSendMode = function() {
        if ($scope.tx.sendMode == 'token' && !$scope.tx.tokensymbol) {
            $scope.tx.tokensymbol = $scope.wallet.tokenObjs[0].symbol;
            $scope.wallet.tokenObjs[0].type = "custom";
            $scope.setSendMode($scope.tx.sendMode, 0, $scope.tx.tokensymbol);
        } else if ($scope.tx.tokensymbol) {
            for (var i = 0; i < $scope.wallet.tokenObjs.length; i++) {
                if ($scope.wallet.tokenObjs[i].symbol.toLowerCase().indexOf($scope.tx.tokensymbol.toLowerCase()) !== -1) {
                    $scope.wallet.tokenObjs[i].type = "custom";
                    $scope.setSendMode('token', i, $scope.wallet.tokenObjs[i].symbol);
                    break;
                } else $scope.tokenTx.id = -1;
            }
        }
        if ($scope.tx.sendMode != 'token') $scope.tokenTx.id = -1;
    }

    $scope.getNonce = function() {
        ajaxReq.getTransactionData($scope.wallet.getAddressString(), function(data) {
            if ( data.error ) throw data.msg;
                data = data.data;
                $scope.tx.nonce = ethFuncs.hexToDecimal(data.nonce);
      });
    }



    $scope.tx = {
        gasLimit:    globalFuncs.urlGet('gaslimit') == null       ? globalFuncs.defaultTxGasLimit : globalFuncs.urlGet('gaslimit'),
        data:        globalFuncs.urlGet('data') == null           ? ''                            : globalFuncs.urlGet('data'),
        to:          globalFuncs.urlGet('to') == null             ? ''                            : globalFuncs.urlGet('to'),
        value:       globalFuncs.urlGet('value') == null          ? ''                            : globalFuncs.urlGet('value'),
        nonce:       globalFuncs.urlGet('nonce') == null          ? ''                            : globalFuncs.urlGet('nonce'),
        gasPrice:    globalFuncs.urlGet('gasPrice') == null       ? ethFuncs.gasPriceFromSlider   : globalFuncs.urlGet('gasPrice'),
        tokenSymbol: globalFuncs.urlGet('tokenSymbol') == null    ? ''                            : globalFuncs.urlGet('tokenSymbol'),
        readOnly:    globalFuncs.urlGet('readOnly') == null       ? false                         : true,
        unit:        "ether",
        sendMode:    globalFuncs.urlGet('sendMode') == null       ? $scope.setSendMode('ether')   : $scope.setSendMode(globalFuncs.urlGet('sendMode'))
    }



    if (globalFuncs.urlGet('data') || globalFuncs.urlGet('value') || globalFuncs.urlGet('to') || globalFuncs.urlGet('gaslimit') || globalFuncs.urlGet('sendMode') || globalFuncs.urlGet('tokenSymbol')) {
      $scope.hasQueryString = true // if there is a query string, show an warning at top of page
    }


    var applyScope = function() {
        if (!$scope.$$phase) $scope.$apply();
    }

    $scope.setTxObjFromParent = function() {
        $scope.advancedVisible = true;
        $scope.gasPriceVisible = true;
        $scope.nonceVisible = true;
        $scope.gasLimitChanged = true;
        var setTxObj = function() {
          $scope.addressDrtv.ensAddressField = $scope.parentTxConfig.to;
          $scope.tx.value                    = $scope.parentTxConfig.value;
          $scope.tx.sendMode                 = $scope.parentTxConfig.sendMode                               ? $scope.parentTxConfig.sendMode    : 'ether';
          $scope.tx.tokenSymbol              = $scope.parentTxConfig.tokenSymbol                            ? $scope.parentTxConfig.tokenSymbol : '';
          $scope.tx.readOnly                 = $scope.addressDrtv.readOnly = $scope.parentTxConfig.readOnly ? $scope.parentTxConfig.readOnly    : false;
          $scope.tx.gasPrice                 = $scope.parentTxConfig.gasPrice                               ? $scope.parentTxConfig.gasPrice    : null;
          $scope.tx.nonce                    = $scope.parentTxConfig.nonce                                  ? $scope.parentTxConfig.nonce       : null;
          $scope.tx.data                     = $scope.parentTxConfig.data                                   ? $scope.parentTxConfig.data        : $scope.tx.data;
          if ($scope.parentTxConfig.gasLimit) {
              $scope.tx.gasLimit     = $scope.parentTxConfig.gasLimit;
              $scope.gasLimitChanged = true;
          }
        }
        $scope.$watch('parentTxConfig', function() {
          setTxObj();
        }, true);
    }

    $scope.$watch(function() {
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function() {
        if (walletService.wallet == null) return;
        $scope.wallet = walletService.wallet;
        $scope.wd = true;
        $scope.wallet.setBalance(applyScope);
        $scope.wallet.setTokens();
        if ( $scope.parentTxConfig ) {
          $scope.setTxObjFromParent();
        } else if ( walletService.walletType == 'addressOnly' ) {
            $scope.advancedVisible = true;
            $scope.gasPriceVisible = true;
            $scope.nonceVisible    = false;
            $scope.gasLimitChanged = false;
            $scope.tx.from         = $scope.wallet.getAddressString();
            $scope.getNonce();
        } else {
          $scope.advancedVisible = globalFuncs.urlGet('gaslimit') != null || globalFuncs.urlGet('data') != null || globalFuncs.urlGet('gasPrice') != null;
        }
        $scope.setSendMode();
        $scope.setTokenSendMode();
    });

    $scope.$watch('ajaxReq.key', function() {
        if ($scope.wallet) {
            $scope.setSendMode('ether');
            $scope.wallet.setBalance(applyScope);
            $scope.wallet.setTokens();
        }
    });
    $scope.$watch('tokenTx', function() {
        if ($scope.wallet && $scope.wallet.tokenObjs !== undefined && $scope.wallet.tokenObjs[$scope.tokenTx.id] !== undefined && $scope.Validator.isValidAddress($scope.tokenTx.to) && $scope.Validator.isPositiveNumber($scope.tokenTx.value)) {
            if ($scope.estimateTimer) clearTimeout($scope.estimateTimer);
            $scope.estimateTimer = setTimeout(function() {
                $scope.estimateGasLimit();
            }, 500);
        }
    }, true);

    $scope.$watch('tx', function(newValue, oldValue) {
        $scope.showRaw = false;
        if (oldValue.sendMode && oldValue.sendMode != newValue.sendMode && newValue.sendMode == 'ether') {
            $scope.tx.data = '';
            $scope.tx.gasLimit = globalFuncs.defaultTxGasLimit;
        }
        if (newValue.gasLimit == oldValue.gasLimit && $scope.wallet && $scope.Validator.isValidAddress($scope.tx.to) && $scope.Validator.isPositiveNumber($scope.tx.value) && $scope.Validator.isValidHex($scope.tx.data) && $scope.tx.sendMode != 'token') {
            if ($scope.estimateTimer) clearTimeout($scope.estimateTimer);
            $scope.estimateTimer = setTimeout(function() {
                $scope.estimateGasLimit();
            }, 500);
        }
        if ($scope.tx.sendMode == 'token') {
            $scope.tokenTx.to = $scope.tx.to;
            $scope.tokenTx.value = $scope.tx.value;
        }
        if (newValue.to !== oldValue.to) {
            for (var i in $scope.customGas) {
                if ($scope.tx.to.toLowerCase() == $scope.customGas[i].to.toLowerCase()) {
                    $scope.customGasMsg = $scope.customGas[i].msg != '' ? $scope.customGas[i].msg : ''
                    return;
                }
            }

            $scope.customGasMsg = ''
        }
    }, true);

    $scope.estimateGasLimit = function() {
        $scope.customGasMsg = ''
        if ($scope.gasLimitChanged) return;
        for (var i in $scope.customGas) {
            if ($scope.tx.to.toLowerCase() == $scope.customGas[i].to.toLowerCase()) {
                $scope.advancedVisible = $scope.customGas[i].data != '' ? true : false;
                $scope.tx.gasLimit = $scope.customGas[i].gasLimit;
                $scope.tx.data = $scope.customGas[i].data;
                $scope.customGasMsg = $scope.customGas[i].msg != '' ? $scope.customGas[i].msg : ''
                return;
            }
        }
        if (globalFuncs.lightMode) {
            $scope.tx.gasLimit = globalFuncs.defaultTokenGasLimit;
            return;
        }
        var estObj = {
            to: $scope.tx.to,
            from: $scope.wallet.getAddressString(),
            value: ethFuncs.sanitizeHex(ethFuncs.decimalToHex(etherUnits.toWei($scope.tx.value, $scope.tx.unit)))
        }
        if ($scope.tx.data != '') estObj.data = ethFuncs.sanitizeHex($scope.tx.data);
        if ($scope.tx.sendMode == 'token') {
            estObj.to = $scope.wallet.tokenObjs[$scope.tokenTx.id].getContractAddress();
            estObj.data = $scope.wallet.tokenObjs[$scope.tokenTx.id].getData($scope.tokenTx.to, $scope.tokenTx.value).data;
            estObj.value = '0x00';
        }
        ethFuncs.estimateGas(estObj, function(data) {

            if (!data.error) {
                if (data.data == '-1') $scope.notifier.danger(globalFuncs.errorMsgs[21]);
                $scope.tx.gasLimit = data.data;
            } else $scope.notifier.danger(data.msg);
        });
    }
    var isEnough = function(valA, valB) {
        return new BigNumber(valA).lte(new BigNumber(valB));
    }
    $scope.hasEnoughBalance = function() {
        if ($scope.wallet.balance == 'loading') return false;
        return isEnough($scope.tx.value, $scope.wallet.balance);
    }

    //*gas price slider *//
    var gasPriceKey = "gasPrice";
    $scope.gasPriceChanged = function() {
        globalFuncs.localStorage.setItem(gasPriceKey, $scope.gas.value);
        ethFuncs.gasPriceFromSlider = $scope.gas.value;
    }
    var setGasPriceValues = function() {
        $scope.gas = {
            curVal: 21,
            value: globalFuncs.localStorage.getItem(gasPriceKey, null) ? parseInt(globalFuncs.localStorage.getItem(gasPriceKey)) : 21,
            max: 60,
            min: 1
        }
        ethFuncs.gasPriceFromSlider = $scope.gas.value;
    }
    setGasPriceValues();
    $scope.gasPriceChanged();

    $interval(function(){
      if (navigator.onLine) {
        $scope.onlyOffline ={
        isOnline  : '',
        isOffline : 'disabled',
        offMsg    : 'ERROR_38',
        onMsg     : 'TX_Broadcast'
      };
      if ($scope.wd == false){
      $scope.wallet = walletService.wallet;
      $scope.wd = true;
      $scope.showEnc = walletService.password != '';
      if (walletService.wallet.type == "default") $scope.blob = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toJSON());
      if (walletService.password != '') {
          $scope.blobEnc = globalFuncs.getBlob("text/json;charset=UTF-8", $scope.wallet.toV3(walletService.password, {
              kdf: globalFuncs.kdf,
              n: globalFuncs.scrypt.n
          }));
          $scope.encFileName = $scope.wallet.getV3Filename();
      }
      $scope.wallet.setBalance();
      $scope.wallet.setTokens();
      $scope.getNonce();
    }
    } else {
      $scope.wd = false;
      $scope.onlyOffline = {
      isOnline : 'disabled',
      isOffline :'',
      offMsg    : 'WALL_Unlock',
      onMsg     : 'ERROR_39'
      }
     }
    },5000);


    $scope.generateTx = function() {

        var txData = uiFuncs.getTxData($scope);

        txData.gasPrice = $scope.gas.value   ? '0x' + new BigNumber($scope.gas.value).toString(16) : null;
        txData.nonce    = $scope.tx.nonce    ? '0x' + new BigNumber($scope.tx.nonce).toString(16)    : null;

        // set to true for offline tab and txView tab
        // on sendtx tab, it pulls gas price from the gasprice slider & nonce
        // if its true the whole txData object is set - don't try to change it
        // if false, replace gas price and nonce. gas price from slider. nonce from server.
        if (txData.gasPrice && txData.nonce) txData.isOffline = true;

        if ($scope.tx.sendMode == 'token') {
            // if the amount of tokens you are trying to send > tokens you have, throw error
            if (!isEnough($scope.tx.value, $scope.wallet.tokenObjs[$scope.tokenTx.id].balance)) {
                $scope.notifier.danger(globalFuncs.errorMsgs[0]);
                return;
            }
            txData.to = $scope.wallet.tokenObjs[$scope.tokenTx.id].getContractAddress();
            txData.data = $scope.wallet.tokenObjs[$scope.tokenTx.id].getData($scope.tokenTx.to, $scope.tokenTx.value).data;
            txData.value = '0x00';
        }

        uiFuncs.generateTx(txData, function(rawTx) {
            if (!rawTx.isError) {
                $scope.rawTx = rawTx.rawTx;
                $scope.signedTx = rawTx.signedTx;
                $scope.showRaw = true;
            } else {
                $scope.showRaw = false;
                $scope.notifier.danger(rawTx.error);
            }
            if (!$scope.$$phase) $scope.$apply();
        });
    }

    $scope.confirmSendTx = function() {
       try {
           if ($scope.signedTx == "" || !ethFuncs.validateHexString($scope.signedTx)) throw globalFuncs.errorMsgs[12];
           var eTx = new ethUtil.Tx($scope.signedTx);
           if (eTx.data.length && Token.transferHex == ethFuncs.sanitizeHex(eTx.data.toString('hex').substr(0, 8))) {
               var token = Token.getTokenByAddress(ethFuncs.sanitizeHex(eTx.to.toString('hex')));
               var decoded = ethUtil.solidityCoder.decodeParams(["address", "uint256"], ethFuncs.sanitizeHex(eTx.data.toString('hex').substr(10)));
               $scope.tx.sendMode = 'token';
               $scope.tokenTx.value = decoded[1].div(new BigNumber(10).pow(token.decimal)).toString();
               $scope.tokenTx.to = decoded[0];
               $scope.unitReadable = token.symbol;
               $scope.tokenTx.from = ethFuncs.sanitizeHex(eTx.getSenderAddress().toString('hex'));
           } else {
               $scope.tx.sendMode = 'ether';
               $scope.tx.value = eTx.value.length ? etherUnits.toEther(ethFuncs.sanitizeHex(eTx.value.toString('hex')), 'wei') : 0;
               $scope.unitReadable = ajaxReq.type;
               $scope.tx.from = ethFuncs.sanitizeHex(eTx.getSenderAddress().toString('hex'));
               $scope.tx.to = ethFuncs.sanitizeHex(eTx.to.toString('hex'));
           }
           new Modal(document.getElementById('txSend')).open();
       } catch (e) {
           $scope.notifier.danger(e);
       }
   }
   $scope.sendTx = function() {
        new Modal(document.getElementById('txSend')).close();
        ajaxReq.sendRawTx($scope.signedTx, function(data) {
            if (data.error) {
                $scope.notifier.danger(data.msg);
            } else {
                $scope.notifier.success(globalFuncs.successMsgs[2] + "<a href='http://etherscan.io/tx/" + data.data + "' target='_blank'>" + data.data + "</a>");
            }
        });
    }
    $scope.transferAllBalance = function() {
        if ($scope.tx.sendMode != 'token') {
            uiFuncs.transferAllBalance($scope.wallet.getAddressString(), $scope.tx.gasLimit, function(resp) {
                if (!resp.isError) {
                    $scope.tx.unit = resp.unit;
                    $scope.tx.value = resp.value;
                } else {
                    $scope.showRaw = false;
                    $scope.notifier.danger(resp.error);
                }
            });
        } else {
            $scope.tx.value = $scope.wallet.tokenObjs[$scope.tokenTx.id].getBalance();
        }
    }
};
module.exports = txSendCtrl;
