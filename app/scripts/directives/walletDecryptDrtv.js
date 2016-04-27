'use strict';
var walletDecryptDrtv = function() {
	return {
        restrict : "E",
        template : '<section class="row" ng-controller=\'decryptWalletCtrl\'>\n \
     <div class="col-md-4 col-sm-6">\n \
      <h4> Select the format of your private key: </h4>\n \
      <div class="radio">\n \
        <label>\n \
          <input type="radio" ng-model="walletType" value="fileupload"/>JSON or Keystore File</label>\n \
      </div>\n \
      <div class="radio">\n \
        <label>\n \
          <input type="radio" ng-model="walletType" value="pasteprivkey"/>Plain Text Private Key</label>\n \
      </div>\n \
    </div>\n \
    <div class="col-md-4 col-sm-6">\n \
      <!-- if selected upload -->\n \
      <div id="selectedUploadKey" ng-if="walletType==\'fileupload\'">\n \
        <h4>Select your wallet file:</h4>\n \
        <div class="form-group">\n \
          <input style="display:none;" type="file" on-read-file="showContent($fileContent)" id="fselector"/>\n \
          <a class="file-input btn btn-block btn-default btn-file marg-v-sm" ng-click="openFileDialog()">SELECT WALLET FILE... </a>\n \
          <div id="fuploadStatus" ng-bind-html="fileStatus"></div>\n \
        </div>\n \
        <div class="form-group" ng-if="requireFPass">\n \
          <p> Your file is encrypted. Please enter the password: </p>\n \
          <input class="form-control" type="password" placeholder="Password" ng-model="$parent.$parent.filePassword" ng-change="onFilePassChange()" />\n \
        </div>\n \
      </div>\n \
      <!-- /if selected upload -->\n \
      <!-- if selected type key-->\n \
      <div id="selectedTypeKey" ng-if="walletType==\'pasteprivkey\'">\n \
        <h4> Paste / type your private key: </h4>\n \
        <div class="form-group">\n \
          <textarea rows="4" class="form-control" placeholder="Private Key" ng-model="$parent.$parent.manualprivkey" ng-change="onPrivKeyChange()"></textarea>\n \
        </div>\n \
        <div class="form-group" ng-if="requirePPass">\n \
          <p> Your file is encrypted. Please enter the password: </p>\n \
          <input class="form-control" type="password" placeholder="Password" ng-model="$parent.$parent.privPassword" ng-change="onPrivKeyPassChange()">\n \
        </div>\n \
      </div>\n \
      <!-- /if selected type key-->\n \
    </div>\n \
    <div class="col-md-4 col-sm-6"   ng-show="showFDecrypt||showPDecrypt">\n \
      <h4 id="uploadbtntxt-wallet" ng-show="showFDecrypt"> Access Your Wallet:</h4>\n \
      <h4 id="uploadbtntxt-privkey" ng-show="showPDecrypt"> Access Your Wallet: </h4>\n \
      <div class="form-group"><a class="btn btn-primary btn-block btnAction" ng-show="showFDecrypt||showPDecrypt" ng-click="decryptWallet()">UNLOCK WALLET</a></div>\n \
      <div ng-bind-html="decryptStatus"></div>\n \
    </div>\n \
  </section>'
  };
};
module.exports = walletDecryptDrtv;
