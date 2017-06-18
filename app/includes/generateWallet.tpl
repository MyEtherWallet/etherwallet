<main class="tab-pane block--container active" ng-if="globalService.currentTab==globalService.tabs.generateWallet.id" ng-controller='walletGenCtrl' role="main">

  <article class="block--wrap gen--1" ng-show="!wallet && !showGetAddress">

    <section class="block--main equal-space center-h">
      <br />
      <h1 translate="NAV_GenerateWallet" aria-live="polite"> Generate Wallet</h1>
      <h4 translate="GEN_Label_1"> Enter password </h4>
      <div class="input-group">
        <input name="password"
             class="form-control"
             type="{{showPass && 'password' || 'text'}}"
             placeholder="{{'GEN_Placeholder_1' | translate }}"
             ng-model="password"
             ng-class="isStrongPass() ? 'is-valid' : 'is-invalid'"
             aria-label="{{'GEN_Label_1' |translate}}"/>
        <span tabindex="0" aria-label="make password visible" role="button" class="input-group-addon eye" ng-click="showPass=!showPass"></span>
      </div>
      <a tabindex="0" role="button" class="btn btn-primary" func="generateSingleWallet" ng-click="genNewWallet()" translate="NAV_GenerateWallet">Generate Wallet</a>
    </section>

    <section class="block--help">
      <ul>
        <li><strong><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/how-do-i-create-a-new-wallet" target="_blank" rel="noopener">How to create a wallet</a></strong></li>
        <li><strong><a href="https://myetherwallet.groovehq.com/knowledge_base/categories/getting-started-443" target="_blank" rel="noopener">Getting Started</a></strong></li>
      </ul>

      <h2>Ledger &amp; TREZOR?</h2>
      <ul><li>Use your <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id">Ledger or TREZOR</a> to access your account. Your device <em>is</em> your wallet. </li></ul>

      <h2>Jaxx / Metamask?</h2>
      <ul><li>Use your <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id">Mnemonic Phrase</a> to access your account.</li></ul>

      <h2>Mist / Geth / Parity?</h2>
      <ul><li>Use your <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id">Keystore File (UTC / JSON)</a> to access your account.</li></ul>
    </section>

  </article>


  <article role="main" class="block--wrap" ng-show="wallet && !showPaperWallet">

    <section class="block--main center-h">
      <br />
      <h1 translate="GEN_Label_2">Save your <span translate="x_Keystore2"> Keystore File (UTC / JSON) </span></h1>
      <a tabindex="0" role="button"
         class="btn btn-primary"
         href="{{blobEnc}}"
         download="{{encFileName}}"
         aria-label="{{'x_Download'|translate}} {{'x_Keystore'|translate}}"
         aria-describedby="x_KeystoreDesc"
         ng-click="downloaded()"
         target="_blank" rel="noopener">
        <span translate="x_Download"> DOWNLOAD </span> <span translate="x_Keystore2"> Keystore File (UTC / JSON) </span>
      </a>
      <br />
      <br /><br />
      <div class="alert alert-danger" style="display: inline-block; margin-top: 4rem;">
        <p>This is your Keystore file. It contains your encrypted private key. Without it, you cannot access your ETH or Tokens.</p>
        <h6><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/how-do-i-save-slash-backup-my-wallet" target="_blank" rel="noopener"> You are responsible for the safety and security of your private key. </a></h6>
        <p> Keep it safe </p>
        <p> Make a backup </p>
        <p> Don't share it with anyone </p>
        <p> Don't lose it</p>
        <p clas="margin-top: 2rem;"><a tabindex="0" role="button" class="btn btn-info" ng-class="fileDownloaded ? '' : 'disabled' " ng-click="continueToPaper()"> I understand. Continue. </a></p>
      </div>

    </section>

    <section class="block--help">
      <ul>
        <li><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/how-do-i-save-slash-backup-my-wallet" target="_blank" rel="noopener"><strong>How to back up your wallet</strong></a></li>
        <li><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-are-the-different-formats-of-a-private-key" target="_blank" rel="noopener"><strong>What are these Different Formats?</a></strong></li>
      </ul>

      <h2> Not Downloading a File? </h2>
      <ul>
        <li> Right click &amp; select 'Download as...' or 'Save as...'.</li>
        <li> Use the following as the file name: </li>
        <li><label>
            <input class="form-control input-sm" type="text" value="{{encFileName}}" readonly/>
          </label></li>
      </ul>

      <h2> MyEtherWallet <strong>cannot</strong> recover...</h2>
      <ul>
      <li translate="x_Keystore2"> Keystore File (UTC / JSON) </li>
      <li translate="x_PrivKey2 "> Private key</li>
      <li translate="x_Password "> Password</li>
      </ul>

      <h2>Don't open this file on your computer</h2>
      <ul><li>Simply use it to access your wallet via MyEtherWallet (or Mist, Geth, Parity &amp; other wallet clients.)</li></ul>
    </section>

  </article>


  <article role="main" class="block--wrap"  ng-show="showPaperWallet">

    <section class="block--main center-h">
      <br />
      <h1 translate="GEN_Label_4"> Print your paper wallet, or store a QR code version. </h1>

      <div class="form-group">
        <h4 translate="x_PrivKey">Private Key (unencrypted)</h4>
        <input aria-label="{{'x_PrivKey'|translate}}" aria-describedby="x_PrivKeyDesc"
               value="{{wallet.getPrivateKeyString()}}"
               class="form-control"
               type="text"
               readonly="readonly"
               style="max-width: 50rem;margin: auto;"/>
      </div>

      <div class="form-group">
        <h4 translate="x_Print">Print Paper Wallet:</h4>
        <a tabindex="0" aria-label="{{'x_Print'|translate}}" aria-describedby="x_PrintDesc" role="button" class="btn btn-primary" ng-click="printQRCode()" translate="x_Print">PRINT</a>
      </div>

      <br /><br />
      <p><a class="btn btn-default btn-sm" ng-click="getAddress()"> Next: Save your Address </a></p>
      <br />

    </section>

    <section class="block--help">
      <ul>
        <li><strong><a href="hhttps://myetherwallet.groovehq.com/knowledge_base/topics/protecting-yourself-and-your-funds" target="_blank" rel="noopener"><strong>Preventing loss &amp; theft of your funds.</strong></a></li>
        <li><strong><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-are-the-different-formats-of-a-private-key" target="_blank" rel="noopener">What are these Different Formats?</a></strong></li>
      </ul>

      <h2> Why Should I? </h2>
      <ul>
        <li> To have a secondary backup. </li>
        <li> In case you ever forget your password. </li>
        <li> <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/how-do-i-safely-slash-offline-slash-cold-storage-with-myetherwallet" target="_blank" rel="noopener">Cold Storage</a> </li>
      </ul>

      <h2> ProTip </h2>
      <ul><li> No printer? Save it as a PDF and back it up on a USB drive. </li></ul>

    </section>

  </article>

  <article class="text-left" ng-show="showGetAddress">
    <div class="clearfix collapse-container">
      <div ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h1 traslate="SWAP_unlock">Unlock your wallet to see your address</h1>
      </div>
      <div ng-show="!wd">
          @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
          @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
      </div>
    </div>

    <div class="row" ng-show="wallet!=null" ng-controller='viewWalletCtrl'>

      @@if (site === 'cx' ) {  @@include( './viewWalletInfo-content.tpl', { "site": "cx" } )    }
      @@if (site === 'mew') {  @@include( './viewWalletInfo-content.tpl', { "site": "mew" } )   }

    </div>
  </article>

</main>
