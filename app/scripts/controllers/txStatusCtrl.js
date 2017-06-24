'use strict';
var txStatusCtrl = function($scope, walletService) {
    walletService.wallet = null;
    $scope.ajaxReq = ajaxReq;

    $scope.tx = {
        status       : 'foundInPending', // notFound foundInPending foundOnChain
        hash         : '0x3f0efedfe0a0cd611f2465fac9a3699f92d6a06613bc3ead4f786856f5c73e9c',
        from         : '0x0F955E38428e8A21c2dc42338d2b946a5D334517',
        to           : '0x7cb57b5a97eabe94205c07890be4c1ad31e486a8',
        value        : '1.46738 ETH',
        gasLimit     : '200111',
        gasPrice     : '50000000000',
        data         : '0x0',
        unit         : "ether",
        nonce        : '1',
        tokenSymbol  : 'GNT',
    }


    $scope.checkTxStatus = function(){
    }

};
module.exports = txStatusCtrl;
