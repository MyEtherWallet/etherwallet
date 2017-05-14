<article class="row text-center" ng-show="objENS.status==ensModes.auction || objENS.status==ensModes.open">

  <br /><br />

  <h1 ng-show="objENS.status==ensModes.auction">
    An auction has been started for <strong>{{objENS.name}}.eth</strong>.
  </h1>

  <h1 ng-show="objENS.status==ensModes.open">
    <strong>{{objENS.name}}.eth</strong> is available!
  </h1>


  <section class="order-info-wrap row" ng-show="objENS.status==ensModes.auction">
    <div class="col-sm-6 col-xs-12 order-info">
      <p>  Reveal Bids On </p>
      <h4> {{getRevealTime().toString()}} </h4>
      <p>  {{objENS.timeRemainingReveal}}  </p>
    </div>
    <div class="col-sm-6 col-xs-12 order-info">
      <p>  Auction Closes On </p>
      <h4> {{objENS.registrationDate.toString()}}</h4>
      <p>  {{objENS.timeRemaining}} </p>
    </div>
  </section>

</article>
