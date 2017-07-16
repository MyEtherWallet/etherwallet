'use strict';
var globalFuncs = function() {}
globalFuncs.lightMode = false;
globalFuncs.getBlockie = function(address) {
    return blockies.create({
        seed: address.toLowerCase(),
        size: 8,
        scale: 16
    }).toDataURL();
};
globalFuncs.printPaperWallets = function(strJson) {
    var win = window.open("about:blank", "rel='noopener'", "_blank");
    var data = "<html>\r\n\r\n<head>\r\n <link rel=\"stylesheet\" href=\"css\/etherwallet-master.min.css\" \/>\r\n <script type=\"text\/javascript\" src=\"js\/jquery-1.12.3.min.js\"><\/script>\r\n <script type=\"text\/javascript\" src=\"js\/etherwallet-static.min.js\"><\/script>\r\n <script type=\"text\/javascript\">\r\n function getBlockie(address) {\r\n return blockies.create({\r\n seed: address.toLowerCase(),\r\n size: 8,\r\n scale: 16\r\n }).toDataURL();\r\n    }\r\n    function generateWallets() {\r\n var json = JSON.parse($(\"#printwalletjson\").html());\r\n for (var i = 0; i < json.length; i++) {\r\n var walletTemplate = $(\'<div\/>\').append($(\"#print-container\").clone());\r\n new QRCode($(walletTemplate).find(\"#paperwalletaddqr\")[0], {\r\n text: json[i][\'address\'],\r\n colorDark: \"#000000\",\r\n colorLight: \"#ffffff\",\r\n correctLevel: QRCode.CorrectLevel.H\r\n });\r\n new QRCode($(walletTemplate).find(\"#paperwalletprivqr\")[0], {\r\n text: json[i][\'private\'],\r\n colorDark: \"#000000\",\r\n colorLight: \"#ffffff\",\r\n correctLevel: QRCode.CorrectLevel.H\r\n });\r\n $(walletTemplate).find(\"#paperwalletadd\").html(json[i][\'address\']);\r\n $(walletTemplate).find(\"#paperwalletpriv\").html(json[i][\'private\']);\r\n $(walletTemplate).find(\"#identicon\").css(\'background-image\',\'url(\' + getBlockie(json[i][\'address\']) +\')\');\r\n walletTemplate = $(walletTemplate).find(\"#print-container\").show();\r\n $(\"body\").append(walletTemplate);\r\n }\r\n setTimeout(function() {\r\n window.print();\r\n }, 2000);\r\n    }\r\n    <\/script>\r\n<\/head>\r\n\r\n<body><span id=\"printwalletjson\" style=\"display: none;\">{{WALLETJSON}}<\/span>\r\n    <div class=\"print-container\" style=\"display: none; margin-bottom: 50px;\" id=\"print-container\"><img src=\"images\/logo-ethereum-1.png\" class=\"ether-logo-1\" height=\"100%\" width=\"auto\" \/> <div id=\"identicon\" class=\"addressIdenticon med float\"><\/div>\r\n <img src=\"images\/print-sidebar.png\" height=\"100%\" width=\"auto\" class=\"print-title\" \/>\r\n <div class=\"print-qr-code-1\">\r\n <div id=\"paperwalletaddqr\"><\/div>\r\n <p class=\"print-text\" style=\"padding-top: 25px;\">YOUR ADDRESS<\/p>\r\n <\/div>\r\n <div class=\"print-notes\"><img src=\"images\/notes-bg.png\" width=\"90%;\" height=\"auto\" class=\"pull-left\" \/>\r\n <p class=\"print-text\">AMOUNT \/ NOTES<\/p>\r\n <\/div>\r\n <div class=\"print-qr-code-2\">\r\n <div id=\"paperwalletprivqr\"><\/div>\r\n <p class=\"print-text\" style=\"padding-top: 30px;\">YOUR PRIVATE KEY<\/p>\r\n <\/div>\r\n <div class=\"print-address-container\">\r\n <p><strong>Your Address:<\/strong>\r\n <br \/><span id=\"paperwalletadd\"><\/span><\/p>\r\n <p><strong>Your Private Key:<\/strong>\r\n <br \/><span id=\"paperwalletpriv\"><\/span><\/p>\r\n <\/div>\r\n    <\/div>\r\n<\/body>\r\n\r\n<\/html>\r\n";
    data = data.replace("{{WALLETJSON}}", strJson);
    win.document.write(data);
    win.document.write("<script>generateWallets();</script>");
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
    return '<p class="text-center text-success"><strong> ' + str + '</strong></p>'
};
globalFuncs.getDangerText = function(str) {
    return '<p class="text-center text-danger"><strong> ' + str + '</strong></p>'
};

// These are translated in the translation files
globalFuncs.errorMsgs = [
    'Please enter a valid amount.', // 0
    'Your password must be at least 9 characters. Please ensure it is a strong password. ', // 1
    'Sorry! We don\'t recognize this type of wallet file. ', // 2
    'This is not a valid wallet file. ', // 3
    'This unit doesn\'t exists, please use the one of the following units ', // 4
    'Please enter a valid address. ', // 5
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
    'Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} wei and got: {} wei. If sending tokens, you must have 0.01 ETH in your account to cover the cost of gas. ', // 17
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
    'You need this `Keystore File + Password` or the `Private Key` (next page) to access this wallet in the future. ', // 28
    'Please enter a valid user and password. ', // 29
    'Please enter a valid name (7+ characters, limited punctuation) ', // 30
    'Please enter a valid secret phrase. ', // 31
    'Could not connect to the node. Try refreshing, using different node in upper right corner, and checking firewall settings. If custom node, check your configs.', // 32
    'The wallet you have unlocked does not match the owner\'s address. ', // 33
    'The name you are attempting to reveal does not match the name you have entered. ', // 34
    'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35
    'Enter valid TX hash', // 36
    'Enter valid hex string (0-9, a-f)' // 37
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
    'Invalid sender': 'GETH_InvalidSender',
    'Nonce too low': 'GETH_Nonce',
    'Gas price too low for acceptance': 'GETH_Cheap',
    'Insufficient balance': 'GETH_Balance',
    'Account does not exist or account balance too low': 'GETH_NonExistentAccount',
    'Insufficient funds for gas * price + value': 'GETH_InsufficientFunds',
    'Intrinsic gas too low': 'GETH_IntrinsicGas',
    'Exceeds block gas limit': 'GETH_GasLimit',
    'Negative value': 'GETH_NegativeValue'
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
    "Transaction with the same hash was already imported\\.": "PARITY_AlreadyImported",
    "Transaction nonce is too low\\. Try incrementing the nonce\\.": "PARITY_Old",
    "Transaction fee is too low\\. There is another transaction with same nonce in the queue\\. Try increasing the fee or incrementing the nonce\\.": "PARITY_TooCheapToReplace",
    "There are too many transactions in the queue\\. Your transaction was dropped due to limit\\. Try increasing the fee\\.": "PARITY_LimitReached",
    "Transaction fee is too low\\. It does not satisfy your node's minimal fee \\(minimal: (\\d+), got: (\\d+)\\)\\. Try increasing the fee\\.": "PARITY_InsufficientGasPrice",
    "Insufficient funds\\. The account you tried to send transaction from does not have enough funds\\. Required (\\d+) and got: (\\d+)\\.": "ERROR_17",
    "Transaction cost exceeds current gas limit\\. Limit: (\\d+), got: (\\d+)\\. Try decreasing supplied gas\\.": "PARITY_GasLimitExceeded",
    "Supplied gas is beyond limit\\.": "PARITY_InvalidGasLimit"
};
globalFuncs.parityErrorMsgs = {};
globalFuncs.getParityMsg = function(str) {
    for (var reg in this.parityErrors) {
        if (this.parityErrors.hasOwnProperty(reg)) {
            let args = str.match("^" + reg + "$");
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
    return "parity";
};
globalFuncs.getEthNodeMsg = function(str) {
    var ethNode = this.getEthNodeName();
    if (ethNode == "geth") return this.getGethMsg(str);
    else
        return this.getParityMsg(str);
};
globalFuncs.scrypt = {
    n: 1024
};
globalFuncs.postDelay = 300;
globalFuncs.kdf = "scrypt";
globalFuncs.defaultTxGasLimit = 21000;
globalFuncs.defaultTokenGasLimit = 200000;
globalFuncs.donateAddress = "0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8";
globalFuncs.isNumeric = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
globalFuncs.urlGet = function(name) {
    name = name.toLowerCase();
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search.toLowerCase())) return this.stripTags(decodeURIComponent(name[1]));
};
globalFuncs.stripTags = function(str) {
    var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    while (SCRIPT_REGEX.test(str)) {
        str = str.replace(SCRIPT_REGEX, "");
    }
    return str;
};
globalFuncs.checkAndRedirectHTTPS = function() {
    var host = "myetherwallet.com";
    var hostw = "https://www.myetherwallet.com";
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
globalFuncs.saveTokenToLocal = function(localToken, callback) {
    try {
        if (!ethFuncs.validateEtherAddress(localToken.contractAdd)) throw globalFuncs.errorMsgs[5];
        else if (!globalFuncs.isNumeric(localToken.decimals) || parseFloat(localToken.decimals) < 0) throw globalFuncs.errorMsgs[7];
        else if (!globalFuncs.isAlphaNumeric(localToken.symbol) || localToken.symbol == "") throw globalFuncs.errorMsgs[19];
        var storedTokens = globalFuncs.localStorage.getItem("localTokens", null) != null ? JSON.parse(globalFuncs.localStorage.getItem("localTokens")) : [];
        storedTokens.push({
            contractAddress: localToken.contractAdd,
            symbol: localToken.symbol,
            decimal: parseInt(localToken.decimals),
            type: "custom"
        });
        globalFuncs.localStorage.setItem("localTokens", JSON.stringify(storedTokens));
        callback({
            error: false
        });
    } catch (e) {
        callback({
            error: false,
            msg: e
        });
    }
};
globalFuncs.removeTokenFromLocal = function(symbol, tokenObj) {
    var storedTokens = globalFuncs.localStorage.getItem("localTokens", null) != null ? JSON.parse(globalFuncs.localStorage.getItem("localTokens", null)) : [];
    // remove from localstorage so it doesn't show up on refresh
    for (var i = 0; i < storedTokens.length; i++)
        if (storedTokens[i].symbol === symbol) {
            storedTokens.splice(i, 1);
            break;
        }
    globalFuncs.localStorage.setItem("localTokens", JSON.stringify(storedTokens));
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
            return typeof localStorage != "undefined";
        },
        setItem: function(key, value) {
            if (this.isAvailable()) {
                localStorage.setItem(key, value);
            } else {

            }
        },
        getItem: function(key, dValue = "") {
            if (this.isAvailable()) {
                return localStorage.getItem(key);
            } else {
                return dValue;
            }
        }
    }
    // globalFuncs.getUrlParameter = function getUrlParameter(url) {
    //   // get query string from url (optional) or window
    //   var queryString = url ? url.split('=')[1] : window.location.search.slice(1);
    //   return queryString;
    // }
    // globalFuncs.setUrlParameter = function setUrlParameter(value) {
    //   //In case url contains already a parameter remove parameter
    //   if(window.location.href.indexOf('=') != -1) {
    //       location.href = location.href.substr(0,window.location.href.indexOf('='));
    //   }
    //   location.href = location.href + "=" + value
    // }
module.exports = globalFuncs;
