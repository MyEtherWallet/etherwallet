<article class="row text-center" ng-show="objENS.status==ensModes.owned">

  <br /><br />

  <h1><strong>{{objENS.name}}.eth</strong> is already owned:</h1>

  <div class="form-group col-sm-10 col-sm-offset-1" ng-hide="wd">
    @@if (site === 'mew' ) { @@include( './ens-resolve-information.tpl', { "site": "mew" } ) }
    @@if (site === 'cx'  ) { @@include( './ens-resolve-information.tpl', { "site": "cx"  } ) }
  </div>

</article>


