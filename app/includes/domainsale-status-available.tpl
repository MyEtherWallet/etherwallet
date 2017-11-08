<article class="row text-center" ng-show="objDomainSale.status==domainsaleModes.available">

  <br /><br />

<div ng-show="objDomainSale.price==0 && objDomainSale.reserve>0">
  <h1><strong>{{objDomainSale.name}}.eth</strong> is available for auction.</h1>

  <span ng-show="wallet==null||wallet.getAddressString()!=objDomainSale.seller">You can open an auction on this domain by bidding at least <strong>{{objDomainSale.reserveEth}} {{ajaxReq.type}}</strong>.  The auction will remain open until 24 hours have passed without receiving any bids, at which point it will close and the winner can claim the name.</span>
</div>

<div ng-show="objDomainSale.price>0 && objDomainSale.reserve==0">
  <h1><strong>{{objDomainSale.name}}.eth</strong> is available for purchase.</h1>

  <span ng-show="wallet==null||wallet.getAddressString()!=objDomainSale.seller">You can buy this domain by paying <strong>{{objDomainSale.priceEth}} {{ajaxReq.type}}</strong>.  You will own the domain immediately.</span>
</div>

<div ng-show="objDomainSale.price>0 && objDomainSale.reserve>0">
  <h1><strong>{{objDomainSale.name}}.eth</strong> is available for purchase or auction.</h1>

  <span ng-show="wallet==null||wallet.getAddressString()!=objDomainSale.seller">You can buy this domain by paying <strong>{{objDomainSale.priceEth}} {{ajaxReq.type}}</strong>.  You will own the domain immediately.  Alternatively you can open an auction on this domain by bidding at least <strong>{{objDomainSale.reserveEth}} {{ajaxReq.type}}</strong>.  The auction will remain open until 24 hours have passed without receiving any bids, at which point it will close and the winner can claim the name.</span>
</div>

</article>
