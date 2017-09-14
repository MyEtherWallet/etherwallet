<div ng-show="objDomainSale.status==domainsaleModes.notoffered && wallet!=null">

  <article class="row">

    <!-- Content -->
    <section class="col-sm-8">
      <div class="block">
      <!-- Title -->
      <h2>Offer your domain</h2>
      <p><em><small>Set either of both of the prices below to offer your domain for sale.  Remember that 10% of the funds when sold goes to referrers.</small></em></p>
      <!-- / Title -->

      <!-- Name -->
      <label>Name</label>
      <div class="input-group">
        <input class="form-control" type="text" placeholder="myetherwallet" readonly ng-model="objDomainSale.name"/>
        <div class="input-group-btn"><a class="btn btn-default">.eth</a></div>
      </div>
      <!-- / Name -->

      <!-- Buy price -->
      <h5>Buy price</h5>
        <p><em><small>This is the price at which someone can buy the domain immediately.</small></em></p>
      <div class="input-group">
        <input class="form-control" type="number" placeholder="1 {{ajaxReq.type}}" ng-model="objDomainSale.priceEth" ng-class="Validator.isPositiveNumber(objDomainSale.priceEth) ? 'is-valid' : 'is-invalid'" ng-change="syncPrice()"/>
        <div class="input-group-btn"><a class="btn btn-default">{{ajaxReq.type}}</a></div>
      </div>
      <!-- / Buy price -->

      <!-- Reserve price -->
      <h5>Reserve price</h5>
        <p><em><small>This is the price at which someone can start an auction for the domain.</small></em></p>
      <div class="input-group">
        <input class="form-control" type="number" placeholder="1 {{ajaxReq.type}}" ng-model="objDomainSale.reserveEth" ng-class="Validator.isPositiveNumber(objDomainSale.reserveEth) ? 'is-valid' : 'is-invalid'" ng-change="syncReserve()"/>
        <div class="input-group-btn"><a class="btn btn-default">{{ajaxReq.type}}</a></div>
      </div>
      <!-- / Buy price -->

      <!-- Button CTA -->
      <div class="form-group">
        <a class="btn btn-primary btn-block" ng-click="generateOfferTx()" ng-hide="objDomainSale.txSent">
          <span>Offer your domain</span>
        </a>
      </div>
      <!-- / Button CTA -->

      <!-- After Sent -->
      <div class="form-group well" ng-show="objDomainSale.txSent">
        @@if (site === 'mew' ) { @@include( './domainsale-confirm-table.tpl', { "site": "mew" } ) }
        @@if (site === 'cx'  ) { @@include( './domainsale-confirm-table.tpl', { "site": "cx"  } ) }
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
