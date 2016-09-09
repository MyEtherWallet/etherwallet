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
    </div>\n \
    <div class="col-md-4 col-sm-6"   ng-show="showFDecrypt||showPDecrypt">\n \
      <h4 id="uploadbtntxt-wallet" ng-show="showFDecrypt" translate="ADD_Label_6"> Access Your Wallet:</h4>\n \
      <h4 id="uploadbtntxt-privkey" ng-show="showPDecrypt" translate="ADD_Label_6"> Access Your Wallet: </h4>\n \
      <div class="form-group"><a class="btn btn-primary btn-block btnAction" ng-show="showFDecrypt||showPDecrypt" ng-click="decryptWallet()" translate="ADD_Label_6_short">UNLOCK</a></div>\n \
      <div ng-bind-html="decryptStatus"></div>\n \
    </div>\n \
  </section>'
  };
};
module.exports = walletDecryptDrtv;
