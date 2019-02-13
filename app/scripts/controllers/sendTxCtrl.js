'use strict';
var sendTxCtrl = function($scope, $sce, walletService, $rootScope) {
    $scope.tx = {};
    $scope.signedTx
    $scope.ajaxReq = ajaxReq;
    $scope.unitReadable = ajaxReq.type;
    $scope.sendTxModal = new Modal(document.getElementById('sendTransaction'));
    walletService.wallet = null;
    walletService.password = '';
    $scope.showAdvance = $rootScope.rootScopeShowRawTx = false;
    $scope.dropdownEnabled = true;
    $scope.Validator = Validator;
    $scope.gasLimitChanged = false;
    $scope.tx.readOnly = globalFuncs.urlGet('readOnly') == null ? false : true;
    var currentTab = $scope.globalService.currentTab;
    var tabs = $scope.globalService.tabs;
    $scope.tokenTx = {
        to: '',
        value: 0,
        id: -1
    };
    $scope.customGasMsg = '';

    $scope.customGas = CustomGasMessages;

    $scope.tx = {
        // if there is no gasLimit or gas key in the URI, use the default value. Otherwise use value of gas or gasLimit. gasLimit wins over gas if both present
        gasLimit: globalFuncs.urlGet('gaslimit') != null || globalFuncs.urlGet('gas') != null ? globalFuncs.urlGet('gaslimit') != null ? globalFuncs.urlGet('gaslimit') : globalFuncs.urlGet('gas') : globalFuncs.defaultTxGasLimit,
        data: globalFuncs.urlGet('data') == null ? "" : globalFuncs.urlGet('data'),
        to: globalFuncs.urlGet('to') == null ? "" : globalFuncs.urlGet('to'),
        unit: "ether",
        value: globalFuncs.urlGet('value') == null ? "" : globalFuncs.urlGet('value'),
        nonce: null,
        gasPrice: globalFuncs.urlGet('gasprice') == null ? null : globalFuncs.urlGet('gasprice'),
        donate: false,
        tokensymbol: globalFuncs.urlGet('tokensymbol') == null ? false : globalFuncs.urlGet('tokensymbol'),
    }


    $scope.setSendMode = function(sendMode, tokenId = '', tokensymbol = '') {
        $scope.tx.sendMode = sendMode;
        $scope.unitReadable = '';
        if ( globalFuncs.urlGet('tokensymbol') != null ) {
            $scope.unitReadable = $scope.tx.tokensymbol;
            $scope.tx.sendMode = 'token';
        } else if (sendMode == 'ether') {
            $scope.unitReadable = ajaxReq.type;
        } else {
            $scope.unitReadable = tokensymbol;
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

    var applyScope = function() {
        if (!$scope.$$phase) $scope.$apply();
    }

    var defaultInit = function() {
        globalFuncs.urlGet('sendMode') == null ? $scope.setSendMode('ether') : $scope.setSendMode(globalFuncs.urlGet('sendMode'));
        $scope.gasLimitChanged = globalFuncs.urlGet('gaslimit') != null ? true : false;
        $scope.showAdvance = globalFuncs.urlGet('gaslimit') != null || globalFuncs.urlGet('gas') != null || globalFuncs.urlGet('data') != null;
        if (globalFuncs.urlGet('data') || globalFuncs.urlGet('value') || globalFuncs.urlGet('to') || globalFuncs.urlGet('gaslimit') || globalFuncs.urlGet('sendMode') || globalFuncs.urlGet('gas') || globalFuncs.urlGet('tokensymbol')) $scope.hasQueryString = true // if there is a query string, show an warning at top of page

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
        if ($scope.parentTxConfig) {
            var setTxObj = function() {
                $scope.addressDrtv.ensAddressField = $scope.parentTxConfig.to;
                $scope.tx.value = $scope.parentTxConfig.value;
                $scope.tx.sendMode = $scope.parentTxConfig.sendMode ? $scope.parentTxConfig.sendMode : 'ether';
                $scope.tx.tokensymbol = $scope.parentTxConfig.tokensymbol ? $scope.parentTxConfig.tokensymbol : '';
                $scope.tx.gasPrice = $scope.parentTxConfig.gasPrice ? $scope.parentTxConfig.gasPrice : null;
                $scope.tx.nonce = $scope.parentTxConfig.nonce ? $scope.parentTxConfig.nonce : null;
                $scope.tx.data = $scope.parentTxConfig.data ? $scope.parentTxConfig.data : $scope.tx.data;
                $scope.tx.readOnly = $scope.addressDrtv.readOnly = $scope.parentTxConfig.readOnly ? $scope.parentTxConfig.readOnly : false;
                if ($scope.parentTxConfig.gasLimit) {
                    $scope.tx.gasLimit = $scope.parentTxConfig.gasLimit;
                    $scope.gasLimitChanged = true;
                }
            }
            $scope.$watch('parentTxConfig', function() {
                setTxObj();
            }, true);
        }
        $scope.setTokenSendMode();
        defaultInit();
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
        $rootScope.rootScopeShowRawTx = false;
        if (oldValue.sendMode && oldValue.sendMode != newValue.sendMode && newValue.sendMode == 'ether') {
            $scope.tx.data = globalFuncs.urlGet('data') == null ? "" : globalFuncs.urlGet('data');
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
                $scope.showAdvance = $scope.tx.data != '' || $scope.customGas[i].data != '' ? true : false;
                $scope.tx.gasLimit = $scope.customGas[i].gasLimit;
                if ($scope.customGas[i].data != '') $scope.tx.data = $scope.customGas[i].data;
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
        if ($scope.tx.data != "") estObj.data = ethFuncs.sanitizeHex($scope.tx.data);
        if ($scope.tx.sendMode == 'token') {
            estObj.to = $scope.wallet.tokenObjs[$scope.tokenTx.id].getContractAddress();
            estObj.data = $scope.wallet.tokenObjs[$scope.tokenTx.id].getData($scope.tokenTx.to, $scope.tokenTx.value).data;
            estObj.value = '0x00';
        }
        ethFuncs.estimateGas(estObj, function(data) {

            if (!data.error) {
                if (data.data == '-1') {
                    console.log("sendTxCtrl:190 ERROR");
                    $scope.notifier.danger(globalFuncs.errorMsgs[21]);
                }
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

    $scope.generateTx = function() {
        if (!$scope.Validator.isValidAddress($scope.tx.to)) {
            $scope.notifier.danger(globalFuncs.errorMsgs[5]);
            return;
        }
        var txData = uiFuncs.getTxData($scope);
        txData.gasPrice = $scope.tx.gasPrice ? '0x' + new BigNumber($scope.tx.gasPrice).toString(16) : null;
        txData.nonce = $scope.tx.nonce ? '0x' + new BigNumber($scope.tx.nonce).toString(16) : null;

        // set to true for offline tab and txstatus tab
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
                $rootScope.rootScopeShowRawTx = true;
            } else {
                $rootScope.rootScopeShowRawTx = false;
                $scope.notifier.danger(rawTx.error);
            }
            if (!$scope.$$phase) $scope.$apply();
        });
    }

    $scope.sendTx = function() {
        $scope.sendTxModal.close();
        uiFuncs.sendTx($scope.signedTx, function(resp) {
            if (!resp.isError) {
                var checkTxLink = "https://vintage.myetherwallet.com?txHash=" + resp.data + "#check-tx-status";
                var txHashLink = $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data);
                var emailBody = 'I%20was%20trying%20to..............%0A%0A%0A%0ABut%20I%27m%20confused%20because...............%0A%0A%0A%0A%0A%0ATo%20Address%3A%20https%3A%2F%2Fetherscan.io%2Faddress%2F' + $scope.tx.to + '%0AFrom%20Address%3A%20https%3A%2F%2Fetherscan.io%2Faddress%2F' + $scope.wallet.getAddressString() + '%0ATX%20Hash%3A%20https%3A%2F%2Fetherscan.io%2Ftx%2F' + resp.data + '%0AAmount%3A%20' + $scope.tx.value + '%20' + $scope.unitReadable + '%0ANode%3A%20' + $scope.ajaxReq.type + '%0AToken%20To%20Addr%3A%20' + $scope.tokenTx.to + '%0AToken%20Amount%3A%20' + $scope.tokenTx.value + '%20' + $scope.unitReadable + '%0AData%3A%20' + $scope.tx.data + '%0AGas%20Limit%3A%20' + $scope.tx.gasLimit + '%0AGas%20Price%3A%20' + $scope.tx.gasPrice;
                var verifyTxBtn = $scope.ajaxReq.type != nodes.nodeTypes.Custom ? '<a class="btn btn-xs btn-info" href="' + txHashLink + '" class="strong" target="_blank" rel="noopener noreferrer">Verify Transaction</a>' : '';
                var checkTxBtn = '<a class="btn btn-xs btn-info" href="' + checkTxLink + '" target="_blank" rel="noopener noreferrer"> Check TX Status </a>';
                var emailBtn = '<a class="btn btn-xs btn-info " href="mailto:support@myetherwallet.com?Subject=Issue%20regarding%20my%20TX%20&Body=' + emailBody + '" target="_blank" rel="noopener noreferrer">Confused? Email Us.</a>';
                var completeMsg = '<p>' + globalFuncs.successMsgs[2] + '<strong>' + resp.data + '</strong></p><p>' + verifyTxBtn + ' ' + checkTxBtn + '</p>';
                $scope.notifier.success(completeMsg, 0);
                $scope.wallet.setBalance(applyScope);
                if ($scope.tx.sendMode == 'token') $scope.wallet.tokenObjs[$scope.tokenTx.id].setBalance();
            } else {
                $scope.notifier.danger(resp.error);
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
                    $rootScope.rootScopeShowRawTx = false;
                    $scope.notifier.danger(resp.error);
                }
            });
        } else {
            $scope.tx.value = $scope.wallet.tokenObjs[$scope.tokenTx.id].getBalance();
        }
    }

    $scope.parseSignedTx = function( signedTx ) {
      var txData = {}
      var isJSON =  false;
      $scope.parsedSignedTx = {}
      if(Validator.isJSON(signedTx)){
        txData = new ethUtil.Tx(JSON.parse(signedTx));
        isJSON = true;
      } else {
        if( signedTx.slice(0,2)=="0x" ) signedTx = signedTx.slice(2, signedTx.length )
        txData = new ethUtil.Tx(signedTx)
      }
      $scope.parsedSignedTx.gasPrice      = {}
      $scope.parsedSignedTx.txFee         = {}
      $scope.parsedSignedTx.balance       = $scope.wallet.getBalance()
      $scope.parsedSignedTx.from          = isJSON ? $scope.wallet.getChecksumAddressString() : ethFuncs.sanitizeHex(ethUtil.toChecksumAddress(txData.from.toString('hex')))
      $scope.parsedSignedTx.to            = ethFuncs.sanitizeHex(ethUtil.toChecksumAddress(txData.to.toString('hex')))
      $scope.parsedSignedTx.value         = (txData.value=='0x'||txData.value==''||txData.value==null) ? '0' : etherUnits.toEther(new BigNumber(ethFuncs.sanitizeHex(txData.value.toString('hex'))).toString(), 'wei' )
      $scope.parsedSignedTx.gasLimit      = new BigNumber(ethFuncs.sanitizeHex(txData.gasLimit.toString('hex'))).toString()
      $scope.parsedSignedTx.gasPrice.wei  = new BigNumber(ethFuncs.sanitizeHex(txData.gasPrice.toString('hex'))).toString()
      $scope.parsedSignedTx.gasPrice.gwei = new BigNumber(ethFuncs.sanitizeHex(txData.gasPrice.toString('hex'))).div(etherUnits.getValueOfUnit('gwei')).toString()
      $scope.parsedSignedTx.gasPrice.eth  = etherUnits.toEther(new BigNumber(ethFuncs.sanitizeHex(txData.gasPrice.toString('hex'))).toString(), 'wei' )
      $scope.parsedSignedTx.txFee.wei     = new BigNumber(parseInt($scope.parsedSignedTx.gasLimit)).times(new BigNumber(parseInt($scope.parsedSignedTx.gasPrice.wei)))
      $scope.parsedSignedTx.txFee.gwei    = new BigNumber($scope.parsedSignedTx.txFee.wei).div(etherUnits.getValueOfUnit('gwei')).toString()
      $scope.parsedSignedTx.txFee.eth     = etherUnits.toEther( parseInt($scope.parsedSignedTx.txFee.wei), 'wei' ).toString()
      $scope.parsedSignedTx.nonce         = (txData.nonce=='0x'||txData.nonce==''||txData.nonce==null) ? '0' : new BigNumber(ethFuncs.sanitizeHex(txData.nonce.toString('hex'))).toString()
      $scope.parsedSignedTx.data          = (txData.data=='0x'||txData.data==''||txData.data==null) ? '(none)' : ethFuncs.sanitizeHex(txData.data.toString('hex'))
    }

  $scope.reOpenDecryptWalletMEWconnect = function () {
    if ($scope.globalService.currentTab === 3) {
      $scope.wd = false
    }
  }
  globalFuncs.MEWconnectStatus.registerDecryptOpeners($scope.reOpenDecryptWalletMEWconnect.bind(this))

};
module.exports = sendTxCtrl;
