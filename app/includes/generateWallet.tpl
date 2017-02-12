<section class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.generateWallet.id" ng-controller='walletGenCtrl'>

  <!-- Top -->
  <h1 translate="NAV_GenerateWallet"> Generate Wallet</h1>

  <article class="row">
    <div class="col-sm-6">
      <h4 translate="GEN_Label_1"> Enter a strong password (at least 9 characters) </h4>
      <div class="input-group">
        <input type="{{showPass && 'password' || 'text'}}" class="form-control" placeholder="{{ 'GEN_Placeholder_1' | translate }}" ng-model="password" ng-class="isStrongPass() ? 'is-valid' : 'is-invalid'"/>
        <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
      </div>
    </div>
    <div class="col-sm-6">
      <h4 translate="NAV_GenerateWallet"> Generate Wallet </h4>
      <a class="btn btn-primary btn-block btnAction" func="generateSingleWallet" ng-click="genNewWallet()" translate="NAV_GenerateWallet">Generate Wallet</a>
    </div>
  </article>
  <!-- / Top -->

  <!-- Bottom - Display Generated Wallet -->
  <section id="generatedWallet" ng-show="showWallet">
    <br />
    <hr />

    <!-- 0. Warning -->
    <h1 translate="GEN_SuccessMsg">Success! Your wallet has been generated.</h1>
    <div class="alert alert-danger" translate="GEN_Warning">**You need your Keystore/JSON File & password or Private Key** to access this wallet in the future. Please save & back it up externally! There is no way to recover a wallet if you do not save it. Read the [help page](https://www.myetherwallet.com/#help) for instructions.</div>
    <!-- / 0. Warning -->

    <br />

    <!-- 1. Private Keys -->
    <h4> 1. <span translate="GEN_Label_2"> Save your Keystore File. Don't forget your password above. </span> </h4>
    <section class="row">
      <div class="col-sm-6">
        <div class="account-help-icon">
          <img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" translate="x_KeystoreDesc">This Keystore / JSON file matches the format used by Mist & Geth so you can easily import it in the future. It is the recommended file to download and back up.</p>
          <label translate="x_Keystore" translate="x_Keystore">Keystore File (Recommended • Encrypted • Mist/Geth Format)</label>
        </div>
        <a class="btn btn-primary btn-block" href="{{blobEnc}}" download="{{encFileName}}" translate="x_Download"> DOWNLOAD </a>
      </div>
      <div class="col-sm-6">
        <div class="account-help-icon">
          <img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" translate="x_PrivKeyDesc">This is the unencrypted text version of your private key, meaning no password is necessary. If someone were to find your unencrypted private key, they could access your wallet without a password. For this reason, encrypted versions are typically recommended.</p>
          <label translate="x_PrivKey">Private Key (unencrypted)</label>
        </div>
        <textarea class="form-control bigger-on-mobile" type="text" readonly="readonly">{{wallet.getPrivateKeyString()}}</textarea>
      </div>
    </section>
    <!-- / 1. Private Keys -->

    <br />

    <!-- 2. Address -->
    <section class="row">
      <div class="col-sm-10">
        <div class="account-help-icon">
          <img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" translate="x_AddessDesc">You may know this as your "Account #" or your "Public Key". It's what you send people so they can send you ETH. That icon is an easy way to recognize your address.</p>
          <h4> 2. <span translate="GEN_Label_3"> Save Your Address. </span> </h4>
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
    <h4> 3. <span translate="GEN_Label_4"> Print your paper wallet, or store a QR code verison. (optional) </span></h4>
    <div class="row">
      <div class="col-sm-6">
        <div class="account-help-icon">
          <img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" translate="x_PrintDesc">ProTip: Click print and save this as a PDF, even if you do not own a printer!</p>
          <label translate="x_Print">Print Paper Wallet:</label>
        </div>
        <a class="btn btn-info btn-block btnAction" ng-click="printQRCode()" translate="x_PrintShort">PRINT</a>
        <div class="account-help-icon">
          <img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" translate="x_JsonDesc">This is the unencrypted, JSON format of your private key. This means you do not need the password but anyone who finds your JSON can access your wallet & Ether without the password.</p>
          <label translate="x_Json"> JSON File (unencrypted) </label>
        </div>
        <a class="btn btn-info btn-block" href="{{blob}}" download="{{wallet.getChecksumAddressString()}}-unencrypted.json" translate="x_Download">DOWNLOAD</a>
      </div>
      <div class="col-sm-3">
        <label translate="x_Address">Your Address:</label>
        <div qr-code="{{wallet.getAddressString()}}" watch-var="wallet" width="100%"></div>
      </div>
      <div class="col-sm-3">
        <label translate="x_PrivKey">Private Key (unencrypted):</label>
        <div qr-code="{{wallet.getPrivateKeyString()}}" watch-var="wallet" width="100%"></div>
      </div>
    </div>
    <!-- /3. Extras -->


  </section>
</section>
