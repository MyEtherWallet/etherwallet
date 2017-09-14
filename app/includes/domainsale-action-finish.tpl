<div ng-show="objDomainSale.status==domainsaleModes.closed && wallet!=null">

  <article class="row">

    <!-- Content -->
    <section class="col-sm-8">
      <div class="block">
        <div ng-show="wallet.getAddressString()==objDomainSale.deedOwner || wallet.getAddressString()==objDomainSale.lastBidder">
          <!-- Title -->
          <h2>Finish the auction</h2>
          The auction for <strong>{{objDomainSale.name}}.eth</strong> has closed.  Finish the auction to allocate the domain to the winner and the funds to the seller.
          <!-- / Title -->
        </div>

        <!-- Button CTA -->
        <div class="form-group">
          <a class="btn btn-primary btn-block" ng-click="generateFinishTx()" ng-hide="objDomainSale.txSent">
            <span> Finish the auction </span>
          </a>
        </div>
        <!-- / Button CTA -->

        <!-- After Sent -->
        <div class="form-group" ng-show="objDomainSale.txSent">
          <h4 class="text-warning">Click your TX hash to see if you successfully transferred {{objDomainSale.name}}.eth to DomainSale.</h4>
        </div>
        <!-- / After Sent -->

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
