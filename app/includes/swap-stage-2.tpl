<!-- Swap Start 2 -->
<article class="swap-start" ng-show="showStage2">


  <!-- Title -->
  <section class="row">
    <h5 class="col-xs-6 col-xs-offset-3" translate="SWAP_information">Your Information</h5>
    <div class="col-xs-3"><a class="link" href="https://bity.com/af/jshkb37v" target="_blank" rel="noopener noreferrer">
      <img class="pull-right" src="images/logo-bity.svg" width="100" height="38" />
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
        <label><span translate="SWAP_rec_add">Your Receiving Address</span> <strong>({{swapOrder.toCoin}})</strong></label>
        <div class="form-group" ng-show="swapOrder.toCoin!='BTC'">
          <address-field placeholder="0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D" var-name="swapOrder.toAddress"></address-field>
        </div>
        <input class="form-control"
                ng-show="swapOrder.toCoin=='BTC'"
                type="text"
                placeholder="1DECAF2uSpFTP4L1fAHR8GCLrPqdwdLse9"
                ng-model="swapOrder.toAddress"
                ng-class="Validator.isValidBTCAddress(swapOrder.toAddress) ? 'is-valid' : 'is-invalid'"/>
      </div>
    </section>
    <!-- /Your Address -->
    <!-- CTA -->
    <section class="row text-center">
      <a ng-click="openOrder()" class="btn btn-primary btn-lg"><span translate="SWAP_start_CTA"> Start Swap </span></a>
    </section>
    <!-- / CTA -->
  </section>


</article>
<!-- / Swap Start 2 -->

