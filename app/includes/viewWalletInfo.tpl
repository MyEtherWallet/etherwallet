<!-- View Wallet Info Panel -->
<article class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.viewWalletInfo.id" ng-controller='viewWalletCtrl' ng-cloak>

  <article class="collapse-container">
    <div ng-click="wd = !wd">
      <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>

        <h2 translate="NAV_ViewWallet">View Wallet Details</h2>

    </div>
    <div ng-show="!wd">

        <p translate="VIEWWALLET_Subtitle">
          This page allows you to download different versions of private keys and re-print your paper wallet. You may want to do this in order to [import your account into Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). If you want to check your balance, we recommend using a blockchain explorer like <a href="http://etherscan.io/" target="_blank">etherscan.io</a>.
        </p>

        <wallet-decrypt-drtv></wallet-decrypt-drtv>

    </div>
  </article>





  <section class="row" ng-show="wallet!=null">
    <hr ng-show="!wd" />

    <h2 class="col-xs-12" translate="VIEWWALLET_SuccessMsg">Success! Here are your wallet details.</h2>

    <section class="col-sm-6">

      <div class="row">
        <div class="form-group col-sm-10">
          <div class="account-help-icon">
            <img src="images/helpicon.svg" class="help-icon" />
            <p class="account-help-text" translate="x_AddessDesc">You may know this as your "Account #" or your "Public Key". It's what you send people so they can send you ETH. That icon is an easy way to recognize your address.</p>
            <h4 translate="x_Address">Your Address:</h4>
          </div>
          <input class="form-control" type="text" ng-value="wallet.getChecksumAddressString()" readonly="readonly">
        </div>
        <div class="col-sm-2 address-identicon-container">
          <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
        </div>
      </div>

      <div class="form-group" ng-show="wallet.type=='default'">
        <div class="account-help-icon">
          <img src="images/helpicon.svg" class="help-icon" />
          <p class="account-help-text" translate="x_PrivKeyDesc">This is the unencrypted text version of your private key, meaning no password is necessary. If someone were to find your unencrypted private key, they could access your wallet without a password. For this reason, encrypted versions are typically recommended.</p>
          <h4 translate="x_PrivKey">Private Key (unencrypted)</h4>
        </div>
        <textarea class="form-control" type="text" readonly="readonly">{{wallet.getPrivateKeyString()}}</textarea>
      </div>

      <div class="row">
        <div class="form-group col-sm-6">
          <h4 translate="x_Address">Your Address:</h4>
          <div qr-code="{{wallet.getAddressString()}}" watch-var="wallet" width="100%"></div>
        </div>
        <div class="form-group col-sm-6" ng-show="wallet.type=='default'">
          <h4 translate="x_PrivKey">Private Key (unencrypted):</h4>
          <div qr-code="{{wallet.getPrivateKeyString()}}" watch-var="wallet" width="100%"></div>
        </div>
      </div>

    </section>

    <section class="col-sm-6">

      <div class="form-group" ng-show="wallet.type=='default'">
        <div class="account-help-icon">
          <img src="images/helpicon.svg" class="help-icon" />
          <p class="account-help-text" translate="x_PrintDesc">ProTip: Click print and save this as a PDF, even if you do not own a printer!</p>
          <h4 translate="x_Print">Print Paper Wallet:</h4>
        </div>
        <a class="btn btn-info btn-block" ng-click="printQRCode()" translate="x_Print">Print Paper Wallet</a>
      </div>

      <div class="form-group" ng-show='showEnc'>
        <div class="account-help-icon">
          <img src="images/helpicon.svg" class="help-icon" />
          <p class="account-help-text" translate="x_KeystoreDesc">This Keystore / JSON file matches the format used by Mist & Geth so you can easily import it in the future. It is the recommended file to download and back up.</p>
          <h4 translate="x_Keystore">Keystore/JSON File (Recommended • Encrypted • Mist/Geth Format)</h4>
        </div>
        <a class="btn btn-info btn-block" href="{{blobEnc}}" download="{{encFileName}}" translate="x_Download"> DOWNLOAD </a>
      </div>

      <div class="form-group" ng-show="wallet.type=='default'">
        <div class="account-help-icon">
          <img src="images/helpicon.svg" class="help-icon" />
          <p class="account-help-text" translate="x_JsonDesc">This is the unencrypted, JSON format of your private key. This means you do not need the password but anyone who finds your JSON can access your wallet & Ether without the password.</p>
          <h4 translate="x_Json">JSON File (Unencrypted)</h4>
        </div>
        <a class="btn btn-info btn-block" href="{{blob}}" download="{{wallet.getChecksumAddressString()}}-unencrypted.json" translate="x_Download">DOWNLOAD</a>
      </div>

      <br />
      <wallet-balance-drtv></wallet-balance-drtv>
      <div translate="sidebar_TransHistory"> Transaction History: </div>
      <ul class="account-info">
        <li><a href="{{ajaxReq.blockExplorerAddr.replace('[[address]]', wallet.getAddressString())}}" target="_blank">{{ajaxReq.blockExplorerAddr.replace('[[address]]', wallet.getAddressString())}}</a></li>
      </ul>

    </section>

  </section>

</article>
<!-- / View Wallet Info Tab -->
