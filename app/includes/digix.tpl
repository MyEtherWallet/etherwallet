<!-- digix -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.digix.id">
  <h2> Digix </h2>
  <p>MyEtherWallet.com is proud to partner with Digix to provide a way for you to <strong>claim</strong> and <strong> send </strong> your DigixDAO (DGD) tokens & badges! In order to claim, you must have participated in the token sale on March 30th/31st.</p>

  <div>
      @@if (site === 'cx' ) {
        <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>
      }
      @@if (site === 'mew' ) {
        <wallet-decrypt-drtv></wallet-decrypt-drtv>
      }
  </div>

  <section class="row" ng-show="wallet!=null" ng-controller='digixCtrl'>
    <hr />

    <!-- Account Information - Left Column -->
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
        <p> DGD Crowdsale Information: <br />
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
        <p> DGD Tokens: <br />
            <strong style="margin-left: 1em"> {{tokenBalance}} DGD </strong>
        </p>
        <p> DGD Badges: <br />
            <strong style="margin-left: 1em"> {{badgeBalance}} DGDb  </strong>
        </p>
      </div>
      <br />
    </div>
    <!-- Account Information - Left Column -->


    <!-- Claim / Send Information - Right Column -->
    <div class="col-sm-8 digix-send">
      <h4> <a ng-class="{active: !showSend}" ng-click="showSend=false"> Claim your DGD Tokens </a>  <a ng-class="{active: showSend}" ng-click="showSend=true"> &middot; Send your DGD Tokens or DGD Badges </a> </h4>

      <!-- Claim Interface -->
      <div ng-show="!showSend">
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
        <a class="btn btn-info btn-block" ng-click="generateTx()">GENERATE CLAIM</a>
      </div>
      </div>
      <!-- / Claim Interface -->



      <!-- Send Tokens Interface -->
      <div ng-show="showSend">
      <div class="form-group col-xs-10">
        <label> To Address: </label>
        <input class="form-control"  type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="tokenTx.to" ng-change="validateAddress(tokenTx.to,'validateAddressStatus')"/>
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
          <label>
            <input type="radio" name="tokenRadio" value="dgd" ng-model="tokenTx.unit"/>DGD Tokens</label>
          <label>
            <input type="radio" name="tokenRadio" value="dgdb" ng-model="tokenTx.unit"/>DGD Badges</label>
        </div>
          <div class="form-group">
            <label> Gas: </label>
            <input class="form-control" type="text" ng-model="tx.gasLimit"/>
          </div>
      </div>
      <div class="form-group col-xs-12">
        <a class="btn btn-info btn-block" ng-click="generateTokenTx()">GENERATE TRANSACTION</a>
      </div>
      </div>
     <!-- / Send Tokens Interface -->


      <!-- raw transaction / buttons -->
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
        <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#sendTransaction">EXECUTE TRANSACTION</a>
      </div>
      <div class="form-group col-xs-12" ng-bind-html="sendTxStatus"></div>
      <!-- / raw transaction / buttons -->


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
                <strong id="confirmAmount" class="text-primary"> {{tokenTx.value}} </strong>
                <strong id="confirmCurrancy" class="text-primary"> {{tokenTx.unit}} </strong>
                to address
                <strong id="confirmAddress" class="text-primary"> {{tokenTx.to}} </strong>
              </h4>
              <h4> Are you <span class="text-underline"> sure </span> you want to do this?</h4>
            </div>
            <div class="modal-footer text-center">
              <button type="button" class="btn btn-default" data-dismiss="modal">No, get me out of here!</button>
              <button type="button" class="btn btn-primary" ng-click="sendTx()">Yes, I am sure! Execute transaction.</button>
            </div>
          </div>
        </div>
      </div>
      <!--/modal-->

    </div>
  </section>
</div>
<!-- /digix -->
