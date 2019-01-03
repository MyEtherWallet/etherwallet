class MewConnectEth {
  constructor(callback) {

    this.listeners = [];

    if (callback) {
      this.callback = callback;
    } else {
      // this.callback = this.mewConnectCallback;
    }
    this.walletCallback = null;
    this.signalerUrl = 'https://connect.mewapi.io'; // nanobox hosted version
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
    var address = data.address.toLowerCase();
    // var pub = data.pub;
    var wallet = void 0;
    if (address.substring(0, 2) != '0x') {
      address = '0x' + address;
    }
    if (Validator.isValidAddress(address)) {
      var tempWallet = new Wallet();
      tempWallet.getAddressString = function() {
        return address;
      };
      var balance = tempWallet.setBalance(function(data) {
        return data;
      });

      wallet = {
        // type: "addressOnly",
        type: 'mewConnect',
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
          return 'mewConnect';
        }
      };
      return wallet;
    } else {
      // todo add error message (address not valid)
      return false;
    }
  }

  signMessageSend(msg) {
    var hashToSign = ethUtil.hashPersonalMessage(msg);
    this.comm.sendRtcMessage('signMessage', hashToSign);
  }

  signTransaction(eTx, rawTx, tokenDetails) {
    const sendTxData = {
      nonce: rawTx.nonce,
      gasPrice: rawTx.gasPrice,
      to: rawTx.to,
      value: rawTx.value,
      data: rawTx.data,
      chainId: rawTx.chainId,
      gas: rawTx.gasLimit
    };

    if (tokenDetails !== 'otherType') {
      sendTxData.currency = {
        symbol: tokenDetails ? tokenDetails.symbol : 'ETH',
        decimals: tokenDetails ? tokenDetails.decimal : 18
      };
      if (tokenDetails) {
        if(tokenDetails.address) sendTxData.currency.address = tokenDetails.address;
      }
    }

    this.comm.sendRtcMessage('signTx', JSON.stringify(sendTxData));
  }

  signMessage(message) {
    this.comm.sendRtcMessage('signMessage', message);
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
    const browser = window.browser;
    const version = browser.version.split('.')[0];
    /*
    * Chrome > 23
    * Firefox > 22
    * Opera > 18
    * Safari > 11 (caveats exist)
    * Edge - none (RTCDataChannel not supported)
    * IE - none
    * */
    if (typeof window !== 'undefined') {
      if (browser.name === 'safari') {
        // return MewConnectEth.buildBrowserResult(false, '', '');
        // Uncomment when safari can be fixed
        // if (+version >= 12) {
        //   return MewConnectEth.buildBrowserResult(false, '', '');
        // } else if (+version === 11) {
        return MewConnectEth.buildBrowserResult(true, 'Safari', 'version: ' + browser.version);
        // }
      } else if (browser.name === 'ie') {
        return MewConnectEth.buildBrowserResult(true, 'Internet Explorer', '', true);
      } else if (browser.name === 'edge') {
        return MewConnectEth.buildBrowserResult(true, 'Edge', 'version: ' + browser.version, true);
      } else {
        let name = '';
        let minVersion = 0;

        if (browser.name === 'opera') {
          name = 'Opera';
          minVersion = 18;
        } else if (browser.name === 'firefox') {
          name = 'Firefox';
          minVersion = 22;
        } else if (browser.name === 'chrome') {
          name = 'Chrome';
          minVersion = 23;
        } else {
          return MewConnectEth.buildBrowserResult(false, '', '');
        }

        try {
          if (minVersion >= +version) {
            return MewConnectEth.buildBrowserResult(true, name, 'version: ' + version);
          } else {
            return MewConnectEth.buildBrowserResult(false, '', '');
          }
        } catch (e) {
          console.error(e);
        }
      }
    }

  }

  static buildBrowserResult(status, browser, version, noSupport) {
    return {
      status: status,
      browser: browser,
      version: version,
      noSupport: noSupport || false
    };
  }

}

module.exports = MewConnectEth;
