<div ng-show="objDomainSale.status==domainsaleModes.closed && wallet!=null">

  <article class="row">

    <!-- Content -->
    <section class="col-sm-8">
      <div class="block">
        <div ng-show="wallet.getAddressString()!=objDomainSale.seller && wallet.getAddressString()!=objDomainSale.lastBidder">
          <!-- Title -->
          <h2 translate="DOMAIN_Finish_1">
            Not related to that auction
          </h2>
          <p translate="DOMAIN_Finish_2">
            This address is neither the winner nor the seller of the auction.
          </p>
          <!-- / Title -->
        </div>

        <div ng-show="wallet.getAddressString()==objDomainSale.seller || wallet.getAddressString()==objDomainSale.lastBidder">
          <div>
            <!-- Title -->
            <h2 translate="DOMAIN_Finish_3">
              Finish the auction
            </h2>
            <p translate="DOMAIN_Finish_4">
              Finish the auction to allocate the domain to the winner and the funds to the seller.
            </p>
            <!-- / Title -->
          </div>

          <!-- Button CTA -->
          <div class="form-group">
          <a class="btn btn-primary btn-block" ng-click="generateFinishTx()" ng-hide="objDomainSale.txSent">
              <span translate="DOMAIN_Finish_3">
                Finish the auction
              </span>
            </a>
          </div>
          <!-- / Button CTA -->

          <!-- After Sent -->
          <div class="form-group" ng-show="objDomainSale.txSent">
            <h4 class="text-warning">
              <span translate="DOMAIN_Finish_5">
                Click your TX hash to see if you successfully transferred the domain to DomainSale.
              </span>
              ({{objDomainSale.name}}.eth)
            </h4>
          </div>
          <!-- / After Sent -->
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
