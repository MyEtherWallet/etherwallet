<article class="row text-center" ng-show="objDomainSale.status==-1 && objDomainSale.balance>=0">

  <br /><br />

  <div ng-show="objDomainSale.balance==0">
    <h1>{{objDomainSale.address}} has no balance</h1>
  </div>

  <div ng-show="objDomainSale.balance>0">
    <h1>{{objDomainSale.address}} has balance of <strong>{{objDomainSale.balanceEth}} {{ajaxReq.type}}</strong></h1>
  </div>

</article>
