<div ng-show="objDomainSale.balance>0 && wallet!=null">

  <article class="row">

    <!-- Content -->
    <section class="col-sm-8">
      <div class="block">
        <div ng-show="wallet.getAddressString().toLower()==objDomainSale.address.toLower()">
          <div>
            <!-- Title -->
            <h2>Withdraw funds</h2>
            Withdraw <strong>{{objDomainSale.balanceEth}} {{ajaxReq.type}}</strong> funds for <strong>{{wallet.getAddressString()}}</strong>
            <!-- / Title -->
          </div>

          <!-- Button CTA -->
          <div class="form-group">
          <a class="btn btn-primary btn-block" ng-click="generateWithdrawTx()" ng-hide="objDomainSale.txSent">
              <span> Withdraw funds </span>
            </a>
          </div>
          <!-- / Button CTA -->

          <!-- After Sent -->
          <div class="form-group" ng-show="objDomainSale.txSent">
            <h4 class="text-warning">Click your TX hash to see if you successfully withdrew funds from DomainSale.</h4>
          </div>
          <!-- / After Sent -->
        </div>

        <div ng-show="wallet.getAddressString().toLower()!=objDomainSale.address.toLower()">
          <div>
            <!-- Title -->
            <h2>Wallet mismatch</h2>
            The wallet you unlocked is for address <strong>{{wallet.getAddressString()}}</strong>. Please unlock the correct wallet to proceed.
            <!-- / Title -->
          </div>
        </div>
      </div>
    </section>
    <!-- / Content -->

    <!-- Sidebar -->
    <section class="col-sm-4">
      <wallet-balance-drtv></wallet-balance-drtv>
    </section>
    <!-- / Sidebar -->


  </article>

</div>
