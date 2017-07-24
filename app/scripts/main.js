'use strict';
var IS_CX = false;
if (typeof chrome != 'undefined') IS_CX = chrome.windows === undefined ? false : true;
var angular                  = require('angular');
var angularTranslate         = require('angular-translate');
var angularTranslateErrorLog = require('angular-translate-handler-log');
var angularSanitize          = require('angular-sanitize');
var angularAnimate           = require('angular-animate');
var bip39                    = require('bip39');
var HDKey                    = require('hdkey');
window.hd                    = { bip39: bip39, HDKey: HDKey };
var BigNumber                = require('bignumber.js');
window.BigNumber             = BigNumber;
var marked                   = require('./staticJS/customMarked');
window.marked                = marked;
var ethUtil                  = require('ethereumjs-util');
ethUtil.crypto               = require('crypto');
ethUtil.Tx                   = require('ethereumjs-tx');
ethUtil.scrypt               = require('scryptsy');
ethUtil.uuid                 = require('uuid');
ethUtil.solidityCoder        = require('./solidity/coder');
ethUtil.solidityUtils        = require('./solidity/utils');
ethUtil.WAValidator          = require('wallet-address-validator');
window.ethUtil               = ethUtil;
var format                   = require('string-format');
window.format                = format;
var browser                  = require('detect-browser');
window.browser               = browser;
var Wallet                   = require('./myetherwallet');
window.Wallet                = Wallet;
var Token                    = require('./tokenlib');
window.Token                 = Token;
var globalFuncs              = require('./globalFuncs');
window.globalFuncs           = globalFuncs;
var uiFuncs                  = require('./uiFuncs');
window.uiFuncs               = uiFuncs;
var etherUnits               = require('./etherUnits');
window.etherUnits            = etherUnits;
var ajaxReq                  = require('./ajaxReq');
window.ajaxReq               = ajaxReq;
var nodes                    = require('./nodes');
window.nodes                 = nodes;
var ethFuncs                 = require('./ethFuncs');
window.ethFuncs              = ethFuncs;
var Validator                = require('./validator');
window.Validator             = Validator;
var bity                     = require('./bity');
window.bity                  = bity;
var ens                      = require('./ens');
window.ens                   = ens;
var mewtip                   = require('./mew-tips.js');
window.mewtip                = mewtip;
var translate                = require('./translations/translate.js');
if (IS_CX) {
  var cxFuncs                = require('./cxFuncs');
  window.cxFuncs             = cxFuncs;
} else {
    var u2f                  = require('./staticJS/u2f-api');
    var ledger3              = require('./staticJS/ledger3');
    var ledgerEth            = require('./staticJS/ledger-eth');
    var trezorConnect        = require('./staticJS/trezorConnect');
    window.u2f               = u2f;
    window.Ledger3           = ledger3;
    window.ledgerEth         = ledgerEth;
    window.TrezorConnect     = trezorConnect.TrezorConnect;
}
var CustomGasMessages        = require('./customGas.js')
window.CustomGasMessages     = CustomGasMessages;

var bulkGenCtrl              = require('./controllers/bulkGenCtrl');
var contractsCtrl            = require('./controllers/contractsCtrl');
var walletDecryptCtrl        = require('./controllers/walletDecryptCtrl');
var walletDecryptOfflineCtrl = require('./controllers/walletDecryptOfflineCtrl');
var ensCtrl                  = require('./controllers/ensCtrl');
var footerCtrl               = require('./controllers/footerCtrl');
var helpersCtrl              = require('./controllers/helpersCtrl');
var signMsgCtrl              = require('./controllers/signMsgCtrl');
var swapCtrl                 = require('./controllers/swapCtrl');
var headerCtrl               = require('./controllers/headerCtrl');
var txBroadcastCtrl          = require('./controllers/txBroadcastCtrl');
var txSendCtrl               = require('./controllers/txSendCtrl');
var txSignCtrl               = require('./controllers/txSignCtrl');
var txViewCtrl               = require('./controllers/txViewCtrl');
var walletBalanceCtrl        = require('./controllers/walletBalanceCtrl');
var walletGenerateCtrl       = require('./controllers/walletGenerateCtrl');
var walletViewCtrl           = require('./controllers/walletViewCtrl');
var genericCtrl              = require('./controllers/genericCtrl');

var globalService            = require('./services/globalService');
var walletService            = require('./services/walletService');

var blockiesDrtv             = require('./directives/blockiesDrtv');
var addressFieldDrtv         = require('./directives/addressFieldDrtv');
var QRCodeDrtv               = require('./directives/QRCodeDrtv');
var walletDecryptDrtv        = require('./directives/walletDecryptDrtv');
var walletDecryptOfflineDrtv = require('./directives/walletDecryptOfflineDrtv');
var walletDecryptCxDrtv      = require('./directives/walletDecryptCxDrtv');
var fileReaderDrtv           = require('./directives/fileReaderDrtv');
var balanceDrtv              = require('./directives/balanceDrtv');

if (IS_CX) {
  var walletDecryptCxCtrl    = require('./controllers/walletDecryptCxCtrl');
  var mainPopCtrl            = require('./controllers/mainPopCtrl');
  var quickSendCtrl          = require('./controllers/quickSendCtrl');
  var walletAddCtrl          = require('./controllers/walletAddCtrl');
  var walletViewCXCtrl       = require('./controllers/walletViewCXCtrl');
}
var app = angular.module('mewApp', ['pascalprecht.translate', 'ngSanitize','ngAnimate']);
app.config(['$compileProvider', function($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(|blob|https|mailto):/);
}]);
app.config(['$translateProvider', function($translateProvider) {
  $translateProvider.useMissingTranslationHandlerLog();
  new translate($translateProvider);
}]);
app.config(['$animateProvider', function($animateProvider) {
    $animateProvider.classNameFilter(/^no-animate$/);
}]);

app.factory('globalService', ['$http', '$httpParamSerializerJQLike', globalService]);
app.factory('walletService', walletService);

app.directive('addressField', ['$compile', addressFieldDrtv]);
app.directive('blockieAddress', blockiesDrtv);
app.directive('onReadFile', fileReaderDrtv);
app.directive('qrCode', QRCodeDrtv);
app.directive('walletBalanceDrtv', balanceDrtv);
app.directive('walletDecryptDrtv', walletDecryptDrtv);
app.directive('walletDecryptOfflineDrtv', walletDecryptOfflineDrtv);
app.directive('walletDecryptCxDrtv', walletDecryptCxDrtv);

app.controller('genericCtrl', ['$scope', 'globalService', '$sce', genericCtrl]);
app.controller('bulkGenCtrl', ['$scope', bulkGenCtrl]);
app.controller('contractsCtrl', ['$scope', '$sce', '$interval','walletService', contractsCtrl]);
app.controller('walletDecryptCtrl', ['$scope', '$sce', 'walletService', walletDecryptCtrl]);
app.controller('walletDecryptOfflineCtrl', ['$scope', '$sce', 'walletService', walletDecryptOfflineCtrl]);
app.controller('ensCtrl', ['$scope', '$sce', 'walletService', ensCtrl]);
app.controller('footerCtrl', ['$scope', 'globalService', footerCtrl]);
app.controller('helpersCtrl', ['$scope', helpersCtrl]);
app.controller('signMsgCtrl', ['$scope', '$sce', 'walletService', signMsgCtrl]);
app.controller('swapCtrl', ['$scope', '$sce', 'walletService', swapCtrl]);
app.controller('headerCtrl', ['$scope', '$interval', 'globalService', '$translate', '$sce', headerCtrl]);
app.controller('txBroadcastCtrl', ['$scope', 'walletService', txBroadcastCtrl]);
app.controller('txSendCtrl', ['$scope', '$sce', '$interval', 'walletService', txSendCtrl]);
app.controller('txSignCtrl', ['$scope', txSignCtrl]);
app.controller('txViewCtrl', ['$scope', txViewCtrl]);
app.controller('walletBalanceCtrl', ['$scope', '$sce', walletBalanceCtrl]);
app.controller('walletGenerateCtrl', ['$scope', walletGenerateCtrl]);
app.controller('walletViewCtrl', ['$scope', '$interval','walletService', walletViewCtrl]);

if (IS_CX) {
  app.controller('walletDecryptCxCtrl', ['$scope', '$sce', 'walletService', walletDecryptCxCtrl]);
  app.controller('mainPopCtrl', ['$scope', '$sce', mainPopCtrl]);
  app.controller('quickSendCtrl', ['$scope', '$sce', quickSendCtrl]);
  app.controller('walletAddCtrl', ['$scope', '$sce', walletAddCtrl]);
  app.controller('walletViewCXCtrl', ['$scope', '$sce','walletService', walletViewCXCtrl]);
}
