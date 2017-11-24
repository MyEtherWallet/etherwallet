<article class="modal fade" id="onboardingModal" tabindex="-1" ng-controller='onboardingCtrl'>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">




        <article class="onboarding__modal" ng-show="currentOnboardSlide==1">
          <h3 class="onboarding__title">
            Welcome to MyEtherWallet.com
          </h3>
          <section class="row row--flex">
            <div class="col-sm-7 onboarding__content">
              <ul>
                <li class="text-danger strong">
                  Please take some time to read &amp; understand this for your own safety. 🙏
                </li>
                <li class="text-danger strong">
                  Your funds will be stolen if you do not head these warnings.
                </li>
                <li class="strong">
                  We know this click-through shit is annoying. We are sorry.
                </li>
                <li>
                  Even if you have been around for a while, perhaps you will learn something new, or can use this information to help others be safer.
                </li>
              </ul>
              <h5> What is MEW? </h5>
              <ul>
                <li>
                  MyEtherWallet is a free, open-source, client-side interface.
                </li>
                <li>
                  We allow you to interact directly with the blockchain while remaining in full control of your keys &amp; your funds.
                </li>
                <li>
                  **You** and **only you** are responsible for your security.
                </li>
              </ul>
            </div>
            <div class="col-sm-5 onboarding__image">
              <img src="./images/onboarding_icon-01.svg" width="100%" height="auto" />
            </div>
          </section>
          <div class="onboarding__buttons text-center">
            <a ng-click="currentOnboardSlide=2" class="btn btn-primary">
              MyEtherWallet is not a Bank
            </a>
          </div>
        </article>



        <article class="onboarding__modal" ng-show="currentOnboardSlide==2">
          <h3 class="onboarding__title">
            MyEtherWallet is not a Bank
          </h3>
          <section class="row row--flex">
            <div class="col-sm-4 onboarding__image">
              <img src="./images/onboarding_icon-02.svg" width="100%" height="auto" />
            </div>
            <div class="col-sm-8 onboarding__content">
              <ul>
                <li>
                  When you open a bank account, a banker creates an account for you in their system.
                </li>
                <li>
                  The bank keeps track of your personal information, account passwords, balances, transactions and ultimately your money.
                </li>
                <li>
                  They charge fees to manage your account and provide services, like refunding transactions when your card gets stolen.
                </li>
                <li>
                  You can write a check or charge your debit card to send money, go online to check your balance, reset your password, and get a new debit card if you lose it.
                </li>
                <li>
                  You have an account *with the bank* and they decide how much money you can send, where you can send it, and how long to hold on a suspicious deposit. All for a fee.
                </li>
              </ul>
            </div>
          </section>
          <div class="onboarding__buttons">
            <a ng-click="currentOnboardSlide=1" class="btn btn-default">
              Introduction
            </a>
            <a ng-click="currentOnboardSlide=3" class="btn btn-primary">
              MyEtherWallet is an Interface
            </a>
          </div>
        </article>




        <article class="onboarding__modal" ng-show="currentOnboardSlide==3">
          <h3 class="onboarding__title">
            MyEtherWallet is an Interface
          </h3>
          <section class="row row--flex">
            <div class="col-sm-4 onboarding__image">
              <img src="./images/onboarding_icon-03.svg" width="100%" height="auto" />
            </div>
            <div class="col-sm-8 onboarding__content">
              <ul>
                <li>
                  When you create an account here, you are generating an cryptographic set of numbers: your private key and your public key (address).
                </li>
                <li>
                  If you send your *public key (address)* to someone, they can send you ETH or tokens. 👍
                </li>
                <li>
                  If you send your *private key* to someone, they now have full control of your account. 👎
                </li>
                <li>
                  The handling of your keys happens entirely on your computer, inside your browser.
                </li>
                <li>
                  We never transmit, receive or store your private key, password, or other account information.
                </li>
                <li>
                  We do not charge a transaction fee.
                </li>
                <li>
                  You are just using our **interface** to interact **directly with the blockchain**.
                </li>
              </ul>
            </div>
          </section>
          <div class="onboarding__buttons">
            <a ng-click="currentOnboardSlide=2" class="btn btn-default">
              MEW isn't a Bank
            </a>
            <a ng-click="currentOnboardSlide=4" class="btn btn-primary">
              WTF is a Blockchain?
            </a>
          </div>
          <p ng-click="currentOnboardSlide=5" class="text-right small" style="cursor:pointer">
            I already know what a blockchain is...
          </p>
        </article>



        <article class="onboarding__modal" ng-show="currentOnboardSlide==4">
          <h3 class="onboarding__title">
            Wait, WTF is a Blockchain?
          </h3>
          <section class="row row--flex">
            <div class="col-sm-8 onboarding__content">
              <ul>
                <li>
                  The blockchain is like a huge, global, decentralized spreadsheet.
                </li>
                <li>
                  It keeps track of who sent how many coins to whom, and what the balance of every account is.
                </li>
                <li>
                  It is stored and maintained by thousands of people (miners) across the globe who have special computers.
                </li>
                <li>
                  It is made up of all the individual transactions sent from MyEtherWallet, MetaMask, Exodus, Mist, Geth, Parity, and everywhere else.
                </li>
                <li>
                  When you see your balance on MyEtherWallet.com or view your transactions on [etherscan.io](https://etherscan.io), you are seeing data on the blockchain, not in our personal systems.
                </li>
                <li>
                   Again: <strong>we are not a bank</strong>.
                </li>
              </ul>
            </div>
            <div class="col-sm-4 onboarding__image">
              <img src="./images/onboarding_icon-04.svg" width="100%" height="auto" />
            </div>
          </section>
          <div class="onboarding__buttons">
            <a ng-click="currentOnboardSlide=3" class="btn btn-default">
              MEW is an Interface
            </a>
            <a ng-click="currentOnboardSlide=5" class="btn btn-primary">
              But...why does this matter?
            </a>
          </div>
        </article>



        <article class="onboarding__modal" ng-show="currentOnboardSlide==5">
          <h3 class="onboarding__title">
            Why are you making me read all this?
          </h3>
          <section class="row row--flex">
            <div class="col-sm-4 onboarding__image">
              <img src="./images/onboarding_icon-05.svg" width="100%" height="auto" />
            </div>
            <div class="col-sm-8 onboarding__content">
              <h5>
                Because we need you to understand that we **cannot**...
              </h5>
              <ul>
                <li>Access your account or send your funds for you.</li>
                <li>Recover or change your private key.</li>
                <li>Recover or reset your password.</li>
                <li>Reverse, cancel, or refund transactions.</li>
                <li>Freeze accounts.</li>
              </ul>
              <h5>
                **You** and **only you** are responsible for your security.
              </h5>
              <ul>
                <li>
                   Be diligent to keep your private key and password safe. Your private key is sometimes called your mnemonic phrase, keystore file, UTC file, JSON file,  wallet file.
                </li>
                <li>
                  If lose your private key or password, no one can recover it.
                </li>
                <li>
                  If you enter your private key on a phishing website, you will have **all your funds taken**.
                </li>
              </ul>
            </div>
          </section>
          <div class="onboarding__buttons">
            <a ng-click="currentOnboardSlide=4" class="btn btn-default">
              WTF is a Blockchain?
            </a>
            <a ng-click="currentOnboardSlide=6" class="btn btn-primary">
              What's the Point of MEW then?
            </a>
          </div>
        </article>



        <article class="onboarding__modal" ng-show="currentOnboardSlide==6">
          <h3 class="onboarding__title">
            If MyEtherWallet can't do those things, what's the point?
          </h3>
          <section class="row row--flex">
            <div class="col-sm-4 onboarding__image">
              <img src="./images/onboarding_icon-06.svg" width="100%" height="auto" />
            </div>
            <div class="col-sm-8 onboarding__content">
              <ul>
                <li>
                  Because that is the point of decentralization and the blockchain.
                </li>
                <li>
                  You don't have to rely on your bank, government, or anyone else when you want to move your funds.
                </li>
                <li>
                  You don't have to rely on the security of an exchange or bank to keep your funds safe.
                </li>
                <li>
                  If you don't find these things valuable, ask yourself why you think the blockchain and cryptocurrencies are valuable. 😉
                </li>
                <li>
                  If you don't like the sound of this, consider using [Coinbase](https://www.coinbase.com/) or [Blockchain.info](https://blockchain.info/wallet/#/signup). They have more familiar accounts with usernames &amp; passwords.
                </li>
                <li>
                  If you are scared but want to use MEW, [get a hardware wallet](https://myetherwallet.github.io/knowledge-base/hardware-wallets/hardware-wallet-recommendations.html)! These keep your keys secure.
                </li>
              </ul>
            </div>
          </section>
          <div class="onboarding__buttons">
            <a ng-click="currentOnboardSlide=5" class="btn btn-default">
              But...why?
            </a>
            <a ng-click="currentOnboardSlide=7" class="btn btn-primary">
              How To Protect Yourself &amp; Your Funds
            </a>
          </div>
        </article>



        <article class="onboarding__modal" ng-show="currentOnboardSlide==7">
          <h3 class="onboarding__title">
            How To Protect Yourself from Phishers
          </h3>
          <p>
            Phishers send you a message with a link to a website that looks just like MyEtherWallet, EtherDelta, Paypal, or your bank, but is not the real website. They steal your information and then steal your money.
          </p>
          <section class="row row--flex">
            <div class="col-sm-8 onboarding__content">
              <ul>
                <li>
                  Use the [EAL](https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn) or [MetaMask](https://myetherwallet.github.io/knowledge-base/migration/moving-from-private-key-to-metamask.html) Chrome Extension to block malicious websites.
                </li>
                <li>
                  Always check the URL: `https://www.myetherwallet.com`.
                </li>
                <li>
                  Always make sure the URL bar has `MYETHERWALLET LLC [US]` in green.
                </li>
                <li>
                  Do not trust messages or links sent to you randomly via email, Slack, Reddit, Twitter, etc.
                </li>
                <li>
                 Always navigate directly to a site before you enter information. Do not enter information after clicking a link from a message or email.
                </li>
                <li>
                  [Install an AdBlocker](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en) and do not click ads on your search engine (e.g. Google).
                </li>
              </ul>
            </div>
            <div class="col-sm-4 onboarding__image">
              <img src="./images/onboarding_icon-07.svg" width="100%" height="auto" />
            </div>
          </section>
          <div class="onboarding__buttons">
            <a ng-click="currentOnboardSlide=6" class="btn btn-default">
              What's the point?
            </a>
            <a ng-click="currentOnboardSlide=8" class="btn btn-primary">
              How To Protect Yourself from Scams
            </a>
          </div>
        </article>



        <article class="onboarding__modal" ng-show="currentOnboardSlide==8">
          <h3 class="onboarding__title">
            How To Protect Yourself from Scams
          </h3>
          <p class="text-center">
            People will try to get you to give them money in return for nothing.
          </p>
          <br />
          <section class="row row--flex">
            <div class="col-sm-8 onboarding__content">
              <ul>
                <li>
                  If it is too good to be true, it probably is.
                </li>
                <li>
                  Research before sending money to someone or some project. Look for information on a variety of websites and forums. Be wary.
                </li>
                <li>
                  Ask questions when you don't understand something or it doesn't seem right.
                </li>
                <li>
                  Don't let fear, FUD, or FOMO win over common sense. If something is very urgent, ask yourself 'why?'. It may be to create FOMO or prevent you from doing research.
                </li>
              </ul>
            </div>
            <div class="col-sm-4 onboarding__image">
              <img src="./images/onboarding_icon-08.svg" width="100%" height="auto" />
            </div>
          </section>
          <div class="onboarding__buttons">
            <a ng-click="currentOnboardSlide=7" class="btn btn-default">
              Phuck Phishers
            </a>
            <a ng-click="currentOnboardSlide=9" class="btn btn-primary">
              How To Protect Yourself from Loss
            </a>
          </div>
        </article>



        <article class="onboarding__modal" ng-show="currentOnboardSlide==9">
          <h3 class="onboarding__title">
            How To Protect Yourself from Loss
          </h3>
          <p class="text-center">
            If you lose your private key or password, it is gone forever. Don't lose it.
          </p>
          <section class="row row--flex">
            <div class="col-sm-7">
              <ul>
                <li>
                  Make a backup of your private key and password. Do NOT just store it on your computer. Print it out on a piece of paper or save it to a USB drive.
                </li>
                <li>
                  Store this paper or USB drive in a different physical location. A backup is not useful if it is destroyed by a fire or flood along with your laptop.
                </li>
                <li>
                  Do not store your private key in Dropbox, Google Drive, or other cloud storage. If that account is compromised, your funds will be stolen.
                </li>
                <li>
                  If you have more than 1-week's worth of pay worth of cryptocurrency, get a hardware wallet. No excuses. It's worth it. I promise.
                </li>
                @@if (site === 'cx'  ) {
                  <li translate="CX_Warning_1">
                    Make sure you have **external backups**. Chrome Extensions are not 100% reliable. Many things could happen that would cause loss, including uninstalling the extension. This is an easy way to access your wallets, **not** a way to back them up.
                  </li>
                }
              </ul>
            </div>
            <div class="col-sm-4 onboarding__image">
              <img src="./images/onboarding_icon-09.svg" width="100%" height="auto" />
            </div>
          </section>
          <h5 class="text-center">
            [Even more Security Tips!](https://myetherwallet.github.io/knowledge-base/getting-started/protecting-yourself-and-your-funds.html)
          </h5>
          <div class="onboarding__buttons">
            <a ng-click="currentOnboardSlide=8" class="btn btn-default">
              Screw Scams
            </a>
            <a ng-click="currentOnboardSlide=10" class="btn btn-primary">
              One more click &amp; you're done! 🤘
            </a>
          </div>
        </article>



        <article class="onboarding__modal" ng-show="currentOnboardSlide==10">
          <h3 class="onboarding__title">
            Alright, I'm done lecturing you!
          </h3>
          <p class="text-center">
            Sorry for being like this. Onwards!
          </p>
          <br
          <section class="row row--flex">
            <div class="col-sm-4 col-sm-offset-1">
              <img src="./images/onboarding_icon-10.svg" width="100%" height="auto" />
            </div>
            <div class="col-sm-7">
              <ul>
                <li>
                  <a ng-click="onboardingModal.close();globalService.currentTab=globalService.tabs.generateWallet.id"
                     class="strong">
                    Create a wallet
                  </a>
                </li>
                <li>
                  <a href="https://myetherwallet.github.io/knowledge-base/hardware-wallets/hardware-wallet-recommendations.html"
                     target="_blank" rel="noopener noreferrer" class="strong">
                      Get a hardware wallet
                  </a>
                </li>
                <li>
                  <a href="https://myetherwallet.github.io/knowledge-base/migration/moving-from-private-key-to-metamask.html"
                     target="_blank" rel="noopener noreferrer" class="strong">
                    How to Set up MEW + MetaMask
                  </a>
                </li>
                <li>
                  <a href="https://myetherwallet.github.io/knowledge-base/offline/running-myetherwallet-locally.html"
                     target="_blank" rel="noopener noreferrer" class="strong">
                    How to Run MEW Offline / Locally
                  </a>
                </li>
                <li>
                  <a href="https://myetherwallet.github.io/knowledge-base/migration/moving-from-private-key-to-ledger-hardware-wallet.html"
                     target="_blank" rel="noopener noreferrer" class="strong">
                    How to Send via Ledger hardware wallet
                  </a>
                </li>
                <li>
                  <a href="https://myetherwallet.github.io/knowledge-base/hardware-wallets/trezor-sending-to-trezor-device.html"
                     target="_blank" rel="noopener noreferrer" class="strong">
                    How to Send via TREZOR hardware wallet
                  </a>
                </li>
                <li>
                  <a href="https://myetherwallet.github.io/knowledge-base/migration/moving-from-private-key-to-metamask.html"
                     target="_blank" rel="noopener noreferrer" class="strong">
                       How to Send via MetaMask
                  </a>
                </li>
                <li>
                  <a href="https://myetherwallet.github.io/knowledge-base/"
                     target="_blank" rel="noopener noreferrer" class="strong">
                       Learn More or Contact Us
                  </a>
                </li>
                <li>
                  <a ng-click="onboardingModal.close();globalService.currentTab=globalService.tabs.sendTransaction.id"
                     class="strong">
                       OMG, please just let me send FFS.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>



      </div>
    </div>
  </div>
</article>
