<section class="pre-footer">
  <div class="container">
    <p>
      MyEtherWallet.com does not hold your keys for you. We cannot access accounts, recover keys, reset passwords, nor reverse transactions. Protect your keys &amp; always check that you are on correct URL.
      <a role="link" tabindex="0" data-toggle="modal" data-target="#disclaimerModal">
        You are responsible for your security.
      </a>
    </p>
  </div>
</section>

<footer class="footer" role="content" aria-label="footer" ng-controller='footerCtrl' >

  <article class="block__wrap" style="max-width: 1780px; margin: auto;">

    <section class="footer--left">

      <a href="/"><img src="images/logo-myetherwallet.svg" height="45px" width="auto" alt="Ether Wallet" class="footer--logo"/></a>

      <p>
        <span translate="FOOTER_1">
          Free, open-source, client-side interface for generating Ethereum wallets &amp; more. Interact with the Ethereum blockchain easily &amp; securely. Double-check the URL ( .com ) before unlocking your wallet.
        </span>
      </p>

      <p>
        <a aria-label="knowledge base" href="https://myetherwallet.github.io/knowledge-base/" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          Knowledge Base
        </a>
      </p>

      <p>
        <a data-target="#disclaimerModal" data-toggle="modal" target="_blank" rel="noopener noreferrer" role="link" tabindex="0"  translate="FOOTER_4">
          Disclaimer
        </a>
      </p>

      <p ng-show="showBlocks">
        Latest Block#: {{currentBlockNumber}}
      </p>

      <p>
        &copy; 2018 MyEtherWallet, LLC
      </p>

    </section>

    <section class="footer--cent">
        <h5> <i aria-hidden="true">👫</i> You can support us by supporting our blockchain-family.</h5>
        <p>Consider using our affiliate links to...</p>
        <div class="footer__pill-wrap">
          <a class="footer__pill"  aria-label="Swap Ether or Bitcoin via Bity.com" href="https://bity.com/af/jshkb37v" target="_blank" rel="noopener noreferrer">Swap ETH/BTC/EUR/CHF via Bity.com</a>
        </div>
        <p> Buy a... </p>
        <div class="footer__pill-wrap">
          <a class="footer__pill" href="https://www.ledgerwallet.com/r/fa4b?path=/products/" target="_blank" rel="noopener noreferrer">Ledger Wallet</a>
          <a class="footer__pill" href="https://trezor.io/?a=myetherwallet.com" target="_blank" rel="noopener noreferrer">TREZOR</a>
          <a class="footer__pill" href="https://digitalbitbox.com/?ref=mew" target="_blank" rel="noopener noreferrer">Digital Bitbox</a>
          <a class="footer__pill" href="https://ether.cards/?utm_source=mew&utm_medium=cpm&utm_campaign=site" target="_blank" rel="noopener noreferrer">ether.card</a>
        </div>

        <h5><i aria-hidden="true">💝</i> Donations are always appreciated!</h5>
        <p>
          ETH:
          <span class="mono wrap">
            mewtopia.eth
            <a title="See this address on the blockchain explorer" href="https://etherscan.io/address/0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8" class="ext-etheraddresslookup-link" target="_blank">
              0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8
            </a>
          </span>
          </p>
        <p>
          BTC:
          <span class="mono wrap">
            1MEWT2SGbqtz6mPCgFcnea8XmWV5Z4Wc6
          </span>
        </p>
        <!--
        <p>MYD: <span class="mono wrap">mewsupport.eth <small>0xf7e983781609012307f2514f63D526D83D24F466</small></span></p>
        -->
        <h5 ng-hide="curLang=='en'">
          <i>🏅</i>
          <span translate="Translator_Desc"> Thank you to our translators </span>
        </h5>
        <p ng-hide="curLang=='en'">
          <span translate="TranslatorName_1"></span>
          <span translate="TranslatorName_2"></span>
          <span translate="TranslatorName_3"></span>
          <span translate="TranslatorName_4"></span>
          <span translate="TranslatorName_5"></span>
        </p>

    </section>

    <section class="footer--righ">

      <p>
        <a aria-label="website via my ether wallet dot com" href="https://www.MyEtherWallet.com" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          MyEtherWallet.com
        </a>
      </p>

      <p>
        <a href="https://www.myetherwallet.com/helpers.html" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          Unit Converters &amp; ENS Debugging
        </a>
      </p>

      <p>
        <a href="https://www.myetherwallet.com/signmsg.html" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          Sign Message
        </a>
      </p>

      <p>
        <a aria-label="website via github URL" href="https://kvhnuke.github.io/etherwallet/" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          kvhnuke.github.io/etherwallet
        </a>
      </p>

      <p>
        <a aria-label="my ether wallet github" href="https://github.com/kvhnuke/etherwallet" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          Github: Current Site &amp; CX
        </a>
      </p>

      <p>
        <a aria-label="download & run locally" href="https://github.com/kvhnuke/etherwallet/releases/latest" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          Github: Latest Release
        </a>
      </p>

      <p>
        <a aria-label="my ether wallet chrome extension" href="https://chrome.google.com/webstore/detail/myetherwallet-cx/nlbmnnijcnlegkjjpcfjclmcfggfefdm?hl=en" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          MyEtherWallet Chrome Extension
        </a>
      </p>

      <p>
        <a aria-label="Anti-Phishing chrome extension" href="https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          EAL "Don't Get Phish'd" Chrome Extension
        </a>
      </p>

      <p>
        <a aria-label="join our slack" title="slack" href="https://myetherwallet.herokuapp.com/" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          <svg width="24" height="24" class="footer__icon" aria-labelledby="slack icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M9.879 10.995l1.035 3.085 3.205-1.074-1.035-3.074-3.205 1.08v-.017z"/><path d="M18.824 14.055l-1.555.521.54 1.61c.218.65-.135 1.355-.786 1.574-.15.045-.285.067-.435.063-.511-.015-.976-.338-1.155-.849l-.54-1.607-3.21 1.073.539 1.608c.211.652-.135 1.358-.794 1.575-.15.048-.285.067-.435.064-.51-.015-.976-.34-1.156-.85l-.539-1.619-1.561.524c-.15.045-.285.061-.435.061-.511-.016-.976-.345-1.155-.855-.225-.66.135-1.364.78-1.575l1.56-.525L7.5 11.76l-1.551.525c-.141.048-.285.066-.428.064-.495-.016-.975-.338-1.141-.848-.209-.65.135-1.354.796-1.574l1.56-.52-.54-1.605c-.21-.654.136-1.359.796-1.575.659-.22 1.363.136 1.574.783l.539 1.608L12.3 7.544l-.54-1.605c-.209-.645.135-1.35.789-1.574.652-.211 1.359.135 1.575.791l.54 1.621 1.555-.51c.651-.219 1.356.135 1.575.779.218.654-.135 1.359-.784 1.575l-1.557.524 1.035 3.086 1.551-.516c.652-.211 1.358.135 1.575.795.22.66-.135 1.365-.779 1.574l-.011-.029zm4.171-5.356C20.52.456 16.946-1.471 8.699 1.005.456 3.479-1.471 7.051 1.005 15.301c2.475 8.245 6.046 10.17 14.296 7.694 8.245-2.475 10.17-6.046 7.694-14.296z" fill="#ffffff" /></svg>
        </a>
        <a aria-label="reddit" href="https://www.reddit.com/r/MyEtherWallet/" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          <svg width="24" height="24" class="footer__icon" aria-labelledby="reddit icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.204 14.049c-.06.276-.091.56-.091.847 0 3.443 4.402 6.249 9.814 6.249 5.41 0 9.812-2.804 9.812-6.249 0-.274-.029-.546-.082-.809l-.015-.032c-.021-.055-.029-.11-.029-.165-.302-1.175-1.117-2.241-2.296-3.103-.045-.016-.088-.039-.126-.07-.026-.02-.045-.042-.067-.064-1.792-1.234-4.356-2.008-7.196-2.008-2.815 0-5.354.759-7.146 1.971-.014.018-.029.033-.049.049-.039.033-.084.06-.13.075-1.206.862-2.042 1.937-2.354 3.123 0 .058-.014.114-.037.171l-.008.015zm9.773 5.441c-1.794 0-3.057-.389-3.863-1.197-.173-.174-.173-.457 0-.632.176-.165.46-.165.635 0 .63.629 1.685.943 3.228.943 1.542 0 2.591-.3 3.219-.929.165-.164.45-.164.629 0 .165.18.165.465 0 .645-.809.808-2.065 1.198-3.862 1.198l.014-.028zm-3.606-7.573c-.914 0-1.677.765-1.677 1.677 0 .91.763 1.65 1.677 1.65s1.651-.74 1.651-1.65c0-.912-.739-1.677-1.651-1.677zm7.233 0c-.914 0-1.678.765-1.678 1.677 0 .91.764 1.65 1.678 1.65s1.651-.74 1.651-1.65c0-.912-.739-1.677-1.651-1.677zm4.548-1.595c1.037.833 1.8 1.821 2.189 2.904.45-.336.719-.864.719-1.449 0-1.002-.815-1.816-1.818-1.816-.399 0-.778.129-1.09.363v-.002zM2.711 9.963c-1.003 0-1.817.816-1.817 1.818 0 .543.239 1.048.644 1.389.401-1.079 1.172-2.053 2.213-2.876-.302-.21-.663-.329-1.039-.329v-.002zm9.217 12.079c-5.906 0-10.709-3.205-10.709-7.142 0-.275.023-.544.068-.809C.494 13.598 0 12.729 0 11.777c0-1.496 1.227-2.713 2.725-2.713.674 0 1.303.246 1.797.682 1.856-1.191 4.357-1.941 7.112-1.992l1.812-5.524.404.095s.016 0 .016.002l4.223.993c.344-.798 1.138-1.36 2.065-1.36 1.229 0 2.231 1.004 2.231 2.234 0 1.232-1.003 2.234-2.231 2.234s-2.23-1.004-2.23-2.23l-3.851-.912-1.467 4.477c2.65.105 5.047.854 6.844 2.021.494-.464 1.144-.719 1.833-.719 1.498 0 2.718 1.213 2.718 2.711 0 .987-.54 1.886-1.378 2.365.029.255.059.494.059.749-.015 3.938-4.806 7.143-10.72 7.143l-.034.009zm8.179-19.187c-.74 0-1.34.599-1.34 1.338 0 .738.6 1.34 1.34 1.34.732 0 1.33-.6 1.33-1.334 0-.733-.598-1.332-1.347-1.332l.017-.012z" fill="#ffffff" /></svg>
        </a>
        <a aria-label="twitter" title="twitter" href="https://twitter.com/myetherwallet" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          <svg width="24" height="24" class="footer__icon" aria-labelledby="twitter icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" fill="#ffffff" /></svg>
        </a>
        <a aria-label="facebook" title="facebook" href="https://www.facebook.com/MyEtherWallet/" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          <svg width="24" height="24" class="footer__icon" aria-labelledby="facebook icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" fill="#ffffff" /></svg>
        </a>
        <a aria-label="medium" title="medium" href="https://medium.com/@myetherwallet" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          <svg width="24" height="24" class="footer__icon" aria-labelledby="medium icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.45 2.67l5.38 11.74H13c.86-1.93 1.6-3.91 2.4-5.87s1.6-3.9 2.35-5.86h5.66a3.67 3.67 0 0 1-.24.35c-.42.47-.83 1-1.28 1.41a1.61 1.61 0 0 0-.48 1.23v13a1.08 1.08 0 0 0 .38.86c.44.39.86.8 1.28 1.21l.41.42h-8.77a2.81 2.81 0 0 1 .26-.33c.41-.39.82-.79 1.25-1.16a1.22 1.22 0 0 0 .44-1V9.33c0-.44 0-.88.07-1.31V7.3h-.13c-.08.16-.18.31-.24.48l-5.3 13c-.07.18-.16.35-.25.52h-.12L4.23 7.16h-.14V16.42a1.93 1.93 0 0 0 .43 1.26c.77 1 1.52 2 2.28 3 .1.13.18.27.32.46H.5c.1-.17.17-.29.25-.39.79-1.05 1.59-2.11 2.39-3.15a1.81 1.81 0 0 0 .4-1.17v-10a1.51 1.51 0 0 0-.33-1C2.57 4.67 2 3.85 1.34 3c-.07-.1-.13-.21-.23-.36z" fill="#ffffff" /></svg>
        </a>
        <a aria-label="linkedin" title="linkedin" href="https://www.linkedin.com/company/myetherwallet" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          <svg width="24" height="24" class="footer__icon" aria-labelledby="linkedin icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#ffffff" /></svg>
        </a>
        <a aria-label="github" title="github" href="https://github.com/MyEtherWallet" target="_blank" rel="noopener noreferrer" role="link" tabindex="0">
          <svg width="24" height="24" class="footer__icon" aria-labelledby="github icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#ffffff" /></svg>
        </a>
      </p>

    </section>

  </article>

</div>


</footer>

@@if (site === 'mew' ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "mew" } ) }
@@if (site === 'cx'  ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "cx"  } ) }

@@if (site === 'mew' ) { @@include( './onboardingModal.tpl',   { "site": "mew" } ) }
@@if (site === 'cx'  ) { @@include( './onboardingModal.tpl',   { "site": "cx"  } ) }


</main>
</body>
</html>
