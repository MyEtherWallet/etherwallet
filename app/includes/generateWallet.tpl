<main class="tab-pane active text-center" ng-if="globalService.currentTab==globalService.tabs.generateWallet.id" ng-controller='walletGenCtrl' role="main">

  <section class="row" ng-show="!wallet && !showGetAddress">
    <h1 translate="NAV_GenerateWallet" aria-live="polite"> Generate Wallet</h1>
    <div class="col-sm-8 col-sm-offset-2">
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

      <br />

      <a tabindex="0" role="button" class="btn btn-primary btn-block" func="generateSingleWallet" ng-click="genNewWallet()" translate="NAV_GenerateWallet">Generate Wallet</a>

      <p style="margin-top: 6em">
        <strong>New or confused?</strong>
        <a href="https://myetherwallet.groovehq.com/knowledge_base/categories/getting-started-443" target="_blank">Read this first so you don't lose your ETH.</a>
      </p>
      <p style="margin-top: 2em">
        <strong> Using a Ledger & TREZOR?</strong>
        Your hardware device <em> is </em> your wallet.
        <br />
        <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id">See your addresses & send your ETH/Tokens here.</a>
      </p>
    </div>
  </section>


  <section role="main" class="row" ng-show="wallet && !showPaperWallet">
    <h1 translate="GEN_Label_2">Save your Wallet File.</h1>
    <br>
    <div class="col-sm-8 col-sm-offset-2">
      <div aria-hidden="true" class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
        <p class="account-help-text" translate="x_KeystoreDesc">This Keystore / JSON file</p>
        <h4 translate="x_Keystore2">Keystore File (Recommended • Encrypted)</h4>
      </div>
      <a tabindex="0" role="button" class="btn btn-primary btn-block" href="{{blobEnc}}" download="{{encFileName}}" translate="x_Download" aria-label="{{'x_Download'|translate}} {{'x_Keystore'|translate}}" aria-describedby="x_KeystoreDesc" ng-click="downloaded()"> DOWNLOAD </a>
      <p class="sr-only" id="x_KeystoreDesc" translate="x_KeystoreDesc"></p>
      <br><br><br><br>
    </div>
    <div class="col-xs-12 alert alert-danger">
      <p>
      <strong>If you do not save this file, your ETH & Tokens are lost forever.</strong>
      <br />
      Save it now & back it up in a second location (not on your computer).
      <br />
      <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/how-do-i-save-slash-backup-my-wallet" target="_blank">Learn More</a>
      <br /><br />
      <a tabindex="0" role="button" class="btn btn-info" ng-class="fileDownloaded ? '' : 'disabled' " ng-click="continueToPaper()"> I promise I won't lose this file ever. Continue. </a>
      </p>
    </div>
  </section>


  <section class="row" ng-show="showPaperWallet">
    <h1 translate="GEN_Label_4"> Print your paper wallet, or store a QR code version. </h1>
    <p class="text-danger"> If you think you may <u>ever</u> forget your password, save one of these, please! Keep it safe!</p class="text-danger">

    <div class="col-sm-8 col-sm-offset-2 clearfix">
      <div aria-hidden="true" class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
        <p class="account-help-text" id="x_PrivKeyDesc" translate="x_PrivKeyDesc">This is the unencrypted version of your private key.</p>
        <label translate="x_PrivKey">Private Key (unencrypted)</label>
      </div>
      <textarea aria-label="{{'x_PrivKey'|translate}}" aria-describedby="x_PrivKeyDesc" class="form-control bigger-on-mobile" type="text" readonly="readonly">{{wallet.getPrivateKeyString()}}</textarea>
      <div aria-hidden="true" class="account-help-icon"><img src="images/icon-help.svg" class="help-icon" />
        <p class="account-help-text" id="x_PrintDesc" translate="x_PrintDesc">ProTip: Click print and save this as a PDF</p>
        <label translate="x_Print">Print Paper Wallet:</label>
      </div>
      <a tabindex="0" aria-label="{{'x_Print'|translate}}" aria-describedby="x_PrintDesc" role="button" class="btn btn-primary btn-block" ng-click="printQRCode()" translate="x_PrintShort">PRINT</a>
    </div>
    <div class="col-sm-4 col-sm-offset-4 clearfix">
      <br /><br />
      <a class="btn btn-info" ng-click="getAddress()"> Next: Save your Address </a>
    </div>
  </section>

  <article class="row text-left" ng-show="showGetAddress">
    <section class="clearfix collapse-container">
      <div class="text-center" ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h1 traslate="SWAP_unlock">Unlock your wallet to see your address</h1>
      </div>
      <div ng-show="!wd">
          @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
          @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
      </div>
    </section>

    <section class="clearfix" ng-show="wallet!=null" ng-controller='viewWalletCtrl'>

      @@if (site === 'cx' ) {  @@include( './viewWalletInfo-content.tpl', { "site": "cx" } )    }
      @@if (site === 'mew') {  @@include( './viewWalletInfo-content.tpl', { "site": "mew" } )   }

    </section>
  </article>

</main>
