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
                        version: '3',
                        signer: 'web3'
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
                    var combined = signed['r'] + signed['s'] + signed['v']
                    var combinedHex = combined.toString('hex')
                    var signingAddr = $scope.wallet.getAddressString()
                    $scope.signMsg.signedMsg = JSON.stringify({
                        address: $scope.wallet.getAddressString(),
                        msg: thisMessage,
                        sig: '0x' + combinedHex,
                        version: '3',
                        signer: 'ledger'
                    }, null, 2)
                    $scope.notifier.success('Successfully Signed Message with ' + signingAddr)
                }
                app.signPersonalMessage_async($scope.wallet.getPath(), msg, localCallback);

                // Sign via Digital Bitbox
            } else if ((typeof hwType != "undefined") && (hwType == "digitalBitbox")) {
                var msg = ethUtil.hashPersonalMessage(ethUtil.toBuffer(thisMessage));
                var localCallback = function(signed, error) {
                    if (typeof error != "undefined") {
                        error = error.errorCode ? u2f.getErrorByCode(error.errorCode) : error;
                        $scope.notifier.danger(error);
                        return;
                    }
                    var combined = signed['r'] + signed['s'] + signed['v']
                    var combinedHex = combined.toString('hex')
                    var signingAddr = $scope.wallet.getAddressString()
                    $scope.signMsg.signedMsg = JSON.stringify({
                        address: $scope.wallet.getAddressString(),
                        msg: thisMessage,
                        sig: '0x' + combinedHex,
                        version: '3',
                        signer: 'digitalBitbox'
                    }, null, 2)
                    $scope.notifier.success('Successfully Signed Message with ' + signingAddr);
                }
                $scope.notifier.info("Touch the LED for 3 seconds to sign the message. Or tap the LED to cancel.");
                var app = new DigitalBitboxEth($scope.wallet.getHWTransport(), '');
                app.signMessage($scope.wallet.getPath(), msg, localCallback);

            // Sign via Secalot
            } else if ((typeof hwType != "undefined") && (hwType == "secalot")) {

                var localCallback = function(signed, error) {
                    if (typeof error != "undefined") {
                        error = error.errorCode ? u2f.getErrorByCode(error.errorCode) : error;
                        $scope.notifier.danger(error);
                        return;
                    }
                    var combined    = signed['r'] + signed['s'] + signed['v']
                    var combinedHex = combined.toString('hex')
                    var signingAddr = $scope.wallet.getAddressString()
                    $scope.signMsg.signedMsg = JSON.stringify({
                        address: $scope.wallet.getAddressString(),
                        msg: thisMessage,
                        sig: '0x' + combinedHex,
                        version: '3',
                        signer: 'secalot'
                    }, null, 2)
                    $scope.notifier.success('Successfully Signed Message with ' + signingAddr);
                }
                $scope.notifier.info("Tap a touch button on your device to confirm signing.");
                var app = new SecalotEth($scope.wallet.getHWTransport());
                app.signMessage($scope.wallet.getPath(), thisMessage, localCallback);
                
            // Sign via trezor
            } else if ((typeof hwType != "undefined") && (hwType == "trezor")) {
                TrezorConnect.ethereumSignMessage($scope.wallet.getPath(), thisMessage, function(response) {
                    if (response.success) {
                        $scope.signMsg.signedMsg = JSON.stringify({
                            address: '0x' + response.address,
                            msg: thisMessage,
                            sig: '0x' + response.signature,
                            version: '3',
                            signer: 'trezor'
                        }, null, 2)
                        $scope.notifier.success('Successfully Signed Message with ' + $scope.wallet.getAddressString())
                    } else {
                        $scope.notifier.danger(response.error);
                    }
                })

                // Sign via PK
            } else {
                var msg = ethUtil.hashPersonalMessage(ethUtil.toBuffer(thisMessage))
                var signed = ethUtil.ecsign(msg, $scope.wallet.getPrivateKey())
                var combined = Buffer.concat([Buffer.from(signed.r), Buffer.from(signed.s), Buffer.from([signed.v])])
                var combinedHex = combined.toString('hex')
                var signingAddr = $scope.wallet.getAddressString()
                $scope.signMsg.signedMsg = JSON.stringify({
                    address: $scope.wallet.getAddressString(),
                    msg: thisMessage,
                    sig: '0x' + combinedHex,
                    version: '3',
                    signer: 'MEW'
                }, null, 2)
                $scope.notifier.success('Successfully Signed Message with ' + signingAddr)
            }

        } catch (e) {
            $scope.notifier.danger(e)
        }
    }
    var getTrezorLenBuf = function(msgLen) {
        if (msgLen < 253) return Buffer.from([msgLen & 0xff])
        else if (msgLen < 0x10000) return Buffer.from([253, msgLen & 0xff, (msgLen >> 8) & 0xFF])
        else {
            return Buffer.from([254, msgLen & 0xFF, (msgLen >> 8) & 0xFF, (msgLen >> 16) & 0xFF, (msgLen >> 24) & 0xFF])
        }
    }
    var getTrezorHash = function(msg) {
        return ethUtil.sha3(Buffer.concat([ethUtil.toBuffer("\u0019Ethereum Signed Message:\n"), getTrezorLenBuf(msg.length), ethUtil.toBuffer(msg)]))
    }
    $scope.verifySignedMessage = function() {
        try {
            var json = JSON.parse($scope.verifyMsg.signedMsg)
            var sig = new Buffer(ethFuncs.getNakedAddress(json.sig), 'hex')
            if (sig.length != 65) throw globalFuncs.errorMsgs[12]
            sig[64] = sig[64] == 0 || sig[64] == 1 ? sig[64] + 27 : sig[64]
            var hash = ethUtil.hashPersonalMessage(ethUtil.toBuffer(json.msg))
            if (json.version == '3') {
                if (json.signer == 'trezor') {
                    hash = getTrezorHash(json.msg)
                } else if(json.signer=='ledger') {
                    hash = ethUtil.hashPersonalMessage(Buffer.from(json.msg))
                }
            } else if (json.version == '1') {
                hash = ethUtil.sha3(json.msg)
            }
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