<div ng-show="(objENS.status==ensModes.auction || objENS.status==ensModes.open || objENS.status==ensModes.reveal)" >
  <!-- ALL: If auction has been started -->
  <article class="row">

    <!-- PLACEBID: Key Stats Row -->
    <section class="order-info-wrap row" ng-show="objENS.status==ensModes.auction">
      <div class="col-sm-6 col-xs-12 order-info">
        <p> Time Remaining in Auction  </p>
        <h4> {{objENS.timeRemaining}} </h4>
      </div>
      <div class="col-sm-4 col-xs-12 order-info">
        <p> Reveal Bids On </p>
        <h4> {{getRevealTime().toLocaleString()}} </h4>
      </div>
      <div class="col-sm-6 col-xs-12 order-info">
        <p> Auction Closes On </p>
        <h4>{{objENS.registrationDate.toLocaleString()}}</h4>
      </div>
    </section>
    <!-- / PLACEBID: Key Stats Row -->

    <!-- ALL: Info Row -->
    <section class="col-sm-8 col-xs-12 col-sm-offset-2">
      <h3> Do you want {{objENS.name}}.eth? You can <span ng-show="objENS.status==ensModes.auction">place a bid</span><span ng-show="objENS.status==ensModes.open">start an auction</span> now. </h3>
      <h6> What is the auction & bidding process like? </h6>
      <ol>
        <li><strong>Preparation:</strong>
          <ul>
            <li> Decide which account you wish to own the name (assuming you win). Ensure you have multiple backups of the private key, please. </li>
            <li> Decide the maximum amount of ETH you are willing to pay for the name. Ensure your account has at least that amount of ETH.</li>
          </ul>
        </li>
        <li><strong>Place a Bid:</strong>
          <ul><li>Once you have done the above, unlock your account below to start the process.</li></ul>
        </li>
        <li><strong>Reveal your Bid:<strong>
          <ul><li>During the last <u>48 hours</u> of the auction, you need to reveal your bid. You will access your account (via private key +  password), enter your bid amount, and enter the secret phrase that you will create while bidding.</li></ul>
        </strong>
        <li><strong>Finalize the Auction:</strong>
          <ul>
            <li>Once the auction is over, anyone can finalize it. The ENS name is then assigned to the winning bidder.</li>
            <li> The winner will be refunded the difference between their bid and the next-highest bid. If you are the only bidder, you will refunded all but 0.1 ETH. Any non-winners will also be refunded.</li>
          </ul>
        </li>
      </ol>
      <h6> More Information: </h6>
      <ul>
        <li>The auction for this registrar is a blind auction, and is described in <a href="https://github.com/ethereum/EIPs/issues/162" target="_blank">EIP162</a>. Basically, no one can see *anything* during the auction, at all.</li>
        <li><a href="http://docs.ens.domains/en/latest/userguide.html#registering-a-name-with-the-auction-registrar" target="_blank">ENS: Read the Docs</a></li>
        <li><a href="https://medium.com/the-ethereum-name-service/announcing-the-ethereum-name-service-relaunch-date-4390af6dd9a2" target="_blank">Announcing the Ethereum Name Service Relaunch Date!</a></li>
      </ul>
    </section>
    <!-- / ALL: Info Row -->

  </article>
  <!-- / ALL: If auction has been started -->
  </div>
