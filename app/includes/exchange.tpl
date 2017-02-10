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
          <p><input class="form-control input-sm" value="1" /><span>ETH = 0.01131311 BTC</span></p>
          <p><input class="form-control input-sm" value="1" /><span>ETH = 2.56986932 REP</span></p>
        </div>
        <div class="col-sm-4 order-info">
          <p><input class="form-control input-sm" value="1" /><span>BTC = 226.875435 REP</span></p>
          <p><input class="form-control input-sm" value="1" /><span>BTC = 87.8653452 ETH</span></p>
        </div>
        <div class="col-sm-4 order-info">
          <p><input class="form-control input-sm" value="1" /><span>REP = 0.00434002 BTC</span></p>
          <p><input class="form-control input-sm" value="1" /><span>REP = 0.38061579 ETH</span></p>
        </div>
    </section>
    <!-- / Rates Panel -->



    <!-- Exchange Panel -->
    <section class="exchange-panel">

      <h1> I want to exchange my </h1>

      <input class="form-control" type="text" placeholder="{{ 'SEND_amount_short' | translate }}" ng-model="tx.value" ng-class="Validator.isPositiveNumber(tx.value) ? 'is-valid' : 'is-invalid'"/>

      <span class="dropdown">
        <a class="btn btn-default dropdown-toggle" class="dropdown-toggle" ng-click="dropdownSend = !dropdownSend">ETH <span class="caret"></span></a>
        <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownSend">
          <li><a class="active">ETH</a></li><li><a >REP</a></li><li><a >BTC</a></li>
        </ul>
      </span>

      <h1> for </h1>

      <input class="form-control" type="text" placeholder="{{ 'SEND_amount_short' | translate }}" ng-model="tx.value" ng-class="Validator.isPositiveNumber(tx.value) ? 'is-valid' : 'is-invalid'"/>

      <div class="dropdown">
        <a class="btn btn-default dropdown-toggle" class="dropdown-toggle" ng-click="dropdownSend = !dropdownSend">BTC<span class="caret"></span></a>
        <ul class="dropdown-menu dropdown-menu-right" ng-show="dropdownSend">
          <li><a class="active">BTC</a></li><li><a >REP</a></li><li><a >ETH</a></li>
        </ul>
      </div>

    </section>
    <!-- / Exchange Panel -->


    <div class="text-center"><a class="btn btn-info btn-lg"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 451.847 451.847"><path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z" fill="#FFF"/></svg> Let's do this! </a></div>



    <!-- Exchange Start 1 -->
    <section class="exchange-start row">
      <div class="clearfix">
        <h5 class="col-xs-6 col-xs-offset-3">Your Information</h5>
        <div class="col-xs-3"><img class="pull-right" src="images/bity.jpg" width="100" height="38" /></div>
      </div>
      <div class="order-info-wrap clearfix">
        <div class="col-sm-4 order-info"><h4>10.234 ETH</h4><p>Amount to send</p></div>
        <div class="col-sm-4 order-info"><h4>0.134 BTC</h4><p>Amount to receive</p></div>
        <div class="col-sm-4 order-info"><h4>0.0113 ETH/BTC</h4><p>Your rate</p></div>
      </div>
      <!-- Your Address -->
      <div class="col-sm-6">
        <div class="row">
          <div class="col-xs-2 address-identicon-container-right">
            <div class="addressIdenticon" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div>
          </div>
          <div class="col-xs-10">
            <label> Your Receiving <strong>(BTC)</strong> Address </label>
            <input class="form-control"  type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="tx.to" ng-class="Validator.isValidAddress(tx.to) ? 'is-valid' : 'is-invalid'"/>
          </div>
        </div>
      </div>
      <!-- /Your Address -->
      <!-- Your Refund Address -->
      <div class="col-sm-6">
        <div class="row">
          <div class="col-xs-10">
            <label> Your Sending <strong>(ETH)</strong> Address </label>
            <input class="form-control"  type="text" placeholder="0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" ng-model="tx.to" ng-class="Validator.isValidAddress(tx.to) ? 'is-valid' : 'is-invalid'"/>
          </div>
          <div class="col-xs-2 address-identicon-container">
            <div class="addressIdenticon" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div>
          </div>
        </div>
        <!-- /Your Refund Address -->
      </div>
    </section>
    <!-- / Exchange Start 1 -->


    <div class="text-center"><a class="btn btn-primary btn-lg"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 451.847 451.847"><path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z" fill="#FFF"/></svg> Start Transaction </a></div>


    <!-- Order Started Panel -->
    <section class="exchange-order row">
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
    <section class="exchange-order row">
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

        @@if (site === 'cx' )  {  @@include( './sendTransactionContent.tpl', { "site": "mew" } )   }
        @@if (site === 'mew' ) {  @@include( './sendTransactionContent.tpl', { "site": "cx" } )    }

      </article>

    </section>
    <!-- / Order Started Panel -->


  </main>
<!-- / Send Transaction Page -->
