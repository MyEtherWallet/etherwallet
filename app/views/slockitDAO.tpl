<!-- slock.it dao -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.slockitDAO.id">
  <h2> Slock.it DAO </h2>
  <p>Yay Slock.it! Yay DAO creation! Helpful links:
     <a href="https://blog.slock.it/the-art-of-the-dao-experiments-with-the-generic-dao-framework-4782f7862131#.bibozinlb" target="_blank">The Art of the DAO</a> &middot;
     <a href="http://daohub.org/" target="_blank">DAOHub</a>
  </p>
  <div>
    <wallet-decrypt-drtv></wallet-decrypt-drtv>
  </div>
  <section class="row" ng-show="wallet!=null" ng-controller='digixCtrl'>
    <hr />
    <div class="col-sm-4">
      <h4> Account Information </h4>
      <div>
        <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
        <br />
        <p> Account Address:
          <br /> <strong style="margin-left: 1em" class="mono">{{wallet.getChecksumAddressString()}}</strong></p>
          <p> Account Balance:
          <br />
            <strong class="text-success" style="margin-left: 1em"> {{etherBalance}} Ether </strong>
            <br />
            <strong class="text-success" style="margin-left: 1em"> {{usdBalance}} USD </strong>
            <br />
            <strong class="text-success"  style="margin-left: 1em"> {{eurBalance}} EUR </strong>
            <br />
            <strong class="text-success" style="margin-left: 1em"> {{btcBalance}} BTC </strong>
        </p>
        <p> Slock.it Details: <br />
            <strong style="margin-left: 1em"> Centstotal: {{centsTotal}} </strong>
            <br />
            <strong style="margin-left: 1em"> Weitotal: {{weiTotal}} </strong>
            <br />
            <strong  style="margin-left: 1em"> Share: {{shareTotal}} </strong>
            <br />
            <strong style="margin-left: 1em"> Badges: {{badgesTotal}} </strong>
            <br />
            <strong style="margin-left: 1em"> Claimed? {{claimedTotal}} </strong>
        </p>
      </div>
      <br />
    </div>
    <div class="col-sm-8">
      <h4>Claim your DGD Tokens</h4>
      <div class="form-group col-xs-12">
        <label>
          Estimated fee consumption:
          <br />
        </label>
        <input class="form-control disabled" type="text" value="0.00043598 ether (21,799 gas)" readonly />
      </div>
     <div class="form-group col-xs-12">
        <label>
          Provided Maximum Fee:
          <br />
        </label>
        <input class="form-control disabled" type="text" value="0.00243598 ether (121,799 gas)" readonly />
      </div>
     <div class="form-group col-xs-12">
        <label>
          Gas Price:
          <br />
        </label>
        <input class="form-control disabled" type="text" value="0.021 ether per million gas" readonly />
      </div>
     <div class="form-group col-xs-12">
        <label>
          Data:
          <br />
        </label>
        <input class="form-control disabled" type="text" readonly ng-model="tx.data"/>
      </div>
      <div class="form-group col-xs-12">
        <a class="btn btn-info btn-block" ng-click="generateTx()">CLAIM</a>
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
        <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#sendTransaction">CLAIM</a>
      </div>
      <div class="form-group col-xs-12" ng-bind-html="sendTxStatus"></div>

      <!-- Modal -->
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
                <strong id="confirmAmount" class="text-primary"> {{tx.value}} </strong>
                <strong id="confirmCurrancy" class="text-primary"> {{tx.unit}} </strong>
                to address
                <strong id="confirmAddress" class="text-primary"> {{tx.to}} </strong>
              </h4>
              <h4> Are you <span class="text-underline"> sure </span> you want to do this?</h4>
            </div>
            <div class="modal-footer text-center">
              <button type="button" class="btn btn-default" data-dismiss="modal">No, get me out of here!</button>
              <button type="button" class="btn btn-primary" ng-click="sendTx()">Yes, I am sure! Make transaction.</button>
            </div>
          </div>
        </div>
      </div>
      <!--/modal-->
    </div>
  </section>
</div>
<!-- /slock.it dao -->
