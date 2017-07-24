<!-- Content -->
<section class="col-sm-8">
  <div class="block">

    <!-- To Address -->
    <div class="row form-group">
      <address-field placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" var-name="tx.to"></address-field>
    </div>

    <!-- Amount to Send -->
    <label translate="x_Amount">Amount to Send:</label>
    <div class="input-group col-sm-11">
      <input type="text"
             class="form-control"
             placeholder="{{ 'x_Amount_short' | translate }}"
             ng-model="tx.value"
             ng-disabled="tx.readOnly || checkTxReadOnly"
             ng-class="Validator.isPositiveNumber(tx.value) ? 'is-valid' : 'is-invalid'"/>
      <div class="input-group-btn">
        <a style="min-width: 170px" class="btn btn-default dropdown-toggle" class="dropdown-toggle" ng-click="dropdownAmount = !dropdownAmount" ng-class="dropdownEnabled ? '' : 'disabled'">
          <strong>{{ajaxReq.type}}<i class="caret"></i></strong>
        </a>
        <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownAmount && !tx.readOnly">
          <li><a ng-class="{true:'active'}[tx.sendMode=='ether']" ng-click="setSendMode('ether')">{{ajaxReq.type}}</a></li>
          <li ng-repeat="token in wallet.tokenObjs track by $index" ng-show="token.balance!=0 && token.balance!='loading' || token.type!=='default' || tokenVisibility=='shown'">
            <a ng-class="{true:'active'}[unitReadable == token.getSymbol()]" ng-click="setSendMode('token', $index, token.getSymbol())"> {{token.getSymbol()}} </a>
          </li>

        </ul>
      </div>
    </div>
    <p><a ng-click="transferAllBalance()" ng-hide="tx.readOnly"><span class="strong" translate="TX_Send_All">Send Entire Balance</span></a></p>
    <!-- / Amount to Send -->

    <!-- Gas Price -->
    <div class="row form-group" ng-show="gasPriceVisible">
      <div class="col-sm-11">
        <a class="account-help-icon" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-gas" target="_blank" rel="noopener">
          <img src="images/icon-help.svg" class="help-icon" />
          <p class="account-help-text" translate="x_GasPriceDesc"></p>
        </a>
        <label style="width: 100%;">
          <span translate="x_GasPrice" > Gas Price </span>
          <a href="http://ethgasstation.info/" target="_blank" rel="noopener">{{gas.value}} Gwei</a>
        </label>
        <input type="range"
              ng-model="gas.value"
              min="{{gas.min}}"
              max="{{gas.max}"
              steps="1"
              ng-change="gasPriceChanged()"/>
        <p class="col-xs-4 text-left">Not So Fast</p>
        <p class="col-xs-4 text-center">Fast</p>
        <p class="col-xs-4 text-right">Fast AF</p>
      </div>
    </div>
    <!-- / Gas Price -->


    <!-- Advanced Option Panel -->
    <a ng-click="advancedVisible=true" ng-hide="advancedVisible">
      <p class="strong" translate="SEND_Advanced"> + Advanced: Add Data </p>
    </a>

    <section ng-hide="!advancedVisible">

      <!-- Gas Limit -->
      <div class="row form-group">
        <div class="col-sm-11 clearfix ">
          <a class="account-help-icon" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-gas" target="_blank" rel="noopener">
            <img src="images/icon-help.svg" class="help-icon" />
            <p class="account-help-text" translate="x_GasLimitDesc"></p>
          </a>
          <label translate="x_GasLimit"> Gas Limit: </label>
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

      <!-- Nonce -->
      <div class="row form-group" ng-show="nonceVisible">
        <div class="col-sm-11 clearfix">
          <a class="account-help-icon" href="https://myetherwallet.groovehq.com/knowledge_base/topics/what-is-nonce" target="_blank" rel="noopener">
            <img src="images/icon-help.svg" class="help-icon" />
            <p class="account-help-text" translate="x_NonceDesc"></p>
          </a>
          <label translate="x_Nonce"> Nonce </label>
          <input type="text"
                 class="form-control"
                 placeholder="2"
                 ng-model="tx.nonce"
                 ng-disabled="checkTxReadOnly"
                 ng-class="Validator.isPositiveNumber(tx.nonce) ? 'is-valid' : 'is-invalid'" />
        </div>
      </div>
      <!-- / Nonce -->

      <!-- Data -->
      <div class="row form-group" ng-show="tx.sendMode=='ether'">
        <div class="col-sm-11 clearfix">
          <span class="account-help-icon">
            <img src="images/icon-help.svg" class="help-icon" />
            <p class="account-help-text" translate="x_DataDesc">This is optional.</p>
          </span>
          <label translate="x_Data"> Data: </label>
          <input type="text"
                 class="form-control"
                 placeholder="0x6d79657468657277616c6c65742e636f6d20697320746865206265737421"
                 ng-model="tx.data"
                 ng-disabled="tx.readOnly || checkTxReadOnly"
                 ng-class="Validator.isValidHex(tx.data) ? 'is-valid' : 'is-invalid'"/>
        </div>
      </div>
      <!-- / Data -->

    </section>

    <!-- / Advanced Option Panel -->

    <div class="clearfix form-group">
      <div class="well" ng-show="wallet!=null && customGasMsg!=''">
        <p><small>A message regarding {{tx.to}}</small></p>
        <p><strong> {{customGasMsg}} </strong></p>
      </div>
    </div>





    <!--Generate -->
    <section>
    <div class="row form-group">
      <div class="col-xs-12 clearfix">
        <a ng-show="wallet !== null" class="btn btn-info btn-block " ng-click="generateTx()" translate="TX_Generate"> Generate Transaction </a>
      </div>
    </div>
    </section>
    <!-- /Generate -->
    <!-- transaction information -->
    <div class="row form-group" ng-show="showRaw">
      <div class="col-sm-6">
        <label translate="TX_Unsigned"> Unsigned Transaction </label>
        <textarea class="form-control" rows="4" readonly >{{rawTx}}</textarea>
      </div>
      <div class="col-sm-6">
        <label translate="TX_Signed"> Signed Transaction </label>
        <textarea class="form-control" rows="4" readonly >{{signedTx}}</textarea>
      </div>
    </div>

    <div class="clearfix form-group" ng-show="showRaw">
      <a class="btn btn-primary col-sm-12 {{onlyOffline.isOnline}}" ng-click="confirmSendTx()" translate="{{onlyOffline.onMsg}}">SEND TRANSACTION</a>
    </div>
  </div>
  <!-- / transaction information -->
  </section>
<!-- / Content -->

<!-- Sidebar -->
<section class="col-sm-4">

  <div class="block block--info" ng-show="hasQueryString">
    <p translate="WARN_02">You arrived via a link that has the address, amount, gas or data fields filled in for you. You can change any information before sending. Unlock your wallet to get started.</p>
  </div>

  <div class="block block--danger" ng-show="wallet!=null && globalService.currentTab==globalService.tabs.swap.id && !hasEnoughBalance()">
    <h5 translate="WARN_09_A">Warning! You do not have enough funds to complete this swap.</h5>
    <p translate="WARN_09_B">Please add more funds to your wallet or access a different wallet.</p>
  </div>

  <wallet-balance-drtv></wallet-balance-drtv>

  <div ng-show="checkTxPage" ng-click="checkTxReadOnly=!checkTxReadOnly" class="small text-right text-gray-lighter"><small>Advanced Users Only.</small></div>

</section>
<!-- / Sidebar -->
