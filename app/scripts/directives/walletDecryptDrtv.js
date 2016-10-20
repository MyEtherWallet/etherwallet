'use strict';
var walletDecryptDrtv = function() {
	return {
        restrict : "E",
        template : '<section class="row" ng-controller=\'decryptWalletCtrl\'>\n \
     <div class="col-md-4 col-sm-6">\n \
      <h4 translate="decrypt_Title"> Select the format of your private key: </h4>\n \
      <div class="radio">\n \
        <label>\n \
          <input type="radio" ng-model="walletType" value="fileupload"/><span translate="x_Keystore2">Keystore / JSON File</span></label>\n \
      </div>\n \
      <div class="radio">\n \
        <label>\n \
          <input type="radio" ng-model="walletType" value="pasteprivkey"/><span translate="x_PrivKey2">Private Key</span></label>\n \
      </div>\n \
      <div class="radio">\n \
        <label>\n \
          <input type="radio" ng-model="walletType" value="pastemnemonic"/><span translate="x_Mnemonic">Mnemonic Phrase</span></label>\n \
      </div>\n \
      <div class="radio">\n \
        <label>\n \
          <input type="radio" ng-model="walletType" value="ledger"/><span translate="x_Ledger">Ledger Wallet</span></label>\n \
      </div>\n \
    </div>\n \
    <div class="col-md-4 col-sm-6">\n \
      <!-- if selected upload -->\n \
      <div id="selectedUploadKey" ng-if="walletType==\'fileupload\'">\n \
        <h4 translate="ADD_Radio_2_alt">Select your wallet file:</h4>\n \
        <div class="form-group">\n \
          <input style="display:none;" type="file" on-read-file="showContent($fileContent)" id="fselector"/>\n \
          <a class="file-input btn btn-block btn-default btn-file marg-v-sm" ng-click="openFileDialog()" translate="ADD_Radio_2_short">SELECT WALLET FILE... </a>\n \
          <div id="fuploadStatus" ng-bind-html="fileStatus"></div>\n \
        </div>\n \
        <div class="form-group" ng-if="requireFPass">\n \
          <p translate="ADD_Label_3"> Your file is encrypted. Please enter the password: </p>\n \
          <input class="form-control" type="password" placeholder="{{ \'x_Password\' | translate }}" ng-model="$parent.$parent.filePassword" ng-class="Validator.isPasswordLenValid($parent.$parent.filePassword,0) ? \'is-valid\' : \'is-invalid\'" ng-change="onFilePassChange()" />\n \
        </div>\n \
      </div>\n \
      <!-- /if selected upload -->\n \
      <!-- if selected type key-->\n \
      <div id="selectedTypeKey" ng-if="walletType==\'pasteprivkey\'">\n \
        <h4 translate="ADD_Radio_3"> Paste / type your private key: </h4>\n \
        <div class="form-group">\n \
          <textarea rows="4" class="form-control" placeholder="{{ \'x_PrivKey2\' | translate }}" ng-model="$parent.$parent.manualprivkey" ng-class="Validator.isValidPrivKey($parent.$parent.manualprivkey.length) ? \'is-valid\' : \'is-invalid\'" ng-change="onPrivKeyChange()"></textarea>\n \
        </div>\n \
        <div class="form-group" ng-if="requirePPass">\n \
          <p translate="ADD_Label_3"> Your file is encrypted. Please enter the password: </p>\n \
          <input class="form-control" type="password" placeholder="{{ \'x_Password\' | translate }}" ng-model="$parent.$parent.privPassword" ng-class="Validator.isPasswordLenValid($parent.$parent.privPassword,0) ? \'is-valid\' : \'is-invalid\'" ng-change="onPrivKeyPassChange()">\n \
        </div>\n \
      </div>\n \
      <!-- /if selected type key-->\n \
      <!-- if selected type mnemonic-->\n \
      <div id="selectedTypeMnemonic" ng-if="walletType==\'pastemnemonic\'">\n \
        <h4 translate="ADD_Radio_5"> Paste / type your mnemonic: </h4>\n \
        <div class="form-group">\n \
          <textarea rows="4" class="form-control" placeholder="{{ \'x_Mnemonic\' | translate}}" ng-model="$parent.$parent.manualmnemonic" ng-class="Validator.isValidMnemonic($parent.$parent.manualmnemonic) ? \'is-valid\' : \'is-invalid\'" ng-change="onMnemonicChange()"></textarea>\n \
        </div>\n \
      </div>\n \
      <!-- /if selected type mnemonic-->\n \
      <!-- if selected type ledger-->\n \
      <div id="selectedTypeLedger" ng-if="walletType==\'ledger\'">\n \
        <h4 translate="ADD_Ledger">Connect your Ledger Wallet, open the Ethereum application or a contract application and verify that it is operating in U2F mode</h4>\n \
      </div>\n \
      <!-- /if selected type ledger-->\n \
    </div>\n \
    <div class="col-md-4 col-sm-6"   ng-show="showFDecrypt||showPDecrypt||showMDecrypt||walletType==\'ledger\'">\n \
      <h4 id="uploadbtntxt-wallet" ng-show="showFDecrypt" translate="ADD_Label_6"> Access Your Wallet:</h4>\n \
      <h4 id="uploadbtntxt-privkey" ng-show="showPDecrypt" translate="ADD_Label_6"> Access Your Wallet: </h4>\n \
      <h4 id="uploadbtntxt-mnemonic" ng-show="showMDecrypt" translate="ADD_Label_6"> Access Your Wallet: </h4>\n \
      <div class="form-group"><a class="btn btn-primary btn-block btnAction" ng-show="showFDecrypt||showPDecrypt||showMDecrypt" ng-click="decryptWallet()" translate="ADD_Label_6_short">UNLOCK</a></div>\n \
      <div class="form-group"><a class="btn btn-primary btn-block btnAction" ng-show="walletType==\'ledger\'" ng-click="scanLedger()" translate="ADD_Ledger_scan">SCAN</a></div>\n \
      <div ng-bind-html="decryptStatus"></div>\n \
    </div>\n \
    <div class="modal fade" tabindex="-1" role="dialog" id="mnemonicModel">\n \
        <div class="modal-dialog" role="document" style="top: 200px">\n \
          <div class="modal-content">\n \
            <div class="modal-header">\n \
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n \
              <h4 class="modal-title" translate="MNEM_1"> Please select the address you would like to interact with. </h4>\n \
            </div>\n \
            <div class="modal-body">\n \
              <p translate="MNEM_2"> Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. </p>\n \
              <table class="table table-striped table-mnemonic">\n \
                <tr>\n \
                  <th></th>\n \
                  <th translate="x_Address"> Address </th>\n \
                  <th translate="MYWAL_Bal"> Balance </th>\n \
                <tr ng-repeat="wallet in HDWallet.wallets track by $index">\n \
                  <td> <input type="radio" name="addressSelect" value="{{$index}}" ng-model="HDWallet.id"/> </td>\n \
                  <td> {{wallet.getChecksumAddressString()}} </td>\n \
                  <td> {{wallet.getBalance()}} ETH </td>\n \
                </tr>\n \
                <tr class="m-addresses">\n \
                  <td><a ng-show="HDWallet.numWallets > 5" ng-click="AddRemoveHDAddresses(false)" translate="MNEM_prev">Previous Addresses</a></td>\n \
                  <td></td>\n \
                  <td><a ng-click="AddRemoveHDAddresses(true)" translate="MNEM_more">More<br />Addresses</a></td>\n \
                </tr>\n \
              </table>\n \
            </div>\n \
            <div class="modal-footer text-center">\n \
              <button type="button" class="btn btn-default" data-dismiss="modal" translate="x_Cancel">Cancel</button>\n \
              <button type="button" class="btn btn-primary" data-dismiss="modal" ng-click="setHDWallet()" translate="ADD_Label_6_short">Access Wallet</button>\n \
            </div>\n \
          </div>\n \
        </div>\n \
      </div>\n \
  </section>'
  };
};
module.exports = walletDecryptDrtv;
