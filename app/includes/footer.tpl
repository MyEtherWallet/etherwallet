<section class="pre-footer">
  <div class="container">
    <p translate="WARN_10">MyEtherWallet.com is a client-side interface &amp; does not hold your keys. We cannot access accounts, recover keys, reset passwords, nor reverse transactions.</p>
    <p>
      <span translate="WARN_11">If you go to a fake MyEtherWallet.com, they can. Check the URL. Use a bookmark.</span>
      <a role="link" tabindex="0" data-toggle="modal" data-target="#disclaimerModal" translate="WARN_12"> You are responsible for your security. </a>
    </p>
  </div>
</section>

<footer class="footer footer-{{nodeType}}" role="content" aria-label="footer" ng-controller='footerCtrl' >

  <article class="block__wrap" style="max-width: 1780px; margin: auto;">

    <section class="footer--left">

      <a href="https://www.myetherwallet.com/"><img src="images/logo-myetherwallet.svg" height="55px" width="auto" alt="Ether Wallet" class="footer--logo"/></a>

      <p><span translate="FOOTER_1">Free, open-source, client-side tool for easily &amp; securely interacting with the Ethereum blockchain.</span></p>

      <p><span translate="FOOTER_1b">Created by</span> <a aria-label="kvhnuke's github" href="https://github.com/kvhnuke" target="_blank" rel="noopener">kvhnuke</a> &amp; <a aria-label="tayvano's github" href="https://github.com/tayvano" target="_blank" rel="noopener">tayvano</a>.</p>

      <p><a href="https://www.myetherwallet.com/pushtx.html" target="_blank" rel="noopener" role="link" tabindex="0">Broadcast TX</a></p>

      <p><a href="https://www.myetherwallet.com/signmsg.html" target="_blank" rel="noopener" role="link" tabindex="0">Sign Message</a></p>

      <p><a href="https://www.myetherwallet.com/helpers.html" target="_blank" rel="noopener" role="link" tabindex="0">Helpers &amp; ENS Debugging</a></p>

    </section>

    <section class="footer--cent">

        <h5> <i aria-hidden="true">👫</i> You can support us by supporting our blockchain-family.</h5>
        <p>Consider using our affiliate links to...</p>
        <p><a aria-label="Swap Ether or Bitcoin via Bity.com" href="https://bity.com/af/jshkb37v" target="_blank" rel="noopener">Swap ETH/BTC/EUR/CHF via Bity.com</a></p>
        <p><a href="https://www.ledgerwallet.com/r/fa4b?path=/products/" target="_blank" rel="noopener">Buy a Ledger Nano S</a>
          &nbsp;&middot;&nbsp;
          <a href="https://trezor.io/?a=myetherwallet.com" target="_blank" rel="noopener">Buy a TREZOR</a></p>

        <h5> <i aria-hidden="true">💝</i> Donations are always appreciated!</h5>
        <p> ETH: <span class="mono wrap">0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8</span> </p>
        <p> BTC: <span class="mono wrap">1MEWT2SGbqtz6mPCgFcnea8XmWV5Z4Wc6</span> </p>

        <h5 ng-hide="curLang=='en'"> <i>🏅</i> <span translate="z_TRANSLATEDesc"> Thank you to our translators </span></h5>
        <p ng-hide="curLang=='en'">
          <span translate="z_TRANSLATE1"></span>
          <span translate="z_TRANSLATE2"></span>
          <span translate="z_TRANSLATE3"></span>
          <span translate="z_TRANSLATE4"></span>
          <span translate="z_TRANSLATE5"></span>
        </p>

    </section>

    <section class="footer--righ">

      <h5><i aria-hidden="true">🌎</i> Helpful Links </h5>

      <p><a aria-label="Help Center" href="https://myetherwallet.groovehq.com/help_center" target="_blank" rel="noopener" role="link" tabindex="0">
         Knowledge Base
      </a></p>

      <p><a aria-label="my ether wallet.com" href="https://www.MyEtherWallet.com" target="_blank" rel="noopener" role="link" tabindex="0">
        www.MyEtherWallet.com
      </a></p>

      <p><a aria-label="my ether wallet github" href="https://github.com/kvhnuke/etherwallet" target="_blank" rel="noopener" role="link" tabindex="0">
        Github: MyEtherWallet v3
      </a></p>

      <p><a aria-label="our organization on github" href="https://github.com/MyEtherWallet" target="_blank" rel="noopener" role="link" tabindex="0">
        Github: MyEtherWallet
      </a></p>

      <p>
        <a aria-label="join our slack" href="https://myetherwallet.herokuapp.com/" target="_blank" rel="noopener" role="link" tabindex="0">
          Slack
        </a>
        &middot;
        <a aria-label="twitter" href="https://twitter.com/myetherwallet" target="_blank" rel="noopener" role="link" tabindex="0">
          Twitter
        </a>
        &middot;
        <a aria-label="facebook" href="https://www.facebook.com/MyEtherWallet/" target="_blank" rel="noopener" role="link" tabindex="0">
          Facebook
        </a>
        &middot;
        <a aria-label="reddit" href="https://www.reddit.com/r/MyEtherWallet/" target="_blank" rel="noopener" role="link" tabindex="0">
          Reddit
        </a>
      </p>

      <p ng-show="showBlocks">Latest Block#: {{currentBlockNumber}} </p>

    </section>

  </article>

</div>

<script type='application/ld+json'>
{
  "@context":"http://schema.org",
  "@type":"Organization",
  "@id":"#organization",
  "url":"https://www.myetherwallet.com/",
  "name":"MyEtherWallet",
  "logo":"https://myetherwallet.com/images/myetherwallet-logo-banner.png",
  "description": "MyEtherWallet is a free, open-source, client-side tool for easily & securely interacting with the Ethereum blockchain.",
  "sameAs":[
    "https://www.facebook.com/MyEtherWallet/",
    "https://twitter.com/myetherwallet",
    "https://myetherwallet.groovehq.com/help_center",
    "https://github.com/kvhnuke/etherwallet",
    "https://github.com/MyEtherWallet",
    "https://kvhnuke.github.io/etherwallet/",
    "https://myetherwallet.slack.com/"
  ]
}
</script>

</footer>

@@if (site === 'mew' ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "mew" } ) }
@@if (site === 'cx'  ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "cx"  } ) }


</main>
</body>
</html>
