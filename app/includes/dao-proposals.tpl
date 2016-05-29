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
  <!-- TODO: make these work, change active class on click -->
  <section class="row" style="margin-bottom: 10px;">
    <h4 class="col-xs-12"> Show.... </h4>
    <div class="proposal-filter-container col-sm-6">
      <a class="proposal-filter" ng-class="filter=='current' ? 'active' : ''" ng-click="filterProposals('current')">Current Proposals</a>
      <a class="proposal-filter" ng-class="filter=='past' ? 'active' : ''" ng-click="filterProposals('past')">Previous Proposals</a>
    </div>
    <div class="proposal-filter-container col-sm-6">
      <a class="proposal-filter" ng-class="filter=='nsplit' ? 'active' : ''" ng-click="filterProposals('nsplit')">Non-Split Proposals</a>
      <a class="proposal-filter" ng-class="filter=='split' ? 'active' : ''" ng-click="filterProposals('split')">Split Proposals</a>
    </div>
  </section>
  <!-- / DAO Filters -->
    <dao-proposal-drtv></dao-proposal-drtv>
  </section>
  <!-- /DAO Proposals -->


  <!-- Vote Modal -->
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title" id="myModalLabel">Unlock your Wallet to Vote on Proposal #1</h3>
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

          <!-- Step 2: Confirm and Vote -->
          <h4>You are about to vote on Proposal <strong>#1</strong>: DAO Support Proposal.</h4>
          <h4 class="text-light">Please vote carefully, there are no do-overs or take-backs.</h4>

          <div class="row">
            <div class="col-sm-4 marg-v-md">
              <button type="button" class="btn btn-block btn-danger" ng-click="sendTx()">VOTE NO</button>
            </div>
            <div class="col-sm-4 marg-v-md">
              <button type="button" class="btn btn-block btn-default" data-dismiss="modal">GET ME OUT OF HERE</button>
            </div>
            <div class="col-sm-4 marg-v-md">
              <button type="button" class="btn btn-block btn-primary" ng-click="sendTx()">VOTE YES</button>
            </div>
          </div>
          <!-- / Step 2: Confirm and Vote -->

        </div>
      </div>
    </div>
  </div>
  <!-- / Vote Modal -->



</div>
<!-- / The DAO Proposals -->





