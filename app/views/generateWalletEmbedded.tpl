
<section ng-controller='walletGenCtrl'>

  <h2> Generate Wallet </h2>
  <div class="row">
    <div class="col-sm-6">
      <div class="form-group">
        <h4>Enter password <small>(min 7 characters)</small> </h4>
        <input type="{{showPass && 'text' || 'password'}}" class="form-control" placeholder="Don't forget to save this!" ng-model="password" />
        <label><input type="checkbox" ng-click="showPass=!showPass"/> Toggle Password</label>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <h4>Generate Wallet </h4>
        <a class="btn btn-primary btn-block btnAction" func="generateSingleWallet" ng-click="genNewWallet()">GENERATE</a>
      </div>
    </div>
  </div>
  <!-- / Top - Generate Wallet -->

  <!-- Bottom - Display Generated Wallet -->
  <section id="generatedWallet" ng-show="showWallet">
    <hr />

    <!-- into text -->
    <div class="row">
      <div class="col-xs-12">
        <h2>Success! Your wallet has been generated.</h2>
        <p class="text-danger"> You will need your <strong>keystore file</strong> and <strong> password </strong> to access this wallet in the future. Please be sure to back it up!!! There is no way to recover a wallet if you do not save it. </p>
      </div>
    </div>
    <!-- /into text -->

    <!-- 2. Keystore File -->
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <h4> 1. Save your Keystore File  <small>(JSON - Mist Format - Encrypted)</small></h4>

        <div class="form-group">
          <a class="btn btn-primary btn-block" href="{{blobEnc}}" download="{{encFileName}}"> DOWNLOAD </a>
        </div>
      </div>

      <div class="col-md-5 col-xs-10">
        <div class="form-group">
          <h4>2. Copy Your Address.</h4>
          <input class="form-control" type="text" readonly="readonly" ng-value="wallet.getChecksumAddressString()"/>
        </div>
      </div>
      <div class="col-md-1 col-xs-2 address-identicon-container">
        <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
      </div>
    </div>
    <!-- / 2. Address -->

  </section>
</section>
<!-- / Embedded Wallet Gen -->
