'use strict';
var balanceDrtv = function() {
	return {
        restrict : "E",
        template : '<section ng-controller=\'walletBalanceCtrl\'><h4 translate=\"sidebar_AccountInfo\">\n \
                        Account Information: <\/h4>\n \
        <div translate=\"sidebar_AccountAddr\">\n \
Account Address: <\/div>\n \
<ul class=\"account-info\">\n \
<div id=\"addressIdenticon\" class=\"med\" title=\"Address Indenticon\" blockie-address=\"{{wallet.getAddressString()}}\" watch-var=\"wallet\"><\/div>\n \
<li class=\"mono wrap\">{{wallet.getChecksumAddressString()}}  <\/li>\n \
   <\/ul>\n \
   <div translate=\"sidebar_AccountBal\">Account Balance: <\/div>\n \
   <ul class=\"account-info\">\n \
<li>\n \
   <span class=\"mono wrap\">{{wallet.balance}}<\/span> {{ajaxReq.type}} <\/li>\n \
   <\/ul>\n \
   <section class=\"token-balances\">\n \
   <div translate=\"sidebar_TokenBal\">\n \
   Token Balances: <\/div>\n \
   <table class=\"account-info\">\n \
   <tr ng-repeat=\"token in wallet.tokenObjs track by $index\" ng-show=\"token.balance!=0 && token.balance!=\'loading\' || token.type!==\'default\' || tokenVisibility==\'shown\'\">\n \
   <td class=\"mono wrap\">\n \
      <img src=\"images\/icon-remove.svg\" class=\"token-remove\" title=\"Remove Token\" ng-click=\"removeTokenFromLocal(token.symbol)\" ng-show=\"token.type!==\'default\'\"\/>\n \
      {{token.getBalance()}}\n \
      <\/td>\n \
   <td>\n \
      {{token.getSymbol()}} <\/td>\n \
      <\/tr>\n \
      <\/table>\n \
      <a class=\"btn btn-default btn-sm\" ng-click=\"tokenVisibility=\'shown\'\" ng-show=\"tokenVisibility==\'hidden\'\"> Show All Tokens <\/a>\n \
      <a class=\"btn btn-default btn-sm\" ng-click=\"tokenVisibility=\'hidden\'\" ng-show=\"tokenVisibility==\'shown\'\">  Hide Tokens <\/a>\n \
      <a class=\"btn btn-default btn-sm\" ng-click=\"customTokenField = !customTokenField\"> <span translate=\"SEND_custom\"> Add Custom Token <\/span> <\/a>\n \
      <div class=\"custom-token-fields\" ng-show=\"customTokenField\">\n \
      <div class=\"form-group\">\n \
      <label translate=\"TOKEN_Addr\"> Address: <\/label>\n \
      <input class=\"form-control input-sm\" type=\"text\" ng-model=\"localToken.contractAdd\" ng-class=\"Validator.isValidAddress(localToken.contractAdd) ? \'is-valid\' : \'is-invalid\'\"\/>\n \
      <\/div>\n \
      <div class=\"form-group\">\n \
      <label translate=\"TOKEN_Symbol\"> Token Symbol: <\/label>\n \
      <input class=\"form-control input-sm\" type=\"text\" ng-model=\"localToken.symbol\" ng-class=\"localToken.symbol!=\'\' ? \'is-valid\' : \'is-invalid\'\"\/>\n \
      <\/div>\n \
      <div class=\"form-group\">\n \
      <label translate=\"TOKEN_Dec\"> Decimals: <\/label>\n \
      <input class=\"form-control input-sm\" type=\"text\" ng-model=\"localToken.decimals\" ng-class=\"Validator.isPositiveNumber(localToken.decimals) ? \'is-valid\' : \'is-invalid\'\"\/>\n \
      <\/div>\n \
      <div class=\"form-group\">\n \
      <div class=\"btn btn-primary btn-sm\" ng-click=\"saveTokenToLocal()\" translate=\"x_Save\">\n \
      Save <\/div>\n \
      <\/div>\n \
      <div ng-bind-html=\"validateLocalToken\">\n \
      <\/div>\n \
      <\/div>\n \
      <\/section>\n \
      <div ng-show=\"ajaxReq.type==\'ETH\'\"><div translate=\"sidebar_Equiv\">\n \
      Equivalent Values: <\/div>\n \
      <ul class=\"account-info\">\n \
        <li><span class=\"mono wrap\">{{wallet.usdBalance}}<\/span> USD <\/li>\n \
        <li><span class=\"mono wrap\">{{wallet.eurBalance}}<\/span> EUR <\/li>\n \
        <li><span class=\"mono wrap\">{{wallet.btcBalance}}<\/span> BTC <\/li>\n \
      <\/ul></section></div>'
  };
};
module.exports = balanceDrtv;
