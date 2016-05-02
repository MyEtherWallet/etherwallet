<section class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.addWallet.id">
  <h2> Add Wallet </h2>

  <section class="row" id="walletselection">
    <article class="col-md-4 col-sm-6">
      <h4> What would you like to do? </h4>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" value="gennewwallet">Generate New Wallet</label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" value="fileupload">Select Your Wallet File <small>(Keystore / JSON)</small></label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" value="pasteprivkey">Paste/Type Your Private Key</label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" value="watchOnlyAccount">Add an Account to Watch</label>
      </div>
    </article>

    <article class="col-md-4 col-sm-6">
      <!-- Generate New Wallet -->
      <div>
        <h4> Generate New Wallet: </h4>
        <div class="form-group">
          <label> Create a Nickname: </label>
          <input class="form-control" type="text" placeholder="My New Wallet">
        </div>
        <div class="form-group">
          <label> Create a Password: <small>(at least 8 characters w/ at least 1 lowercase, 1 uppercase, 1 number)</small></label>
          <div class="input-group">
            <input type="{{showPass && 'password' || 'text'}}" class="form-control" placeholder="Don't forget to save this!" ng-model="password" ng-class="isStrongPass() ? 'valid' : 'invalid'"/>
            <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
          </div>
        </div>
      </div>

      <!-- Select Your Wallet File -->
      <div>
        <h4>Select your Wallet File: </h4>
        <div class="form-group">
          <a class="file-input btn btn-block btn-default btn-file marg-v-sm">SELECT WALLET FILE... <input type="file"></a>
        </div>
      </div>

      <!-- Paste/Type Your Private Key -->
      <div>
        <h4> Paste / type your private key: </h4>
        <div class="form-group">
          <textarea rows="4" class="form-control" placeholder="Private Key"></textarea>
        </div>
        <div class="form-group">
          <p> Your file is encrypted with a password, enter the password here: </p>
          <input class="form-control" type="password" placeholder="Password">
        </div>
      </div>

      <!-- Add an Account to Watch -->
      <div>
        <h4> Add an Account to Watch: </h4>
        <p class="text-danger">You can add any account to "watch" on the wallets tab without uploading a private key. This does <strong> not </strong> mean you have access to this wallet, nor can you transfer Ether from it. </p>
        <div class="form-group">
          <label> Create a Nickname: </label>
          <input class="form-control" type="text" placeholder="My New Wallet"/>
        </div>
        <div class="form-group">
          <label> Enter the Address: </label>
          <input class="form-control" type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" />
        </div>
      </div>

      <div id="status">
        <p class="text-danger">Error Message</p>
        <p class="text-success">Success Message</p>
      </div>
    </article>

    <article class="col-md-4 col-sm-6" >
      <h4> Generate Wallet </h4>
      <div class="form-group"><a class="btn btn-primary btn-block">GENERATE</a></div>

      <h4> Access your Wallet </h4>
      <div class="form-group"><a class="btn btn-primary btn-block">UNLOCK WALLET</a></div>

      <h4> Add Account </h4>
      <div class="form-group"><a class="btn btn-primary btn-block">ADD</a></div>

      <div id="status">
        <p class="text-danger">Error Message</p>
        <p class="text-success">Success Message</p>
      </div>
    </article>
  </section>

  <article class="row">
    <hr />
    <div class="col-sm-4">
      <h4> Account Information </h4>
      <div>
        <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
        <br />
        <p> Account Address:
          <br /> <strong style="margin-left: 1em" class="mono">{{wallet.getChecksumAddressString()}}</strong></p>
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
        <input class="form-control" type="text" placeholder="My Wallet"/>
      </div>
      <div class="form-group">
        <label> Create a Password: <small>(at least 8 characters w/ at least 1 lowercase, 1 uppercase, 1 number)</small></label>
        <input class="form-control" type="text" placeholder="Password"/>
      </div>
      <div class="form-group">
        <a class="btn btn-info btn-block">ADD WALLET </a>
      </div>
      <div id="status">
        <p class="text-danger">Error Message</p>
        <p class="text-success">Success Message</p>
      </div>
    </div>
  </article>

</section>

