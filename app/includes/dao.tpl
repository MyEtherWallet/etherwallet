<!-- The DAO -->
<div class="tab-pane page-dao active" ng-if="globalService.currentTab==globalService.tabs.dao.id">

  <!-- TOP: The DAO -->
  <section class="row">
    <div class="col-xs-12">
      <h2> Withdraw DAO for ETH </h2>
      <p> Use this tab to Withdraw your DAO Tokens for ETH. If you wish to send DAO, please use the Send Tokens Tab.</p>
    </div>
  </section>
  <br />

  @@if (site === 'cx' ) {
    <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>
  }
  @@if (site === 'mew' ) {
    <wallet-decrypt-drtv></wallet-decrypt-drtv>
  }
  <!-- / TOP: The DAO -->

  <!-- BOTTOM: The DAO -->
  <section class="row" ng-show="wallet!=null" ng-controller='theDaoCtrl'>
    <hr />
    <div class="col-sm-4">
      <h4> Account Information </h4>
      <div>
        <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
        <br />
        <p> Account Address:
          <br /> <strong style="padding-left: 1em; display: block;" class="mono word-wrap">{{wallet.getChecksumAddressString()}}</strong>
        </p>
        <p> Account Balance:
          <br />
          <strong class="text-primary" style="margin-left: 1em"> {{token.balance}} DAO Tokens</strong>
          <br />
          <strong style="margin-left: 1em"> {{etherBalance}} Ether </strong>
        </p>
        </p>
        <p> Equivalent Values:
          <br />
          <strong style="margin-left: 1em"> {{usdBalance}} USD </strong>
          <br />
          <strong style="margin-left: 1em"> {{eurBalance}} EUR </strong>
          <br />
          <strong style="margin-left: 1em"> {{btcBalance}} BTC </strong>
        </p>
        <p> See Transaction History:
          <br />
          <a href="https://etherscan.io/address/{{wallet.getAddressString()}}" target="_blank">https://etherscan.io/address/ {{wallet.getAddressString()}}</a>
        </p>
      </div>
      <br />
      <div class="well">
        <p> MyEtherWallet is a free, open-source service dedicated to your privacy and security. The more donations we receive, the more time we spend creating new features, listening to your feedback, and giving you what you want. We are just two people trying to change the world. Help us?</p>
        <a class="btn btn-primary btn-block" ng-click="onDonateClick()">DONATE</a>
        <div class="text-success text-center marg-v-sm"><strong ng-show="tx.donate"> THANK YOU!!! </strong></div>
      </div>
    </div>

    <div class="col-sm-8">
      <!-- Withdraw DAO Tokens -->
      <section class="daoGetTokens clearfix">
        <br /><br /><br />
        <div class=" text-center">
          <a class="btn btn-danger btn-lg" data-toggle="modal" data-target="#withdrawTransaction"> WITHDRAW YOUR DAO TOKENS FOR ETH </a>
          <p><small> Yes. Just push the big red button. It's that easy. </small></p>
          <div class="form-group col-xs-12" ng-bind-html="sendTxStatus"></div>
          <div class="form-group col-xs-12" ng-bind-html="withdrawTxStatus"></div>
        </div>
        <br /><br /><br />
        <ul>
          <li> If you are getting an <em>insufficient balance for gas * ... </em> error, you must have a small amount of ETH in your account in order to cover the cost of gas. Add .01 ETH to this account and try again. </li>
        </ul>
      </section>
      <!-- / Withdraw DAO Tokens -->
    </div>
  <!-- / BOTTOM: The DAO -->

  <!-- Withdraw Modal -->
  <div class="modal fade" id="withdrawTransaction" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title" id="myModalLabel"> <strong class="text-danger">Just making sure...</strong></h3>
        </div>
        <div class="modal-body">
          <!-- todo: update values -->
          <h4>You are about to withdraw {{token.balance}} DAO Tokens for {{token.balanceEth}} ETH.</h4>
          <h4> Are you <span class="text-underline">sure</span> you want to do this?</h4>
        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn btn-default" data-dismiss="modal">No, get me out of here!</button>
          <button type="button" class="btn btn-primary" ng-click="generateAndSendWithdrawTx()">Yes, I am sure! Withdraw.</button>
        </div>
      </div>
    </div>
  </div>
  <!-- / Withdraw Modal -->
</section>
  <!-- / Vote Modal -->


</div>
<!-- / The DAO -->
