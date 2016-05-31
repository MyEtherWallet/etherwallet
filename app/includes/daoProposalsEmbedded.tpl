<!-- The DAO Proposals -->
<div class="dao-proposals-embedded">
<br/><br/>
  <section class="proposal-container" ng-controller='theDaoProposalCtrl'>
    <!-- DAO Filters -->
        <article class="proposal-item col-xs-12" ng-show="objProposal.show" ng-repeat="objProposal in AllProposals | filter:filters:comparator | orderBy : '-id' " >
          <section class="proposal-top clearfix" ng-click="showProposal(objProposal.id)">
            <div class="graph-container">
              <div class="graph-unfilled" style="width:100%"></div>
              <div class="graph-needed"   style="width:{{ objProposal.quorumPer | number:2 }}%"></div>
              <div class="graph-yes"      style="width:{{ ( objProposal.yea * 100 ) / totRaised | number:2 }}%"></div>
              <div class="graph-no"       style="width:{{ ( objProposal.nay * 100 ) / totRaised | number:2 }}%;
                                                 left: {{ ( objProposal.yea * 100 ) / totRaised | number:2 }}%;"></div>
            </div>
            <div class="col-xs-9 clearfix">
              <h4>{{objProposal.description}} </h4>
              <p>
                Proposal ID: <strong >{{objProposal.id}}</strong> &middot;
                <span class="text-success" ng-show="objProposal.votingDeadline.getTime() >= objProposal.today.getTime()">ends: <strong>{{objProposal.votingDeadline | date:'medium'}}</strong></span>
                <span class="text-danger" ng-show="objProposal.votingDeadline.getTime() < objProposal.today.getTime()">ended: <strong>{{objProposal.votingDeadline | date:'medium'}}</strong>
              </p></span>
            </div>
            <div class="col-xs-3 clearfix text-right" ng-show="objProposal.split==false">
              <h4> &nbsp; {{objProposal.amount}}</h4>
              <p>  ETH  </p>
            </div>
            <div class="col-xs-3 clearfix text-right" ng-show="objProposal.split==true">
              <h4> Split </h4>
              <p>  &nbsp; </p>
            </div>
          </section>
          <section class="proposal-expanded col-xs-12">
            <div class="description-html" ng-bind-html="objProposal.descriptionHTML"></div>
            <p ng-show="objProposal.split==true"><em>This is a proposal to Split the DAO. If you vote yes, you must then call the SplitDAO function via Mist in order to join this new Split DAO. <a href="https://daowiki.atlassian.net/wiki/display/DAO/Step-by-Step%3A+Splitting+the+DAO" target="_blank"> Lean More Here.</a></em></p>
            <table class="table">
              <tr>
                <td class="label">Votes Yea:</td>
                <td class="output votes-yes">
                  {{ ( objProposal.yea * 100 ) / totRaised | number:2 }}% of total
                  &middot;
                  {{objProposal.yeaPer | number:2}}% of votes
                  &middot;
                  <em>({{ (objProposal.yea * 100) | number:2 }} DAO) </em></td>
              </tr>
              <tr>
                <td class="label">Votes Nay:</td>
                <td class="output votes-no">
                  {{ ( objProposal.nay * 100 ) / totRaised | number:2 }}% of total
                  &middot;
                  {{objProposal.nayPer | number:2}}% of votes
                  &middot;
                  <em>({{ (objProposal.nay * 100) | number:2 }} DAO) </em></td>
              </tr>
              <tr ng-show="objProposal.split==false">
                <td class="label">Quorum:</td>
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
                <td class="output"><span ng-class="objProposal.split==true ? 'boolean-yes' : 'boolean-no'"> {{objProposal.splitEnglish}} </span></td>
              </tr>
              <tr>
                <td class="label">Open:</td>
                <td class="output"><span ng-class="objProposal.open==true ? 'boolean-yes' : 'boolean-no'"> {{objProposal.openEnglish}} </span></td>
              </tr>
              <tr>
                <td class="label">Proposal Passed:</td>
                <td class="output"><span ng-class="objProposal.proposalPassed==true ? 'boolean-yes' : 'boolean-no'"> {{objProposal.proposalPassedEnglish}} </span></td>
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
              <a class="btn btn-primary" ng-click="openVote(objProposal.id)">VOTE ON THIS PROPOSAL</a>
            </div>
          </section>
        </article>

  <!-- Vote Modal -->
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel" id="voteProposal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title" id="myModalLabel">Unlock your Wallet to Vote on Proposal #{{voteID}}</h3>
        </div>
        <div class="modal-body">

          <!-- Step 1: Unlock Your Wallet -->
          <div>
            @@if (site === 'cx' ) {
              <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>
            }
            @@if (site === 'mew' ) {
              <wallet-decrypt-drtv></wallet-decrypt-drtv>
            }
          </div>
          <!-- / Step 1: Unlock Your Wallet -->

          <hr />
          <div ng-show="wallet!=null">
          <!-- Step 2: Confirm and Vote -->
          <h4>You are about to vote on Proposal <strong>#{{voteID}}</strong>: {{AllProposals[voteID].description}}.</h4>
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
          </div>
          <div class="row">
            <div class="form-group col-xs-12" ng-bind-html="sendTxStatus"></div>
            <div class="form-group col-xs-12" ng-bind-html="voteTxStatus"></div>
          </div>
          <!-- / Step 2: Confirm and Vote -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- / Vote Modal -->

  <!-- TODO: make these work, change active class on click -->


  </section>
  <!-- / DAO Filters -->


  </section>
  <!-- /DAO Proposals -->
</div>
<!-- / The DAO Proposals -->

