<section class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.addWallet.id" ng-controller='addWalletCtrl'>
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
          <input class="form-control" type="text" placeholder="{{ 'MYWAL_Nick' | translate }}" ng-model="addAccount.nickName" ng-change="newWalletChange('nickNameStatus','showBtnGen')"/>
        </div>
        <div class="form-group">
          <label translate="GEN_Label_1"> Create a Password: (at least 9 characters)</label>
          <div class="input-group">
            <input type="{{showPass && 'password' || 'text'}}" class="form-control" placeholder="{{ 'GEN_Placeholder_1' | translate }}" ng-class="isStrongPass(addAccount.password) ? 'valid' : 'invalid'" ng-model="addAccount.password" ng-change="newWalletChange('nickNameStatus','showBtnGen')"/>
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
          <textarea rows="4" class="form-control" placeholder="{{ 'x_PrivKey2' | translate }}" ng-model="manualprivkey" ng-change="onPrivKeyChange()"></textarea>
        </div>
        <div class="form-group" ng-show="requirePPass">
          <p translate="ADD_Label_3"> Your file is encrypted. Please enter the password: </p>
          <input class="form-control" type="password" placeholder="{{ 'x_Password' | translate }}" ng-model="privPassword" ng-change="onPrivKeyPassChange()"/>
        </div>
      </div >

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
          <input class="form-control" type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="addAccount.address" ng-change="watchOnlyChange()"/>
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
          <input type="{{showPass && 'password' || 'text'}}" class="form-control" placeholder="{{ 'GEN_Placeholder_1' | translate }}"  ng-model="addAccount.password" ng-class="isStrongPass(addAccount.password) ? 'valid' : 'invalid'" ng-change="newWalletChange('addStatus','showBtnAddWallet')"/>
          <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
        </div>
      </div>
      <div class="form-group" ng-show="showBtnAddWallet">
        <a class="btn btn-info btn-block" ng-click="importWalletToStorage()" translate="NAV_AddWallet">ADD WALLET </a>
      </div>
      <div ng-bind-html="addStatus"></div>
    </div>
  </article>

</section>

