<article class="row text-center" ng-show="objENS.status==ensModes.reveal">
  <br /><br />
  <h1>It's time to reveal the bids for <strong>{{objENS.name}}.eth</strong>. </br> Current highest bid is <strong>{{objENS.highestBid}} ETH</strong>.</h1>

 <section class="order-info-wrap row">
    <div class="col-xs-12 order-info">
      <p>  Auction Closes On </p>
      <h4> {{objENS.registrationDate.toString()}}</h4>
      <p>  {{objENS.timeRemaining}}  </p>
    </div>
  </section>

</article>

