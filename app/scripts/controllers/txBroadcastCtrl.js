'use strict';
var txBroadcastCtrl = function($scope, walletService) {
    $scope.ajaxReq = ajaxReq;
    walletService.wallet = null;
    walletService.password = '';
    walletService.walletType = null;
    $scope.unitReadable = ajaxReq.type;
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
    };
    $scope.tokenTx = {
        to: '',
        value: 0,
        id: 'ether',
        gasLimit: 150000
    };

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
                $scope.notifier.success(globalFuncs.successMsgs[2] + "<a href='http://etherscan.io/tx/" + data.data + "' target='_blank'>" + data.data + "</a>");
            }
        });
    }

};
module.exports = txBroadcastCtrl;
