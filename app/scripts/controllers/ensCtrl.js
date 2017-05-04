'use strict';
var ensCtrl = function($scope, $sce, walletService) {
    $scope.ajaxReq = ajaxReq;
    walletService.wallet = null;
    $scope.ensConfirmModalModal = new Modal(document.getElementById('ensConfirmModal'));
    $scope.ensFinalizeModal = new Modal(document.getElementById('ensFinalizeConfirm'));
    $scope.Validator = Validator;
    $scope.wd = false;
    var ENS = new ens();
    $scope.ensModes = ens.modes;
    $scope.minNameLength = 7;
    $scope.objENS = {
        status: -1,
        name: '',
        timeRemaining: null,
        timer: null,
        bidValue: 0.01,
        dValue: 0.01,
        secret: hd.bip39.generateMnemonic().split(" ").splice(0, 3).join(" "),
        nameReadOnly: false
    };
    $scope.tx = {
        gasLimit: '500000',
        data: '',
        to: '',
        unit: "ether",
        value: 0,
        gasPrice: null
    };
    $scope.$watch(function() {
        if (walletService.wallet == null) return null;
        return walletService.wallet.getAddressString();
    }, function() {
        if (walletService.wallet == null) return;
        $scope.wallet = walletService.wallet;
        $scope.wd = true;
        $scope.wallet.setBalance();
        $scope.wallet.setTokens();
    });
    var updateScope = function() {
        if (!$scope.$$phase) $scope.$apply();
    }
    var timeRem = function(timeUntil) {
        var rem = timeUntil - new Date();
        if (rem < 0) {
            clearInterval($scope.objENS.timer);
            $scope.objENS.timeRemaining = "EXPIRED";
            return
        }
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var days = Math.floor(rem / _day);
        var hours = Math.floor((rem % _day) / _hour);
        var minutes = Math.floor((rem % _hour) / _minute);
        var seconds = Math.floor((rem % _minute) / _second);
        days = days < 10 ? '0' + days : days;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        $scope.objENS.timeRemaining = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ';
        updateScope();
    }
    $scope.checkName = function() {
        if ($scope.Validator.isValidENSName($scope.objENS.name)) {
            ENS.getAuctionEntries($scope.objENS.name, function(data) {
                if (data.error) $scope.notifier.danger(data.msg);
                else {
                    $scope.objENS.nameReadOnly = true;
                    var entries = data.data;
                    for (var key in entries) $scope.objENS[key] = entries[key];
                    switch ($scope.objENS.status) {
                        case $scope.ensModes.owned:
                            ENS.getOwner($scope.objENS.name + '.eth', function(data) {
                                $scope.objENS.owner = data.data;
                            })
                            break;
                        case $scope.ensModes.notAvailable:
                            ENS.getAllowedTime($scope.objENS.name, function(data) {
                                $scope.objENS.allowedTime = data.data;
                                clearInterval($scope.objENS.timer);
                                $scope.objENS.timer = setInterval(() => timeRem($scope.objENS.allowedTime), 1000);
                            })
                            break;
                        case $scope.ensModes.auction:
                            clearInterval($scope.objENS.timer);
                            $scope.objENS.timer = setInterval(() => timeRem($scope.objENS.registrationDate), 1000);
                            break;
                        case $scope.ensModes.reveal:
                            $scope.objENS.bidValue = 0;
                            $scope.objENS.secret = '';
                            break;
                    }
                    updateScope();
                }
            })
        } else $scope.notifier.danger(globalFuncs.errorMsgs[30]);
    }
    $scope.openAndBidAuction = function() {
        var _objENS = $scope.objENS;
        ajaxReq.getTransactionData($scope.wallet.getAddressString(), function(data) {
            if (data.error) $scope.notifier.danger(data.msg);
            data = data.data;
            $scope.tx.to = ENS.getAuctionAddress();
            $scope.tx.data = ENS.getStartAuctionData(_objENS.name);
            $scope.tx.value = 0;
            var txData = uiFuncs.getTxData($scope);
            txData.gasPrice = data.gasprice;
            txData.nonce = data.nonce;
            uiFuncs.generateTx(txData, function(rawTx) {
                if (!rawTx.isError) {
                    $scope.generatedTxs.push(rawTx.signedTx);
                    $scope.bidAuction('0x' + new BigNumber(txData.nonce).plus(1).toString(16), txData.gasPrice)
                } else {
                    $scope.notifier.danger(rawTx.error);
                }
                updateScope();
            });
        });
    }
    $scope.revealBid = function() {
        var _objENS = $scope.objENS;
        ajaxReq.getTransactionData($scope.wallet.getAddressString(), function(data) {
            if (data.error) $scope.notifier.danger(data.msg);
            data = data.data;
            $scope.tx.to = ENS.getAuctionAddress();
            $scope.tx.data = ENS.getRevealBidData(_objENS.name, etherUnits.toWei(_objENS.bidValue, 'ether'), _objENS.secret);
            $scope.tx.value = 0;
            var txData = uiFuncs.getTxData($scope);
            txData.gasPrice = data.gasprice;
            txData.nonce = data.nonce;
            uiFuncs.generateTx(txData, function(rawTx) {
                if (!rawTx.isError) {
                    $scope.generatedTxs.push(rawTx.signedTx);
                    $scope.ensConfirmModalModal.open();
                } else {
                    $scope.notifier.danger(rawTx.error);
                }
            });
        });
    }
    $scope.finalizeDomain = function() {
        var _objENS = $scope.objENS;
        ajaxReq.getTransactionData($scope.wallet.getAddressString(), function(data) {
            if (data.error) $scope.notifier.danger(data.msg);
            data = data.data;
            $scope.tx.to = ENS.getAuctionAddress();
            $scope.tx.data = ENS.getFinalizeAuctionData(_objENS.name);
            $scope.tx.value = 0;
            var txData = uiFuncs.getTxData($scope);
            txData.gasPrice = data.gasprice;
            txData.nonce = data.nonce;
            uiFuncs.generateTx(txData, function(rawTx) {
                if (!rawTx.isError) {
                    $scope.generatedTxs = [];
                    $scope.generatedTxs.push(rawTx.signedTx);
                    $scope.ensFinalizeModal.open();
                } else {
                    $scope.notifier.danger(rawTx.error);
                }
            });
        });
    }
    $scope.showRegistrationDate = function() {
        if ($scope.objENS && $scope.objENS.registrationDate) return $scope.objENS.registrationDate > new Date();
        else return false;
    }
    $scope.getRevealTime = function() {
        if ($scope.objENS && $scope.objENS.registrationDate) return new Date($scope.objENS.registrationDate - (48 * 60 * 60 * 1000));
        return new Date();
    }
    $scope.bidAuction = function(nonce, gasPrice) {
        var _objENS = $scope.objENS;
        $scope.bidObject = {
            name: _objENS.name,
            nameSHA3: ENS.getSHA3(_objENS.name),
            owner: $scope.wallet.getAddressString(),
            value: etherUnits.toWei(_objENS.bidValue, 'ether'),
            secret: _objENS.secret.trim(),
            secretSHA3: ENS.getSHA3(_objENS.secret.trim())
        }
        ENS.shaBid($scope.bidObject.nameSHA3, $scope.bidObject.owner, $scope.bidObject.value, $scope.bidObject.secretSHA3, function(data) {
            if (data.error) $scope.notifier.danger(data.msg);
            else {
                var bidHash = data.data;
                $scope.tx.data = ENS.getNewBidData(bidHash);
                $scope.tx.to = ENS.getAuctionAddress();
                $scope.tx.value = _objENS.dValue;
                var txData = uiFuncs.getTxData($scope);
                if (nonce && gasPrice) {
                    txData.nonce = nonce;
                    txData.gasPrice = gasPrice;
                } else txData.nonce = txData.gasPrice = null;
                uiFuncs.generateTx(txData, function(rawTx) {
                    if (!rawTx.isError) {
                        $scope.generatedTxs.push(rawTx.signedTx);
                        $scope.bidObject = JSON.stringify($scope.bidObject)
                        $scope.ensConfirmModalModal.open();
                    } else {
                        $scope.notifier.danger(rawTx.error);
                    }
                    if (!$scope.$$phase) $scope.$apply();
                });
            }
        });

    }
    $scope.sendTxStatus = "";
    $scope.sendTx = function() {
        $scope.ensConfirmModalModal.close();
        $scope.ensFinalizeModal.close();
        var signedTx = $scope.generatedTxs.shift();
        uiFuncs.sendTx(signedTx, function(resp) {
            if (!resp.isError) {
                var bExStr = $scope.ajaxReq.type != nodes.nodeTypes.Custom ? "<a href='" + $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data) + "' target='_blank'> View your transaction </a>" : '';
                $scope.sendTxStatus += globalFuncs.successMsgs[2] + "<br />" + resp.data + "<br />" + bExStr + "<br />";
                $scope.notifier.success($scope.sendTxStatus);
                if ($scope.generatedTxs.length) $scope.sendTx();
                else $scope.sendTxStatus = ''
            } else {
                $scope.notifier.danger(resp.error);
            }
        });
    }
    $scope.generateTx = function() {
        try {
            var _objENS = $scope.objENS;
            $scope.sentTxs = [];
            $scope.generatedTxs = [];
            if (!$scope.Validator.isValidENSName(_objENS.name)) throw globalFuncs.errorMsgs[30];
            else if (!$scope.Validator.isPositiveNumber(_objENS.bidValue) || !_objENS.bidValue >= 0.1) throw globalFuncs.errorMsgs[0];
            else if (!$scope.Validator.isPositiveNumber(_objENS.dValue) || !_objENS.dValue >= _objENS.bidValue) throw globalFuncs.errorMsgs[0];
            else if (!$scope.Validator.isPasswordLenValid(_objENS.secret, 0)) throw globalFuncs.errorMsgs[31];
            else {
                if ($scope.objENS.status == $scope.ensModes.open) $scope.openAndBidAuction();
                else if ($scope.objENS.status == $scope.ensModes.auction) $scope.bidAuction();
                else if ($scope.objENS.status == $scope.ensModes.reveal) $scope.revealBid();
            }
        } catch (e) {
            $scope.notifier.danger(e);
        }
    }
}
module.exports = ensCtrl;
