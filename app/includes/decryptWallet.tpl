<section class="row" ng-controller='decryptWalletCtrl'>
  <article class="col-md-4 col-sm-6">
    <h4> How would you like to access your wallet? </h4>
    <div class="radio">
      <label><input type="radio" ng-model="walletType" value="fileupload"/>Upload Your Wallet File <small>(Pre-Sale / JSON / Keystore / MyEtherWallet)</small></label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" ng-model="walletType" value="pasteprivkey"/>Paste/Type Your Private Key</label>
    </div>
  </article>
  <article class="col-md-4 col-sm-6">
    <!-- if selected upload -->
    <div id="selectedUploadKey" ng-if="walletType=='fileupload'">
      <h4>Select your wallet file : </h4>
      <div class="form-group">
        <input style="display:none;" type="file" on-read-file="showContent($fileContent)" id="fselector"/>
        <a class="file-input btn btn-block btn-default btn-file marg-v-sm" ng-click="openFileDialog()">SELECT WALLET FILE... </a>
        <div id="fuploadStatus" ng-bind-html="fileStatus"></div>
      </div>
      <div class="form-group" ng-if="requireFPass">
        <p> your file is encrypted with a password, enter the password here: </p>
        <input class="form-control" type="password" placeholder="Password" ng-model="$parent.$parent.filePassword" ng-change="onFilePassChange()" />
      </div>
    </div>
    <!-- /if selected upload -->
    <!-- if selected type key-->
    <div id="selectedTypeKey" ng-if="walletType=='pasteprivkey'">
      <h4> Paste / type your private key: </h4>
      <div class="form-group">
        <textarea rows="4" class="form-control" placeholder="Private Key" ng-model="$parent.$parent.manualprivkey" ng-change="onPrivKeyChange()"></textarea>
      </div>
      <div class="form-group" ng-if="requirePPass">
        <p> Your file is encrypted with a password, enter the password here: </p>
        <input class="form-control" type="password" placeholder="Password" ng-model="$parent.$parent.privPassword" ng-change="onPrivKeyPassChange()">
      </div>
    </div>
    <!-- /if selected type key-->
  </article>
  <article class="col-md-4 col-sm-6" ng-show="showFDecrypt||showPDecrypt">
    <h4 id="uploadbtntxt-wallet" ng-show="showFDecrypt"> Decrypt Wallet:</h4>
    <h4 id="uploadbtntxt-privkey" ng-show="showPDecrypt"> Decrypt Private Key: </h4>
    <div class="form-group"><a class="btn btn-primary btn-block btnAction" ng-show="showFDecrypt||showPDecrypt" ng-click="decryptWallet()">DECRYPT</a></div>
    <div ng-bind-html="decryptStatus"></div>
  </article>
</section>
