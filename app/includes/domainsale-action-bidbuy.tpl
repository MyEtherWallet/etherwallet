<div ng-show="(objDomainSale.status==domainsaleModes.available || objDomainSale.status==domainsaleModes.auctioning) && wallet!=null && wallet.getAddressString()!=objDomainSale.seller">

  <article class="row">

    <!-- Content -->
    <section class="col-sm-8">

      <!-- Buy -->
      <div ng-show="objDomainSale.status==domainsaleModes.available && objDomainSale.price!=0" class="block">

          <!-- Title -->
          <h2 translate="DOMAIN_Buy">
            Buy the domain
          </h2>
          <span translate="DOMAIN_BuyItNow">
            Price to buy the domain immediately:
          </span>
          <strong>
            {{objDomainSale.priceEth}} {{ajaxReq.type}}.
          </strong>
          <!-- / Title -->

          <!-- Button CTA -->
          <div class="form-group">
            <a class="btn btn-primary btn-block" ng-click="generateBuyTx()" ng-hide="objDomainSale.txSent">
              <span translate="DOMAIN_Buy">
                Buy the domain
              </span>
            </a>
          </div>
          <!-- / Button CTA -->

      </div>
      <!-- / Buy -->


      <!-- Bid -->
      <div ng-show="objDomainSale.reserve!=0" class="block">
        <!-- Title -->
        <h2 translate="DOMAIN_bid">
          Bid for the domain
        </h2>
        <div ng-show="objDomainSale.lastBidder==wallet.getAddressString()">
          <hr/>
          <strong translate="DOMAIN_bid_0">
            You are currently winning this auction with the highest bid. You can bid higher if you want, but it will delay the close of the auction for 24 hours.
          </strong>
          <hr/>
        </div>

        <span translate="DOMAIN_bid_1">
          Bid at least
        </span>
        <strong>
          {{objDomainSale.minimumBidEth}} {{ajaxReq.type}}
        </strong>
        <span translate="DOMAIN_bid_2">
          on the domain.
        </span>
        <span translate="DOMAIN_bid_3">
          You will win the domain if no higher bids are placed within the next 24 hours.
        </span>
        <!-- / Title -->

        <!-- Bid price -->
        <div class="input-group">
          <input class="form-control"
                 type="number"
                 placeholder="1 {{ajaxReq.type}}"
                 ng-model="objDomainSale.bidEth"
                 ng-class="Validator.isPositiveNumber(objDomainSale.bidEth) ? 'is-valid' : 'is-invalid'"
                 ng-change="syncBid()"/>
          <div class="input-group-btn">
            <a class="btn btn-default">
              {{ajaxReq.type}}
            </a>
          </div>
        </div>
        <!-- / Bid price -->

        <!-- Button CTA -->
        <div class="form-group">
          <a class="btn btn-primary btn-block" ng-click="generateBidTx()" ng-hide="objDomainSale.txSent">
            <span translate="DOMAIN_bid">
              Bid for the domain
            </span>
          </a>
        </div>
        <!-- / Button CTA -->
      </div>
      <!-- / Bid -->

      <!-- After Sent -->
      <div class="form-group well">
        <span translate="DOMAIN_bid_4">
          Note that the domain has a locked value of
        </span>
        {{objDomainSale.valueEth}} {{ajaxReq.type}}.
        <span translate="DOMAIN_bid_5">
          As part of the sale you will receive the deed with this value but cannot claim it unless you release the name.
        </span>
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
