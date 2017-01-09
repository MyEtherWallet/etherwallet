'use strict';
var globalFuncs = function() {}
globalFuncs.lightMode = false;
globalFuncs.getBlockie = function(address) {
	return blockies.create({
		seed: address.toLowerCase(),
		size: 8,
		scale: 16
	}).toDataURL();
}
globalFuncs.printPaperWallets = function(strJson) {
	var win = window.open("about:blank", "_blank");
	var data = "<html><head><link rel=\"stylesheet\" href=\"css\/etherwallet-master.min.css\"\/><script type=\"text\/javascript\" src=\"js\/jquery-1.12.3.min.js\"><\/script><script type=\"text\/javascript\" src=\"js\/etherwallet-static.min.js\"><\/script><script type=\"text\/javascript\">function generateWallets(){ var json = JSON.parse($(\"#printwalletjson\").html()); for(var i=0;i<json.length;i++){ var walletTemplate = $(\'<div\/>\').append($(\"#print-container\").clone()); new QRCode($(walletTemplate).find(\"#paperwalletaddqr\")[0], {\t\t  text: json[i][\'address\'],\t\t  colorDark: \"#000000\",\t\t  colorLight: \"#ffffff\",\t\tcorrectLevel: QRCode.CorrectLevel.H\t   });       new QRCode($(walletTemplate).find(\"#paperwalletprivqr\")[0], {\t\t  text: json[i][\'private\'],\t\t  colorDark: \"#000000\",\t\t  colorLight: \"#ffffff\",\t\tcorrectLevel: QRCode.CorrectLevel.H\t }); $(walletTemplate).find(\"#paperwalletadd\").html(json[i][\'address\']);$(walletTemplate).find(\"#paperwalletpriv\").html(json[i][\'private\']); walletTemplate = $(walletTemplate).find(\"#print-container\").show();$(\"body\").append(walletTemplate); } setTimeout(function(){window.print();},2000);}<\/script><\/head><body><span id=\"printwalletjson\" style=\"display: none;\">{{WALLETJSON}}<\/span><div class=\"print-container\" style=\"display: none; margin-bottom: 50px;\" id=\"print-container\"><img src=\"images\/logo-1.png\" class=\"ether-logo-1\" height=\"100%\" width=\"auto\"\/><img src=\"images\/logo-2.png\" class=\"ether-logo-2\"\/> <img src=\"images\/ether-title.png\" height=\"100%\" width=\"auto\" class=\"print-title\"\/><div class=\"print-qr-code-1\"> <div id=\"paperwalletaddqr\"><\/div> <p class=\"print-text\" style=\"padding-top: 25px;\">YOUR ADDRESS<\/p><\/div><div class=\"print-notes\"><img src=\"images\/notes-bg.png\" width=\"90%;\" height=\"auto\" class=\"pull-left\" \/><p class=\"print-text\">AMOUNT \/ NOTES<\/p><\/div><div class=\"print-qr-code-2\"> <div id=\"paperwalletprivqr\"><\/div> <p class=\"print-text\" style=\"padding-top: 30px;\">YOUR PRIVATE KEY<\/p><\/div><div class=\"print-address-container\"><p><strong>Your Address:<\/strong><br \/><span id=\"paperwalletadd\"><\/span><\/p><p><strong>Your Private Key:<\/strong><br \/><span id=\"paperwalletpriv\"><\/span><\/p><\/div><\/div><\/body><\/html>";
	data = data.replace("{{WALLETJSON}}", strJson);
	win.document.write(data);
	win.document.write("<script>generateWallets();</script>");
}
globalFuncs.getBlob = function(mime, str) {
	var str = (typeof str === 'object') ? JSON.stringify(str) : str;
	if (str == null) return '';
	var blob = new Blob([str], {
		type: mime
	});
	return window.URL.createObjectURL(blob);
}
globalFuncs.getSuccessText = function(str) {
	return '<p class="text-center text-success"><strong> ' + str + '</strong></p>'
}
globalFuncs.getDangerText = function(str) {
	return '<p class="text-center text-danger"><strong> ' + str + '</strong></p>'
}
// These are translated in the translation files
globalFuncs.errorMsgs = ["Please enter valid amount.", "Your password must be at least 9 characters. Please ensure it is a strong password. ", "Sorry! We don\'t recognize this type of wallet file. ", "This is not a valid wallet file. ", "This unit doesn\'t exists, please use the one of the following units ", "Invalid address. ", "Invalid password. ", "Invalid amount. ", "Invalid gas limit. ", "Invalid data value. ", "Invalid gas amount. ", // 10
"Invalid nonce. ", "Invalid signed transaction. ", "A wallet with this nickname already exists. ", "Wallet not found. ", "Whoops. It doesnt look like a proposal with this ID exists yet or there is an error reading this proposal. ", // 15
"A wallet with this address already exists in storage. Please check your wallets page. ", "You need to have at least 0.01 ETH in your account to cover the cost of gas. Please add some ETH and try again. ", "All gas would be used on this transaction. This means you have already voted on this proposal or the debate period has ended.", "Invalid symbol", "Not a valid ERC-20 token", "Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.",
"Please enter valid node name", "Enter valid url, if you are on https your url must be https", "Please enter valid port","Please enter valid chain ID", "Please enter valid ABI"];
// These are translated in the translation files
globalFuncs.successMsgs = ["Valid address", "Wallet successfully decrypted", "Transaction submitted. TX ID: ", "Your wallet was successfully added: ", "File Selected: "];
// These are translated in the translation files
globalFuncs.gethErrors = {
	"Invalid sender": "GETH_InvalidSender",
	"Nonce too low": "GETH_Nonce",
	"Gas price too low for acceptance": "GETH_Cheap",
	"Insufficient balance": "GETH_Balance",
	"Account does not exist or account balance too low": "GETH_NonExistentAccount",
	"Insufficient funds for gas * price + value": "GETH_InsufficientFunds",
	"Intrinsic gas too low": "GETH_IntrinsicGas",
	"Exceeds block gas limit": "GETH_GasLimit",
	"Negative value": "GETH_NegativeValue"
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
}
// These are translated in the translation files
globalFuncs.parityErrors = {
	"Transaction with the same hash was already imported\\.": "PARITY_AlreadyImported",
	"Transaction nonce is too low\\. Try incrementing the nonce\\.": "PARITY_Old",
	"Transaction fee is too low\\. There is another transaction with same nonce in the queue\\. Try increasing the fee or incrementing the nonce\\.": "PARITY_TooCheapToReplace",
	"There are too many transactions in the queue\\. Your transaction was dropped due to limit\\. Try increasing the fee\\.": "PARITY_LimitReached",
	"Transaction fee is too low\\. It does not satisfy your node's minimal fee \\(minimal: (\\d+), got: (\\d+)\\)\\. Try increasing the fee\\.": "PARITY_InsufficientGasPrice",
	"Insufficient funds\\. Account you try to send transaction from does not have enough funds\\. Required (\\d+) and got: (\\d+)\\.": "PARITY_InsufficientBalance",
	"Transaction cost exceeds current gas limit\\. Limit: (\\d+), got: (\\d+)\\. Try decreasing supplied gas\\.": "PARITY_GasLimitExceeded",
	"Supplied gas is beyond limit\\.": "PARITY_InvalidGasLimit"
};
globalFuncs.parityErrorMsgs = {};
globalFuncs.getParityMsg = function(str) {
	for (var reg in this.parityErrors) {
		var args = str.match("^" + reg + "$");
		if (args) {
			var key = this.parityErrors[reg];
			if (key in this.parityErrorMsgs) {
				args[0] = this.parityErrorMsgs[key];
				return format.apply(this, args);
			}
		}
	}
	return str;
}
globalFuncs.getEthNodeName = function() {
	//	return "geth";
	return "parity";
}
globalFuncs.getEthNodeMsg = function(str) {
	var ethNode = this.getEthNodeName();
	if (ethNode == "geth") return this.getGethMsg(str);
	else
	return this.getParityMsg(str);
}
globalFuncs.scrypt = {
	n: 1024
};
globalFuncs.postDelay = 300;
globalFuncs.kdf = "scrypt";
globalFuncs.defaultTxGasLimit = 21000;
globalFuncs.digixClaimTxGasLimit = 150000;
globalFuncs.donateAddress = "0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8";
globalFuncs.isNumeric = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
globalFuncs.urlGet = function(name) {
	name = name.toLowerCase();
	if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search.toLowerCase())) return this.stripTags(decodeURIComponent(name[1]));
}
globalFuncs.stripTags = function(str) {
	var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
	while (SCRIPT_REGEX.test(str)) {
		str = str.replace(SCRIPT_REGEX, "");
	}
	return str;
}
globalFuncs.checkAndRedirectHTTPS = function() {
	var host = "myetherwallet.com";
	var githost = "kvhnuke.github.io";
	var githostw = "www.kvhnuke.github.io";
	var hostw = "www.myetherwallet.com";
	if ((host == window.location.host || githost == window.location.host || hostw == window.location.host || githostw == window.location.host) && (window.location.protocol != "https:")) window.location.protocol = "https";
}
globalFuncs.isStrongPass = function(password) {
	return password.length > 8;
}
globalFuncs.hexToAscii = function(hex) {
	return hex.match(/.{1,2}/g).map(function(v) {
		return String.fromCharCode(parseInt(v, 16));
	}).join('');
}
globalFuncs.isAlphaNumeric = function(value) {
	return !/[^a-zA-Z0-9]/.test(value);
}
globalFuncs.getRandomBytes = function (num) {
	return ethUtil.crypto.randomBytes(num);
}
globalFuncs.saveTokenToLocal = function(localToken, callback) {
	try {
		if (!ethFuncs.validateEtherAddress(localToken.contractAdd)) throw globalFuncs.errorMsgs[5];
		else if (!globalFuncs.isNumeric(localToken.decimals) || parseFloat(localToken.decimals) < 0) throw globalFuncs.errorMsgs[7];
		else if (!globalFuncs.isAlphaNumeric(localToken.symbol) || localToken.symbol == "") throw globalFuncs.errorMsgs[19];
		var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
		storedTokens.push({
			contractAddress: localToken.contractAdd,
			symbol: localToken.symbol,
			decimal: parseInt(localToken.decimals),
			type: "custom"
		});
		localStorage.setItem("localTokens", JSON.stringify(storedTokens));
		callback({
			error: false
		});
	} catch (e) {
		callback({
			error: false,
			msg: e
		});
	}
}
globalFuncs.removeTokenFromLocal = function(symbol, tokenObj) {
	var storedTokens = localStorage.getItem("localTokens") != null ? JSON.parse(localStorage.getItem("localTokens")) : [];
	// remove from localstorage so it doesn't show up on refresh
	for (var i = 0; i < storedTokens.length; i++)
	if (storedTokens[i].symbol === symbol) {
		storedTokens.splice(i, 1);
		break;
	}
	localStorage.setItem("localTokens", JSON.stringify(storedTokens));
	if (!tokenObj) return;
	// remove from tokenObj so it removes from display
	for (var i = 0; i < tokenObj.length; i++)
	if (tokenObj[i].symbol === symbol) {
		tokenObj.splice(i, 1);
		break;
	}
}
module.exports = globalFuncs;