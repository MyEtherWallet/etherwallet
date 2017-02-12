<!-- Swap Page -->
<main class="tab-pane swap-tab active" ng-if="globalService.currentTab==globalService.tabs.swap.id" ng-controller='swapCtrl'  ng-cloak>


  <!-- Rates Panel -->
  <section class="row swap-rates" ng-show="showStage1">
    <div class="clearfix">
      <h5 class="col-xs-6 col-xs-offset-3">Current Rates</h5>
      <div class="col-xs-3"><a href="https://bity.com/af/jshkb37v" target="_blank"><img class="pull-right" src="images/logo-bity.svg" width="100" height="38" /></a></div>
    </div>
      <div class="col-sm-6 order-info">
        <p class="mono"><input class="form-control input-sm" ng-model="priceTicker.ETHBTC"/><span>ETH = {{bity.curRate.ETHBTC*priceTicker.ETHBTC | number: 6}} BTC</span></p>
        <p class="mono"><input class="form-control input-sm" ng-model="priceTicker.ETHREP"/><span>ETH = {{bity.curRate.ETHREP*priceTicker.ETHREP | number: 6}} REP</span></p>
      </div>
      <div class="col-sm-6 order-info">
        <p class="mono"><input class="form-control input-sm" ng-model="priceTicker.BTCETH"/><span>BTC = {{bity.curRate.BTCETH*priceTicker.BTCETH | number: 6}} ETH</span></p>
        <p class="mono"><input class="form-control input-sm" ng-model="priceTicker.BTCREP"/><span>BTC = {{bity.curRate.BTCREP*priceTicker.BTCREP | number: 6}} REP</span></p>
      </div>
      <!--<div class="col-sm-4 order-info">
        <p><input class="form-control input-sm" ng-model="priceTicker.REPBTC"/><span>REP = {{bity.curRate.REPBTC*priceTicker.REPBTC | number: 6}} BTC</span></p>
        <p><input class="form-control input-sm" ng-model="priceTicker.REPETH"/><span>REP = {{bity.curRate.REPETH*priceTicker.REPETH | number: 6}} ETH</span></p>
      </div>-->
  </section>
  <!-- / Rates Panel -->


  <!-- swap Panel -->
  <section class="swap-panel" ng-show="showStage1">

    <h1> I want to swap my </h1>

    <input class="form-control" type="text" placeholder="{{ 'SEND_amount_short' | translate }}"  ng-change ="updateEstimate(true)" ng-model="swapOrder.fromVal" ng-class="Validator.isPositiveNumber(swapOrder.fromVal)  && swapOrder.fromVal >= 0.01 ? 'is-valid' : 'is-invalid'"/>

    <span class="dropdown">
      <a class="btn btn-default dropdown-toggle" class="dropdown-toggle" ng-click="dropdownFrom = !dropdownFrom">{{swapOrder.fromCoin}}<span class="caret"></span></a>
      <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownFrom">
        <li ng-repeat="coin in availableCoins track by $index" ng-show="coin !=  'REP'">
        <a ng-class="{true:'active'}[coin == swapOrder.fromCoin]" ng-click="setOrderCoin(true, coin)"> {{coin}} </a>
        </li>
      </ul>
    </span>

    <h1> for </h1>

    <input class="form-control" type="text" placeholder="{{ 'SEND_amount_short' | translate }}"  ng-change ="updateEstimate(false)" ng-model="swapOrder.toVal" ng-class="Validator.isPositiveNumber(swapOrder.toVal) && swapOrder.toVal >= 0.01 ? 'is-valid' : 'is-invalid'"/>

    <div class="dropdown">
      <a class="btn btn-default dropdown-toggle" class="dropdown-toggle" ng-click="dropdownTo = !dropdownTo">{{swapOrder.toCoin}}<span class="caret"></span></a>
      <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownTo">
        <li ng-repeat="coin in availableCoins track by $index" ng-show="coin != swapOrder.fromCoin">
        <a ng-class="{true:'active'}[coin == swapOrder.toCoin]" ng-click="setOrderCoin(false, coin)"> {{coin}} </a>
        </li>
      </ul>
    </div>

    <div class="col-xs-12 clearfix text-center"><a ng-click="setFinalPrices()" class="btn btn-info btn-lg"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 451.847 451.847"><path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z" fill="#FFF"/></svg> Let's do this! </a></div>
  </section>
  <!-- / swap Panel -->


  <!-- swap Start 1 -->
  <section class="swap-start row" ng-show="showStage2">
    <div class="clearfix">
      <h5 class="col-xs-6 col-xs-offset-3">Your Information</h5>
      <div class="col-xs-3"><a href="https://bity.com/af/jshkb37v" target="_blank"><img class="pull-right" src="images/logo-bity.svg" width="100" height="38" /></a></div>
    </div>
    <div class="order-info-wrap clearfix">
      <div class="col-sm-4 order-info"><h4>{{swapOrder.fromVal}} {{swapOrder.fromCoin}}</h4><p>Amount to send</p></div>
      <div class="col-sm-4 order-info"><h4>{{swapOrder.toVal}} {{swapOrder.toCoin}}</h4><p>Amount to receive</p></div>
      <div class="col-sm-4 order-info"><h4>{{swapOrder.swapRate}} {{swapOrder.swapPair}}</h4><p>Your rate</p></div>
    </div>
    <!-- Your Address -->
    <div class="col-sm-12">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-xs-12">
          <label> Your Receiving <strong>({{swapOrder.toCoin}})</strong> Address </label>
          <input class="form-control" type="text" placeholder="{{swapOrder.toCoin=='BTC' ?  '1MEWT2SGbqtz6mPCgFcnea8XmWV5Z4Wc6' : '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8'}}" ng-model="swapOrder.toAddress" ng-class="(swapOrder.toCoin!='BTC' && Validator.isValidAddress(swapOrder.toAddress)) || (swapOrder.toCoin=='BTC' && Validator.isValidBTCAddress(swapOrder.toAddress)) ? 'is-valid' : 'is-invalid'"/>
        </div>
        <div class="col-sm-2 col-xs-12 address-identicon-container">
          <div ng-show="swapOrder.toCoin == 'ETH' || swapOrder.toCoin=='REP'" class="addressIdenticon" title="Address Indenticon" blockie-address="{{swapOrder.toAddress}}" watch-var="swapOrder.toAddress"></div>
        </div>
      </div>
    </div>
    <!-- /Your Address -->

    <div class="text-center">
      <a ng-click="openOrder()" class="btn btn-primary btn-lg"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 451.847 451.847"><path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z" fill="#FFF"/></svg> Start Transaction </a>
    </div>
  </section>
  <!-- / swap Start 1 -->


  <!-- Order Started Panel -->
  <section class="swap-order row" ng-show="showStage3Btc">
    <div class="clearfix">
      <h5 class="col-xs-6 col-xs-offset-3 text-center">Your Order Information - Please Save</h5>
      <div class="col-xs-3"><a href="https://bity.com/af/jshkb37v" target="_blank"><img class="pull-right" src="images/logo-bity.svg" width="100" height="38" /></a></div>
    </div>
    <!-- Order Info -->
    <div class="order-info-wrap clearfix">
      <div class="col-sm-3 order-info"><h3>{{orderResult.reference}}</h3><p>Your reference number</p></div>
      <div class="col-sm-3 order-info"><h3>{{orderResult.timeRemaining}}</h3><p>Time remaining to send {{orderResult.input.amount}}&nbsp;{{orderResult.input.currency}}</p></div>
      <div class="col-sm-3 order-info"><h3>{{orderResult.output.amount}} {{orderResult.output.currency}}</h3><p>Amount of {{orderResult.output.currency}} to receive</p></div>
      <div class="col-sm-3 order-info"><h3>{{orderResult.input.amount/orderResult.output.amount  | number: 6}} {{orderResult.output.currency}}/{{orderResult.input.currency}}</h3><p>Your rate</p></div>
    </div>
    <!-- / Order Info -->
    <!-- swap Progress -->
    <div class="swap-progress">
      <div class="sep"></div>
      <div class="progress-item progress-true">
        <div class="progress-circle"><i>1</i></div>
        <p>Order Initiated</p>
      </div>
      <div class="progress-item progress-active">
        <div class="progress-circle"><i>2</i></div>
        <p>Waiting for your {{orderResult.input.currency}}</p>
      </div>
      <div class="progress-item">
        <div class="progress-circle"><i>3</i></div>
        <p>Payment Received</p>
      </div>
      <div class="progress-item">
        <div class="progress-circle"><i>4</i></div>
        <p>Sending you {{orderResult.output.currency}} Now</p>
      </div>
      <div class="progress-item">
        <div class="progress-circle"><i>5</i></div>
        <p>Order Complete</p>
      </div>
    </div>
    <!-- / swap Progress -->
    <div class="text-center">
      <h1> Please send <strong>{{orderResult.input.amount}} {{orderResult.input.currency}}</strong> to <br /> <strong class="mono text-primary">{{orderResult.payment_address}}</strong></h1>
      <label> Scan BTC Address </label>
      <div class="qr-code" qr-code="{{orderResult.payment_address}}" watch-var="orderResult" ></div>
    </div>
  </section>
  <!-- / Order Started Panel -->


  <!-- Order Started Panel - Sending ETH or REP -->
  <section class="swap-order row" ng-show="showStage3Eth">
    <div class="clearfix">
      <h5 class="col-xs-6 col-xs-offset-3 text-center">Your Order Information - Please Save</h5>
      <div class="col-xs-3"><a href="https://bity.com/af/jshkb37v" target="_blank"><img class="pull-right" src="images/logo-bity.svg" width="100" height="38" /></a></div>
    </div>
    <div class="order-info-wrap clearfix">
      <div class="col-sm-3 order-info"><h3>{{orderResult.reference}}</h3><p>Your reference number</p></div>
      <div class="col-sm-3 order-info"><h3>{{orderResult.timeRemaining}}</h3><p>Time remaining</p></div>
      <div class="col-sm-3 order-info"><h3>{{orderResult.output.amount}} {{orderResult.output.currency}}</h3><p>Amount of {{orderResult.output.currency}} to receive</p></div>
      <div class="col-sm-3 order-info"><h3>{{orderResult.input.amount/orderResult.output.amount  | number: 6}} {{orderResult.output.currency}}/{{orderResult.input.currency}}</h3><p>Your rate</p></div>
    </div>
    <!-- swap Progress -->
    <div class="swap-progress">
      <div class="sep"></div>
      <div class="progress-item progress-true">
        <div class="progress-circle"><i>1</i></div>
        <p>Order Initiated</p>
      </div>
      <div class="progress-item progress-active">
        <div class="progress-circle"><i>2</i></div>
        <p>Waiting for your {{orderResult.input.currency}}</p>
      </div>
      <div class="progress-item">
        <div class="progress-circle"><i>3</i></div>
        <p>Payment Received</p>
      </div>
      <div class="progress-item">
        <div class="progress-circle"><i>4</i></div>
        <p>Sending you {{orderResult.output.currency}} Now</p>
      </div>
      <div class="progress-item">
        <div class="progress-circle"><i>5</i></div>
        <p>Order Complete</p>
      </div>
    </div>
    <!-- / swap Progress -->
    <div class="text-center">
      <h1> Please send <strong>{{orderResult.input.amount}} {{orderResult.input.currency}}</strong> to <br /> <strong class="mono text-primary">{{orderResult.payment_address}}</strong></h1>
    </div>
    <!-- Unlock Wallet Drtv -->
    <article class="collapse-container">
      <div class="text-center" ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h5> Unlock your wallet to send ETH or Tokens directly from this page. </h5>
      </div>
      <div class="col-xs-12 clearfix" ng-show="!wd">
        @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
        @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
      </div>
    </article>
    <!-- / Unlock Wallet Drtv -->
    <!-- Send Transaction Panel -->
    <article class="clearfix" ng-show="wallet!=null" ng-controller='sendTxCtrl'>
      @@if (site === 'cx' )  {  @@include( './sendTransactionContent.tpl', { "site": "mew" } )   }
      @@if (site === 'mew' ) {  @@include( './sendTransactionContent.tpl', { "site": "cx" } )    }
    </article>
    <!-- / Send Transaction Panel -->
  </section>
  <!-- / Order Started Panel -->


</main>
<!-- / Swap Page -->
