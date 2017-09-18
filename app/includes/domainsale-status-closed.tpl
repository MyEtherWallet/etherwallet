<article class="row text-center" ng-show="objDomainSale.status==domainsaleModes.closed">

  <br /><br />

  <h1><strong>{{objDomainSale.name}}.eth</strong> auction finished</h1>

  The auction for this domain was won by <strong>{{objDomainSale.lastBidder}}</strong> with a bid of <strong>{{objDomainSale.lastBidEth}} {{ajaxReq.type}}</strong>.

</article>
