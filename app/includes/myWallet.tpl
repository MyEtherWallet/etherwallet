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
      <tr>
        <td>1</td>
        <td>KVH Test Wallet</td>
        <td>0xb9836ec1f42Bd48331bceaedb74a6Bcdc22832bD</td>
        <td>
          <strong class="text-success">626.5540822 finney</strong><br>
          <small><span>0.01238 BTC</span> &nbsp;&nbsp;
          <span>$ 5.60 USD</span> &nbsp;&nbsp;
          <span>€ 4.89 EUR</span></small>
        </td>
        <td class="text-center"><a class="mainWalletEdit"><img src="images/icon-edit.svg" title="Edit" /></a></td>
        <td class="text-center"><a class="text-warning mainWalletView"><img src="images/icon-view.svg" title="View Wallet Details" /></a></td>
        <td class="text-center"><a class="mainWalletDelete text-danger"><img src="images/icon-remove.svg" title="Remove" /></a></td>
      </tr>
      <tr>
        <td>2</td>
        <td>tayvano Test Wallet</td>
        <td>0xb9836ec1f42Bd48331bceaedb74a6Bcdc22832bD</td>
        <td>
          <strong class="text-success">626.5540822 finney</strong><br>
          <small><span>0.01238 BTC</span> &nbsp;&nbsp;
          <span>$ 5.60 USD</span> &nbsp;&nbsp;
          <span>€ 4.89 EUR</span></small>
        </td>
        <td class="text-center"><a class="mainWalletEdit"><img src="images/icon-edit.svg" title="Edit" /></a></td>
        <td class="text-center"><a class="text-warning mainWalletView"><img src="images/icon-view.svg" title="View Wallet Details" /></a></td>
        <td class="text-center"><a class="mainWalletDelete text-danger"><img src="images/icon-remove.svg" title="Remove" /></a></td>
      </tr>
    </tbody>
  </table>

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
        <tr>
          <td>1</td>
          <td>KVH Test Wallet</td>
          <td>0xb9836ec1f42Bd48331bceaedb74a6Bcdc22832bD</td>
          <td>
            <strong class="text-success">626.5540822 finney</strong><br>
            <small><span>0.01238 BTC</span> &nbsp;&nbsp;
            <span>$ 5.60 USD</span> &nbsp;&nbsp;
            <span>€ 4.89 EUR</span></small>
          </td>
          <td class="text-center"><a class="mainWalletDelete text-danger"><img src="images/icon-remove.svg" title="Remove" /></a></td>
        </tr>
        <tr>
          <td>2</td>
          <td>tayvano Test Wallet</td>
          <td>0xb9836ec1f42Bd48331bceaedb74a6Bcdc22832bD</td>
          <td>
            <strong class="text-success">626.5540822 finney</strong><br>
            <small><span>0.01238 BTC</span> &nbsp;&nbsp;
            <span>$ 5.60 USD</span> &nbsp;&nbsp;
            <span>€ 4.89 EUR</span></small>
          </td>
          <td class="text-center"><a class="mainWalletDelete text-danger"><img src="images/icon-remove.svg" title="Remove" /></a></td>
        </tr>
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
              <div class="input-group">
                <input type="{{showPass && 'password' || 'text'}}" class="form-control" placeholder="Don't forget to save this!" ng-model="password" ng-class="isStrongPass() ? 'valid' : 'invalid'"/>
                <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
              </div>
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

  <section id="viewWalletDiv">
    <div class="row">
      <br /><hr />
      <div class="col-sm-8">
        <h2>Viewing Wallet Details For: tayvano's wallet</h2>
        <p> Please save and back up all your information externally. Check out the help page for instructions on how to do this.</p>
      </div>
      <div class="col-sm-4 text-right" style="margin-top: 16px;">
        <a class="btn btn-warning" id="hideWalletDetails"> Hide Wallet Details </a>
      </div>
    </div>

    INSERT VIEW WALLET DETAILS FROM THAT PAGE

  </section>

</section><!-- / end tab-pane-->
