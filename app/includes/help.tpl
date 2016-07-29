<!-- Help -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.help.id">


  <a href="https://www.reddit.com/r/ethereum/comments/47nkoi/psa_check_your_ethaddressorg_wallets_and_any/d0eo45o" target="_blank"><div class="alert alert-danger">If you created a wallet -or- downloaded the repo before <strong>Dec. 31st, 2015</strong>, please check your wallets &amp; download a new version of the repo. Click for details.</div></a>

  <h2> Help </h2>

  <p>Do you see something missing? Have another question? <a href="mailto:myetherwallet@gmail.com" target="_blank"> Get in touch with us</a>, and we will not only answer your question, we will update this page to be more useful to people in the future!</p>


  <h4>First, a reminder </h4>
  <ul>
    <li><strong>Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development.</strong> While we have tested thoroughly & tens of thousands of wallets have been successfully created by people all over the globe, there is always the remote possibility that something unexpected happens that causes your ETH to be lost. Please do not invest more than you are willing to lose, and please be careful. If something were to happen, we are sorry, <strong>but we are not responsible for the lost Ether.</strong></li>
    <li>MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account or give us your Ether to hold onto. All data is created on our computer/your browser, not our servers. It's <strong>not</strong> a website where you put your Ether and we store them for you. We just make it easy for you to save your wallet information in your browser/on your computer. Then we give you a place you to access that information and do stuff with it.</li>
    <li>Please, do not forget to save your private key & password when you create new wallets. Back them up in multiple physical locations &ndash; not just on your computer!</li>
  </ul>


  <h4> 0. I'm new. What do I do? </h4>
  <p> MyEtherWallet gives you the ability to generate new wallets so you can store your Ether yourself, not on an exchange. This process happens entirely on your computer, not our servers. Therefore, when you generate a new wallet, <strong> you are responsible for safely backing it up</strong>.
  <p> Do not hesitate to reach out to us if you have any questions. Remember, Ether holds real monetary value and can be a significant investment. If you do not save your private key & password, there is no way to recover access to your wallet or the funds it holds.  I do not say this to scare you, only to remind you to be diligent, read carefully, and take your time during the next steps. </p>
  <ol>
    <li> Create a new wallet. </li>
    <li> Back the wallet up.</li>
    <li> Verify you have access to this new wallet and have correctly saved all necessary information. </li>
    <li> Transfer Ether to this new wallet. </li>
  </ol>


  <h4>1. How do I create a new wallet? </h4>
  <ol>
    @@if (site === 'mew' ) {   <li> Go to the "Generate Wallet" tab.</li>    }
    @@if (site === 'cx' ) {   <li> Go to the "Add Wallet" tab & select "Generate New Wallet" </li>   }
    <li> Enter a strong, but easy to remember, password. If you think you may forget it, save it somewhere safe. <em><small>The password encrypts the private key for this wallet. You will need this password to send transactions.</small></em></li>
    <li> Click "GENERATE". </li>
    <li> Your wallet has now been generated. But, you are NOT done yet! Continue to Step #2a.</li>
  </ol>


  <h4>2a. How do I save/backup my wallet?</h4>
  <p> You should always back up your wallet externally and in multiple physical locations - like on a USB drive and/or a piece of paper.</p>
  <ol>
    <li> Save the address. You can keep it to yourself or share it with others. That way, others can transfer ETH to you. You may know this as your account # or public key.</li>
    <li> Save a version private key. Do not share it with anyone else. Your private key is necessary when you want to access your Ether to send it! There are 3 types of private keys:</li>
    <ul>
      <li><strong>Keystore/JSON File (Encrypted · Mist/Geth Format · Recommended): </strong> This JSON file matches the keystore format used by Mist / geth so you can easily import it into those clients in the future. This is the recommended file to download and back up.</li>
      <li><strong>JSON File (unencrypted): </strong> This is the unencrypted, JSON format of your private key. Again, this means you do not need the password but anyone who finds your JSON can access your wallet and your Ether without the password. </li>
      <li><strong>Private Key (unencrypted): </strong> This is the unencrypted text version of your private key, meaning no password is necessary. If someone were to find your unencrypted private key, they could access your wallet without a password. For this reason, encrypted private keys are typically recommended.</li>
    </ul>
    <li> Place this information in a folder, with the PDF version of your paper wallet, and whatever other information you would like to keep. Store it on your computer.</li>
    <li> Take this folder and place it on a USB drive. Store this USB drive in a place securely, in a separate location from your computer. Maybe that place is at your office, a family member's house, in a storage locker, in a safety deposit box, etc. For added security, you can encrypt that USB drive using the following guides: <a href="http://computerbeginnersguides.com/blog/2015/09/03/encrypt-a-usb-flash-drive-with-bitlocker-in-windows-10-professional-or-enterprise/" target="_blank">Windows</a> or <a href="http://www.theinstructional.com/guides/encrypt-an-external-disk-or-usb-stick-with-a-password" target="_blank">Mac</a>.</li>
    <li> Print the wallet if you have a printer. Otherwise, write down on a piece of paper your: address, and private key (unencrypted). Again, store this as a secure location, separate from your computer and the USB drive.</li>
    <li> Now, if your house burns down, you still have a USB drive and a piece of paper. If your hard drive crashes, you still have a USB drive and a piece of paper.</li>
    <li> A final reminder: You NEED the private key (keystore file) + the password in order to access your account and Ether in the future. We do not receive, save, store, or transmit <strong>anything</strong> to our servers and cannot help you recover your funds if you lose your private key/keystore file and password.</li>
  </ol>


  @@if (site === 'mew' ) {
  <h4>2b. How do I safely / offline / cold storage with MyEtherWallet?</h4>
  <ol>
    <li>Go to our github: <a href="https://github.com/kvhnuke/etherwallet/tree/gh-pages">https://github.com/kvhnuke/etherwallet/tree/gh-pages</a>.</li>
    <li>Click download zip in the upper right.</li>
    <li>Move zip to an airgapped computer.</li>
    <li>Unzip it.</li>
    <li>Double-Click index.html.</li>
    <li>Generate a wallet with a strong password.</li>
    <li>Save keystore file and print wallet or write down private key on piece of paper.</li>
    <li>Save address as well. You will need to address to send ETH to yourself later.</li>
    <li>Store these papers / USBs in multiple physically separate locations.</li>
    <li>Go to the view wallet details tab and type in your private key / password from your piece of paper to ensure they are correct and access your wallet. Check that the address you wrote down is the same.</li>
    <li>Refresh that page. Select the keystore file and enter the password to ensure it are correct and can access your wallet. Check that the address you saved on your computer or USB is the same.</li>
  </ol>
  <p>Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood).</p>
  }


  <h4>3. How do I verify I have access to my new wallet?</h4>
  <p> <strong> Before you send any Ether to your new wallet</strong>, you should ensure you have access to it. You should NOT copy and paste from the generate wallet tab, but instead copy and paste from the text document or paper where you have stored your wallet information.</p>
  <ol>
    @@if (site === 'mew' ) {   <li> Navigate to the "View Wallet Info" tab. </li>    }
    @@if (site === 'cx' ) {   <li> <a href="https://www.myetherwallet.com/#view-wallet-info" target="_blank"> MyEtherWallet.com View Wallet Details Tab.</a> </li>    }
    <li> Select your wallet file -or- paste your private key. </li>
    <li> If the wallet is encrypted, a text box will automatically appear. Enter the password. </li>
    <li> Click the "Decrypt" button. </li>
    <li> Your wallet information should show up. Find you account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet. </li>
    <li> If you are planning on holding a large amount of ETH, we recommend that send a small amount of ETH from new wallet before depositting a large amount. Send .001 ETH to your new wallet, access that wallet, send that .001 ETH to another address, and ensure everything works smoothly.</li>
  </ol>


  @@if (site === 'mew' ) {
  <h4>4. How do I send Ether from one wallet to another? </h4>
  <p> Once you have saved and backed up all information <strong> and </strong> verified you have access to your new wallet, you can transfer some Ether to that new wallet.</p>
  <p>If you plan to move a large amount of ether, you should test sending a small amount to your wallet and then out of your new wallet to ensure everything goes smoothly.</p>
  <ol>
    <li> Navigate to the "Send Transaction" tab.</li>
    <li> Select your wallet file -or- paste your private key. </li>
    <li> If your wallet is encrypted, a text box will automatically appear. Enter the password. </li>
    <li> Click the "Decrypt" button. </li>
    <li> You will now see your account information. It'll show your address, your balance, and have a space for the <strong>Receiving Address</strong> and the <strong>Amount you want to send</strong>.</li>
    <li> Enter the address you would like to send to in the "To Address:" field.</li>
    <li> Enter the amount you would like to send. You can also click the <strong>Transfer total available balance</strong> link if you would like the transfer the entire balance.</li>
    <li> A couple more fields will appear. This is your browser generating the transaction.</li>
    <li> Click the blue "SEND TRANSACTION" button below that.</li>
    <li> A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction."</li>
    <li>The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. </li>
  </ol>
  }


  @@if (site === 'cx' ) {
  <h4>4. How do I send Ether using MyEtherWallet CX? </h4>
  <p>First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Send Transaction" tab.</p>
  <p><strong> QuickSend: </strong></p>
  <ol>
    <li> Copy the address you wish to send Ether to your clipboard.</li>
    <li> Click the Chrome Extension Icon.</li>
    <li> Click the green "QuickSend" button. </li>
    <li> Select the wallet you wish to send from.</li>
    <li> Paste the address that you copied earlier into the address field.</li>
    <li> Enter the amount you would like to send. You can also click the [Send total available balance] link if you would like the transfer the entire balance.</li>
    <li> Click "Send Transaction". </li>
    <li> Verify the address and the amount you are sending is correct.</li>
    <li> Enter the password for that wallet. </li>
    <li> Click "Send Transaction." </li>
  </ol>
  <p><strong> Using "Send Transaction" Tab: </strong></p>
  <ol>
    <li> Go to the Send Transaction tab.</li>
    <li> Select the wallet you wish to send from.</li>
    <li> Enter the password.</li>
    <li> Press the DECRYPT button.</li>
    <li> Enter the address you would like to send to in the "To Address:" field.</li>
    <li> Enter the amount you would like to send. You can also click the [Click here to transfer total available balance] link if you would like the transfer the entire balance.</li>
    <li> Click "Generate Transaction" Button. </li>
    <li> A couple more fields will appear. Click the blue "SEND TRANSACTION" button below that.</li>
    <li> A Pop-Up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction."</li>
    <li> The transaction will be submitted. The TX ID will display. You can copy that TX ID and paste it into the search bar on etherchain to verify the transaction went through.</li>
    <li> DONE! </li>
  </ol>
  }


  @@if (site === 'mew' ) {
  <h4>5. How do I run MyEtherWallet.com offline/locally? </h4>
  <p> You can run MyEtherWallet.com on your computer instead of from the GitHub servers. Everything except the "send" tabs can be done completely without the internet, so feel free to turn your internet off. If you would like to send transactions from an offline or airgapped computer, check out the "Offline Transaction" tab. </p>
  <ol>
    <li>Go to the GitHub repo @ <a href="https://github.com/kvhnuke/etherwallet/tree/gh-pages" target="_blank">https://github.com/kvhnuke/etherwallet</a></li>
    <li>Click download zip in the upper right.</li>
    <li>Unzip it.</li>
    <li>Double-Click <code>index.html</code>.</li>
    <li> MyEtherWallet.com is now running entirely on your computer.</li>
  </ol>
  <p> In case you are not familiar, you need to keep the entire <code> dist folder</code> in order to run it, not just index.html. Don't touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the distant future, we recommend just storing the ZIP so you can be sure the folder contents stay intact.</p>
  <p>As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo. The MyEtherWallet team has <strong> no intentions of ever removing this project from GitHub. As long as GitHub is around, the repo will be accessible.</strong></p>
  }


  @@if (site === 'cx' ) {
  <h4>5. How can I install this extension from the repo instead of the Chrome Store? </h4>
  <ul>
    <li>Go to <a href="https://github.com/kvhnuke/etherwallet/tree/mercury" target="_blank">the github repo</a>.</li>
    <li> Download the ZIP file using the button in the upper right.</li>
    <li> Unzip that file. </li>
    <li> Go to Google Chrome and find you settings (in the menu in the upper right).</li>
    <li> Click "extensions" on the left. </li>
    <li> Check the "developer mode" button at the top of that page. </li>
    <li> Click the "Load unpacked extension..." button.</li>
    <li> Navigate to the now-unzipped folder that you downloaded earlier and then the chrome-extension folder. Click "select". </li>
    <li> The extension should now show up in your extensions and in your Chrome Extension bar. </li>
  </ul>
  }

  @@if (site === 'mew' ) {
  <h4>6. What happens if your site goes down? </h4>
  <p>MyEtherWallet is not a web wallet where you put your Ether and we store them for you. You don't have a login and nothing ever gets saved to our servers. It is simply an interface that allows you to do things you normally would do via command line.</p>
  <p>If MyEtherWallet goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn't have to "get" your Ether out of MyEtherWallet because it's not in MyEtherWallet. It's in whatever wallet your generated via our site.</p>
  <p> You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #10 below. </p>
  <p>In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren't storing any information. If we do take the domain down, it still is, and always will be, publicly available at <a href="https://github.com/kvhnuke/etherwallet/tree/gh-pages" target="_blank">https://github.com/kvhnuke/etherwallet</a>. You can download the ZIP there and run it locally. </p>
  }

  @@if (site === 'cx' ) {
  <h4>6. What happens if MyEtherWallet CX disappears from the face of this planet? </h4>
  <p>First, all data is saved on your computer, not our servers. It's not a website where you put your Ether and we store them for you. We just make it easy for you to save your wallet information in your browser/on your computer. Then we give you a place you to access that information and do stuff with it. I know it can be confusing, but when you look at the stuff in the Chrome Extension, you are NOT looking at stuff saved on our servers somewhere - it's all saved on your own computer.</p>
  <p> That said, it is <strong>very important</strong> that you back up all your information for any new wallets generated with MyEtherWallet CX externally (meaning not on your computer!). That way if anything happens to MyEtherWallet CX or your computer, you still have all the information necessary to access your Ether. See the above section for how to save your wallets externally.</p>
  <p> If for some reason MyEtherWallet CX disappears from the Chrome Store, you can find the source on Github and load it manually.</p>
  <ul>
    <li>Go to <a href="https://github.com/kvhnuke/etherwallet/tree/mercury" target="_blank">the github repo</a>.</li>
    <li> Download the ZIP file using the button in the upper right.</li>
    <li> Unzip that file. </li>
    <li> Go to Google Chrome and find you settings (in the menu in the upper right).</li>
    <li> Click "extensions" on the left. </li>
    <li> Check the "developer mode" button at the top of that page. </li>
    <li> Click the "Load unpacked extension..." button.</li>
    <li> Navigate to the now-unzipped folder that you downloaded earlier and then the chrome-extension folder. Click "select". </li>
    <li> The extension should now show up in your extensions and in your Chrome Extension bar. </li>
  </ul>
  }


  <h4>7. Is using the send transaction offline? </h4>
  <p> No, the send transaction tab is not offline. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send") to transfer Ether from one wallet to another. However, when you send a transaction, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" tab so that you can ensure your private keys are on an offline/airgapped computer at all times.</p>


  <h4>8. How do I make an offline transaction?</h4>
  <ol>
    <li> Navigate to the "Offline Transaction" tab via your online computer.</li>
    <li> Enter the FROM address in the field. Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price.</li>
    <li> Move to your offline computer. Enter the TO ADDRESS and the AMOUNT you wish to send.</li>
    <li> Enter the GAS PRICE as it was displayed to you on your online computer in step #1.</li>
    <li> The GAS LIMIT has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you.</li>
    <li> Enter the NONCE as it was displayed to you on your online computer in step #1.</li>
    <li> If you wish, enter some data. Data is optional. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format.</li>
    <li> Select your wallet file -or- enter/paste your private key and unlock your wallet.</li>
    <li> Press the "GENERATE SIGNED TRANSACTION" button.</li>
    <li> The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer.</li>
    <li> On your online computer, paste the signed transaction into the text field in Step 3 and click "SEND TRANSACTION". This will broadcast your transaction.</li>
  </ol>


  <h4>9. How do I send to a contract?</h4>
  <p> Sending to a contract often requires you to include data or additional gas or both.</p>
  <p> Simply navigate to the "Send Transaction" tab, Select your wallet file -or- enter/paste your private key and unlock your wallet, enter a "To Address" and "Amount to Send", and then click the "Advanced Options" button below the amount field. This will display two additional fields that you can use to increase the gas above the default 21000, or add data to your transaction.</p>


  <h4>10. How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist?</h4>
  <p><strong> Using an Geth/Mist JSON file from MyEtherWallet v2+....</strong></p>
  <ol>
    @@if (site === 'mew' ) {<li> Go to the View Wallet Info Tab.</li> <li> Unlock your wallet using your ENCRYPTED private key or JSON file. </li>}
    @@if (site === 'cx' ) {<li> Go to the "My Wallets" Tab.</li> <li> Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet. </li>}
    <li> On the right hand side, look for <code>Download JSON file - Geth/Mist Format (encrypted)</code>. Press the DOWNLOAD button below that. You now have your keystore file.</li>
    <li> Open the Ethereum Wallet application. </li>
    <li> In the menu bar, go "Accounts" -> "Backup" -> "Accounts"</li>
    <li> This will open your keystore folder. Copy the file you just downloaded (<code>UTC--2016-04-14........</code>) into that keystore folder.</li>
    <li> Your account should show up immediately under "Accounts." </li>
  </ol>

  <p><strong> Using your unencrypted private key... </strong></p>
  <ol>
    <li> If you do not already have your unencrypted private key, navigate to the "View Wallet Details" tab.</li>
    <li> Select your wallet file -or- enter/paste your private key to unlock your wallet.</li>
    <li> Copy Your Private Key (unencrypted). </li>
    <li> If you are on a Mac:</li>
      <ul>
        <li> Open Text Edit and paste this private key.</li>
        <li> Go to the menu bar and click "Format" -> "Make Plain Text".</li>
        <li> Save this file to your <code>desktop</code> as <code>nothing_special_delete_me.txt</code>. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog. </li>
        <li> Open terminal and run the following command: <code>geth account import ~/Desktop/nothing_special_delete_me.txt</code></li>
        <li> This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don't forget it.</li>
        <li> Delete the nothing_special_delete_me.txt from your desktop.</li>
        <li> The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". </li>
      </ul>
    <li> If you are on a PC:</li>
      <ul>
        <li>Open Notepad & paste the private key into notepad.</li>
        <li>Save the file as <code>nothing_special_delete_me.txt</code> at <code>C:\</code></li>
        <li>Run the command, <code>geth account import C:\nothing_special_delete_me.txt</code></li>
        <li> This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don't forget it.</li>
        <li>After successful import, delete the file at <code>C:\nothing_special_delete_me.txt</code></li>
        <li> The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". </li>
      </ul>
    </ol>

  <h4>11. What does "Gas Limit Too Low" Mean?</h4>
  <p> Most likely, this means you are attempting to send Ether to a contract. Sending to a contract requires a bit more data and therefore a bit more gas. On the "Send Transaction" tab, click the "Advanced Options" button below the amount field. This will display two additional fields that you can use to increase the gas above the default 21000, or add data to your transaction. </p>


  <h4><span class="text-primary collapseButton"></span> 12. Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn't do this. Is the random number generation for MyEtherWallet safe?</h4>
  <p> While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren't unsafe, it's just that we (and tons of other crypto experments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here's a <a href="https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm" target="_blank">conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto</a> and here is the <a href="https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto" target="_blank">the window.crypto w3 spec</a>. </p>


  <h4>13. Why hasn't the wallet I just created show up in the blockchain explorer? (ie: etherchain, etherscan) </h4>
  <p> Addresses will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. </p>


  <h4>14. How do I check the balance of my account? </h4>
  <p> You can use a blockchain explorer like <a href="http://etherscan.io/" target="_blank">etherscan.io</a>. Paste your address into the search bar and it will pull up your address and transaction history. For example, here's what our <a href="http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8" target="_blank">donation account</a> looks like on etherscan.io</p>


  <h4>15. Where is my geth wallet file? </h4>
  <ul>
    <li>Mac: <code>~/Library/Ethereum/keystore</code></li>
    <li>Linux: <code>~/.ethereum/keystore</code></li>
    <li>Windows: <code>%APPDATA%/Ethereum/keystore</code></li>
  </ul>


  <h4>16. Where is my Mist wallet file? </h4>
  <p> Mist files are typically found in the file locations above, but it's much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored.</p>


  <h4>17. Where is my pre-sale wallet file?</h4>
  <p> Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called <code>"ethereum_wallet_backup.json"</code> and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale.</p>

  <h4> 18. Couldn't everybody put in random private keys, look for a balance, and send to their own address? </h4>
  <p> Short version: yes, but finding an account with a balance would take longer than the universe...so...no.</p>
  <p>Long ELI5 Version: So Ethereum is based on <a href="https://en.wikipedia.org/wiki/Public-key_cryptography" target="_blank">Public Key Cryptography</a>, specifically <a href="https://eprint.iacr.org/2013/734.pdf" target="_blank"> Elliptic curve cryptography </a> which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and heaps of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts.</p>
  <p>In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this, or a variation of, this cryptography means that if for some reason there is suddenly a way  to go from public key -> private key, your lost ETH is the <em>least</em> of everyone’s problems.</p>
  <p>Now, that said, YES if someone else has your private key then they can indeed send ETH from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers (or maybe pay your bills). For this reason, you could download the Keystore version of your private key which is the private key, encrypted with a password. This is like having a password that is also protected by another password.</p>
  <p>And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard, especially when Bitcoin exploded. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worth while - it is more likely you, and your great-grandchildren, will die before getting a match.</p>
  <p>If you know anything about Bitcoin, <a href="http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver" target="_blank">this will put it in perspective:</a> <em>To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion.</em></p>
  <p><a href="http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392" target="_blank">If you want something a bit more technical, take a look here:</a> <em>These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space.</em></p>
  <p> Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria. geth/Mist as well. Jaxx as well. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person's brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but I'll save that for another day. </p>
  <hr />

  @@if (site === 'cx' ) {
    <h4>Security - MyEtherWallet CX </h4>
    <h6> Where is this extension saving my information?</h6>
    <p>The information you store in this Chrome Extension is saved via <a href="http://chrome.storage/" target="_blank">chrome.storage</a>. - this is the same place your passwords are saved when you save your password in Chrome.</p>
    <h6> What information is saved? </h6>
    <p>The address, nickname, private key is stored in chrome.storage. The private key is encrypted using the password you set when you added the wallet. The nickname and wallet address is not encrypted.</p>
    <h6> Why aren't the nickname and wallet address encrypted?</h6>
    <p> If we were to encrypt these items, you would need to enter a password each time you wanted to view your account balance or view the nicknames. If this concerns you, we recommend you use MyEtherWallet.com instead of this Chrome Extension.</p>
  }


  <h4>Security </h4>
  <p> If one of your first questions is "Why should I trust these people?", you are probably worried that this site isn't secure. That is a good thing. When dealing with currency and the internet, you should be paranoid. But, let's try to be a bit reasonable.</p>
  <p> At this point, we have not had our code audited. Apparently, it costs a fair bit of money to get code audited. If you or a team you know would be willing to help us out in the auditing department, please let us know. <a href="https://www.reddit.com/r/ethereum/comments/3hh89n/could_someone_please_audit_ether_wallet/">Here is a reddit thread with another user asking for someone to audit us.</a> You can reach out to us in a variety of ways.</p>
  <p> Here are some things to alleviate any paranoia you have:</p>
  <ul>
    <li>We've been up and running since August 2015. If you search for <a href="https://www.reddit.com/me/m/all_ethereum/search?q=myetherwallet&sort=new&restrict_sr=on&t=all" target="_blank" />"myetherwallet" on reddit</a>, you can see numerous people who use us and no complaints or reports of stolen funds.</li>
    <li>We aren't going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" and "BULK GENERATE" tabs are completely client-side. That means that all the code is executed on <strong> your computer </strong> and it is never sent to the servers or to us or anywhere else in the magical internet land.</li>
    <li> Check the URL -- This site is being served through GitHub and you can see the source code here: <a href="https://github.com/kvhnuke/etherwallet/tree/gh-pages" target="_blank">https://github.com/kvhnuke/etherwallet</a> to the domains: <a href="http://kvhnuke.github.io/etherwallet/" target="_blank">http://kvhnuke.github.io/etherwallet/</a> and <a href="https://www.myetherwallet.com" target="_blank">https://www.myetherwallet.com</a> (our new domain with SSL). You can verify it's hosted at GitHub by using <a href="http://viewdns.info/dnsrecord/?domain=myetherwallet.com" target="_blank">http://viewdns.info/dnsrecord/?domain=myetherwallet.com</a> - last two A record IPs are owned by GitHub for their custom domain hosting.</li>
    <li> For generating wallets, you can download the <a href="https://github.com/kvhnuke/etherwallet/tree/gh-pages">source code</a> by using the "DOWNLOAD ZIP" button in the aforementioned link. Then, disconnect your computer from the internet and / or move that .zip file via flash drive to an air-gapped computer. Unzip the file, open the dist folder, double-click on "index.html", and you have the exact same thing happening on your air-gapped computer. You can now generate wallets on that computer without fear that we are stealing you heart and soul and first-born child. (Obviously, the "Send Transaction" tab is not going to work without the internet. Sorry!)</li>
    <li> Do a test run and check and see what network activity is happening. The easiest way for you (yes, YOU!) to do this (if you are using Chrome) is to right click on the page and click "inspect element". Now, go to the "Network" tab. Then, generate a wallet. Any wallet, any password&mdash;this is a test, remember. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred.</li>
    <li> Now, to be safe, move over to the "Resources" tab. Here you can see all the different elements that make up a website. That includes things like the HTML (the base of what you see on the page), images (pretty pictures! Usually in .jpg, .gif, or .png format), the CSS (the stuff that makes the HTML look so pretty), the JS (the stuff that makes the HTML do other stuff, like making QR codes show up when you press Generate), Local Storage (one way of storing things on your local machine), Cookies (yum! Another way for sites to store data on your machine), and caches (yet another way to store stuff on your machine, usually to make things go faster). If you click through Local Storage, Cookies, and Cache, you will see nothing is being stored. Nothing is being saved. Refresh the page and you are back to square one.</li>
    <li> If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line / geth / etc. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks! </li>
  </ul>


  <h4>More Helpful Answers to Frequent Questions </h4>
  <ul>
    <li><a href="https://www.reddit.com/r/ethereum/comments/3vxvlx/starter_guide_almost_all_the_links_youll_need_to/" target="_blank"> Starter guide: (almost) all the links you'll need to start understanding ethereum. </a></li>
    <li><a href="https://www.reddit.com/r/ethtrader/comments/41lftl/need_wallet_advice/cz3cs4i" target="_blank"> Step-by-step Wallet Advice by /u/gattacibus </a></li>
    <li><a href="https://www.reddit.com/r/ethereum/comments/46887p/tips_for_recovering_your_presale_password/" target="_blank">/r/ethereum: Tips for Recovering Your Presale Password, Especially for Those Not Good w/ Computers</a></li>
    <li><a href="https://forum.ethereum.org/discussion/3045/request-post-password-instructions-that-were-given-for-the-presale-last-year" target="_blank">forum.ethereum.org: I forgot my Pre-Sale Wallet Password / My PW Isn't Working</a></li>
    <li><a href="https://www.reddit.com/r/ethereum/comments/3g6aw0/i_lost_my_password_to_my_presale_wallet_admit_it/" target="_blank">/r/ethereum: I forgot my Pre-Sale Wallet Password / My PW Isn't Working </a></li>
  </ul>


  <h4>Helpful Links </h4>
  <ul>
    <li><a href="https://ethereum.org/" target="_blank">Official Ethereum Site</a></li>
    <li><a href="https://www.reddit.com/r/ethereum" target="_blank">Ethereum Subreddit </a></li>
    <li><a href="https://www.reddit.com/user/insomniasexx/m/all_ethereum" target="_blank">insom's Ethereum Multi-reddit </a></li>
    <li><a href="http://etherscan.io/" target="_blank"> Blockchain Explorer - etherscan.io</a></li>
    <li><a href="https://github.com/davidshimjs/qrcodejs" target="_blank">QR code library</a></li>
    <li><a href="https://github.com/SilentCicero/ethereumjs-accounts" target="_blank">Ethereum Accounts library</a></li>
    <li><a href="https://code.google.com/p/crypto-js/" target="_blank">CryptoJS library</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto" target="_blank">window.crypto</a></li>
    <li><a href="https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto" target="_blank">the window.crypto w3 spec</a></li>
  </ul>


  <h4>Ways to Get in Touch </h4>
  <ul>
    <li><a href="https://twitter.com/myetherwallet" target="_blank"> Follow Us on Twitter </a></li>
    <li><a href="mailto:myetherwallet@gmail.com" target="_blank"> Email Us </a></li>
    <li><a href="https://github.com/kvhnuke/etherwallet/issues" target="_blank"> Open a GitHub Issue</a></li>
    <li><a href="https://www.reddit.com/message/compose/?to=kvhnuke" target="_blank"> Message kvhnuke on Reddit </a></li>
    <li><a href="https://www.reddit.com/message/compose/?to=insomniasexx" target="_blank"> Message tayvano (she goes by insom over there) on Reddit </a></li>
    <li><a href="https://hubski.com/user?id=insomniasexx" target="_blank"> Message tayvano (she goes by insom over there, too!) on Hubski </a></li>
  </ul>


  <p><small> ps: sorry for any typos or grammatical errors. English is my first language...but I still suck at it. &ndash;Tay</small></p>


</div>
<!-- end help-->

