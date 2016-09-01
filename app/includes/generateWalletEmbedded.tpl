<div ng-controller='walletGenCtrl'>

  <!-- Top - Generate Wallet -->
  <h2 translate="NAV_GenerateWallet"> Generate Wallet </h2>
  <article class="row">
    <div class="col-sm-6">
      <div class="form-group">
        <h4 translate="GEN_Label_1"> Enter a strong password (at least 9 characters) </h4>
        <div class="input-group">
          <input type="{{showPass && 'password' || 'text'}}" class="form-control" placeholder="{{ 'GEN_Placeholder_1' | translate }}" ng-model="password" ng-class="isStrongPass() ? 'is-valid' : 'is-invalid'"/>
          <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <h4 translate="NAV_GenerateWallet"> Generate Wallet </h4>
        <a class="btn btn-primary btn-block btnAction" func="generateSingleWallet" ng-click="genNewWallet()" translate="NAV_GenerateWallet">Generate Wallet</a>
      </div>
    </div>
  </article>
  <!-- / Top - Generate Wallet -->

  <!-- Bottom - Display Generated Wallet -->
  <section id="generatedWallet" ng-show="showWallet">

    <hr />

    <!-- 0. Warning -->
    <h2 translate="GEN_SuccessMsg">Success! Your wallet has been generated.</h2>
    <div class="alert alert-danger" translate="GEN_Warning">**You need your Keystore/JSON File & password or Private Key** to access this wallet in the future. Please save & back it up externally! There is no way to recover a wallet if you do not save it. Read the [help page](https://www.myetherwallet.com/#help) for instructions.</div>
    <!-- / 0. Warning -->

    <article class="row">
      <div class="col-md-6 col-xs-12">
        <h4 translate="GEN_Label_2"> 1. Save your Keystore/JSON or Private Key. Don't forget your password above. </h4>
        <div class="form-group">
          <a class="btn btn-primary btn-block" href="{{blobEnc}}" download="{{encFileName}}" translate="x_Download"> DOWNLOAD </a>
        </div>
      </div>
      <div class="col-md-5 col-xs-10">
        <div class="form-group">
          <h4 translate="GEN_Label_3">2. Save Your Address</h4>
          <input class="form-control" type="text" readonly="readonly" ng-value="wallet.getChecksumAddressString()"/>
        </div>
      </div>
      <div class="col-md-1 col-xs-2 address-identicon-container">
        <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
      </div>
    </article>

  </section>

</div>
