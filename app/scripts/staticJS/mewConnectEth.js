

class MewConnectEth{
  constructor (callback) {

    this.listeners = [];

    if (callback) {
      this.callback = callback;
    } else {
      // this.callback = this.mewConnectCallback;
    }
    this.walletCallback = null;
    this.signalerUrl =  "https://connect.mewapi.io" // nanobox hosted version
  }

  getCallback() {
    return this.callback;
  }

  setMewConnect(mewConnect) {
    this.comm = mewConnect;
  }

  signalerConnect(url) {
    if (!url) {
      this.comm.initiatorStart(this.signalerUrl);
    } else {
      this.comm.initiatorStart(url);
    }
  }

  setWalletCallback(func) {
    this.walletCallback = func;
  }

  createWallet(data) {
    var address = data.address;
    // var pub = data.pub;
    var wallet = void 0;
    if (address.substring(0, 2) != "0x") {
      address = "0x" + address;
    }
    if (Validator.isValidAddress(address)) {
      var tempWallet = new Wallet();
      tempWallet.getAddressString = function () {
        return address;
      };
      var balance = tempWallet.setBalance(function (data) {
        return data;
      });

      wallet = {
        // type: "addressOnly",
        type: "mewConnect",
        address: address,
        // pubKey: pub,
        getAddressString: tempWallet.getAddressString,
        getChecksumAddressString: function getChecksumAddressString() {
          return ethUtil.toChecksumAddress(this.getAddressString());
        },
        getBalance: function getBalance() {
          return this.balance;
        },
        setBalance: tempWallet.setBalance,
        setTokens: tempWallet.setTokens,
        getPath: function getPath(stuff) {
        },
        getHWTransport: function getHWTransport(stuff) {
        },
        getHWType: function getHWType() {
          return "mewConnect";
        }
      };
      return wallet;
    } else {
      // todo add error message (address not valid)
      return false;
    }
  }

  signMessageSend(msg) {
    this.comm.sendRtcMessage("sign", msg);
  }

  signTransaction(eTx, rawTx, txData) {
    var self = this;
    var hashToSign = eTx.hash(false).toString('hex');
    self.comm.sendRtcMessage("signTx", JSON.stringify(rawTx));
  }

  signMessage(messageHex) {
    var self = this;
    var hashToSign = messageHex.toString('hex');
    self.comm.sendRtcMessage("signMessage", messageHex);
  }

  static getBrowserRTC() {
    if (typeof window === 'undefined') return null;
    var wrtc = {
      RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
      RTCSessionDescription: window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription,
      RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate
    };
    if (!wrtc.RTCPeerConnection) return null;
    return wrtc;
  }

  static checkWebRTCAvailable() {

    var doesNotHaveWebRTC = MewConnectEth.getBrowserRTC() == null;
    return !doesNotHaveWebRTC;
    // return false
  }


}

module.exports = MewConnectEth
