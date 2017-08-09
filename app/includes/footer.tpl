<section class="pre-footer">
  <div class="container">
    <p>MyEtherWallet.com does not hold your keys for you. We cannot access accounts, recover keys, reset passwords, nor reverse transactions. Protect your keys &amp; always check that you are on correct URL. <a role="link" tabindex="0" data-toggle="modal" data-target="#disclaimerModal"> You are responsible for your security.</a>
    </p>
  </div>
</section>

<footer class="footer" role="content" aria-label="footer" ng-controller='footerCtrl' >

  <article class="block__wrap" style="max-width: 1780px; margin: auto;">

    <section class="footer--left">

      <a href="/"><img src="images/logo-myetherwallet.svg" height="45px" width="auto" alt="Ether Wallet" class="footer--logo"/></a>

      <p><span translate="FOOTER_1">Free, open-source, client-side interface for generating Ethereum wallets &amp; more. Interact with the Ethereum blockchain easily &amp; securely. Double-check the URL ( .com ) before unlocking your wallet.</span></p>

      <p><a aria-label="knowledge base" href="https://myetherwallet.groovehq.com/help_center" target="_blank" rel="noopener" role="link" tabindex="0">
        Knowledge Base
      </a></p>

      <p><a href="https://www.myetherwallet.com/helpers.html" target="_blank" rel="noopener" role="link" tabindex="0">
        Helpers &amp; ENS Debugging
      </a></p>

      <p><a href="https://www.myetherwallet.com/signmsg.html" target="_blank" rel="noopener" role="link" tabindex="0">
        Sign Message
      </a></p>

      <p><a data-target="#disclaimerModal" data-toggle="modal" target="_blank" rel="noopener" role="link" tabindex="0"  translate="FOOTER_4"> Disclaimer </a></p>

      <p> &copy; 2017 MyEtherWallet, LLC </p>

    </section>

    <section class="footer--cent">

        <h5> <i aria-hidden="true">👫</i> You can support us by supporting our blockchain-family.</h5>
        <p>Consider using our affiliate links to...</p>
        <p><a aria-label="Swap Ether or Bitcoin via Bity.com" href="https://bity.com/af/jshkb37v" target="_blank" rel="noopener">Swap ETH/BTC/EUR/CHF via Bity.com</a></p>
        <p><a href="https://www.ledgerwallet.com/r/fa4b?path=/products/" target="_blank" rel="noopener">Buy a Ledger Wallet</a></p>
        <p><a href="https://trezor.io/?a=myetherwallet.com" target="_blank" rel="noopener">Buy a TREZOR</a></p>

        <h5><i aria-hidden="true">💝</i> Donations are always appreciated!</h5>
        <p>ETH: <span class="mono wrap">mewtopia.eth <small>0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8</small></span></p>
        <p>BTC: <span class="mono wrap">1MEWT2SGbqtz6mPCgFcnea8XmWV5Z4Wc6</span></p>
        <!--
        <p>MYD: <span class="mono wrap">mewsupport.eth <small>0xf7e983781609012307f2514f63D526D83D24F466</small></span></p>
        -->

        <h5 ng-hide="curLang=='en'"> <i>🏅</i> <span translate="Translator_Desc"> Thank you to our translators </span></h5>
        <p ng-hide="curLang=='en'">
          <span translate="TranslatorName_1"></span>
          <span translate="TranslatorName_2"></span>
          <span translate="TranslatorName_3"></span>
          <span translate="TranslatorName_4"></span>
          <span translate="TranslatorName_5"></span>
        </p>

    </section>

    <section class="footer--righ">

      <p><a aria-label="website via my ether wallet dot com" href="https://www.MyEtherWallet.com" target="_blank" rel="noopener" role="link" tabindex="0">
        MyEtherWallet.com
      </a></p>

      <p><a aria-label="website via github URL" href="https://kvhnuke.github.io/etherwallet/" target="_blank" rel="noopener" role="link" tabindex="0">
        kvhnuke.github.io/etherwallet
      </a></p>

      <p><a aria-label="my ether wallet github" href="https://github.com/kvhnuke/etherwallet" target="_blank" rel="noopener" role="link" tabindex="0">
        Github: Current Site &amp; CX
      </a></p>

      <p><a aria-label="our organization on github" href="https://github.com/MyEtherWallet" target="_blank" rel="noopener" role="link" tabindex="0">
        Github: MEW Org
      </a></p>

      <p><a aria-label="download & run locally" href="https://github.com/kvhnuke/etherwallet/releases/latest" target="_blank" rel="noopener" role="link" tabindex="0">
        Github: Latest Release
      </a></p>

      <p><a aria-label="my ether wallet chrome extension" href="https://chrome.google.com/webstore/detail/myetherwallet-cx/nlbmnnijcnlegkjjpcfjclmcfggfefdm?hl=en" target="_blank" rel="noopener" role="link" tabindex="0">
        MyEtherWallet CX
      </a></p>

      <p><a aria-label="Anti-Phishing chrome extension" href="https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn" target="_blank" rel="noopener" role="link" tabindex="0">
        Anti-Phishing CX
      </a></p>

      <p>
        <a aria-label="join our slack" href="https://myetherwallet.herokuapp.com/" target="_blank" rel="noopener" role="link" tabindex="0">Slack</a>
        &middot;
        <a aria-label="reddit" href="https://www.reddit.com/r/MyEtherWallet/" target="_blank" rel="noopener" role="link" tabindex="0">Reddit</a>
        &middot;
        <a aria-label="twitter" href="https://twitter.com/myetherwallet" target="_blank" rel="noopener" role="link" tabindex="0">Twitter</a>
        &middot;
        <a aria-label="facebook" href="https://www.facebook.com/MyEtherWallet/" target="_blank" rel="noopener" role="link" tabindex="0">Facebook</a>
        &middot;
        <a aria-label="medium" href="https://medium.com/@myetherwallet_96408" target="_blank" rel="noopener" role="link" tabindex="0">Medium</a>
      </p>




      <p ng-show="showBlocks">Latest Block#: {{currentBlockNumber}} </p>

    </section>

  </article>

</div>


</footer>

@@if (site === 'mew' ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "mew" } ) }
@@if (site === 'cx'  ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "cx"  } ) }

</main>
</body>
</html>
