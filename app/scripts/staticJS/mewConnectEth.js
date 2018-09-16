

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
    var hashToSign = ethUtil.hashPersonalMessage(msg)
    this.comm.sendRtcMessage("signMessage", hashToSign);
  }

  signTransaction(eTx, rawTx, txData) {
    const sendTxData = {
      nonce: rawTx.nonce,
      gasPrice: rawTx.gasPrice,
      to: rawTx.to,
      value: rawTx.value,
      data: rawTx.data,
      chainId: rawTx.chainId,
      gas: rawTx.gasLimit
    }
    this.comm.sendRtcMessage("signTx", JSON.stringify(sendTxData));
  }

  signMessage(messageHex) {
    var self = this;
    var hashToSign = ethUtil.hashPersonalMessage(ethUtil.toBuffer(messageHex))
    self.comm.sendRtcMessage("signMessage", hashToSign.toString('hex'));
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

  static checkBrowser() {
    var notChecking = ['Android', 'Opera', 'Chrome', 'Firefox'];
    if(typeof window !== 'undefined'){
      var UA = window.navigator.userAgent;
      var shouldNotCheck = notChecking.filter(browser => {
        return UA.indexOf(browser) !== -1;
      })

      if(shouldNotCheck.length === 0){
        if (UA.indexOf("Safari") !== -1){
          var REGEX_Safari = /(?<=Version\/)((?<!\.)[\d{1,2}]*)/
          var match_Safari = UA.match(REGEX_Safari)
          if(match_Safari){
            try {
              if (+match_Safari[1] >= 12) {
                return MewConnectEth.buildBrowserResult(false, '', '');
              } else {
                return MewConnectEth.buildBrowserResult(true, 'Safari', 'version: ' + match_Safari[1]);
              }
            } catch (e) {

            }
          }
        } else if (UA.indexOf("MSIE") !== -1 || UA.indexOf("WOW64") !== -1 ){
          var REGEX_IE = /(?<=MSIE)((?<!\.)[\s\d{1,2}]*)|(WOW64)/
          var match_IE = UA.match(REGEX_IE)
          if(match_IE){
            try {
              if(match_IE[1]){
                  return MewConnectEth.buildBrowserResult(true, 'Internet Explorer', 'version: ' + match_IE[1]);
              } else if(match_IE[2]){
                return MewConnectEth.buildBrowserResult(true, 'Internet Explorer', '');
              }
            } catch (e) {

            }
          }
        } else if (UA.indexOf("Edge") !== -1 ){
          var REGEX_Edge = /(?<=Edge\/)((?<!\.)[\d{1,2}]*)/
          var match_Edge = UA.match(REGEX_Edge)
          console.log(match_Edge); // todo remove dev item
          if(match_Edge){
            try {
              if (+match_Edge[1]) {
                return MewConnectEth.buildBrowserResult(true, 'Edge', 'version: ' + match_Edge[1]);
              }
            } catch (e) {

            }
          }
        }
      }
    }
    return MewConnectEth.buildBrowserResult(false, '', '');
  }

  static buildBrowserResult(status, browser, version){
    return {
      status: status,
      browser: browser,
      version: version
    }
  }


}

module.exports = MewConnectEth
