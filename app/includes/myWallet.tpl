<section class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.myWallet.id">

  <h2> Your Wallets </h2>
  <table class="table table-striped" id="tblwalletsmain">
    <thead>
      <tr>
        <th></th>
        <th>Wallet Nickname</th>
        <th>Wallet Address</th>
        <th>Balance</th>
        <th>Edit</th>
        <th>View</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>

  <br /><br />

  <!-- Watch Only Accounts TODO: only show this section if they have added watch only accounts-->
  <section id="secWatchOnlyMain">
    <h2> Your Watch-Only Accounts </h2>

    <table class="table table-striped" id="tblWatchOnlyMain">
      <thead>
        <tr>
          <th></th>
          <th>Wallet Nickname</th>
          <th>Wallet Address</th>
          <th>Balance</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </section>

  <!-- Edit Modal -->
  <div class="modal fade" id="editWallet" tabindex="-1" role="dialog" aria-labelledby="editWalletLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title" id="myModalLabel"> Edit Wallet: <span id="walletNicknameEdit"></span></h3>
        </div>
        <div class="modal-body">
          <form role="form">
            <div class="form-group">
              <label for="walletName">Wallet Name</label>
              <input type="hidden" value="" id="editWalletAddress" />
              <input type="text" class="form-control" id="walletName" value="">
            </div>
          </form>
        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" id="btnapproveEdit">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
  <!--/edit modal-->


  <!-- View Private Key Modal -->
  <div class="modal fade" id="viewWalletDetails" tabindex="-1" role="dialog" aria-labelledby="viewKeyLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title" id="myModalLabel"> View Wallet Details: <span id="walletNicknameView"> nickname of wallet </span></h3>
        </div>
        <div class="modal-body">
          <p> Viewing the wallet details allows you to view the wallet's private key, save the wallet's JSON file, and print the paper wallet.</p>
          <form role="form">
            <div class="form-group">
              <label for="walletName">Enter Your Password:</label>
              <input type="hidden" value="" id="viewWalletAddress" />
              <input type="password" class="form-control" id="viewWalletPin" value="">
              <div id="viewWalletPopStatus"></div>
            </div>
          </form>
        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-warning" id="btnapproveView"> View Wallet Details </button>
        </div>
      </div>
    </div>
  </div>
  <!--/View Private Key Modal-->


  <!-- Remove Modal -->
  <div class="modal fade" id="removeWallet" tabindex="-1" role="dialog" aria-labelledby="removeWalletLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title" id="myModalLabel">Remove Wallet: <span id="walletNicknameDelete"></span></h3>
        </div>
        <div class="modal-body">
          <h4>Warning! You are about to remove your wallet.</h4>
          <input type="hidden" value="" id="deleteWalletAddress" />
          <p> Be sure you have <strong>saved the private key/JSON file and the password</strong> associated with this wallet before you remove it.</p>
          <p> If you want to use this wallet with your MyEtherWallet CX in the future, you will need to manually re-add it using the private key/JSON and password.</p>
          <h4>Are you <span class="text-underline"> sure </span> you want to do this?</h4>
        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn btn-default" data-dismiss="modal">No, get me out of here!</button>
          <button type="button" class="btn btn-danger" id="btnapproveremove">Yes, I am sure! Remove the sucker.</button>
        </div>
      </div>
    </div>
  </div>
  <!--/Remove modal-->

  <!-- View Private Key Details Pane-->

  <section id="viewWalletDiv" style="display:none;">
    <div class="row">
      <br /><hr />
      <div class="col-sm-8">
        <h3><span class="text-light">Viewing Wallet Details For:</span> <span id="walletNickname"> tayvano's wallet </span></h3>
        <p> Please save and back up all your information externally. Check out the help page for instructions on how to do this.</p>
      </div>
      <div class="col-sm-4 text-right" style="margin-top: 16px;">
        <a class="btn btn-warning" id="hideWalletDetails"> Hide Wallet Details </a>
      </div>
    </div>
    <!-- 1. Address -->
    <div class="row">
      <div class="col-sm-10">
        <div class="form-group">
          <h4>
            1. Save Your Address:
            <div class="account-help-icon">
              <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
              <span class="account-help-text">You may know this as your "Account #" or your "Public Key". It's what you send people so they can send you ETH. That icon to the right is an easy way to recognize your address.</span>
            </div>
          </h4>
          <input class="form-control" type="text" id="address" readonly="readonly">
        </div>
      </div>
      <div class="col-sm-2 address-identicon-container">
        <div id="addressIdenticon" title="Address Indenticon"></div>
      </div>
    </div>
    <!-- / 1. Address -->
    <hr />
    <!-- 2. Private Keys -->
    <h4> 2. Save your preferred version of your private key. Don't forget to save the password you entered when you created the wallet!</h4>
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label>
              Your Private Key (encrypted):
              <div class="account-help-icon">
                <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
                <span class="account-help-text">Text version of your private key. This is encrypted so you need the password you entered to use it. This is a safer way to save your key than unencrypted, but you need to remember your password.</span>
              </div>
          </label>
          <textarea rows="5" class="form-control bigger-on-mobile" type="text" id="privkeyenc" readonly="readonly"></textarea>
        </div>
        <div class="form-group">
          <label>
            Download JSON file (encrypted):
            <div class="account-help-icon">
              <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
              <span class="account-help-text">A JSON file is just a different format & contains some additional information. Some people prefer to have the text version & some prefer to have the JSON. If you are unsure, just save both. Again, this is encrypted so you will need your password.</span>
            </div>
          </label>
          <a class="btn btn-info btn-block" id="encdownload"> DOWNLOAD </a>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label>
              Your Private Key (unencrypted):
              <div class="account-help-icon">
                <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
                <span class="account-help-text">This is the unencrypted text version of your private key, meaning no password is necessary. If someone were to find your unencrypted private key, they could access your wallet without a password. For this reason, encrypted private keys are typically recommended.</span>
              </div>
          </label>
          <textarea rows="5" class="form-control" type="text" id="privkey" readonly="readonly"></textarea>
        </div>
        <div class="form-group">
          <label>
            Download JSON file (unencrypted):
            <div class="account-help-icon">
              <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
              <span class="account-help-text">This is the unencrypted, JSON format of your private key. Again, this means you do not need the password but anyone who finds your JSON can access your wallet and your Ether without the password.</span>
            </div>
          </label>
          <a class="btn btn-info btn-block" id="unencdownload">DOWNLOAD</a>
        </div>
      </div>
    </div>
    <!-- / 2. Private Keys -->
    <!-- 3. Extras -->
    <div class="row">
      <div class="col-xs-12">
        <hr />
        <h4> 3. Print your paper wallet, or store a QR code verison. (optional)</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label>
            Print Paper Wallet:
            <div class="account-help-icon">
              <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
              <span class="account-help-text">ProTip: Click print and save this as a PDF, even if you do not own a printer!</span>
            </div>
          </label>
          <a class="btn btn-info btn-block" id="printqr">PRINT</a>
        </div>
      </div>
      <div class="form-group col-sm-3">
        <label>Your Address:</label>
        <div id="qrcodeAdd" width="100%"></div>
      </div>
      <div class="form-group col-sm-3">
        <label>Private Key (unencrypted):</label>
        <div id="qrcode" width="100%"></div>
      </div>
    </div>
    <!-- / 3. Extras -->
  </section>

</section><!-- / end tab-pane-->
