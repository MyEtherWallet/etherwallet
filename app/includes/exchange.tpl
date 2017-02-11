<!-- Exchange Page -->
<main class="tab-pane exchange-tab active" ng-if="globalService.currentTab==globalService.tabs.exchange.id" ng-controller='exchangeCtrl'  ng-cloak>

  <article class="collapse-container">



    <!-- Rates Panel -->
    <section class="row exchange-rates">
      <div class="clearfix">
        <h5 class="col-xs-6 col-xs-offset-3">Current Rates</h5>
        <div class="col-xs-3"><img class="pull-right" src="images/bity.jpg" width="100" height="38" /></div>
      </div>
        <div class="col-sm-4 order-info">
          <p><input class="form-control input-sm" ng-model="priceTicker.ETHBTC"/><span>ETH = {{bity.curRate.ETHBTC*priceTicker.ETHBTC | number: 6}} BTC</span></p>
          <p><input class="form-control input-sm" ng-model="priceTicker.ETHREP"/><span>ETH = {{bity.curRate.ETHREP*priceTicker.ETHREP | number: 6}} REP</span></p>
        </div>
        <div class="col-sm-4 order-info">
          <p><input class="form-control input-sm" ng-model="priceTicker.BTCREP"/><span>BTC = {{bity.curRate.BTCREP*priceTicker.BTCREP | number: 6}} REP</span></p>
          <p><input class="form-control input-sm" ng-model="priceTicker.BTCETH"/><span>BTC = {{bity.curRate.BTCETH*priceTicker.BTCETH | number: 6}} ETH</span></p>
        </div>
        <div class="col-sm-4 order-info">
          <p><input class="form-control input-sm" ng-model="priceTicker.REPBTC"/><span>REP = {{bity.curRate.REPBTC*priceTicker.REPBTC | number: 6}} BTC</span></p>
          <p><input class="form-control input-sm" ng-model="priceTicker.REPETH"/><span>REP = {{bity.curRate.REPETH*priceTicker.REPETH | number: 6}} ETH</span></p>
        </div>
    </section>
    <!-- / Rates Panel -->



    <!-- Exchange Panel -->
    <section class="exchange-panel" ng-show="showStage1">

      <h1> I want to exchange my </h1>

      <input class="form-control" type="text" placeholder="{{ 'SEND_amount_short' | translate }}"  ng-change ="updateEstimate(true)" ng-model="exchangeOrder.fromVal" ng-class="Validator.isPositiveNumber(exchangeOrder.fromVal) ? 'is-valid' : 'is-invalid'"/>

      <span class="dropdown">
        <a class="btn btn-default dropdown-toggle" class="dropdown-toggle" ng-click="dropdownFrom = !dropdownFrom">{{exchangeOrder.fromCoin}} <span class="caret"></span></a>
        <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownFrom">
          <li ng-repeat="coin in availableCoins track by $index">
          <a ng-class="{true:'active'}[coin == exchangeOrder.fromCoin]" ng-click="setOrderCoin(true, coin)"> {{coin}} </a>
          </li>
        </ul>
      </span>

      <h1> for </h1>

      <input class="form-control" type="text" placeholder="{{ 'SEND_amount_short' | translate }}"  ng-change ="updateEstimate(false)" ng-model="exchangeOrder.toVal" ng-class="Validator.isPositiveNumber(exchangeOrder.toVal) ? 'is-valid' : 'is-invalid'"/>

      <div class="dropdown">
        <a class="btn btn-default dropdown-toggle" class="dropdown-toggle" ng-click="dropdownTo = !dropdownTo">{{exchangeOrder.toCoin}}<span class="caret"></span></a>
        <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownTo">
          <li ng-repeat="coin in availableCoins track by $index" ng-show="coin != exchangeOrder.fromCoin">
          <a ng-class="{true:'active'}[coin == exchangeOrder.toCoin]" ng-click="setOrderCoin(false, coin)"> {{coin}} </a>
          </li>
        </ul>
      </div>
    <div class="text-center"><a ng-click="setFinalPrices()"class="btn btn-info btn-lg"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 451.847 451.847"><path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z" fill="#FFF"/></svg> Let's do this! </a></div>
    </section>
    <!-- / Exchange Panel -->

    <!-- Exchange Start 1 -->
    <section class="exchange-start row" ng-show="showStage2">
      <div class="clearfix">
        <h5 class="col-xs-6 col-xs-offset-3">Your Information</h5>
        <div class="col-xs-3"><img class="pull-right" src="images/bity.jpg" width="100" height="38" /></div>
      </div>
      <div class="order-info-wrap clearfix">
        <div class="col-sm-4 order-info"><h4>{{exchangeOrder.fromVal}} {{exchangeOrder.fromCoin}}</h4><p>Amount to send</p></div>
        <div class="col-sm-4 order-info"><h4>{{exchangeOrder.toVal}} {{exchangeOrder.toCoin}}</h4><p>Amount to receive</p></div>
        <div class="col-sm-4 order-info"><h4>{{exchangeOrder.exchangeRate}} {{exchangeOrder.exchangePair}}</h4><p>Your rate</p></div>
      </div>
      <!-- Your Address -->
      <div class="col-sm-12">
        <div class="row">
          <div class="col-xs-2 address-identicon-container-right">
            <div ng-show="exchangeOrder.toCoin == 'ETH' || exchangeOrder.toCoin=='REP'" class="addressIdenticon" title="Address Indenticon" blockie-address="{{exchangeOrder.toAddress}}" watch-var="exchangeOrder.toAddress"></div>
          </div>
          <div class="col-xs-10">
            <label> Your Receiving <strong>({{exchangeOrder.toCoin}})</strong> Address </label>
            <input class="form-control" type="text" placeholder="{{exchangeOrder.toCoin=='BTC' ?  '1MEWT2SGbqtz6mPCgFcnea8XmWV5Z4Wc6' : '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8'}}" ng-model="exchangeOrder.toAddress" ng-class="Validator.isValidAddress(exchangeOrder.toAddress) || Validator.isValidBTCAddress(exchangeOrder.toAddress) ? 'is-valid' : 'is-invalid'"/>
          </div>
        </div>
      </div>
      <!-- /Your Address -->

    <div class="text-center"><a class="btn btn-primary btn-lg"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 451.847 451.847"><path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z" fill="#FFF"/></svg> Start Transaction </a></div>
    </section>
    <!-- / Exchange Start 1 -->

    <!-- Order Started Panel -->
    <section class="exchange-order row" ng-show="showStage3Btc">
      <div class="clearfix">
        <h5 class="col-xs-6 col-xs-offset-3 text-center">Your Order Information - Please Save</h5>
        <div class="col-xs-3"><img class="pull-right" src="images/bity.jpg" width="100" height="38" /></div>
      </div>
      <div class="order-info-wrap clearfix">
        <div class="col-sm-3 order-info"><h3>1234567890</h3><p>Your reference number</p></div>
        <div class="col-sm-3 order-info"><h3>10:00</h3><p>Time remaining to send 1 BTC</p></div>
        <div class="col-sm-3 order-info"><h3>86.87342542 ETH</h3><p>Amount of ETH to receive</p></div>
        <div class="col-sm-3 order-info"><h3>0.0113 ETH/BTC</h3><p>Your rate</p></div>
      </div>
      <div class="text-center">
        <h1> Please send <strong>1 BTC</strong> to <br /> <strong class="mono">183wh6VYodFt9iwuTf9Jze49TT2cVkfrZq</strong></h1>
        <label> Scan BTC Address </label>
        <div class="qr-code" qr-code="183wh6VYodFt9iwuTf9Jze49TT2cVkfrZq" ></div>
      </div>
    </section>
    <!-- / Order Started Panel -->


    <!-- Order Started Panel - Sending ETH or REP -->
    <section class="exchange-order row" ng-show="showStage3Eth">
      <div class="clearfix">
        <h5 class="col-xs-6 col-xs-offset-3 text-center">Your Order Information - Please Save</h5>
        <div class="col-xs-3"><img class="pull-right" src="images/bity.jpg" width="100" height="38" /></div>
      </div>
      <div class="order-info-wrap clearfix">
        <div class="col-sm-3 order-info"><h3>1234567890</h3><p>Your reference number</p></div>
        <div class="col-sm-3 order-info"><h3>10:00</h3><p>Time remaining to send 1 ETH</p></div>
        <div class="col-sm-3 order-info"><h3>0.87342542 BTC</h3><p>Amount of BTC to receive</p></div>
        <div class="col-sm-3 order-info"><h3>10.0113 ETH/BTC</h3><p>Your rate</p></div>
      </div>
      <div class="text-center">
        <h1> Please send <strong>1 ETH</strong> to <br /> <strong class="mono">0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8</strong></h1>
        <h5> You can send by unlocking your wallet below. The above information will not disappear. :) </h5>
      </div>
      <div ng-show="!wd">
        @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
        @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
      </div>
      <article class="row" ng-show="wallet!=null">

        @@if (site === 'cx1' )  {  @@include( './sendTransactionContent.tpl', { "site": "mew" } )   }
        @@if (site === 'mew1' ) {  @@include( './sendTransactionContent.tpl', { "site": "cx" } )    }

      </article>

    </section>
    <!-- / Order Started Panel -->


  </main>
<!-- / Send Transaction Page -->
