<main class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.generateWallet.id" ng-controller='walletGenCtrl' role="main">

  <!-- Title -->
  <h1 translate="NAV_GenerateWallet" aria-live="polite"> Generate Wallet</h1>
  <!-- / Title -->

  <!-- Top -->
  <section class="row">
    <div class="col-sm-6">
      <h4 translate="GEN_Label_1"> Enter password </h4>
      <div class="input-group">
        <input name="password"
               class="form-control"
               type="{{showPass && 'password' || 'text'}}"
               placeholder="{{ 'GEN_Placeholder_1' | translate }}"
               ng-model="password"
               ng-class="isStrongPass() ? 'is-valid' : 'is-invalid'"
               aria-label="{{ 'GEN_Label_1' |translate}}"/>
        <span tabindex="0" aria-label="make password visible" role="button" class="input-group-addon eye" ng-click="showPass=!showPass"></span>
      </div>
    </div>
    <div class="col-sm-6">
      <h4 translate="NAV_GenerateWallet"> Generate Wallet </h4>
      <a tabindex="0" role="button" class="btn btn-primary btn-block" func="generateSingleWallet" ng-click="genNewWallet()" translate="NAV_GenerateWallet">Generate Wallet</a>
    </div>
  </section>
  <!-- / Top -->


  <!-- Bottom -->
  <section ng-show="showWallet" role="main">
    <br /><hr /><br />

    <!-- 1. Private Keys -->
    <h2>1. <span translate="GEN_Label_2"> Save your Keystore File. Don't forget your password above. </span></h2>
    <section class="row">
      <div class="col-sm-10">
        <div aria-hidden="true" class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" translate="x_KeystoreDesc">This Keystore / JSON file</p>
          <label translate="x_Keystore">Keystore File (Recommended • Encrypted)</label>
        </div>
        <a tabindex="0" role="button" class="btn btn-success btn-block" href="{{blobEnc}}" download="{{encFileName}}" translate="x_Download" aria-label="{{'x_Download'|translate}} {{'x_Keystore'|translate}}" aria-describedby="x_KeystoreDesc"> DOWNLOAD </a>
        <p class="sr-only" id="x_KeystoreDesc" translate="x_KeystoreDesc"></p>
      </div>
    </section>
    <!-- / 1. Private Keys -->

    <br />

    <!-- 2. Address -->
    <h2>2. <span translate="GEN_Label_3"> Save Your Address. </span></h2>
    <section class="row">
      <div class="col-sm-10">
        <div aria-hidden="true" class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" id="x_AddessDesc" translate="x_AddessDesc">You may know this as your "Account #"</p>
          <label translate="x_Address">Your Address</label>
        </div>
        <input class="form-control" type="text" readonly="readonly" aria-label="{{'x_Address'|translate}}" aria-describedby="x_AddessDesc" ng-value="wallet.getChecksumAddressString()"/>
      </div>
      <div class="col-sm-2 address-identicon-container" aria-hidden="true">
        <div class="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
      </div>
    </section>
    <!-- / 2. Address -->

    <br />

    <!-- 3. Extras -->
    <h2>3. <span translate="GEN_Label_4"> Print your paper wallet, or store a QR code version. (optional) </span></h2>
    <section class="row">

      <div class="col-sm-6">

        <div aria-hidden="true" class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" id="x_PrivKeyDesc" translate="x_PrivKeyDesc">This is the unencrypted version of your private key.</p>
          <label translate="x_PrivKey">Private Key (unencrypted)</label>
        </div>
        <textarea aria-label="{{'x_PrivKey'|translate}}" aria-describedby="x_PrivKeyDesc" class="form-control bigger-on-mobile" type="text" readonly="readonly">{{wallet.getPrivateKeyString()}}</textarea>

        <div aria-hidden="true" class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" id="x_PrintDesc" translate="x_PrintDesc">ProTip: Click print and save this as a PDF</p>
          <label translate="x_Print">Print Paper Wallet:</label>
        </div>
        <a tabindex="0" aria-label="{{'x_Print'|translate}}" aria-describedby="x_PrintDesc" role="button" class="btn btn-info btn-block" ng-click="printQRCode()" translate="x_PrintShort">PRINT</a>

        <div aria-hidden="true" class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" id="x_JsonDesc" translate="x_JsonDesc">This is the unencrypted, JSON format of your private key.</p>
          <label translate="x_Json">JSON File (unencrypted)</label>
        </div>
        <a tabindex="0" aria-label="{{'x_Download'|translate}} {{'x_Json'|translate}}" aria-describedby="x_JsonDesc" role="button" class="btn btn-info btn-block" href="{{blob}}" download="{{wallet.getChecksumAddressString()}}-unencrypted.json" translate="x_Download">DOWNLOAD</a>
      </div>

      <div class="col-sm-3">
        <label translate="x_Address">Your Address</label>
        <div qr-code="{{wallet.getAddressString()}}" watch-var="wallet" width="100%"></div>
      </div>

      <div class="col-sm-3">
        <label translate="x_PrivKey">Private Key (unencrypted):</label>
        <div qr-code="{{wallet.getPrivateKeyString()}}" watch-var="wallet" width="100%"></div>
      </div>

    </section>
    <!-- /3. Extras -->


  </section>
</main>
