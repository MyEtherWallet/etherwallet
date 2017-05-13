<article class="col-xs-12 col-sm-8 col-sm-offset-2 text-center" ng-show="objENS.status==ensModes.owned && wd">


  <button class="btn btn-primary" ng-click="resolveDomain()"> Resolve {{objENS.name}}.eth </button>

</article>

@@if (site === 'mew' ) { @@include( './ens-modal-resolve.tpl', { "site": "mew" } ) }
@@if (site === 'cx'  ) { @@include( './ens-modal-resolve.tpl', { "site": "cx"  } ) }
