<!-- help -->
<div class="tab-pane" id="paneHelp" style="display: none;">
  <h2> Help </h2>
  <p>
    Do you see something missing? Have another question? <a id="contact" class="ptabs" showId="paneContact">Get in touch with us</a> and we will not only answer your question, we will update this page to be more useful to people in the future!
  </p>

  <h3> First, a reminder </h3>
  <ul>
    <li>Please DON'T save wallets with more Ether than you are willing to lose. This applies to all wallets and everything Ethereum while we are in Frontier.</li>
    <li>Please, DON'T forget to save your private key / password when you create a new wallet. Save them externally - not just on your computer! We wrote thorough instructions on this page</li>
    <li>Please DO make sure you are sending to the correct address.</li>
    <li>Please DO reach out to us (click contact above) with any and all feedback you have, especially little bugs, things that confused you, or error messages that don't make sense / have typos.</li>
  </ul>
    <p>MyEtherWallet.com and MyEtherWallet CX are not "web wallets". You do not create an account or give us your Ether to hold onto. All data is created on our computer/your browser, not our servers. It's not a website where you put your Ether and we store them for you. We just make it easy for you to save your wallet information in your browser/on your computer. Then we give you a place you to access that information and do stuff with it.</p>


  <h3> How To Create a New Wallet </h3>
  <ol>
    <li> Go to the <a id="generate-wallet" class="ptabs" showId="paneWalgen">"Generate Wallet"</a> tab.</li>
    <li> Create a strong password, preferably using a random password generator. Save this somewhere safe. <em><small>The password encrypts the private key for this wallet. You will need this password to send transactions.</small></em></li>
    <li> Copy the password from where you have saved it and paste it into the "Enter a password" field.</li>
    <li> Click "GENERATE".</li>
    <li> Your wallet has now been generated. But, you are NOT done yet!</li>
    <li> Save the address. You can keep it to yourself or share it with others. That way, others can transfer ether to you. You may know this as your account # or public key.</li>
    <li> Save the private key. Do not show it to anyone else. Your private key is necessary when you want to access your wallet to move it, spend it, or send it! </li>
    <li> Save the JSON file. This is just an different way of accessing your wallet and contains your private key.</li>
    <li> If you have a printer, use the print functionality to get a paper version of your wallet. You can also "print" this and save it as a PDF</li>
    <li> Seriously: You NEED the private key and password in order to access your account and Ether in the future. We do not save anything to our servers and cannot help you recover your funds if you lose your private key/JSON file and password.</li>
    <li> Next: Backup your wallet. See below. </li>
    <li> Then: Verify that you can successfully access you wallet <strong>before</strong> sending any Ether to this wallet. See below.</li>
  </ol>
  <p> Note: If you save the encrypted Private Key or encrypted JSON file, you will need the password you chose upon creating the wallet to decrypt it. If you saved the unencrypted version, you do not need your password.</p>
  <p> Note: MyEtherWallet can decrypt geth / pre-sale wallets, but geth <strong> cannot </strong> decrypt wallets encrypted by MyEtherWallet. We allow you to save both the encrypted and decrypted private keys / JSON files on MyEtherWallet. If you plan on not touching a wallet created on MyEtherWallet for a long, long time it may be prudent to save the unencrypted private key / JSON file so you can access it via geth, the official Ethereum GUI wallet, or whatever else is around in the distant future.</p>
  </ol>


  <h3> How do I save/backup my wallet externally?</h3>
  <p> You should always back up your wallet externally - like on a flash drive, in cloud storage (Dropbox, etc), and/or a piece of paper.</p>
  <ol>
    <li>Save the password in a text document.</li>
    <li>Save the address in that text document.</li>
    <li>Save the private key in that text document.</li>
    <li> Place all this information in a folder, along with your JSON file, PDF version of your paper wallet, and whatever other information you would like to keep.</li>
    <li> Take this folder and place it on a USB drive. Store this USB drive in a place securely, in a separate location from your computer. Maybe that place is at your office (don't forget it when you're rich off Ether & ragequit!), at your parent's or another family member's house, in a storage locker, etc. For added security, you can encrypt that USB drive using the following guides: <a href="http://computerbeginnersguides.com/blog/2015/09/03/encrypt-a-usb-flash-drive-with-bitlocker-in-windows-10-professional-or-enterprise/" target="_blank">Windows</a> or <a href="http://www.theinstructional.com/guides/encrypt-an-external-disk-or-usb-stick-with-a-password" target="_blank">Mac</a>.</li>
    <li> Print the wallet if you have a printer. Otherwise, write down on a piece of paper your: password, address, and private key (unencrypted). Again, store this as a secure location, separate from your computer and the USB drive.</li>
    <li> Now, if your house burns down you still have a USB drive and a piece of paper. If your HDD crashes, you still have a USB drive and a piece of paper.</li>
  </ol>


  <h3> How do I verify I have access to my new wallet?</h3>
  <p> <strong> Before you send any Ether to your new wallet</strong>, you should ensure you have access to it. You should NOT copy and paste from the generate wallet tab, but instead copy and paste from the text document or paper where you have stored your wallet information.</p>
  <ol>
    <li> Go to the send transaction tab.</li>
    <li>Navigate to the <a id="send-transaction" class="ptabs" showId="paneSendTrans">"Send Transaction"</a> tab</li>
    <li> Upload your wallet file (your JSON file) -or- paste your private key. </li>
    <li> If the wallet is the encrypted, a text box will automatically appear. Enter the password here.</li>
    <li> Click the "Decrypt" button. </li>
    <li> Your wallet information should show up. The account address is on the left side, underneath a colorful icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document. </li>
    <li> That's it. You can now send ETH to that address and be certain you can access it!</li>
  </ol>


  <h3> How to Transfer Ether from One Wallet to Another </h3>
  <p> Once you have saved and backed up all information <strong> and </strong> verified you have access to your new wallet, you can transfer some Ether to that new wallet.</p>
  <p><strong>Before you start,</strong> If you plan to move a large amount of ether, you should test sending a small amount first to make sure everything goes smoothly. After making the small transaction, it should show up in a blockchain explorer, e.g. <a href="https://www.etherchain.org" target="_blank">https://www.etherchain.org</a>. Make sure that you have access to the address you sent to!</p>
  <ol>
    <li> Navigate to the <a id="send-transaction" class="ptabs" showId="paneSendTrans">"Send Transaction"</a> tab</li>
    <li> Paste or upload your private key/JSON of wallet you want to transfer from.</li>
    <li> If the wallet is the encrypted, a text box will automatically appear. Enter the password here.</li>
    <li> Click the "Decrypt" button. </li>
    <li> You will now see your account information. It'll show your address, your balance, and have a space for the <em>Receiving Address</em> and the <em>Amount you want to send</em>.</li>
    <li> Enter the address you would like to send to in the "To Address:" field.</li>
    <li> Enter the amount you would like to send. You can also click the [Click here to transfer total available balance] link if you would like the transfer the entire balance.</li>
    <li> A couple more fields will appear. This is the program generating the transaction.</li>
    <li> Click the blue "SEND TRANSACTION" button below that.</li>
    <li> A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction."</li>
    <li>The transaction will be submitted. The TX ID will display. You can copy that TX ID and paste it into the search bar on a blockchain explorer to verify the transaction went through.</li>
    <li> Success! </li>
  </ol>
  <p> Note: Some people have been accidentally typing addresses without the prefix "0x". All addresses start with 0x. Others have been losing characters off the end. We have validation on our site that doesn't allow you to send to addresses without this prefix, and our validation verifies that the address you are sending to is valid. Regardless of any validation measures in place on our site or other sites, ALWAYS BE CAREFUL. DOUBLE CHECK YOUR ADDRESS BEFORE SENDING. PLEASE!</p>


  <h3> So, what is that password thing all about? </h3>
  <p>The password that you entered at the very beginning to create a new wallet / account is used to encrypt your private key. This enables you to have a safer version of your private key file.</p>
  <p> Basically, all it means is when you upload your private key file, you will also need to enter the password to decrypt it.</p>
  <p> MyEtherWallet can decrypt geth / pre-sale wallets, but geth <strong> cannot </strong> decrypt wallets encrypted by MyEtherWallet.</p>
  <p> We allow you to save both the encrypted and decrypted private keys / JSON files on MyEtherWallet. If you plan on not touching a wallet created on MyEtherWallet for a long, long time it may be prudent to save the unencrypted private key / JSON file so you can access it via geth, the official Ethereum GUI wallet, or whatever else is around in the distant future.</p>


  <h3> How does the Send Transaction work? </h3>
  <p> When you send a transaction, it only sends the signed transaction. Your private key safely stays with you.</p>

  <h3> What does "Gas Limit Too Low" Mean?</h3>
  <p> Most likely, this means you are attempting to send Ether to a contract. Sending to a contract requires a bit more data and therefore a bit more gas. Unfortuantely, we do not support sending to contracts right now (or including data with your transaction. We will in the very near future. Feel free to contact us and let us know how awesome we are and how much you want this feature to speed the development up. ;)</p>

  <h3>Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn't do this. Is the random number generation for MyEtherWallet safe?</h3>
  <p> While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren't unsafe, we (and tons of other crypto experments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here's a <a href="https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm" target="_blank">conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto</a> and here is the <a href="https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto" target="_blank">the window.crypto w3 spec</a>. </p>

  <h3> Why hasn't the wallet I just created show up in the blockchain explorer? (ie: etherchain, etherscan) </h3>
  <p> Addresses will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. </p>


  <h3> How do I check the balance of my account? </h3>
  <p> You can use a blockchain explorer like <a href="https://www.etherchain.org" target="_blank">etherchain.org</a> or <a href="http://etherscan.io/" target="_blank">etherscan.io</a>. Paste your address into the search bar and it will pull up your address and transaction history. For example, here's what our <a href="https://etherchain.org/account/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8" target="_blank">donation account</a> looks like on etherchain.org.</p>


  <h3> Where the hell is my geth wallet files? </h3>
  <ul>
    <li>Mac: <code>~/Library/Ethereum/keystore</code></li>
    <li>Linux: <code>~/.ethereum/keystore</code></li>
    <li>Windows: <code>%APPDATA%/Ethereum/keystore</code></li>
  </ul>


  <h3> Where is my pre-sale  wallet file?</h3>
  <p> Where ever you saved it. ;) It also was emailed to you, so check there. Look for the file called <code>"ethereum_wallet_backup.json"</code> and upload that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale.</p>


  <h3> What happens if your site goes down? </h3>
  <p>There seems to be a lot of confusion about what MyEtherWallet does. It's not a web wallet where you put your Ether and we store them for you. You don't have a login and nothing ever gets saved to our servers. It is simply an interface that allows you to do things you normally would do via command line.</p>
  <p>So, if MyEtherWallet goes down, you would have to find another way (like geth) to do what we are doing. But you wouldn't have to "get" your ether out of MyEtherWallet because it's not in MyEtherWallet. It's in whatever wallet your generated via our site.</p>
  <p>In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren't storing any information. If we do take the domain down, it still is, and always will be, publicly available at <a href="https://github.com/kvhnuke/etherwallet" target="_blank">https://github.com/kvhnuke/etherwallet</a>. You can download the ZIP there and run it locally.</p>


  <h3> Security </h3>
  <p> One of your first questions is, "Why should I trust these people?" You are probably worried that this site isn't secure. That is a good thing. When dealing with currency and the internet, you should be paranoid. But, let's try to be a bit reasonable.</p>
  <p> At this point, we have not had our code audited. Apparently, it costs a fair bit of money to get code audited. If you or a team you know would be willing to help us out in the auditing department, please let us know. <a href="https://www.reddit.com/r/ethereum/comments/3hh89n/could_someone_please_audit_ether_wallet/">Here is a reddit thread with another user asking for someone to audit us.</a> Reach out to us on reddit or github or <a id="contact" class="ptabs" showId="paneContact"> where ever</a>.</p>
  <p> Until someone / a group of people take the time to go through the code, here are some things to alleviate any paranoia you have:</p>
  <ul>
    <li>We've been up and running since August 2015. If you search for <a href="https://www.reddit.com/r/ethereum+ethtrader+EtherMining+EthereumProgramming+ethereumprojects+etherpool/search?q=myetherwallet&sort=relevance&t=all" target="_blank" />"myetherwallet" on reddit</a>, you can see numerous people who use us and no complaints or reports of stolen funds.</li>
    <li>We aren't going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" and "BULK GENERATE" tabs are completely client-side. That means that all the code is executed on <strong> your computer </strong> and it is never sent to the servers or to us or anywhere else in the magical internet land.</li>
    <li> Check the URL -- This site is being served through github and you can see the source code here: <a href="https://github.com/kvhnuke/etherwallet" target="_blank">https://github.com/kvhnuke/etherwallet</a> to the domains: <a href="http://kvhnuke.github.io/etherwallet/" target="_blank">http://kvhnuke.github.io/etherwallet/</a> and <a href="https://www.myetherwallet.com" target="_blank">https://www.myetherwallet.com</a> (our new domain with SSL). You can verify it's hosted at github by using <a href="http://viewdns.info/dnsrecord/?domain=myetherwallet.com" target="_blank">http://viewdns.info/dnsrecord/?domain=myetherwallet.com</a> - last two A record IPs are owned by github for their custom domain hosting.</li>
    <li> For generating wallets, you can download the <a href="https://github.com/kvhnuke/etherwallet">source code</a> by using the "DOWNLOAD ZIP" button in the aforementioned link. Then, disconnect your computer from the internet and / or move that .zip file via flash drive to an air-gapped computer. Unzip the file, double-click on "index.html", and you have the exact same thing happening on your air-gapped computer. You can now generate wallets on that computer without fear that we are stealing you heart and soul and first-born child. (Obviously, sending transactions is not going to work without the internet. Sorry!)</li>
    <li> Do a test run and check and see what network activity is happening. The easiest way for you (yes, YOU!) to do this (if you are using Chrome) is to right click on the page and click "inspect element". Now, go to the "Network" tab. Then, generate a wallet. Any wallet, any password&mdash;this is a test, remember. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred.</li>
    <li> Now, to be safe, move over to the "Resources" tab. Here you can see all the different elements that make up a website. That includes things like the HTML (the base of what you see on the page), images (pretty pictures! Usually in .jpg, .gif, or .png format), the CSS (the stuff that makes the HTML look so pretty), the JS (the stuff that makes the HTML do other stuff, like making QR codes show up when you press Generate), Local Storage (one way of storing things on your local machine), Cookies (yum! Another way for sites to store data on your machine), and caches (yet another way to store stuff on your machine, usually to make things go faster). If you click through Local Storage, Cookies, and Cache, you will see nothing is being stored. Nothing is being saved. Refresh the page and you are back to square one.</li>
    <li> If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line / geth / etc. Again, feel free to reach out to us at any of the below addresses and we will respond as quickly as possible. Thanks! </li>
  </ul>


  <h3> More Helpful Answers to Frequent Questions </h3>
  <ul>
    <li><a href="https://www.reddit.com/r/ethereum/comments/3vxvlx/starter_guide_almost_all_the_links_youll_need_to/" target="_blank"> Starter guide: (almost) all the links you'll need to start understanding ethereum. </a></li>
    <li><a href="https://www.reddit.com/r/ethtrader/comments/41lftl/need_wallet_advice/cz3cs4i" target="_blank"> Step-by-step Wallet Advice by /u/gattacibus </a></li>
    <li><a href="https://www.reddit.com/r/ethereum/comments/46887p/tips_for_recovering_your_presale_password/" target="_blank">/r/ethereum: Tips for Recovering Your Presale Password, Especially for Those Not Good w/ Computers</a></li>
    <li><a href="https://forum.ethereum.org/discussion/3045/request-post-password-instructions-that-were-given-for-the-presale-last-year" target="_blank">forum.ethereum.org: I forgot my Pre-Sale Wallet Password / My PW Isn't Working</a></li>
    <li><a href="https://www.reddit.com/r/ethereum/comments/3g6aw0/i_lost_my_password_to_my_presale_wallet_admit_it/" target="_blank">/r/ethereum: I forgot my Pre-Sale Wallet Password / My PW Isn't Working </a></li>
  </ul>


  <h3> Helpful Links </h3>
  <ul>
    <li><a href="https://ethereum.org/" target="_blank">Official Ethereum Site</a></li>
    <li><a href="https://www.reddit.com/r/ethereum" target="_blank">Ethereum Subreddit </a></li>
    <li><a href="https://www.etherchain.org" target="_blank">Blockchain Explorer - etherchain.org</a></li>
    <li><a href="http://etherscan.io/" target="_blank">Another Blockchain Explorer - etherscan.io</a></li>
    <li><a href="https://github.com/davidshimjs/qrcodejs" target="_blank">QR code library</a></li>
    <li><a href="https://github.com/SilentCicero/ethereumjs-accounts" target="_blank">Ethereum Accounts library</a></li>
    <li><a href="https://code.google.com/p/crypto-js/" target="_blank">CryptoJS library</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto" target="_blank">window.crypto</a></li>
    <li><a href="https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto" target="_blank">the window.crypto w3 spec</a></li>

  </ul>
  <p><small> ps: sorry for any typos or grammatical errors. English is my first language...but I still suck at it. &ndash;Tay</small></p>
</div>
<!-- end help-->

