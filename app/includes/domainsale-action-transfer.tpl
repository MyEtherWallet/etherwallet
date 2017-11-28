<div ng-show="objDomainSale.status==domainsaleModes.nottransferred && wallet!=null">

  <article class="row">

    <!-- Content -->
    <section class="col-sm-8">
      <div class="block">
        <div ng-show="wallet.getAddressString()!=objDomainSale.deedOwner">

          <h2 translate="DOMAIN_offer_1">
            Incorrect Wallet
          </h2>
          <p>
            <span translate="DOMAIN_offer_2">
              The wallet you unlocked does not own this name.
            </span>
            <span translate="DOMAIN_offer_3">
              In order to offer this name, please unlock the wallet with address:
            </span>
            <strong>{{objDomainSale.seller}}</strong>.
          </p>

        </div>

        <div ng-show="wallet.getAddressString()==objDomainSale.deedOwner">
          <!-- Title owner -->
          <h2>
            Transfer {{objDomainSale.name}}.eth to DomainSale
          </h2>
          <!-- / Title owner -->

          <!-- Button CTA -->
          <div class="form-group">
            <a class="btn btn-primary btn-block" ng-click="generateTransferTx()" ng-hide="objDomainSale.txSent">
              <span>
                Transfer domain
              </span>
            </a>
          </div>
          <!-- / Button CTA -->
        </div>

      <!-- After Sent -->
      <div class="form-group" ng-show="objDomainSale.txSent">
        <h4 class="text-warning">
          Click your TX hash to see if you successfully transferred {{objDomainSale.name}}.eth to DomainSale.
        </h4>
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
