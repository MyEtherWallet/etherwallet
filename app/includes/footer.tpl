<footer class="footer" role="content" aria-label="footer" ng-controller='footerCtrl' >

  <article class="block__wrap" style="max-width: 1780px; margin: auto;">

      <section class="footer--left">
        <a href="https://www.myetherwallet.com/"><img src="images/logo-myetherwallet.svg" height="55px" width="auto" alt="Ether Wallet" class="footer--logo"/></a>

        <ul>
          <li>
            <span translate="FOOTER_1">Open-Source, client-side tool for easily & securely interacting with the Ethereum network.</span>
            <span translate="FOOTER_1b">Created by</span> <a aria-label="kvhnuke's github" href="https://github.com/kvhnuke" target="_blank" rel="noopener">kvhnuke</a> &amp; <a aria-label="tayvano's github" href="https://github.com/tayvano" target="_blank" rel="noopener">tayvano</a>.
          </li>
        </ul>

        <a aria-label="Help Center" href="https://myetherwallet.groovehq.com/help_center" target="_blank" rel="noopener"> Support </a>

        <a role="link" tabindex="0" href="https://www.myetherwallet.com/helpers.html"> Helpers &amp; ENS Debugging </a>

        <a role="link" tabindex="0" href="https://www.myetherwallet.com/signmsg.html"> Sign Message </a>

        <a role="link" tabindex="0" data-toggle="modal" data-target="#disclaimerModal" translate="FOOTER_4"> Disclaimer </a>

        <p ng-show="showBlocks" style="font-size: 12px">Latest Block#: {{currentBlockNumber}}</p>

      </section>

      <section class="footer--cent">

        <div>
          <h5> <i aria-hidden="true">👫</i> You can support us by supporting our blockchain-family.</h5>
          <ul>
            <li>Consider using our affiliate links to...</li>
            <li><a aria-label="Swap Ether or Bitcoin via Bity.com" href="https://bity.com/af/jshkb37v" target="_blank" rel="noopener">Swap ETH/BTC/EUR/CHF via Bity.com</a></li>
            <li><a href="https://www.ledgerwallet.com/r/fa4b?path=/products/" target="_blank" rel="noopener">Buy a Ledger Nano S</a></li>
            <li><a href="https://trezor.io/?a=myetherwallet.com" target="_blank" rel="noopener">Buy a TREZOR</a></li>
          </ul>
        </p>
        <div>
          <h5> <i aria-hidden="true">💝</i> Donations are always appreciated!</h5>
          <ul>
            <li> ETH: <span class="mono wrap">0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8</span></li>
            <li> BTC: <span class="mono wrap">1MEWT2SGbqtz6mPCgFcnea8XmWV5Z4Wc6</span></li>
          </ul>
        </div>
        <div>
          <h5> <i ng-hide="curLang=='en'">🏅</i> <span translate="Translator_Desc"> Thank you to our translators </span></h5>
          <ul><li>
            <span translate="TranslatorName_1"></span>
            <span translate="TranslatorName_2"></span>
            <span translate="TranslatorName_3"></span>
            <span translate="TranslatorName_4"></span>
            <span translate="TranslatorName_5"></span>
          </li></ul>
        </div>
      </section>

      <section class="footer--righ">
        <div class="footer--gas">
          <p>
            <span translate="OFFLINE_Step2_Label_3">Gas Price</span>:
            <strong><a href="http://ethgasstation.info/minerTable.php" target="_blank" rel="noopener">{{gas.value}} Gwei</a></strong>
          </p>
          <input type="range" ng-model="gas.value" min="{{gas.min}}" max="{{gas.max}}" steps="1" ng-change="gasChanged()"/>
          <p style="padding: .25rem 0;" class="small col-xs-4">Not So Fast</p>
          <p style="padding: .25rem 0;" class="small col-xs-4 text-center">Fast</p>
          <p style="padding: .25rem 0;" class="small col-xs-4 text-right">Fast AF</p>
        </div>

        <h5><i aria-hidden="true">🌎</i> On the Web</h5>
        <ul>
          <li><a aria-label="my ether wallet.com" href="https://www.MyEtherWallet.com" target="_blank" rel="noopener">www.MyEtherWallet.com</a></li>
          <li><a aria-label="my ether wallet github" href="https://github.com/kvhnuke/etherwallet" target="_blank" rel="noopener">Github: MyEtherWallet.com</a></li>
          <li><a aria-label="our organization on github" href="https://github.com/MyEtherWallet" target="_blank" rel="noopener">Github: MyEtherWallet v4+</a></li>
          <li>
            <a aria-label="join our slack" href="https://myetherwallet.herokuapp.com/" target="_blank" rel="noopener">Slack</a>
            &middot;
            <a aria-label="twitter" href="https://twitter.com/myetherwallet" target="_blank" rel="noopener">Twitter</a>
            &middot;
            <a aria-label="facebook" href="https://www.facebook.com/MyEtherWallet/" target="_blank" rel="noopener">Facebook</a>
            &middot;
            <a aria-label="reddit" href="https://www.reddit.com/r/MyEtherWallet/" target="_blank" rel="noopener">Reddit</a>
          </li>
        </ul>

      </section>

  </div>

  @@if (site === 'mew' ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "cx"  } ) }


</footer>
</main>
</body>
</html>
