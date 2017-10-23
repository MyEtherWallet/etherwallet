<article class="row text-center" ng-show="objENS.status==ensModes.owned">

  <br /><br />

  <h1><strong>{{objENS.name}}.eth</strong>
    <span ng-show="objDomainSale.sale.reserve==0 && objDomainSale.sale.price==0">is already owned:</span>
    <span ng-show="objDomainSale.sale.reserve!=0 || objDomainSale.sale.price!=0">can be purchased through DomainSale</span>
  </h1>

  <div class="form-group col-sm-10 col-sm-offset-1" ng-hide="wd">
    @@if (site === 'mew' ) { @@include( './ens-resolve-information.tpl', { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( './ens-resolve-information.tpl', { "site": "cx"  } ) }
  </div>

</article>


