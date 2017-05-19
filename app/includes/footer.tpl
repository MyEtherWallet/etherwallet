<footer role="contentinfo" aria-label="footer" ng-controller='footerCtrl' >

  <div class="container">

    <section class="row"><section class="row">

      <div class="col-sm-3 footer-1">
        <p aria-hidden="true"><a href="https://www.myetherwallet.com/"><img src="images/logo-myetherwallet.svg" height="55px" width="auto" alt="Ether Wallet" /></a></p>
        <p>
          <span translate="FOOTER_1">Open-Source, client-side tool for easily & securely interacting with the Ethereum network.</span>
          <span translate="FOOTER_1b">Created by</span>
          <a aria-label="kvhnuke's github" href="https://github.com/kvhnuke" target="_blank">kvhnuke</a>
          &
          <a aria-label="tayvano's github" href="https://github.com/tayvano" target="_blank">tayvano</a>.
          <br />
          <a role="link" tabindex="0" data-toggle="modal" data-target="#disclaimerModal" translate="FOOTER_4"> Disclaimer </a>
        </p>
        <div class="form-group">
          <label translate="OFFLINE_Step2_Label_3"> Gas Price: </label> (<a href="http://ethgasstation.info/minerTable.php" target="_blank">{{gas.value}} Gwei</a>)
          <input type="range" ng-model="gas.value" min="{{gas.min}}" max="{{gas.max}}" steps="1" ng-change="gasChanged()"/>
          <p style="padding: 0" class="small col-xs-4">Not So Fast</p>
          <p style="padding: 0" class="small col-xs-4 text-center">Fast</p>
          <p style="padding: 0" class="small col-xs-4 text-right">Fast AF</p>
        </div>
      </div>

      <div class="col-sm-6 footer-2">
        <h5> <i aria-hidden="true">💝</i> Donations are always appreciated!</h5>
        <ul>
          <li> ETH: <span class="mono wrap">0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8</span></li>
          <li> BTC: <span class="mono wrap">1MEWT2SGbqtz6mPCgFcnea8XmWV5Z4Wc6</span></li>
        </ul>

        <h5> <i aria-hidden="true">👫</i> You can also support us by supporting our blockchain-family.</h5><p>Consider using our affiliate links to...</h5>
        <ul>
          <li><a aria-label="Swap Ether or Bitcoin via Bity.com" href="https://bity.com/af/jshkb37v" target="_blank">Swap ETH/BTC/EUR/CHF via Bity.com</a></li>
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
        <h5><i aria-hidden="true">🌎</i> On the Web</h5>
        <ul>
          <li><a aria-label="my ether wallet.com" href="https://www.MyEtherWallet.com" target="_blank">www.MyEtherWallet.com</a></li>
          <li><a aria-label="my ether wallet github" href="https://github.com/kvhnuke/etherwallet" target="_blank">Github: MyEtherWallet.com & CX</a></li>
          <li><a aria-label="our organization on github" href="https://github.com/MyEtherWallet" target="_blank">Github: MyEtherWallet (Org)</a></li>
          <li><a aria-label="join our slack" href="https://myetherwallet.herokuapp.com/" target="_blank">Join Our Slack</a></li>
          <li><a aria-label="twitter" href="https://twitter.com/myetherwallet" target="_blank">Twitter</a></li>
          <li><a aria-label="facebook" href="https://www.facebook.com/MyEtherWallet/" target="_blank">Facebook</a></li>
        </ul>

        <h5><i aria-hidden="true">🙏</i> Support</h5>
        <ul>
          <li><a aria-label="email support at myetherwallet.com" href="mailto:support@myetherwallet.com" target="_blank">Email</a></li>
          <li><a aria-label="open a github issue" href="https://github.com/kvhnuke/etherwallet/issues" target="_blank">Github Issue</a></li>
        </ul>
      </div>

    </section></section>

    <p ng-show="showBlocks" class="text-right" style="font-size: 10px">Latest Block#: {{currentBlockNumber}}</p>
  </div>

  @@if (site === 'mew' ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "mew" } ) }
  @@if (site === 'cx'  ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "cx"  } ) }


</footer>
</main>
</body>
</html>
