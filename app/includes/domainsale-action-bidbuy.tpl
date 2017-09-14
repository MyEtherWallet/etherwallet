<div ng-show="(objDomainSale.status==domainsaleModes.available || objDomainSale.status==domainsaleModes.auctioning) && wallet!=null && wallet.getAddressString()!=objDomainSale.seller">

  <article class="row">

    <!-- Content -->
    <section class="col-sm-8">

      <!-- Buy -->
      <div ng-show="objDomainSale.status==domainsaleModes.available && objDomainSale.price!=0" class="block">
        <div>
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
      </div>
      <!-- / Buy -->


      <!-- Bid -->
      <div ng-show="objDomainSale.reserve!=0" class="block">
        <div>
          <!-- Title -->
          <h2>Bid for the domain</h2>
          <div ng-show="objDomainSale.lastBidder==wallet.getAddressString()">
            <hr/>
            <strong>You are currently winning this auction with the highest bid.  You can bid higher fi you want, but it will delay the close of the auction for 24 hours.</strong>
            <hr/>
          </div>

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
      </div>
      <!-- / Bid -->

      <!-- After Sent -->
      <div class="form-group well">
        Note that the domain has a locked value of {{objDomainSale.valueEth}} {{ajaxReq.type}}.  As part of the sale you will receive the deed with this value but cannot claim it unless you release the name.
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
