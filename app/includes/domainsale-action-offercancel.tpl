<div ng-show="objDomainSale.status==domainsaleModes.notoffered && wallet!=null && wallet.getAddressString()!=objDomainSale.seller">
  <article class="row">

    <!-- Content -->
    <section class="col-sm-8">
      <div class="block">
        <h2>Incorrect Wallet</h2>
        The wallet you unlocked does not own this name.  Please use the wallet with address <strong>{{objDomainSale.seller}}</strong> to offer this name for sale.
      </div>
    </section>
    <!-- /Content -->

    <!-- Sidebar -->
    <section class="col-sm-4">
      <wallet-balance-drtv></wallet-balance-drtv>
    </section>
    <!-- / Sidebar -->

  </article>
</div>

<div ng-show="(objDomainSale.status==domainsaleModes.notoffered || objDomainSale.status==domainsaleModes.available) && wallet!=null && wallet.getAddressString()==objDomainSale.seller">

  <article class="row">

    <!-- Content -->
    <section class="col-sm-8">
      <div class="block">
        <!-- Title (not offered) -->
        <div ng-show="objDomainSale.status==domainsaleModes.notoffered">
          <h2>Offer {{objDomainSale.name}}.eth for sale</h2>
          <p><em><small>Set either of both of the prices below to offer your domain for sale.  Remember that any funds you have locked in the domain's deed will go to the buyer and 10% of the funds when sold goes to referrers.</small></em></p>
        </div>
        <!-- / Title (not offered) -->

        <!-- Title (already offered) -->
        <div ng-show="objDomainSale.status==domainsaleModes.available">
          <h2>Alter {{objDomainSale.name}}.eth offer</h2>
          <p><em><small>Change either of both of the prices below to alter your domain sale offer.  Remember that any funds you have locked in the domain's deed will go to the buyer and 10% of the funds when sold goes to referrers.</small></em></p>
        </div>
        <!-- / Title  (already offered) -->

        <!-- Buy price -->
        <h5>Buy price</h5>
          <p><em><small>This is the price at which someone can buy the domain immediately.  0 means that the domain cannot be purchased immediately.</small></em></p>
        <div class="input-group">
          <input class="form-control" type="number" placeholder="1 {{ajaxReq.type}}" ng-model="objDomainSale.priceEth" ng-class="Validator.isPositiveNumber(objDomainSale.priceEth) ? 'is-valid' : 'is-invalid'" ng-change="syncPrice()"/>
          <div class="input-group-btn"><a class="btn btn-default">{{ajaxReq.type}}</a></div>
        </div>
        <!-- / Buy price -->

        <!-- Reserve price -->
        <h5>Reserve price</h5>
          <p><em><small>This is the price at which someone can start an auction for the domain.  0 means that the domain will not be available for auction.</small></em></p>
        <div class="input-group">
          <input class="form-control" type="number" placeholder="1 {{ajaxReq.type}}" ng-model="objDomainSale.reserveEth" ng-class="Validator.isPositiveNumber(objDomainSale.reserveEth) ? 'is-valid' : 'is-invalid'" ng-change="syncReserve()"/>
          <div class="input-group-btn"><a class="btn btn-default">{{ajaxReq.type}}</a></div>
        </div>
        <!-- / Buy price -->

        <!-- Button CTA -->
        <div class="form-group">
          <a class="btn btn-primary btn-block" ng-click="generateOfferTx()" ng-hide="objDomainSale.txSent">
            <span ng-show="objDomainSale.status==domainsaleModes.notoffered">Offer your domain</span>
            <span ng-show="objDomainSale.status==domainsaleModes.available">Alter your sale</span>
          </a>
        </div>
        <!-- / Button CTA -->
      </div>

      <div class="block">
        <h2>Cancel your sale</h2>
        <p><em><small>You can cancel your domain sale, which will return the domain to you with no charge.  This is only available before any bids have been received for the domain.</small></em></p>

        <!-- Button CTA -->
        <div class="form-group">
          <a class="btn btn-primary btn-block" ng-click="generateCancelTx()" ng-hide="objDomainSale.txSent">
            <span>Cancel your sale</span>
          </a>
        </div>
        <!-- / Button CTA -->
      </div>

      <!-- After Sent -->
      <div class="form-group well" ng-show="objDomainSale.txSent">
        @@if (site === 'mew' ) { @@include( './domainsale-confirm-table.tpl', { "site": "mew" } ) }
        @@if (site === 'cx'  ) { @@include( './domainsale-confirm-table.tpl', { "site": "cx"  } ) }
      </div>
      <!-- / After Sent -->

    </section>
    <!-- / Content -->

    <!-- Sidebar -->
    <section class="col-sm-4">
      <wallet-balance-drtv></wallet-balance-drtv>
    </section>
    <!-- / Sidebar -->

  </article>

</div>
