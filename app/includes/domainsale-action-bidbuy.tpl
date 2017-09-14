<div ng-show="(objDomainSale.status==domainsaleModes.available || objDomainSale.status==domainsaleModes.bidding) && wallet!=null">

  <article class="row">

    <!-- Content -->
    <section class="col-sm-8">
      <!-- Buy -->
      <div ng-show="objDomainSale.status==domainsaleModes.available && objDomainSale.price!=0" class="block">
        <!-- Title -->
        <h2>Buy the domain</h2>
        Spend <strong>{{objDomainSale.priceEth}} {{ajaxReq.type}}</strong> to own the domain immediately.
        <!-- / Title -->

        <!-- Button CTA -->
        <div class="form-group">
          <a class="btn btn-primary btn-block" ng-click="generateBuyTx()" ng-hide="objDomainSale.txSent">
            <span>Buy the domain</span>
          </a>
        </div>
        <!-- / Button CTA -->
      </div>
      <!-- / Buy -->


      <!-- Bid -->
      <div ng-show="objDomainSale.reserve!=0" class="block">
        <!-- Title -->
        <h2>Bid for the domain</h2>
        Bid at least <strong>{{objDomainSale.minimumBidEth}} {{ajaxReq.type}}</strong> for the domain.  You will win the domain if no higher bids are placed within the next 24 hours.
        <!-- / Title -->

        <!-- Bid price -->
        <div class="input-group">
          <input class="form-control" type="number" placeholder="1 {{ajaxReq.type}}" ng-model="objDomainSale.bidEth" ng-class="Validator.isPositiveNumber(objDomainSale.bidEth) ? 'is-valid' : 'is-invalid'" ng-change="syncBid()"/>
          <div class="input-group-btn"><a class="btn btn-default">{{ajaxReq.type}}</a></div>
        </div>
        <!-- / Bid price -->

        <!-- Button CTA -->
        <div class="form-group">
          <a class="btn btn-primary btn-block" ng-click="generateBidTx()" ng-hide="objDomainSale.txSent">
            <span>Bid for the domain</span>
          </a>
        </div>
        <!-- / Button CTA -->
      </div>
      <!-- / Bid -->

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
