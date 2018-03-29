<main class="tab-pane active"
      ng-if="globalService.currentTab==globalService.tabs.addWallet.id"
      ng-controller='addWalletCtrl'
      ng-cloak>

  <h1 translate="NAV_AddWallet"> Add Wallet </h1>



  <section class="row" id="walletselection">

    <article class="col-md-4 col-sm-6">
      <h4 translate="ADD_Label_1">
        What would you like to do?
      </h4>
      <label class="radio">
        <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="gennewwallet">
        <span translate="ADD_Radio_1">
          Generate New Wallet
        </span>
      </label>
      <label class="radio">
        <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="fileupload">
        <span translate="x_Keystore2">
          Keystore File
        </span>
      </label>
      <label class="radio">
        <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="pasteprivkey">
        <span translate="x_PrivKey2">
          Private Key
        </span>
      </label>
      <label class="radio">
         <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="pastemnemonic">
         <span translate="x_Mnemonic">
          Mnemonic
        </span>
       </label>
      <label class="radio">
        <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="watchonlyaccount">
        <span translate="ADD_Radio_4">
          Add an Account to Watch
        </span>
      </label>
    </article>



    <article class="col-md-4 col-sm-6">


      <!-- Generate New Wallet -->
      <section ng-show="walletType=='gennewwallet'" ng-init="showPass=true">

        <h4 translate="ADD_Radio_1">
          Generate New Wallet:
        </h4>

        <div class="form-group">
          <label translate="ADD_Label_2">
            Create a Nickname:
          </label>
          <input class="form-control"
                  type="text"
                  placeholder="{{'MYWAL_Nick' | translate }}"
                  ng-model="addAccount.nickName"
                  ng-change="newWalletChange('','showBtnGen')"
                  ng-keyup="$event.keyCode == 13 && importWalletToStorage()"/>
        </div>

        <div class="form-group">
          <label translate="GEN_Label_1">
            Create a Password: (at least 9 characters)
          </label>
          <div class="input-group">
            <input type="{{showPass && 'password' || 'text'}}"
                   class="form-control"
                   placeholder="{{'GEN_Placeholder_1' | translate }}"
                   ng-class="isStrongPass(addAccount.password) ? 'valid' : 'invalid'"
                   ng-model="addAccount.password"
                   ng-change="newWalletChange('','showBtnGen')"
                   ng-keyup="$event.keyCode == 13 && generateWallet()"/>
            <span class="input-group-addon eye"
                  ng-click="showPass=!showPass">
            </span>
          </div>
        </div>

      </section>
      <!-- / Generate New Wallet -->



      <!-- Select Your Wallet File -->
      <section ng-show="walletType=='fileupload'">

        <h4 translate="ADD_Radio_2_alt">
          Select Your Wallet File:
        </h4>

        <div class="form-group">
          <input style="display:none;"
                 type="file"
                 on-read-file="showContent($fileContent)"
                 id="fselector"/>
          <a class="file-input btn btn-block btn-default btn-file marg-v-sm"
             ng-click="openFileDialog()"
             translate="ADD_Radio_2_short">
               SELECT WALLET FILE...
          </a>
        </div>

        <div class="form-group" ng-show="requireFPass">
          <p translate="ADD_Label_3">
            Your file is encrypted. Please enter the password:
          </p>
          <input class="form-control"
                 type="password"
                 placeholder="{{'x_Password' | translate }}"
                 ng-model="filePassword"
                 ng-change="onFilePassChange()" />
        </div>

      </section>




      <!-- Paste Your Private Key -->
      <section ng-show="walletType=='pasteprivkey'">
        <h4 translate="ADD_Radio_3">
          Paste your private key:
        </h4>

        <div class="form-group">
          <textarea rows="4"
                    class="form-control"
                    placeholder="{{'x_PrivKey2' | translate }}"
                    ng-model="manualprivkey"
                    ng-change="onPrivKeyChange()"
                    ng-keyup="$event.keyCode == 13 && decryptWallet()">
          </textarea>
        </div>

        <div class="form-group" ng-show="requirePPass">
          <p translate="ADD_Label_3">
            Your file is encrypted. Please enter the password:
          </p>
          <input class="form-control"
                 type="password"
                 placeholder="{{'x_Password' | translate }}"
                 ng-model="privPassword"
                 ng-change="onPrivKeyPassChange()"
                 ng-keyup="$event.keyCode == 13 && decryptWallet()" />
        </div>

      </section>





      <!-- Paste Your Mnemonic -->
      <section ng-show="walletType=='pastemnemonic'">
        <h4 translate="ADD_Radio_5">
          Paste your mnemonic:
        </h4>
        <div class="form-group">
          <textarea rows="4"
                    class="form-control"
                    placeholder="{{'x_Mnemonic' | translate }}"
                    ng-model="manualmnemonic"
                    ng-change="onMnemonicChange()"
                    ng-keyup="$event.keyCode == 13 && decryptWallet()">
          </textarea>
        </div>
      </section>





      <!-- Add an Account to Watch -->
      <section ng-show="walletType=='watchonlyaccount'">

        <h4 translate="ADD_Label_4">
          Add an Account to Watch:
        </h4>

        <p class="text-danger" translate="ADD_Warning_1">
          You can add any account to "watch" on the wallets tab without uploading a private key. This does ** not ** mean you have access to this wallet, nor can you transfer Ether from it.
        </p>

        <div class="form-group">
          <label translate="ADD_Label_2">
            Create a Nickname:
          </label>
          <input class="form-control"
                 type="text"
                 placeholder="{{'MYWAL_Nick' | translate }}"
                 ng-model="addAccount.nickName"
                 ng-change="watchOnlyChange()"/>
        </div>

        <div class="form-group">
          <label translate="ADD_Label_5">
            Enter the Address:
          </label>
          <input class="form-control"
                 type="text"
                 placeholder="0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"
                 ng-model="addAccount.address"
                 ng-change="watchOnlyChange()"
                 ng-keyup="$event.keyCode == 13 && addWatchOnly()"/>
        </div>

      </section>



    </article>






    <article class="col-md-4 col-sm-6">

      <div ng-show="showBtnGen">
        <h4 translate="NAV_GenerateWallet">
          Generate Wallet
        </h4>
        <div class="form-group">
          <a ng-click="generateWallet()"
             class="btn btn-primary btn-block"
             translate="NAV_GenerateWallet">
            Generate Wallet
          </a>
        </div>
      </div>

      <div ng-show="showBtnUnlock">
        <h4 translate="ADD_Label_6">
          Unlock your Wallet
        </h4>
        <div class="form-group">
          <a ng-click="decryptWallet()"
             class="btn btn-primary btn-block"
             translate="ADD_Label_6_short">
               Unlock your Wallet
          </a>
        </div>
      </div>

      <div ng-show="showBtnAdd">
        <h4 translate="ADD_Label_7">
          Add Account
        </h4>
        <div class="form-group">
          <a ng-click="addWatchOnly()"
             class="btn btn-primary btn-block"
             translate="ADD_Label_7">
               Add Account
          </a>
        </div>
      </div>

      <div ng-bind-html="addWalletStats"></div>

    </article>




  </section> <!-- / id="walletselection" -->






  <article class="row" ng-if="showAddWallet">

    <hr />

    <!-- Sidebar -->
    <section class="col-sm-4">

      <h5 translate="sidebar_AccountAddr">
        Account Address:
      </h5>

      <ul class="account-info">
        <div class="addressIdenticon med float"
             title="Address Indenticon"
             blockie-address="{{wallet.getAddressString()}}"
             watch-var="wallet">
        </div>
        <span class="mono wrap">
          {{ wallet.getChecksumAddressString() }}
        </span>
      </ul>

      <h5 translate="sidebar_AccountBal">
        Account Balance:
      </h5>

      <ul class="account-info">
        <li>
          <strong>
            {{etherBalance}}
          </strong>
          ETH
        </li>
      </ul>

      <h5 translate="sidebar_Equiv">
        Equivalent Values:
      </h5>

      <ul class="account-info">
        <li>
          <strong>
            {{usdBalance}}
          </strong>
          USD
        </li>
        <li>
          <strong>
            {{eurBalance}}
          </strong>
          EUR
        </li>
        <li>
          <strong>
            {{btcBalance}}
          </strong>
          BTC
        </li>
      </ul>

      <a ng-click="globalService.currentTab=globalService.tabs.swap.id"
         class="btn btn-primary btn-xs">
           Swap via Bity
      </a>

      <h5 translate="sidebar_TransHistory">
        Transaction History:
      </h5>
      <ul class="account-info">
        <li>
          <a href="https://etherscan.io/address/{{wallet.getAddressString()}}"
             target="_blank"
             rel="noopener noreferrer">
               https://etherscan.io/address/ {{wallet.getAddressString()}}
          </a>
        </li>
      </ul>
    </section>
    <!-- / Sidebar -->






    <!-- Content -->
    <div class="col-sm-8">

      <h4 translate="NAV_AddWallet"> Add Wallet </h4>

      <div class="form-group">
        <label translate="ADD_Label_2">
          Create a Nickname:
        </label>
        <input class="form-control"
               type="text"
               placeholder="{{'MYWAL_Nick' | translate }}"
               ng-model="addAccount.nickName"
               ng-change="newWalletChange('','showBtnAddWallet')" />
      </div>

      <div class="form-group" ng-show="showPassTxt">

        <label translate="GEN_Label_1">
          Enter a strong password (at least 9 characters)
        </label>

        <div class="input-group">

          <input type="{{showPass && 'password' || 'text'}}"
                 class="form-control"
                 placeholder="{{'GEN_Placeholder_1' | translate }}"
                 ng-model="addAccount.password"
                 ng-class="isStrongPass(addAccount.password) ? 'valid' : 'invalid'"
                 ng-change="newWalletChange('','showBtnAddWallet')"
                 ng-keyup="$event.keyCode == 13 && importWalletToStorage()" />

          <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>

        </div>

      </div>

      <div class="form-group" ng-show="showBtnAddWallet">
        <a class="btn btn-info btn-block"
           ng-click="importWalletToStorage()"
           translate="NAV_AddWallet">
              ADD WALLET
        </a>
      </div>


    </div>

  </article>


  <!-- MODAL -->
  <article class="modal fade"
           id="mnemonicModel"
           tabindex="-1"
           role="dialog"
           aria-labelledby="Mnemonic Phrase Modal">

    <section class="modal-dialog">

      <section class="modal-content">

        <div class="modal-body" role="document">

          <button aria-label="Close"
                  type="button"
                  class="close"
                  data-dismiss="modal">
                    &times;
          </button>

          <!-- Select HD Path -->
          <h3 id="modalTitle" class="modal-title" translate="ADD_Radio_5_Path">
            Select HD derivation path:
          </h3>

          <table class="small table table-striped table-mnemonic">

            <tr>
              <th> Path </th>
              <th> Used By </th>
            </tr>

            <tr>
              <td>
                <label class="radio">
                  <input aria-describedby="Path: Jaxx, Metamask, Exodus, imToken - {{HDWallet.defaultDPath}}"
                         ng-change="onHDDPathChange()"
                         ng-model="HDWallet.dPath"
                         type="radio"
                         value="{{HDWallet.defaultDPath}}"/>
                  <span ng-bind="HDWallet.defaultDPath"></span>
                </label>
              </td>
              <td> Jaxx, Metamask, Exodus, imToken &amp; TREZOR (ETH)</td>
            </tr>

            <tr>
              <td>
                <label class="radio">
                  <input aria-describedby="Path: Ledger (ETH) {{HDWallet.ledgerPath}}"
                         ng-change="onHDDPathChange()"
                         ng-model="HDWallet.dPath"
                         type="radio"
                         value="{{HDWallet.ledgerPath}}"/>
                  <span ng-bind="HDWallet.ledgerPath"></span>
                </label>
              </td>
              <td> Ledger (ETH)</td>
            </tr>

            <tr>
              <td>
                <label class="radio">
                  <input aria-describedby="Path: Ledger (ETC) {{HDWallet.ledgerClassicPath}}"
                         ng-change="onHDDPathChange()"
                         ng-model="HDWallet.dPath"
                         type="radio"
                         value="{{HDWallet.ledgerClassicPath}}"/>
                  <span ng-bind="HDWallet.ledgerClassicPath"></span>
                </label>
              </td>
              <td> Ledger (ETC) </td>
            </tr>

            <tr>
              <td>
                <label class="radio">
                  <input aria-describedby="Path: TREZOR (ETC) {{HDWallet.trezorClassicPath}}"
                         ng-change="onHDDPathChange()"
                         ng-model="HDWallet.dPath"
                         type="radio"
                         value="{{HDWallet.trezorClassicPath}}"/>
                  <span ng-bind="HDWallet.trezorClassicPath"></span>
                </label>
              </td>
              <td> TREZOR (ETC) </td>
            </tr>

            <tr>
              <td>
                <label class="radio">
                  <input aria-describedby="Path: SingularDTV {{HDWallet.singularDTVPath}}"
                         ng-change="onHDDPathChange()"
                         ng-model="HDWallet.dPath"
                         type="radio"
                         value="{{HDWallet.singularDTVPath}}"/>
                  <span ng-bind="HDWallet.singularDTVPath"></span>
                </label>
              </td>
              <td> SingularDTV </td>
            </tr>

            <tr>
              <td>
                <label class="radio">
                  <input aria-describedby="Path: TREZOR - TESTNET - {{HDWallet.trezorTestnetPath}}"
                         ng-change="onHDDPathChange()"
                         ng-model="HDWallet.dPath"
                         type="radio"
                         value="{{HDWallet.trezorTestnetPath}}"/>
                  <span ng-bind="HDWallet.trezorTestnetPath"></span>
                </label>
              </td>
              <td> TREZOR (TESTNET) </td>
            </tr>

            <tr class="mnemonic-custom-row">
              <td>
                <label class="radio">
                  <input aria-describedby="Path: Enter your own - {{HDWallet.customDPath}}"
                         ng-change="onHDDPathChange()"
                         ng-model="HDWallet.dPath"
                         type="radio"
                         value="{{HDWallet.customDPath}}" />
                  <input aria-describedby="Path: Enter your own - {{HDWallet.customDPath}}"
                         type="text" class="form-control"
                         ng-model="HDWallet.customDPath"
                         ng-change="onCustomHDDPathChange()" />
                </label>
              </td>
              <td> Your Custom Path </td>
            </tr>

          </table>
          <!-- END Select HD Path -->





          <!-- Select Address -->
          <hr />

          <h3 id="modalTitle2" class="modal-title" translate="MNEM_1">
            Please select the address you would like to interact with.
          </h3>

          <p class="small" translate="MNEM_2">
            Your single HD mnemonic phrase can access a number of wallets / addresses.
          </p>

          <table class="small table table-striped table-mnemonic">

            <tr>
              <th translate="x_Address">
                Address
              </th>
              <th translate="MYWAL_Bal">
                Balance
              </th>
              <th translate="sidebar_TokenBal" class="text-center">
                Token<br>Balances
              </th>
            </tr>

            <tr ng-repeat="wallet in HDWallet.wallets track by $index">

              <td>
                <label>
                  <input aria-describedby="modalTitle2"
                         aria-label="Unlock wallet with {{wallet.getBalance()}} {{nodeType}}. Address: {{wallet.getChecksumAddressString()}}"
                         name="addressSelect"
                         ng-model="HDWallet.id"
                         type="radio"
                         value="{{$index}}" />
                  {{wallet.getChecksumAddressString()}}
                </label>
              </td>

              <td>
                <a href="{{ajaxReq.blockExplorerAddr.replace('[[address]]', wallet.getAddressString())}}"
                     target="_blank"
                     rel="noopener noreferrer">
                  {{wallet.getBalance()}} {{nodeType}}
                </a>
              </td>

              <td class="text-center">
                <a href="https://ethplorer.io/address/{{wallet.getAddressString()}}"
                     target="_blank"
                     rel="noopener noreferrer"
                     title="https://ethplorer.io/address/{{wallet.getAddressString()}}">
                  <img src="images/icon-external-link.svg" title="https://ethplorer.io/address/{{wallet.getAddressString()}}" ng-click="removeTokenFromLocal(token.symbol)" ng-show="token.type!=='default'" />
                </a>
              </td>

            </tr>

            <tr class="m-addresses">

              <td>
                <a ng-click="AddRemoveHDAddresses(false)"
                   ng-show="HDWallet.numWallets > 5"
                   role="link"
                   tabindex="0"
                   translate="MNEM_prev">
                      Previous Addresses
                </a>
              </td>

              <td></td>

              <td>
                <a ng-click="AddRemoveHDAddresses(true)"
                   role="link"
                   tabindex="0"
                   translate="MNEM_more">
                      More Addresses
                </a>
              </td>
            </tr>
          </table>

          <!-- END Select Address -->
        </div>




        <div class="modal-footer">
          <button aria-label="Cancel - Will close dialog"
                  class="btn btn-default"
                  data-dismiss="modal"
                  role="button"
                  tabindex="0"
                  translate="x_Cancel">
                     Cancel
          </button>

          <button aria-label="Unlock this Wallet"
                  class="btn btn-primary"
                  ng-click="setHDWallet()"
                  role="button"
                  tabindex="0"
                  translate="ADD_Label_6">
                     Access Wallet
          </button>
        </div>





      </section>

    </section>

  </article>

</main>
