<main class="tab-pane block--container active"
      ng-if="globalService.currentTab==globalService.tabs.generateWallet.id"
      ng-controller='walletGenCtrl'
      role="main"
      ng-cloak>

  <article class="block__wrap gen__1" ng-show="!wallet && !showGetAddress">
    <section class="block__main gen__1--inner">
      <br />
      <h1 translate="NAV_GenerateWallet" aria-live="polite">
        Create New Wallet
      </h1>
      <h4 translate="GEN_Label_1">
        Enter password
      </h4>
      <div class="input-group">
        <input name="password"
             class="form-control"
             type="{{showPass && 'password' || 'text'}}"
             placeholder="{{'GEN_Placeholder_1' | translate }}"
             ng-model="password"
             ng-class="isStrongPass() ? 'is-valid' : 'is-invalid'"
             aria-label="{{'GEN_Label_1' | translate}}"
             />
        <span tabindex="0"
              aria-label="make password visible"
              role="button"
              class="input-group-addon eye"
              ng-click="showPass=!showPass">
        </span>
      </div>
      <a tabindex="0"
         role="button"
         class="btn btn-primary"
         ng-click="genNewWallet()"
         translate="NAV_GenerateWallet">
           Generate Wallet
      </a>
      @@include('./apple-mobile-modal.tpl', { "site": "" } )
      <p translate="x_PasswordDesc"></p>
      <div class="text-center">
        <strong>
          <a href="https://kb.myetherwallet.com/getting-started/creating-a-new-wallet-on-myetherwallet.html"
             target="_blank"
             rel="noopener noreferrer"
             translate="GEN_Help_5">
               How to Create a Wallet
          </a>
          &nbsp;&nbsp;&middot;&nbsp;&nbsp;
          <a href="https://kb.myetherwallet.com/getting-started/getting-started-new.html"
             target="_blank"
             rel="noopener noreferrer"
             translate="GEN_Help_6">
               Getting Started
          </a>
        </strong>
      </div>
      <br>
    </section>

    <section class="block__help">

      <h2 translate="GEN_Help_0">
        Already have a wallet somewhere?
      </h2>

      <ul>
        <li>
          <p>
            <strong>
              Ledger / TREZOR / BitBox / Secalot
            </strong>:
            <span translate="GEN_Help_1">
              Use your
            </span>
            <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id">
              hardware wallet
            </a>.
            <span translate="GEN_Help_3">
              Your device * is * your wallet.
            </span>
          </p>
        </li>
      </ul>

      <ul>
        <li>
          <p>
            <strong>
              MetaMask
            </strong>
            <span>
              Connect via your
            </span>
            <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id">
              MetaMask Extension
            </a>.
            <span translate="GEN_Help_MetaMask">
              So easy! Keys stay in MetaMask, not on a phishing site! Try it today.
            </span>
          </p>
        </li>
      </ul>

      <ul>
        <li>
          <p>
            <strong>
              Jaxx / imToken
            </strong>
            <span translate="GEN_Help_1">Use your</span>
            <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id" translate="x_Mnemonic">
              Mnemonic Phrase
            </a>
            <span translate="GEN_Help_2">
              to access your account.
            </span>
        </p>
        </li>
      </ul>

      <ul>
        <li>
          <p>
            <strong>
              Mist / Geth / Parity:
            </strong>
            <span translate="GEN_Help_1">
              Use your
            </span>
            <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id" translate="x_Keystore2">
              Keystore File (UTC / JSON)
            </a>
            <span translate="GEN_Help_2">
              to access your account.
            </span>
          </p>
        </li>
      </ul>

    </section>

  </article>


  <article role="main" class="block__wrap gen__2" ng-show="wallet && !showPaperWallet" > <!-- -->

    <section class="block__main gen__2--inner">
      <br />
      <h1 translate="GEN_Label_2">
        Save your Keystore File (UTC / JSON)
      </h1>

      <a tabindex="0" role="button"
         class="btn btn-primary"
         href="{{blobEnc}}"
         download="{{encFileName}}"
         aria-label="{{'x_Download'|translate}} {{'x_Keystore'|translate}}"
         aria-describedby="x_KeystoreDesc"
         ng-click="downloaded()"
         rel="noopener noreferrer">
        <span translate="x_Download">
          DOWNLOAD
        </span>
        <span translate="x_Keystore2">
          Keystore File (UTC / JSON)
        </span>
      </a>

      <div class="warn">
        <p class="GEN_Warning_1">
          **Do not lose it!** It cannot be recovered if you lose it.
        </p>
        <p class="GEN_Warning_2">
          **Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site.
        </p>
        <p class="GEN_Warning_3">
          **Make a backup!** Secure it like the millions of dollars it may one day be worth.
        </p>
      </div>

      <p>
        <a tabindex="0"
           role="button"
           class="btn btn-danger"
           ng-class="fileDownloaded ? '' : 'disabled' "
           ng-click="continueToPaper()">
            <span translate="GET_ConfButton">
              I understand. Continue.
            </span>
        </a>
      </p>

    </section>

    <section class="block__help">
      <h2 translate="GEN_Help_8">
        Not Downloading a File?
      </h2>
      <ul>
        <li translate="GEN_Help_9">
          Try using Google Chrome
        </li>
        <li translate="GEN_Help_10">
          Right click &amp; save file as. Filename:
        </li>
        <input value="{{encFileName}}" class="form-control input-sm" />
      </ul>

      <h2 translate="GEN_Help_11">
        Don't open this file on your computer
      </h2>
      <ul>
        <li translate="GEN_Help_12">
          Use it to unlock your wallet via MyEtherWallet (or Mist, Geth, Parity &amp; other wallet clients.)
        </li>
      </ul>

      <h2 translate="GEN_Help_4">Guides &amp; FAQ</h2>
      <ul>
        <li>
          <a href="https://kb.myetherwallet.com/getting-started/backing-up-your-new-wallet.html" target="_blank" rel="noopener noreferrer">
            <strong translate="GEN_Help_13">
              How to Back Up Your Keystore File
            </strong>
          </a>
        </li>
        <li>
          <a href="https://kb.myetherwallet.com/private-keys-passwords/difference-beween-private-key-and-keystore-file.html" target="_blank" rel="noopener noreferrer">
            <strong translate="GEN_Help_14">
              What are these Different Formats?
            </strong>
          </a>
        </li>
      </ul>

    </section>

  </article>


  <article role="main" class="block__wrap gen__3" ng-show="showPaperWallet">

    <section class="block__main gen__3--inner">

      <br />

      <h1 translate="GEN_Label_5"> Save your Private Key</h1>
      <textarea aria-label="{{'x_PrivKey'|translate}}"
             aria-describedby="{{'x_PrivKeyDesc'|translate}}"
             class="form-control"
             readonly="readonly"
             rows="3"
             style="max-width: 50rem;margin: auto;"
      >{{wallet.getPrivateKeyString()}}</textarea>
      <br />

      <a tabindex="0"
         aria-label="{{'x_Print'|translate}}"
         aria-describedby="x_PrintDesc"
         role="button"
         class="btn btn-primary"
         ng-click="printQRCode()"
         translate="x_Print">
          PRINT
      </a>

      <div class="warn">
        <p>
          **Do not lose it!** It cannot be recovered if you lose it.
        </p>
        <p>
          **Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site.
        </p>
        <p>
          **Make a backup!** Secure it like the millions of dollars it may one day be worth.
        </p>
      </div>

      <br />

      <a class="btn btn-default btn-sm" ng-click="getAddress()">
        <span translate="GEN_Label_3"> Save your Address </span> →
      </a>

    </section>

    <section class="block__help">
      <h2 translate="GEN_Help_4">
        Guides &amp; FAQ
      </h2>
      <ul>
        <li><a href="https://kb.myetherwallet.com/getting-started/backing-up-your-new-wallet.html" target="_blank" rel="noopener noreferrer">
          <strong translate="HELP_2a_Title">
            How to Save & Backup Your Wallet.
          </strong>
        </a></li>
        <li><a href="https://kb.myetherwallet.com/getting-started/protecting-yourself-and-your-funds.html" target="_blank" rel="noopener noreferrer">
          <strong translate="GEN_Help_15">Preventing loss &amp; theft of your funds.</strong>
        </a></li>
        <li><a href="https://kb.myetherwallet.com/private-keys-passwords/difference-beween-private-key-and-keystore-file.html" target="_blank" rel="noopener noreferrer">
          <strong translate="GEN_Help_16">What are these Different Formats?</strong>
        </a></li>
      </ul>

      <h2 translate="GEN_Help_17">
        Why Should I?
      </h2>
      <ul>
        <li translate="GEN_Help_18">
          To have a secondary backup.
        </li>
        <li translate="GEN_Help_19">
          In case you ever forget your password.
        </li>
        <li>
          <a href="https://kb.myetherwallet.com/offline/ethereum-cold-storage-with-myetherwallet.html" target="_blank" rel="noopener noreferrer" translate="GEN_Help_20">Cold Storage</a>
        </li>
      </ul>

      <h2 translate="x_PrintDesc"></h2>

    </section>

  </article>

  <article class="text-left" ng-show="showGetAddress">
    <div class="clearfix collapse-container">

      <div ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h1 traslate="GEN_Unlock">Unlock your wallet to see your address</h1>
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
