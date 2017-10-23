<article class="row text-center" ng-show="objDomainSale.status==domainsaleModes.auctioning">

  <br /><br />

<div>
  <h1><strong>{{objDomainSale.name}}.eth</strong> is being auctioned.</h1>

  The current bid for this domain is <strong>{{objDomainSale.lastBidEth}} {{ajaxReq.type}}</strong>.  It was placed by <strong>{{objDomainSale.lastBidder}}</strong>.

  <section class="order-info-wrap row">
    <div class="col-sm-12 col-xs-12 order-info">
      <p>  Auction finishes if no further bids received by </p>
      <h4> {{objDomainSale.auctionEnds.toString()}} </h4>
      <p>  {{objDomainSale.timeRemaining}}  </p>
    </div>

</article>
