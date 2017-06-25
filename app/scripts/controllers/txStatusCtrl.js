/* TODO LIST
1.
Validate for valid TX hash -- 64 characters (without 0x) + valid hex


2.
$scope.checkTxStatus = function(){

Call:
eth_getRawTransactionByHash

2a.
Set:
tx.status       notFound           no tx hash found
                foundInPending     found in pending
                foundOnChain       found already on blockchain
tx.hash         this should already be set
tx.to           the user's own address (should check again when they unlock their wallet to ensure they unlock correct wallet)
tx.from         from the TX, no change (should check again when they unlock their wallet to ensure they unlock correct wallet)
tx.value        0 eth
tx.gasLimit     21000
tx.gasPrice     gasPrice of TX + 10%. If that gas price < 30 GWEI, set it at 30 GWEI.
tx.data         0x00
tx.nonce        from the TX, no change

2b.
tx.txFee.eth    gas price * gas limit in ETH
tx.txFee.usd    gas price * gas limit in USD


3.
Make some variable that I can use to differentiate and hide / show things on sendTx vs swap vs txStatus pages.
- There are a few little things I would like to do, like remove the donate button and "send entire balance" buttons from this page.
- e.g. ng-show="page!=='swap'"
- or   ng-show="page!=='sendTx'"
- or   ng-show="page!=='txStatus'"

4.
Make sure the fields when they unlock the wallet have the stuff from above

5.
Make sure the if the gasPrice field has a value it overrides the global gas slider (on all send pages so it doesn't trip us up in the future)

6.
Make sure the fields show up on the new sendTX Modal.

6a.
Lower priority -- I think it would be useful to show this information on all modals. We have gotten complaints that pages do unexpected things or send to unexpected addresses on contracts / ENS pages for different chains. We should read from rawTX field - NOT the individual fields - and display all information we have as a last chance to check.

Add'l  Info:
[6/13/17, 12:53:29 AM] Péter Szilágyi: Geth transmits pending transactions only (i.e. executable ones), but doesn't transmit non executable ones (missing nonce, balance too low, etc)
[6/13/17, 12:53:50 AM] Péter Szilágyi: However it does track to which peers it sent the tx once, and won't do it again, only to new peers (it does do it for every new peer)
[6/13/17, 12:54:42 AM] Péter Szilágyi: We might investigate resending tx every now and again, but that entails the risk of network traffic bloat, so it's a bit dangerous
[6/13/17, 12:56:22 AM] Péter Szilágyi: Regarding the "replacement transaction is underpriced", that error message indicates you are trying to replace an already used nonce (i.e. a pending transaction) with a different transaction. Starting with Geth 1.6.3 I believe you are only allowed to do this if you bump the gas price by 10%. This is needed to prevent people from spamming the network with a 1wei tx, 2wei tx, 3wei tx, and so forth.
[6/13/17, 12:57:46 AM] Péter Szilágyi: Previously this was allowed, but there was the 20gwei cutoff, so you always ran the risk that your tx is actually included, Geth 1.6.3 allows arbitrarily priced txs, but then we need to protect against spam since people can send txs that might not get included for a very very long time
[6/13/17, 1:11:56 AM] Martin Holst Swende: Re eth_getRawTransactionByHash, it's in web3, so "eth.getRawTransaction(hash)" gives the raw rlp, which can be sent using e.g. MEW. Another good method is "eth.signTransaction(tx)". If you want to replace a transaction, perhaps use "eth.getTransaction(hash)" , take the tx object, update the fields (e.g. price), and then user "eth.sendTransaction". For increased validation, use "eth.signTransaction(tx)" and ensure that the nonce is the same as the one you were replacing, and then send it using e.g. "eth.sendRawTransaction" or MEW.
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
