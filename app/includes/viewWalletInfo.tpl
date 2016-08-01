<!-- view wallet info -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.viewWalletInfo.id">

  <h2 translate="VIEWWALLET_Title">View Wallet Details</h2>

  <p translate="VIEWWALLET_Subtitle"></p>

  <wallet-decrypt-drtv></wallet-decrypt-drtv>

  <section class="row" ng-show="wallet!=null" ng-controller='viewWalletCtrl'>
    <hr />
    <h2 class="col-xs-12" translate="VIEWWALLET_SuccessMsg"></h2>
    <div class="col-sm-6">
      <div class="row">
        <div class="form-group col-sm-10">
          <span translate="GEN_Address"></span>
          <img src="images/helpicon.svg" class="help-icon" />
          <span class="account-help-text" translate="GEN_AddessDesc"></span>
          <input class="form-control" type="text" ng-value="wallet.getChecksumAddressString()" readonly="readonly">
        </div>
        <div class="col-sm-2 address-identicon-container">
          <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
        </div>
      </div>

      <div class="form-group">
        <h4>
          <span translate="GEN_PrivKey"></span>
          <div class="account-help-icon">
            <img src="images/helpicon.svg" class="help-icon" />
            <span class="account-help-text" translate="GEN_PrivKeyDesc"></span>
          </div>
        </h4>
        <textarea class="form-control" type="text" readonly="readonly">{{wallet.getPrivateKeyString()}}</textarea>
      </div>

      <div class="row">
        <div class="form-group col-sm-6">
          <h4 translate="GEN_Address"></h4>
          <div qr-code="{{wallet.getAddressString()}}" watch-var="wallet" width="100%"></div>
        </div>
        <div class="form-group col-sm-6">
          <h4 translate="GEN_PrivKey"></h4>
          <div qr-code="{{wallet.getPrivateKeyString()}}" watch-var="wallet" width="100%"></div>
        </div>
      </div>

    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <h4>
          <span translate="GEN_Print"></span>
          <div class="account-help-icon">
            <img src="images/helpicon.svg" class="help-icon" />
            <span class="account-help-text" translate="GEN_PrintDesc"></span>
          </div>
        </h4>
        <a class="btn btn-info btn-block" ng-click="printQRCode()" translate="GEN_Print"></a>
      </div>
      <div class="form-group" ng-show='showEnc'>
        <h4>
          <span translate="GEN_Keystore"></span>
          <div class="account-help-icon">
            <img src="images/helpicon.svg" class="help-icon" />
            <span class="account-help-text">{{ 'GEN_KeystoreDesc' | translate }}</span>
          </div>
        </h4>
         <a class="btn btn-info btn-block" href="{{blobEnc}}" download="{{encFileName}}"> {{ 'GEN_Download' | translate }} </a>
      </div>
      <div class="form-group" >
        <h4>
          <span translate="GEN_Json"></span>
          <div class="account-help-icon">
            <img src="images/helpicon.svg" class="help-icon" />
            <span class="account-help-text" translate="GEN_JsonDesc"></span>
          </div>
        </h4>
        <a class="btn btn-info btn-block" href="{{blob}}" download="{{wallet.getChecksumAddressString()}}-unencrypted.json"> {{ 'GEN_Download' | translate }} </a>
      </div>

      <br />
      <hr />
      <p>
        <span translate="GEN_Balance"></span>
        <br />
        <strong class="text-primary" style="margin-left: 1em"> {{etherBalance}} Ether </strong>
        <br />
        <div ng-repeat="token in tokenObjs track by $index">
          <strong style="margin-left: 1em"> {{token.getBalance()}} {{token.getSymbol()}}</strong><br />
        </div>
      </p>
      <hr />
      <p>
        <span translate="GEN_Equiv"></span>
        <br />
        <strong style="margin-left: 1em"> {{usdBalance}} USD </strong>
        <br />
        <strong style="margin-left: 1em"> {{eurBalance}} EUR </strong>
        <br />
        <strong style="margin-left: 1em"> {{btcBalance}} BTC </strong>
      </p>
      <hr />
      <p>
        <span translate="GEN_TransHistory"></span>
        <br />
        <a href="https://etherscan.io/address/{{wallet.getAddressString()}}" target="_blank">https://etherscan.io/address/{{wallet.getAddressString()}}</a>
      </p>
    </div>
  </section>


</div>
<!-- /view wallet info -->
