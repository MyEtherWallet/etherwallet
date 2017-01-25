<section class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.addWallet.id" ng-controller='addWalletCtrl'  ng-cloak>
  <h2 translate="NAV_AddWallet"> Add Wallet </h2>

  <section class="row" id="walletselection">

    <article class="col-md-4 col-sm-6">
      <h4 translate="ADD_Label_1"> What would you like to do? </h4>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="gennewwallet">
          <span translate="ADD_Radio_1">Generate New Wallet</span>
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="fileupload">
          <span translate="ADD_Radio_2">Select Your Wallet File (Keystore/JSON)</span>
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="pasteprivkey">
          <span translate="ADD_Radio_3">Paste/Type Your Private Key</span>
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="pastemnemonic">
          <span translate="ADD_Radio_5">Paste/Type Your Mnemonic</span>
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="watchonlyaccount">
          <span translate="ADD_Radio_4">Add an Account to Watch</span>
        </label>
      </div>
    </article>

    <article class="col-md-4 col-sm-6">

      <!-- Generate New Wallet -->
      <div ng-show="walletType=='gennewwallet'" ng-init="showPass=true">
        <h4 translate="ADD_Radio_1"> Generate New Wallet: </h4>

        <div class="form-group">
          <label translate="ADD_Label_2"> Create a Nickname: </label>
          <input class="form-control" type="text" placeholder="{{ 'MYWAL_Nick' | translate }}" ng-model="addAccount.nickName" ng-change="newWalletChange('nickNameStatus','showBtnGen')" ng-keyup="$event.keyCode == 13 && importWalletToStorage()"/>
        </div>
        <div class="form-group">
          <label translate="GEN_Label_1"> Create a Password: (at least 9 characters)</label>
          <div class="input-group">
            <input type="{{showPass && 'password' || 'text'}}" class="form-control" placeholder="{{ 'GEN_Placeholder_1' | translate }}" ng-class="isStrongPass(addAccount.password) ? 'valid' : 'invalid'" ng-model="addAccount.password" ng-change="newWalletChange('nickNameStatus','showBtnGen')" ng-keyup="$event.keyCode == 13 && generateWallet()"/>
            <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
          </div>
        </div>
        <div ng-bind-html="nickNameStatus"></div>
      </div>
      <!-- / Generate New Wallet -->

      <!-- Select Your Wallet File -->
      <div ng-show="walletType=='fileupload'">
        <h4 translate="ADD_Radio_2_alt">Select Your Wallet File: </h4>
        <div class="form-group">
          <input style="display:none;" type="file" on-read-file="showContent($fileContent)" id="fselector"/>
          <a class="file-input btn btn-block btn-default btn-file marg-v-sm" ng-click="openFileDialog()" translate="ADD_Radio_2_short">SELECT WALLET FILE...</a>
          <div id="fuploadStatus" ng-bind-html="fileStatus"></div>
        </div>
        <div class="form-group" ng-show="requireFPass">
          <p translate="ADD_Label_3"> Your file is encrypted. Please enter the password: </p>
          <input class="form-control" type="password" placeholder="{{ 'x_Password' | translate }}" ng-model="filePassword" ng-change="onFilePassChange()" />
        </div>
      </div>

      <!-- Paste/Type Your Private Key -->
      <div ng-show="walletType=='pasteprivkey'">
        <h4 translate="ADD_Radio_3"> Paste / type your private key: </h4>
        <div class="form-group">
          <textarea rows="4" class="form-control" placeholder="{{ 'x_PrivKey2' | translate }}" ng-model="manualprivkey" ng-change="onPrivKeyChange()" ng-keyup="$event.keyCode == 13 && decryptWallet()"></textarea>
        </div>
        <div class="form-group" ng-show="requirePPass">
          <p translate="ADD_Label_3"> Your file is encrypted. Please enter the password: </p>
          <input class="form-control" type="password" placeholder="{{ 'x_Password' | translate }}" ng-model="privPassword" ng-change="onPrivKeyPassChange()" ng-keyup="$event.keyCode == 13 && decryptWallet()"/>
        </div>
      </div>

      <!-- Paste/Type Your Mnemonic -->
      <div ng-show="walletType=='pastemnemonic'">
        <h4 translate="ADD_Radio_5"> Paste / type your mnemonic: </h4>
        <div class="form-group">
          <textarea rows="4" class="form-control" placeholder="{{ 'x_Mnemonic' | translate }}" ng-model="manualmnemonic" ng-change="onMnemonicChange()" ng-keyup="$event.keyCode == 13 && decryptWallet()"></textarea>
        </div>
        <div ng-show="showDPaths">
        <h4 translate="ADD_Radio_5_Path"> Select HD derivation path: </h4>
        <div class="form-group">
          <div class="radio">
            <label><input type="radio" id="hd_derivation_path_default" ng-model="HDWallet.dPath" value="{{ HDWallet.defaultDPath}}"/>
            <span ng-bind="HDWallet.defaultDPath"></span> <span translate="ADD_Radio_5_PathDefault">(default)</span></label>
          </div>
          <div class="radio">
            <label><input type="radio" id="hd_derivation_path_alternative" ng-model="HDWallet.dPath" value="{{ HDWallet.alternativeDPath}}"/>
            <span ng-bind="HDWallet.alternativeDPath"></span> <span translate="ADD_Radio_5_PathAlternative">(alternative)</span></label>
          </div>
          <div class="radio">
            <label><input type="radio" id="hd_derivation_path_custom" ng-model="HDWallet.dPath" value="{{HDWallet.customDPath}}"/>
            <input type="text" class="form-control" style="display: inline; width: 70%" ng-model="HDWallet.customDPath" id="hd_derivation_path_custom_value" ng-change="onCustomHDDPathChange()"/> <span translate="ADD_Radio_5_PathCustom">(custom)</label>
          </div>
        </div>
        </div>
      </div>

      <!-- Add an Account to Watch -->
      <div ng-show="walletType=='watchonlyaccount'">
        <h4 translate="ADD_Label_4"> Add an Account to Watch: </h4>
        <p class="text-danger" translate="ADD_Warning_1">You can add any account to "watch" on the wallets tab without uploading a private key. This does ** not ** mean you have access to this wallet, nor can you transfer Ether from it. </p>
        <div class="form-group">
          <label translate="ADD_Label_2"> Create a Nickname: </label>
          <input class="form-control" type="text" placeholder="{{ 'MYWAL_Nick' | translate }}" ng-model="addAccount.nickName" ng-change="watchOnlyChange()"/>
        </div>
        <div class="form-group">
          <label translate="ADD_Label_5"> Enter the Address: </label>
          <input class="form-control" type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="addAccount.address" ng-change="watchOnlyChange()" ng-keyup="$event.keyCode == 13 && addWatchOnly()"/>
        </div>
      </div>
      <div ng-bind-html="watchOnlyStatus"></div>
    </article>

    <article class="col-md-4 col-sm-6" >
        <div ng-show="showBtnGen">
          <h4 translate="NAV_GenerateWallet"> Generate Wallet </h4>
          <div class="form-group"><a ng-click="generateWallet()" class="btn btn-primary btn-block" translate="NAV_GenerateWallet">Generate Wallet</a></div>
        </div>
        <div ng-show="showBtnUnlock">
          <h4 translate="ADD_Label_6"> Unlock your Wallet </h4>
          <div class="form-group"><a ng-click="decryptWallet()" class="btn btn-primary btn-block" translate="ADD_Label_6_short">Unlock your Wallet</a></div>
        </div>
        <div ng-show="showBtnAdd">
          <h4 translate="ADD_Label_7"> Add Account </h4>
          <div class="form-group"><a ng-click="addWatchOnly()" class="btn btn-primary btn-block" translate="ADD_Label_7">Add Account</a></div>
        </div>
        <div ng-bind-html="addWalletStats"></div>
    </article>

  </section>

  <article class="row" ng-if="showAddWallet">
    <hr />

    <!-- Sidebar -->
    <div class="col-sm-4">

      <h4 translate="sidebar_AccountInfo"> Account Information: </h4>

      <div id="addressIdenticon" class="med"  title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>

      <div translate="sidebar_AccountAddr"> Account Address: </div>
      <ul class="account-info">
        <li class="mono wrap"> {{wallet.getChecksumAddressString()}} </li>
      </ul>

      <div translate="sidebar_AccountBal"> Account Balance: </div>
      <ul class="account-info">
        <li><strong>{{etherBalance}}</strong> ETH </li>
      </ul>

      <div translate="sidebar_Equiv"> Equivalent Values: </div>
      <ul class="account-info">
        <li><strong>{{usdBalance}}</strong> USD</li>
        <li><strong>{{eurBalance}}</strong> EUR</li>
        <li><strong>{{btcBalance}}</strong> BTC</li>
      </ul>

      <div translate="sidebar_TransHistory"> Transaction History: </div>
      <ul class="account-info">
        <li><a href="https://etherscan.io/address/{{wallet.getAddressString()}}" target="_blank">https://etherscan.io/address/ {{wallet.getAddressString()}}</a></li>
      </ul>

    </div>

    <!-- / Sidebar -->

    <!-- Content -->
    <div class="col-sm-8">
      <h4 translate="NAV_AddWallet">Add Wallet</h4>
      <div class="form-group">
        <label translate="ADD_Label_2"> Create a Nickname: </label>
        <input class="form-control" type="text" placeholder="{{ 'MYWAL_Nick' | translate }}" ng-model="addAccount.nickName" ng-change="newWalletChange('addStatus','showBtnAddWallet')"/>
      </div>
      <div class="form-group" ng-show="showPassTxt">
        <label translate="GEN_Label_1"> Enter a strong password (at least 9 characters)</label>
        <div class="input-group">
          <input
            type="{{showPass && 'password' || 'text'}}"
            class="form-control"
            placeholder="{{ 'GEN_Placeholder_1' | translate }}"
            ng-model="addAccount.password"
            ng-class="isStrongPass(addAccount.password) ? 'valid' : 'invalid'"
            ng-change="newWalletChange('addStatus','showBtnAddWallet')"
            ng-keyup="$event.keyCode == 13 && importWalletToStorage()"
          />
          <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
        </div>
      </div>
      <div class="form-group" ng-show="showBtnAddWallet">
        <a class="btn btn-info btn-block" ng-click="importWalletToStorage()" translate="NAV_AddWallet">ADD WALLET </a>
      </div>
      <div ng-bind-html="addStatus"></div>
    </div>
  </article>
    <div class="modal fade" tabindex="-1" role="dialog" id="mnemonicModel">
        <div class="modal-dialog" role="document" style="top: 200px">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" translate="MNEM_1"> Please select the address you would like to interact with. </h4>
            </div>
            <div class="modal-body">
              <p translate="MNEM_2"> Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. </p>
              <table class="table table-striped table-mnemonic">
                <tr>
                  <th></th>
                  <th translate="x_Address"> Address </th>
                  <th translate="MYWAL_Bal"> Balance </th>
                <tr ng-repeat="wallet in HDWallet.wallets track by $index">
                  <td> <input type="radio" name="addressSelect" value="{{$index}}" ng-model="HDWallet.id" /> </td>
                  <td> {{wallet.getChecksumAddressString()}} </td>
                  <td> {{wallet.getBalance()}} ETH </td>
                </tr>
                <tr class="m-addresses">
                  <td><a ng-show="HDWallet.numWallets > 5" ng-click="AddRemoveHDAddresses(false)" translate="MNEM_prev">Previous Addresses</a></td>
                  <td></td>
                  <td><a ng-click="AddRemoveHDAddresses(true)" translate="MNEM_more">More<br />Addresses</a></td>
                </tr>
              </table>
            </div>
            <div class="modal-footer text-center">
              <button type="button" class="btn btn-default" data-dismiss="modal" translate="x_Cancel">Cancel</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" ng-click="setHDWallet()" translate="ADD_Label_6_short">Access Wallet</button>
            </div>
          </div>
        </div>
      </div>
</section>

