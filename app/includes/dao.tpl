<!-- The DAO -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.dao.id">

  <!-- TOP: The DAO -->
  <section class="row">
    <div class="col-md-9 col-sm-8">
      <h2> The DAO </h2>
      <p> Use this tab to <strong>Send DAO Tokens or Vote</strong> on a specific proposal. Learn more at <a href="http://daohub.org/" target="_blank">DAOHub</a>, <a href="https://blog.slock.it/the-art-of-the-dao-experiments-with-the-generic-dao-framework-4782f7862131#.bibozinlb" target="_blank">The Art of the DAO</a>, and <a href="https://forum.daohub.org/c/theDAO" target="_blank">DAO Hub Forums (Support, too!)</a></p>
      <!--<a class="btn btn-info btn-sm" onclick="window.location.hash = '#dao-proposals'; location.reload();">Browse & Vote on All Proposals Here</a>-->
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
    </div>

    <div class="col-sm-8">

      <div class = "btn-group">
        <a class="btn btn-primary" ng-class="curTab=='send' ? 'active' : ''" ng-click="curTab='send'"> Send DAO Tokens </a>
        <a class="btn btn-primary" ng-class="curTab=='vote' ? 'active' : ''" ng-click="curTab='vote'"> Vote on a Proposal </a>
      </div>

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

      <!-- Vote on a Proposal -->
      <section class="daoGetTokens" ng-show="curTab=='vote'">
        <h4>Vote on a Proposal</h4>

        <div class="form-group col-xs-12 clearfix">
          <label> Proposal ID </label>
          <input class="form-control" type="text" placeholder="0" ng-model="proposalId"/>
        </div>
        <div class="form-group col-xs-12 clearfix">
              <a class="btn btn-primary" ng-click="setProposal()">LOAD PROPOSAL</a>
        </div>
        <div class="form-group col-xs-12 clearfix" ng-bind-html="loadProposalStatus"></div>
        <article class="proposal-item col-xs-12" ng-show="showProposal">
          <section>
            <div class="graph-container">
              <div class="graph-unfilled" style="width:100%"></div>

              <div class="graph-needed"   style="width:{{ objProposal.quorumPer | number:2 }}%"></div>
              <div class="graph-yes"      style="width:{{ ( objProposal.yea * 100 ) / token.totRaised | number:2 }}%"></div>
              <div class="graph-no"       style="width:{{ ( objProposal.nay * 100 ) / token.totRaised | number:2 }}%;
                                                 left: {{ ( objProposal.yea * 100 ) / token.totRaised | number:2 }}%;"></div>
            </div>


            <div class="col-xs-9 clearfix">
              <h4>{{objProposal.description}} </h4>
              <p>
                Proposal ID: <strong >{{objProposal.id}}</strong> &middot;
                <span class="text-success" ng-show="objProposal.votingDeadline.getTime() >= objProposal.today.getTime()">ends: <strong>{{objProposal.votingDeadline | date:'medium'}}</strong></span>
                <span class="text-danger" ng-show="objProposal.votingDeadline.getTime() < objProposal.today.getTime()">ended: <strong>{{objProposal.votingDeadline | date:'medium'}}</strong>
              </p></span>
            </div>
            <div class="col-xs-3 clearfix text-right" ng-show="objProposal.split=='No'">
              <h4> {{objProposal.amount | number:4}} </h4>
              <p>  ETH  </p>
            </div>
          </section>
          <section class="proposal-expanded col-xs-12" style="display:block;">
            <p ng-show="objProposal.split=='Yes'"> This is a proposal to Split the DAO. If you vote yes, you must then call the SplitDAO function via Mist in order to join this new Split DAO. <a href="https://daowiki.atlassian.net/wiki/display/DAO/Step-by-Step%3A+Splitting+the+DAO" target="_blank"> Lean More Here.</a> </p>
            <table class="table">
              <tr>
                <td class="label">Votes Yea:</td>
                <td class="output votes-yes">
                  {{ ( objProposal.yea * 100 ) / token.totRaised | number:2 }}% of total
                  &middot;
                  {{objProposal.yeaPer | number:2}}% of votes
                  &middot;
                  <em>({{objProposal.yea | number:2 }})</em></td>
              </tr>
              <tr>
                <td class="label">Votes Nay:</td>
                <td class="output votes-no">
                  {{ ( objProposal.nay * 100 ) / token.totRaised | number:2 }}% of total
                  &middot;
                  {{objProposal.nayPer | number:2}}% of votes
                  &middot;
                  <em>({{objProposal.nay | number:2 }})</em></td>
              </tr>
              <tr>
                <td class="label">Quroum:</td>
                <td class="output">
                  <div class="votes-needed">{{ objProposal.quorumCurrent | number:2 }}% of {{ objProposal.quorumPer | number:2}}%</div>
                </td>
              </tr>
              <tr>
                <td class="label">Creator:</td>
                <td class="output"><div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{objProposal.creator}}" watch-var="objProposal"></div></div>
                {{objProposal.creator}}</td>
              </tr>
              <tr>
                <td class="label">Recipient:</td>
                <td class="output"> <div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{objProposal.recipient}}" watch-var="objProposal"></div></div>
                {{objProposal.recipient}} </td>
              </tr>
              <tr>
                <td class="label">New Curator:</td>
                <td class="output"><span ng-class="objProposal.split=='Yes' ? 'boolean-yes' : 'boolean-no'"> {{objProposal.split}} </span></td>
              </tr>
              <tr>
                <td class="label">Open:</td>
                <td class="output"><span ng-class="objProposal.open=='Yes' ? 'boolean-yes' : 'boolean-no'"> {{objProposal.open}} </span></td>
              </tr>
              <tr>
                <td class="label">Proposal Passed:</td>
                <td class="output"><span ng-class="objProposal.proposalPassed=='Yes' ? 'boolean-yes' : 'boolean-no'"> {{objProposal.proposalPassed}} </span></td>
              </tr>
              <tr>
                <td class="label">Proposal Hash:</td>
                <td class="output">{{objProposal.proposalHash}}</td>
              </tr>
              <tr>
                <td class="label">Proposal Deposit:</td>
                <td class="output">{{objProposal.proposalDeposit}} Ether</td>
              </tr>

            </table>
            <div class="form-group" ng-show="objProposal.votingDeadline.getTime() > objProposal.today.getTime()">
              <a class="btn btn-primary" data-toggle="modal" data-target="#voteProposal">VOTE ON THIS PROPOSAL</a>
            </div>
            <div class="form-group col-xs-12" ng-bind-html="voteTxStatus"></div>
            <div class="form-group col-xs-12" ng-bind-html="sendTxStatus"></div>
          </section>
        </article>
      </section>
      <!-- / Vote on a Proposal -->

    </div>
  <!-- / BOTTOM: The DAO -->


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
              <button type="button" class="btn btn-block btn-danger" ng-click="generateVoteTx(false)">VOTE NO</button>
            </div>
            <div class="col-sm-4 marg-v-md">
              <button type="button" class="btn btn-block btn-default" data-dismiss="modal">GET ME OUT OF HERE</button>
            </div>
            <div class="col-sm-4 marg-v-md">
              <button type="button" class="btn btn-block btn-primary" ng-click="generateVoteTx(true)">VOTE YES</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
  <!-- / Vote Modal -->


</div>
<!-- / The DAO -->

