<!-- the dao -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.thedao.id">
  <section class="row">
  <div class="col-md-9 col-sm-8">
    <h2> "The DAO" </h2>
    <p>The best way to participate in the DAO Creation is to send a transaction to The DAO Address from the account you want to do the voting with in the future. You can do that here! Simply access the account, enter the amount of ETH you would like, and press send. Wait a minute, refresh the page, and your tokens will be displayed in the lower left.</p>
    <p>It should be noted that in order to participate in the voting process later, you will need a <em>small</em> amount of ETH to cover the cost of gas.</p>
    <p>Helpful links: <a href="http://daohub.org/" target="_blank">DAOHub</a> &middot; <a href="https://blog.slock.it/the-art-of-the-dao-experiments-with-the-generic-dao-framework-4782f7862131#.bibozinlb" target="_blank">The Art of the DAO</a> &middot; <a href="https://forum.daohub.org/c/theDAO" target="_blank">DAO Hub Forums (Support, too!)</a></p>
    </div>
    <div class="col-md-3 col-sm-4"><img src="images/thedao-addressicon.png" width="300px" height="auto" style="margin-top: 32px;" /></div>
  </section>
  <div>
    <wallet-decrypt-drtv></wallet-decrypt-drtv>
  </div>
  <section class="row" ng-show="wallet!=null" ng-controller='theDaoCtrl'>
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
        <p> "The DAO" Details: <br />
          <strong class="text-primary" style="margin-left: 1em"> Your Tokens: <br /> {{token.balance}}</strong>
        </p>

        </p>
      </div>
      <br />
    </div>

    <div class="col-sm-8">
      <h4>Get DAO Tokens</h4>
      <div class="form-group col-xs-10">
        <label> To Address: </label>
        <input class="form-control readonly"   type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="tx.to" ng-change="validateAddress()" readonly/>
        <div ng-bind-html="validateAddressStatus"></div>
      </div>
      <div class="col-xs-2 address-identicon-container">
        <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div>
      </div>
      <div class="form-group col-xs-12">
        <label>
          Amount to Send:
          <br />
        </label>
        <input class="form-control" type="text" placeholder="Amount" ng-model="tx.value"/>
        <div class="radio">
          <label>
            <input type="radio" name="currencyRadio" value="ether" ng-model="tx.unit"/>Ether</label>
          <label>
            <input type="radio" name="currencyRadio" value="finney" ng-model="tx.unit"/>Finney</label>
          <label>
            <input type="radio" name="currencyRadio" value="szabo" ng-model="tx.unit"/>Szabo</label>
        </div>
        <!-- advanced option panel -->
        <section>
          <div class="form-group">
            <label> Gas: </label>
            <input class="form-control readonly" type="text" ng-model="tx.gasLimit" readonly/>
          </div>
        </section>
        <!-- / advanced option panel -->
      </div>
      <div class="form-group col-xs-12">
        <a class="btn btn-info btn-block" ng-click="generateTx()">GENERATE TRANSACTION</a>
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
<!-- /the dao -->
