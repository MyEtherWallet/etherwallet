<div ng-show="objDomainSale.status==domainsaleModes.notoffered && wallet!=null && wallet.getAddressString()!=objDomainSale.seller">
  <article class="row">

    <!-- Content -->
    <section class="col-sm-8">
      <div class="block">

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
          <h2>
            <span translate="DOMAIN_offer_4">
              Offer For Sale:
            </span>
            {{objDomainSale.name}}.eth
          </h2>
          <p><em>
            <small translate="DOMAIN_offer_5">
              Set either of both of the prices below to offer your domain for sale.  Remember that any funds you have locked in the domain's deed will go to the buyer and 10% of the funds when sold goes to referrers.
            </small>
          </em></p>
        </div>
        <!-- / Title (not offered) -->

        <!-- Title (already offered) -->
        <div ng-show="objDomainSale.status==domainsaleModes.available">
          <h2>
            <span translate="DOMAIN_offer_7">
              Alter Your Offer for:
            </span>
            {{objDomainSale.name}}.eth
          </h2>
          <p><em>
            <small translate="DOMAIN_offer_8">
              Change either of both of the prices below to alter your domain sale offer.  Remember that any funds you have locked in the domain's deed will go to the buyer and 10% of the funds when sold goes to referrers.
            </small>
          </em></p>
        </div>
        <!-- / Title  (already offered) -->

        <!-- Buy price -->
        <h5 translate="DOMAIN_offer_9">
          Buy price
        </h5>
        <p><em>
          <small translate="DOMAIN_offer_10">
            This is the price at which someone can buy the domain immediately.
            0 means that the domain cannot be purchased immediately.
          </small>
        </em></p>
        <div class="input-group">
          <input class="form-control"
                 type="number"
                 placeholder="1 {{ajaxReq.type}}"
                 ng-model="objDomainSale.priceEth"
                 ng-class="Validator.isPositiveNumber(objDomainSale.priceEth) ? 'is-valid' : 'is-invalid'"
                 ng-change="syncPrice()"/>
          <div class="input-group-btn">
            <a class="btn btn-default">{{ajaxReq.type}}</a>
          </div>
        </div>
        <!-- / Buy price -->

        <!-- Reserve price -->
        <h5>Reserve price</h5>
          <p><em>
            <small translate="DOMAIN_offer_11">
              This is the price at which someone can start an auction for the domain.  0 means that the domain will not be available for auction.
            </small>
          </em></p>
        <div class="input-group">
          <input class="form-control"
                 type="number"
                 placeholder="1 {{ajaxReq.type}}"
                 ng-model="objDomainSale.reserveEth"
                 ng-class="Validator.isPositiveNumber(objDomainSale.reserveEth) ? 'is-valid' : 'is-invalid'"
                 ng-change="syncReserve()"/>
          <div class="input-group-btn">
            <a class="btn btn-default">{{ajaxReq.type}}</a>
          </div>
        </div>
        <!-- / Buy price -->

        <!-- Button CTA -->
        <div class="form-group">
          <a class="btn btn-primary btn-block" ng-click="generateOfferTx()" ng-hide="objDomainSale.txSent">
            <span ng-show="objDomainSale.status==domainsaleModes.notoffered" translate="DOMAIN_offer_12">
              Offer your domain
            </span>
            <span ng-show="objDomainSale.status==domainsaleModes.available" translate="DOMAIN_offer_13">
              Alter your sale
            </span>
          </a>
        </div>
        <!-- / Button CTA -->
      </div>

      <div class="block">
        <h2 translate="DOMAIN_offer_14">
          Cancel your sale
        </h2>
        <p><em>
          <small translate="DOMAIN_offer_15">
            You can cancel your domain sale, which will return the domain to you with no charge.  This is only available before any bids have been received for the domain.
          </small>
        </em></p>

        <!-- Button CTA -->
        <div class="form-group">
          <a class="btn btn-primary btn-block" ng-click="generateCancelTx()" ng-hide="objDomainSale.txSent">
            <span translate="DOMAIN_offer_14">
              Cancel your sale
            </span>
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
