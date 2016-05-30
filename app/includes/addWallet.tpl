<section class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.addWallet.id" ng-controller='addWalletCtrl'>
  <h2> Add Wallet </h2>

  <section class="row" id="walletselection">
    <article class="col-md-4 col-sm-6">
      <h4> What would you like to do? </h4>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="gennewwallet">Generate New Wallet</label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="fileupload">Select Your Wallet File <small>(Keystore / JSON)</small></label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="pasteprivkey">Paste/Type Your Private Key</label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" ng-model="walletType" value="watchonlyaccount">Add an Account to Watch</label>
      </div>
    </article>

    <article class="col-md-4 col-sm-6">
      <!-- Generate New Wallet -->
      <div ng-show="walletType=='gennewwallet'" ng-init="showPass=true">
        <h4> Generate New Wallet: </h4>
        <div class="form-group">
          <label> Create a Nickname: </label>
          <input class="form-control" type="text" placeholder="My New Wallet" ng-model="addAccount.nickName" ng-change="newWalletChange('nickNameStatus','showBtnGen')"/>
        </div>
        <div class="form-group">
          <label> Create a Password: <small>(at least 9 characters)</small></label>
          <div class="input-group">
            <input type="{{showPass && 'password' || 'text'}}" class="form-control" placeholder="Don't forget to save this!" ng-class="isStrongPass(addAccount.password) ? 'valid' : 'invalid'" ng-model="addAccount.password" ng-change="newWalletChange('nickNameStatus','showBtnGen')"/>
            <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
          </div>
        </div>
        <div ng-bind-html="nickNameStatus"></div>
      </div>

      <!-- Select Your Wallet File -->
      <div ng-show="walletType=='fileupload'">
        <h4>Select your Wallet File: </h4>
        <div class="form-group">
          <input style="display:none;" type="file" on-read-file="showContent($fileContent)" id="fselector"/>
          <a class="file-input btn btn-block btn-default btn-file marg-v-sm" ng-click="openFileDialog()">SELECT WALLET FILE... </a>
          <div id="fuploadStatus" ng-bind-html="fileStatus"></div>
        </div>
        <div class="form-group" ng-show="requireFPass">
          <p> Your file is encrypted. Please enter the password: </p>
          <input class="form-control" type="password" placeholder="Password" ng-model="filePassword" ng-change="onFilePassChange()" />
        </div>
      </div>

      <!-- Paste/Type Your Private Key -->
      <div ng-show="walletType=='pasteprivkey'">
        <h4> Paste / type your private key: </h4>
        <div class="form-group">
          <textarea rows="4" class="form-control" placeholder="Private Key" ng-model="manualprivkey" ng-change="onPrivKeyChange()"></textarea>
        </div>
        <div class="form-group" ng-show="requirePPass">
          <p> Your file is encrypted. Please enter the password: </p>
          <input class="form-control" type="password" placeholder="Password" ng-model="privPassword" ng-change="onPrivKeyPassChange()"/>
        </div>
      </div >

      <!-- Add an Account to Watch -->
      <div ng-show="walletType=='watchonlyaccount'">
        <h4> Add an Account to Watch: </h4>
        <p class="text-danger">You can add any account to "watch" on the wallets tab without uploading a private key. This does <strong> not </strong> mean you have access to this wallet, nor can you transfer Ether from it. </p>
        <div class="form-group">
          <label> Create a Nickname: </label>
          <input class="form-control" type="text" placeholder="My New Wallet" ng-model="addAccount.nickName" ng-change="watchOnlyChange()"/>
        </div>
        <div class="form-group">
          <label> Enter the Address: </label>
          <input class="form-control" type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="addAccount.address" ng-change="watchOnlyChange()"/>
        </div>
      </div>
      <div ng-bind-html="watchOnlyStatus"></div>
    </article>

    <article class="col-md-4 col-sm-6" >
        <div ng-show="showBtnGen">
        <h4> Generate Wallet </h4>
        <div class="form-group"><a ng-click="generateWallet()" class="btn btn-primary btn-block">GENERATE</a></div>
        </div>
        <div ng-show="showBtnUnlock">
        <h4> Access your Wallet </h4>
        <div class="form-group"><a ng-click="decryptWallet()" class="btn btn-primary btn-block">UNLOCK WALLET</a></div>
        </div>
        <div ng-show="showBtnAdd">
        <h4> Add Account </h4>
        <div class="form-group"><a ng-click="addWatchOnly()" class="btn btn-primary btn-block">ADD</a></div>
        </div>
        <div ng-bind-html="addWalletStats"></div>
    </article>

  </section>

  <article class="row" ng-if="showAddWallet">
    <hr />
    <div class="col-sm-4">
      <h4> Account Information </h4>
      <div>
        <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
        <br />
        <p> Account Address:
          <br /> <strong style="margin-left: 1em" class="mono word-wrap">{{wallet.getChecksumAddressString()}}</strong></p>
          <p> Account Balance:
          <br />
          <strong class="text-success" style="margin-left: 1em"> {{etherBalance}} Ether </strong>
          <br />
          <strong class="text-success" style="margin-left: 1em"> {{usdBalance}} USD </strong>
          <br />
          <strong class="text-success"  style="margin-left: 1em"> {{eurBalance}} EUR </strong>
          <br />
          <strong class="text-success" style="margin-left: 1em"> {{btcBalance}} BTC </strong>
        </p>
      </div>
    </div>
    <div class="col-sm-8">
      <h4>Add Wallet</h4>
      <div class="form-group">
        <label> Create a Nickname: </label>
        <input class="form-control" type="text" placeholder="My Wallet" ng-model="addAccount.nickName" ng-change="newWalletChange('addStatus','showBtnAddWallet')"/>
      </div>
      <div class="form-group" ng-show="showPassTxt">
        <label> Create a Password: <small>(at least 9 characters)</small></label>
          <div class="input-group">
            <input type="{{showPass && 'password' || 'text'}}" class="form-control" placeholder="Don't forget to save this!" ng-model="addAccount.password" ng-class="isStrongPass(addAccount.password) ? 'valid' : 'invalid'" ng-change="newWalletChange('addStatus','showBtnAddWallet')"/>
            <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
          </div>
      </div>
      <div class="form-group" ng-show="showBtnAddWallet">
        <a class="btn btn-info btn-block" ng-click="importWalletToStorage()">ADD WALLET </a>
      </div>
      <div ng-bind-html="addStatus"></div>
    </div>
  </article>

</section>

