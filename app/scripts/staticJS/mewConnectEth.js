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
    var address = data.address;
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

  signTransaction(eTx, rawTx, txData) {
    const sendTxData = {
      nonce: rawTx.nonce,
      gasPrice: rawTx.gasPrice,
      to: rawTx.to,
      value: rawTx.value,
      data: rawTx.data,
      chainId: rawTx.chainId,
      gas: rawTx.gasLimit
    };
    this.comm.sendRtcMessage('signTx', JSON.stringify(sendTxData));
  }

  signMessage(messageHex) {
    var self = this;
    var hashToSign = ethUtil.hashPersonalMessage(ethUtil.toBuffer(messageHex));
    self.comm.sendRtcMessage('signMessage', hashToSign.toString('hex'));
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
    /*
    * Chrome > 23
    * Firefox > 22
    * Opera > 18
    * Safari > 11 (caveats exist)
    * Edge - none (RTCDataChannel not supported)
    * IE - none
    * */
    if (typeof window !== 'undefined') {
      var UA = window.navigator.userAgent;
      var browsersToCheck = {
        safari: {
          ua: UA.indexOf('Safari') !== -1,
          version: /(?<=Version\/)((?<!\.)[\d{1,2}]*)/
        },
        IE: {
          ua: UA.indexOf('MSIE') !== -1 || UA.indexOf('Trident') !== -1,
          version: /(?<=MSIE)((?<!\.)[\s\d{1,2}]*)|(?<=rv:)((?<!\.)[\s\d{1,2}]*)/
        },
        edge: {
          ua: UA.indexOf('Edge') !== -1,
          version: /(?<=Edge\/)((?<!\.)[\d{1,2}]*)/
        },
        chrome: {
          ua: UA.indexOf('Chrome') !== -1,
          version: /(?<=Chrome\/)((?<!\.)[\d{1,2}]*)/,
          after: 23
        },
        android: {
          ua: UA.indexOf('Android') !== -1,
          version: ''
        },
        fireFox: {
          ua: UA.indexOf('Firefox') !== -1,
          version: /(?<=Firefox\/)((?<!\.)[\d{1,2}]*)/,
          after: 22
        },
        opera: {
          ua: UA.indexOf('Opera') !== -1,
          version: /(?<=OPR\/)((?<!\.)[\d{1,2}]*)/,
          after: 18
        }
      };

      if (browsersToCheck.safari.ua && !browsersToCheck.chrome.ua) {
        var match_Safari = UA.match(browsersToCheck.safari.version);
        if (match_Safari) {
          try {
            if (+match_Safari[1] >= 12) {
              return MewConnectEth.buildBrowserResult(false, '', '');
            } else if(+match_Safari[1] === 11) {
              return MewConnectEth.buildBrowserResult(true, 'Safari', 'version: ' + match_Safari[1]);
            } else {
              return MewConnectEth.buildBrowserResult(true, 'Safari', 'version: ' + match_Safari[1], true);
            }
          } catch (e) {

          }
        }
      } else if (browsersToCheck.IE.ua) {
        var match_IE = UA.match(browsersToCheck.IE.version);
        if (match_IE) {
          try {
            if (match_IE[1]) {
              return MewConnectEth.buildBrowserResult(true, 'Internet Explorer', '', true);
            } else if (match_IE[2]) {
              return MewConnectEth.buildBrowserResult(true, 'Internet Explorer', '', true);
            }
          } catch (e) {

          }
        }
      } else if (browsersToCheck.edge.ua) {
        var match_Edge = UA.match(browsersToCheck.edge.version);
        if (match_Edge) {
          try {
            if (+match_Edge[1]) {
              return MewConnectEth.buildBrowserResult(true, 'Edge', 'version: ' + match_Edge[1], true);
            }
          } catch (e) {

          }
        }
      } else {
        var name = '';
        var versionRegex = /.*/;
        var minVersion = 0;
        if (browsersToCheck.opera.ua) {
          name = 'Opera';
          versionRegex = browsersToCheck.opera.version;
          minVersion = browsersToCheck.opera.after;
        } else if (browsersToCheck.fireFox.ua) {
          name = 'FireFox';
          versionRegex = browsersToCheck.fireFox.version;
          minVersion = browsersToCheck.fireFox.after;
        } else if (browsersToCheck.chrome.ua) {
          name = 'Chrome';
          versionRegex = browsersToCheck.chrome.version;
          minVersion = browsersToCheck.chrome.after;
        } else {
          return MewConnectEth.buildBrowserResult(false, '', '');
        }
        var versionCheck = UA.match(versionRegex);
        if (versionCheck) {
          try {
            if (minVersion >= +versionCheck[1]) {
              return MewConnectEth.buildBrowserResult(true, name, 'version: ' + versionCheck[1]);
            } else {
              return MewConnectEth.buildBrowserResult(false, '', '');
            }
          } catch (e) {
            console.error(e); // todo replace with proper error
          }
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
