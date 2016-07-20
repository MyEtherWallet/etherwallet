<!-- Digix -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.digix.id">
  <h2> Digix </h2>
  <p><strong>Claim</strong> and <strong> Send </strong> your DigixDAO (DGD) tokens & badges. In order to claim, you must have participated in the token sale on March 30th/31st.</p>

  @@if (site === 'cx' ) {
    <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>
  }
  @@if (site === 'mew' ) {
    <wallet-decrypt-drtv></wallet-decrypt-drtv>
  }

  <section class="row" ng-show="wallet!=null" ng-controller='digixCtrl'>
    <hr />

    <!-- Account Information - Left Column -->
    <section class="col-sm-4">
      <h4> Account Information </h4>
      <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
      <br />
      <p>
        Account Address: <br />
        <strong style="padding-left: 1em; display: block;" class="mono word-wrap">{{wallet.getChecksumAddressString()}}</strong>
      </p>
      <p>
        ETH Balance: <br />
        <strong style="margin-left: 1em"> {{etherBalance}} Ether </strong>
      </p>
      <p> DGD Token Balance: <br />
        <strong style="margin-left: 1em"> {{tokenBalance}} DGD </strong>
      </p>
      <p> DGD Badge Balance: <br />
        <strong style="margin-left: 1em"> {{badgeBalance}} DGDb  </strong>
      </p>
      <p> DGD Crowdsale Information: <br />
        <strong style="margin-left: 1em"> Centstotal: {{centsTotal}} </strong><br />
        <strong style="margin-left: 1em"> Weitotal: {{weiTotal}} </strong><br />
        <strong  style="margin-left: 1em"> Share: {{shareTotal}} </strong><br />
        <strong style="margin-left: 1em"> Badges: {{badgesTotal}} </strong><br />
        <strong style="margin-left: 1em"> Claimed? {{claimedTotal}} </strong>
      </p>
      <p>
        Equivalent Values: <br />
        <strong style="margin-left: 1em"> {{usdBalance}} USD </strong> <br />
        <strong style="margin-left: 1em"> {{eurBalance}} EUR </strong> <br />
        <strong style="margin-left: 1em"> {{btcBalance}} BTC </strong>
      </p>
      <p> See Transaction History:
        <br />
        <a href="https://etherscan.io/address/{{wallet.getAddressString()}}" target="_blank">https://etherscan.io/address/ {{wallet.getAddressString()}}</a>
      </p>
      <br />
      <div class="well">
        <p> MyEtherWallet is a free, open-source service dedicated to your privacy and security. The more donations we receive, the more time we spend creating new features, listening to your feedback, and giving you what you want. We are just two people trying to change the world. Help us?</p>
        <a class="btn btn-primary btn-block" ng-click="onDonateClick()">DONATE</a>
        <div class="text-success text-center marg-v-sm"><strong ng-show="tx.donate"> THANK YOU!!! </strong></div>
      </div>
    </section>
    <!-- Account Information - Left Column -->


    <!-- Claim / Send Information - Right Column -->
    <section class="col-sm-8 digix-send">

      <article class="btn-group">
        <a class="btn btn-primary" ng-class="{active: showSend}" ng-click="showSend=true"> Send your DGD Tokens or Badges </a>
        <a class="btn btn-primary" ng-class="{active: !showSend}" ng-click="showSend=false"> Claim your DGD Tokens </a>
      </article>

      <!-- Send Tokens Interface -->
      <article ng-show="showSend">
        <h4> Send Your DGD Tokens or Badges </h4>
        <div class="form-group col-xs-10">
          <label> To Address: </label>
          <input class="form-control" type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="tokenTx.to" ng-change="validateAddress(tokenTx.to,'validateAddressStatus')"/>
          <div ng-bind-html="validateAddressStatus"></div>
        </div>
        <div class="col-xs-2 address-identicon-container">
          <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{tokenTx.to}}" watch-var="tokenTx.to"></div>
        </div>
        <div class="form-group col-xs-12">
          <label>Amount to Send:</label><br />
          <input class="form-control" type="text" placeholder="Amount" ng-model="tokenTx.value"/>
          <div class="radio">
            <label><input type="radio" name="tokenRadio" value="dgd" ng-model="tokenTx.unit"/>DGD Tokens</label>
            <label><input type="radio" name="tokenRadio" value="dgdb" ng-model="tokenTx.unit"/>DGD Badges</label>
          </div>
          <div class="form-group">
            <label> Gas: </label>
            <input class="form-control" type="text" ng-model="tx.gasLimit"/>
          </div>
        </div>
        <div class="form-group col-xs-12">
          <a class="btn btn-info btn-block" ng-click="generateTokenTx()">GENERATE TRANSACTION</a>
        </div>
      </article>
      <!-- / Send Tokens Interface -->

      <!-- Claim Interface -->
      <article ng-show="!showSend">
        <h4> Claim Your DGD Tokens </h4>
        <div class="form-group col-xs-12">
          <label>Estimated fee consumption:</label><br />
          <input class="form-control disabled" type="text" value="0.00043598 ether (21,799 gas)" readonly />
        </div>
       <div class="form-group col-xs-12">
          <label>Provided Maximum Fee:</label><br />
          <input class="form-control disabled" type="text" value="0.00243598 ether (121,799 gas)" readonly />
        </div>
       <div class="form-group col-xs-12">
          <label>Gas Price:</label><br />
          <input class="form-control disabled" type="text" value="0.021 ether per million gas" readonly />
        </div>
       <div class="form-group col-xs-12">
          <label>Data:</label><br />
          <input class="form-control disabled" type="text" readonly ng-model="tx.data"/>
        </div>
        <div class="form-group col-xs-12">
          <a class="btn btn-info btn-block" ng-click="generateTx()">GENERATE CLAIM</a>
        </div>
      </article>
      <!-- / Claim Interface -->

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
    </section>
  <!-- Modal -->
  <section class="modal fade" id="sendTransaction" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
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
  </section>
  <!--/ Modal -->
  </section>

</div>
<!-- / Digix -->
