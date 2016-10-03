<!-- Send Transaction Page -->
<article class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.sendTransaction.id" ng-controller='sendTxCtrl'>

  <!-- TODO: Show this message if the URL has a query string.
  <p class="alert alert-info" ng-show="tx.sendMode==0"> You clicked a link that has the address, amount, gas, and/or data fields pre-filled for you. You can change any information before sending. Unlock your wallet to get started. </p>
  -->

  <article class="collapse-container">

    <div ng-click="wd = !wd">
      <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>

        <h2 translate="NAV_SendEther"> Send Ether </h2>

    </div>
    <div ng-show="!wd">

        <p translate="TRANS_desc"> If you want to send Tokens, please use the "Send Token" page instead. </p>
        @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
        @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }

    </div>
  </article>



  <section class="row" ng-show="wallet!=null">
    <hr ng-show="!wd" />

    <!-- Sidebar -->
    <div class="col-sm-4">

      <h4 translate="sidebar_AccountInfo"> Account Information: </h4>

      <div id="addressIdenticon" class="med" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>

      <div translate="sidebar_AccountAddr"> Account Address: </div>
      <ul class="account-info">
        <li class="mono wrap"> {{wallet.getChecksumAddressString()}} </li>
      </ul>

      <div translate="sidebar_AccountBal"> Account Balance: </div>
      <ul class="account-info">
        <li><span class="mono wrap">{{etherBalance}}</span> ETH </li>
        <li><span class="mono wrap">{{etcBalance}}</span> ETC </li>
      </ul>

      <div translate="sidebar_Equiv"> Equivalent Values: </div>
      <ul class="account-info">
        <li><span class="mono wrap">{{usdBalance}}</span> USD </li>
        <li><span class="mono wrap">{{eurBalance}}</span> EUR </li>
        <li><span class="mono wrap">{{btcBalance}}</span> BTC </li>
      </ul>

      <div translate="sidebar_TransHistory"> Transaction History: </div>
      <ul class="account-info">
        <li><a href="https://etherscan.io/address/{{wallet.getAddressString()}}" target="_blank">https://etherscan.io/address/ {{wallet.getAddressString()}}</a></li>
      </ul>

      <div class="well">
        <p translate="sidebar_donation"> MyEtherWallet is a free, open-source service dedicated to your privacy and security. The more donations we receive, the more time we spend creating new features, listening to your feedback, and giving you what you want. We are just two people trying to change the world. Help us?</p>
        <a class="btn btn-primary btn-block" ng-click="onDonateClick()" translate="sidebar_donate">DONATE</a>
        <div class="text-success text-center marg-v-sm" ng-show="tx.donate" translate="sidebar_thanks"> THANK YOU!!! </div>
      </div>
    </div>
    <!-- / Sidebar -->


    <!-- Content -->
    <div class="col-sm-8">

      <a data-toggle="modal" data-target="#txInfoModal" ng-click="txInfoModal.open()">
        <div class="alert alert-danger small" translate="TRANS_warning">If you are using the "Only ETH" or "Only ETC" Functions you are sending via a contract. Some services have issues accepting these transactions. Read more.</div>
      </a>

      <h4 translate="SEND_trans">Send Transaction</h4>

      <div class="form-group col-xs-10">
        <label translate="SEND_addr"> To Address: </label>
        <input class="form-control"  type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="tx.to" ng-class="Validator.isValidAddress(tx.to) ? 'is-valid' : 'is-invalid'"/>
      </div>

      <div class="col-xs-2 address-identicon-container">
        <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div>
      </div>

      <div class="form-group col-xs-12">
        <label translate="SEND_amount">Amount to Send:</label>
        <a class="pull-right" ng-click="transferAllBalance()" translate="SEND_TransferTotal">Send Entire Balance</a>
        <input class="form-control" type="text" placeholder="{{ 'SEND_amount_short' | translate }}" ng-model="tx.value" ng-class="Validator.isPositiveNumber(tx.value) ? 'is-valid' : 'is-invalid'"/>
        <div class="radio">
          <label><input type="radio" name="currencyRadio" value="0" ng-model="tx.sendMode"/>
            <span translate="TRANS_standard">ETH (Standard Transaction)</span></label>
          <br />
          <label><input type="radio" name="currencyRadio" value="1" ng-model="tx.sendMode"/>
            <span translate="TRANS_eth">Only ETH </span></label>
          <br />
          <label><input type="radio" name="currencyRadio" value="2" ng-model="tx.sendMode"/>
            <span translate="TRANS_etc">Only ETC </span></label>
        </div>
        <div class="form-group">
          <label translate="TRANS_gas"> Gas: </label>
          <input class="form-control" type="text" placeholder="21000" ng-model="tx.gasLimit" ng-class="Validator.isPositiveNumber(tx.gasLimit) ? 'is-valid' : 'is-invalid'"/>
        </div>

        <!-- Advanced Option Panel -->
        <div  ng-show="tx.sendMode==0">
          <a ng-click="toggleShowAdvance()">
            <p class="strong" translate="TRANS_advanced"> + Advanced: Add Data </p>
          </a>
          <section ng-show="showAdvance">
            <div class="form-group">
              <label translate="TRANS_data"> Data: </label>
              <input class="form-control" type="text" placeholder="0x6d79657468657277616c6c65742e636f6d20697320746865206265737421" ng-model="tx.data" ng-class="Validator.isValidHex(tx.data) ? 'is-valid' : 'is-invalid'"/>
            </div>
          </section>
        </div>
        <!-- / Advanced Option Panel -->
      </div>

      <div class="form-group col-xs-12">
        <a class="btn btn-info btn-block" ng-click="generateTx()" translate="SEND_generate"> GENERATE TRANSACTION </a>
      </div>

      <div class="col-xs-12">
         <div ng-bind-html="validateTxStatus"></div>
      </div>

      <div class="form-group col-xs-12" ng-show="showRaw">
        <label translate="SEND_raw"> Raw Transaction </label>
        <textarea class="form-control" rows="4" disabled >{{rawTx}}</textarea>
        <label translate="SEND_signed"> Signed Transaction </label>
        <textarea class="form-control" rows="4" disabled >{{signedTx}}</textarea>
      </div>

      <div class="form-group col-xs-12" ng-show="showRaw">
        <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#sendTransaction" translate="SEND_trans"> Send Transaction </a>
      </div>

      <div class="form-group col-xs-12" ng-bind-html="sendTxStatus"></div>

      <div class="form-group col-xs-12 small">
        <!--<p translate="TRANS_sendInfo">-->
        <p> We use a gas price of 0.000000021 ETH to ensure your TX gets mined quickly. Multiply 0.000000021 by the gas of your TX to obtain the cost of the TX in ether. We do not take a transaction fee. </p>
        <p> Standard TX: 21000 gas (0.000441 ether) <br />
            TX to Wallet Contract: 23300 gas (0.0004893 ether) <br />
            Only ETH / ETC TX: 60000 gas (0.00126 ether) </p>
      </div>
      <!-- / Content -->

      <!-- Send Modal -->
      <div class="modal fade" id="sendTransaction" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">

            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h3 class="modal-title text-danger" id="myModalLabel" translate="SENDModal_Title">Warning!</h3>
            </div>

            <div class="modal-body">
              <h4>
                <span translate="SENDModal_Content_1">You are about to send</span>
                <strong id="confirmAmount" class="text-primary"> {{tx.value}} </strong>
                <strong id="confirmCurrancy" class="text-primary"> {{tx.sendMode == 2 ? "ETC" : "ETH"}}  </strong>
                <span translate="SENDModal_Content_2">to address</span>
                <strong id="confirmAddress" class="text-primary"> {{tx.to}} </strong>
              </h4>
              <h4 translate="SENDModal_Content_3"> Are you sure you want to do this? </h4>
            </div>

            <div class="modal-footer text-center">
              <button type="button" class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">No, get me out of here!</button>
              <button type="button" class="btn btn-primary" ng-click="sendTx()" translate="SENDModal_Yes">Yes, I am sure! Make transaction.</button>
            </div>

          </div>
        </div>
      </div>
      <!--/ Send Modal-->

      <!-- Info Modal -->
      <div class="modal fade" id="txInfoModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">

            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title text-danger" id="myModalLabel" translate="TRANSModal_Title"> "Only ETH" and "Only ETC" Transactions </h4>
            </div>

            <div class="modal-body">
              <p translate="TRANSModal_Content_0">A note about the different transactions and different services:</p>
              <ul>
                <li translate="TRANSModal_Content_1">**ETH (Standard Transaction): ** This generates a default transaction directly from one address to another. It has a default gas of 21000. It is likely that any ETH sent via this method will be replayed onto the ETC chain.</li>
                <li translate="TRANSModal_Content_2">**Only ETH: ** This sends via [Timon Rapp\'s replay protection contract (as recommended by VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) so that you only send on the **ETH** chain.</li>
                <li translate="TRANSModal_Content_3">**Only ETC: ** This sends via [Timon Rapp\'s replay protection contract (as recommended by VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) so that you only send on the **ETC** chain. </li>
                <li translate="TRANSModal_Content_4">**Coinbase & ShapeShift: ** Only send via Standard Transaction. If you send via the "Only" contracts, you will need to reach out to their support staff to manually add your balance or refund you. [You can try Shapeshift\'s "split" tool as well.](https://split.shapeshift.io/)</li>
                <li translate="TRANSModal_Content_5">**Kraken & Poloniex:** No known issues. Use whatever.</li>
              </ul>
            </div>

            <div class="modal-footer text-center">
              <a href="mailto:myetherwallet@gmail.com" type="button" class="btn btn-danger" translate="TRANSModal_No">Oh gosh, I'm more confused. Help me.</a>
              <button type="button" class="btn btn-primary" data-dismiss="modal" translate="TRANSModal_Yes">Sweet, I get it now.</button>
            </div>

          </div>
        </div>
      </div>
      <!-- / Info Modal -->

    </div>
  </section>
</article>
<!-- / Send Transaction Page -->
