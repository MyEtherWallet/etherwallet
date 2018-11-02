'use strict';
var offlineTxCtrl = function($scope, $sce, walletService) {
    $scope.gpDropdown = false;
    $scope.gasPriceDef = globalFuncs.localStorage.getItem('gasPriceDef') || 'WEI';
    $scope.ajaxReq = ajaxReq;
    walletService.wallet = null;
    walletService.password = '';
    $scope.unitReadable = ajaxReq.type;
    $scope.valueReadable = "";
    $scope.showAdvance = false;
    $scope.dropdownEnabled = true;
    $scope.showRaw = false;
    $scope.showWalletInfo = false;
    $scope.gasPriceDec = 0;
    $scope.nonceDec = 0;
    $scope.tokens = Token.popTokens;
    $scope.Validator = Validator;
    $scope.tx = {
        gasLimit: globalFuncs.defaultTxGasLimit,
        from: "",
        data: "",
        to: "",
        unit: "ether",
        value: '',
        nonce: null,
        gasPrice: null,
        donate: false
    }
    $scope.tokenTx = {
        to: '',
        value: 0,
        id: 'ether',
        gasLimit: 150000
    };
    $scope.localToken = {
        contractAdd: "",
        symbol: "",
        decimals: "",
        type: "custom",
    };
    $scope.$watch(function() {
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function() {
        if (walletService.wallet == null) return;
        $scope.wallet = walletService.wallet;
    });

    $scope.changePrice = function(price) {
      $scope.gasPriceDef = price;
      globalFuncs.localStorage.setItem('gasPriceDef', price);
      $scope.gpDropdown = false;
    }

    $scope.convertPrice = function(gasPrice) {
      if($scope.gasPriceDef === 'GWEI') {
        return etherUnits.toWei(gasPrice,$scope.gasPriceDef.toLowerCase());
      } return gasPrice;
    }

    $scope.setTokens = function() {
        $scope.tokenObjs = [];
        for (var i = 0; i < $scope.tokens.length; i++) {
            $scope.tokenObjs.push(new Token($scope.tokens[i].address, '', $scope.tokens[i].symbol, $scope.tokens[i].decimal, $scope.tokens[i].type));
        }
        var storedTokens = globalFuncs.localStorage.getItem("localTokens", null) != null ? JSON.parse(globalFuncs.localStorage.getItem("localTokens")) : [];
        for (var i = 0; i < storedTokens.length; i++) {
            $scope.tokenObjs.push(new Token(storedTokens[i].contractAddress, '', globalFuncs.stripTags(storedTokens[i].symbol), storedTokens[i].decimal, storedTokens[i].type));
        }
    }
    $scope.setTokens();
    $scope.getWalletInfo = function() {
        if (ethFuncs.validateEtherAddress($scope.tx.from)) {
            ajaxReq.getTransactionData($scope.tx.from, function(data) {
                if (data.error) throw data.msg;
                data = data.data;
                $scope.gasPriceDec = $scope.gasPriceDef === "GWEI" ? etherUnits.toGwei(ethFuncs.hexToDecimal(ethFuncs.sanitizeHex(ethFuncs.addTinyMoreToGas(data.gasprice))), "wei") : ethFuncs.hexToDecimal(ethFuncs.sanitizeHex(ethFuncs.addTinyMoreToGas(data.gasprice)));
                $scope.nonceDec = ethFuncs.hexToDecimal(data.nonce);
                $scope.showWalletInfo = true;
            });
        }
    }
    $scope.$watch('gasPriceDef', function(newValue, oldValue) {
        if(newValue == "WEI" && oldValue == "GWEI") $scope.gasPriceDec = etherUnits.toWei($scope.gasPriceDec, 'gwei');
        else if(newValue == "GWEI" && oldValue == "WEI") $scope.gasPriceDec = etherUnits.toGwei($scope.gasPriceDec,'wei');
        else $scope.gasPriceDec = 0;
    });
    $scope.$watch('tx', function() {
        $scope.showRaw = false;

    }, true);
    $scope.$watch('tokenTx.id', function() {
        if ($scope.tokenTx.id != 'ether') {
            $scope.tx.gasLimit = 150000;
        } else {
            $scope.tx.gasLimit = globalFuncs.defaultTxGasLimit;
        }
    });
    $scope.$watch('[tx.to]', function() {
        // if golem crowdfund address
        if ($scope.tx.to == "0xa74476443119A942dE498590Fe1f2454d7D4aC0d") {
            $scope.setSendMode('ether')
            $scope.dropdownEnabled = false
            $scope.tx.data = '0xefc81a8c'
            $scope.tx.gasLimit = 70000
        } else {
            $scope.dropdownEnabled = true
        }
    }, true);
    $scope.setSendMode = function(index, tokensymbol = '') {
        $scope.tokenTx.id = index;
        if (index == 'ether') {
            $scope.unitReadable = ajaxReq.type;
        } else {
            $scope.unitReadable = tokensymbol;
        }
        $scope.dropdownAmount = false;
    }
    $scope.validateAddress = function(address, status) {
        $scope.customGasMsg = ''
        if (ethFuncs.validateEtherAddress(address)) {
            for (var i in CustomGasMessages) {
                if ($scope.tx.to.toLowerCase() == CustomGasMessages[i].to.toLowerCase()) {
                    $scope.customGasMsg = CustomGasMessages[i].msg != '' ? CustomGasMessages[i].msg : ''
                }
            }
            return true;
        } else {
          return false;
        }
    }
    $scope.generateTx = function() {
        if (!ethFuncs.validateEtherAddress($scope.tx.to)) {
            $scope.notifier.danger(globalFuncs.errorMsgs[5]);
            return;
        }
        var txData = uiFuncs.getTxData($scope);
        txData.isOffline = true;
        txData.nonce = ethFuncs.sanitizeHex(ethFuncs.decimalToHex($scope.nonceDec));
        txData.gasPrice = ethFuncs.sanitizeHex(ethFuncs.decimalToHex($scope.convertPrice($scope.gasPriceDec)));
        if ($scope.tokenTx.id != 'ether') {
            txData.data = $scope.tokenObjs[$scope.tokenTx.id].getData($scope.tx.to, $scope.tx.value).data;
            txData.to = $scope.tokenObjs[$scope.tokenTx.id].getContractAddress();
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
            new Modal(document.getElementById('sendTransactionOffline')).open();
        } catch (e) {
            $scope.notifier.danger(e);
        }
    }
    $scope.sendTx = function() {
        new Modal(document.getElementById('sendTransactionOffline')).close();
        ajaxReq.sendRawTx($scope.signedTx, function(data) {
            if (data.error) {
                $scope.notifier.danger(data.msg);
            } else {
                $scope.notifier.success(globalFuncs.successMsgs[2] + "<a href='http://etherscan.io/tx/" + data.data + "' target='_blank' rel='noopener'>" + data.data + "</a>");
            }
        });
    }
};
module.exports = offlineTxCtrl;
