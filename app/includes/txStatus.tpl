<main class="tab-pane block--container active" ng-if="globalService.currentTab==globalService.tabs.txStatus.id" ng-controller='txStatusCtrl' role="main" ng-cloak>

  <!-- Section 1 -->
  <section class="block txstatus__1">
    <article class="cont-md">
      <h1 class="text-center" translate="NAV_CheckTxStatus"> Check TX Status </h1>
      <p>
        During times of extremely high volume transactions can be pending for hours, if not days.
        This tool aims to give you the ability to find, cancel, or replace these TXs.
        This is <strong> not </strong> normal and will only work when the TX Pools are full.
        <strong><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/how-can-i-check-on-the-status-of-my-transaction-can-i-cancel-override-overwrite-replace-or-do-anything-once-a-transaction-has-been-sent" target="_blank" rel="noopener">Read our complete guide here.</a></strong></p>
    </article>
    <article class="row">
      <section class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
          <input
             class="form-control"
             type="text"
             placeholder="0x3f0efedfe0a0cd611f2465fac9a3699f92d6a06613bc3ead4f786856f5c73e9c"
             ng-model="tx.hash"
             aria-label="{{'x_TxHash' | translate}}"/>
          <button tabindex="0" role="button" class="btn btn-primary" ng-click="checkTxStatus()" translate="NAV_CheckTxStatus">Check TX Status</button>
      </section>
    </article>
  </section>
  <!-- / Section 1 -->


  <!-- Section 2: Current State -->
  <section class="block txstatus__2">

    <div class="cont-md">   <!-- ng-show="tx.status=='foundOnChain'"   -->
      <h3 class="text-success" translate="tx_FoundOnChain"> Transaction Found </h3>
      <p><strong translate="tx_FoundOnChain_1"></strong></p>
      <ul>
        <li translate="tx_FoundOnChain_2"></li>
        <li translate="tx_FoundOnChain_3"></li>
      </ul>
    </div>

    <div class="cont-md">   <!-- ng-show="tx.status=='notFound'"   -->
      <h3 class="text-danger" translate="tx_notFound">Transaction Not Found</h3>
      <p><strong translate="tx_notFound_1"></strong></p>
      <ul>
        <li translate="tx_notFound_2"></li>
        <li translate="tx_notFound_3"></li>
      </ul>
    </div>

    <div class="cont-md">   <!-- ng-show="tx.status=='foundInPending'"   -->
      <h3 class="text-warning" translate="tx_foundInPending">Pending Transaction Found</h3>
      <ul>
        <li translate="tx_foundInPending_1"></li>
        <li translate="tx_foundInPending_2"></li>
        <li translate="tx_foundInPending_3"></li>
      </ul>
    </div>

    <h4 translate="tx_Details" class="cont-md">Transaction Details</h4>

    <table class="table table-striped txstatus__2 cont-md"> ng-show="tx.status=='foundOnChain' || foundInPending'"
      <tbody>
        <tr>
          <td></td>
          <td translate="x_TxHash">TX Hash</td>
          <td><a href="https://etherscan.io/tx/{{ tx.hash }}" target="_blank" rel="noopener"> {{ tx.hash }} </a></td>
        </tr>
        <tr>
          <td></td>
          <td translate="OFFLINE_Step1_Label_1">From Address</td>
          <td><a href="https://etherscan.io/address/{{ tx.from }}" target="_blank" rel="noopener"> {{ tx.from }} </a></td>
        </tr>
        <tr>
          <td></td>
          <td translate="OFFLINE_Step2_Label_1">To Address</td>
          <td><a href="https://etherscan.io/address/{{ tx.to }}" target="_blank" rel="noopener"> {{ tx.to }} </a></td>
        </tr>
        <tr>
          <td></td>
          <td translate="SEND_amount_short">Amount</td>
          <td>{{ tx.value }} </td>
        </tr>
        <tr>
          <td><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-nonce" target="_blank" rel="noopener">
            <img src="images/icon-help.svg" class="help-icon" />
          </td>
          <td translate="OFFLINE_Step2_Label_5">Nonce</td>
          <td>{{ tx.nonce }} </td>
        </tr>
        <tr>
          <td><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-gas" target="_blank" rel="noopener">
            <img src="images/icon-help.svg" class="help-icon" />
          </td>
          <td translate="OFFLINE_Step2_Label_4">Gas Limit</td>
          <td>{{ tx.gasLimit }} </td>
        </tr>
        <tr>
          <td><a href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-gas" target="_blank" rel="noopener">
            <img src="images/icon-help.svg" class="help-icon" />
          </td>
          <td><span translate="OFFLINE_Step2_Label_3">Gas Price</span> (wei) &middot;  (ETH) &middot;  (USD) </td>
          <td>{{ tx.gasPrice }} </td>
        </tr>
        <tr>
          <td></td>
          <td translate="OFFLINE_Step2_Label_6">Data</td>
          <td>{{ tx.data }} </td>
        </tr>
      </tbody>
    </table>

  </section>
  <!-- / Section 2: Current State -->



  <!-- Section 3:  Unlock -->
  <article class="row text-center txstatus__3" ng-show="tx.status=='foundInPending'">
    <br><br>
    <h1 class="" translate="x_CancelReplaceTx">Cancel or Refund Transaction </h1>
  </article>

  <article class="row txstatus__3" ng-show="tx.status=='foundInPending'">
    <section class="clearfix collapse-container">
      <div class="text-center" ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h4>Unlock your wallet to give it a go. </h4>
      </div>
      <div ng-show="!wd">
          @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
          @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
      </div>
    </section>
  </article>
  <!-- / Section 3:  Unlock -->





<!-- Section 4: Send TX -->
<article class="row" ng-show="wallet!=null" >

  <section class="col-sm-8" >

    <div class="block">

      <!-- To Address -->
      <div class="row form-group">
        <address-field placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" var-name="tx.to"></address-field>
      </div>

      <!-- Amount to Send -->
      <label translate="SEND_amount">Amount to Send:</label>
      <div class="input-group col-sm-11">
        <input class="form-control" type="text" placeholder="{{ 'SEND_amount_short' | translate }}" ng-model="tx.value" ng-disabled="tx.readOnly" ng-class="Validator.isPositiveNumber(tx.value) ? 'is-valid' : 'is-invalid'"/>
        <div class="input-group-btn">
          <a style="min-width: 170px" class="btn btn-default dropdown-toggle" class="dropdown-toggle" ng-click="dropdownAmount = !dropdownAmount" ng-class="dropdownEnabled ? '' : 'disabled'">
            <strong>{{unitReadable}}<i class="caret"></i></strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownAmount && !tx.readOnly">
            <li><a ng-class="{true:'active'}[tx.sendMode=='ether']" ng-click="setSendMode('ether')">{{ajaxReq.type}}</a></li>
            <li ng-repeat="token in wallet.tokenObjs track by $index" ng-show="token.balance!=0 && token.balance!='loading' || token.type!=='default' || tokenVisibility=='shown'">
              <a ng-class="{true:'active'}[unitReadable == token.getSymbol()]" ng-click="setSendMode('token', $index, token.getSymbol())"> {{token.getSymbol()}} </a>
            </li>

          </ul>
        </div>
      </div>
      <!-- / Amount to Send -->

      <!-- Nonce -->
      <div class="row form-group">
        <div class="col-sm-11 clearfix">
          <label translate="TRANS_gas"> Gas Limit: </label>
          <input class="form-control" type="text" placeholder="21000" ng-model="tx.gasLimit" ng-class="Validator.isPositiveNumber(tx.gasLimit) ? 'is-valid' : 'is-invalid'" ng-change="gasLimitChanged=true"/>
        </div>
      </div>
      <!-- / Nonce -->

      <!-- Gas Limit -->
      <div class="row form-group">
        <div class="col-sm-11 clearfix">
          <label translate="TRANS_gas"> Gas Limit: </label>
          <input class="form-control" type="text" placeholder="21000" ng-model="tx.gasLimit" ng-class="Validator.isPositiveNumber(tx.gasLimit) ? 'is-valid' : 'is-invalid'" ng-change="gasLimitChanged=true"/>
        </div>
      </div>
      <!-- / Gas Limit -->

      <!-- Gas Price -->
      <div class="row form-group">
        <div class="col-sm-11 clearfix">
          <label translate="OFFLINE_Step2_Label_3"> Gas Price: </label>
          <input class="form-control" type="text" placeholder="21000" ng-model="tx.gasLimit" ng-class="Validator.isPositiveNumber(tx.gasLimit) ? 'is-valid' : 'is-invalid'" ng-change="gasLimitChanged=true"/>
        </div>
      </div>
      <!-- / Gas Price -->

      <!--  Data -->
      <div class="row form-group" ng-show="tx.sendMode=='ether'">
          <label translate="TRANS_data"> Data: </label>
          <input class="form-control" type="text" placeholder="0x6d79657468657277616c6c65742e636f6d20697320746865206265737421" ng-model="tx.data" ng-disabled="tx.readOnly" ng-class="Validator.isValidHex(tx.data) ? 'is-valid' : 'is-invalid'"/>
      </div>
      <!-- / Data -->

      <div class="row form-group">
        <div class="col-xs-12 clearfix">
          <a class="btn btn-info btn-block" ng-click="generateTx()" translate="SEND_generate"> Generate Transaction </a>
        </div>
      </div>

      <div class="row form-group" ng-show="showRaw">
        <div class="col-sm-6">
          <label translate="SEND_raw"> Raw Transaction </label>
          <textarea class="form-control" rows="4" readonly >{{rawTx}}</textarea>
        </div>
        <div class="col-sm-6">
          <label translate="SEND_signed"> Signed Transaction </label>
          <textarea class="form-control" rows="4" readonly >{{signedTx}}</textarea>
        </div>
      </div>

      <div class="clearfix form-group" ng-show="showRaw">
        <a class="btn btn-primary btn-block col-sm-11" data-toggle="modal" data-target="#sendTransaction" translate="SEND_trans"> Send Transaction </a>
      </div>

    </div>

  </section>

  <section class="col-sm-4">
    <wallet-balance-drtv></wallet-balance-drtv>
  </section>


</article>

