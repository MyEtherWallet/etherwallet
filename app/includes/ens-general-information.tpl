<article class="block" ng-hide="hideEnsInfoPanel">

  <div class="cont-md">

    <h4 translate="ENS_Helper_1">
      What is the process like?
    </h4>

    <h6 ng-click="ensPrep = !ensPrep"><span ng-show="!ensPrep">+</span><span ng-show="ensPrep">-</span>
      <span translate="ENS_Helper_2">
        1. Preparation
      </span>
    </h6>
    <ul ng-show="ensPrep">
      <li translate="ENS_Helper_3">
        Decide which account you wish to own the name & ensure that you have multiple backups of that account.
      </li>
      <li translate="ENS_Helper_4">
        Decide the maximum amount of ETH you are willing to pay for the name (your <u>Bid Amount</u>). Ensure that the account has enough to cover your bid + 0.01 ETH for gas.
      </li>
    </ul>


    <h6 ng-click="ensAuct = !ensAuct"><span ng-show="!ensAuct">+</span><span ng-show="ensAuct">-</span>
      <span translate="ENS_Helper_5">
        2. Start an Auction / Place a Bid
      </span>
    </h6>
    <ul ng-show="ensAuct">
      <li translate="ENS_Helper_6">
        Bidding period lasts 3 days (72 hours).
      </li>
      <li translate="ENS_Helper_7">
        You will enter the <u>name</u>, <u>Actual Bid Amount</u>, <u>Bid Mask</u>, which is protected by a <u>Secret Phrase</u>.
      </li>
      <li translate="ENS_Helper_8">
        This places your bid, but this information is kept secret until you reveal it.
      </li>
    </ul>


    <h6 ng-click="ensReveal = !ensReveal"><span ng-show="!ensReveal">+</span><span ng-show="ensReveal">-</span>
      <span translate="ENS_Helper_9">
        3. Reveal your Bid
      </span>
    </h6>
    <ul ng-show="ensReveal">
      <li translate="ENS_Helper_10">
        **If you do not reveal your bid, you will not be refunded.**
      </li>
      <li translate="ENS_Helper_11">
        Reveal Period lasts 2 days (48 hours).
      </li>
      <li translate="ENS_Helper_12">
        You will unlock your account, enter the <u>Bid Amount</u>, and the <u>Secret Phrase</u>.
      </li>
      <li translate="ENS_Helper_13">
        In the event that two parties bid exactly the same amount, the first bid revealed will win.
      </li>
    </ul>


    <h6 ng-click="ensFinalize = !ensFinalize"><span ng-show="!ensFinalize">+</span><span ng-show="ensFinalize">-</span>
      <span translate="ENS_Helper_14">
        4. Finalize the Auction
      </span>
    </h6>
    <ul ng-show="ensFinalize">
      <li translate="ENS_Helper_15">
        Once the auction has ended (after 5 days / 120 hours), the winner needs to finalize the auction in order to claim their new name.
      </li>
      <li translate="ENS_Helper_16">
        The winner will be refunded the difference between their bid and the next-highest bid. If you are the only bidder, you will be refunded all but 0.01 ETH.
      </li>
    </ul>


    <h6 ng-click="ensMore = !ensMore"><span ng-show="!ensMore">+</span><span ng-show="ensMore">-</span>
      <span translate="ENS_Helper_17">
        More Information
      </span>
    </h6>
    <ul ng-show="ensMore">
     <li>
        <span translate="ENS_Helper_18">
          The auction for this registrar is a blind auction, and is described in
        </span>
        <a href="https://github.com/ethereum/EIPs/issues/162"
           target="_blank"
           rel="noopener noreferrer">
            EIP162
        </a>.
        <span translate="ENS_Helper_19">
          Basically, no one can see *anything* during the auction.
        </span>
      </li>
      <li>
        <a href="http://docs.ens.domains/en/latest/userguide.html#registering-a-name-with-the-auction-registrar"
           target="_blank"
           rel="noopener noreferrer"
           translate="ENS_Helper_20">
              ENS: Read the Docs
        </a>
      </li>
      <li>
        <a href="https://medium.com/the-ethereum-name-service/announcing-the-ethereum-name-service-relaunch-date-4390af6dd9a2"
           target="_blank"
           rel="noopener noreferrer"
           translate="ENS_Helper_21">
              Announcing the Ethereum Name Service Relaunch Date!
        </a>
      </li>
    </ul>

    <hr />

    <h6>
      <a href="https://kb.myetherwallet.com/ens/"
         target="_blank"
         rel="noopener noreferrer"
         translate="ENS_Helper_22">
            Knowledge Base: ENS
      </a>

      &nbsp;&middot;&nbsp;

      <a href="https://kb.myetherwallet.com/ens/ens-debugging-a-bad-instruction-reveal.html"
         target="_blank"
         rel="noopener noreferrer"
         translate="ENS_Helper_23">
            Debugging a [BAD INSTRUCTION] Reveal
      </a>
    </h6>

    <p translate="ENS_Helper_24">
      Please try the above before relying on support for reveal issues as we are severely backlogged on support tickets. We're so sorry. :(
    </p>

  </div>

</article>
