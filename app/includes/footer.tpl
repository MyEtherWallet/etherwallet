<footer class="container-fluid" ng-controller='footerCtrl'>
  <div class="container">
    <p>
      <a href="https://www.myetherwallet.com/"><img src="images/etherwallet-logo.svg" height="55px" width="auto" alt="Ether Wallet" /></a>
    </p>

    <p>
      <span translate="FOOTER_1">Open-Source, client-side tool for easily & securely interacting with the Ethereum network.</span>
      <span translate="FOOTER_1b">Created by</span> <a href="https://github.com/kvhnuke" target="_blank">kvhnuke</a> & <a href="https://github.com/tayvano" target="_blank">tayvano</a>.
    </p>

    <p>
      <span translate="FOOTER_2">Donations greatly appreciated:</span> <span class="mono wrap">0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8</span>
    </p>

    <p>
      URLs:
      <a href="https://www.myetherwallet.com" target="_blank">www.MyEtherWallet.com</a> &middot;
      <a href="http://kvhnuke.github.io/etherwallet/" target="_blank">kvhnuke.github.io/etherwallet/</a>
    </p>

    <p>
      Github:
      <a href="https://github.com/kvhnuke/etherwallet" target="_blank">MyEtherWallet.com & MyEtherWallet CX</a>
    </p>

    <p><span translate="NAV_Contact">Contact</span>:
      <a href="mailto:myetherwallet@gmail.com" target="_blank">Email</a> &middot;
      <a href="https://twitter.com/myetherwallet" target="_blank">Twitter</a>
    </p>

    <p>
      <span translate="Translator_Desc">Thank you to our translators: </span>
      <span translate="TranslatorName_1"></span>
      <span translate="TranslatorName_2"></span>
      <span translate="TranslatorName_3"></span>
      <span translate="TranslatorName_4"></span>
      <span translate="TranslatorName_5"></span>
    </p>

    <p><a data-toggle="modal" data-target="#disclaimerModal" translate="FOOTER_4"> Disclaimer </a></p>
    <p ng-show="showBlocks" class="text-right" style="font-size: 10px">Latest Block#: {{currentBlockNumber}}</p>

  </div>

  <!-- Disclaimer Modal-->
  <section class="modal fade" id="disclaimerModal" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title text-danger" translate="FOOTER_4">Disclaimer</h3>
        </div>
        <div class="modal-body">
          <p><strong> Translations of MyEtherWallet: </strong> The commmunity is doing an amazing job translating MyEtherWallet into a variety of languages. However, MyEtherWallet can only verify the validity and accuracy of the information provided in English and, because of this, the English version of our website is the official text. </p>

          <p><strong>Always backup your keys: </strong> MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account with us or give us your Ether to hold onto. Your keys never leave your computer/your browser. If you do not save your private key & password, there is no way to recover access to your wallet. Back them up in multiple physical locations – not just on your computer!</p>

          <p><strong>We are not responsible for any loss: </strong> Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development. While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the possibility that something unexpected happens. Please do not invest more than you are willing to lose, and please be careful. If something were to happen, we are sorry, but we are not responsible for any lost funds.</p>

          <p><strong>MIT License</strong> Copyright (c) 2016 MyEtherWallet</p>

          <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>

          <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>

          <p><strong>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</strong></p>
        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn btn-default" data-dismiss="modal">Okay</button>
        </div>
      </div>
    </div>
  </section>
  <!-- / Disclaimer Modal-->


</footer>

</body>
</html>
