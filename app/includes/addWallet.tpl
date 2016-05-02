<section class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.addWallet.id">
  <h2> Add Wallet </h2>

  <article class="row" id="walletselection">
    <div class="col-md-4 col-sm-6">
      <h4> How would you like to access your wallet? </h4>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" value="gennewwallet">Generate New Wallet.</label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" value="fileupload">Upload Your Wallet File <small>(JSON from presale / geth / MyEtherWallet).</small></label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" value="pasteprivkey">Paste/Type Your Encrypted or Unencrypted Private Key.</label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" value="watchOnlyAccount">Add an Account to Watch.</label>
      </div>
    </div>

    <div class="col-md-4 col-sm-6">
      <!-- if selected upload -->
      <div id="selectedUploadKey" style="display: none;">
        <h4>Select your wallet file : </h4>
        <div class="form-group">
          <p id="file-text"></p>
          <a class="file-input btn btn-block btn-default btn-file marg-v-sm" id="fileUpload">SELECT WALLET FILE... <input type="file"></a>
          <div id="fuploadStatus"></div>
        </div>
        <div class="form-group" id="walletPasdiv" style="display: none;">
          <p> your file is encrypted with a password, enter the password here: </p>
          <input class="form-control" type="password" placeholder="Password" id="walletfilepassword">
        </div>
      </div>
      <!-- /if selected upload -->

      <!-- if selected type key-->
      <div id="selectedTypeKey" style="display: none;">
        <h4> Paste / type your private key: </h4>
        <div class="form-group">
          <textarea rows="4" class="form-control" placeholder="Private Key" id="manualprivkey"></textarea>
        </div>
        <div class="form-group" style="display: none;" id="divprikeypassword">
          <p> Your file is encrypted with a password, enter the password here: </p>
          <input class="form-control" type="password" placeholder="Password" id="privkeypassword">
        </div>
      </div>

      <!-- if selected type gen new wallet-->
      <div id="selectedGenNewWallet" style="display: none;">
        <div class="form-group col-xs-12">
          <label> Create a Nickname for Your Wallet: </label>
          <input class="form-control" type="text" placeholder="My New Wallet" id="newWalletNick">
        </div>
        <div class="form-group col-xs-12">
          <label> Create a Password for Your Wallet: </label>
          <input class="form-control" type="text" placeholder="Password" id="ethgenpassword">
          <p><strong>We recommend using a very strong password and keeping it safe.</strong> You will need this password to send transactions and view your wallet details.</p>
        </div>
      </div>
      <!-- /if selected type gen new wallet-->

      <!-- if selected "watch only account"-->
      <div id="selectedWatchOnlyAccount" style="display: none;">
        <p class="col-xs-12 text-danger">You can add any account to "watch" on the wallets tab without uploading a private key. Keep in mind, this does <strong> not </strong> mean you have access to this wallet, nor can you transfer Ether from it. </p>
        <div class="form-group col-xs-12">
          <label> Create a Nickname for Your Watch-Only Account: </label>
          <input class="form-control" type="text" placeholder="My New Wallet" id="watchOnlyNick" />
        </div>
        <div class="form-group col-xs-12">
          <label> Address for your Watch-Only Account: </label>
          <input class="form-control" type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" id="watchOnlyAdd" />
          <div id="WatchOnlyAddressValidate"></div>
        </div>
        <div class="form-group col-xs-12">
          <a id="addWatchOnly" class="btn btn-primary"> Add Watch-Only Account </a>
        </div>
        <div id="watchOnlyWalletStatus"></div>
      </div>
      <!-- /if selected "watch only account"-->
    </div>

    <div class="col-md-4 col-sm-6" style="display: none;" id="walletuploadbutton">
      <h4 id="uploadbtntxt-wallet" style="display: none;"> Decrypt your wallet</h4>
      <h4 id="uploadbtntxt-privkey" style="display: none;"> Decrypt your private key </h4>
      <div class="form-group"><a class="btn btn-primary btn-block" id="decryptdata">Decrypt</a></div>
      <div id="decryptStatus0"></div>
    </div>

    <div class="col-md-4 col-sm-6" style="display: none;" id="newWalletGenButtonDiv">
      <h4> Generate New Wallet</h4>
      <div class="form-group"><a class="btn btn-primary btn-block" id="generateNewWallet">Generate</a></div>
      <div id="generatedWallet"></div>
    </div>
  </article>

  <article class="row" id="walletpreview0" style="display: none;">
    <hr />
    <div class="col-sm-4">
      <h4> Account Information </h4>
      <div>
        <p> Account Address:
          <br /> <strong id="accountAddress0" style="margin-left: 1em"></strong></p>
        <p> Account Balance:
          <br />
          <strong class="text-success" id="accountBalance0" style="margin-left: 1em"> loading... </strong>
          <br />
          <strong class="text-success" id="accountBalanceUsd0" style="margin-left: 1em"> loading... </strong>
          <br />
          <strong class="text-success" id="accountBalanceEur0" style="margin-left: 1em"> loading... </strong>
          <br />
          <strong class="text-success" id="accountBalanceBtc0" style="margin-left: 1em"> loading... </strong>
        </p>
      </div>
    </div>
    <div class="col-sm-8" id="AddWalletDiv">
      <h4>Add Wallet</h4>
      <div class="form-group col-xs-12">
        <label> Create a Nickname for Your Wallet: </label>
        <input class="form-control" type="text" placeholder="tayvano's pre-sale wallet" id="decryptwalletnickname" />
      </div>
      <div class="form-group col-xs-12" id="pindiv" style="display: none;">
        <label> Create a Password for Your Wallet: </label>
        <p><strong>We recommend using a very strong password and keeping it safe.</strong> You will need this password to send transactions and view your wallet details.</p>
        <input class="form-control" type="text" placeholder="Password" id="decryptwalletpin" />
      </div>
      <div class="form-group col-xs-12">
        <a class="btn btn-info btn-block" id="decryptAddWallet">ADD WALLET </a>
      </div>
      <div id="AddDecryptedWalletStatus"></div>
    </div>
  </article>

</section>

