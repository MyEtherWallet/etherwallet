<article class="row text-center" ng-show="objENS.status==ensModes.owned">

  <br /><br />

  <h1>
    <strong>{{objENS.name}}.eth</strong> is not available. It's already owned by {{objENS.owner}} and the highest bidder is {{objENS.deedOwner}}.
  </h1>

  <section class="col-sm-8 col-xs-12 col-sm-offset-2">
    <h3> If you are the highest bidder, you must finalize the auction to claim the name. </h3>
  </section>

</article>


