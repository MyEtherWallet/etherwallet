<!-- Send Transaction Page -->
<article class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.sendTransaction.id" ng-controller='sendTxCtrl'  ng-cloak>

  <!-- Header -->
  <div class="alert alert-info" ng-show="hasQueryString">
    <p translate="WARN_Send_Link" >You arrived via a link that has the address, amount, gas or data fields filled in for you. You can change any information before sending. Unlock your wallet to get started.</p>
  </div>



  <article class="collapse-container">
    <div ng-click="wd = !wd">
      <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
      <h2 translate="NAV_SendEther"> Send Ether & Tokens </h2>
    </div>

    <div ng-show="!wd">
        @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
        @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
    </div>
  </article>

  <section class="row" ng-show="wallet!=null">

    <hr ng-show="!wd" />

    <!-- Sidebar -->
    <div class="col-sm-4">

      <wallet-balance-drtv></wallet-balance-drtv>


      <div translate="sidebar_TransHistory"> Transaction History: </div>
      <ul class="account-info" ng-show="ajaxReq.type != 'CUS'">
        <li><a href="{{ajaxReq.blockExplorerAddr.replace('[[address]]', wallet.getAddressString())}}" target="_blank">{{ajaxReq.blockExplorerAddr.replace('[[address]]', wallet.getAddressString())}}</a></li>
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

      <h4 translate="SEND_trans">Send Transaction</h4>

      <!-- To Address -->
      <div class="row form-group">
        <div class="col-xs-10">
          <label translate="SEND_addr"> To Address: </label>
          <input class="form-control"  type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="tx.to" ng-class="Validator.isValidAddress(tx.to) ? 'is-valid' : 'is-invalid'"/>
        </div>
        <div class="col-xs-2 address-identicon-container">
          <div id="addressIdenticon" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div>
        </div>
      </div>
      <!-- / To Address -->


      <!-- Amount to Send -->
      <div class="form-group">
        <label translate="SEND_amount">Amount to Send:</label>
        <div class="input-group">
          <input class="form-control" type="text" placeholder="{{ 'SEND_amount_short' | translate }}" ng-model="tx.value" ng-class="Validator.isPositiveNumber(tx.value) ? 'is-valid' : 'is-invalid'"/>
          <div class="input-group-btn">
            <a class="btn btn-default dropdown-toggle" class="dropdown-toggle" ng-click="dropdownAmount = !dropdownAmount" ng-class="dropdownEnabled ? '' : 'disabled'">
              {{unitReadable}}<span class="caret"></span>
            </a>
            <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownAmount">
              <li><a ng-class="{true:'active'}[tx.sendMode=='ether']" ng-click="setSendMode('ether')">{{ajaxReq.type}}</a></li>
              <li ng-repeat="token in wallet.tokenObjs track by $index" ng-show="token.balance!=0 && token.balance!='loading' || token.type!=='default' || tokenVisibility=='shown'">
                <a ng-class="{true:'active'}[unitReadable == token.getSymbol()]" ng-click="setSendMode('token', $index, token.getSymbol())"> {{token.getSymbol()}} </a>
              </li>

            </ul>
          </div>
        </div>
        <a ng-click="transferAllBalance()"><p class="strong" translate="SEND_TransferTotal">Send Entire Balance</p></a>
        <!-- / Amount to Send -->

        <!-- Gas -->
        <div class="form-group">
          <label translate="TRANS_gas"> Gas: </label>
          <input class="form-control" type="text" placeholder="21000" ng-model="tx.gasLimit" ng-class="Validator.isPositiveNumber(tx.gasLimit) ? 'is-valid' : 'is-invalid'"/>
        </div>
        <!-- / Gas -->

        <!-- Advanced Option Panel -->
        <div ng-show="tx.sendMode=='ether'">
          <a ng-click="showAdvance=!showAdvance">
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

        <div class="form-group ">
          <a class="btn btn-info btn-block" ng-click="generateTx()" translate="SEND_generate"> GENERATE TRANSACTION </a>
        </div>

        <div class="clearfix">
          <div ng-bind-html="validateTxStatus"></div>
        </div>

        <div class="form-group" ng-show="showRaw">
          <label translate="SEND_raw"> Raw Transaction </label>
          <textarea class="form-control" rows="4" readonly >{{rawTx}}</textarea>
          <label translate="SEND_signed"> Signed Transaction </label>
          <textarea class="form-control" rows="4" readonly >{{signedTx}}</textarea>
        </div>

        <div class="form-group" ng-show="showRaw">
          <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#sendTransaction" translate="SEND_trans"> Send Transaction </a>
        </div>

        <div class="form-group" ng-bind-html="sendTxStatus"></div>

        <div class="alert alert-info" ng-show="tx.sendMode=='token'">
          <p>If you are getting an insufficient balance for gas ... error, you must have a small amount of ETH in your account in order to cover the cost of gas. Add 0.01 ETH to this account and try again.</p>
        </div>


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

            <div class="modal-body larger" ng-show="tx.sendMode=='ether'">
              <table class="table text-center"><tbody><tr>
                <td><div id="addressIdenticon" class="med" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet.getAddressString()"></div></td>
                <td class="mono">-><br />{{tx.value}} {{unitReadable}}</td>
                <td><div id="addressIdenticon" class="med" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div></td>
              </tr></tbody></table>

              <p>
                <span translate="SENDModal_Content_1">You are about to send</span>
                <strong class="mono">{{tx.value}} {{unitReadable}}</strong>
                <br />
                <span translate="SENDModal_Content_2">to address</span>
                <strong class="mono"> {{tx.to}}. </strong>
              </p>
              <p>
                You are sending on the <strong>{{ajaxReq.type}}</strong> chain, which
                <strong class="text-danger" ng-show="ajaxReq.eip155==false"> susceptible to replay attacks.</strong>
                <strong ng-show="ajaxReq.eip155==true"> not susceptible to replay attacks.</strong>
              </p>
              <p> The node you are sending through is provided by <strong>{{ajaxReq.service}}</strong>. </p>
              <h4 translate="SENDModal_Content_3"> Are you sure you want to do this? </h4>
            </div>

            <div class="modal-body larger" ng-show="tx.sendMode!=='ether'">
              <table class="table text-center"><tbody><tr>
                <td><div id="addressIdenticon" class="med" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet.getAddressString()"></div></td>
                <td class="mono">-><br />{{tx.value}} {{unitReadable}}</td>
                <td><div id="addressIdenticon" class="med" title="Address Indenticon" blockie-address="{{tokenTx.to}}" watch-var="tokenTx.to"></div></td>
              </tr></tbody></table>

              <p>
                <span translate="SENDModal_Content_1">You are about to send</span>
                <strong class="mono">{{tokenTx.value}} {{unitReadable}}</strong>
                <br />
                <span translate="SENDModal_Content_2">to address</span>
                <strong class="mono"> {{tokenTx.to}} </strong>
              </p>
              <p>
                You are sending on the <strong>{{ajaxReq.type}}</strong> chain, which
                <strong class="text-danger" ng-show="!ajaxReq.eip155"> susceptible to replay attacks.</strong>
                <strong ng-show="ajaxReq.eip155"> not susceptible to replay attacks.</strong>
              </p>
              <p> The node you are sending through is provided by <strong>{{ajaxReq.service}}</strong>. </p>
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

    </div>
  </section>
</article>
<!-- / Send Transaction Page -->
