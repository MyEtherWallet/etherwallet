<article class="block" ng-hide="hideDomainSaleInfoPanel">

  <div class="cont-md">

    <h4> How can I sell a domain? </h4>
      <h6 ng-click="domainsaleSellTransfer = !domainsaleSellTransfer">
        <span ng-show="!domainsaleSellTransfer">+</span><span ng-show="domainsaleSellTransfer">-</span>
        1. Transfer the domain to DomainSale
      </h6>
      <ul ng-show="domainsaleSellTransfer">
        <li> Before you sell a domain it must be transferred to DomainSale.  This ensures that you own the domain and are eligible to sell it. </li>
      </ul>

      <h6 ng-click="domainsaleSellOffer = !domainsaleSellOffer">
        <span ng-show="!domainsaleSellOffer">+</span><span ng-show="domainsaleSellOffer">-</span>
        2. Set immediate and/or auction prices
      </h6>
      <ul ng-show="domainsaleSellOffer">
        <li> Decide if you want to make your domain available for immediate purchase, auction, or both. </li>
          <ul>
            <li> If you want to make your domain available for immediate purchase you need to pick the price for which you will sell it. </li>
            <li> If you want to make your domain available for auction you need to pick the price for which the initial bid will be made. </li>
          </ul>
        <li> Please remember that 10% of the final sale fee will be given to referrers, and price accordingly. </li>
      </ul>

      <h6 ng-click="domainsaleSellFinish = !domainsaleSellFinish">
        <span ng-show="!domainsaleSellFinish">+</span><span ng-show="domainsaleSellFinish">-</span>
        3. Finish the auction (if applicable)
      </h6>
      <ul ng-show="domainsaleSellFinish">
        <li> If your domain was sold at auction then once the auction has closed you (or the buyer) need to finish the auction.  This transfers the funds to you and the domain to the buyer.
      </ul>

    <h4> How can I buy a domain? </h4>

    <h4> General </h4>
      <h6 ng-click="domainsaleMore = !domainsaleMore">
        <span ng-show="!domainsaleMore">+</span><span ng-show="domainsaleMore">-</span>
        More Information
      </h6>
      <ul ng-show="domainsaleMore">
         <li> Details on the DomainSale process for both buyers and sellers are available in <a href="https://medium.com/@jgm.orinoco/domainsale-an-on-chain-secondary-ens-market-b3330f6e5dda" target="_blank" rel="noopener">the introductory post</a>.</li>
         <li> The <a href="https://github.com/wealdtech/domainsale/" target="_blank" rel="noopener">DomainSale contract</a> is open source and freely available.</li>

  </div>

</article>
