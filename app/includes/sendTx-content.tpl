<!-- Content -->
<section class="col-sm-8">
  <div class="block">

    <!-- To Address -->
    <div class="row form-group">
      <address-field placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" var-name="tx.to"></address-field>
    </div>

    <!-- Amount to Send -->
    <label translate="SEND_amount">Amount to Send:</label>
    <div class="input-group col-sm-11">
      <input type="text"
             class="form-control"
             placeholder="{{ 'SEND_amount_short' | translate }}"
             ng-model="tx.value"
             ng-disabled="tx.readOnly || checkTxReadOnly"
             ng-class="Validator.isPositiveNumber(tx.value) ? 'is-valid' : 'is-invalid'"/>
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
    <p><a ng-click="transferAllBalance()" ng-hide="tx.readOnly"><span class="strong" translate="SEND_TransferTotal">Send Entire Balance</span></a></p>
    <!-- / Amount to Send -->

    <!-- Gas Limit -->
    <div class="row form-group">
      <div class="col-sm-11 clearfix">
        <a class="account-help-icon" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-gas" target="_blank" rel="noopener">
          <img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" translate="GAS_LIMIT_Desc"></p>
        </a>
        <label translate="TRANS_gas"> Gas Limit: </label>
        <input type="text"
               class="form-control"
               placeholder="21000"
               ng-model="tx.gasLimit"
               ng-change="gasLimitChanged=true"
               ng-disabled="tx.readOnly || checkTxReadOnly"
               ng-class="Validator.isPositiveNumber(tx.gasLimit) ? 'is-valid' : 'is-invalid'" />
      </div>
    </div>
    <!-- / Gas Limit -->

    <!-- Advanced Option Panel -->
    <a ng-click="showAdvance=true" ng-show='globalService.currentTab==globalService.tabs.sendTransaction.id'>
      <p class="strong" translate="TRANS_advanced"> + Advanced: Add Data </p>
    </a>

    <section ng-show="showAdvance || checkTxPage">
      <!-- Data -->
      <div class="row form-group">
        <div class="col-sm-11 clearfix" ng-show="tx.sendMode=='ether'">
          <span class="account-help-icon">
            <img src="images/icon-help.svg" class="help-icon" />
            <p class="account-help-text" translate="OFFLINE_Step2_Label_6b">This is optional.</p>
          </span>
          <label translate="TRANS_data"> Data: </label>
          <input type="text"
                 class="form-control"
                 placeholder="0x6d79657468657277616c6c65742e636f6d20697320746865206265737421"
                 ng-model="tx.data"
                 ng-disabled="tx.readOnly || checkTxReadOnly"
                 ng-class="Validator.isValidHex(tx.data) ? 'is-valid' : 'is-invalid'"/>
        </div>
      </div>
      <!-- / Data -->


      <!-- Nonce -->
      <div class="row form-group" ng-show="checkTxPage">
        <div class="col-sm-11 clearfix">
          <a class="account-help-icon" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-nonce" target="_blank" rel="noopener">
            <img src="images/icon-help.svg" class="help-icon" />
            <p class="account-help-text" translate="NONCE_Desc"></p>
          </a>
          <label translate="OFFLINE_Step2_Label_5"> Nonce </label>
          <input type="text"
                 class="form-control"
                 placeholder="2"
                 ng-model="tx.nonce"
                 ng-disabled="checkTxReadOnly"
                 ng-class="Validator.isPositiveNumber(tx.nonce) ? 'is-valid' : 'is-invalid'" />
        </div>
      </div>
      <!-- / Nonce -->


      <!-- Gas Price -->
      <div class="row form-group" ng-show="checkTxPage">
        <div class="col-sm-11 clearfix">
          <a class="account-help-icon" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-gas" target="_blank" rel="noopener">
            <img src="images/icon-help.svg" class="help-icon" />
            <p class="account-help-text" translate="GAS_PRICE_Desc"></p>
          </a>
          <label> <span translate="OFFLINE_Step2_Label_3"> Gas Price: </span></label>
          <input type="text"
                 class="form-control"
                 placeholder="50"
                 ng-model="tx.gasPrice"
                 ng-disabled="checkTxReadOnly"
                 ng-class="Validator.isPositiveNumber(tx.gasPrice) ? 'is-valid' : 'is-invalid'" />
        </div>
      </div>
      <!-- / Gas Price -->
    </section>

    <!-- / Advanced Option Panel -->

    <div class="clearfix form-group">
      <div class="well" ng-show="wallet!=null && customGasMsg!=''">
        <p><small>A message regarding {{tx.to}}</small></p>
        <p><strong> {{customGasMsg}} </strong></p>
      </div>
    </div>

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
<!-- / Content -->

<!-- Sidebar -->
<section class="col-sm-4">

  <div class="block block--danger" ng-show="wallet!=null && globalService.currentTab==globalService.tabs.swap.id && !hasEnoughBalance()">
    <h5>Warning! You do not have enough funds to complete this swap.</h5>
    <p>Please add more funds to your wallet or access a different wallet.</p>
  </div>

  <wallet-balance-drtv></wallet-balance-drtv>

  <div ng-show="checkTxPage" ng-click="checkTxReadOnly=!checkTxReadOnly" class="small text-right text-gray-lighter"><small>Advanced Users Only.</small></div>

</section>
<!-- / Sidebar -->
