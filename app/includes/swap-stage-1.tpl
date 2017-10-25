<!-- Swap Rates Panel -->
<article class="swap-rates" ng-show="showStage1">

  <!-- Title -->
  <section class="row">
    <h5 class="col-xs-6 col-xs-offset-3" translate="SWAP_rates"> Current Rates </h5>
  </section>
  <!-- Title -->

  <!-- Colored Columns -->
  <section class="row order-panel">
    <div class="col-sm-6 order-info">
      <p class="mono">
        <input class="form-control input-sm" ng-model="priceTicker.ETHBTC"/>
        <span>ETH = {{bity.curRate.ETHBTC*priceTicker.ETHBTC | number: 6}} BTC</span>
      </p>
      <p class="mono">
        <input class="form-control input-sm" ng-model="priceTicker.ETHREP"/>
        <span>ETH = {{bity.curRate.ETHREP*priceTicker.ETHREP | number: 6}} REP</span>
      </p>
    </div>
    <div class="col-sm-6 order-info">
      <p class="mono">
        <input class="form-control input-sm" ng-model="priceTicker.BTCETH"/>
        <span>BTC = {{bity.curRate.BTCETH*priceTicker.BTCETH | number: 6}} ETH</span>
      </p>
      <p class="mono">
        <input class="form-control input-sm" ng-model="priceTicker.BTCREP"/>
        <span>BTC = {{bity.curRate.BTCREP*priceTicker.BTCREP | number: 6}} REP</span>
      </p>
    </div>
    <a class="link bity-logo" href="https://bity.com/af/jshkb37v" target="_blank" rel="noopener noreferrer"><img src="images/logo-bity-white.svg" width="120" height="49" /></a>
  </section>
  <!-- / Colored Columns -->

</article>
<!-- / Swap Rates Panel -->



<!-- Swap Init Panel -->
<article class="swap-panel block clearfix" ng-show="showStage1">

  <h1 translate="SWAP_init_1"> I want to swap my </h1>

  <br />

  <input class="form-control"
         type="text"
         placeholder="{{ 'SEND_amount_short' | translate }}"
         ng-change ="updateEstimate(true)"
         ng-model="swapOrder.fromVal"
         ng-click="showedMinMaxError = false"
         ng-class="Validator.isPositiveNumber(swapOrder.fromVal)  && verifyMinMaxValues() ? 'is-valid' : 'is-invalid'" />

  <span class="dropdown">
    <a class="btn btn-default dropdown-toggle" ng-click="dropdownFrom = !dropdownFrom">{{swapOrder.fromCoin}}<i class="caret"></i></a>
    <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownFrom">
      <li ng-repeat="coin in availableCoins track by $index" ng-show="coin != 'REP'">
        <a ng-class="{true:'active'}[coin == swapOrder.fromCoin]" ng-click="setOrderCoin(true, coin)"> {{coin}} </a>
      </li>
    </ul>
  </span>

  <h1 translate="SWAP_init_2"> for </h1>

  <input class="form-control"
         type="text"
         placeholder="{{ 'SEND_amount_short' | translate }}"
         ng-change ="updateEstimate(false)"
         ng-model="swapOrder.toVal"
         ng-click="showedMinMaxError = false"
         ng-class="Validator.isPositiveNumber(swapOrder.toVal) && verifyMinMaxValues() ? 'is-valid' : 'is-invalid'" />

  <div class="dropdown">
    <a class="btn btn-default dropdown-toggle" class="dropdown-toggle" ng-click="dropdownTo = !dropdownTo">{{swapOrder.toCoin}}<i class="caret"></i></a>
    <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownTo">
      <li ng-repeat="coin in availableCoins track by $index" ng-show="coin != swapOrder.fromCoin">
        <a ng-class="{true:'active'}[coin == swapOrder.toCoin]" ng-click="setOrderCoin(false, coin)"> {{coin}} </a>
      </li>
    </ul>
  </div>

  <div class="col-xs-12 clearfix text-center">
    <a ng-click="setFinalPrices()" class="btn btn-info btn-primary">
      <span translate="SWAP_init_CTA"> Let's do this! </span>
    </a>
  </div>

</article>
<!-- / Swap Init Panel -->
