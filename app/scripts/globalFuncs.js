'use strict';
var globalFuncs = function() {};
globalFuncs.lightMode = false;
globalFuncs.getBlockie = function(address) {
  return blockies.create({
    seed: address.toLowerCase(),
    size: 8,
    scale: 16
  }).toDataURL();
};
globalFuncs.printPaperWallets = function(strJson) {
  var win = window.open('about:blank', '_blank');
  var data = '<html>\r\n\r\n<head>\r\n <link rel="stylesheet" href="css\/etherwallet-master.min.css" \/>\r\n <script type="text\/javascript" src="js\/jquery-1.12.3.min.js"><\/script>\r\n <script type="text\/javascript" src="js\/etherwallet-static.min.js"><\/script>\r\n <script type="text\/javascript">\r\n function getBlockie(address) {\r\n return blockies.create({\r\n seed: address.toLowerCase(),\r\n size: 8,\r\n scale: 16\r\n }).toDataURL();\r\n    }\r\n    function generateWallets() {\r\n var json = JSON.parse($("#printwalletjson").html());\r\n for (var i = 0; i < json.length; i++) {\r\n var walletTemplate = $(\'<div\/>\').append($("#print-container").clone());\r\n new QRCode($(walletTemplate).find("#paperwalletaddqr")[0], {\r\n text: json[i][\'address\'],\r\n colorDark: "#000000",\r\n colorLight: "#ffffff",\r\n correctLevel: QRCode.CorrectLevel.H\r\n });\r\n new QRCode($(walletTemplate).find("#paperwalletprivqr")[0], {\r\n text: json[i][\'private\'],\r\n colorDark: "#000000",\r\n colorLight: "#ffffff",\r\n correctLevel: QRCode.CorrectLevel.H\r\n });\r\n $(walletTemplate).find("#paperwalletadd").html(json[i][\'address\']);\r\n $(walletTemplate).find("#paperwalletpriv").html(json[i][\'private\']);\r\n $(walletTemplate).find("#identicon").css(\'background-image\',\'url(\' + getBlockie(json[i][\'address\']) +\')\');\r\n walletTemplate = $(walletTemplate).find("#print-container").show();\r\n $("body").append(walletTemplate);\r\n }\r\n setTimeout(function() {\r\n window.print();\r\n }, 2000);\r\n    }\r\n    <\/script>\r\n<\/head>\r\n\r\n<body><span id="printwalletjson" style="display: none;">{{WALLETJSON}}<\/span>\r\n    <div class="print-container" style="display: none; margin-bottom: 50px;" id="print-container"><img src="images\/logo-ethereum-1.png" class="ether-logo-1" height="100%" width="auto" \/> <div id="identicon" class="addressIdenticon med float"><\/div>\r\n <img src="images\/print-sidebar.png" height="100%" width="auto" class="print-title" \/>\r\n <div class="print-qr-code-1">\r\n <div id="paperwalletaddqr"><\/div>\r\n <p class="print-text" style="padding-top: 25px;">YOUR ADDRESS<\/p>\r\n <\/div>\r\n <div class="print-notes"><img src="images\/notes-bg.png" width="90%;" height="auto" class="pull-left" \/>\r\n <p class="print-text">AMOUNT \/ NOTES<\/p>\r\n <\/div>\r\n <div class="print-qr-code-2">\r\n <div id="paperwalletprivqr"><\/div>\r\n <p class="print-text" style="padding-top: 30px;">YOUR PRIVATE KEY<\/p>\r\n <\/div>\r\n <div class="print-address-container">\r\n <p><strong>Your Address:<\/strong>\r\n <br \/><span id="paperwalletadd"><\/span><\/p>\r\n <p><strong>Your Private Key:<\/strong>\r\n <br \/><span id="paperwalletpriv"><\/span><\/p>\r\n <\/div>\r\n    <\/div>\r\n<\/body>\r\n\r\n<\/html>\r\n';
  data = data.replace('{{WALLETJSON}}', strJson);
  win.document.write(data);
  win.document.write('<script>generateWallets();</script>');
};
globalFuncs.getBlob = function(mime, str) {
  var str = (typeof str === 'object') ? JSON.stringify(str) : str;
  if (str == null) return '';
  var blob = new Blob([str], {
    type: mime
  });
  return window.URL.createObjectURL(blob);
};
globalFuncs.getSuccessText = function(str) {
  return '<p class="text-center text-success"><strong> ' + str + '</strong></p>';
};
globalFuncs.getDangerText = function(str) {
  return '<p class="text-center text-danger"><strong> ' + str + '</strong></p>';
};

// These are translated in the translation files
globalFuncs.errorMsgs = [
  'Please enter a valid amount.', // 0
  'Your password must be at least 9 characters. Please ensure it is a strong password. ', // 1
  'Sorry! We don\'t recognize this type of wallet file. ', // 2
  'This is not a valid wallet file. ', // 3
  'This unit doesn\'t exists, please use the one of the following units ', // 4
  'Please enter a valid ethereum address. (0x...) ', // 5
  'Please enter a valid password. ', // 6
  'Please enter valid decimals (Must be integer, 0-18). ', // 7
  'Please enter a valid gas limit (Must be integer. Try 21000-4000000). ', // 8
  'Please enter a valid data value (Must be hex). ', // 9
  'Please enter a valid gas price. ', // 10 - NOT USED
  'Please enter a valid nonce (Must be integer).', // 11
  'Invalid signed transaction. ', // 12
  'A wallet with this nickname already exists. ', // 13
  'Wallet not found. ', // 14
  'Whoops. It doesn\'t look like a proposal with this ID exists yet or there is an error reading this proposal. ', // 15 - NOT USED
  'A wallet with this address already exists in storage. Please check your wallets page. ', // 16
  '(error_17) Insufficient balance of ETH. Your gas limit * gas price + amount to send exceeds your current balance. Send more ETH to your account or use the "Send Entire Balance" button. If you believe this is in error, try pressing generate again. Required (d+) and got: (d+). [Learn More.](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)', // 17
  'All gas would be used on this transaction. This means you have already voted on this proposal or the debate period has ended.', // 18
  'Please enter a valid symbol', // 19
  'Not a valid ERC-20 token', // 20
  'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.', // 21
  'Please enter valid node name', // 22
  'Enter valid URL. If you are on https, your URL must be https', // 23
  'Please enter a valid port. ', // 24
  'Please enter a valid chain ID. ', // 25
  'Please enter a valid ABI. ', // 26
  'Minimum amount: 0.01. Max amount: ', // 27
  'You need this Keystore File + Password or the Private Key (next page) to access this wallet in the future. ', // 28
  'Please enter a valid user and password. ', // 29
  'Please enter a valid name (7+ characters, limited punctuation) ', // 30
  'Please enter a valid secret phrase. ', // 31
  'Could not connect to the node. Refresh your page, try a different node (top-right corner), check your firewall settings. If custom node, check your configs.', // 32
  'The wallet you have unlocked does not match the owner\'s address. ', // 33
  'The name you are attempting to reveal does not match the name you have entered. ', // 34
  'Input address is not checksummed. <a href="https://kb.myetherwallet.com/addresses/what-does-checksummed-mean.html" target="_blank" rel="noopener noreferrer"> Click here to learn what this means.</a>', // 35
  'Please enter valid TX hash', // 36
  'Please enter valid hex string. Hex only contains: 0x, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, a, b, c, d, e, f', // 37
  'Offer must have either price or reserve set to more than 0', // 38
  'Bid must be more than the specified minimum', // 39
  'Please enter a valid private key' // 40
];

globalFuncs.phishingWarning = [
  'This address has been flagged: ',
  'This address has been flagged in our Phishing list. Please make sure you are sending to the right address'
];

// These are translated in the translation files
globalFuncs.successMsgs = [
  'Valid address',
  'Wallet successfully decrypted',
  'Transaction submitted. TX Hash: ',
  'Your wallet was successfully added: ',
  'File Selected: ',
  'You are connected to the node ',
  'Message Signature Verified'
];

// These are translated in the translation files
globalFuncs.gethErrors = {
  '(geth-06) Invalid sender\\.': 'GETH_InvalidSender',
  '(geth-08) This TX\'s [nonce](https://kb.myetherwallet.com/transactions/what-is-nonce.html) is too low\\. Try incrementing the nonce by pressing the Generate button again, or [replace the pending transaction](https://kb.myetherwallet.com/transactions/check-status-of-ethereum-transaction.html)\\.': 'GETH_Nonce',
  '(geth-02) Gas price too low for acceptance\\. Try raising the gas price to 21 GWEI via the dropdown in top-right\\.': 'GETH_Cheap',
  '(geth-01) Insufficient balance\\. Your gas limit * gas price + amount to send exceeds your current balance\\. Send more ETH to your account or use the "Send Entire Balance" button\\. If you believe this is in error, try pressing generate again\\. Required (d+) WEI and got: (d+) WEI\\. [Learn More](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)': 'GETH_Balance',
  '(geth-09) Account does not exist or account balance too low\\.': 'GETH_NonExistentAccount',
  '(geth-04) Insufficient balance\\. Your gas limit * gas price + amount to send exceeds your current balance\\. Send more ETH to your account or use the "Send Entire Balance" button\\. If you believe this is in error, try pressing generate again\\. Required (d+) WEI and got: (d+) WEI\\. [Learn More](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)': 'GETH_InsufficientFunds',
  '(geth-05) Intrinsic gas too low\\. Try raising the gas price to 21 GWEI via the dropdown in top-right or the gas limit to 21000 (for sending) or 200000 (for sending tokens or contracts) and try again.': 'GETH_IntrinsicGas',
  '(geth-03) Exceeds block gas limit\\. Transaction cost exceeds current gas limit\\. Limit: (d+) WEI, got: (d+) WEI\\. Please lower the gas limit to 21000 (for sending) or 200000 (for sending tokens or contracts) and try again\\. [Learn More](https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html)': 'GETH_GasLimit',
  '(geth-07) Negative value\\.': 'GETH_NegativeValue'
};

globalFuncs.gethErrorMsgs = {};
globalFuncs.getGethMsg = function(str) {
  if (str in this.gethErrors) {
    var key = this.gethErrors[str];
    if (key in this.gethErrorMsgs) {
      return this.gethErrorMsgs[key];
    }
  }
  return str;
};

// These are translated in the translation files
globalFuncs.parityErrors = {
  'A (parity-01) A transaction with the same hash was already imported. It was probably already broadcast. To avoid duplicate transactions, check your address on [etherscan.io](https://etherscan.io) & wait 10 minutes before attempting to send again. [Learn More](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)\\. This means it was already broadcast. Please check your address on etherscan.io & wait 10 minutes before attempting to send again to avoid duplicate transactions. <a target=\'_blank\' rel=\'noopener noreferrer\' href=\'https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html\'>Learn more</a>': 'PARITY_AlreadyImported',
  '(parity-07) There is already a transaction with this [nonce](https://kb.myetherwallet.com/transactions/what-is-nonce.html)\\. Try incrementing the nonce by pressing the Generate button again, or [replace the pending transaction](https://kb.myetherwallet.com/transactions/check-status-of-ethereum-transaction.html)\\.': 'PARITY_Old',
  '(parity-04) There is another transaction with same nonce in the queue, or the transaction fee is too low\\. Try incrementing the nonce by clicking the Generate button again\\. [Learn More](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)\\.': 'PARITY_TooCheapToReplace',
  '(parity-06) There are too many transactions in the queue\\. Your transaction was dropped due to limit\\. Try increasing the gas price\\. [Learn More](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)\\.': 'PARITY_LimitReached',
  '(parity-08) TX Fee is too low\\. It does not satisfy your node\'s minimal fee (minimal: (d+) WEI, got: (d+) WEI)\\. Try increasing the gas price and/or gas limit\\. [Learn More](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)\\.': 'PARITY_InsufficientGasPrice',
  '(parity-03) Insufficient balance\\. The account you tried to send transaction from does not have enough funds\\. If you believe this is in error, try using the \'Send Entire Balance\' button, or pressing generate again. Required (d+) WEI and got: (d+) WEI\\. [Learn More](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)\\.': 'ERROR_17',
  '(parity-02) Transaction cost exceeds current gas limit\\. Limit: (d+) WEI, got: (d+) WEI\\. Please lower the gas limit to 21000 (for sending) or 200000 (for sending tokens or contracts) and try again\\. [Learn More](https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html)\\.': 'PARITY_GasLimitExceeded',
  '(parity-05) Supplied gas limit is beyond limit\\. Try lowering the gas limit to 21000\\. [Learn More](https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html)\\.': 'PARITY_InvalidGasLimit'
};
globalFuncs.parityErrorMsgs = {};
globalFuncs.getParityMsg = function(str) {
  for (var reg in this.parityErrors) {
    if (this.parityErrors.hasOwnProperty(reg)) {
      let args = str.match('^' + reg + '$');
      if (args) {
        let key = this.parityErrors[reg];
        if (key in this.parityErrorMsgs) {
          args[0] = this.parityErrorMsgs[key];
          return format.apply(this, args);
        }
      }
    }
  }
  return str;
};
globalFuncs.getEthNodeName = function() {
  //  return "geth";
  return 'parity';
};
globalFuncs.getEthNodeMsg = function(str) {
  var ethNode = this.getEthNodeName();
  if (ethNode == 'geth') return this.getGethMsg(str);
  else
    return this.getParityMsg(str);
};
globalFuncs.scrypt = {
  n: 8192
};
globalFuncs.postDelay = 300;
globalFuncs.kdf = 'scrypt';
globalFuncs.defaultTxGasLimit = 21000;
globalFuncs.defaultTokenGasLimit = 200000;
globalFuncs.donateAddress = '0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D';
globalFuncs.isNumeric = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
globalFuncs.urlGet = function(name) {
  name = name.toLowerCase();
  if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search.toLowerCase())) return this.stripTags(decodeURIComponent(name[1]));
};
globalFuncs.stripTags = function(str) {
  return xssFilters.inHTMLData(str);
};
globalFuncs.checkAndRedirectHTTPS = function() {
  var host = 'myetherwallet.com';
  var hostw = 'https://vintage.myetherwallet.com';
  var path = window.location.pathname;
  if (host == window.location.host) window.location = hostw + path;
};
globalFuncs.isStrongPass = function(password) {
  return password.length > 8;
};
globalFuncs.hexToAscii = function(hex) {
  return hex.match(/.{1,2}/g).map(function(v) {
    return String.fromCharCode(parseInt(v, 16));
  }).join('');
};
globalFuncs.isAlphaNumeric = function(value) {
  return !/[^a-zA-Z0-9]/.test(value);
};
globalFuncs.getRandomBytes = function(num) {
  return ethUtil.crypto.randomBytes(num);
};

globalFuncs.isAlphaNumericOrSpec = function(value) {
  return !/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(value);
};

function getFromLS(key, errorMsg) {
  var localStorageItemString = globalFuncs.localStorage.getItem(key);
  if (!localStorageItemString && errorMsg) {
    throw Error(errorMsg);
  } else if (!localStorageItemString) {
    return null;
  }
  else {
    return JSON.parse(localStorageItemString);
  }
}

globalFuncs.getDefaultTokensAndNetworkType = function getDefaultTokensAndNetworkType() {
  var defaultNodes = require('./nodes').nodeList;

  var tokenMappings = {
    'eth': require('./tokens/ethTokens.json'),
    'etc': require('./tokens/etcTokens.json'),
    'rop': require('./tokens/ropstenTokens.json'),
    'kov': require('./tokens/kovanTokens.json'),
    'rin': require('./tokens/rinkebyTokens.json')
  };

  var nodeErrMsg = 'Node does not exist, contact support@myetherwallet.com CODE:localstorageNodeMissing';
  // localStorage selected node
  var currentNodeKey = getFromLS('curNode', nodeErrMsg).key;
  // custom nodes in local storage
  var customLocalNodes = getFromLS('localNodes') || [];

  var customNodeNetworkType = currentNodeKey.split('_')[1];

  var isCustomNode = !!customLocalNodes.find(function(currentLocalCustomNode) {
    return currentLocalCustomNode.options === customNodeNetworkType;
  });

  var defaultNode;
  var firstCustomNodeWithMatchingNetwork;
  var defaultTokens;

  if (isCustomNode) {
    // NOTE: Different curNode value structure for default nodes and custom nodes. This will work because we are checking to make sure we are a custom node first.

    firstCustomNodeWithMatchingNetwork = customLocalNodes.find(function(currentLocalCustomNode) {
      return currentLocalCustomNode.options === customNodeNetworkType;
    });

    // if the reference the custom local node is invalid, throw
    if (!firstCustomNodeWithMatchingNetwork) {
      throw Error('Custom Local Node does not exist. Please clear local storage, and re-input your custom node.');
    }
  } else {
    defaultNode = defaultNodes[currentNodeKey];
    if (!defaultNode) {
      throw Error('Default Node does not exist. Please clear local storage and try again.');
    }
  }

  if (isCustomNode) {
    // tokenMappings maps localStorage custom node key to corresponding default tokens of network. If we are unable to retrieve the default tokens of the custom network, we return an empty array.
    defaultTokens = tokenMappings[firstCustomNodeWithMatchingNetwork.options] || [];
  }
  else {
    defaultTokens = defaultNode.tokenList;
  }

  return {
    defaultTokens: defaultTokens,
    networkType: isCustomNode ? firstCustomNodeWithMatchingNetwork.options : defaultNode.name.toLowerCase(),
    isCustomNode: isCustomNode
  };
};

function isDuplicateTokenAddress(tokenOne, tokenTwo, currentNetwork) {
  var hasNetwork = tokenTwo.network;
  if (hasNetwork) {
    return tokenTwo.network === currentNetwork && tokenTwo.contractAddress === tokenOne.address;
  } else {
    return tokenTwo.contractAddress === tokenOne.address;
  }
}

function isDuplicateTokenSymbol(tokenOne, tokenTwo, currentNetwork) {
  var hasNetwork = tokenTwo.network;
  if (hasNetwork) {
    return tokenTwo.network === currentNetwork && tokenTwo.symbol === tokenOne.symbol;
  } else {
    return tokenTwo.symbol === tokenOne.symbol;
  }
}

globalFuncs.isDuplicateToken = function(tokenOne, tokenTwo, currentNetwork) {
  return isDuplicateTokenSymbol(tokenOne, tokenTwo, currentNetwork) || isDuplicateTokenAddress(tokenOne, tokenTwo, currentNetwork);
};

globalFuncs.doesTokenExistInDefaultTokens = function(token, defaultTokensAndNetworkType) {
  for (var i = 0; i < defaultTokensAndNetworkType.defaultTokens.length; i++) {
    var currentDefaultToken = defaultTokensAndNetworkType.defaultTokens[i];
    var isDuplicateToken = globalFuncs.isDuplicateToken(currentDefaultToken, token, defaultTokensAndNetworkType.networkType);
    // do not simplify to return isDuplicateToken
    if (isDuplicateToken) {
      return true;
    }
  }
  return false;
};

globalFuncs.saveTokenToLocal = function(localToken, callback) {
  try {
    if (!ethFuncs.validateEtherAddress(localToken.contractAdd)) {throw globalFuncs.errorMsgs[5];}
    else if (!globalFuncs.isNumeric(localToken.decimals) || parseFloat(localToken.decimals) < 0) {throw globalFuncs.errorMsgs[7];}
    else if (globalFuncs.isAlphaNumericOrSpec(localToken.symbol) || localToken.symbol === '') {throw globalFuncs.errorMsgs[19];}
    var storedTokens = globalFuncs.localStorage.getItem('localTokens', null) != null ? JSON.parse(globalFuncs.localStorage.getItem('localTokens')) : [];

    // catch if TOKEN SYMBOL is already in storedTokens
    for (var i = 0; i < storedTokens.length; i++) {
      if (storedTokens[i].symbol.toLowerCase().replace(/ /g, '') === localToken.symbol.toLowerCase().replace(/ /g, '')) {
        throw Error('Unable to add a custom token with the same symbol as an existing custom token. Try clicking the "Load Tokens" button, or choosing a different token symbol');
      }
    }

    // catch if CONTRACT ADDRESS is already in storedTokens
    for (var i = 0; i < storedTokens.length; i++) {
      if (storedTokens[i].contractAddress.toLowerCase().replace(/ /g, '') === localToken.contractAdd.toLowerCase().replace(/ /g, '')) {
        throw Error('Unable to add custom token. It has the same address as custom token ' + storedTokens[i].symbol + '. Try clicking the "Load Tokens" button to see it. :)');
      }
    }

    var defaultTokensAndNetworkType = globalFuncs.getDefaultTokensAndNetworkType();

    // catch if TOKEN SYMBOL is already in defaultTokens
    if (globalFuncs.doesTokenExistInDefaultTokens(localToken, defaultTokensAndNetworkType)) {
      throw Error('This token is already added as a default token. Try clicking the "Load Tokens" button to see it. :)');
    }

    storedTokens.push({
      contractAddress: localToken.contractAdd,
      symbol: localToken.symbol,
      decimal: parseInt(localToken.decimals),
      type: 'custom',
      network: globalFuncs.getDefaultTokensAndNetworkType().networkType
    });

    globalFuncs.localStorage.setItem('localTokens', JSON.stringify(storedTokens));

    callback({
      error: false
    });

  } catch (e) {
    const newE = e.message ? e.message : e;
    callback({
      error: true,
      msg: newE
    });
  }
};
globalFuncs.removeTokenFromLocal = function(symbol, tokenObj) {
  var storedTokens = globalFuncs.localStorage.getItem('localTokens', null) != null ? JSON.parse(globalFuncs.localStorage.getItem('localTokens', null)) : [];
  // remove from localstorage so it doesn't show up on refresh
  for (var i = 0; i < storedTokens.length; i++)
    if (storedTokens[i].symbol === symbol) {
      storedTokens.splice(i, 1);
      break;
    }
  globalFuncs.localStorage.setItem('localTokens', JSON.stringify(storedTokens));
  if (!tokenObj) return;
  // remove from tokenObj so it removes from display
  for (var i = 0; i < tokenObj.length; i++)
    if (tokenObj[i].symbol === symbol) {
      tokenObj.splice(i, 1);
      break;
    }
};

globalFuncs.localStorage = {
  isAvailable: function() {
    // return typeof localStorage != "undefined";
    // return globalFuncs.storageAvailable('localStorage');

    // Polyfilled if not available/accessible
    return true;
  },
  setItem: function(key, value) {
    if (this.isAvailable()) {
      localStorage.setItem(key, value);
    } else {
      // console.log("localStorage is available? " + this.isAvailable());
    }
  },
  getItem: function(key, dValue = '') {
    if (this.isAvailable()) {
      return localStorage.getItem(key);
    } else {
      return dValue;
    }
  }
};

globalFuncs.MEWconnectStatus = {
  MEWconnect: null,
  decryptOpenTriggers: [],
  mewConnectListener: function() {},
  register: function(listener) {
    this.mewConnectListener = listener;
  },
  registerDecryptOpeners: function(openers) {
    this.decryptOpenTriggers.push(openers);
  },
  update: function(status) {
    this.mewConnectListener(status);
    if (this.decryptOpenTriggers.length > 0) {
      this.decryptOpenTriggers.forEach(function(opener) {
        opener();
      });
    }
  },
  newTabOpened: function() {},
  newTabOpenedTrigger: function(show) {
    this.newTabOpened(show);
  },
  registerNewTabOpener: function(newTabOpener) {
    this.newTabOpened = newTabOpener
  }

};

module.exports = globalFuncs;
