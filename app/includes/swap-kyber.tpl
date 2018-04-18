<!-- Swap Start Kyber 2 -->
<article ng-if="isKyberSwap">
    <!--{{showStage2Kyber}}-->
    <!--{{showStage3Kyber}}-->
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
                    <!-- todo remove dev item -->
                    <!--<div class="form-group" ng-show="swapOrder.toCoin!='BTC'">-->
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
        <div>KYBER</div>

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
            <!--            <div class="col-sm-3 order-info">
                            <h4>{{orderResult.reference}}</h4>
                            <p translate="SWAP_ref_num">Your reference number</p>
                        </div>
                        <div class="col-sm-3 order-info">
                            <h4>{{orderResult.progress.timeRemaining}}</h4>
                            <p ng-show="orderResult.progress.showTimeRem" translate="SWAP_time">Time remaining to send</p>
                            <p translate="SWAP_elapsed" ng-show="!orderResult.progress.showTimeRem">Time elapsed since sent</p>
                        </div>-->
            <div class="col-sm-6 order-info">
                <h4>{{orderResult.output.amount}} {{orderResult.output.currency}}</h4>
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
            <div class="progress-item {{orderResult.progress.bar[0]}}">
                <div class="progress-circle"><i>1</i></div>
                <p translate="SWAP_progress_1">Order Initiated</p>
            </div>
            <div class="progress-item {{orderResult.progress.bar[1]}}">
                <div class="progress-circle"><i>2</i></div>
                <p><span translate="SWAP_progress_2">Waiting for your </span> {{orderResult.input.currency}}...</p>
            </div>
            <div class="progress-item {{orderResult.progress.bar[2]}}">
                <div class="progress-circle"><i>3</i></div>
                <p>{{orderResult.input.currency}} <span translate="SWAP_progress_3">Received!</span></p>
            </div>
            <div class="progress-item {{orderResult.progress.bar[3]}}">
                <div class="progress-circle"><i>4</i></div>
                <p>
                    <span translate="SWAP_progress_4">Sending your </span> {{orderResult.output.currency}} <br/>
                    <small ng-show="orderResult.input.currency=='ETH'"> Waiting for 10 confirmations...</small>
                    <small ng-show="orderResult.input.currency=='BTC'"> Waiting for 1 confirmation...</small>
                </p>
            </div>
            <div class="progress-item {{orderResult.progress.bar[4]}}">
                <div class="progress-circle"><i>5</i></div>
                <p translate="SWAP_progress_5">Order Complete</p>
            </div>
        </section>


        <!-- Swap CTA -->
        <section class="row text-center" ng-show="orderResult.progress.status=='OPEN'">
            <h1>
                <span
                    translate="SWAP_order_CTA">      Please send                                                 </span>
                <strong> {{orderResult.input.amount}} {{orderResult.input.currency}} </strong>
                <!--<span translate="SENDModal_Content_2"> to address                                                  </span><br/>-->
                <!--<strong class="mono text-primary"> {{orderResult.payment_address}} </strong>-->
            </h1>
        </section>

        <section class="row text-center" ng-show="orderResult.progress.status=='APPROVE_TOKENS'">
            <h1>
                <span>      Please Approve Tokens to Swap                                           </span>
                <!-- todo: add translate -->
                <strong> {{orderResult.input.amount}} {{orderResult.input.currency}} </strong>
                <!--<span translate="SENDModal_Content_2"> to address                                                  </span><br/>-->
                <!--<strong class="mono text-primary"> {{orderResult.payment_address}} </strong>-->
            </h1>
        </section>

        {{orderResult.progress.status}}
        <!-- Swap CTA ETH -->
        <article class="row">

            <section class="clearfix collapse-container">
                <div class="text-center" ng-click="wd = !wd">
                    <a class="collapse-button"><span ng-show="wd">+</span><span ng-show="!wd">-</span></a>
                    <h5 traslate="SWAP_unlock">Unlock your wallet to send ETH or Tokens directly from this page.</h5>
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

            <!--            <div class="alert alert-danger" ng-show="ajaxReq.type!=='ETH'">
                            <strong>Warning! You are not connected to an ETH node.</strong> <br/>
                            Please use the node switcher in the top-right corner to switch to an ETH node. We <strong>do
                            not</strong> support swapping ETC or Testnet ETH.
                        </div>-->


            <!--<-->
            <section class="row" ng-show="wallet!=null " ng-controller='sendTxCtrl'>
<!--                                <div ng-show=" orderResult.progress.status=='APPROVE_TOKENS'">
                                    <button ng-click="approveTokenKyber(wallet)">AUTHORIZE TOKENS FOR SWAP</button>&lt;!&ndash; todo: add translate &ndash;&gt;
                                </div>-->
                <div ng-show=" orderResult.progress.status=='APPROVE_TOKENS'">
                    <button ng-click="approveTokenKyber(wallet)">AUTHORIZE TOKENS FOR SWAP</button>
                    <!-- todo: add translate --><!-- This function begins the entire sequence. prior to this nothing beyond the entered information and wallet have been added/created -->
                </div>

                <!--<button ng-click="checkForTokenApproveKyber(wallet.getAddressString())">AUTHORIZE TOKENS FOR SWAP</button>-->
<!--                <div
                    ng-show="wallet!=null && (orderResult.progress.status=='OPEN_ETH' || orderResult.progress.status=='TOKENS_APPROVED')">
                    <button ng-click="sendKyberModal()">DO SWAP</button>&lt;!&ndash; todo: add translate &ndash;&gt;
                </div>-->

                <div
                        ng-show="wallet!=null && orderResult.progress.status=='OPEN_ETH'">
                    <button ng-click="openKyberEthOrder()">DO SWAP</button><!-- todo: add translate -->
                    <!--<button ng-click="openKyberOrder()">DO SWAP</button>-->

                </div>

                <!--openKyberEthOrder-->
                <!--@@if (site === 'mew' ) { @@include( './sendTx-content.tpl', { "site": "mew" } ) }-->
                <!--@@if (site === 'cx' ) { @@include( './sendTx-content.tpl', { "site": "cx" } ) }-->

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