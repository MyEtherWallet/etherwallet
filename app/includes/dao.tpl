<!-- The DAO -->
<div class="tab-pane page-dao active" ng-if="globalService.currentTab==globalService.tabs.dao.id">

  <!-- TOP: The DAO -->
  <section class="row">
    <div class="col-md-9 col-sm-8">
      <h2> The DAO </h2>
      <p> Use this tab to <strong>Withdraw your DAO Tokens for ETH or Send DAO Tokens </strong>.</p>
    </div>
    <div class="col-md-3 col-sm-4"><img src="images/thedao-addressicon.png" width="250px" height="auto" style="margin-top: 32px;" /></div>
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
          <br />
          <strong style="margin-left: 1em"> {{usdBalance}} USD </strong>
          <br />
          <strong style="margin-left: 1em"> {{eurBalance}} EUR </strong>
          <br />
          <strong style="margin-left: 1em"> {{btcBalance}} BTC </strong>
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

      <div class = "btn-group">
        <a class="btn btn-primary" ng-class="curTab=='withdraw' ? 'active' : ''" ng-click="curTab='withdraw'"> Withdraw DAO Tokens </a>
        <a class="btn btn-primary" ng-class="curTab=='send' ? 'active' : ''" ng-click="curTab='send'"> Send DAO Tokens </a>
        <!--<a class="btn btn-primary" ng-class="curTab=='vote' ? 'active' : ''" ng-click="curTab='vote'"> Vote on a Proposal </a>-->
      </div>


      <!-- Withdraw DAO Tokens -->
      <section class="daoGetTokens clearfix text-center" ng-show="curTab=='withdraw'">
        <br /><br /><br />
        <a class="btn btn-danger btn-lg"> WITHDRAW YOUR DAO TOKENS FOR ETH </a>
        <p><small> Yes. Just push the big red button. It's that easy. </small></p>

      </section>
      <!-- / Withdraw DAO Tokens -->

      <!-- Send DAO Tokens -->
      <section class="daoGetTokens clearfix" ng-show="curTab=='send'">
        <h4>Send DAO Tokens</h4>
        <div class="form-group col-xs-10">
          <label> To Address: </label>
          <input class="form-control" type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="tokenTx.to" ng-change="validateAddress()"/>
          <div ng-bind-html="validateAddressStatus"></div>
        </div>
        <div class="col-xs-2 address-identicon-container">
          <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{tokenTx.to}}" watch-var="tokenTx.to"></div>
        </div>
        <div class="form-group col-xs-12">
          <label>
            Amount to Send:
            <br />
          </label>
          <input class="form-control" type="text" placeholder="Amount" ng-model="tokenTx.value"/>
          <div class="radio">
            <label><input type="radio" name="currencyRadio" value="dao" ng-model="tokenTx.unit"/>DAO Tokens</label>
          </div>
          <!-- advanced option panel -->
          <section>
            <div class="form-group">
              <label> Gas: </label>
              <input class="form-control" type="text" ng-model="tx.gasLimit"/>
            </div>
          </section>
          <!-- / advanced option panel -->
        </div>
        <div class="form-group col-xs-12">
          <a class="btn btn-info btn-block" ng-click="generateTokenTx()">GENERATE TRANSACTION</a>
        </div>
        <div class="col-xs-12">
           <div ng-bind-html="validateTxStatus"></div>
        </div>
        <div class="form-group col-xs-12" ng-show="showRaw">
          <label> Raw Transaction </label>
          <textarea class="form-control" rows="4" disabled >{{rawTx}}</textarea>
          <label> Signed Transaction </label>
          <textarea class="form-control" rows="4" disabled >{{signedTx}}</textarea>
        </div>
        <div class="form-group col-xs-12" ng-show="showRaw">
          <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#sendTransaction">SEND TRANSACTION</a>
        </div>
        <div class="form-group col-xs-12" ng-bind-html="sendTxStatus"></div>
      </section>
      <!--/ Send DAO Tokens -->



    </div>
  <!-- / BOTTOM: The DAO -->

  <!-- Withdraw Modal -->
  <div class="modal fade" id="sendTransaction" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title" id="myModalLabel"> <strong class="text-danger">Just making sure...</strong></h3>
        </div>
        <div class="modal-body">
          <!-- todo: update values -->
          <h4>You are about to withdraw XXX DAO Tokens for XXX ETH.</h4>
          <h4> Are you <span class="text-underline">sure</span> you want to do this?</h4>
        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn btn-default" data-dismiss="modal">No, get me out of here!</button>
          <button type="button" class="btn btn-primary" ng-click="sendTx()">Yes, I am sure! Withdraw.</button>
        </div>
      </div>
    </div>
  </div>
  <!-- / Withdraw Modal -->


  <!-- Send Modal -->
  <div class="modal fade" id="sendTransaction" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title" id="myModalLabel"> <strong class="text-danger">Warning!</strong></h3>
        </div>
        <div class="modal-body">
          <h4>
            You are about to send
            <strong id="confirmAmount" class="text-primary"> {{tokenTx.value}} </strong>
            <strong id="confirmCurrancy" class="text-primary"> DAO Token </strong>
            to address
            <strong id="confirmAddress" class="text-primary"> {{tokenTx.to}} </strong>
          </h4>
          <h4> Are you <span class="text-underline">sure</span> you want to do this?</h4>
          <p><em> NOTE: If you encounter a gas error (account doesn't exist or balance too low) then you need to add ETH to your account) to cover the cost of sending DAO tokens.</em></p>

        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn btn-default" data-dismiss="modal">No, get me out of here!</button>
          <button type="button" class="btn btn-primary" ng-click="sendTx()">Yes, I am sure! Make transaction.</button>
        </div>
      </div>
    </div>
  </div>
  <!-- / Send Modal -->

  <!-- Vote Modal -->
  <div class="modal fade" id="voteProposal" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">

          <br />
          <h4>You are about to vote on Proposal <strong>#{{objProposal.id}}</strong>: {{objProposal.description}}.</h4>
          <h4 class="text-light">Please vote carefully, there are no do-overs or take-backs.</h4>

          <div class="row">
            <div class="col-sm-4 marg-v-md">
              <button type="button" class="btn btn-block btn-danger" ng-click="generateVoteTx(false)" ng-show="showVoteNo">VOTE NO</button>
            </div>
            <div class="col-sm-4 marg-v-md">
              <button type="button" class="btn btn-block btn-default" data-dismiss="modal">GET ME OUT OF HERE</button>
            </div>
            <div class="col-sm-4 marg-v-md">
              <button type="button" class="btn btn-block btn-primary" ng-click="generateVoteTx(true)" ng-show="showVoteYes">VOTE YES</button>
            </div>
            <div class="form-group col-xs-12" ng-bind-html="voteTxStatus"></div>
            <div class="form-group col-xs-12" ng-bind-html="sendTxStatus"></div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  <!-- / Vote Modal -->


</div>
<!-- / The DAO -->

