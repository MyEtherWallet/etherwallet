<!-- Digix -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.digix.id">

  <h2 translate="NAV_ClaimDGD"> Claim DGD </h2>
  <p translate="DGD_Desc">Claim your DigixDAO (DGD) tokens & badges. In order to claim, you must have participated in the token sale on March 30th/31st, 2016.  If you wish to send DGD, please use the Send Tokens Tab.</p>

  @@if (site === 'cx' )  {   <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
  @@if (site === 'mew' ) {   <wallet-decrypt-drtv></wallet-decrypt-drtv>         }

  <section class="row" ng-show="wallet!=null" ng-controller='digixCtrl'>

    <hr />

    <!-- Sidebar -->
    <section class="col-sm-4">
      <h4 translate="sidebar_AccountInfo"> Account Information: </h4>
      <div id="addressIdenticon" class="med" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div>

      <div translate="sidebar_AccountInfo"> Account Address: </div>
      <ul class="account-info">
        <li class="mono wrap"> {{wallet.getChecksumAddressString()}} </li>
      </ul>

      <div translate="sidebar_AccountBal"> Account Balance: </div>
      <ul class="account-info">
        <!--TODO: ADD DGD TOKEN BALANCE? <li>{{token.balance}} DGD Tokens</li>-->
        <li>{{etherBalance}} ETH </li>
        <li>{{etcBalance}} ETC</li>
      </ul>

      <div translate="sidebar_DGDBal"> DGD Crowdsale Information: </div>
      <ul class="account-info">
        <li>Centstotal: {{centsTotal}}</li>
        <li>Weitotal: {{weiTotal}}</li>
        <li>Share: {{shareTotal}}</li>
        <li>Badges: {{badgesTotal}}</li>
        <li>Claimed? {{claimedTotal}}</li>
      </ul>

      <div translate="sidebar_Equiv"> Equivalent Values: </div>
      <ul class="account-info">
        <li>{{usdBalance}} USD</li>
        <li>{{eurBalance}} EUR</li>
        <li>{{btcBalance}} BTC</li>
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
    </section>
    <!-- / Sidebar -->



    <!-- Content -->
    <section class="col-sm-8 digix-send">

      <!-- Claim Interface -->
      <article>
        <h4 translate="DGD_TitleLong"> Claim Your DGD Tokens </h4>
        <div class="form-group col-xs-12">
          <label translate="DGD_Label_1">Estimated fee consumption:</label><br />
          <input class="form-control disabled" type="text" value="0.00043598 ether (21,799 gas)" readonly />
        </div>
        <div class="form-group col-xs-12">
          <label translate="DGD_Label_2">Provided Maximum Fee:</label><br />
          <input class="form-control disabled" type="text" value="0.00243598 ether (121,799 gas)" readonly />
        </div>
        <div class="form-group col-xs-12">
          <label translate="DGD_Label_3">Gas Price:</label><br />
          <input class="form-control disabled" type="text" value="0.021 ether per million gas" readonly />
        </div>
        <div class="form-group col-xs-12">
          <label translate="TRANS_data">Data:</label><br />
          <input class="form-control disabled" type="text" readonly ng-model="tx.data"/>
        </div>
        <div class="form-group col-xs-12">
          <a class="btn btn-info btn-block" ng-click="generateTx()" translate="DGD_Generate">Generate Claim</a>
        </div>
      </article>
      <!-- / Claim Interface -->

      <!-- raw transaction / buttons -->
      <div class="col-xs-12"><div ng-bind-html="validateTxStatus"></div></div>

      <div class="form-group col-xs-12" ng-show="showRaw">
        <label translate="SEND_raw"> Raw Transaction </label>
        <textarea class="form-control" rows="4" disabled >{{rawTx}}</textarea>
        <label translate="SEND_signed"> Signed Transaction </label>
        <textarea class="form-control" rows="4" disabled >{{signedTx}}</textarea>
      </div>

      <div class="form-group col-xs-12" ng-show="showRaw">
        <a class="btn btn-primary btn-block" data-toggle="modal" data-target="#sendTransaction" translate="SEND_trans">Send Transaction</a>
      </div>

      <div class="form-group col-xs-12" ng-bind-html="sendTxStatus"></div>
      <!-- / raw transaction / buttons -->
    </section>
    <!-- / Content -->

    <!-- Modal -->
    <section class="modal fade" id="sendTransaction" tabindex="-1" role="dialog" aria-labelledby="sendTransactionLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h3 class="modal-title" id="myModalLabel"> <strong class="text-danger" translate="SENDModal_Title">Warning!</strong></h3>
          </div>
          <div class="modal-body">
            <h4 translate="DGD_Content">You are about to claim your DGD Tokens.</h4>
            <h4 translate="SENDModal_Content_3">Are you sure you want to do this?</h4>
          </div>
          <div class="modal-footer text-center">
            <button type="button" class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">No, get me out of here!</button>
            <button type="button" class="btn btn-primary" ng-click="sendTx()" translate="SENDModal_Yes">Yes, I am sure! Execute transaction.</button>
          </div>
        </div>
      </div>
    </section>
    <!--/ Modal -->
  </section>

</div>
<!-- / Digix -->
