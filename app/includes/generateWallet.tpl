<main class="tab-pane block--container active" ng-if="globalService.currentTab==globalService.tabs.generateWallet.id" ng-controller='walletGenCtrl' role="main">

  <article class="block__wrap gen__1" ng-show="!wallet && !showGetAddress">

    <section class="block__main gen__1--inner">
      <br />
      <h1 translate="NAV_GenerateWallet" aria-live="polite"> Create New Wallet</h1>
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
      <p> This password <em>encrypts</em> your private key. This does not act as a seed to generate your keys. <br /> <strong>You will need this password + your private key to unlock your wallet.</strong></p>
      <br>
    </section>

    <section class="block__help">
      <h2>Ledger or TREZOR?</h2>
      <ul><li>Use your <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id">Ledger or TREZOR</a> to access your account. Your device <em>is</em> your wallet. </li></ul>

      <h2>Jaxx / Metamask</h2>
      <ul><li>Use your <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id">Mnemonic Phrase</a> to access your account.</li></ul>

      <h2>Mist / Geth / Parity?</h2>
      <ul><li>Use your <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id">Keystore File (UTC / JSON)</a> to access your account.</li></ul>

      <h2>Guides &amp; FAQ</h2>
      <ul>
        <li><strong><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/how-do-i-create-a-new-wallet" target="_blank" rel="noopener">How to Create a Wallet</a></strong></li>
        <li><strong><a href="https://myetherwallet.groovehq.com/knowledge_base/categories/getting-started-443" target="_blank" rel="noopener">Getting Started</a></strong></li>
      </ul>
    </section>

  </article>


  <article role="main" class="block__wrap gen__2" ng-show="wallet && !showPaperWallet" > <!-- -->

    <section class="block__main gen__2--inner">
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

      <div class="warn">
        <p translate="ERROR_28"></p>
        <p><strong>Keep it safe &middot; Make a backup &middot; Don't share it with anyone &middot; Don't lose it &middot; It cannot be recovered if you lose it.</strong></p>
        <p>
          <a tabindex="0" role="button" class="btn btn-danger" ng-class="fileDownloaded ? '' : 'disabled' " ng-click="continueToPaper()">
            I understand. Continue.
          </a>
        </p>
      </div>

    </section>

    <section class="block__help">
      <h2> Not Downloading a File? </h2>
      <ul>
        <li> Try using Google Chrome </li>
        <li> Right click &amp; Save file as... w/ filename:</li>
        <li><small><small><code> {{encFileName}} </code></small></small></li>
      </ul>

      <h2>Don't open this file on your computer</h2>
      <ul><li>Use it to access your wallet via MyEtherWallet (or Mist, Geth, Parity &amp; other wallet clients.)</li></ul>

      <h2>Guides &amp; FAQ</h2>
      <ul>
        <li><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/how-do-i-save-slash-backup-my-wallet" target="_blank" rel="noopener"><strong>How to Back Up Your Keystore File</strong></a></li>
        <li><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-are-the-different-formats-of-a-private-key" target="_blank" rel="noopener"><strong>What are these Different Formats?</a></strong></li>
      </ul>

    </section>

  </article>


  <article role="main" class="block__wrap gen__3" ng-show="showPaperWallet">

    <section class="block__main gen__3--inner">

      <br />

      <h1> Save your <code translate="x_PrivKey">Private Key (unencrypted)</code></h1>
      <input aria-label="{{'x_PrivKey'|translate}}" aria-describedby="x_PrivKeyDesc"
             value="{{wallet.getPrivateKeyString()}}"
             class="form-control"
             type="text"
             readonly="readonly"
             style="max-width: 50rem;margin: auto;"/>

      <br />

      <h1 translate="x_Print">Print Paper Wallet:</h1>
      <a tabindex="0" aria-label="{{'x_Print'|translate}}" aria-describedby="x_PrintDesc" role="button" class="btn btn-primary" ng-click="printQRCode()" translate="x_PrintShort">PRINT</a>

      <br /><br />

      <a class="btn btn-default btn-sm" ng-click="getAddress()"> Next: Save your Address </a>

    </section>

    <section class="block__help">
      <h2>Guides &amp; FAQ</h2>
      <ul>
        <li><strong><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/how-do-i-save-slash-backup-my-wallet" target="_blank" rel="noopener"><strong>How to Save & Backup Your Wallet.</strong></a></li>
        <li><strong><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/protecting-yourself-and-your-funds" target="_blank" rel="noopener"><strong>Preventing loss &amp; theft of your funds.</strong></a></li>
        <li><strong><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-are-the-different-formats-of-a-private-key" target="_blank" rel="noopener">What are these Different Formats?</a></strong></li>
      </ul>

      <h2> Why Should I? </h2>
      <ul>
        <li> To have a secondary backup. </li>
        <li> In case you ever forget your password. </li>
        <li> <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/how-do-i-safely-slash-offline-slash-cold-storage-with-myetherwallet" target="_blank" rel="noopener">Cold Storage</a> </li>
      </ul>

      <h2> Pro-Tip </h2>
      <ul><li translate="x_PrintDesc"></li></ul>

    </section>

  </article>

  <article class="text-left" ng-show="showGetAddress">
    <div class="clearfix collapse-container">
      <div ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h1 traslate="SWAP_unlock">Unlock your wallet to see your address</h1>
        <p translate="x_AddessDesc"></p>
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
