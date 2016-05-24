'use strict';
var cxWalletDecryptDrtv = function() {
	return {
        restrict : "E",
        template : '<div class="row" ng-controller=\'cxDecryptWalletCtrl\'>\n \
      <div class="col-md-4 col-sm-6">\n \
        <h4> Select a Wallet: </h4>\n \
        <div class="radio" ng-repeat="twallet in allWallets  track by $index">\n \
          <label><input type="radio" name="selectedWallet" ng-model="$parent.selectedWallet" value="{{twallet.addr}}"> {{twallet.nick}} <small>({{twallet.balance}} Ether)</small> </label>\n \
        </div>\n \
      </div>\n \
      <div class="col-md-4 col-sm-6" ng-show="selectedWallet!=\'\'">\n \
        <h4> Enter the Password: </h4>\n \
        <input class="form-control" type="password" placeholder="Password" ng-model="password">\n \
      </div>\n \
      <div class="col-md-4 col-sm-6" id="walletuploadbutton" ng-show="password.length>3">\n \
        <h4 id="uploadbtntxt-wallet"> Access Your Wallet:</h4>\n \
        <div class="form-group"><a ng-click="decryptWallet()" class="btn btn-primary btn-block">UNLOCK WALLET</a></div>\n \
        <div ng-bind-html="decryptStatus"></div>\n \
      </div>\n \
    </div>'
  };
};
module.exports = cxWalletDecryptDrtv;
