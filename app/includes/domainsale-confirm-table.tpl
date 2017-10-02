<table class="table table-striped table-domainsale-modal">
  <tbody>
    <tr ng-show="objDomainSale.tx!=domainsaleTransactions.withdraw">
      <td>Name</td><td>{{objDomainSale.name}}.eth</td>
    </tr>
    <tr ng-show="objDomainSale.tx==domainsaleTransactions.offer && objDomainSale.priceEth!=0">
      <td>Purchase price</td><td>{{objDomainSale.priceEth}} {{ajaxReq.type}}</td>
    </tr>
    <tr ng-show="objDomainSale.tx==domainsaleTransactions.offer && objDomainSale.reserveEth!=0">
      <td>Minimum bid</td><td>{{objDomainSale.reserveEth}} {{ajaxReq.type}}</td>
    </tr>
    <tr ng-show="objDomainSale.tx==domainsaleTransactions.buy">
      <td>Buy amount</td><td>{{objDomainSale.buyEth}} {{ajaxReq.type}}</td>
    </tr>
    <tr ng-show="objDomainSale.tx==domainsaleTransactions.bid">
      <td>Bid amount</td><td>{{objDomainSale.bidEth}} {{ajaxReq.type}}</td>
    </tr>
  </tbody>
</table>
