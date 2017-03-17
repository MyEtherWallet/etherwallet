'use strict';
var balanceDrtv = function() {
	return {
        restrict : "E",
        template : '<aside ng-controller=\'walletBalanceCtrl\'>\n\
                      <h5 translate=\"sidebar_AccountAddr\">Account Address:</h5>\n\
                      <ul class=\"account-info\">\n\
                        <div class=\"addressIdenticon med float\" title=\"Address Indenticon\" blockie-address=\"{{wallet.getAddressString()}}\" watch-var=\"wallet\"></div>\n\
                        <span class=\"mono wrap\">{{wallet.getChecksumAddressString()}}</span>\n\
                      </ul>\n\
                      <hr />\n\
                      <h5 translate=\"sidebar_AccountBal\">Account Balance:</h5>\n\
                      <ul class=\"account-info\">\n\
                        <li><span class=\"mono wrap\">{{wallet.balance}}</span> {{ajaxReq.type}}</li>\n\
                      </ul>\n\
                      <section class=\"token-balances\">\n\
                        <h5 translate=\"sidebar_TokenBal\">Token Balances:</h5>\n\
                        <table class=\"account-info\">\n\
                          <tr ng-repeat=\"token in wallet.tokenObjs track by $index\" ng-show=\"token.balance!=0 \&\& token.balance!=\'loading\' || token.type!==\'default\' || tokenVisibility==\'shown\'\">\n\
                            <td class=\"mono wrap\"><img src=\"images/icon-remove.svg\" class=\"token-remove\" title=\"Remove Token\" ng-click=\"removeTokenFromLocal(token.symbol)\" ng-show=\"token.type!==\'default\'\" />{{token.getBalance()}}</td>\n\
                            <td>{{token.getSymbol()}} </td>\n\
                          </tr>\n\
                        </table>\n\
                        <a class=\"btn btn-default btn-sm\" ng-click=\"tokenVisibility=\'shown\'\" ng-show=\"tokenVisibility==\'hidden\'\">Show All Tokens</a>\n\
                        <a class=\"btn btn-default btn-sm\" ng-click=\"tokenVisibility=\'hidden\'\" ng-show=\"tokenVisibility==\'shown\'\">Hide Tokens</a>\n\
                        <a class=\"btn btn-default btn-sm\" ng-click=\"customTokenField=!customTokenField\"><span translate=\"SEND_custom\"translate=\"SEND_custom\">Add Custom Token<\/span><\/a>\n \
                        <div class=\"custom-token-fields\" ng-show=\"customTokenField\">\n\
                          <label translate=\"TOKEN_Addr\">Address:</label>\n\
                          <input class=\"form-control input-sm\" type=\"text\" ng-model=\"localToken.contractAdd\" ng-class=\"Validator.isValidAddress(localToken.contractAdd) ? \'is-valid\' : \'is-invalid\'\" />\n\
                          <label translate=\"TOKEN_Symbol\">Token Symbol:</label>\n\
                          <input class=\"form-control input-sm\" type=\"text\" ng-model=\"localToken.symbol\" ng-class=\"localToken.symbol!=\'\' ? \'is-valid\' : \'is-invalid\'\" />\n\
                          <label translate=\"TOKEN_Dec\"> Decimals:</label>\n\
                          <input class=\"form-control input-sm\" type=\"text\" ng-model=\"localToken.decimals\" ng-class=\"Validator.isPositiveNumber(localToken.decimals) ? \'is-valid\' : \'is-invalid\'\" />\n\
                          <div class=\"btn btn-primary btn-sm\" ng-click=\"saveTokenToLocal()\" translate=\"x_Save\">Save</div>\n\
                          <div ng-bind-html=\"validateLocalToken\"></div>\n\
                        </div>\n\
                      </section>\n\
                      <hr />\n\
                      <section ng-show=\"ajaxReq.type==\'ETH\'\">\n\
                        <h5 translate=\"sidebar_Equiv\">Equivalent Values:</h5>\n\
                        <ul class=\"account-info\">\n\
                          <li><span class=\"mono wrap\">{{wallet.btcBalance}}</span> BTC</li>\n\
                          <li><span class=\"mono wrap\">{{wallet.repBalance}}</span> REP</li>\n\
                          <li><span class=\"mono wrap\">{{wallet.eurBalance}}</span> EUR</li>\n\
                          <li><span class=\"mono wrap\">{{wallet.chfBalance}}</span> CHF</li>\n\
                          <li><span class=\"mono wrap\">{{wallet.usdBalance}}</span> USD</li>\n\
                        </ul>\n\
                        <a target="_blank" ng-click=\"globalService.currentTab=globalService.tabs.swap.id\" class=\"btn btn-primary btn-sm\">Swap via Bity</a>\n\
                      </section>\n\
                    </aside>'
  };
};
module.exports = balanceDrtv;

//<label class=\"ens-response\" ng-show=\"showens\"> ↳ <span class=\"mono ng-binding\"> {{ensAddress}} </span> </label>\n \
