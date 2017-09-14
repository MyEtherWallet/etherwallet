<div ng-show="objDomainSale.status==domainsaleModes.nottransferred && wallet!=null">

  <article class="row">

    <!-- Content -->
    <section class="col-sm-8">
      <div class="block">
      <!-- Title -->
      <h2>Transfer domain to DomainSale</h2>
      <!-- / Title -->

      <!-- Button CTA -->
      <div class="form-group">
        <a class="btn btn-primary btn-block" ng-click="generateTransferTx()" ng-hide="objDomainSale.txSent">
          <span> Transfer domain </span>
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
