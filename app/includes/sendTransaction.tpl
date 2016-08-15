<!-- send transaction -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.sendTransaction.id">
  <h2> Send Ether </h2>
  <p> If you want to send Tokens, please use the "Send Token" page instead. </p>
  <div>
      @@if (site === 'cx' ) {
        <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>
      }
      @@if (site === 'mew' ) {
        <wallet-decrypt-drtv></wallet-decrypt-drtv>
      }
  </div>
  <section class="row" ng-show="wallet!=null" ng-controller='sendTxCtrl'>
    <hr />
    <div class="col-sm-4">
      <h4> Account Information </h4>
      <div>
        <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>
        <br />
        <p> Account Address: <br /> <strong style="margin-left: 1em" class="mono">{{wallet.getChecksumAddressString()}}</strong></p>

        <p> Account Balance:
          <br />
          <strong style="margin-left: 1em"> {{etherBalance}} ETH </strong>
          <br />
          <strong style="margin-left: 1em"> {{etcBalance}} ETC </strong>
        </p>
        <p> Equivalent Values:
          <br />
          <strong style="margin-left: 1em"> {{usdBalance}} USD </strong>
          <br />
          <strong style="margin-left: 1em"> {{eurBalance}} EUR </strong>
          <br />
          <strong style="margin-left: 1em"> {{btcBalance}} BTC </strong>
        </p>
        <p> See Transaction History: <br /> <a href="https://etherscan.io/address/{{wallet.getAddressString()}}" target="_blank">https://etherscan.io/address/ {{wallet.getAddressString()}}</a></p>

      </div>
      <br />
      <div class="well">
        <p> MyEtherWallet is a free, open-source service dedicated to your privacy and security. The more donations we receive, the more time we spend creating new features, listening to your feedback, and giving you what you want. We are just two people trying to change the world. Help us?</p>
        <a class="btn btn-primary btn-block" ng-click="onDonateClick()">DONATE</a>
        <div class="text-success text-center marg-v-sm"><strong ng-show="tx.donate"> THANK YOU!!! </strong></div>
      </div>
    </div>
    <div class="col-sm-8">
      <a data-toggle="modal" data-target="#txInfoModal" ng-click="txInfoModal.open()"><div class="alert alert-danger small">
        If you are using the "Only ETH" or "Only ETC" Functions you are sending via a contract. Some services have issues accepting these transactions. Read more.
      </div></a>

      <h4>Send Transaction</h4>

      <div class="form-group col-xs-10">
        <label> To Address: </label>
        <input class="form-control"  type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="tx.to" ng-change="validateAddress()"/>
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
        <a class="pull-right" ng-click="transferAllBalance()" ng-show="tx.sendMode==0">Transfer total available balance</a>
        <input class="form-control" type="text" placeholder="Amount" ng-model="tx.value"/>
        <div class="radio">
          <label><input type="radio" name="currencyRadio" value="0" ng-model="tx.sendMode"/>ETH (Standard Transaction)</label><br />
          <label><input type="radio" name="currencyRadio" value="1" ng-model="tx.sendMode"/>Only ETH </label><br />
          <label><input type="radio" name="currencyRadio" value="2" ng-model="tx.sendMode"/>Only ETC </label>
        </div>
        <!-- advanced option panel -->
        <div ng-show="tx.sendMode==0">
        <a ng-click="toggleShowAdvance()"><p class="strong"> + Advanced: Add More Gas or Data </p></a>
        <section ng-show="showAdvance">
          <div class="form-group">
            <label> Data: </label>
            <input class="form-control" type="text" placeholder="0x6d79657468657277616c6c65742e636f6d20697320746865206265737421" ng-model="tx.data"/>
          </div>
          <div class="form-group">
            <label> Gas: </label>
            <input class="form-control" type="text" placeholder="21000" ng-model="tx.gasLimit"/>
          </div>
        </section>
        </div>
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
      <div class="form-group col-xs-12">
        <p><small> A standard transaction using 21000 gas will cost 0.000441 ETH. We use a slightly-above-minimum gas price of 0.000000021 ETH to ensure it gets mined quickly. We do not take a transaction fee.</small></p>
      </div>

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
                <strong id="confirmCurrancy" class="text-primary"> {{tx.sendMode == 2 ? "ETC" : "ETH"}} </strong>
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

      <!-- Info Modal -->
      <div class="modal fade" id="txInfoModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel"> <strong class="text-danger">"Only ETH" and "Only ETC" Transactions</strong></h4>
            </div>
            <div class="modal-body">
              <p>A note about the different transactions and different services:</p>
              <ul>
                <li><strong> ETH (Standard Transaction):</strong> This generates a default transaction directly from one address to another. It has a default gas of 21000. It is likely that any ETH sent via this method will be replayed onto the ETC chain.</li>
                <li><strong> Only ETH:</strong> This sends via <a href="https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/" target="_blank"> Timon Rapp's replay protection contract (as recommended by VB)</a> so that you only send on the <strong>ETH</strong> chain.</li>
                <li><strong> Only ETC:</strong> This sends via <a href="https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/" target="_blank"> Timon Rapp's replay protection contract (as recommended by VB)</a> so that you only send on the <strong>ETC</strong> chain. </li>
                <li><strong>Coinbase & ShapeShift:</strong> Only send via Standard Transaction. If you send via the "Only" contracts, you will need to reach out to their support staff to manually add your balance or refund you. <a href="https://split.shapeshift.io/" target="_blank"> You can try Shapeshift's "split" tool as well. </li>
                <li><strong> Kraken & Poloniex: </strong> No known issues. Use whatever.</li>
              </ul>
            </div>
            <div class="modal-footer text-center">
              <a href="mailto:myetherwallet@gmail.com" type="button" class="btn btn-danger">Oh gosh, I'm more confused. Help me.</a>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Sweet, I get it now.</button>
            </div>
          </div>
        </div>
      </div>
      <!--/modal-->

    </div>
  </section>
</div>
<!-- /send transaction -->
