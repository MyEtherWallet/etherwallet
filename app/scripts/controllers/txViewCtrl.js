'use strict';
var txViewCtrl = function($scope) {
    $scope.Validator = Validator;
    $scope.advancedVisible = true;
    $scope.gasPriceVisible = true;
    $scope.nonceVisible = true;
    $scope.gasLimitChanged = true;
    $scope.checkTxReadOnly = true;
    $scope.txStatus = {
        found: 0,
        notFound: 1,
        mined: 2
    }
    var MIN_GAS = 30;
    $scope.txInfo = {
        status: null, // notFound foundInPending foundOnChain
        hash: globalFuncs.urlGet('txHash') == null ? "" : globalFuncs.urlGet('txHash'),
        from: '',
        to: '',
        value: '',
        valueStr: '',
        gasLimit: '',
        gasPrice: '',
        data: '',
        nonce: ''
    }

    var applyScope = function() {
        if (!$scope.$$phase) $scope.$apply();
    }
    var setUSDvalues = function() {
        ajaxReq.getETHvalue(function(data) {
            $scope.txInfo.gasPrice.usd = new BigNumber(data.usd).mul(new BigNumber($scope.txInfo.gasPrice.eth)).toString();
            applyScope();
        });
    }
    var txToObject = function(tx) {
        var txStatus = $scope.txStatus;
        if (tx) {
            $scope.txInfo = {
                status: tx.blockNumber ? txStatus.mined : txStatus.found,
                hash: tx.hash,
                from: ethUtil.toChecksumAddress(tx.from),
                to: tx.to ? ethUtil.toChecksumAddress(tx.to) : '',
                value: new BigNumber(tx.value).toString(),
                valueStr: etherUnits.toEther(tx.value, 'wei') + " ETH",
                gasLimit: new BigNumber(tx.gas).toString(),
                gasPrice: {
                    wei: new BigNumber(tx.gasPrice).toString(),
                    gwei: new BigNumber(tx.gasPrice).div(etherUnits.getValueOfUnit('gwei')).toString(),
                    eth: etherUnits.toEther(tx.gasPrice, 'wei')
                },
                data: tx.input == '0x' ? '' : tx.input,
                nonce: new BigNumber(tx.nonce).toString()
            }
            if ($scope.txInfo.status == txStatus.found) {
                var _gasPrice = new BigNumber($scope.txInfo.gasPrice.wei).mul(1.1);
                if (_gasPrice.lt(etherUnits.getValueOfUnit('gwei') * MIN_GAS)) _gasPrice = new BigNumber(etherUnits.getValueOfUnit('gwei') * MIN_GAS)
                $scope.parentTxConfig = {
                    to: $scope.txInfo.from,
                    value: '0',
                    sendMode: 'ether',
                    tokensymbol: '',
                    readOnly: false,
                    gasPrice: _gasPrice.toString(),
                    gasLimit: '21000',
                    data: '',
                    nonce: $scope.txInfo.nonce
                }
                new Modal(document.getElementById('txSend'));
            }
            setUSDvalues();
        } else {
            $scope.txInfo.status = txStatus.notFound;
        }
    }
    $scope.checkTxStatus = function() {
        var txInfo = $scope.txInfo;
        try {
            if (!Validator.isValidTxHash(txInfo.hash)) throw globalFuncs.errorMsgs[36];
            ajaxReq.getTransaction(txInfo.hash, function(data) {
                if (data.error) $scope.notifier.danger(data.msg);
                else {
                    txToObject(data.data);
                }
            });
        } catch (e) {
            $scope.notifier.danger(e);
        }
    }

    globalFuncs.urlGet('txHash') == null ? '' : $scope.checkTxStatus();

};
module.exports = txViewCtrl;
