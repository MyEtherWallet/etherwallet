'use strict'
var signMsgCtrl = function($scope, $sce, walletService) {
    walletService.wallet = null;
    $scope.visibility = "signView";
    $scope.$watch(function() {
        if (walletService.wallet == null) return null
        return walletService.wallet.getAddressString()
    }, function() {
        if (walletService.wallet == null) return
        $scope.wallet = walletService.wallet
    });
    $scope.signMsg = {
        message: '',
        status: '',
        signedMsg: ''
    }
    $scope.verifyMsg = {
        signedMsg: '',
        status: ''
    }

    $scope.generateSignedMsg = function() {
        try {
            var thisMessage = $scope.signMsg.message
            var hwType = $scope.wallet.getHWType()

            // Sign via MetaMask
            if ((typeof hwType != "undefined") && (hwType == "web3")) {

                var msg = ethUtil.bufferToHex(new Buffer(thisMessage, 'utf8'))
                var signingAddr = web3.eth.accounts[0]
                var params = [msg, signingAddr]
                var method = 'personal_sign'
                $scope.notifier.info("Sent message for signing via MetaMask / Mist.")

                web3.currentProvider.sendAsync({
                    method,
                    params,
                    signingAddr,
                }, function(err, result) {
                    if (err) return $scope.notifier.danger(err)
                    if (result.error) return $scope.notifier.danger(result.error)
                    $scope.signMsg.signedMsg = JSON.stringify({
                        address: signingAddr,
                        msg: thisMessage,
                        sig: result.result,
                        version: '2'
                    }, null, 2)
                    $scope.notifier.success('Successfully Signed Message with ' + signingAddr)
                })

            // Sign via Ledger
            } else if ((typeof hwType != "undefined") && (hwType == "ledger")) {
                var msg = Buffer.from(thisMessage).toString("hex")
                var app = new ledgerEth($scope.wallet.getHWTransport());
                var localCallback = function(signed, error) {
                    if (typeof error != "undefined") {
                        error = error.errorCode ? u2f.getErrorByCode(error.errorCode) : error;
                        if (callback !== undefined) callback({
                            isError: true,
                            error: error
                        });
                        return;
                    }
                    var combined    = signed['r'] + signed['s'] + signed['v']
                    var combinedHex = combined.toString('hex')
                    var signingAddr = $scope.wallet.getAddressString()
                    $scope.signMsg.signedMsg = JSON.stringify({
                        address: $scope.wallet.getAddressString(),
                        msg: thisMessage,
                        sig: '0x' + combinedHex,
                        version: '2'
                    }, null, 2)
                    $scope.notifier.success('Successfully Signed Message with ' + signingAddr)
                }
                app.signPersonalMessage_async( $scope.wallet.getPath(), msg, localCallback);

            // Sign via PK
            } else {
                var msg         = ethUtil.hashPersonalMessage(ethUtil.toBuffer(thisMessage))
                var signed      = ethUtil.ecsign(msg, $scope.wallet.getPrivateKey())
                console.log(signed.r)
                console.log(signed.s)
                console.log([signed.v])
                var combined    = Buffer.concat([Buffer.from(signed.r), Buffer.from(signed.s), Buffer.from([signed.v])])
                var combinedHex = combined.toString('hex')
                var signingAddr = $scope.wallet.getAddressString()
                $scope.signMsg.signedMsg = JSON.stringify({
                    address: $scope.wallet.getAddressString(),
                    msg: thisMessage,
                    sig: '0x' + combinedHex,
                    version: '2'
                }, null, 2)
                $scope.notifier.success('Successfully Signed Message with ' + signingAddr)
            }

        } catch (e) {
            $scope.notifier.danger(e)
        }
    }

    $scope.verifySignedMessage = function() {
        try {

            var json = JSON.parse($scope.verifyMsg.signedMsg)
            var sig = new Buffer(ethFuncs.getNakedAddress(json.sig), 'hex')
            if (sig.length != 65) throw globalFuncs.errorMsgs[12]
            sig[64] = sig[64] == 0 || sig[64] == 1 ? sig[64] + 27 : sig[64]
            var hash = json.version=='2' ? ethUtil.hashPersonalMessage(ethUtil.toBuffer(json.msg)) : ethUtil.sha3(json.msg)
            var pubKey = ethUtil.ecrecover(hash, sig[64], sig.slice(0, 32), sig.slice(32, 64))
            if (ethFuncs.getNakedAddress(json.address) != ethUtil.pubToAddress(pubKey).toString('hex')) throw globalFuncs.errorMsgs[12]
            else {
              $scope.notifier.success(globalFuncs.successMsgs[6])
              $scope.verifiedMsg = {
                  address: json.address,
                  msg: json.msg,
                  sig: json.sig,
                  version: json.version
              }
            }

        } catch (e) {
            $scope.notifier.danger(e);
        }
    }

    $scope.setVisibility = function(str) {
        $scope.visibility = str;
    }

}
module.exports = signMsgCtrl
