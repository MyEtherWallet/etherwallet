'use strict';
var IS_CX = false;
if (typeof chrome != 'undefined') IS_CX = chrome.windows === undefined ? false : true;
var angular = require('angular');
var angularTranslate = require('angular-translate');
var angularTranslateErrorLog = require('angular-translate-handler-log');
var angularSanitize = require('angular-sanitize');
var bip39 = require('bip39');
var HDKey = require('hdkey');
window.hd = {
    bip39 : bip39,
    HDKey : HDKey
};
var BigNumber = require('bignumber.js');
window.BigNumber = BigNumber;
var marked = require('./customMarked');
window.marked = marked;
var ethUtil = require('ethereumjs-util');
ethUtil.crypto = require('crypto');
ethUtil.Tx = require('ethereumjs-tx');
ethUtil.scrypt = require('scryptsy');
ethUtil.uuid = require('uuid');
window.ethUtil = ethUtil;
var format = require('string-format');
window.format = format;
var Wallet = require('./myetherwallet');
window.Wallet = Wallet;
var Token = require('./tokens');
window.Token = Token;
var globalFuncs = require('./globalFuncs');
window.globalFuncs = globalFuncs;
var uiFuncs = require('./uiFuncs');
window.uiFuncs = uiFuncs;
var etherUnits = require('./etherUnits');
window.etherUnits = etherUnits;
var ajaxReq = require('./ajaxReq');
window.ajaxReq = ajaxReq;
var ethFuncs = require('./ethFuncs');
window.ethFuncs = ethFuncs;
var Validator = require('./validator');
window.Validator = Validator;
var translate = require('./translations/translate.js');
if (IS_CX) {
	var cxFuncs = require('./cxFuncs');
	window.cxFuncs = cxFuncs;
}
else {
	var u2f = require('./staticJS/u2f-api');
	var ledger3 = require('./ledger3');
	var ledgerEth = require('./ledger-eth');	
	window.u2f = u2f;
	window.Ledger3 = ledger3;
	window.ledgerEth = ledgerEth;	
}
var tabsCtrl = require('./controllers/tabsCtrl');
var viewCtrl = require('./controllers/viewCtrl');
var walletGenCtrl = require('./controllers/walletGenCtrl');
var bulkGenCtrl = require('./controllers/bulkGenCtrl');
var decryptWalletCtrl = require('./controllers/decryptWalletCtrl');
var viewWalletCtrl = require('./controllers/viewWalletCtrl');
var sendTxCtrl = require('./controllers/sendTxCtrl');
var deployContractCtrl = require('./controllers/deployContractCtrl');
var digixCtrl = require('./controllers/digixCtrl');
var theDaoCtrl = require('./controllers/theDaoCtrl');
var tokenCtrl = require('./controllers/tokenCtrl');
var footerCtrl = require('./controllers/footerCtrl');
var sendOfflineTxCtrl = require('./controllers/sendOfflineTxCtrl');
var globalService = require('./services/globalService');
var walletService = require('./services/walletService');
var blockiesDrtv = require('./directives/blockiesDrtv');
var QRCodeDrtv = require('./directives/QRCodeDrtv');
var walletDecryptDrtv = require('./directives/walletDecryptDrtv');
var cxWalletDecryptDrtv = require('./directives/cxWalletDecryptDrtv');
var fileReaderDrtv = require('./directives/fileReaderDrtv');
if (IS_CX) {
	var addWalletCtrl = require('./controllers/CX/addWalletCtrl');
	var cxDecryptWalletCtrl = require('./controllers/CX/cxDecryptWalletCtrl');
	var myWalletsCtrl = require('./controllers/CX/myWalletsCtrl');
	var mainPopCtrl = require('./controllers/CX/mainPopCtrl');
	var quickSendCtrl = require('./controllers/CX/quickSendCtrl');
}
var app = angular.module('mewApp', ['pascalprecht.translate', 'ngSanitize']);
app.config(['$compileProvider', function($compileProvider) {
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|https|):/);
}]);
app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
	new translate($translateProvider);
}]);
app.factory('globalService', ['$http', '$httpParamSerializerJQLike', globalService]);
app.factory('walletService', walletService);
app.directive('blockieAddress', blockiesDrtv);
app.directive('qrCode', QRCodeDrtv);
app.directive('onReadFile', fileReaderDrtv);
app.directive('walletDecryptDrtv', walletDecryptDrtv);
app.directive('cxWalletDecryptDrtv', cxWalletDecryptDrtv);
app.controller('tabsCtrl', ['$scope', 'globalService', '$translate',tabsCtrl]);
app.controller('viewCtrl', ['$scope', 'globalService', viewCtrl]);
app.controller('walletGenCtrl', ['$scope', walletGenCtrl]);
app.controller('bulkGenCtrl', ['$scope', bulkGenCtrl]);
app.controller('decryptWalletCtrl', ['$scope', '$sce', 'walletService', decryptWalletCtrl]);
app.controller('viewWalletCtrl', ['$scope', 'walletService', viewWalletCtrl]);
app.controller('sendTxCtrl', ['$scope', '$sce', 'walletService', sendTxCtrl]);
app.controller('deployContractCtrl', ['$scope', '$sce', 'walletService', deployContractCtrl]);
app.controller('digixCtrl', ['$scope', '$sce', 'walletService', digixCtrl]);
app.controller('theDaoCtrl', ['$scope', '$sce', 'walletService', theDaoCtrl]);
app.controller('tokenCtrl', ['$scope', '$sce', 'walletService', tokenCtrl]);
app.controller('footerCtrl', ['$scope', footerCtrl]);
app.controller('sendOfflineTxCtrl', ['$scope', '$sce', 'walletService', sendOfflineTxCtrl]);
if (IS_CX) {
	app.controller('addWalletCtrl', ['$scope', '$sce', addWalletCtrl]);
	app.controller('myWalletsCtrl', ['$scope', '$sce', myWalletsCtrl]);
	app.controller('mainPopCtrl', ['$scope', '$sce', mainPopCtrl]);
	app.controller('quickSendCtrl', ['$scope', '$sce', quickSendCtrl]);
	app.controller('cxDecryptWalletCtrl', ['$scope', '$sce', 'walletService', cxDecryptWalletCtrl]);
}
