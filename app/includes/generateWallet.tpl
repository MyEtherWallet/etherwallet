<main class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.generateWallet.id" ng-controller='walletGenCtrl'>

  <!-- Title -->
  <h1 translate="NAV_GenerateWallet"> Generate Wallet</h1>
  <!-- / Title -->

  <!-- Top -->
  <section class="row">
    <div class="col-sm-6">
      <h4 translate="GEN_Label_1"> Enter password </h4>
      <div class="input-group">
        <input class="form-control"
               type="{{showPass && 'password' || 'text'}}"
               placeholder="{{ 'GEN_Placeholder_1' | translate }}"
               ng-model="password"
               ng-class="isStrongPass() ? 'is-valid' : 'is-invalid'"/>
        <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
      </div>
    </div>
    <div class="col-sm-6">
      <h4 translate="NAV_GenerateWallet"> Generate Wallet </h4>
      <a class="btn btn-primary btn-block" func="generateSingleWallet" ng-click="genNewWallet()" translate="NAV_GenerateWallet">Generate Wallet</a>
    </div>
  </section>
  <!-- / Top -->


  <!-- Bottom -->
  <section ng-show="showWallet">
    <br /><hr /><br />

    <!-- Title -->
    <h3 translate="GEN_SuccessMsg">Success! Your wallet has been generated.</h3>
    <!-- / Title -->

    <!-- 1. Private Keys -->
    <h2>1. <span translate="GEN_Label_2"> Save your Keystore File. Don't forget your password above. </span></h2>
    <section class="row">
      <div class="col-sm-10">
        <div class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" translate="x_KeystoreDesc">This Keystore / JSON file</p>
          <label translate="x_Keystore">Keystore File (Recommended • Encrypted)</label>
        </div>
        <a class="btn btn-success btn-block" href="{{blobEnc}}" download="{{encFileName}}" translate="x_Download"> DOWNLOAD </a>
      </div>
    </section>
    <!-- / 1. Private Keys -->

    <br />

    <!-- 2. Address -->
    <h2>2. <span translate="GEN_Label_3"> Save Your Address. </span></h2>
    <section class="row">
      <div class="col-sm-10">
        <div class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" translate="x_AddessDesc">You may know this as your "Account #"</p>
          <label translate="x_Address">Your Address</label>
        </div>
        <input class="form-control" type="text" readonly="readonly" ng-value="wallet.getChecksumAddressString()"/>
      </div>
      <div class="col-sm-2 address-identicon-container">
        <div class="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
      </div>
    </section>
    <!-- / 2. Address -->

    <br />

    <!-- 3. Extras -->
    <h2>3. <span translate="GEN_Label_4"> Print your paper wallet, or store a QR code version. (optional) </span></h2>
    <section class="row">

      <div class="col-sm-6">

        <div class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" translate="x_PrivKeyDesc">This is the unencrypted version of your private key.</p>
          <label translate="x_PrivKey">Private Key (unencrypted)</label>
        </div>
        <textarea class="form-control bigger-on-mobile" type="text" readonly="readonly">{{wallet.getPrivateKeyString()}}</textarea>

        <div class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" translate="x_PrintDesc">ProTip: Click print and save this as a PDF</p>
          <label translate="x_Print">Print Paper Wallet:</label>
        </div>
        <a class="btn btn-info btn-block" ng-click="printQRCode()" translate="x_PrintShort">PRINT</a>
        <div class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" translate="x_JsonDesc">This is the unencrypted, JSON format of your private key.</p>
          <label translate="x_Json">JSON File (unencrypted)</label>
        </div>
        <a class="btn btn-info btn-block" href="{{blob}}" download="{{wallet.getChecksumAddressString()}}-unencrypted.json" translate="x_Download">DOWNLOAD</a>
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
