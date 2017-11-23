<article class="modal fade" id="onboardingModal" tabindex="-1" ng-controller='onboardingCtrl'>
  <section class="modal-dialog">
    <section class="modal-content">

      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal">&times;</button>



        <div class="onboarding-modal__1" ng-show="currentOnboardSlide==1">
          <h3> Welcome to MyEtherWallet </h3>
          <ul>
            <li>
              MyEtherWallet is a free, open-source, client-side interface
            </li>
            <li>
              MyEtherWallet allows you to interact with the blockchain while remaining in full control of your keys &amp; your funds.
            </li>
            <li>
              In order to ensure your funds are secure, **please take the time to read this.**
            </li>
            <li>
              We understand it's annoying, but we are hurt when we see loss. It only takes one mistake.
            </li>
            <li>
              Even if you have been around for a while, perhaps you will learn something new, or can use this information to help others be safer.
            </li>
          </ul>
          <div class="clearfix">
            <a ng-click="currentOnboardSlide=2"
               class="btn btn-primary pull-right">
              Next: MyEtherWallet is not a Bank
            </a>
          </div>
        </div>



        <div class="onboarding-modal__2" ng-show="currentOnboardSlide==2">
          <h3> MyEtherWallet is not a Bank </h3>
          <ul>
            <li>
              When you open a bank account, the bank creates an account for you.
            </li>
            <li>
              The bank keeps track of your personal information, account passwords, balances, transactions and ultimately your money.
            </li>
            <li>
              They charge a fee to manage your account and enable services like reversing transactions when your card gets stolen.
            </li>
            <li>
              You can go online and look at your balance, write a check or use your debit card to send money, reset your password, and get a new debit card if you lose it.
            </li>
          </ul>
          <div class="clearfix">
            <a ng-click="currentOnboardSlide=1"
               class="btn btn-default">
              Prev: Introduction
            </a>
            <a ng-click="currentOnboardSlide=3"
               class="btn btn-primary pull-right pull-right">
              Next: MyEtherWallet is an Interface
            </a>
          </div>
        </div>

        <div class="onboarding-modal__3" ng-show="currentOnboardSlide==3">
          <h3> MyEtherWallet is an Interface </h3>
          <ul>
            <li>
              When you create an account using MyEtherWallet.com, you are generating an account using our interface.
            </li>
            <li>
              It happens entirely on your computer inside your browser.
            </li>
            <li>
              We never receive, store or transmit your private keys, account information, or  password.
            </li>
            <li>
              We do not take a transaction fee or charge you anything to use MyEtherWallet.com
            </li>
          </ul>

          <div class="clearfix">
            <a ng-click="currentOnboardSlide=2"
               class="btn btn-default">
              Prev: MyEtherWallet is not a Bank
            </a>
            <a ng-click="currentOnboardSlide=4"
               class="btn btn-primary pull-right pull-right">
              Next: WTF is a Blockchain?
            </a>
          </div>
        </div>



        <div class="onboarding-modal__4" ng-show="currentOnboardSlide==4">
          <h3>Wait, WTF is a Blockchain?</h3>
          <ul>
            <li>
              The blockchain is like a huge, global, decentralized spreadsheet and keeps track of who sent how many coins to whom and what balance of an account is.
            </li>
            <li>
              It is made up of all the individual transactions people send from MyEtherWallet, MetaMask, Exodus, Mist, Geth, Parity, and everywhere else.
            </li>
            <li>
              When you see your balance on MyEtherWallet.com or see your transactions on [etherscan.io](https://etherscan.io), we are showing you the information stored on the blockchain, not our personal servers.
            </li>
            <li>
               Remember: we are not a bank.
            </li>
          </ul>
          <div class="clearfix">
            <a ng-click="currentOnboardSlide=3"
               class="btn btn-default">
              Prev: MyEtherWallet is an Interface
            </a>
            <a ng-click="currentOnboardSlide=5"
               class="btn pull-right btn-primary">
              Next: But...why?
            </a>
          </div>
        </div>



        <div class="onboarding-modal__5" ng-show="currentOnboardSlide==5">
          <h3>
            Why are you making me read all this?
          </h3>
          <p>
            Because we need you to understand that we **cannot**:
          </p>
          <ul>
            <li>Recover your private key</li>
            <li>Access you account</li>
            <li>Recover or reset your password</li>
            <li>Reverse or cancel or refund transactions</li>
            <li>Freeze accounts</li>
            <li>Send your ETH or Tokens from one address to another</li>
          </ul>
          <h5>
            It also means that **you** and only you are responsible for the security of your confidential account information.
          </h5>
          <ul>
            <li>
               Your wallet or account is your private key, mnemonic phrase, keystore file, and/or password.
            </li>
            <li>
              If you give any of these to someone, they can send your funds and no one can stop them.
            </li>
            <li>
              We cannot reset your password, move your funds for you, freeze accounts, or reverse any transactions.
            </li>
          </ul>
          <div class="clearfix">
            <a ng-click="currentOnboardSlide=4"
               class="btn btn-default">
              Prev: WTF is a Blockchain?
            </a>
            <a ng-click="currentOnboardSlide=6"
               class="btn btn-primary pull-right">
              Next: What's the Point?
            </a>
          </div>
        </div>



        <div class="onboarding-modal__6" ng-show="currentOnboardSlide==6">
          <h3>
            If MyEtherWallet can't do those things, what is the point?
          </h3>
          <ul>
            <li>
              Because that is the point of decentralization and the blockchain.
            </li>
            <li>
              You don't have to rely on your bank, government, or anyone else if you want to move your money.
            </li>
            <li>
              You don't have to rely on the security of an exchange or bank to keep your account safe.
            </li>
            <li>
              If you don't find these things valuable, we strongly recommend you ask yourself why you think the blockchain and cryptocurrencies are valuable. 😉
            </li>
            <li>
              If you don't understand this or like it, consider using [Coinbase](https://www.coinbase.com/) or [Blockchain.info](https://blockchain.info/wallet/#/signup). They have more familiar accounts with usernames &amp; passwords.
            </li>
            <li>
              If you are scared, [get a hardware wallet!](https://myetherwallet.github.io/knowledge-base/hardware-wallets/hardware-wallet-recommendations.html) These keep your keys offline and prevent phishers from stealing your funds.
            </li>
          </ul>
          <div class="clearfix">
            <a ng-click="currentOnboardSlide=5"
               class="btn btn-default">
              Prev: But...why?
            </a>
            <a ng-click="currentOnboardSlide=7"
               class="btn btn-primary pull-right">
              Next: Protecting Yourself &amp; Your Funds
            </a>
          </div>
        </div>



        <div class="onboarding-modal__7" ng-show="currentOnboardSlide==7">
          <h5>
            The blockchain is pretty cool &amp; futuristic, as long as you take precautions and keep your account safe.
          </h5>

          <h3>Protecting Yourself Against Phishers</h3>
          <p>
            Phishers send you a message with a link that goes to a website that looks like MyEtherWallet, EtherDelta, Paypal, or your bank but is not the real website. They steal your information and then steal your money.
          </p>
          <ul>
            <li>
              Install
              <a href="https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn" target="_blank" rel="noopener noreferrer">EAL</a>
              or use
              <a href="https://myetherwallet.github.io/knowledge-base/migration/moving-from-private-key-to-metamask.html" target="_blank" rel="noopener noreferrer">MetaMask</a> to block malicious websites.
            </li>
            <li>
              Always make sure the URL is correct (e.g. `https://www.myetherwallet.com`)
            </li>
            <li>
              Always make sure the top bar has `MYETHERWALLET LLC [US]` in green.
            </li>
            <li>
              Do not trust messages and links sent to you randomly via email, Slack, Reddit, Twitter, etc.
            </li>
            <li>
              Always question and verify the information.
            </li>
            <li>
             Always navigate directly to any site that you enter personal information rather than clicking a link from a message or email.
            </li>
            <li>
              Install an adblocker and do not click ads on Google or Bing or Yahoo or wherever.
            </li>
            <li>
              [Read the rest of our tips.](https://myetherwallet.github.io/knowledge-base/getting-started/protecting-yourself-and-your-funds.html)
            </li>
          </ul>

          <div class="clearfix">
            <a ng-click="currentOnboardSlide=6"
               class="btn btn-default">
              Prev: What's the point?
            </a>
            <a ng-click="currentOnboardSlide=8"
               class="btn btn-primary pull-right">
              Next: Protecting Yourself Against Scams
            </a>
          </div>

        </div>



        <div class="onboarding-modal__8" ng-show="currentOnboardSlide==8">

          <h3>Protecting Yourself Against Scams</h3>
          <p>
            People will try to get you to give them money in return for nothing.
          </p>
          <ul>
            <li>
              If it is too good to be true, it probably is.
            </li>
            <li>
              Research before sending money to someone or some project. Do research about a project on a variety of websites and forums, ask questions, and be wary.
            </li>
            <li>
              Ask questions when you don't understand something or it doesn't seem right.
            </li>
          </ul>

          <div class="clearfix">
            <a ng-click="currentOnboardSlide=7"
               class="btn btn-default">
              Prev: No Phishers
            </a>
            <a ng-click="currentOnboardSlide=9"
               class="btn btn-primary pull-right">
              Next: Protecting Yourself Against Loss
            </a>
          </div>
        </div>



        <div class="onboarding-modal__9" ng-show="currentOnboardSlide==9">

          <h3> Protecting Yourself Against Loss </h3>
          <p>
            If you lose your account information, it is gone forever. No one can recover it for you. Don't lose it.
          </p>
          <ul>
            <li>
              Make a backup of your private key and password that is NOT on your computer&mdash;like a piece of paper or USB drive.
            </li>
            <li>
              Do not store your private key in Dropbox, Google Drive, or other cloud storage
            </li>
            <li>
              If you have more than 1 weeks pay in cryptocurrency, get a hardware wallet. No excuses.
            </li>
            @@if (site === 'cx'  ) {
              <li translate="CX_Warning_1">
                Make sure you have **external backups** of any wallets. Many things could happen that would cause you to lose the data in this Chrome Extension, including uninstalling the extension. This extension is a way to easily access your wallets, **not** a way to back them up.
              </li>
            }
          </ul>

          <h4> [More Tips can be found here.](https://myetherwallet.github.io/knowledge-base/getting-started/protecting-yourself-and-your-funds.html) </h4>

          <div class="clearfix">
            <a ng-click="currentOnboardSlide=8"
               class="btn btn-default">
              Prev: No Scams
            </a>
            <a ng-click="currentOnboardSlide=10"
               class="btn btn-primary pull-right">
              Next: Alright, I'm done lecturing you now!
            </a>
          </div>

        </div>



        <div class="onboarding-modal__10" ng-show="currentOnboardSlide==10">
          <h3> Alright, I'm done lecturing you now! </h3>

          <p>
            Sorry for being like this. What's next?
          </p>

          <ul>
            <li>
              <a ng-click="globalService.currentTab=globalService.tabs.generateWallet.id"
               target="_blank" rel="noopener noreferrer">
                Create a wallet
              </a>
            </li>
            <li>
              <a href="https://myetherwallet.github.io/knowledge-base/hardware-wallets/hardware-wallet-recommendations.html"
               target="_blank" rel="noopener noreferrer">
                Get a hardware wallet
              </a>
            </li>
            <li>
              <a href="https://myetherwallet.github.io/knowledge-base/migration/moving-from-private-key-to-metamask.html"
               target="_blank" rel="noopener noreferrer">
                Set up MEW + MetaMask
              </a>
            </li>
            <li>
              <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id"
               href="https://myetherwallet.github.io/knowledge-base/migration/moving-from-private-key-to-ledger-hardware-wallet.html"
               target="_blank" rel="noopener noreferrer">
                Send via Ledger hardware wallet
              </a>
            </li>
            <li>
              <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id"
               href="https://myetherwallet.github.io/knowledge-base/hardware-wallets/trezor-sending-to-trezor-device.html"
               target="_blank" rel="noopener noreferrer">
                Send via TREZOR hardware wallet
              </a>
            </li>
            <li>
              <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id"
               href="https://myetherwallet.github.io/knowledge-base/migration/moving-from-private-key-to-ledger-hardware-wallet.html"
               target="_blank" rel="noopener noreferrer">
                Send via MetaMask
              </a>
            </li>
            <li>
              <a ng-click="globalService.currentTab=globalService.tabs.sendTransaction.id"
               target="_blank" rel="noopener noreferrer">
                Send via private key or keystore file
              </a>
            </li>
          </ul>

          <div class="clearfix">
            <a ng-click="currentOnboardSlide=9"
               class="btn btn-default">
              Prev: Protecting Yourself &amp; Your Funds
            </a>
          </div>
        </div>



      </div>
    </section>
  </section>
</article>
