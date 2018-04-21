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
    <!-- Kyber Token Rates -->
    <a ng-click="kybTok = !kybTok"><h5><span ng-show="kybTok">+</span><span ng-show="!kybTok">-</span> Tokens</h5></a>
<!--    <div class="row text-center" ng-click="kybTok = !kybTok">
        <a class="collapse-button "><span ng-show="kybTok">+</span><span ng-show="!kybTok">-</span> <h5>Tokens</h5></a>
        &lt;!&ndash;<h5 traslate="SWAP_unlock">Unlock your wallet to send ETH or Tokens directly from this page.</h5>&ndash;&gt;

    </div>-->
  <section class="row order-panel" ng-show="!kybTok">
    <div class="col-sm-6 order-info">
        <!-- from Token-->
     <p class="mono" ng-show="kyberPriceTicker['OMG/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['OMG/ETH']"/>
        <span>OMG = {{kyber.kyberRates['OMG/ETH']*kyberPriceTicker['OMG/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['KNC/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['KNC/ETH']"/>
        <span>KNC = {{kyber.kyberRates['KNC/ETH']*kyberPriceTicker['KNC/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['EOS/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['EOS/ETH']"/>
        <span>EOS = {{kyber.kyberRates['EOS/ETH']*kyberPriceTicker['EOS/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['SNT/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['SNT/ETH']"/>
        <span>SNT = {{kyber.kyberRates['SNT/ETH']*kyberPriceTicker['SNT/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ELF/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ELF/ETH']"/>
        <span>ELF = {{kyber.kyberRates['ELF/ETH']*kyberPriceTicker['ELF/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['POWR/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['POWR/ETH']"/>
        <span>POWR = {{kyber.kyberRates['POWR/ETH']*kyberPriceTicker['POWR/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['MANA/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['MANA/ETH']"/>
        <span>MANA = {{kyber.kyberRates['MANA/ETH']*kyberPriceTicker['MANA/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['BAT/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['BAT/ETH']"/>
        <span>BAT = {{kyber.kyberRates['BAT/ETH']*kyberPriceTicker['BAT/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['REQ/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['REQ/ETH']"/>
        <span>REQ = {{kyber.kyberRates['REQ/ETH']*kyberPriceTicker['REQ/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['GTO/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['GTO/ETH']"/>
        <span>GTO = {{kyber.kyberRates['GTO/ETH']*kyberPriceTicker['GTO/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['RDN/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['RDN/ETH']"/>
        <span>RDN = {{kyber.kyberRates['RDN/ETH']*kyberPriceTicker['RDN/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['APPC/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['APPC/ETH']"/>
        <span>APPC = {{kyber.kyberRates['APPC/ETH']*kyberPriceTicker['APPC/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ENG/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ENG/ETH']"/>
        <span>ENG = {{kyber.kyberRates['ENG/ETH']*kyberPriceTicker['ENG/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['SALT/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['SALT/ETH']"/>
        <span>SALT = {{kyber.kyberRates['SALT/ETH']*kyberPriceTicker['SALT/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['BQX/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['BQX/ETH']"/>
        <span>BQX = {{kyber.kyberRates['BQX/ETH']*kyberPriceTicker['BQX/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ADX/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ADX/ETH']"/>
        <span>ADX = {{kyber.kyberRates['ADX/ETH']*kyberPriceTicker['ADX/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['AST/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['AST/ETH']"/>
        <span>AST = {{kyber.kyberRates['AST/ETH']*kyberPriceTicker['AST/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['RCN/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['RCN/ETH']"/>
        <span>RCN = {{kyber.kyberRates['RCN/ETH']*kyberPriceTicker['RCN/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ZIL/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ZIL/ETH']"/>
        <span>ZIL = {{kyber.kyberRates['ZIL/ETH']*kyberPriceTicker['ZIL/ETH'] | number: 6}} ETH</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['LINK/ETH']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['LINK/ETH']"/>
        <span>LINK = {{kyber.kyberRates['LINK/ETH']*kyberPriceTicker['LINK/ETH'] | number: 6}} ETH</span>
      </p>
    </div>
      <!-- to ETH -->
    <div class="col-sm-6 order-info">
     <p class="mono" ng-show="kyberPriceTicker['ETH/OMG']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/OMG']"/>
        <span>ETH = {{kyber.kyberRates['ETH/OMG']*kyberPriceTicker['ETH/OMG'] | number: 6}} OMG</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/KNC']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/KNC']"/>
        <span>ETH = {{kyber.kyberRates['ETH/KNC']*kyberPriceTicker['ETH/KNC'] | number: 6}} KNC</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/EOS']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/EOS']"/>
        <span>ETH = {{kyber.kyberRates['ETH/EOS']*kyberPriceTicker['ETH/EOS'] | number: 6}} EOS</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/SNT']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/SNT']"/>
        <span>ETH = {{kyber.kyberRates['ETH/SNT']*kyberPriceTicker['ETH/SNT'] | number: 6}} SNT</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/ELF']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/ELF']"/>
        <span>ETH = {{kyber.kyberRates['ETH/ELF']*kyberPriceTicker['ETH/ELF'] | number: 6}} ELF</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/POWR']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/POWR']"/>
        <span>ETH = {{kyber.kyberRates['ETH/POWR']*kyberPriceTicker['ETH/POWR'] | number: 6}} POWR</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/MANA']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/MANA']"/>
        <span>ETH = {{kyber.kyberRates['ETH/MANA']*kyberPriceTicker['ETH/MANA'] | number: 6}} MANA</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/BAT']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/BAT']"/>
        <span>ETH = {{kyber.kyberRates['ETH/BAT']*kyberPriceTicker['ETH/BAT'] | number: 6}} BAT</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/REQ']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/REQ']"/>
        <span>ETH = {{kyber.kyberRates['ETH/REQ']*kyberPriceTicker['ETH/REQ'] | number: 6}} REQ</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/GTO']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/GTO']"/>
        <span>ETH = {{kyber.kyberRates['ETH/GTO']*kyberPriceTicker['ETH/GTO'] | number: 6}} GTO</span>
      </p>
      <!---->
     <p class="mono" ng-show="kyberPriceTicker['ETH/RDN']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/RDN']"/>
        <span>ETH = {{kyber.kyberRates['ETH/RDN']*kyberPriceTicker['ETH/RDN'] | number: 6}} RDN</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/APPC']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/APPC']"/>
        <span>ETH = {{kyber.kyberRates['ETH/APPC']*kyberPriceTicker['ETH/APPC'] | number: 6}} APPC</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/ENG']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/ENG']"/>
        <span>ETH = {{kyber.kyberRates['ETH/ENG']*kyberPriceTicker['ETH/ENG'] | number: 6}} ENG</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/SALT']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/SALT']"/>
        <span>ETH = {{kyber.kyberRates['ETH/SALT']*kyberPriceTicker['ETH/SALT'] | number: 6}} SALT</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/BQX']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/BQX']"/>
        <span>ETH = {{kyber.kyberRates['ETH/BQX']*kyberPriceTicker['ETH/BQX'] | number: 6}} BQX</span>
      </p>
      <p class="mono" ng-show="kyberPriceTicker['ETH/ADX']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/ADX']"/>
        <span>ETH = {{kyber.kyberRates['ETH/ADX']*kyberPriceTicker['ETH/ADX'] | number: 6}} ADX</span>
      </p>
      <p class="mono" ng-show="kyberPriceTicker['ETH/AST']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/AST']"/>
        <span>ETH = {{kyber.kyberRates['ETH/AST']*kyberPriceTicker['ETH/AST'] | number: 6}} AST</span>
      </p>
      <p class="mono" ng-show="kyberPriceTicker['ETH/RCN']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/RCN']"/>
        <span>ETH = {{kyber.kyberRates['ETH/RCN']*kyberPriceTicker['ETH/RCN'] | number: 6}} RCN</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/ZIL']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/ZIL']"/>
        <span>ETH = {{kyber.kyberRates['ETH/ZIL']*kyberPriceTicker['ETH/ZIL'] | number: 6}} ZIL</span>
      </p>
     <p class="mono" ng-show="kyberPriceTicker['ETH/LINK']">
        <input class="form-control input-sm" ng-model="kyberPriceTicker['ETH/LINK']"/>
        <span>ETH = {{kyber.kyberRates['ETH/LINK']*kyberPriceTicker['ETH/LINK'] | number: 6}} LINK</span>
      </p>
    </div>
    <a class="link bity-logo" href="https://home.kyber.network/" target="_blank" rel="noopener noreferrer"><img src="images/logo-kyber.svg" width="200" height="111" /></a>
  </section>
  <!-- / Kyber Token Rates -->
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
         ng-click="resetErrorShownStates()"
         ng-class="Validator.isPositiveNumber(swapOrder.fromVal)  && verifyMinMaxValues() ? 'is-valid' : 'is-invalid'" />

  <span class="dropdown">
    <a class="btn btn-default dropdown-toggle" ng-click="dropdownFrom = !dropdownFrom">{{swapOrder.fromCoin}}<i class="caret"></i></a>
    <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownFrom">
      <li ng-repeat="coin in availableFromOptions track by $index" ng-show="showInFromList(coin)">
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
         ng-click="resetErrorShownStates()"
         ng-class="Validator.isPositiveNumber(swapOrder.toVal) && verifyMinMaxValues() ? 'is-valid' : 'is-invalid'" />

  <div class="dropdown">
    <a class="btn btn-default dropdown-toggle" class="dropdown-toggle" ng-click="dropdownTo = !dropdownTo">{{swapOrder.toCoin}}<i class="caret"></i></a>
    <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownTo">
      <li ng-repeat="coin in availableToOptions track by $index" ng-show="showInToList(coin)">
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
