<!-- help -->
<div class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.help.id">
  <h2> Help </h2>
  <p>
    Do you see something missing? Have another question? Get in touch with us and we will not only answer your question, we will update this page to be more useful to people in the future!
  </p>

  <section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> First, a reminder </h4>
  <div class="collapsePanel">
    <ul>
      <li><strong>Ethereum, MyEtherWallet.com, and some of the underlying Javascript libraries we use are under active development.</strong> While we have tested thoroughly & tens of thousands of wallets have been successfully created by people all over the globe, there is always the remote possibility that something unexpected happens that causes your ETH to be lost. While do everything we can to ensure that this does not happen and are available via email/reddit/twitter to assist in every way we can, this possibility still exists. Please do not invest more than you are willing to lose and please be careful. If something were to happen, we are sorry, <strong>but we are not responsible for the lost Ether.</strong></li>
      <li>MyEtherWallet.com and MyEtherWallet CX are not "web wallets". You do not create an account or give us your Ether to hold onto. All data is created on our computer/your browser, not our servers. It's not a website where you put your Ether and we store them for you. We just make it easy for you to save your wallet information in your browser/on your computer. Then we give you a place you to access that information and do stuff with it.</li>
      <li>Please, do not forget to save your private key & password when you create a new wallet. Back them up in multiple phsyically locations &ndash; not just on your computer!</li>
      <li>Please make sure you are sending to the correct address.</li>
      <li>Please reach out to us with any and all feedback you have, especially with things that confuse you or error messages that don't make sense.</li>
    </ul>
  </div>
  </section>

  <section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 0. I'm new. What do I do? </h4>
  <div class="collapsePanel collapsed">
    <p> MyEtherWallet.com gives you the ability to generate new wallets so you can store your Ether yourself, not on an exchange. This process happens entirely on your computer, not our servers. Therefore, when you generate a new wallet, <strong> you are responsible for safely backing it up</strong>.
    <p> If you just purchased ETH on an exchange and want to hold it safely in your own wallet, or if you are using ShapeShift to exchange another from cryptocurrency, you will need to complete the following steps. These steps are outlined in detail in the questions below. Please read them all in full. </p>
    <p> Do not hesitate to reach out to us if you have any questions. Remember, Ether now holds real monetary value and can be a significant investment. If you do not save your private key & password, there is no way to recover access to your wallet or the funds it holds.  I do not say this to scare you, only to remind you to be diligent, read carefully, and take your time during all the steps. But, if you follow the instructions found on this page, even a non-technical person can safely hold their Ether in a wallet they control. </p>

    <ol>
      <li> Create a new wallet. </li>
      <li> Back the wallet up.</li>
      <li> Verify you have access to this new wallet and have correctly saved all necessary information. </li>
      <li> Transfer Ether to this new wallet. </li>
    </ol>
  </div>
  </section>

<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 1. How do I create a new wallet? </h4>
  <div class="collapsePanel collapsed">
  <ol>
    <li> Go to the "Generate Wallet" tab.</li>
    <li> Create a strong password, preferably using a random password generator. Save this somewhere safe. <em><small>The password encrypts the private key for this wallet. You will need this password to send transactions.</small></em></li>
    <li> Copy the password from where you have saved it and paste it into the "Enter a password" field.</li>
    <li> Click "GENERATE".</li>
    <li> Your wallet has now been generated. But, you are NOT done yet! Back up your wallet now! See #2a.</li>
    <li> Then: Verify that you can successfully access you wallet <strong>before</strong> sending any Ether to this wallet. See below.</li>
  </ol>
  </ol>
  </div>
  </section>

<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 2a. How do I save/backup my wallet?</h4>
  <div class="collapsePanel collapsed">
  <p> You should always back up your wallet externally - like on a flash drive, in cloud storage (Dropbox, etc), and/or a piece of paper.</p>
  <ol>
    <li> Save the address. You can keep it to yourself or share it with others. That way, others can transfer ether to you. You may know this as your account # or public key.</li>
    <li> Save a version private key. Do not show it to anyone else. Your private key is necessary when you want to access your wallet to move it, spend it, or send it! There are 4 types of private keys:</li>
      <ul>
      <li><strong>JSON file - Geth/Mist Format (encrypted): </strong> This JSON file matches the keystore format used by Mist / geth so you can easily import it into those clients in the future. <strong>This is the recommended file to download and back up.</strong></li>
      <li><strong>Private Key (unencrypted): </strong> This is the unencrypted text version of your private key, meaning no password is necessary. If someone were to find your unencrypted private key, they could access your wallet without a password. For this reason, encrypted private keys are typically recommended.</li>
      <li><strong>JSON (unencrypted): </strong> This is the unencrypted, JSON format of your private key. Again, this means you do not need the password but anyone who finds your JSON can access your wallet and your Ether without the password. </li>
    </ul>
    <li> Place all this information in a folder, along with your JSON file, PDF version of your paper wallet, and whatever other information you would like to keep. Store it on your computer.</li>
    <li> Take this folder and place it on a USB drive. Store this USB drive in a place securely, in a separate location from your computer. Maybe that place is at your office (don't forget it when you're rich off Ether & ragequit!), at your parent's or another family member's house, in a storage locker, etc. For added security, you can encrypt that USB drive using the following guides: <a href="http://computerbeginnersguides.com/blog/2015/09/03/encrypt-a-usb-flash-drive-with-bitlocker-in-windows-10-professional-or-enterprise/" target="_blank">Windows</a> or <a href="http://www.theinstructional.com/guides/encrypt-an-external-disk-or-usb-stick-with-a-password" target="_blank">Mac</a>.</li>
    <li> Print the wallet if you have a printer. Otherwise, write down on a piece of paper your: password, address, and private key (unencrypted). Again, store this as a secure location, separate from your computer and the USB drive.</li>
    <li> Now, if your house burns down you still have a USB drive and a piece of paper. If your HDD crashes, you still have a USB drive and a piece of paper.</li>
    <li> A final reminder: You NEED the private key & password in order to access your account and Ether in the future. We do not save anything to our servers and cannot help you recover your funds if you lose your private key/JSON file and password.</li>
  </ol>
  </div>
  </section>

  <section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 2b. How do I safely / securely / cold storage with MyEtherWallet?</h4>
  <div class="collapsePanel collapsed">
  <ol>
    <li>Go here: <a href="https://github.com/kvhnuke/etherwallet" target="_blank">https://github.com/kvhnuke/etherwallet</a></li>
    <li>Click download zip in the upper right.</li>
    <li>Move zip to an airgapped computer.</li>
    <li>Unzip it.</li>
    <li>Open the <code>dist</code> folder.</li>
    <li>Double-Click <code>index.html</code>.</li>
    <li>Generate wallet with a strong password. </li>
    <li>Save the password on the computer, using an additional layer of encryption.<a href="https://www.reddit.com/r/ethtrader/comments/47mcu2/what_program_do_you_use_to_encrypt_your_keystore/" target="_blank"> This thread has recommended encryption. </a></li>
    <li>Save the encrypted private key or encrypted JSON. Store it on this airgapped computer that will never access the internet ever.</li>
    <li>Save your address (no need to encrypt) as well. You will need to address to send ETH to yourself later.</li>
    <li>Copy the encrypted private keys and password and address to a USB drive. Encrypt said USB drive. <a href="http://computerbeginnersguides.com/blog/2015/09/03/encrypt-a-usb-flash-drive-with-bitlocker-in-windows-10-professional-or-enterprise/" target="_blank">Windows Instructions</a> & <a href="http://www.theinstructional.com/guides/encrypt-an-external-disk-or-usb-stick-with-a-password" target="_blank">Mac instructions.</a></li>
    <li>Write down the encrypted private key and password on separate pieces of paper. Don't print them because all the printers have insecure Wi-Fi these days & store stuff in memory and we're being ultra secure here. Triple check that you have written them down correctly. Store these papers in physically separate locations than the USB drives and airgapped computer.</li>
    <li>Go to the view wallet details tab and type in your private key / password from your piece of paper to ensure they are correct and access your wallet. Check that the address you wrote down is the same.</li>
    <li>Refresh that page. And copy/paste your private key or JSON and password from your computer or USB drive to ensure they are correct and can access your wallet. Check that the address you saved on your computer or USB is the same.</li>
  </ol>
  <p>Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood). </p>
</div>
</section>


<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 3. How do I verify I have access to my new wallet?</h4>
  <div class="collapsePanel collapsed">
  <p> <strong> Before you send any Ether to your new wallet</strong>, you should ensure you have access to it. You should NOT copy and paste from the generate wallet tab, but instead copy and paste from the text document or paper where you have stored your wallet information.</p>

  <ol>
    <li> Navigate to the "Send Transaction" tab. </li>
    <li> Select your wallet file -or- paste your private key. </li>
    <li> If the wallet is the encrypted, a text box will automatically appear. Enter the password. </li>
    <li> Click the "Decrypt" button. </li>
    <li> Your wallet information should show up. The account address is on the left side, underneath a colorful icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document. </li>
    <li> That's it. You can now send ETH to that address and be certain you can access it!</li>
  </ol>
  </div>
  </section>

<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 4. How do I send Ether from one wallet to another? </h4>
  <div class="collapsePanel collapsed">
  <p> Once you have saved and backed up all information <strong> and </strong> verified you have access to your new wallet, you can transfer some Ether to that new wallet.</p>

  <p><strong>Before you start,</strong> If you plan to move a large amount of ether, you should test sending a small amount first to make sure everything goes smoothly. After making the small transaction, you can check by pasting the TX ID or the address into a blockchain explorer, e.g. <a href="https://www.etherchain.org" target="_blank">https://www.etherchain.org</a>.</p>
  <ol>
    <li> Navigate to the "Send Transaction" tab</li>
    <li> Select your wallet file -or- paste your private key. </li>
    <li> If the wallet is the encrypted, a text box will automatically appear. Enter the password. </li>
    <li> Click the "Decrypt" button. </li>
    <li> You will now see your account information. It'll show your address, your balance, and have a space for the <strong>Receiving Address</strong> and the <strong>Amount you want to send</strong>.</li>
    <li> Enter the address you would like to send to in the "To Address:" field.</li>
    <li> Enter the amount you would like to send. You can also click the <strong>Transfer total available balance</strong> link if you would like the transfer the entire balance.</li>
    <li> A couple more fields will appear. This is the program generating the transaction.</li>
    <li> Click the blue "SEND TRANSACTION" button below that.</li>
    <li> A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction."</li>
    <li>The transaction will be submitted. The TX ID will display. You can copy that TX ID and paste it into the search bar on a blockchain explorer to verify the transaction went through.</li>
    <li> Success! </li>
  </ol>
  </div>
  </section>

<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 5. How do I run MyEtherWallet.com offline/locally? </h4>
 <div class="collapsePanel collapsed">
  <p> You can run MyEtherWallet.com on your computer instead of from the GitHub servers. Everything except the "send transaction" tab can be done completely without the internet, so feel free to turn your internet off. If you would like to send transactions from an offline or airgapped computer, check out the "Offline / Advanced Transaction" tab. </p>
  <ol>
    <li>Go to the GitHub repo @ <a href="https://github.com/kvhnuke/etherwallet" target="_blank">https://github.com/kvhnuke/etherwallet</a></li>
    <li>Click download zip in the upper right.</li>
    <li>Unzip it.</li>
    <li>Open the <code>dist</code> folder.</li>
    <li>Double-Click <code>index.html</code>.</li>
    <li> MyEtherWallet.com is now running entirely on your computer.</li>
  </ol>
  <p> In case you are not familiar, you need to keep the entire <code> dist folder</code> in order to run it, not just index.html. Don't touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the distant future, we recommend just storing the ZIP so you can be sure the folder contents stay intact.</p>
  <p>As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo. The MyEtherWallet team has <strong> no intentions of ever removing this project from GitHub. As long as GitHub is around, the repo will be accessible.</strong></p>
</div>
</section>

<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 6. What happens if your site goes down? </h4>
 <div class="collapsePanel collapsed">
  <p>There seems to be a lot of confusion about what MyEtherWallet does. It's not a web wallet where you put your Ether and we store them for you. You don't have a login and nothing ever gets saved to our servers. It is simply an interface that allows you to do things you normally would do via command line.</p>
  <p>If MyEtherWallet goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn't have to "get" your ether out of MyEtherWallet because it's not in MyEtherWallet. It's in whatever wallet your generated via our site.</p>
  <p> You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #10 below. </p>
  <p>In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren't storing any information. If we do take the domain down, it still is, and always will be, publicly available at <a href="https://github.com/kvhnuke/etherwallet" target="_blank">https://github.com/kvhnuke/etherwallet</a>. You can download the ZIP there and run it locally. </p>
</div>
</section>


<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 7. Is using the send transaction offline? </h4>
<div class="collapsePanel collapsed">
  <p> No, the send transaction tab is not offline. It needs the internet in order to send Ether from one wallet to another. However, when you send a transaction, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Advanced / Offline Transaction" tab so that you can ensure your private keys are on an offline/airgapped computer at all times.</p>
</div>
</section>


  <section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 8. How do I make an offline transaction?</h4>
  <div class="collapsePanel collapsed">
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
      <li> The data field below this button will populate with your singed transaction. Copy this and move it back to your online computer.</li>
      <li> On your online computer, paste the signed transaction into the text field in Step 3 and click "SEND TRANSACTION". This will broadcast your transaction.</li>
    </ol>

  </div>
  </section>

  <section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 9. How do I send to a contract?</h4>
  <div class="collapsePanel collapsed">
    <p> Sending to a contract often requires you to include data or additional gas or both. Previously, you had to use the "Offline Transaction" Tab in order to include data and gas with your transaction. Now, you can use the default "Send Transaction" tab to do so.</p>
    <p> Simply navigate to the "Send Transaction" tab, Select your wallet file -or- enter/paste your private key and unlock your wallet, enter a "To Address" and "Amount to Send", and then click the "Advanced Options" button below the amount field. This will display two additional fields that you can use to increase the gas above the default 21000, or add data to your transaction.</p>
  </div>
  </section>

    <section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 10. How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist?</h4>
  <div class="collapsePanel collapsed">
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
    <p><strong> Using an Geth/Mist JSON file from MyEtherWallet v2+....</strong></p>
    <p> If your wallet file is named something like <code>UTC--2016-04-14........</code> then you can follow these instructions.</p>
    <ol>
      <li> Open the Ethereum Wallet application. </li>
      <li> In the menu bar, go "Accounts" -> "Backup" -> "Accounts"</li>
      <li> This will open your keystore folder. Copy your wallet file (<code>UTC--2016-04-14........</code>) into that keystore folder.</li>
      <li> Restart Ethereum Wallet. You account will then be listed under "Accounts." </li>
    </ol>

  </div>
  </section>

  <section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 11. What does "Gas Limit Too Low" Mean?</h4>
    <div class="collapsePanel collapsed">
      <p> Most likely, this means you are attempting to send Ether to a contract. Sending to a contract requires a bit more data and therefore a bit more gas. On the "Send Transaction" tab, click the "Advanced Options" button below the amount field. This will display two additional fields that you can use to increase the gas above the default 21000, or add data to your transaction. </p>
    </div>
  </section>


<section class="collapseContainer">
  <h4><span class="text-primary collapseButton"></span> 12. Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn't do this. Is the random number generation for MyEtherWallet safe?</h4>
<div class="collapsePanel collapsed">
  <p> While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren't unsafe, it's just that we (and tons of other crypto experments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here's a <a href="https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm" target="_blank">conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto</a> and here is the <a href="https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto" target="_blank">the window.crypto w3 spec</a>. </p>
</div>
</section>

<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 13. Why hasn't the wallet I just created show up in the blockchain explorer? (ie: etherchain, etherscan) </h4>
<div class="collapsePanel collapsed">
  <p> Addresses will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. </p>
</div>
</section>

<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 14. How do I check the balance of my account? </h4>
 <div class="collapsePanel collapsed">
  <p> You can use a blockchain explorer like <a href="https://www.etherchain.org" target="_blank">etherchain.org</a> or <a href="http://etherscan.io/" target="_blank">etherscan.io</a>. Paste your address into the search bar and it will pull up your address and transaction history. For example, here's what our <a href="https://etherchain.org/account/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8" target="_blank">donation account</a> looks like on etherchain.org.</p>
</div>
</section>

<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 15. Where the hell is my geth wallet file? </h4>
<div class="collapsePanel collapsed">
  <ul>
    <li>Mac: <code>~/Library/Ethereum/keystore</code></li>
    <li>Linux: <code>~/.ethereum/keystore</code></li>
    <li>Windows: <code>%APPDATA%/Ethereum/keystore</code></li>
  </ul>
</div>
</section>

<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 16. Where the hell is my Mist wallet file? </h4>
<div class="collapsePanel collapsed">
  <p> Mist files are typically found in the file locations above, but it's much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored.</p>
</div>
</section>

<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> 17. Where is my pre-sale wallet file?</h4>
  <div class="collapsePanel collapsed">
  <p> Where ever you saved it. ;) It also was emailed to you, so check there. Look for the file called <code>"ethereum_wallet_backup.json"</code> and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale.</p>
</div>
</section>

<hr />

<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> Security </h4>
  <div class="collapsePanel">
  <p> One of your first questions is, "Why should I trust these people?" You are probably worried that this site isn't secure. That is a good thing. When dealing with currency and the internet, you should be paranoid. But, let's try to be a bit reasonable.</p>
  <p> At this point, we have not had our code audited. Apparently, it costs a fair bit of money to get code audited. If you or a team you know would be willing to help us out in the auditing department, please let us know. <a href="https://www.reddit.com/r/ethereum/comments/3hh89n/could_someone_please_audit_ether_wallet/">Here is a reddit thread with another user asking for someone to audit us.</a> You can reach out to us in a variety of ways.</p>
  <p> Here are some things to alleviate any paranoia you have:</p>
  <ul>
    <li>We've been up and running since August 2015. If you search for <a href="https://www.reddit.com/r/ethereum+ethtrader+EtherMining+EthereumProgramming+ethereumprojects+etherpool/search?q=myetherwallet&sort=relevance&t=all" target="_blank" />"myetherwallet" on reddit</a>, you can see numerous people who use us and no complaints or reports of stolen funds.</li>
    <li>We aren't going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" and "BULK GENERATE" tabs are completely client-side. That means that all the code is executed on <strong> your computer </strong> and it is never sent to the servers or to us or anywhere else in the magical internet land.</li>
    <li> Check the URL -- This site is being served through GitHub and you can see the source code here: <a href="https://github.com/kvhnuke/etherwallet" target="_blank">https://github.com/kvhnuke/etherwallet</a> to the domains: <a href="http://kvhnuke.github.io/etherwallet/" target="_blank">http://kvhnuke.github.io/etherwallet/</a> and <a href="https://www.myetherwallet.com" target="_blank">https://www.myetherwallet.com</a> (our new domain with SSL). You can verify it's hosted at GitHub by using <a href="http://viewdns.info/dnsrecord/?domain=myetherwallet.com" target="_blank">http://viewdns.info/dnsrecord/?domain=myetherwallet.com</a> - last two A record IPs are owned by GitHub for their custom domain hosting.</li>
    <li> For generating wallets, you can download the <a href="https://github.com/kvhnuke/etherwallet">source code</a> by using the "DOWNLOAD ZIP" button in the aforementioned link. Then, disconnect your computer from the internet and / or move that .zip file via flash drive to an air-gapped computer. Unzip the file, open the dist folder, double-click on "index.html", and you have the exact same thing happening on your air-gapped computer. You can now generate wallets on that computer without fear that we are stealing you heart and soul and first-born child. (Obviously, the "Send Transaction" tab is not going to work without the internet. Sorry!)</li>
    <li> Do a test run and check and see what network activity is happening. The easiest way for you (yes, YOU!) to do this (if you are using Chrome) is to right click on the page and click "inspect element". Now, go to the "Network" tab. Then, generate a wallet. Any wallet, any password&mdash;this is a test, remember. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred.</li>
    <li> Now, to be safe, move over to the "Resources" tab. Here you can see all the different elements that make up a website. That includes things like the HTML (the base of what you see on the page), images (pretty pictures! Usually in .jpg, .gif, or .png format), the CSS (the stuff that makes the HTML look so pretty), the JS (the stuff that makes the HTML do other stuff, like making QR codes show up when you press Generate), Local Storage (one way of storing things on your local machine), Cookies (yum! Another way for sites to store data on your machine), and caches (yet another way to store stuff on your machine, usually to make things go faster). If you click through Local Storage, Cookies, and Cache, you will see nothing is being stored. Nothing is being saved. Refresh the page and you are back to square one.</li>
    <li> If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line / geth / etc. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks! </li>
  </ul>
  </div>
</section>

<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> More Helpful Answers to Frequent Questions </h4>
  <div class="collapsePanel">
  <ul>
    <li><a href="https://www.reddit.com/r/ethereum/comments/3vxvlx/starter_guide_almost_all_the_links_youll_need_to/" target="_blank"> Starter guide: (almost) all the links you'll need to start understanding ethereum. </a></li>
    <li><a href="https://www.reddit.com/r/ethtrader/comments/41lftl/need_wallet_advice/cz3cs4i" target="_blank"> Step-by-step Wallet Advice by /u/gattacibus </a></li>
    <li><a href="https://www.reddit.com/r/ethereum/comments/46887p/tips_for_recovering_your_presale_password/" target="_blank">/r/ethereum: Tips for Recovering Your Presale Password, Especially for Those Not Good w/ Computers</a></li>
    <li><a href="https://forum.ethereum.org/discussion/3045/request-post-password-instructions-that-were-given-for-the-presale-last-year" target="_blank">forum.ethereum.org: I forgot my Pre-Sale Wallet Password / My PW Isn't Working</a></li>
    <li><a href="https://www.reddit.com/r/ethereum/comments/3g6aw0/i_lost_my_password_to_my_presale_wallet_admit_it/" target="_blank">/r/ethereum: I forgot my Pre-Sale Wallet Password / My PW Isn't Working </a></li>
  </ul>
  </div>
</section>

<section class="collapseContainer">
  <h4> <span class="text-primary collapseButton"></span> Helpful Links </h4>
  <div class="collapsePanel">
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
  </div>
</section>

  <p><small> ps: sorry for any typos or grammatical errors. English is my first language...but I still suck at it. &ndash;Tay</small></p>
</div>
<!-- end help-->

