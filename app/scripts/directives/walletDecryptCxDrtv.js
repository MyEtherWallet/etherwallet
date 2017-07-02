'use strict';
var walletDecryptCxDrtv = function() {
	return {
        restrict : "E",
        template : '<div class="row" ng-controller=\'walletDecryptCxCtrl\'>\n \
      <div class="col-md-4 col-sm-6">\n \
        <h4 translate="WALL_Select"> Select a Wallet: </h4>\n \
        <div class="radio" ng-repeat="twallet in allWallets  track by $index">\n \
          <label><input type="radio" name="selectedWallet" ng-model="$parent.selectedWallet" value="{{twallet.addr}}"> {{twallet.nick}} <small>({{twallet.balance}} Ether)</small> </label>\n \
        </div>\n \
      </div>\n \
      <div class="col-md-4 col-sm-6" ng-show="selectedWallet!=\'\'">\n \
        <h4 translate="DECRYPT_Label_3"> Your wallet is encrypted. Please enter the password: </h4>\n \
        <input class="form-control" type="password" placeholder="{{ \'PW_\' | translate }}" ng-model="password" ng-keyup="$event.keyCode == 13 && decryptWallet()" >\n \
      </div>\n \
      <div class="col-md-4 col-sm-6" id="walletuploadbutton" ng-show="password.length>0">\n \
        <h4 id="uploadbtntxt-wallet" translate="WALL_Unlock"> Unlock Your Wallet:</h4>\n \
        <div class="form-group"><a ng-click="decryptWallet()" class="btn btn-primary btn-block" translate="WALL_Unlock_Short">UNLOCK</a></div>\n \
      </div>\n \
    </div>'
  };
};
module.exports = walletDecryptCxDrtv;
