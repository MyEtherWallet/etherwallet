<article class="row text-center" ng-show="objENS.status==ensModes.owned ">

  <br /><br />

  <h4>It appears this name has already been finalized.</h4>
  <h1><strong>{{objENS.name}}.eth</strong> is owned by the highest bidder.</h1>
  <p>Owner: <span class="mono">{{objENS.owner}}</span></p>
  <p>Highest Bidder: <span class="mono">{{objENS.deedOwner}}</span></p>

</article>


