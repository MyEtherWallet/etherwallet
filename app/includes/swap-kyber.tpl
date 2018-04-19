<!-- Swap Start Kyber 2 -->
<article ng-if="isKyberSwap">

    <!-- Swap Kyber 2 -->
    <article class="swap-start" ng-show="showStage2Kyber">


        <!-- Title -->
        <section class="row">
            <h5 class="col-xs-6 col-xs-offset-3" translate="SWAP_information">Your Information</h5>
            <div class="col-xs-3"><a class="link" href="https://home.kyber.network/" target="_blank"
                                     rel="noopener noreferrer">
                <img class="pull-right" src="images/logo-kyber.svg" width="100" height="38"/>
            </a></div>
        </section>
        <!-- Title -->


        <!-- Info Row -->
        <section class="order-info-wrap row">
            <div class="col-sm-4 order-info">
                <h4> {{swapOrder.fromVal}} {{swapOrder.fromCoin}} </h4>
                <p translate="SWAP_send_amt"> Amount to send </p>
            </div>
            <div class="col-sm-4 order-info">
                <h4> {{swapOrder.toVal}} {{swapOrder.toCoin}} </h4>
                <p translate="SWAP_rec_amt"> Amount to receive </p>
            </div>
            <div class="col-sm-4 order-info">
                <h4> {{swapOrder.swapRate}} {{swapOrder.swapPair}} </h4>
                <p translate="SWAP_your_rate"> Your rate </p>
            </div>
        </section>
        <!-- / Info Row -->

        <!-- Your Address -->
        <section class='swap-address block'>
            <section class="row">
                <div class="col-sm-8 col-sm-offset-2 col-xs-12">
                    <!--<label><span translate="SWAP_rec_add">Your Address To Send The </span> <strong>({{swapOrder.toCoin}})</strong></label>-->
                    <label><span>Your Address To Send The </span> <strong>({{swapOrder.toCoin}})</strong></label>
                    <!-- todo should I just wait for the wallet unlock and not ask for an address first.  then if wallet uplock calculation proves false at send tx.  present option to return to start???-->
                    <address-field placeholder="0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"
                                   var-name="swapOrder.toAddress"></address-field>
                </div>
            </section>
            <!-- /Your Address -->
            <!-- CTA -->

            <section class="row text-center" ng-if="!kyberReturnToStart">
                <a ng-click="startKyber()" class="btn btn-primary btn-lg"><span
                    translate="SWAP_start_CTA"> Start Swap </span></a>
            </section>
            <section class="row text-center" ng-if="kyberReturnToStart">
                <a ng-click="returnToStart()" class="btn btn-primary btn-lg"><span> Return to Swap Selector </span></a>
                <!-- todo: add translate -->
            </section>
            <!-- / CTA -->
        </section>


    </article>
    <!-- / Swap Kyber 2 -->
    <!----------------------------------------------------------------------------------------------------------------->
    <!-- Swap Kyber 3-->
    <article class="swap-order" ng-show="showStage3Kyber">

        <!-- Title -->
        <section class="row text-center">
            <div class="col-xs-3 text-left"><a class="btn btn-danger btn-xs" ng-click="newSwap()"> Start New Swap </a>
            </div>
            <h5 class="col-xs-6" translate="SWAP_information">Your Information</h5>
            <div class="col-xs-3"><a class="link" href="https://home.kyber.network/" target="_blank"
                                     rel="noopener noreferrer">
                <img class="pull-right" src="images/logo-kyber.svg" width="200" height="111"/>
            </a></div>
        </section>

        <!-- Order Info -->
        <section class="row order-info-wrap">
            <div class="col-sm-6 order-info">
                <h4>{{kyberOrderResult.output.amount}} {{kyberOrderResult.output.currency}}</h4>
                <p translate="SWAP_rec_amt">Amount to receive</p>
            </div>
            <div class="col-sm-6 order-info">
                <h4>{{swapOrder.swapRate}} {{swapOrder.swapPair}}</h4>
                <p translate="SWAP_your_rate">Your rate</p>
            </div>
        </section>


        <!-- Swap Progress -->
        <section class="row swap-progress">
            <div class="sep"></div>
            <div class="progress-item {{kyberOrderResult.progress.bar[0]}}">
                <div class="progress-circle"><i>1</i></div>
                <p translate="SWAP_progress_1">Order Initiated</p>
            </div>
            <div class="progress-item {{kyberOrderResult.progress.bar[1]}}">
                <div class="progress-circle"><i>2</i></div>
                <p><span translate="SWAP_progress_2">Waiting for your </span> {{kyberOrderResult.input.currency}}...</p>
            </div>
            <div class="progress-item {{kyberOrderResult.progress.bar[2]}}">
                <div class="progress-circle"><i>3</i></div>
                <p>{{kyberOrderResult.input.currency}} <span translate="SWAP_progress_3">Received!</span></p>
            </div>
            <div class="progress-item {{kyberOrderResult.progress.bar[3]}}">
                <div class="progress-circle"><i>4</i></div>
                <p>
                    <span translate="SWAP_progress_4">Sending your </span> {{kyberOrderResult.output.currency}} <br/>
                    <small ng-show="kyberOrderResult.input.currency=='ETH'"> Waiting for 10 confirmations...</small>
                    <small ng-show="kyberOrderResult.input.currency=='BTC'"> Waiting for 1 confirmation...</small>
                </p>
            </div>
            <div class="progress-item {{kyberOrderResult.progress.bar[4]}}">
                <div class="progress-circle"><i>5</i></div>
                <p translate="SWAP_progress_5">Order Complete</p>
            </div>
        </section>


        <!-- Swap CTA -->
        <section class="row text-center" ng-show="kyberOrderResult.progress.status=='OPEN'">
            <h1>
                <span
                    translate="SWAP_order_CTA">      Please send                                                 </span>
                <strong> {{kyberOrderResult.input.amount}} {{kyberOrderResult.input.currency}} </strong>
                <!--<span translate="SENDModal_Content_2"> to address                                                  </span><br/>-->
                <!--<strong class="mono text-primary"> {{kyberOrderResult.payment_address}} </strong>-->
            </h1>

        </section>

        <section class="row text-center" ng-show="kyberOrderResult.progress.status=='APPROVE_TOKENS'">
            <h1>
                <span>      You are about to Swap                                           </span>
                <!-- todo: add translate -->
                <strong> {{kyberOrderResult.input.amount}} {{kyberOrderResult.input.currency}} </strong>
                <!--<span translate="SENDModal_Content_2"> to address                                                  </span><br/>-->
                <!--<strong class="mono text-primary"> {{kyberOrderResult.payment_address}} </strong>-->
            </h1>
        </section>

        <!-- Swap CTA ETH -->
        <article class="row">

            <section class="clearfix collapse-container">
                <div class="text-center" ng-click="wd = !wd">
                    <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
                    <!--<h5 traslate="SWAP_unlock">Unlock your wallet to send ETH or Tokens directly from this page.</h5>-->
                    <h5 >Unlock your wallet to proceed.</h5>
                </div>
                <div ng-show="!wd">
                    @@if (site === 'mew' ) {
                    <wallet-decrypt-drtv></wallet-decrypt-drtv>
                    }
                    @@if (site === 'cx' ) {
                    <cx-wallet-decrypt-drtv></cx-wallet-decrypt-drtv>
                    }
                </div>
            </section>
            <div class="alert alert-danger" ng-show="ajaxReq.type!=='ETH' && ajaxReq.type!=='ROPSTEN ETH'">
                <strong>Warning! You are not connected to an ETH node.</strong> <br/>
                Please use the node switcher in the top-right corner to switch to an ETH node. We <strong>do
                not</strong> support swapping ETC or Testnet ETH.
            </div>

            <section class="row" ng-show="wallet!=null " ng-controller='sendTxCtrl'>
                <h5 class="row text-center">Wallet Unlocked!</h5>

                <section class="row text-center" ng-show="wallet!=null">
                    <a ng-click="openKyberOrder(wallet)" class="btn btn-primary btn-lg"><span translate="SWAP_start_CTA"> Start Swap </span></a>
                </section>

<!--                <section class="row text-center" ng-show="wallet!=null && kyberOrderResult.progress.status=='APPROVE_TOKENS'">
                    <a ng-click="approveTokenKyber(wallet)" class="btn btn-primary btn-lg"><span translate="SWAP_start_CTA"> Start Swap </span></a>
                </section>

                <section class="row text-center" ng-show="wallet!=null && kyberOrderResult.progress.status=='OPEN_ETH'">
                    <a ng-click="openKyberOrder(wallet)" class="btn btn-primary btn-lg"><span translate="SWAP_start_CTA"> Start Swap </span></a>
                </section>-->

                @@if (site === 'mew' ) { @@include( './sendTx-modal.tpl', { "site": "mew" } ) }
                <!--todo implement (custom swap modal) with content comming from swapCtrl -->
                @@if (site === 'cx' ) { @@include( './sendTx-modal.tpl', { "site": "cx" } ) }

                @@if (site === 'mew' ) { @@include( './swap-kyber-modal.tpl', { "site": "mew" } ) }
                <!--todo implement (custom swap modal) with content comming from swapCtrl -->
                @@if (site === 'cx' ) { @@include( './swap-kyber-modal.tpl', { "site": "cx" } ) }

            </section>
            <!--</div>-->
        </article>
        <!-- / Swap CTA ETH -->


    </article>

    <!-- / Swap Kyber 3-->

</article>