<main class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.walletAdd.id" ng-controller='walletAddCtrl'  ng-cloak>
  <h1 translate="WALL_Add"> Add Wallet </h1>

  <section class="row" id="walletselection">

    <article class="col-md-4 col-sm-6">
      <h4 translate="DECRYPT_Label_1"> What would you like to do? </h4>
        <label class="radio">
          <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="gennewwallet">
          <span translate="WALL_GenerateNew">Generate New Wallet</span>
        </label>
        <label class="radio">
          <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="fileupload">
          <span translate="x_Keystore2">Keystore File</span>
        </label>
        <label class="radio">
          <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="pasteprivkey">
          <span translate="x_PrivKey2">Private Key</span>
        </label>
        <label class="radio">
           <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="pastemnemonic">
           <span translate="x_Mnemonic">Mnemonic</span>
         </label>
        <label class="radio">
          <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="watchonlyaccount">
          <span translate="ACCOUNT_AddWatch">Add an Account to Watch</span>
        </label>
    </article>

    <article class="col-md-4 col-sm-6">


      <!-- Generate New Wallet -->
      <div ng-show="walletType=='gennewwallet'" ng-init="showPass=true">
        <h4 translate="WALL_GenerateNew"> Generate New Wallet: </h4>

        <div class="form-group">
          <label translate="DECRYPT_Label_2"> Create a Nickname: </label>
          <input class="form-control" type="text" placeholder="{{'WALL_Nickname' | translate }}" ng-model="addAccount.nickName" ng-change="newWalletChange('','showBtnGen')" ng-keyup="$event.keyCode == 13 && importWalletToStorage()"/>
        </div>
        <div class="form-group">
          <label translate="PW_Enter"> Create a Password: (at least 9 characters)</label>
          <div class="input-group">
            <input type="{{showPass && 'password' || 'text'}}" class="form-control" placeholder="{{'PW_Enter' | translate }}" ng-class="isStrongPass(addAccount.password) ? 'valid' : 'invalid'" ng-model="addAccount.password" ng-change="newWalletChange('','showBtnGen')" ng-keyup="$event.keyCode == 13 && generateWallet()"/>
            <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
          </div>
        </div>

      </div>
      <!-- / Generate New Wallet -->


      <!-- Select Your Wallet File -->
      <div ng-show="walletType=='fileupload'">
        <h4 translate="DECRYPT_Radio_2_alt">Select Your Wallet File: </h4>
        <div class="form-group">
          <input style="display:none;" type="file" on-read-file="showContent($fileContent)" id="fselector"/>
          <a class="file-input btn btn-block btn-default btn-file marg-v-sm" ng-click="openFileDialog()" translate="DECRYPT_Radio_2_short">SELECT WALLET FILE...</a>

        </div>
        <div class="form-group" ng-show="requireFPass">
          <p translate="DECRYPT_Label_3"> Your file is encrypted. Please enter the password: </p>
          <input class="form-control" type="password" placeholder="{{'PW_' | translate }}" ng-model="filePassword" ng-change="onFilePassChange()" />
        </div>
      </div>

      <!-- Paste/Type Your Private Key -->
      <div ng-show="walletType=='pasteprivkey'">
        <h4 translate="DECRYPT_Radio_3"> Paste / type your private key: </h4>
        <div class="form-group">
          <textarea rows="4" class="form-control" placeholder="{{'x_PrivKey2' | translate }}" ng-model="manualprivkey" ng-change="onPrivKeyChange()" ng-keyup="$event.keyCode == 13 && decryptWallet()"></textarea>
        </div>
        <div class="form-group" ng-show="requirePPass">
          <p translate="DECRYPT_Label_3"> Your file is encrypted. Please enter the password: </p>
          <input class="form-control" type="password" placeholder="{{'PW_' | translate }}" ng-model="privPassword" ng-change="onPrivKeyPassChange()" ng-keyup="$event.keyCode == 13 && decryptWallet()"/>
        </div>
      </div>

      <!-- Paste/Type Your Mnemonic -->
      <div ng-show="walletType=='pastemnemonic'">
        <h4 translate="MNEM_Enter"> Paste / type your mnemonic: </h4>
        <div class="form-group">
          <textarea rows="4" class="form-control" placeholder="{{'x_Mnemonic' | translate }}" ng-model="manualmnemonic" ng-change="onMnemonicChange()" ng-keyup="$event.keyCode == 13 && decryptWallet()"></textarea>
        </div>
      </div>

      <!-- Add an Account to Watch -->
      <div ng-show="walletType=='watchonlyaccount'">
        <h4 translate="DECRYPT_Label_4"> Add an Account to Watch: </h4>
        <p class="text-danger" translate="WARN_03">You can add any account to "watch" on the wallets tab without uploading a private key. This does ** not ** mean you have access to this wallet, nor can you transfer Ether from it. </p>
        <div class="form-group">
          <label translate="DECRYPT_Label_2"> Create a Nickname: </label>
          <input class="form-control" type="text" placeholder="{{'WALL_Nickname' | translate }}" ng-model="addAccount.nickName" ng-change="watchOnlyChange()"/>
        </div>
        <div class="form-group">
          <label translate="DECRYPT_Label_5"> Enter the Address: </label>
          <input class="form-control" type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="addAccount.address" ng-change="watchOnlyChange()" ng-keyup="$event.keyCode == 13 && addWatchOnly()"/>
        </div>
      </div>

    </article>

    <article class="col-md-4 col-sm-6" >
        <div ng-show="showBtnGen">
          <h4 translate="WALL_Create"> Generate Wallet </h4>
          <div class="form-group"><a ng-click="generateWallet()" class="btn btn-primary btn-block" translate="WALL_Create">Generate Wallet</a></div>
        </div>
        <div ng-show="showBtnUnlock">
          <h4 translate="WALL_Unlock"> Unlock your Wallet </h4>
          <div class="form-group"><a ng-click="decryptWallet()" class="btn btn-primary btn-block" translate="WALL_Unlock_Short">Unlock your Wallet</a></div>
        </div>
        <div ng-show="showBtnAdd">
          <h4 translate="ACCOUNT_Add"> Add Account </h4>
          <div class="form-group"><a ng-click="addWatchOnly()" class="btn btn-primary btn-block" translate="ACCOUNT_Add">Add Account</a></div>
        </div>
        <div ng-bind-html="walletAddStats"></div>
    </article>

  </section>

  <article class="row" ng-if="showwalletAdd">

    <hr />

    <!-- Sidebar -->
    <div class="col-sm-4">
      <h5 translate="ACCOUNT_Address">Account Address:</h5>
      <ul class="account-info">
      <div class="addressIdenticon med float" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
      <span class="mono wrap">{{wallet.getChecksumAddressString()}}</span>
      </ul>
      <h5 translate="ACCOUNT_Balance">Account Balance:</h5>
      <ul class="account-info">
        <li><strong>{{etherBalance}}</strong> ETH </li>
      </ul>
      <h5 translate="SIDEBAR_Equiv"> Equivalent Values: </h5>
      <ul class="account-info">
        <li><strong>{{usdBalance}}</strong> USD</li>
        <li><strong>{{eurBalance}}</strong> EUR</li>
        <li><strong>{{btcBalance}}</strong> BTC</li>
      </ul>

      <a ng-click="globalService.currentTab=globalService.tabs.swap.id" class="btn btn-primary btn-xs">Swap via Bity</a>

      <h5 translate="TX_History"> Transaction History: </h5>
      <ul class="account-info">
        <li><a href="https://etherscan.io/address/{{wallet.getAddressString()}}" target="_blank" rel="noopener">https://etherscan.io/address/ {{wallet.getAddressString()}}</a></li>
      </ul>
    </div>

    <!-- / Sidebar -->

    <!-- Content -->
    <div class="col-sm-8">
      <h4 translate="WALL_Add">Add Wallet</h4>
      <div class="form-group">
        <label translate="DECRYPT_Label_2"> Create a Nickname: </label>
        <input class="form-control" type="text" placeholder="{{'WALL_Nickname' | translate }}" ng-model="addAccount.nickName" ng-change="newWalletChange('','showBtnAddWallet')"/>
      </div>
      <div class="form-group" ng-show="showPassTxt">
        <label translate="PW_Enter"> Enter a strong password (at least 9 characters)</label>
        <div class="input-group">
          <input
            type="{{showPass && 'password' || 'text'}}"
            class="form-control"
            placeholder="{{'PW_Enter' | translate }}"
            ng-model="addAccount.password"
            ng-class="isStrongPass(addAccount.password) ? 'valid' : 'invalid'"
            ng-change="newWalletChange('','showBtnAddWallet')"
            ng-keyup="$event.keyCode == 13 && importWalletToStorage()"
          />
          <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
        </div>
      </div>
      <div class="form-group" ng-show="showBtnAddWallet">
        <a class="btn btn-info btn-block" ng-click="importWalletToStorage()" translate="WALL_Add">ADD WALLET </a>
      </div>
    </div>

  </article>


<!-- MODAL -->
  <article class="modal fade" id="mnemonicModel" tabindex="-1">
    <section class="modal-dialog">
      <section class="modal-content">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <!-- Select HD Path -->
          <span ng-show="showDPaths">
            <h3 class="modal-title" translate="MNEM_Enter_Path"> Select HD derivation path:</h3>
            <label class="radio">
              <input type="radio" id="hd_derivation_path_default" ng-model="HDWallet.dPath" value="{{HDWallet.defaultDPath}}" ng-change="onHDDPathChange()"/>
              <span ng-bind="HDWallet.defaultDPath"></span>
              <span ng-if="!showTrezorSeparate">(default with TREZOR)</span>
              <span ng-if="showTrezorSeparate">(default without TREZOR)</span>
            </label>
            <label class="radio">
              <input type="radio" id="hd_derivation_path_alternative" ng-model="HDWallet.dPath" value="{{HDWallet.alternativeDPath}}" ng-change="onHDDPathChange()"/>
              <span ng-bind="HDWallet.alternativeDPath"></span>
              <span>(Ledger)</span>
            </label>
            <label class="radio" ng-if="showTrezorSeparate">
              <input type="radio" id="hd_derivation_path_trezor" ng-model="HDWallet.dPath" value="{{getTrezorPath()}}" ng-change="onHDDPathChange()" />
              <span ng-bind="getTrezorPath()"></span>
              <span>(Trezor)</span>
            </label>
            <label class="radio">
              <input type="radio" id="hd_derivation_path_custom" ng-model="HDWallet.dPath" value="{{HDWallet.customDPath}}" ng-change="onHDDPathChange()" />
              <input type="text" class="form-control" style="display:inline;width:70%;max-width:15rem;" ng-model="HDWallet.customDPath" id="hd_derivation_path_custom_value" ng-change="onCustomHDDPathChange()" />
              <span translate="MNEM_Enter_PathCustom">(Custom)</span>
            </label>
          </span>
          <!-- END Select HD Path --><!-- Select Address --><hr />
          <h3 class="modal-title" translate="MNEM_1">Please select the address you would like to interact with.</h3>
          <p class="small" translate="MNEM_2">Your single HD mnemonic phrase can access a number of wallets / addresses.</p>
          <table class="small table table-striped table-mnemonic"><tr><th></th>
            <th translate="ADDR_">Address</th>
            <th translate="ACCOUNT_Balance">Balance</th>
          </tr>
          <tr ng-repeat="wallet in HDWallet.wallets track by $index">
            <td><label>
                    <input type="radio" name="addressSelect" value="{{$index}}" ng-model="HDWallet.id"/>
                </label></td>
            <td>{{wallet.getChecksumAddressString()}}</td>
            <td>{{wallet.getBalance()}} ETH</td>
          </tr>
          <tr class="m-addresses">
            <td class="small">
            <a ng-show="HDWallet.numWallets > 5" ng-click="AddRemoveHDAddresses(false)" translate="MNEM_prev">Previous Addresses</a>
            </td>
            <td></td>
            <td class="small"><a ng-click="AddRemoveHDAddresses(true)" translate="MNEM_more">More Addresses</a></td>
          </tr></table>
          <!-- END Select Address -->
        </div>
        <div class="modal-footer">
          <button class="btn btn-default" data-dismiss="modal" translate="x_Cancel">Cancel</button>
          <button class="btn btn-primary" ng-click="setHDWallet()" translate="WALL_Unlock_Short">Access Wallet</button>
        </div>
      </section>
    </section>
  </article>
  <!-- / MODAL -->


</main>
