/* TODO LIST
tx.to           the user's own address
tx.value        0 eth
tx.gasLimit     21000
tx.data         0x00
should check again when they unlock their wallet to ensure they unlock correct wallet

Make some variable that I can use to differentiate and hide / show things on sendTx vs swap vs txStatus pages.
- There are a few little things I would like to do, like remove the donate button and "send entire balance" buttons from this page.
- e.g. ng-show="page!=='swap'"
- or   ng-show="page!=='sendTx'"
- or   ng-show="page!=='txStatus'"
*/

'use strict';
var txStatusCtrl = function($scope, walletService) {
    walletService.wallet = null;
    $scope.Validator = Validator;
    $scope.txStatus = {
        found: 0,
        notFound: 1,
        mined: 2
    }
    var MIN_GAS = 30;
    $scope.txInfo = {
        status: null, // notFound foundInPending foundOnChain
        hash: '',
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
                    eth: etherUnits.toEther(tx.gasPrice, 'wei')
                },
                data: tx.input == '0x' ? '' : tx.input,
                nonce: new BigNumber(tx.nonce).toString()
            }
            if ($scope.txInfo.status == txStatus.found) {
                var _gasPrice = new BigNumber($scope.txInfo.gasPrice.wei).mul(1.1);
                if (_gasPrice.lt(etherUnits.getValueOfUnit('gwei') * MIN_GAS)) _gasPrice = new BigNumber(etherUnits.getValueOfUnit('gwei') * MIN_GAS)
                $scope.parentTxConfig = {
                    to: $scope.txInfo.to,
                    value: etherUnits.toEther($scope.txInfo.value, 'wei'),
                    sendMode: 'ether',
                    tokenSymbol: '',
                    readOnly: false,
                    gasPrice: _gasPrice.toString(),
                    gasLimit: $scope.txInfo.gasLimit,
                    data: $scope.txInfo.data,
                    nonce: $scope.txInfo.nonce,
                    showAdvance: true
                }
                new Modal(document.getElementById('sendTransaction'));
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
    $scope.showAdvance = true; // automatically expand the advanced accordion on txStatus page only

};
module.exports = txStatusCtrl;
