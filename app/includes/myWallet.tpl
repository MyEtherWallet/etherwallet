<!-- My Wallet Page -->
<main class="tab-pane active myWalletCtrl" ng-if="globalService.currentTab==globalService.tabs.myWallet.id" ng-controller='myWalletsCtrl'  ng-cloak>


<!-- New Style ============================================================================================ -->

<div class="mywallet-container">
  <h1 translate="NAV_YourWallets">Your Wallets</h1>
  <div class="grid-frame">
    <div>
      <!-- Loop begins for each wallets =====================================================-->
      <div class="data" ng-repeat="twallet in allWallets track by $index">
        <div class="wallet grid-bg">
          <div class="block-title1" style="display: flex;">
            <p style="flex: 80;">{{twallet.nick}}</p>
            <div>
              <a class="mainWalletEdit" ng-click="editMWallet($index,'wallet')">
                <img class="editor-icons" src="images/icon-edit-white.png" title="Edit" />
              </a>
              <a class="text-warning mainWalletView" ng-click="viewMWallet($index,'wallet')">
                <img class="editor-icons" src="images/icon-view-white.png" title="View" />
              </a>
              <a class="mainWalletDelete text-danger" ng-click="deleteWalletMsg($index,'wallet')">
                <img class="editor-icons" src="images/icon-remove-red-white.png" title="Remove" />
              </a>
            </div>
          </div>
          <div class="content">
            <div>
              <div class="addressIdenticon" blockie-address="{{twallet.addr}}" watch-var="twallet"></div>
            </div>
            <div class="balance">
              
              <div class="balance-block">
                <h3 class="block-title">Balance</h3>
                <p class="balance-amount" ng-show="!showLongBal" ng-dblclick="showLongBal=!showLongBal" title="{{twallet.balance}} (Double-Click)">
                  {{twallet.balance|number}} ETH
                </p>
                <p class="balance-amount"
                    ng-show="showLongBal"
                    ng-dblclick="showLongBal=!showLongBal">
                      {{twallet.balance }} ETH
                </p>
              </div>
              
              <div class="address-block">
                <h3 class="block-title">Address</h3>
                <div class="copy-block">
                  <p>{{twallet.addr}} <button ng-click="copy(twallet.addr)">Copy it</button></p>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div class="tokens grid-bg">
          <p class="block-title1">Selected tokens</p>
          <div class="col-title">
              <p>Token Name</p>
              <p>Token Value</p>
          </div>
          
          <div class="content">
            <!-- Tokens to be added here -->
            <div ng-repeat="token in twallet.tokens">
              <p>{{ token.symbol }}</p>
              <p>{{ token.getBalance() }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Loop ends for each wallets =====================================================-->
      <h1 translate="MYWAL_WatchOnly">Your Watch-Only Accounts</h1>
      <div class="data" ng-repeat="twallet in allWatchOnly track by $index">
        <div class="wallet grid-bg">
          <div class="block-title1" style="display: flex;">
            <p style="flex: 80;">{{twallet.nick}}</p>
            <div>
              <a class="mainWalletDelete text-danger" ng-click="deleteWalletMsg($index,'watchOnly')">
                <img class="editor-icons" src="images/icon-remove-red-white.png" title="Remove" />
              </a>
            </div>
          </div>
          <div class="content">
            <div>
              <div class="addressIdenticon" blockie-address="{{twallet.addr}}" watch-var="twallet"></div>
            </div>
            <div class="balance">
              <div class="balance-block">
                <h3 class="block-title">Balance</h3>
                <p class="balance-amount" ng-show="!showLongBal" ng-dblclick="showLongBal=!showLongBal" title="{{twallet.balance}} (Double-Click)">
                  {{twallet.balance|number}} ETH
                </p>
                <p class="balance-amount"
                    ng-show="showLongBal"
                    ng-dblclick="showLongBal=!showLongBal">
                      {{twallet.balance }} ETH
                </p>
              </div>

              <div class="address-block">
                <h3 class="block-title">Address</h3>
                <div class="copy-block">
                  <p>{{twallet.addr}} <button ng-click="copy(twallet.addr)">Copy it</button></p>

                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="tokens grid-bg">
          <p class="block-title1">Selected tokens</p>
          <div class="col-title">
            <p>Token Name</p>
            <p>Token Value</p>
          </div>
          <div class="content">
            

            <!-- Tokens to be added here -->
            <div ng-repeat="token in twallet.tokens">
              <p>{{ token.symbol }}</p>
              <p>{{ token.getBalance() }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar grid-bg" id="sideBarTokens">
      <div class="title-container block-title2">
        <p class="title">Tokens</p>
        <p class="total-of">Total of {{ tokens.length }}</p>
      </div>

      <div class="col-title">
        <p>Token Name</p>
        <p>Edit</p>
      </div>

      <div class="content">
        
        <!-- Tokens to be added here -->
        <div ng-repeat="token in tokensShown">
          <p>{{ token.symbol }}</p>
          <div class="add-button" ng-show="!!checkIfExists(localTokens) && !checkIfAdded(token)" ng-click="addTokenToLocal(token)">
            <p>Add</p>
          </div>
          <div class="remove-button" ng-show="!!checkIfExists(localTokens) && checkIfAdded(token)" ng-click="removeTokenLocal(token)">
            <p>Remove</p>
          </div>
        </div>

      </div>
    </div>
  </div>

</div>

<!-- New Style ============================================================================================ -->

  <!-- <table class="table table-striped" id="tblwalletsmain">
    <tr ng-repeat="twallet in allWallets track by $index">

      <td width="10">
        <div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{twallet.addr}}" watch-var="twallet">
        </div>
      </td>

      <td width="10">
        <h2>
          {{twallet.nick}}
        </h2>
        <span class="mono small">
          {{twallet.addr}}
        </span>
      </td>

      <td width="400" class="chrome-tokens">
        <h3 class="text-success point"
            ng-show="!showLongBal"
            ng-dblclick="showLongBal=!showLongBal"
            title="{{twallet.balance}} (Double-Click)" >
              {{twallet.balance|number}} ETH
        </h3>
        <h3 class="text-success point"
            ng-show="showLongBal"
            ng-dblclick="showLongBal=!showLongBal">
              {{twallet.balance }} ETH
        </h3>

        <span class="point truncate"
          ng-repeat="token in twallet.tokens"
          ng-show="token.balance > 0"
          ng-if="!twallet.showToken"
          ng-dblclick="showLongToken=!showLongToken"
          title="{{token.getBalance()}} (Double-Click)">
            <strong ng-show="!showLongToken">
              {{token.getBalance()|number}}
            </strong>
            <strong ng-show="showLongToken">
              {{token.getBalance()}}
            </strong>
            {{token.getSymbol()}} &nbsp;&nbsp;
        </span>

        <div class="toggleTokenContainer">
          <span ng-click="toggleTokens(twallet)" ng-show="!twallet.showToken">
            Show all tokens
          </span>
          <span ng-click="toggleTokens(twallet)" ng-hide="!twallet.showToken">
            Hide all tokens
          </span>
        </div>

        <div ng-if="twallet.showToken" class="walletTokensContainer">
          <span class="point truncate"
            ng-repeat="token in twallet.tokens"
            ng-show="token.balance !== 0 && token.balance !== 'loading'"
            ng-dblclick="showLongToken=!showLongToken"
            title="{{token.getBalance()}} (Double-Click)">
              <strong ng-show="!showLongToken">
                {{token.getBalance()|number}}
              </strong>
              <strong ng-show="showLongToken">
                {{token.getBalance()}}
              </strong>
              {{token.getSymbol()}} &nbsp;&nbsp;
          </span>
        </div>
      </td>

      <td width="100" class="text-center" style="white-space: nowrap">
        <a class="mainWalletEdit" ng-click="editMWallet($index,'wallet')">
          <img src="images/icon-edit.svg" title="Edit" />
        </a>
        <a class="text-warning mainWalletView" ng-click="viewMWallet($index,'wallet')">
          <img src="images/icon-view.svg" title="View" />
        </a>
        <a class="mainWalletDelete text-danger" ng-click="deleteWalletMsg($index,'wallet')">
          <img src="images/icon-remove-red.svg" title="Remove" />
        </a>
      </td>

    </tr>

  </table> -->

  <!-- <section id="secWatchOnlyMain">
    <h1 translate="MYWAL_WatchOnly">
      Your Watch-Only Accounts
    </h1>
    <table class="table table-striped" id="tblWatchOnlyMain">
      <tr ng-repeat="twallet in allWatchOnly track by $index">
        <td width="10">
          <div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{twallet.addr}}" watch-var="twallet">
        </div>
      </td>
        <td width="10">
          <h2>
            {{twallet.nick}}
          </h2>
          <span class="mono small">
            {{twallet.addr}}
          </span>

        </td>
        <td width="400" class="chrome-tokens">

          <h3 class="text-success point"
              ng-show="!showLongBal"
              ng-dblclick="showLongBal=!showLongBal"
              title="{{twallet.balance}} (Double-Click)" >
                {{twallet.balance|number}} ETH
          </h3>

          <h3 class="text-success point"
              ng-show="showLongBal"
              ng-dblclick="showLongBal=!showLongBal">
                {{twallet.balance }} ETH
          </h3>

          <span class="point truncate"
            ng-repeat="token in twallet.tokens"
            ng-show="token.balance > 0"
            ng-if="!twallet.showToken"
            ng-dblclick="showLongToken=!showLongToken"
            title="{{token.getBalance()}} (Double-Click)">
              <strong ng-show="!showLongToken">
                {{token.getBalance()|number}}
              </strong>
              <strong ng-show="showLongToken">
                {{token.getBalance()}}
              </strong>
              {{token.getSymbol()}} &nbsp;&nbsp;
          </span>

          <div class="toggleTokenContainer">
            <span ng-click="toggleTokens(twallet)" ng-show="!twallet.showToken">
              Show all tokens
            </span>
            <span ng-click="toggleTokens(twallet)" ng-hide="!twallet.showToken">
              Hide all tokens
            </span>
          </div>

          <div ng-if="twallet.showToken" class="walletTokensContainer">
            <span class="point truncate"
              ng-repeat="token in twallet.tokens"
              ng-show="token.balance !== 0 && token.balance !== 'loading'"
              ng-dblclick="showLongToken=!showLongToken"
              title="{{token.getBalance()}} (Double-Click)">
                <strong ng-show="!showLongToken">
                  {{token.getBalance()|number}}
                </strong>
                <strong ng-show="showLongToken">
                  {{token.getBalance()}}
                </strong>
                {{token.getSymbol()}} &nbsp;&nbsp;
            </span>
          </div>
        </td>

        <td width="100" class="text-center">
          <a class="mainWalletDelete text-danger" ng-click="deleteWalletMsg($index,'watchOnly')">
            <img src="images/icon-remove-red.svg" title="Remove" />
         </a>
       </td>
      </tr>
    </table>

  </section> -->


  <!-- View Wallet Section -->
  <section class="row" ng-show="wallet!=null" ng-controller='viewWalletCtrl'>
    <div class="col-sm-12 text-right" style="margin: 1rem 0;" ng-show="wallet!=null">
      <a class="btn btn-warning" ng-click="resetWallet()" translate="MYWAL_Hide">
        Hide Wallet Info
      </a>
    </div>

    @@include( './viewWalletInfo-content.tpl', { "site": "cx" } )

  </section>
  <!-- / View Wallet Section -->


  <!-- Edit Modal -->
  <section class="modal fade" id="editWallet" tabindex="-1" role="dialog" aria-labelledby="editWalletLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <h3 class="modal-title text-primary">
          <span translate="MYWAL_Edit_2">
            Edit Wallet:
          </span>
          {{viewWallet.addr}}
        </h3>
        </div>

        <div class="modal-body">

          <form role="form">
            <div class="form-group">
              <label for="walletName" translate="MYWAL_Name">
                Wallet Name
              </label>
              <input type="text" class="form-control" value="" ng-model="viewWallet.nick" ng-keyup="$event.keyCode == 13 && editSave()"/>
            </div>
          </form>

        </div>

        <div class="modal-footer text-center">
          <button type="button" class="btn btn-default" data-dismiss="modal" translate="x_Cancel">
            Cancel
          </button>
          <button type="button" ng-show="viewWallet.nick.length>0" class="btn btn-primary" ng-click="editSave()" translate="x_Save">
            Save
          </button>
        </div>

      </div>
    </div>
  </section>
  <!--/edit modal-->


  <!-- View Private Key Modal -->
  <section class="modal fade" id="viewWalletDetails" tabindex="-1" role="dialog" aria-labelledby="viewKeyLabel" ng-init="showPass=true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h3 class="modal-title text-warning">
            <span translate="NAV_ViewWallet">
              View Wallet Info
            </span>:
            {{viewWallet.nick}}
          </h3>
        </div>

        <div class="modal-body">
          <p translate="VIEWWALLET_Subtitle_Short">
            This allows you to download different versions of private keys and re-print your paper wallet.
          </p>
          <form role="form">
            <div class="form-group">
              <label for="walletName" translate="ADD_Label_3">
                Your file is encrypted. Please enter the password:
              </label>
              <div class="input-group">
                <input type="{{showPass && 'password' || 'text'}}"
                       class="form-control"
                       ng-model="password"
                       ng-keyup="$event.keyCode == 13 && decryptWallet()" />
                         <span class="input-group-addon eye" ng-click="showPass=!showPass"></span>
              </div>
            </div>
          </form>
        </div>

        <div class="modal-footer text-center">
          <button type="button" class="btn btn-default" data-dismiss="modal" translate="x_Cancel">
            Cancel
          </button>
          <button type="button" class="btn btn-warning" ng-click="decryptWallet()" translate="NAV_ViewWallet">
            View Wallet Info
          </button>
        </div>

      </div>

    </div>

  </section>
  <!--/View Private Key Modal-->


  <!-- Remove Modal -->
  <section class="modal fade" id="removeWallet" tabindex="-1" role="dialog" aria-labelledby="removeWalletLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h3 class="modal-title text-danger">
            <span translate="MYWAL_Content_1">
              Warning! You are about to remove your wallet:
            </span>
            {{viewWallet.nick}}
          </h3>
        </div>

        <div class="modal-body">
          <p translate="MYWAL_Content_2">
            Be sure you have **saved the private key and/or Keystore File and the password** before you remove it.
          </p>
          <p translate="MYWAL_Content_3">
            If you want to use this wallet with your MyEtherWallet CX in the future, you will need to manually re-add.
          </p>
          <h4 translate="SENDModal_Content_3">
            Are you sure you want to do this?
          </h4>
        </div>

        <div class="modal-footer text-center">
          <button type="button" class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">
            No, get me out of here!
          </button>
          <button type="button" class="btn btn-danger" ng-click="deleteWallet()" translate="MYWAL_Remove">
            Remove
          </button>
        </div>

      </div>

    </div>

  </section>
  <!--/ Remove modal-->



</main>
<!-- / My Wallet Page -->
