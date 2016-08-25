<!-- The DAO -->
<article class="tab-pane page-dao active" ng-if="globalService.currentTab==globalService.tabs.dao.id">

  <!-- TOP: The DAO -->
  <h2 translate="NAV_WithdrawDAO"> Withdraw DAO </h2>
  <p translate="DAO_Desc"> Use this tab to Withdraw your DAO Tokens for ETH. If you wish to send DAO, please use the Send Tokens Tab.</p>

  <br />

  @@if (site === 'cx' )  {     <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>     }
  @@if (site === 'mew' ) {     <wallet-decrypt-drtv></wallet-decrypt-drtv>           }
  <!-- / TOP: The DAO -->

  <!-- BOTTOM: The DAO -->
  <section class="row" ng-show="wallet!=null" ng-controller='theDaoCtrl'>
    <hr />

    <!-- Sidebar -->
    <div class="col-sm-4">
      <h4 translate="sidebar_AccountInfo"> Account Information: </h4>

      <div id="addressIdenticon" class="med" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>

      <div translate="sidebar_AccountInfo"> Account Address: </div>
      <ul class="account-info">
        <li class="mono wrap"> {{wallet.getChecksumAddressString()}} </li>
      </ul>

      <div translate="sidebar_AccountBal"> Account Balance: </div>
      <ul class="account-info">
        <li><strong>{{token.balance}}</strong> DAO Tokens</li>
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
      <section class="daoGetTokens clearfix">
        <br /><br /><br />
        <div class=" text-center">
          <a class="btn btn-danger btn-lg" data-toggle="modal" data-target="#withdrawTransaction" translate="DAO_TitleLong">
            WITHDRAW YOUR DAO TOKENS FOR ETH
          </a>
          <p><small translate="DAO_Inst"> Yes. Just push the big red button. It's that easy. </small></p>
          <div class="form-group col-xs-12" ng-bind-html="sendTxStatus"></div>
          <div class="form-group col-xs-12" ng-bind-html="withdrawTxStatus"></div>
        </div>
        <br /><br /><br />
        <p translate="DAO_Warning">If you are getting an <em>insufficient balance for gas * ... </em> error, you must have a small amount of ETH in your account in order to cover the cost of gas. Add .01 ETH to this account and try again. </p>
      </section>
    </div>
    <!-- / Content -->

    <!-- Withdraw Modal -->
    <div class="modal fade" id="withdrawTransaction" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h3 class="modal-title" id="myModalLabel" class="text-danger" translate="DAOModal_Title">Just making sure...</h3>
          </div>
          <div class="modal-body">
            <h4> You are about to withdraw {{token.balance}} DAO Tokens for {{token.balanceEth}} ETH. </h4>
            <h4 translate="SENDModal_Content_3"> Are you sure you want to do this? </h4>
          </div>
          <div class="modal-footer text-center">
            <button type="button" class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">No, get me out of here!</button>
            <button type="button" class="btn btn-primary" ng-click="generateAndSendWithdrawTx()" translate="SENDModal_Yes">Yes, I am sure! Withdraw.</button>
          </div>
        </div>
      </div>
    </div>
    <!-- / Withdraw Modal -->

  </section>
  <!-- / BOTTOM: The DAO -->

</article>
<!-- / The DAO -->
