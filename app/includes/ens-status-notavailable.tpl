<article class="row text-center" ng-show="objENS.status==ensModes.notAvailable || objENS.status==ensModes.forbidden">

  <br /><br />

  <h1 ng-show="objENS.status==ensModes.notAvailable">
    <strong>{{objENS.name}}.eth</strong> is not yet available.
  </h1>

  <h1 ng-show="objENS.status==ensModes.forbidden">
    <strong>{{objENS.name}}.eth</strong> not available. (Forbidden)
  </h1>

</article>

<article class="order-info-wrap row" ng-show="objENS.status==ensModes.notAvailable">
  <div class="col-sm-6 col-xs-12 order-info">
    <p> Auction Open On </p>
    <h4> {{objENS.allowedTime.toString()}} </h4>
  </div>
  <div class="col-sm-6 col-xs-12 order-info">
    <p> Auction Opens In</p>
    <h4> {{objENS.timeRemaining}} </h4>
  </div>
</article>
