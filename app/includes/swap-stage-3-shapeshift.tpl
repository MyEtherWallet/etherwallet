<article class="swap-order" ng-if="showStage3ShapeShift">


    <!-- Title -->
    <section class="row text-center">
        <div class="col-xs-3 text-left"><a class="btn btn-danger btn-xs" ng-click="newSwap()"> Start New Swap </a></div>
        <h5 class="col-xs-6" translate="SWAP_information">Your Information</h5>
        <div class="col-xs-3">
            <a class="link bity-logo" href="https://shapeshift.io" target="_blank" rel="noopener noreferrer">
                <img class="pull-right" src="images/shapeshift-dark.svg" width="100" height="38"/>
            </a></div>
    </section>


    <!-- Order Info -->
    <section class="row order-info-wrap">
        <div class="col-sm-3 order-info">
            <h4>{{orderResult.orderId}}</h4>
            <p translate="SWAP_ref_num">Your reference number</p>
        </div>
        <div class="col-sm-3 order-info">
            <h4>{{orderResult.expirationFormatted}}</h4>
            <p ng-show="orderResult.expirationFormatted" translate="SWAP_time">Time remaining to send</p>
        </div>
        <div class="col-sm-3 order-info">
            <h4>{{orderResult.withdrawalAmount}} {{orderResult.pair.split('_')[1].toUpperCase()}}</h4>
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
        <div class="progress-item {{getShapeShiftProgressClass(0)}}">
            <div class="progress-circle"><i>1</i></div>
            <p translate="SWAP_progress_1">Order Initiated</p>
        </div>
        <div class="progress-item {{getShapeShiftProgressClass(1)}}">
            <div class="progress-circle"><i>2</i></div>
            <p><span translate="SWAP_progress_2">Waiting for your </span> {{orderResult.inputCurrency}}...</p>
        </div>
        <div class="progress-item {{getShapeShiftProgressClass(2)}}">
            <div class="progress-circle"><i>3</i></div>
            <p>{{orderResult.inputCurrency}} <span translate="SWAP_progress_3">Received!</span></p>
        </div>

        <div class="progress-item {{getShapeShiftProgressClass(3)}}">
            <div class="progress-circle"><i>4</i></div>
            <p>
                <span translate="SWAP_progress_4">Sending your </span> {{orderResult.outputCurrency}} <br/>
            </p>
            <div ng-if="!isBitySwap">
                <small> Waiting for confirmation...</small>
            </div>
        </div>

        <div class="progress-item {{getShapeShiftProgressClass(4)}}">
            <div class="progress-circle"><i>5</i></div>
            <p translate="SWAP_progress_5">Order Complete</p>
        </div>
    </section>

    <div ng-show="!failedShift">

        <article class="row text-center" ng-if="orderIsExpired">
            <h1 style="color: red">Your order has expired!</h1>
        </article>

        <article class="row text-center" ng-if="shapeShiftStatus.status === 'complete'">
            <h1 style="color: green">Success! <a ng-click="navigateTo(getExplorerInfo().txHref)">View Tx</a></h1>
        </article>


        <!-- Swap CTA -->
        <section class="row text-center" ng-if="shapeShiftStatus.status !== 'complete' && !orderIsExpired">
            <h1>
                <span translate="SWAP_order_CTA">      Please send                                                 </span>
                <strong> {{orderResult.depositAmount}} {{orderResult.inputCurrency}} </strong>
                <span translate="SENDModal_Content_2"> to address                                                  </span><br/>
                <strong class="mono text-primary"> {{orderResult.deposit}} </strong>
            </h1>
        </section>


        <!-- Swap CTA ETH -->
        <article class="row" ng-if="showStage3Eth && shapeShiftStatus.status !== 'complete' && !orderIsExpired">
            <div class="col-md-6 col-md-offset-3">
                <button class="btn btn-primary btn-block" ng-click="navigateToSend()"><- Navigate to the Send tab to
                    send
                    ETH or Tokens
                </button>
            </div>


            <div class="alert alert-danger" ng-show="ajaxReq.type!=='ETH'">
                <strong>Warning! You are not connected to an ETH node.</strong> <br/>
                Please use the node switcher in the top-right corner to switch to an ETH node. We <strong>do
                not</strong>
                support swapping ETC or Testnet ETH.
            </div>

            <section class="row" ng-show="wallet!=null" ng-controller='sendTxCtrl'>
                @@if (site === 'mew' ) { @@include( './sendTx-content.tpl', { "site": "mew" } ) }
                @@if (site === 'cx' ) { @@include( './sendTx-content.tpl', { "site": "cx" } ) }

                @@if (site === 'mew' ) { @@include( './sendTx-modal.tpl', { "site": "mew" } ) }
                @@if (site === 'cx' ) { @@include( './sendTx-modal.tpl', { "site": "cx" } ) }
            </section>
        </article>

        <!-- / Swap CTA ETH -->


        <!-- Swap CTA BTC -->
        <section class="row block swap-address text-center" ng-show="showStage3Btc">
            <label translate="x_Address"> Your Address </label>
            <div class="qr-code" qr-code="{{'bitcoin:'+orderResult.deposit+'?amount='+orderResult.depositAmount}}"
                 watch-var="orderResult"></div>
            <br/>
            <p class="text-danger">
                Orders that take too long will have to be processed manually &amp; and may delay the amount of time it
                takes
                to receive your coins.
                <br/>
                <a href="https://shapeshift.io/#/btcfee" target="_blank" rel="noopener noreferrer">Please use the
                    recommended TX fees seen here.</a>
            </p>

        </section>

    </div>


    <article class="row text-center" ng-if="failedShift">
        <h1 style="color: red">Your shift encountered an error! Please contact support using the orange button below</h1>
    </article>


</article>
