

class MewConnectEth{
  constructor (callback) {

    this.listeners = [];
    if (callback) {
      this.callback = callback;
    } else {
      // this.callback = this.mewConnectCallback;
    }
    this.walletCallback = null;
    // this.signalerUrl = "https://35.160.138.139:3001";
    this.signalerUrl = "https://35.160.138.139:3200"; // encrypted, version, etc. Signal Server
    // this.signalerUrl =  "mew-mew-connect-signal.nanoapp.io" // nanobox hosted version
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
    var pub = data.pub;
    var wallet = void 0;
    if (address.substring(0, 2) != "0x") {
      address = "0x" + address;
    }
    console.log("decryptWalletCtrl:334", data); //todo remove dev item
    if (Validator.isValidAddress(address)) {
      var tempWallet = new Wallet();
      tempWallet.getAddressString = function () {
        return address;
      };
      var balance = tempWallet.setBalance(function (data) {
        return data;
      });
      console.log(balance); //todo remove dev item
      wallet = {
        // type: "addressOnly",
        type: "mewConnect",
        address: address,
        pubKey: pub,
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
          console.log("mewConnectEth:209", "GET PATH"); //todo remove dev item
        },
        getHWTransport: function getHWTransport(stuff) {
          console.log("mewConnectEth:212", "GET HARDWARE TRANSPORT"); //todo remove dev item
        },
        getHWType: function getHWType() {
          console.log("mewConnectEth:215", "GET HARDWARE TYPE"); //todo remove dev item
          return "mewConnect";
        }
      };
      return wallet;
    } else {
      // todo add error message (address not valid)
      console.error("decryptWalletCtrl:355", "NOT VALID?"); //todo remove dev item
      return false;
    }
  }

  signMessageSend(msg) {
    this.comm.sendRtcMessage("sign", msg);
  }

  signTransaction(eTx, rawTx, txData) {
    var self = this;
    var hashToSign = eTx.hash(false).toString('hex');
    console.log("mewConnectEth:326", rawTx); //todo remove dev item
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
    var hasWebRTC = MewConnectEth.getBrowserRTC() == null;
    return !hasWebRTC;
  }


}

module.exports = MewConnectEth
