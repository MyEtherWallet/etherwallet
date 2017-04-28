<article class="swap-order" ng-show="showStage3Btc || showStage3Eth">


  <!-- Title -->
  <section class="row text-center">
    <div class="col-xs-3 text-left"><a class="btn btn-danger btn-sm" ng-click="newSwap()"> Start New Swap </a></div>
    <h5 class="col-xs-6" translate="SWAP_information">Your Information</h5>
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
      <h4>{{orderResult.progress.timeRemaining}}</h4>
      <p ng-show="orderResult.progress.showTimeRem" translate="SWAP_time">Time remaining to send</p>
      <p translate="SWAP_elapsed" ng-show="!orderResult.progress.showTimeRem">Time elapsed since sent</p>
    </div>
    <div class="col-sm-3 order-info">
      <h4>{{orderResult.output.amount}} {{orderResult.output.currency}}</h4>
      <p translate="SWAP_rec_amt">Amount to receive</p>
    </div>
    <div class="col-sm-3 order-info">
      <h4>{{swapOrder.swapRate}} {{swapOrder.swapPair}}</h4>
      <p translate="SWAP_your_rate">Your rate</p>
    </div>
  </section>


  <!-- Swap Progress -->
  <section class="row swap-progress">
    <div class="sep"></div>
    <div class="progress-item {{orderResult.progress.bar[0]}}">
      <div class="progress-circle"><i>1</i></div><p translate="SWAP_progress_1">Order Initiated</p>
    </div>
    <div class="progress-item {{orderResult.progress.bar[1]}}">
      <div class="progress-circle"><i>2</i></div><p><span translate="SWAP_progress_2">Waiting for your </span> {{orderResult.input.currency}}...</p>
    </div>
    <div class="progress-item {{orderResult.progress.bar[2]}}">
      <div class="progress-circle"><i>3</i></div><p>{{orderResult.input.currency}} <span translate="SWAP_progress_3">Received!</span></p>
    </div>
    <div class="progress-item {{orderResult.progress.bar[3]}}">
      <div class="progress-circle"><i>4</i></div>
      <p>
        <span translate="SWAP_progress_4">Sending your </span> {{orderResult.output.currency}} <br />
        <small ng-show="orderResult.input.currency=='ETH'"> Waiting for 10 confirmations... </small>
        <small ng-show="orderResult.input.currency=='BTC'"> Waiting for 1 confirmation... </small>
      </p>
    </div>
    <div class="progress-item {{orderResult.progress.bar[4]}}">
      <div class="progress-circle"><i>5</i></div><p translate="SWAP_progress_5">Order Complete</p>
    </div>
  </section>


  <!-- Swap CTA -->
  <section class="row text-center" ng-show="orderResult.progress.status=='OPEN'">
    <h1>
      <span translate="SWAP_order_CTA">      Please send                                                 </span>
      <strong>                               {{orderResult.input.amount}} {{orderResult.input.currency}} </strong>
      <span translate="SENDModal_Content_2"> to address                                                  </span><br />
      <strong class="mono text-primary">     {{orderResult.payment_address}}                             </strong>
    </h1>
  </section>


  <!-- Swap CTA ETH -->
  <article class="row" ng-show="showStage3Eth && orderResult.progress.status=='OPEN'">
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

    <div class="alert alert-danger" ng-show="ajaxReq.type!=='ETH'">
      <strong>Warning! You are not connected to an ETH node.</strong> <br />
      Please use the node switcher in the upper-right corner to switch to an ETH node. We <strong>do not</strong> support swapping ETC or Testnet ETH.
    </div>

    <section class="clearfix" ng-show="wallet!=null" ng-controller='sendTxCtrl'>
      @@if (site === 'mew' ) { @@include( './sendTx-content.tpl', { "site": "mew" } ) }
      @@if (site === 'cx'  ) { @@include( './sendTx-content.tpl', { "site": "cx"  } ) }

      @@if (site === 'mew' ) { @@include( './sendTx-modal.tpl',   { "site": "mew" } ) }
      @@if (site === 'cx'  ) { @@include( './sendTx-modal.tpl',   { "site": "cx"  } ) }
    </section>
  </article>
  <!-- / Swap CTA ETH -->


  <!-- Swap CTA BTC -->
  <section class="row text-center" ng-show="showStage3Btc && orderResult.progress.status=='OPEN'">
    <label translate="x_Address"> Your Address </label>
    <div class="qr-code" qr-code="{{'bitcoin:'+orderResult.payment_address+'?amount='+orderResult.input.amount}}" watch-var="orderResult" ></div>

    <div class="alert alert-danger"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24"><path d="M505.403 406.394L295.389 58.102c-8.274-13.721-23.367-22.245-39.39-22.245s-31.116 8.524-39.391 22.246L6.595 406.394c-8.551 14.182-8.804 31.95-.661 46.37 8.145 14.42 23.491 23.378 40.051 23.378h420.028c16.56 0 31.907-8.958 40.052-23.379 8.143-14.421 7.89-32.189-.662-46.369zm-28.364 29.978a12.684 12.684 0 0 1-11.026 6.436H45.985a12.68 12.68 0 0 1-11.025-6.435 12.683 12.683 0 0 1 .181-12.765L245.156 75.316A12.732 12.732 0 0 1 256 69.192c4.41 0 8.565 2.347 10.843 6.124l210.013 348.292a12.677 12.677 0 0 1 .183 12.764z" fill="#FFF"/><path d="M256.154 173.005c-12.68 0-22.576 6.804-22.576 18.866 0 36.802 4.329 89.686 4.329 126.489.001 9.587 8.352 13.607 18.248 13.607 7.422 0 17.937-4.02 17.937-13.607 0-36.802 4.329-89.686 4.329-126.489 0-12.061-10.205-18.866-22.267-18.866zM256.465 353.306c-13.607 0-23.814 10.824-23.814 23.814 0 12.68 10.206 23.814 23.814 23.814 12.68 0 23.505-11.134 23.505-23.814 0-12.99-10.826-23.814-23.505-23.814z" fill="#FFF"/></svg>&nbsp;
       <a href="https://shapeshift.io/#/btcfee" target="_blank">Please use the recommended TX fees seen here.</a>
       <br />
       Orders that take too long will have to be processed manually.
    </div>
  </section>


</article>
