<!-- The DAO Proposals -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.daoproposals.id">

  <section class="row">
    <div class="col-xs-12">
      <h2> Browse DAO Proposals </h2>
      <p><a ng-click="globalService.currentTab=globalService.tabs.dao.id">If you would like to Send DAO Tokens, please click here.</a> Learn more at <a href="http://daohub.org/" target="_blank">DAOHub</a>, <a href="https://blog.slock.it/the-art-of-the-dao-experiments-with-the-generic-dao-framework-4782f7862131#.bibozinlb" target="_blank">The Art of the DAO</a>, and <a href="https://forum.daohub.org/c/theDAO" target="_blank">DAO Hub Forums (Support, too!)</a></p>
    </div>
  </section>

  <!-- DAO Proposals -->
  <section class="proposal-container" ng-controller='theDaoProposalCtrl'>
    <!-- DAO Filters -->
  <section class="row" style="margin-bottom: 10px;">
    <h4 class="col-xs-12"> Show.... </h4>


    <div class="proposal-filter-container col-sm-5">

      <a class="proposal-filter" ng-class="filterM=='current' ? 'active' : ''" ng-click="filterProposals('current','')">Current Proposals</a>
      <a class="proposal-filter" ng-class="filterM=='past' ? 'active' : ''" ng-click="filterProposals('past','')">Past Proposals</a>
     </div>
     <div class="proposal-filter-container col-sm-5">
      <a class="proposal-filter" ng-class="filterS=='nsplit' ? 'active' : ''" ng-click="filterProposals('','nsplit')">Non-Split Proposals</a>
      <a class="proposal-filter" ng-class="filterS=='split' ? 'active' : ''" ng-click="filterProposals('','split')">Split Proposals</a>
     </div>
     <div class="proposal-filter-container col-sm-2">
      <a class="proposal-filter" style="width: 100%;" ng-class="filterM=='all' || filterS=='all' ? 'active' : ''" ng-click="filterProposals('all','all')">All Proposals</a>
    </div>
  </section>
  <!-- / DAO Filters -->
      <article class="proposal-item col-xs-12" ng-show="objProposal.show" ng-repeat="objProposal in AllProposals track by $index" ng-if="$index >= 1">
    <section class="proposal-top clearfix" ng-click="showProposal($index)">
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
      <div class="col-xs-3 clearfix text-right" ng-show="objProposal.split=='No'">
        <h4> &nbsp; {{objProposal.amount}}</h4>
        <p>  ETH  </p>
      </div>
      <div class="col-xs-3 clearfix text-right" ng-show="objProposal.split=='Yes'">
        <h4> Split </h4>
        <p>  &nbsp; </p>
      </div>
    </section>
    <section class="proposal-expanded col-xs-12" ng-show="objProposal.showprop">
      <p class="description-html" ng-show="objProposal.descriptionHTML!==null"> {{ objProposal.descriptionHTML }} </p>
      <p ng-show="objProposal.split=='Yes'"><em>This is a proposal to Split the DAO. If you vote yes, you must then call the SplitDAO function via Mist in order to join this new Split DAO. <a href="https://daowiki.atlassian.net/wiki/display/DAO/Step-by-Step%3A+Splitting+the+DAO" target="_blank"> Lean More Here.</a></em></p>
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
        <tr ng-show="objProposal.split=='No'">
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
        <a class="btn btn-primary" ng-click="openVote($index)">VOTE ON THIS PROPOSAL</a>
      </div>
    </section>
  </article>'






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
  </section>
  <!-- /DAO Proposals -->
</div>
<!-- / The DAO Proposals -->





