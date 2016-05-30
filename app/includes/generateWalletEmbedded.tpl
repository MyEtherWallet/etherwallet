<div ng-controller='walletGenCtrl'>

  <!-- Top - Generate Wallet -->
  <h2> Generate Wallet </h2>
  <article class="row">
    <div class="col-sm-6">
      <div class="form-group">
        <h4>Enter a strong password <small> (at least 9 characters)</small> </h4>
        <div class="input-group">
          <input type="{{showPass && 'password' || 'text'}}" class="form-control" placeholder="Don't forget to save this!" ng-model="password" ng-class="isStrongPass() ? 'valid' : 'invalid'"/>
          <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <h4>Generate Wallet</h4>
        <a class="btn btn-primary btn-block btnAction" func="generateSingleWallet" ng-click="genNewWallet()">GENERATE</a>
      </div>
    </div>
  </article>
  <!-- / Top - Generate Wallet -->

  <!-- Bottom - Display Generated Wallet -->
  <section id="generatedWallet" ng-show="showWallet">

    <hr />

    <h2>Success! Your wallet has been generated.</h2>
    <div class="alert alert-danger">
      <strong>You need your Keystore/JSON File & password or Private Key</strong> to access this wallet in the future. Please save & back it up externally! There is no way to recover a wallet if you do not save it. Read the <a href="https://www.myetherwallet.com/#help" target="_blank">help page</a> for instructions.
    </div>

    <article class="row">
      <div class="col-md-6 col-xs-12">
        <h4>1. Save your Keystore/JSON File <small>(Encrypted &middot; Mist/Geth Format &middot; Recommended)</small></h4>
        <div class="form-group">
          <a class="btn btn-primary btn-block" href="{{blobEnc}}" download="{{encFileName}}"> DOWNLOAD </a>
        </div>
      </div>
      <div class="col-md-5 col-xs-10">
        <div class="form-group">
          <h4>2. Save Your Address</h4>
          <input class="form-control" type="text" readonly="readonly" ng-value="wallet.getChecksumAddressString()"/>
        </div>
      </div>
      <div class="col-md-1 col-xs-2 address-identicon-container">
        <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
      </div>
    </article>

  </section>

</div>
