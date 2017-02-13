<article class="swap-order" ng-show="showStage3Btc || showStage3Eth">


  <!-- Title -->
  <section class="row text-center">
    <h5 class="col-xs-6 col-xs-offset-3" translate="SWAP_information">Your Information</h5>
    <div class="col-xs-3"><a class="link" href="https://bity.com/af/jshkb37v" target="_blank">
      <img class="pull-right" src="images/logo-bity.svg" width="100" height="38" />
    </a></div>
  </section>


  <!-- Order Info -->
  <section class="row order-info-wrap">
    <div class="col-sm-3 order-info">
      <h4>{{orderResult.reference}}</h4>
      <p translate="SWAP_ref_num">Your reference number</p>
    </div>
    <div class="col-sm-3 order-info">
      <h4>{{orderResult.timeRemaining}}</h4>
      <p translate="SWAP_time">Time remaining to send {{orderResult.input.amount}}&nbsp;{{orderResult.input.currency}}</p>
    </div>
    <div class="col-sm-3 order-info">
      <h4>{{orderResult.output.amount}} {{orderResult.output.currency}}</h4>
      <p translate="SWAP_rec_amt">Amount to receive</p>
    </div>
    <div class="col-sm-3 order-info">
      <h4>{{orderResult.input.amount/orderResult.output.amount  | number: 6}} {{orderResult.output.currency}}/{{orderResult.input.currency}}</h4>
      <p translate="SWAP_your_rate">Your rate</p>
    </div>
  </section>


  <!-- Swap Progress -->
  <section class="row swap-progress">
    <div class="sep"></div>
    <div class="progress-item progress-true">
      <div class="progress-circle"><i>1</i></div><p translate="SWAP_progress_1">Order Initiated</p>
    </div>
    <div class="progress-item progress-active">
      <div class="progress-circle"><i>2</i></div><p translate="SWAP_progress_2">Waiting for your {{orderResult.input.currency}}...</p>
    </div>
    <div class="progress-item">
      <div class="progress-circle"><i>3</i></div><p translate="SWAP_progress_3">{{orderResult.input.currency}} Received!</p>
    </div>
    <div class="progress-item">
      <div class="progress-circle"><i>4</i></div><p translate="SWAP_progress_4">Sending your {{orderResult.output.currency}}</p>
    </div>
    <div class="progress-item">
      <div class="progress-circle"><i>5</i></div><p translate="SWAP_progress_5">Order Complete</p>
    </div>
  </section>


  <!-- Swap CTA -->
  <section class="row text-center">
    <h1>
      <span translate="SWAP_order_CTA">      Please send                                                 </span>
      <strong>                               {{orderResult.input.amount}} {{orderResult.input.currency}} </strong>
      <span translate="SENDModal_Content_2"> to address                                                  </span><br />
      <strong class="mono text-primary">     {{orderResult.payment_address}}                             </strong>
    </h1>
  </section>


  <!-- Swap CTA ETH -->
  <article class="row" ng-show="showStage3Eth">
    <section class="clearfix collapse-container">
      <div class="text-center" ng-click="wd = !wd">
        <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
        <h5 traslate="SWAP_unlock">Unlock your wallet to send ETH or Tokens directly from this page.</h5>
      </div>
      <div ng-show="!wd">
          @@if (site === 'mew' ) {  <wallet-decrypt-drtv></wallet-decrypt-drtv>         }
          @@if (site === 'cx' )  {  <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>   }
      </div>
    </section>

    <section class="clearfix" ng-show="wallet!=null" ng-controller='sendTxCtrl'>
      @@if (site === 'mew' ) { @@include( './sendTx-content.tpl', { "site": "mew" } ) }
      @@if (site === 'cx'  ) { @@include( './sendTx-content.tpl', { "site": "cx"  } ) }

      @@if (site === 'mew' ) { @@include( './sendTx-modal.tpl',   { "site": "mew" } ) }
      @@if (site === 'cx'  ) { @@include( './sendTx-modal.tpl',   { "site": "cx"  } ) }
    </section>
  </article>
  <!-- / Swap CTA ETH -->


  <!-- Swap CTA BTC -->
  <section class="row" ng-show="showStage3Btc">
    <label translate="x_Address"> Your Address </label>
    <div class="qr-code" qr-code="{{orderResult.payment_address}}" watch-var="orderResult" ></div>
  </section>


</article>
