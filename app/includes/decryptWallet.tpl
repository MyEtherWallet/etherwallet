<section class="row" ng-controller='decryptWalletCtrl'>

  <section class="col-md-4 col-sm-6">
    <h4 translate="decrypt_Access"> How would you like to access your wallet? </h4>
    <div class="radio">
      <label>
        <input type="radio" ng-model="walletType" value="fileupload"/>
        <span translate="ADD_Radio_2">Select Your Wallet File (Keystore / JSON)</span>
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" ng-model="walletType" value="pasteprivkey"/>
        <span translate="ADD_Radio_3">Paste/Type Your Private Key</span>
      </label>
    </div>
    <div class="radio">
      <label>
        <input type="radio" ng-model="walletType" value="pastemnemonic"/>
        <span translate="ADD_Radio_5">Paste/Type Your Mnemonic</span>
      </label>
    </div>
  </section>


  <section class="col-md-4 col-sm-6">
    <!-- if selected upload -->
    <div id="selectedUploadKey" ng-if="walletType=='fileupload'">
      <h4 translate="ADD_Radio_2">Select Your Wallet File (Keystore / JSON)</h4>

      <div class="form-group">
        <input style="display:none;" type="file" on-read-file="showContent($fileContent)" id="fselector"/>
        <a class="file-input btn btn-block btn-default btn-file marg-v-sm" ng-click="openFileDialog()" translate="ADD_Radio_2_short">
          SELECT WALLET FILE...
        </a>
        <div id="fuploadStatus" ng-bind-html="fileStatus"></div>
      </div>

      <div class="form-group" ng-if="requireFPass">
        <p translate="ADD_Label_3"> Your file is encrypted. Please enter the password:  </p>
        <input class="form-control" type="password" placeholder="{{ 'x_Password' | translate }}" ng-model="$parent.$parent.filePassword" ng-change="onFilePassChange()" />
      </div>
    </div>
    <!-- /if selected upload -->

    <!-- if selected type key-->
    <div id="selectedTypeKey" ng-if="walletType=='pasteprivkey'">
      <h4 translate="ADD_Radio_3"> Paste/Type Your Private Key </h4>
      <div class="form-group">
        <textarea rows="4" class="form-control" placeholder="{{ 'x_PrivKey2' | translate }}" ng-model="$parent.$parent.manualprivkey" ng-change="onPrivKeyChange()"></textarea>
      </div>
      <div class="form-group" ng-if="requirePPass">
        <p translate="ADD_Label_3"> Your file is encrypted. Please enter the password:  </p>
        <input class="form-control" type="password" placeholder="{{ 'x_Password' | translate }}" ng-model="$parent.$parent.privPassword" ng-change="onPrivKeyPassChange()">
      </div>
    </div>
    <!-- /if selected type key-->

    <!-- if selected type mnemonic-->
    <div id="selectedTypeMnemonic" ng-if="walletType=='pastemnemonic'">
      <h4 translate="ADD_Radio_5"> Paste/Type Your Mnemonic </h4>
      <div class="form-group">
        <textarea rows="4" class="form-control" placeholder="{{ 'x_Mnemonic' | translate }}" ng-model="$parent.$parent.manualmnemonic" ng-change="onMnemonicChange()"></textarea>
      </div>
      <h4 translate="ADD_Radio_5_Path"> Select HD derivation path: </h4>
      <div class="form-group">
        <div class="radio">
          <label><input type="radio" id="hd_derivation_path_default" ng-model="$parent.HDWallet.dPath" value="{{ $parent.HDWallet.defaultDPath}}"/>
          <span ng-bind="$parent.HDWallet.defaultDPath"></span> <span translate="ADD_Radio_5_PathDefault">(default)</span></label>
        </div>
        <div class="radio">
          <label><input type="radio" id="hd_derivation_path_alternative" ng-model="$parent.HDWallet.dPath" value="{{ $parent.HDWallet.alternativeDPath}}"/>
          <span ng-bind="$parent.HDWallet.alternativeDPath"></span> <span translate="ADD_Radio_5_PathAlternative">(alternative)</span></label>
        </div>
        <div class="radio">
          <label><input type="radio" id="hd_derivation_path_custom" ng-model="$parent.HDWallet.dPath" value="{{$parent.HDWallet.customDPath}}"/>
          <input type="text" class="form-control" style="display: inline; width: 70%" ng-model="$parent.HDWallet.customDPath" id="hd_derivation_path_custom_value" ng-change="onCustomHDDPathChange()"/> <span translate="ADD_Radio_5_PathCustom">(custom)</label>
        </div>
      </div>
    </div>
    <!-- /if selected type mnemonic-->
  </section>


  <section class="col-md-4 col-sm-6" ng-show="showFDecrypt||showPDecrypt">
    <h4 id="uploadbtntxt-wallet" ng-show="showFDecrypt" translate="ADD_Label_6"> Unlock your Wallet </h4>
    <h4 id="uploadbtntxt-privkey" ng-show="showPDecrypt" translate="ADD_Label_6_short"> Unlock </h4>
    <div class="form-group">
      <a class="btn btn-primary btn-block btnAction" ng-show="showFDecrypt||showPDecrypt" ng-click="decryptWallet()" translate="ADD_Label_6_short">UNLOCK</a>
    </div>
    <div ng-bind-html="decryptStatus"></div>
  </section>


</section>
