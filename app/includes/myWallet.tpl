<!-- My Wallet Page -->
<article class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.myWallet.id" ng-controller='myWalletsCtrl'  ng-cloak>


  <h1 translate="NAV_YourWallets"> Your Wallets </h1>


  <!-- Your Wallet Table -->
  <table class="table table-striped" id="tblwalletsmain">
    <thead>
      <tr>
        <th width="30" style="max-width: 30px"></th>
        <th width="60" style="max-width: 60px"></th>
        <th width="300" translate="x_Wallet">Wallet</th>
        <th width="300" translate="MYWAL_Bal">Balance</th>
        <th width="55" style="max-width: 55px" translate="MYWAL_Edit">Edit</th>
        <th width="55" style="max-width: 55px" translate="MYWAL_View">View</th>
        <th width="55" style="max-width: 55px" translate="MYWAL_Remove">Remove</th>
      </tr>
    </thead>
    <tbody>
      <tr ng-repeat="twallet in allWallets track by $index">
        <td>{{$index+1}}</td>
        <td><div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{twallet.addr}}" watch-var="twallet"></div></td>
        <td>
          {{twallet.nick}} <br />
          <span class="mono small">{{twallet.addr}}</span>
        </td>
        <td class="chrome-tokens">
          <strong class="text-success">{{twallet.balance }} ETH</strong>
          <br />
          <span class="small" ng-repeat="token in twallet.tokens" ng-show="token.balance!=0 && token.balance!='loading'"><strong>{{token.getBalance()}} </strong> {{token.getSymbol()}} &nbsp;&nbsp; </span>
          <br />
          <span ng-show="ajaxReq.type=='ETH'" class="small"><strong>{{twallet.btc }}</strong>&nbsp;BTC &nbsp;&nbsp; $ <strong>{{twallet.usd }}</strong>&nbsp;USD &nbsp;&nbsp; € <strong>{{twallet.eur }}</strong>&nbsp;EUR </small>
        </td>
        <td class="text-center">
          <a class="mainWalletEdit" ng-click="editMWallet($index,'wallet')"><img src="images/icon-edit.svg" title="Edit" /></a>
        </td>
        <td class="text-center">
          <a class="text-warning mainWalletView" ng-click="viewMWallet($index,'wallet')"><img src="images/icon-view.svg" title="View" /></a>
        </td>
        <td class="text-center">
          <a class="mainWalletDelete text-danger" ng-click="deleteWalletMsg($index,'wallet')"><img src="images/icon-remove.svg" title="Remove" /></a>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- / Your Wallet Table -->


  <!-- Watch Only Account Table -->
  <section id="secWatchOnlyMain">
    <h1 translate="MYWAL_WatchOnly"> Your Watch-Only Accounts </h1>
    <table class="table table-striped" id="tblWatchOnlyMain">
      <thead>
        <tr>
          <th width="30" style="max-width: 30px"></th>
          <th width="60" style="max-width: 60px"></th>
          <th width="300" translate="x_Wallet">Wallet</th>
          <th width="300" translate="MYWAL_Bal">Balance</th>
          <th width="55" style="max-width: 55px" ></th>
          <th width="55" style="max-width: 55px" ></th>
          <th width="55" style="max-width: 55px" translate="MYWAL_Remove">Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="twallet in allWatchOnly track by $index">
          <td>{{$index+1}}</td>
          <td><div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{twallet.addr}}" watch-var="twallet"></div></td>
          <td>
            {{twallet.nick}}
            <br />
            <span class="mono small"> {{twallet.addr}} </span>
          </td>
          <td class="chrome-tokens">
            <strong class="text-success">{{twallet.balance | number:4 }} ETH</strong><br>
            <span class="small" ng-repeat="token in twallet.tokens" ng-show="token.balance!=0 && token.balance!='loading'"><strong>{{token.getBalance() }}</strong>&nbsp;{{token.getSymbol()}} &nbsp;&nbsp;</span>
            <span class="small" ng-show="ajaxReq.type=='ETH'"><strong>{{twallet.btc }}</strong> BTC &nbsp;&nbsp; $<strong>{{twallet.usd }}</strong> USD &nbsp;&nbsp; €<strong>{{twallet.eur }}</strong> EUR</span>
          </td>
          <td></td><td></td>
          <td class="text-center"><a class="mainWalletDelete text-danger" ng-click="deleteWalletMsg($index,'watchOnly')"><img src="images/icon-remove.svg" title="Remove" /></a></td>
        </tr>
      </tbody>
    </table>
  </section>
  <!-- / Watch Only Account Table -->


  <!-- View Wallet Section -->
  <section class="row" ng-show="wallet!=null" ng-controller='viewWalletCtrl'>
    <section class="row">
   <div class="col-sm-12 text-right" style="margin-top: 16px;" ng-show="wallet!=null">
      <a class="btn btn-warning" ng-click="resetWallet()" translate="MYWAL_Hide"> Hide Wallet Info </a>
      <br />
    </div>
  </section>
      @@include( './viewWalletInfo-content.tpl', { "site": "cx" } )
      <br /><hr />
      <main ng-controller='signMsgCtrl'>
        @@include( './signMsg.tpl', { "site": "cx" } )
      </main>
      </section>
    </section>
  <!-- / View Wallet Section -->


  <!-- Edit Modal -->
  <div class="modal fade" id="editWallet" tabindex="-1" role="dialog" aria-labelledby="editWalletLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title text-primary" id="myModalLabel">
            <span translate="MYWAL_Edit_2">Edit Wallet:</span>
            {{viewWallet.addr}}
          </h3>
        </div>
        <div class="modal-body">
          <form role="form">
            <div class="form-group">
              <label for="walletName" translate="MYWAL_Name">Wallet Name</label>
              <input type="text" class="form-control" value="" ng-model="viewWallet.nick" ng-keyup="$event.keyCode == 13 && editSave()"/>
            </div>
          </form>
        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn btn-default" data-dismiss="modal" translate="x_Cancel">Cancel</button>
          <button type="button" ng-show="viewWallet.nick.length>0" class="btn btn-primary" ng-click="editSave()" translate="x_Save">Save</button>
        </div>

      </div>
    </div>
  </div>
  <!--/edit modal-->


  <!-- View Private Key Modal -->
  <div class="modal fade" id="viewWalletDetails" tabindex="-1" role="dialog" aria-labelledby="viewKeyLabel" ng-init="showPass=true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title text-warning" id="myModalLabel">
            <span translate="NAV_ViewWallet">View Wallet Info</span>:
            {{viewWallet.nick}}
          </h3>
        </div>
        <div class="modal-body">
          <p translate="VIEWWALLET_Subtitle_Short"> This allows you to download different versions of private keys and re-print your paper wallet. </p>
          <form role="form">
            <div class="form-group">
              <label for="walletName" translate="ADD_Label_3">Your file is encrypted. Please enter the password: </label>
              <div class="input-group">
                <input type="{{showPass && 'password' || 'text'}}" class="form-control" ng-model="password" ng-keyup="$event.keyCode == 13 && decryptWallet()" />
                <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
              </div>

            </div>
          </form>
        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn btn-default" data-dismiss="modal" translate="x_Cancel">Cancel</button>
          <button type="button" class="btn btn-warning" ng-click="decryptWallet()" translate="NAV_ViewWallet"> View Wallet Info </button>
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
          <h3 class="modal-title text-danger" id="myModalLabel">
            <span translate="MYWAL_Content_1"> Warning! You are about to remove your wallet: </span> {{viewWallet.nick}}
          </h3>
        </div>
        <div class="modal-body">
          <p translate="MYWAL_Content_2"> Be sure you have **saved the private key and/or Keystore File and the password** before you remove it.</p>
          <p translate="MYWAL_Content_3"> If you want to use this wallet with your MyEtherWallet CX in the future, you will need to manually re-add.</p>
          <h4 translate="SENDModal_Content_3">Are you sure you want to do this?</h4>
        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">No, get me out of here!</button>
          <button type="button" class="btn btn-danger" ng-click="deleteWallet()" translate="MYWAL_Remove">Remove</button>
        </div>
      </div>
    </div>
  </div>
  <!--/ Remove modal-->


</article>
<!-- / My Wallet Page -->
