<!-- ALL: DOMAINSALE MODAL -->
<article class="modal fade" id="domainsaleConfirmModal" tabindex="-1">
  <section class="modal-dialog">
    <section class="modal-content">

      <div class="modal-body">

        <button type="button" class="close" data-dismiss="modal" aria-label="Close Dialog">&times;</button>

        <h2 class="modal-title">
          You are about to
          <span ng-show="objDomainSale.tx==domainsaleTransactions.transfer"> transfer a domain to DomainSale</span>
          <span ng-show="objDomainSale.tx==domainsaleTransactions.offer && objDomainSale.priceEth!=0 && objDomainSale.reserveEth==0"> set the price for a domain</span>
          <span ng-show="objDomainSale.tx==domainsaleTransactions.offer && objDomainSale.priceEth==0 && objDomainSale.reserveEth!=0"> set the reserve auction price for a domain</span>
          <span ng-show="objDomainSale.tx==domainsaleTransactions.offer && objDomainSale.priceEth!=0 && objDomainSale.reserveEth!=0"> set the price and reserve auction price for a domain</span>
          <span ng-show="objDomainSale.tx==domainsaleTransactions.buy"> buy a domain</span>
          <span ng-show="objDomainSale.tx==domainsaleTransactions.bid"> bid on a domain</span>
          <span ng-show="objDomainSale.tx==domainsaleTransactions.cancel"> cancel a domain sale</span>
          <span ng-show="objDomainSale.tx==domainsaleTransactions.finish"> finish a domain sale</span>
          <span ng-show="objDomainSale.tx==domainsaleTransactions.withdraw"> withdraw funds from DomainSale to your account</span>
        </h2>

        <table ng-show="objDomainSale.tx==domainsaleTransactions.buy || objDomainSale.tx==domainsaleTransactions.bid" class="table">
          <tbody>
            <tr class="text-center">
              <td><div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet.getAddressString()"></div></td>
              <td class="mono">-&gt;<br />{{tx.value}} {{unitReadable}}</td>
              <td><div class="addressIdenticon med" title="Address Indenticon" blockie-address="{{tx.to}}" watch-var="tx.to"></div></td>
            </tr>
          </tbody>
        </table>

        @@if (site === 'mew' ) { @@include( './domainsale-confirm-table.tpl', { "site": "mew" } ) }
        @@if (site === 'cx'  ) { @@include( './domainsale-confirm-table.tpl', { "site": "cx"  } ) }

        <p> The <strong>{{ajaxReq.type}}</strong> node you are sending through is provided by <strong>{{ajaxReq.service}}</strong>.</p>

        <h4 translate="SENDModal_Content_3"> Are you sure you want to do this? </h4>

      </div>

      <div class="modal-footer">
        <button class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">
          No, get me out of here!
        </button>
        <button class="btn btn-primary" ng-click="sendTx()" translate="SENDModal_Yes">
          Yes, I am sure! Make transaction.
        </button>
      </div>

    </section>
  </section>
</article>
<!-- ALL: DOMAINSALE MODAL -->

