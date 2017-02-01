'use strict';
var sendTxCtrl = function($scope, $sce, walletService) {
    $scope.ajaxReq = ajaxReq;
    $scope.unitReadable = ajaxReq.type;
    $scope.sendTxModal = new Modal(document.getElementById('sendTransaction'));
    walletService.wallet = null;
    walletService.password = '';
    $scope.showAdvance = $scope.showRaw = false;
    $scope.dropdownEnabled = true;
    $scope.Validator = Validator;
    // Tokens
    $scope.tokenVisibility = "hidden";
    $scope.tokenTx = {
        to: '',
        value: 0,
        id: -1
    };
    $scope.tx = {
        // if there is no gasLimit or gas key in the URI, use the default value. Otherwise use value of gas or gasLimit. gasLimit wins over gas if both present
        gasLimit: globalFuncs.urlGet('gaslimit') != null || globalFuncs.urlGet('gas') != null ? globalFuncs.urlGet('gaslimit') != null ? globalFuncs.urlGet('gaslimit') : globalFuncs.urlGet('gas') : globalFuncs.defaultTxGasLimit,
        data: globalFuncs.urlGet('data') == null ? "" : globalFuncs.urlGet('data'),
        to: globalFuncs.urlGet('to') == null ? "" : globalFuncs.urlGet('to'),
        unit: "ether",
        value: globalFuncs.urlGet('value') == null ? "" : globalFuncs.urlGet('value'),
        nonce: null,
        gasPrice: null,
        donate: false,
        tokenSymbol: globalFuncs.urlGet('tokenSymbol') == null ? false : globalFuncs.urlGet('tokenSymbol')
    }
    $scope.setSendMode = function(sendMode, tokenId = '', tokenSymbol = '') {
        $scope.tx.sendMode = sendMode;
        $scope.unitReadable = '';
        if (sendMode == 'ether') {
            $scope.unitReadable = ajaxReq.type;
        } else {
            $scope.unitReadable = tokenSymbol;
            $scope.tokenTx.id = tokenId;
        }
        $scope.dropdownAmount = false;
    }
    $scope.setTokenSendMode = function() {
        if ($scope.tx.sendMode == 'token' && !$scope.tx.tokenSymbol) {
            $scope.tx.tokenSymbol = $scope.wallet.tokenObjs[0].symbol;
            $scope.wallet.tokenObjs[0].type = "custom";
            $scope.setSendMode($scope.tx.sendMode, 0, $scope.tx.tokenSymbol);
        } else if ($scope.tx.tokenSymbol) {
            for (var i = 0; i < $scope.wallet.tokenObjs.length; i++) {
                if ($scope.wallet.tokenObjs[i].symbol.toLowerCase().indexOf($scope.tx.tokenSymbol.toLowerCase()) !== -1) {
                    $scope.wallet.tokenObjs[i].type = "custom";
                    $scope.setSendMode('token', i, $scope.wallet.tokenObjs[i].symbol);
                    break;
                } else $scope.tokenTx.id = -1;
            }
        }
        if ($scope.tx.sendMode != 'token') $scope.tokenTx.id = -1;
    }
    globalFuncs.urlGet('sendMode') == null ? $scope.setSendMode('ether') : $scope.setSendMode(globalFuncs.urlGet('sendMode'));
    $scope.showAdvance = globalFuncs.urlGet('gaslimit') != null || globalFuncs.urlGet('gas') != null || globalFuncs.urlGet('data') != null;
    if (globalFuncs.urlGet('data') || globalFuncs.urlGet('value') || globalFuncs.urlGet('to') || globalFuncs.urlGet('gaslimit') || globalFuncs.urlGet('sendMode') || globalFuncs.urlGet('gas') || globalFuncs.urlGet('tokenSymbol')) $scope.hasQueryString = true // if there is a query string, show an warning at top of page
    $scope.$watch(function() {
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function() {
        if (walletService.wallet == null) return;
        $scope.wallet = walletService.wallet;
        $scope.wd = true;
        $scope.wallet.setBalance();
        $scope.wallet.setTokens();
        $scope.setTokenSendMode();
        $scope.setTokenSendMode();
    });
    $scope.$watch('ajaxReq.key', function() {
        if ($scope.wallet) {
            $scope.setSendMode('ether');
            $scope.wallet.setBalance();
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
        $scope.sendTxStatus = "";
        if (oldValue.sendMode != newValue.sendMode && newValue.sendMode == 'ether') {
            $scope.tx.data = "";
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
    }, true);
    $scope.estimateGasLimit = function() {
        if (globalFuncs.lightMode) {
            $scope.tx.gasLimit = 100000;
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
            $scope.validateTxStatus = "";
            if (!data.error) {
                if (data.data == '-1') $scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[21]));
                $scope.tx.gasLimit = data.data;
            } else {
                $scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(data.msg));
            }
        });
    }
    $scope.onDonateClick = function() {
        $scope.tx.to = globalFuncs.donateAddress;
        $scope.tx.value = "1";
        $scope.tx.donate = true;
    }
    $scope.generateTx = function() {
        if (!ethFuncs.validateEtherAddress($scope.tx.to)) {
            $scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(globalFuncs.errorMsgs[5]));
            return;
        }
        var txData = uiFuncs.getTxData($scope);
        if ($scope.tx.sendMode == 'token') {
            txData.to = $scope.wallet.tokenObjs[$scope.tokenTx.id].getContractAddress();
            txData.data = $scope.wallet.tokenObjs[$scope.tokenTx.id].getData($scope.tokenTx.to, $scope.tokenTx.value).data;
            txData.value = '0x00';
        }
        uiFuncs.generateTx(txData, function(rawTx) {
            if (!rawTx.isError) {
                $scope.rawTx = rawTx.rawTx;
                $scope.signedTx = rawTx.signedTx;
                $scope.showRaw = true;
                $scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(''));
            } else {
                $scope.showRaw = false;
                $scope.validateTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(rawTx.error));
            }
            if (!$scope.$$phase) $scope.$apply();
        });
    }
    $scope.sendTx = function() {
        $scope.sendTxModal.close();
        uiFuncs.sendTx($scope.signedTx, function(resp) {
            if (!resp.isError) {
                var bExStr = $scope.ajaxReq.type != nodes.nodeTypes.Custom ? "<a href='" + $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data) + "' target='_blank'> View your transaction </a>" : '';
                $scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(globalFuncs.successMsgs[2] + "<br />" + resp.data + "<br />" + bExStr));
                $scope.wallet.setBalance();
                if ($scope.tx.sendMode == 'token') $scope.wallet.tokenObjs[$scope.tokenTx.id].setBalance();
            } else {
                $scope.sendTxStatus = $sce.trustAsHtml(globalFuncs.getDangerText(resp.error));
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
                    $scope.validateTxStatus = $sce.trustAsHtml(resp.error);
                }
            });
        } else {
            $scope.tx.value = $scope.wallet.tokenObjs[$scope.tokenTx.id].getBalance();
        }
    }
};
module.exports = sendTxCtrl;
