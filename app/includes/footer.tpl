<footer ng-controller='footerCtrl'>

  <div class="container">

    <section class="row"><section class="row">

      <div class="col-sm-3 footer-1">
        <p><a href="https://www.myetherwallet.com/"><img src="images/logo-myetherwallet.svg" height="55px" width="auto" alt="Ether Wallet" /></a></p>
        <p><span translate="FOOTER_1">Open-Source, client-side tool for easily & securely interacting with the Ethereum network.</span> <span translate="FOOTER_1b">Created by</span> <a href="https://github.com/kvhnuke" target="_blank">kvhnuke</a> & <a href="https://github.com/tayvano" target="_blank">tayvano</a>.</p>
        <br />
        <p><a data-toggle="modal" data-target="#disclaimerModal" translate="FOOTER_4"> Disclaimer </a></p>
      </div>

      <div class="col-sm-6 footer-2">
        <h5> <i>💝</i> Donations are always appreciated!</h5>
        <ul>
          <li> ETH: <span class="mono wrap">0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8</span></li>
          <li> BTC: <span class="mono wrap">1MEWT2SGbqtz6mPCgFcnea8XmWV5Z4Wc6</span></li>
        </ul>

        <h5> <i>👫</i> You can also support us by supporting our blockchain-family.</h5><p>Consider using our affiliate links to...</h5>
        <ul>
          <li><a href="https://bity.com/af/jshkb37v" target="_blank">Swap ETH/BTC/EUR/CHF via Bity.com</a></li>
          <li><a href="https://www.ledgerwallet.com/r/fa4b?path=/products/" target="_blank">Buy a Ledger Nano S</a></li>
          <li><a href="https://trezor.io/?a=myetherwallet.com" target="_blank">Buy a TREZOR</a></li>
        </ul>

        <h5> <i ng-hide="curLang=='en'">🏅</i> <span translate="Translator_Desc"> Thank you to our translators </span></h5>
        <ul><li>
          <span translate="TranslatorName_1"></span>
          <span translate="TranslatorName_2"></span>
          <span translate="TranslatorName_3"></span>
          <span translate="TranslatorName_4"></span>
          <span translate="TranslatorName_5"></span>
        </li></ul>
      </div>

      <div class="col-sm-3 footer-3">
        <h5><i>🌎</i> On the Web</h5>
        <ul>
          <li><a href="https://www.MyEtherWallet.com" target="_blank">www.MyEtherWallet.com</a></li>
          <li><a href="https://github.com/kvhnuke/etherwallet" target="_blank">Github: MyEtherWallet.com & CX</a></li>
          <li><a href="https://github.com/MyEtherWallet" target="_blank">Github: MyEtherWallet (Org)</a></li>
          <li><a href="https://twitter.com/myetherwallet" target="_blank">Twitter</a></li>
          <li><a href="https://www.facebook.com/MyEtherWallet/" target="_blank">Facebook</a></li>
        </ul>

        <h5><i>🙏</i> Support</h5>
        <ul>
          <li><a href="mailto:myetherwallet@gmail.com" target="_blank">Email</a></li>
          <li><a href="https://github.com/kvhnuke/etherwallet/issues" target="_blank">Github Issue</a></li>
        </ul>
      </div>

    </section></section>

    <p ng-show="showBlocks" class="text-right" style="font-size: 10px">Latest Block#: {{currentBlockNumber}}</p>

  </div>

  @@if (site === 'mew' ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "cx"  } ) }


</footer>

</body>
</html>
