// Farsi / Persian Last sync with en.js     : commit f025c496254b8ce69660b682f90ec3dc5a12caa8
'use strict';
var fa = function () {}
fa.code = 'fa';
fa.data = {

GEN_Help_0                      :  'Already have a wallet somewhere?',
GEN_Help_MetaMask               :  'So easy! Keys stay in MetaMask, not on a phishing site! Try it today.',

GEN_Warning_1                   :  '**Do not lose it!** It cannot be recovered if you lose it.',
GEN_Warning_2                   :  '**Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site.',
GEN_Warning_3                   :  '**Make a backup!** Secure it like the millions of dollars it may one day be worth.',

GAS_Price_1                     : 'Not So Fast',
GAS_Price_2                     : 'Fast',
GAS_Price_3                     : 'Fast AF',

CONTRACT_Helper_1               :  'Please change the address to your own Multisig Contract Address.',
CONTRACT_Warning_1              :  'You are about to **deploy a contract**.',
CONTRACT_Warning_2              :  'It will be deployed on the following network:',
CONTRACT_Warning_3              :  'You are about to **execute a function on contract**.',

SEND_Helper_Contract            :  'In most cases you should leave this as 0.',
SEND_ViewOnly                   :  'You cannot send with only your address. You must use one of the other options to unlock your wallet in order to send.',
SEND_LoadTokens                 :  'Load Tokens',
SEND_CustomAddrMsg              :  'A message regarding',

SWAP_Warning_1                  :  'Warning! You do not have enough funds to complete this swap.',
SWAP_Warning_2                  :  'Please add more funds to your wallet or access a different wallet.',

X_Advanced                      :  'Advanced Users Only.',
X_HelpfulLinks                  :  'Helpful Links & FAQs',
X_HelpfulLinks_1                :  'How to Access your Wallet',
X_HelpfulLinks_2                :  'I lost my private key',
X_HelpfulLinks_3                :  'My private key opens a different address',
X_HelpfulLinks_4                :  'Migrating to/from MyEtherWallet',
X_Network                       :  'Network', // aka "node" or "chain" - used in the dropdown in header
X_Network_Custom                :  'Add Custom Network / Node',

DOMAIN_Buy                      :  'Buy the domain',
DOMAIN_BuyItNow                 :  'Price to buy the domain immediately:',
DOMAIN_bid                      :  'Bid for the domain',
DOMAIN_bid_0                    :  'You are currently winning this auction with the highest bid. You can bid higher if you want, but it will delay the close of the auction for 24 hours.',
DOMAIN_bid_1                    :  'Bid at least',
DOMAIN_bid_2                    :  'on the domain.',
DOMAIN_bid_3                    :  'You will win the domain if no higher bids are placed within the next 24 hours.',
DOMAIN_bid_4                    :  'Note that the domain has a locked value of',
DOMAIN_bid_5                    :  'As part of the sale you will receive the deed with this value but cannot claim it unless you release the name.',
DOMAIN_Finish_1                 :  'Not related to that auction',
DOMAIN_Finish_2                 :  'This address is neither the winner nor the seller of the auction.',
DOMAIN_Finish_3                 :  'Finish the auction',
DOMAIN_Finish_4                 :  'Finish the auction to allocate the domain to the winner and the funds to the seller.',
DOMAIN_Finish_5                 :  'Click your TX hash to see if you successfully transferred the domain to DomainSale.',
DOMAIN_offer_4                  :  'Offer For Sale:',
DOMAIN_offer_5                  :  'Set either of both of the prices below to offer your domain for sale.  Remember that any funds you have locked in the domain\'s deed will go to the buyer and 10% of the funds when sold goes to referrers.',
DOMAIN_offer_7                  :  'Alter Your Offer for:',
DOMAIN_offer_8                  :  'Change either of both of the prices below to alter your domain sale offer.  Remember that any funds you have locked in the domain\'s deed will go to the buyer and 10% of the funds when sold goes to referrers.',
DOMAIN_offer_9                  :  'Buy price',
DOMAIN_offer_10                 :  'This is the price at which someone can buy the domain immediately. 0 means that the domain cannot be purchased immediately.',
DOMAIN_offer_11                 :  'This is the price at which someone can start an auction for the domain.  0 means that the domain will not be available for auction.',
DOMAIN_offer_12                 :  'Offer your domain',
DOMAIN_offer_13                 :  'Alter your sale',
DOMAIN_offer_14                 :  'Cancel your sale',
DOMAIN_offer_15                 :  'You can cancel your domain sale, which will return the domain to you with no charge.  This is only available before any bids have been received for the domain.',

ENS_WrongAddress_1              :  'The wallet you unlocked does not own the name ',
ENS_WrongAddress_2              :  'Please unlock the wallet with address ',

ENS_Finalize                    :  'Finalize',
ENS_Finalize_content            :  'Finalizing this name assigns the ENS name to the winning bidder. The winner will be refunded the difference between their bid and the next-highest bid. If you are the only bidder, you will be refunded all but 0.01 ETH. Any non-winners will also be refunded.',
ENS_Finalize_content_1          :  'You are about to finalize the auction & claim the name:',
ENS_Helper_1                    :  'What is the process like?',
ENS_Helper_2                    :  '1) Preparation',
ENS_Helper_3                    :  'Decide which account you wish to own the name & ensure that you have multiple backups of that account.',
ENS_Helper_4                    :  'Decide the maximum amount of ETH you are willing to pay for the name (your <u>Bid Amount</u>). Ensure that the account has enough to cover your bid + 0.01 ETH for gas.',
ENS_Helper_5                    :  '2) Start an Auction / Place a Bid',
ENS_Helper_6                    :  'Bidding period lasts 3 days (72 hours).',
ENS_Helper_7                    :  'You will enter the <u>name</u>, <u>Actual Bid Amount</u>, <u>Bid Mask</u>, which is protected by a <u>Secret Phrase</u>.',
ENS_Helper_8                    :  'This places your bid, but this information is kept secret until you reveal it.',
ENS_Helper_9                    :  '3) Reveal your Bid',
ENS_Helper_10                   :  '**If you do not reveal your bid, you will not be refunded.**',
ENS_Helper_11                   :  'Reveal Period lasts 2 days (48 hours).',
ENS_Helper_12                   :  'You will unlock your account, enter the <u>Bid Amount</u>, and the <u>Secret Phrase</u>.',
ENS_Helper_13                   :  'In the event that two parties bid exactly the same amount, the first bid revealed will win.',
ENS_Helper_14                   :  '4) Finalize the Auction',
ENS_Helper_15                   :  'Once the auction has ended (after 5 days / 120 hours), the winner needs to finalize the auction in order to claim their new name.',
ENS_Helper_16                   :  'The winner will be refunded the difference between their bid and the next-highest bid. If you are the only bidder, you will be refunded all but 0.01 ETH.',
ENS_Helper_17                   :  'More Information',
ENS_Helper_18                   :  'The auction for this registrar is a blind auction, and is described in',
ENS_Helper_19                   :  'Basically, no one can see *anything* during the auction.',
ENS_Helper_20                   :  'ENS: Read the Docs',
ENS_Helper_21                   :  'Announcing the Ethereum Name Service Relaunch Date!',
ENS_Helper_22                   :  'Knowledge Base: ENS',
ENS_Helper_23                   :  'Debugging a [BAD INSTRUCTION] Reveal',
ENS_Helper_24                   :  'Please try the above before relying on support for reveal issues as we are severely backlogged on support tickets. We\'re so sorry. :(',

EOS_01                          :  '**Generate EOS Key-pair**',
EOS_02                          :  '**Register / Map your EOS Key**',
EOS_03                          :  'Select `register`',
EOS_04                          :  'Enter your **EOS Public Key** <--- CAREFUL! EOS PUBLIC KEY!',
EOS_05                          :  'Fund EOS Contract on Send Page',
EOS_06                          :  'Go to Send Ether & Tokens Page',
EOS_07                          :  'Unlock same wallet you are unlocking here.',
EOS_08                          :  'Send Amount you want to Contribute to `0xd0a6E6C54DbC68Db5db3A091B171A77407Ff7ccf`',
EOS_09                          :  'Claim EOS Tokens',
EOS_10                          :  'Select `claimAll`.',

/* Onboarding */
ONBOARD_welcome_title           :  'Welcome to MyEtherWallet.com',
ONBOARD_welcome_content__1      :  'Please take some time to understand this for your own safety. 🙏',
ONBOARD_welcome_content__2      :  'Your funds will be stolen if you do not heed these warnings.',
ONBOARD_welcome_content__3      :  'We know this click-through stuff is annoying. We are sorry.',
ONBOARD_welcome_content__4      :  'What is MEW? ',
ONBOARD_welcome_content__5      :  'MyEtherWallet is a free, open-source, client-side interface.',
ONBOARD_welcome_content__6      :  'We allow you to interact directly with the blockchain while remaining in full control of your keys &amp; your funds.',
ONBOARD_welcome_content__7      :  '**You** and **only you** are responsible for your security.',
ONBOARD_welcome_content__8      :  'We cannot recover your funds or freeze your account if you visit a phishing site or lose your private key.',
ONBOARD_bank_title              :  'MyEtherWallet is not a Bank',
ONBOARD_bank_content__1         :  'When you open an account with a bank or exchange, they create an account for you in their system.',
ONBOARD_bank_content__2         :  'The bank keeps track of your personal information, account passwords, balances, transactions and ultimately your money.',
ONBOARD_bank_content__3         :  'The bank charge fees to manage your account and provide services, like refunding transactions when your card gets stolen.',
ONBOARD_bank_content__4         :  'The bank allows you to write a check or charge your debit card to send money, go online to check your balance, reset your password, and get a new debit card if you lose it.',
ONBOARD_bank_content__5         :  'You have an account *with the bank or exchange* and they decide how much money you can send, where you can send it, and how long to hold on a suspicious deposit. All for a fee.',
ONBOARD_welcome_title__alt      :  'Introduction',
ONBOARD_interface_title         :  'MyEtherWallet is an Interface',
ONBOARD_interface_content__1    :  'When you create an account on MyEtherWallet you are generating a cryptographic set of numbers: your private key and your public key (address).',
ONBOARD_interface_content__2    :  'The handling of your keys happens entirely on your computer, inside your browser.',
ONBOARD_interface_content__3    :  'We never transmit, receive or store your private key, password, or other account information.',
ONBOARD_interface_content__4    :  'We do not charge a transaction fee.',
ONBOARD_interface_content__5    :  'You are simply using our **interface** to interact **directly with the blockchain**.',
ONBOARD_interface_content__6    :  'If you send your *public key (address)* to someone, they can send you ETH or tokens. 👍',
ONBOARD_interface_content__7    :  'If you send your *private key* to someone, they now have full control of your account. 👎',
ONBOARD_bank_title__alt         :  'MEW isn\'t a Bank',
ONBOARD_blockchain_title__alt   :  'WTF is a Blockchain?',
ONBOARD_blockchain_skip         :  'I already know what a blockchain is...',
ONBOARD_blockchain_title        :  'Wait, WTF is a Blockchain?',
ONBOARD_blockchain_content__1   :  'The blockchain is like a huge, global, decentralized spreadsheet.',
ONBOARD_blockchain_content__2   :  'It keeps track of who sent how many coins to whom, and what the balance of every account is.',
ONBOARD_blockchain_content__3   :  'It is stored and maintained by thousands of people (miners) across the globe who have special computers.',
ONBOARD_blockchain_content__4   :  'The blocks in the blockchain are made up of all the individual transactions sent from MyEtherWallet, MetaMask, Exodus, Mist, Geth, Parity, and everywhere else.',
ONBOARD_blockchain_content__5   :  'When you see your balance on MyEtherWallet.com or view your transactions on [etherscan.io](https://etherscan.io), you are seeing data on the blockchain, not in our personal systems.',
ONBOARD_blockchain_content__6   :  'Again: **we are not a bank**.',
ONBOARD_interface_title__alt    :  'MEW is an Interface',
ONBOARD_why_title__alt          :  'But...why does this matter?',
ONBOARD_why_title               :  'Why are you making me read all this?',
ONBOARD_why_content__1          :  'Because we need you to understand that we **cannot**...',
ONBOARD_why_content__2          :  'Access your account or send your funds for you X.',
ONBOARD_why_content__3          :  'Recover or change your private key.',
ONBOARD_why_content__4          :  'Recover or reset your password.',
ONBOARD_why_content__5          :  'Reverse, cancel, or refund transactions.',
ONBOARD_why_content__6          :  'Freeze accounts.',
ONBOARD_why_content__7          :  '**You** and **only you** are responsible for your security.',
ONBOARD_why_content__8          :  'Be diligent to keep your private key and password safe. Your private key is sometimes called your mnemonic phrase, keystore file, UTC file, JSON file,  wallet file.',
ONBOARD_why_content__9          :  'If you lose your private key or password, no one can recover it.',
ONBOARD_why_content__10         :  'If you enter your private key on a phishing website, you will have **all your funds taken**.',
ONBOARD_blockchain_title__alt   :  'WTF is a Blockchain?',
ONBOARD_point_title__alt        :  'What\'s the Point of MEW then?',
ONBOARD_whymew_title            :  'If MyEtherWallet can\'t do those things, what\'s the point?',
ONBOARD_whymew_content__1       :  'Because that is the point of decentralization and the blockchain.',
ONBOARD_whymew_content__2       :  'You don\'t have to rely on your bank, government, or anyone else when you want to move your funds.',
ONBOARD_whymew_content__3       :  'You don\'t have to rely on the security of an exchange or bank to keep your funds safe.',
ONBOARD_whymew_content__4       :  'If you don\'t find these things valuable, ask yourself why you think the blockchain and cryptocurrencies are valuable. 😉',
ONBOARD_whymew_content__5       :  'If you don\'t like the sound of this, consider using [Coinbase](https://www.coinbase.com/) or [Blockchain.info](https://blockchain.info/wallet/#/signup). They have more familiar accounts with usernames & passwords.',
ONBOARD_whymew_content__6       :  'If you are scared but want to use MEW, [get a hardware wallet](https://kb.myetherwallet.com/hardware-wallets/hardware-wallet-recommendations.html)! These keep your keys secure.',
ONBOARD_why_title__alt          :  'But...why?',
ONBOARD_secure_title            :  'How To Protect Yourself & Your Funds',
ONBOARD_secure_1_title          :  'How To Protect Yourself from Phishers',
ONBOARD_secure_1_content__1     :  'Phishers send you a message with a link to a website that looks just like MyEtherWallet, EtherDelta, Paypal, or your bank, but is not the real website. They steal your information and then steal your money.',
ONBOARD_secure_1_content__2     :  'Install [EAL](https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn) or [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) or [Cryptonite by Metacert](https://chrome.google.com/webstore/detail/cryptonite-by-metacert/keghdcpemohlojlglbiegihkljkgnige) or the [MyEtherWallet Chrome Extension](https://chrome.google.com/webstore/detail/myetherwallet-cx/nlbmnnijcnlegkjjpcfjclmcfggfefdm) to block malicious websites.',
ONBOARD_secure_1_content__3     :  'Always check the URL: `https://vintage.myetherwallet.com`.',
ONBOARD_secure_1_content__4     :  'Always make sure the URL bar has `MYETHERWALLET INC` in green.',
ONBOARD_secure_1_content__5     :  'Do not trust messages or links sent to you randomly via email, Slack, Reddit, Twitter, etc.',
ONBOARD_secure_1_content__6     :  'Always navigate directly to a site before you enter information. Do not enter information after clicking a link from a message or email.',
ONBOARD_secure_1_content__7     :  '[Install an AdBlocker](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en) and do not click ads on your search engine (e.g. Google).',
ONBOARD_point_title__alt_2      :  'What\'s the point?',
ONBOARD_secure_2_title          :  'How To Protect Yourself from Scams',
ONBOARD_secure_2_content__1     :  'People will try to get you to give them money in return for nothing.',
ONBOARD_secure_2_content__2     :  'If it is too good to be true, it probably is.',
ONBOARD_secure_2_content__3     :  'Research before sending money to someone or some project. Look for information on a variety of websites and forums. Be wary.',
ONBOARD_secure_2_content__4     :  'Ask questions when you don\'t understand something or it doesn\'t seem right.',
ONBOARD_secure_2_content__5     :  'Don\'t let fear, FUD, or FOMO win over common sense. If something is very urgent, ask yourself "why?". It may be to create FOMO or prevent you from doing research.',
ONBOARD_secure_3_title__alt     :  'Phuck Phishers',
ONBOARD_secure_3_title          :  'How To Protect Yourself from Loss',
ONBOARD_secure_3_content__1     :  'If you lose your private key or password, it is gone forever. Don\'t lose it.',
ONBOARD_secure_3_content__2     :  'Make a backup of your private key and password. Do NOT just store it on your computer. Print it out on a piece of paper or save it to a USB drive.',
ONBOARD_secure_3_content__3     :  'Store this paper or USB drive in a different physical location. A backup is not useful if it is destroyed by a fire or flood along with your laptop.',
ONBOARD_secure_3_content__4     :  'Do not store your private key in Dropbox, Google Drive, or other cloud storage. If that account is compromised, your funds will be stolen.',
ONBOARD_secure_3_content__5     :  'If you have more than 1-week\'s worth of pay worth of cryptocurrency, get a hardware wallet. No excuses. It\'s worth it. I promise.',
ONBOARD_secure_3_content__6     :  '[Even more Security Tips!](https://kb.myetherwallet.com/getting-started/protecting-yourself-and-your-funds.html)',
ONBOARD_secure_2_title__alt_2   :  'Screw Scams',
ONBOARD_final_title__alt        :  'One more click & you\'re done! 🤘',
ONBOARD_final_title             :  'Alright, I\'m done lecturing you!',
ONBOARD_final_subtitle          :  'Sorry for being like this. Onwards!',
ONBOARD_final_content__1        :  'Create a wallet',
ONBOARD_final_content__2        :  'Get a hardware wallet',
ONBOARD_final_content__3        :  'How to Set up MEW + MetaMask',
ONBOARD_final_content__4        :  'How to Run MEW Offline / Locally',
ONBOARD_final_content__5        :  'How to Send via Ledger hardware wallet',
ONBOARD_final_content__6        :  'How to Send via TREZOR hardware wallet',
ONBOARD_final_content__7        :  'How to Send via MetaMask',
ONBOARD_final_content__8        :  'Learn More or Contact Us',
ONBOARD_final_content__9        :  'OMG, please just let me send FFS.',
ONBOARD_resume                  :  'It looks like you didn\'t finish reading through these slides last time. ProTip: Finish reading through the slides 😉',

NAV_AddWallet: 'اضافه کردن کیف پول ',
NAV_BulkGenerate: 'ساخت جمعی ',
NAV_Contact: 'مخاطب ',
NAV_Contracts: 'قراردادها ',
NAV_DeployContract: 'ایجاد قرارداد ',
NAV_ENS: 'ENS ',
NAV_GenerateWallet: 'ساخت کیف پول ',
NAV_Help: 'کمک ',
NAV_InteractContract: 'ارتباط با قرارداد ',
NAV_Multisig: 'چند امضایی ',
NAV_MyWallets: 'کیف پول های من ',
NAV_Offline: 'ارسال بصورت آفلاین ',
NAV_SendEther: 'ارسال اتر و توکن ',
NAV_SendTokens: 'ارسال توکن ',
NAV_Swap: ' یا مبادله ',
NAV_ViewWallet: 'مشاهده اطلاعات کیف پول ',
NAV_YourWallets: 'کیف پول های شما ',

/* General */

x_AddessDesc: 'ممکن است این را با عنوان "" شماره حساب"" یا ""کلید عمومی"" بشناسید. این چیزی ست که برای افراد دیگر می فرستید تا بتوانند برای شما اتر بفرستند. این آیکون راه آسان تری ست که بتوانید آدرس خود را بشناسید. ',
x_Address: 'آدرس شما ',
x_Cancel: 'لغو ',
x_CSV: 'فایل CSV (رمزنگاری نشده) ',
x_Download: 'دانلود ',
x_Json: 'فایل JASON (رمزنگاری نشده) ',
x_JsonDesc: 'این مدل رمزنگاری نشده JASON از کلید خصوصی شماست. این بدان معناست که به رمزعبور احتیاج ندارید اما هر کس که به فایل JASON شما دسترسی داشته باشد می تواند به کیف پول و اترهای شما بدون رمزعبور دسترسی داشته باشد. ',
x_Keystore: 'فایل Keystore (UTC / JSON · Recommended · Encrypted) ',
x_Keystore2: 'فایل Keystore (UTC / JSON) ',
x_KeystoreDesc: 'این فایل Keystore با فرمت استفاده شده توسط Mist همخوانی دارد، در نتیجه می توانید به راحتی در آینده آن را منتقل کنید. این فایل پیشنهادی برای دانلود و ذخیره بعنوان نسخه پشتیبان است. ',
x_Mnemonic: 'x_Mnemonic',
x_ParityPhrase: 'x_ParityPhrase',
x_Password: 'رمز عبور ',
x_Print: 'پرینت از کیف پول کاغذی ',
x_PrintDesc: 'گزینه پرینت را بزنید و آن را با فرمت PDF ذخیره کنید. حتی اگر پرینتر ندارید! ',
x_PrintShort: 'پرینت ',
x_PrivKey: 'کلید خصوصی (رمزنگاری نشده) ',
x_PrivKey2: 'کلید خصوصی ',
x_PrivKeyDesc: 'این مدل رمزنگاری نشده کلید خصوصی شماست و بدان معناست که رمزعبوری لازم نیست. اگر فردی بتواند به کلید خصوصی رمزنگاری نشده شما دست پیدا کند، بدون نیاز به رمزعبور می تواند به کیف پول شما دسترسی داشته باشد. به همین خاطر نسخه های رمزنگاری شده بیشتر توصیه می شود. ',
x_Save: 'ذخیره ',
x_TXT: 'فایل TXT (رمزنگاری نشده) ',
x_Wallet: 'کیف پول ',

/* Header */

CX_Tagline: 'افزونه Chrome Extension از کیف پول اتر که بصورت متن باز و در سمت کاربر است',
CX_Warning_1: 'مطمئن شوید که از کیف پول هایی که در اینجا نگهداری می کنید نسخه پشتیبان بیرونی دارید. اتفاقات مختلفی می تواند باعث شود تا اطلاعاتی که در این Chrome Extension دارید از دست برود، مثلا uninstall کردن و دوباره install کردن افزونه. این افزونه راهی ست برای دسترسی راحت تر به کیف پولتان، نه راهی برای داشتن نسخه پشتیبان از آن. ',
MEW_Tagline: 'MEW_Tagline',
MEW_Warning_1: 'همیشه قبل از استفاده از کیف پول خود و یا ساختن کیف پول جدید آدرس URL را چک کنید. حواستان به سایت های فیشینگ باشد. ',

/* Footer */

FOOTER_1: 'ابزاری متن باز و سمت مشتری برای برقراری تعامل امن و آسان با شبکه اتریوم. ',
FOOTER_1b: 'ساخته شده توسط ',
FOOTER_2: 'از کمک های مالی بسیار قدردانی می شود. ',
FOOTER_3: 'تولید کیف پول سمت کاربر توسط ',
FOOTER_4: 'رفع مسئولیت ',

/* Sidebar */

sidebar_AccountInfo: 'اطلاعات حساب کاربری ',
sidebar_AccountAddr: 'آدرس حساب کاربری ',
sidebar_AccountBal: 'موجودی حساب ',
sidebar_TokenBal: 'موجودی توکن ها ',
sidebar_Equiv: 'ارزش های معادل ',
sidebar_TransHistory: 'سابقه تراکنش ها ',
sidebar_donation: 'وبسایت MyEtherWallet یک سرویس متن باز و رایگان است که وقف امنیت و حریم خصوصی شما شده است. هرچه مقدار کمک های مالی بیشتر باشد، می توانیم زمان بیشتری برای ایجاد ویژگی های جدید، خواندن نظرات شما و ارائه محصولاتی که می خواهید داشته باشیم. ما تنها دو نفر هستیم که سعی در تغییر جهان داریم. کمک می کنید؟ ',
sidebar_donate: 'یا کمک مالی ',
sidebar_thanks: 'با تشکر از شما ',

/* Decrypt Panel */

decrypt_Access: 'چطور می خواهید به کیف گولتان دسترسی داشته باشید؟ ',
decrypt_Title: 'فرمت (مدل) کیف پول خصوصی خود را انتخاب کنید. ',
decrypt_Select: 'یک کیف پول انتخاب کنید. ',

/* Mnemonic */

MNEM_1: 'لطفا آدرسی که می خواهید با آن ارتباط برقرار کنید را وارد کنید. ',
MNEM_2: 'با یک عبارت HD mnemonic می توانید به چند کیف پول یا آدرس دسترسی داشته باشید. در حال حاضر آدرسی که می خواهید از آن استفاده کنید را وارد کنید. ',
MNEM_more: 'آدرس های بعدی ',
MNEM_prev: 'آدرس های قبلی ',

/* Hardware wallets */

x_Ledger: 'لجر نانو اس (Ledger Nano S) ',
ADD_Ledger_1: 'لجر نانو اس خود را متصل کنید ',
ADD_Ledger_2: 'برنامه Ethereum را باز کنید (یا یک برنامه قرارداد را) ',
ADD_Ledger_2_Exp: 'برنامه Expanse را باز کنید (یا یک برنامه قرارداد را) ',
ADD_Ledger_2_Ubq: 'برنامه Ubiq را باز کنید (یا یک برنامه قرارداد را) ',
ADD_Ledger_3: 'تایید کنید که پشتیبانی مرورگر (Browser Support) از قسمت Settings فعالی است. ',
ADD_Ledger_4: 'اگر هیچ حمایتی از طرف مرورگرها در تنظیمات پیدا نشد، مطمئن شوید که نسخه [Firmware شماره 1.2](https://www.ledgerwallet.com/apps/manager) را دارید. ',
ADD_Ledger_0a: 'با یک کانکشن امن (SSL) دوباره MyEtherWallet را باز کنید. ',
ADD_Ledger_0b: 'با استفاده از [Chrome](https://www.google.com/chrome/browser/desktop/) یا [Opera](https://www.opera.com/) دوباره MyEtherWallet را باز کنید. ',
ADD_Ledger_scan: 'به Ledger Nano S وصل شوید. ',
x_Trezor: 'TREZOR ',
ADD_Trezor_scan: 'به TREZOR وصل شوید. ',

/* Add Wallet */

ADD_Label_1: 'می خواهید چه کاری انجام دهید؟ ',
ADD_Radio_1: 'ساخت کیف پول جدید ',
ADD_Radio_2: 'فایل کیف پول خود را انتخاب کنید (Keystore / JASON) ',
ADD_Radio_2_alt: 'فایل کیف پول خود را انتخاب کنید ',
ADD_Radio_2_short: 'نوع فایل را انتخاب کنید: ',
ADD_Radio_3: 'کلید خصوصی خود را وارد کنید ',
ADD_Radio_4: 'یک حساب کاربری جهت نظارت وارد کنید. ',
ADD_Radio_5: 'رمز mnemonic خود را وارد کنید ',
ADD_Radio_5_Path: 'ADD_Radio_5_Path',
ADD_Radio_5_woTrezor: '(Jaxx, Metamask, Exodus, imToken) ',
ADD_Radio_5_withTrezor: '(Jaxx, Metamask, Exodus, imToken, TREZOR) ',
ADD_Radio_5_PathAlternative: '(Ledger) ',
ADD_Radio_5_PathTrezor: '(TREZOR) ',
ADD_Radio_5_PathCustom: '(Custom) ',
ADD_Label_2: 'یک نام اختصاری انتنخاب کنید ',
ADD_Label_3: 'کیف پول شما رمزنگاری شده است. لطفا رمزعبور خود را وارد کنید. ',
ADD_Label_4: 'یک حساب کاربری جهت نظارت وارد کنید. ',
ADD_Warning_1: 'شما می توانید هر حسابی را در قسمت کیف پول ها اضافه کنید تا بدون نیاز به آپلود کردن کلید خصوصی بتوانید آن را ""مشاهده"" کنید. این بدان معنا **نیست** که به کیف پول دسترسی دارید یا می توانید از آن اتر ارسال کنید. ',
ADD_Label_5: 'آدرس را وارد کنید. ',
ADD_Label_6: 'قفل کیف پول خود را باز کنید. ',
ADD_Label_6_short: 'باز کردن قفل ',
ADD_Label_7: 'اضافه کردن حساب ',
ADD_Label_8: 'رمز عبور (اختیاری) ',

/* My Wallet */

MYWAL_Nick: 'نام اختصاری کیف پول ',
MYWAL_Address: 'آدرس کسف پول ',
MYWAL_Bal: 'موجودی ',
MYWAL_Edit: 'ویرایش ',
MYWAL_View: 'مشاهده ',
MYWAL_Remove: 'پاک کردن ',
MYWAL_RemoveWal: 'پاک کردن کیف پول ',
MYWAL_WatchOnly: 'حساب های کاربری که تنها قابل نظارت هستند',
MYWAL_Viewing: 'مشاهده کیف پول ',
MYWAL_Hide: 'مخفی کردن اطلاعات کیف پول ',
MYWAL_Edit_2: 'ویرایش کیف پول ',
MYWAL_Name: 'نام کیف پول ',
MYWAL_Content_1: 'اخطار! شما در حال پاک کردن کیف پول خود هستید. ',
MYWAL_Content_2: 'پیش از پاک کردن آن مطمئن شوید که کلید خصوصی و (یا) فایل Keystore و رمزعبور را ذخیره کرده اید. ',
MYWAL_Content_3: ',اگر در آینده بخواهید از این کیف پول با استفاده از  MyEtherWallet CX خود استفاده کنید، باید بصورت دستی دوباره آن را اضافه کنید. این کار با استفاده از key/JASON و رمزعبور انجام می شود.',

/* Generate Wallets */

GEN_desc: 'اگر می خواهید چند کیف پول بسازید می توانید از اینجا اقدام کنید. ',
GEN_Label_1: 'یک رمز عبور قوی انتخاب کنید (حداقل 9 کاراکتر) ',
GEN_Placeholder_1: 'فراموش نکنید که این را ذخیره کنید. ',
GEN_SuccessMsg: 'ساخت کیف پول شما با موفقیت انجام شد. ',
GEN_Label_2: 'فایل کیف پول خود را ذخیره کنید. رمزعبور خود را فراموش نکنید. ',
GEN_Label_3: 'آدرس خود را ذخیره کنید ',
GEN_Label_4: 'اختیاری: از کیف پول کاغذی خود یک پرینت تهیه کنید و یا کد QR آن را نگهداری کنید. ',

/* Bulk Generate Wallets */

BULK_Label_1: 'تعداد کیف پول هایی که می خواهید بسازید ',
BULK_Label_2: 'ساخت کیف پول ها ',
BULK_SuccessMsg: 'ساخت کیف پول های شما با موفقیت انجام شد. ',

/* Sending Ether and Tokens */

SEND_addr: 'به آدرس ',
SEND_amount: 'مقدار ارسالی ',
SEND_amount_short: 'مقدار ',
SEND_custom: 'SEND_custom',
SEND_gas: 'سوخت ',
SEND_TransferTotal: 'ارسال کل موجودی ',
SEND_generate: 'ایجاد تراکنش ',
SEND_raw: 'تراکنش خام ',
SEND_signed: 'تراکنش امضا شده ',
SEND_trans: 'ارسال تراکنش ',
SENDModal_Title: 'اخطار ',
// "/* full sentence reads ""You are about to send ""10 ETH"" to address ""0x1234"". Are you sure you want to do this? "" */" : "شما در حال ارسال ""10 اتر"" به آدرس ""0x1234"" هستید. آیا از این کار اطمینان دارید؟ ',
SENDModal_Content_1: 'بزودی ارسال را انجام خواهید داد. ',
SENDModal_Content_2: 'به آدرس ',
SENDModal_Content_3: 'آیا از انجام این کار اطمینان دارید؟ ',
SENDModal_Content_4: 'توجه: اگر با یک خطا (error) مواجه شدید، احتمالا باید به حساب خود اتر اضافه کنید تا بتواند هزینه سوخت ارسال توکن ها را پوشش دهد. (سوخت با اتر پرداخت می شود) ',
SENDModal_No: 'نه. من را از اینجا خارج کن ',
SENDModal_Yes: 'بله مطمئن هستم. تراکنش را انجام بده ',

/* Tokens */

TOKEN_Addr: 'Token Contract Address',
TOKEN_Symbol: 'علامت توکن ',
TOKEN_Dec: 'Decimals',
TOKEN_show: 'نمایش تمام توکن ها ',
TOKEN_hide: 'پنهان سازی توکن ها ',

/* Send Transaction */

TRANS_desc: 'اگر می خواهید توکن ارسال کنید لطفا به صفحه ""ارسال توکن"" مراجعه کنید. ',
TRANS_warning: 'اگر از توابع ""فقط ETH"" یا ""فقط ETC"" استفاده می کنید، شما در حال ارسال از طریق یک قرارداد هستید. برخی از سرویس ها با قبول چنین تراکنش هایی مشکل دارند. بیشتر ',
TRANS_advanced: 'پیشرفته: افزودن اطلاعات ',
TRANS_data: 'اطلاعات ',
TRANS_gas: 'سقف سوخت ',
TRANS_sendInfo: 'هزینه یک تراکنش استاندارد با سوخت 21000 معادل با 0.000441 خواهد بود. ما از هزینه گاز 0.000000021 اتر که کمی بالاتر از هزینه متوسط است استفاده می کنیم تا مطمئن شویم که سریع استخراج می شود. ما کارمزد تراکنش نمی گیریم. ',

/* Offline Transaction */

OFFLINE_Title: 'ایجاد و ارسال تراکنش آفلاین ',
OFFLINE_Desc: 'تولید یک تراکنش آفلاین در سه مرحله انجام می گیرد. مراحل 1 و 3 را باید در یک کامپیوتر آنلاین و مرحله 2 را در یک کامپیوتر آفلاین (یا قرنطینه) تکمیل کرد. این کار تضمین می کند که کلیدهای خصوصی شما با هیچ دستگاه متصل به اینترنتی ارتباط برقرار نکند. ',
OFFLLINE_Step1_Title: 'مرحله 1: تولید اطلاعات (کامپیوتر آنلاین) ',
OFFLINE_Step1_Button: 'تولید اطلاعات ',
OFFLINE_Step1_Label_1: 'از آدرس ',
OFFLINE_Step1_Label_2: 'توجه: این آدرس فرستنده است و نه آدرس گیرنده. این آدرس فعلا از حساب کاربری (اکانت) اصلی تولید شده است. اگر از یک کامپیوتر قرنطینه استفاده می شود، این آدرس باید آدرس حساب کاربری محل ذخیره سازی غیر متصل باشد ',
OFFLINE_Step2_Title: 'مرحله 2: تولید تراکنش (کامپیوتر آفلاین) ',
OFFLINE_Step2_Label_1: 'به آدرس ',
OFFLINE_Step2_Label_2: 'مقدار ارسالی ',
OFFLINE_Step2_Label_3: 'قیمت سوخت ',
OFFLINE_Step2_Label_3b: 'این قسمت در مرحله 1 بر روی کامپیوتر آنلاین شما نمایش داده شد ',
OFFLINE_Step2_Label_4: 'حد سوخت ',
OFFLINE_Step2_Label_4b: 'مقدار 2100 میزان پیش فرض حد سوخت است. زمانی که اطلاعات add\'l یا قراردادی را ارسال می کنید ممکن است نیاز به تغییر آن وجود داشته باشد. هر مقداری از سوخت که مورد استفاده قرار نگیرد به شما بازگردانده می شود. ',
OFFLINE_Step2_Label_5: 'OFFLINE_Step2_Label_5',
OFFLINE_Step2_Label_5b: 'این قسمت در مرحله 1 بر روی کامپیوتر آنلاین شما نمایش داده شد ',
OFFLINE_Step2_Label_6: 'اطلاعات ',
OFFLINE_Step2_Label_6b: 'این قسمت اختیاری است. معمولا زمانی که تراکنشی به قراردی فرستاده می شود اطلاعات مورد استفاده قرار می گیرد. ',
OFFLINE_Step2_Label_7: 'کلید خصوصی/ JASON خود را وارد/انتخاب کنید ',
OFFLINE_Step3_Title: 'مرحله 3: ارسال/ انتشار تراکنش (کامپیوتر آنلاین) ',
OFFLINE_Step3_Label_1: 'تراکنش امضا شده از مرحله 2 را در این قسمت قرار داده و دکمه ""SEND TRANSACTION"" را بزنید. ',

/* Contracts */

x_Access: 'دسترسی ',
CONTRACT_Title: 'آدرس قرارداد ',
CONTRACT_Title_2: 'انتخاب قرارداد موجود ',
CONTRACT_Json: 'ظاهر کاربری ABI/ JASON ',
CONTRACT_Interact_Title: 'خواندن/ نوشتن قرارداد ',
CONTRACT_Interact_CTA: 'یک تابع را انتخاب کنید ',
CONTRACT_ByteCode: 'Byte Code ',
CONTRACT_Read: 'بخوان ',
CONTRACT_Write: 'بنویس ',
DEP_generate: 'ساخت Bytecode ',
DEP_generated: 'Bytecode ساخته شده ',
DEP_signtx: 'امضای تراکنش ',
DEP_interface: 'ظاهر کاربری ساخته شده ',

/* Node Switcher */
NODE_Title: 'نود یا گره خود را بسازید. ',
NODE_Subtitle: 'جهت وصل شدن به یک نود محلی... ',
NODE_Warning: 'نود شما باید HTTPS باشد تا بتوانید از طریق MyEtherWallet.com به آن متصل شوید. می توانید [مخزن MyEtherWallet را دانلود و اجرا کنید](https://github.com/kvhnuke/etherwallet/releases/latest) تا بتوانید به هر نودی متصل شوید؛ یا می توانید از طریق  [LetsEncrypt](https://letsencrypt.org/) مدرک SSL رایگان دریافت کنید. ',
NODE_Name: 'نام نود ',
NODE_Port: 'پورت نود ',
NODE_CTA: 'ذخیره و استفاده نود کاستوم ',

/* Swap / Exchange */
SWAP_rates: 'امتیازهای فعلی ',
SWAP_init_1: 'I want to swap my ,',
SWAP_init_2: ' for , // ""I want to swap my X ETH for X BTC',
SWAP_init_CTA: 'ادامه ',
SWAP_information: 'اطلاعات شما ',
SWAP_send_amt: 'مقدار ارسالی ',
SWAP_rec_amt: 'مقدار دریافتی ',
SWAP_your_rate: 'امتیاز شما ',
SWAP_rec_add: 'آدرس دریافت کردن شما ',
SWAP_start_CTA: 'شروع جابجایی ',
SWAP_ref_num: 'شماره مرجع شما ',
SWAP_time: 'زمان باقیمانده برای ارسال ',
SWAP_elapsed: 'Time elapsed since sent ',
SWAP_progress_1: 'سفارش ثبت شد ',
SWAP_progress_2: 'Waiting for your , // Waiting for your BTC...',
SWAP_progress_3: 'Received! , // ETH Received!',
SWAP_progress_4: 'Sending your {{orderResult.output.currency}} ,',
SWAP_progress_5: 'Order Complete ,',
SWAP_order_CTA: 'Please send , // Please send 1 ETH...',
SWAP_unlock: 'Unlock your wallet to send ETH or Tokens directly from this page. ',

/* Sign Message */
NAV_SignMsg: 'امضای پیام ',
MSG_message: 'پیام ',
MSG_date: 'تاریخ ',
MSG_signature: 'امضا ',
MSG_verify: 'تایید پیام ',
MSG_info1: 'تاریخ فعلی را وارد کنید تا امکان استفاده دوباره از امضا در تاریخ دیگری وجود داشته باشد. ',
MSG_info2: 'اسم اختصاری خود و جایی که از آن استفاده می کنید را وارد کنید تا فرد دیگری نتواند از آن استفاده کند. ',
MSG_info3: 'یک دلیل مخصوص برای این پیام انتخاب کنید تا نتوان از آن برای مقصود دیگری استفاده کرد. ',

/* View Wallet Details */

VIEWWALLET_Subtitle: 'این موضوع به شما اجازه می دهد که نسخه های مختلفی از کلید خصوصی را دانلود کنید و از کیف پول کاغذی خود دوباره پرینت بگیرید. شاید بخواهید این کار را جهت انتقال حساب خود به [Geth یا Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/) انجام دهید. اگر می خواهید موجودی خود را ببینید پیشنهاد می کنیم که از یک مرورگر بلاکچین مثل [etherscan.io](https://etherscan.io/) استفاده کنید. ',
VIEWWALLET_Subtitle_Short: 'این موضوع به شما اجازه می دهد که نسخه های مختلفی از کلید خصوصی را دانلود کنید و از کیف پول کاغذی خود دوباره پرینت بگیرید. ',
VIEWWALLET_SuccessMsg: 'با موفقیت انجام شد. می توانید جزئیات کیف پول خود را ببینید. ',

/* Chrome Extension */

CX_error_1: 'شما هیچ کیف پول ذخیره شده ای ندارید. گزینه [""اضافه کردن کیف پول""](/cx-wallet.html#add-wallet)  را انتخاب کنید تا بتوانید یکی بسازید. ',
CX_quicksend: 'CX_quicksend',

/* Error Messages */

ERROR_0                         :  '(error_01) لطفا مقدار معتبر وارد  کنید.. Please enter a valid amount.', // 0
ERROR_1                         :  '(error_02) رمزعبور انتخابی حداقل باید 9 حرف باشد. لطفا از یک رمزعبور قوی استفاده کنید.. Your password must be at least 9 characters. Please ensure it is a strong password.', // 1
ERROR_2                         :  '(error_03) این نوع از فایل کیف پول قابل شناسایی نیست.. Sorry! We don\'t recognize this type of wallet file.', // 2
ERROR_3                         :  '(error_04) این فایل کیف پول معتبر نیست.. This is not a valid wallet file.', // 3
ERROR_4                         :  '(error_05) این واحد وجود ندارد، لطفا یکی از واحدهای زیر را انتخاب کنید.. This unit doesn\'t exists, please use the one of the following units', // 4
ERROR_5                         :  '(error_06) آدرس نامعتبر است. Please enter a valid address.', // 5
ERROR_6                         :  '(error_07) رمز عبور نامعتبر است. Please enter a valid password.', // 6
ERROR_7                         :  '(error_08) مقدار نامعتبر است. Please enter valid decimals     (Must be an integer. Try 0-18.)', // 7
ERROR_8                         :  '(error_09) میزان حد سوخت نامعتبر است. Please enter a valid gas limit  (Must be an integer. Try 21000-4000000.)', // 8
ERROR_9                         :  '(error_10) داده نامعتبر است. Please enter a valid data value (Must be hex.)', // 9
ERROR_10                        :  '(error_11) میزان سوخت نامعتبر است. Please enter a valid gas price. (Must be an integer. Try 20 GWEI / 20000000000 WEI.)',
ERROR_11                        :  '(error_12) تراکنش امضا شده نامعتبر است Please enter a valid nonce (Must be an integer.)', // 11
ERROR_12                        :  '(error_13) قبلا کیف پولی با این نام ساخته شده است Invalid signed transaction.', // 12
ERROR_13                        :  '(error_14) کیف پول پیدا نشد A wallet with this nickname already exists.', // 13
ERROR_14                        :  '(error_15) Wallet not found.', // 14
ERROR_15                        :  '(error_16) کیف پولی با این آدرس در حافظه وجود دارد، لطفا صفحه کیف پول خود را چک کنید. Whoops. It doesn\'t look like a proposal with this ID exists yet or there is an error reading this proposal.', // 15 - NOT USED
ERROR_16                        :  '(error_17) برای پوشش هزینه سوخت باید حداقل 0.001 اتر در حساب خود داشته باشید. لطفا مقداری اتر اضافه کرده و دوباره امتحان کنید. A wallet with this address already exists in storage. Please check your wallets page.', // 16
ERROR_17                        :  '(error_18) Insufficient balance. Your gas limit * gas price + amount to send exceeds your current balance. Send more ETH to your account or use the "Send Entire Balance" button. If you believe this is in error, try pressing generate again. Required (d+) and got: (d+). [Learn More.](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)', // 17
ERROR_18                        :  '(error_19) کاراکتر غیرمعتبر است All gas would be used on this transaction. This means you have already voted on this proposal or the debate period has ended.', // 18
ERROR_19                        :  '(error_20) این توکن نامعتبر است Please enter a valid symbol', // 19
ERROR_20                        :  '(error_21) Not a valid ERC-20 token', // 20
ERROR_21                        :  '(error_22) لطفا یک نام نود (گره) معتبر وارد کنید Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.', // 21
ERROR_22                        :  '(error_23) لطفا url صحیح وارد کنید. در صورتی که از https استفاده می کنید url شما باید https باشد Please enter a valid node name', // 22
ERROR_23                        :  '(error_24) لطفا یک پورت معتبر وارد کنید Please enter a valid URL. If you are on https, your URL must be https', // 23
ERROR_24                        :  '(error_25) لطفا آیدی زنجیره معتبر وارد کنید Please enter a valid port.', // 24
ERROR_25                        :  '(error_26) لطفا ABI معتبر وارد کنید Please enter a valid chain ID.', // 25
ERROR_26                        :  '(error_27) کمترین مقدار: 0.01 ، بیشترین مقدار: Please enter a valid ABI.', // 26
ERROR_27                        :  '(error_28) برای دسترسی به این کیف پول در آینده به فایل Keystore و رمزعبور خود (یا کلید خصوصی) نیاز خواهید داشت. لطفا آن را ذخیره کنید و یک نسخه پشتیبان خارجی بسازید. اگر آن را ذخیره نکنید، هیچ راهی برای بازگرداندن کیف پول وجود ندارد. برای راهنمایی [صفحه کمک](https://vintage.myetherwallet.com/#help)  را مطالعه بفرمایید. Minimum amount: 0.01. Max amount:', // 27
ERROR_28                        :  '(error_29) لطفا شناسه و رمزعبور معتبر وارد کنید You need this `Keystore File + Password` or the `Private Key` (next page) to access this wallet in the future. ', // 28
ERROR_29                        :  '(error_30) لطفا نام ENS معتبر وارد کنید Please enter a valid user and password.', // 29
ERROR_30                        :  '(error_31) عبارت خصوصی نامعتبر است Please enter a valid name (7+ characters, limited punctuation)', // 30
ERROR_31                        :  '(error_32) Please enter a valid secret phrase.', // 31
ERROR_32                        :  '(error_33) Could not connect to the node. Refresh your page, try a different node (top-right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                        :  '(error_34) The wallet you have unlocked does not match the owner\'s address.', // 33
ERROR_34                        :  '(error_35) The name you are attempting to reveal does not match the name you have entered.', // 34
ERROR_35                        :  '(error_36) Input address is not checksummed. <a href="https://kb.myetherwallet.com/addresses/what-does-checksummed-mean.html" target="_blank" rel="noopener noreferrer">What does that mean?</a>', // 35
ERROR_36                        :  '(error_37) Please enter a valid TX hash', // 36
ERROR_37                        :  '(error_38) Please enter valid hex string. Hex only contains: 0x, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, a, b, c, d, e, f', // 37
ERROR_38                        :  '(error_39) Offer must have either price or reserve set to more than 0', // 38
ERROR_39                        :  '(error_40) Bid must be more than the specified minimum', // 39

GETH_Balance                    :  '(geth-01) موجودی کافی نیست. Insufficient balance. Your gas limit * gas price + amount to send exceeds your current balance. Send more ETH to your account or use the "Send Entire Balance" button. If you believe this is in error, try pressing generate again. Required (d+) and got: (d+). [Learn More.](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)',
GETH_Cheap                      :  '(geth-02) قیمت سوخت برای پذیرفته شدن کم است. Gas price too low for acceptance. Try raising the gas price to 21 GWEI via the dropdown in top-right.',
GETH_GasLimit                   :  '(geth-03) سوخت بیش از حد است. Exceeds block gas limit. Transaction cost exceeds current gas limit. Limit: (d+), got: (d+). Please lower the gas limit to 21000 (for sending) or 200000 (for sending tokens or contracts) and try again. [Learn More](https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html)',
GETH_InsufficientFunds          :  '(geth-04) موجودی برای سوخت * قیمت + مقدار کافی نیست. Insufficient balance. Your gas limit * gas price + amount to send exceeds your current balance. Send more ETH to your account or use the "Send Entire Balance" button. If you believe this is in error, try pressing generate again. Required (d+) and got: (d+). [Learn More.](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)',
GETH_IntrinsicGas               :  '(geth-05) سوخت اصلی کم است. Intrinsic gas too low. Try raising the gas price to 21 GWEI via the dropdown in top-right or the gas limit to 21000 (for sending) or 200000 (for sending tokens or contracts) and try again.',
GETH_InvalidSender              :  '(geth-06) ارسال کننده نامعتبر است. Invalid sender.',
GETH_NegativeValue              :  '(geth-07) مقدار منفی. Negative value.',
GETH_Nonce                      :  "(geth-08) This TX's [nonce](https://kb.myetherwallet.com/transactions/what-is-nonce.html) is too low. Try incrementing the nonce by pressing the Generate button again, or [replace the pending transaction](https://kb.myetherwallet.com/transactions/check-status-of-ethereum-transaction.html).",
GETH_NonExistentAccount         :  '(geth-09) حساب وجود ندارد و یا موجودی حساب کم است. Account does not exist or account balance too low',

PARITY_AlreadyImported          :  "(parity-01) A transaction with the same hash was already imported. It was probably already broadcast. To avoid duplicate transactions, check your address on [etherscan.io](https://etherscan.io) & wait 10 minutes before attempting to send again. [Learn More.](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)",
PARITY_GasLimitExceeded         :  "(parity-02) Transaction cost exceeds current gas limit. Limit: (d+), got: (d+). Please lower the gas limit to 21000 (for sending) or 200000 (for sending tokens or contracts) and try again. [Learn More](https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html)",
PARITY_InsufficientBalance      :  "(parity-03) Insufficient balance. The account you tried to send transaction from does not have enough funds. If you believe this is in error, try using the 'Send Entire Balance' button, or pressing generate again. Required (d+) and got: (d+). [Learn More.](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)",
PARITY_InsufficientGasPrice     :  "(parity-04) There is another transaction with same nonce in the queue, or the transaction fee is too low. Try incrementing the nonce by clicking the Generate button again. [Learn More.](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)",
PARITY_InvalidGasLimit          :  "(parity-05) Supplied gas limit is beyond limit. Try lowering the gas limit to 21000. [Learn More.](https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html)",
PARITY_LimitReached             :  "(parity-06) There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the gas price. [Learn More.](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)",
PARITY_Old                      :  "(parity-07) There is already a transaction with this [nonce](https://kb.myetherwallet.com/transactions/what-is-nonce.html). Try incrementing the nonce by pressing the Generate button again, or [replace the pending transaction](https://kb.myetherwallet.com/transactions/check-status-of-ethereum-transaction.html).",
PARITY_TooCheapToReplace        :  "(parity-08) TX Fee is too low. It does not satisfy your node's minimal fee (minimal: (d+), got: (d+)). Try increasing the gas price and/or gas limit. [Learn More.](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)",


SUCCESS_1: 'آدرس معتبر است ',
SUCCESS_2: 'کیف پول با موفقیت رمزگشایی شد ',
SUCCESS_3: 'تراکنش ثبت شد. TX ID ',
SUCCESS_4: 'کیف پول شما با موفقیت اضافه شد ',
SUCCESS_5: 'فایل انتخاب شد ',

WARN_Send_Link: 'شما از طریق یک لینک که آدرس، مقدار، سوخت، زمینه های داده و یا نوع تراکنش (مدل ارسال) که برای شما پر شده است را دارد به اینجا آمده اید. می توانید هر اطلاعاتی را پیش از انجام ارسال تغییر دهید. برای شروع، قفل کیف پول خود را باز کنید. ',

/* Tranlsation Info */
translate_version: '0.4_Alpha',
Translator_Desc: 'Persian Translation done by Coiniran.com team',
TranslatorName_1: 'Shayan Es',
TranslatorAddr_1: '0xc2285f89B5b228E9a51f2B80dd0712F0ac071C9e',
/* Translator 1,Insert Comments Here */
TranslatorName_2: 'TranslatorName_2',
TranslatorAddr_2: 'TranslatorAddr_2',
/* Translator 2,Insert Comments Here */
TranslatorName_3: 'TranslatorName_3',
TranslatorAddr_3: 'TranslatorAddr_3',
/* Translator 3,Insert Comments Here */
TranslatorName_4: 'TranslatorName_4',
TranslatorAddr_4: 'TranslatorAddr_4',
/* Translator 4,Insert Comments Here */
TranslatorName_5: 'TranslatorName_5',
TranslatorAddr_5: 'TranslatorAddr_5',
/* Translator 5,Insert Comments Here */

// "/* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */"

HELP_Warning: 'اگر قبل از 31دسامبر سال 2015 کیف پولی ساخته اید یا مخزن را دانلود کردید، لطفا لطفا کیف پول های خود را چک کنید و نسخه جدید مخزن را دانلود کنید. برای جزئیات کلیک کنید. ',
HELP_Desc: 'آیا سوال دیگری دارید؟ [با ما در ارتباط باشید](mailto:support@myetherwallet.com). ما به سوال شما در همین صفحه پاسخ خواهیم داد تا دیگران نیز از آن استفاده کنند. ',
HELP_Remind_Title: 'یادآوری ',
HELP_Remind_Desc_1: 'بخش هایی مثل Ethereum، MyEtherWallet.com و My EtherWallet CX و برخی دیگر از کتابخانه های زیرساختی که بر پایه Javascript است دائما در حال توسعه هستند. با اینکه ما آن ها را بطور کامل تست کردیم و ده ها هزار کیف پول با موفقیت در سراسر دنیا ساخته شده، همیشه احتمال اینکه اتفاقی غیرمنتظره رخ دهد و باعث از دست رفتن اتر شما شود وجود دارد. لطفا مراقب باشید و بیش از آنچه که در صورت از دست دادن آن برایتان مشکلی پیش نیاید سرمایه گذاری نکنید. اگر اتفاقی افتاد، بسیار متاسفیم، اما **ما مسئول از دست رفتن اتر نیستیم**. ',
HELP_Remind_Desc_2: 'گزینه هایی مثل MyEtherWallet.com و MyWtherWallet CX ""کیف پول وبی"" نیستند. شما یک حساب کاربری نمی سازید و اترهای خود را جهت نگهداری از آن ها به ما نمی دهید. هیچ داده ای از کامپیوتر یا مرورگر شما خارج نمی شود. ما کار را برای شما جهت ایجاد، ذخیره، دسترسی به اطلاعات و تعامل با بلاکچیین آسان می کنیم. ',
HELP_Remind_Desc_3: 'اگر رمز عبور و کلید خصوصی خود را ذخیره نکنید، هیچ راهی برای دسترسی دوباره به کیف پول خود و سرمایه موجود در آن نخواهید داشت. از آن ها در مکان های فیزیکی مختلف (نه فقط در کامپیوتر خود) چندین نسخه پشتیبان تهیه کنید. ',

HELP_0_Title: 'سوال 0: من تازه کار هستم. چگونه شروع کنم؟ ',
HELP_0_Desc_1: 'وبسایت MyEtherWallet به شما امکان ساخت کیف پول های جدید جهت ذخیره اتر (Ether)خود در آن را برای شما فراهم می کند تا دیگر نیازی به ذخیره سرمایه خود در یک صرافی نداشته باشید. این فرآیند بطور کامل بر روی کامپیوتر شما، و نه بر روی سرورها، انجام می شود. به همین خاطر زمانی که یک کیف پول جدید می سازید، **خودتان مسئول ایجاد یک نسخه پشتیبان از آن هستید**. ',
HELP_0_Desc_2: 'ایجاد یک کیف پول جدید ',
HELP_0_Desc_3: 'از کیف پول نسخه پشتیبان تهیه کنید ',
HELP_0_Desc_4: 'تایید کنید که به این کیف پول جدید دسترسی دارید و تمام اطلاعات لازم را ذخیره کرده اید. ',
HELP_0_Desc_5: 'به این کیف پول جدید، اتر منتقل کنید. ',

HELP_1_Title: 'سوال 1: چگونه یک کیف پول جدید بسازم؟ ',
HELP_1_Desc_1: 'به صفحه ""ساخت کیف پول"" مراجعه کنید. ',
HELP_1_Desc_2: 'به صفحه ""اضافه کردن کیف پول"" رفته و سپس ""ساخت کیف پول جدید"" را انتخاب کنید. ',
HELP_1_Desc_3: 'یک رمزعبور قوی انتخاب کنید. در صورتی که فکر می کنید رمز عبور خود را فراموش خواهید، آن را در جایی مطمئن ذخیره کنید. برای ارسال تراکنش به این رمز عبور نیاز خواهید داشت. ',
HELP_1_Desc_4: 'گزینه ""ساخت"" را انتخاب کنید. ',
HELP_1_Desc_5: 'کیف پول شما ساخته شد. ',

HELP_2a_Title: 'سوال 2 الف: چگونه از کیف پول خود یک نسخه پشتیبان (یا بک-آپ) تهیه کنم؟ ',
HELP_2a_Desc_1: 'همیشه باید نسخه پشتیبانی از کیف پول خود در چندین محل فیزیکی داشته باشید (مثلا روی usb یا یک تکه کاغذ) ',
HELP_2a_Desc_2: 'آدرس را ذخیره کنید. می توانید ان را برای خود نگه دارید و یا با سایرین به اشتراک بگذارید که در اینصورت سایر افراد می توانند برای شما اتر بفرستند. ',
HELP_2a_Desc_3: 'چند نسخه از کلید خصوصی خود را نگهداری کنید. داشتن کلید خصوصی برای دسترسی به اترهایتان و ارسال آن ها لازم است. سه نوع کلید خصوصی وجود دارد.',
HELP_2a_Desc_4: 'آدرس خود، نسخه های کلید خصوصی و مدل پی دی افی کیف پول کاغذی خود را در یک فولدر (پوشه) بگذارید و آن را در کامپیوتر و یک یو اس بی نگهداری کنید. ',
HELP_2a_Desc_5: 'در صورتی که پرینتر دارید از کیف پول خود یک پرینت تهیه کنید. در غیر اینصورت کلید خصوصی و آدرس را در کاغذی یادداشت کنید. این را جدای از کامپیوتر و usb در محلی امن نگهداری کنید. ',
HELP_2a_Desc_6: 'HELP_2a_Desc_6',

HELP_2b_Title: ',سوال 2 ب: ',
HELP_2b_Desc_1: 'به لینک زیر بروید: https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest ',
HELP_2b_Desc_2: 'بر روی dist-vX.X.X.X.zip  کلیک کنید. ',
HELP_2b_Desc_3: 'فایل زیپ را به یک کامپیوتر قرنطینه منتقل کنید. ',
HELP_2b_Desc_4: 'آن را از حالت فشرده خارج کرده و بر روی index.html کلیک کنید. ',
HELP_2b_Desc_5: 'یک کیف پول با رمز عبور قوی بسازید. ',
HELP_2b_Desc_6: 'آدرس را ذخیره کنید. نسخه هایی از کلید خصوصی ذخیره کنید. اگر ممکن است رمز عبور را فراموش کنید آن را نیز ذخیره کنید. ',
HELP_2b_Desc_7: 'این کاغذها و Usbها را در محل های مختلفی نگهداری کنید. ',
HELP_2b_Desc_8: 'به صفحه ""مشاهده اطلاعات کیف پول"" بروید و رمز عبور یا کلید خصوصی خود را وارد کنید تا مطمئن شوید که صحیح هستند. مطمئن شوید که مشابه با آدرسی ست که یادداشت کرده اید. ',

HELP_3_Title: 'سوال 3: چگونه این موضوع که به کیف پول خود دسترسی دارم را تایید کنم؟ ',
HELP_3_Desc_1: 'حتما **قبل از آنکه به کیف پول جدید خود اتر ارسال کنید**، مطمئن شوید که به آن دسترسی دارید. ',
HELP_3_Desc_2: 'به صفحه ""مشاهده اطلاعات کیف پول"" بروید. ',
HELP_3_Desc_3: 'به صفحه ""مشاهده اطلاعات کیف پول"" در MyetherWallet.com بروید. ',
HELP_3_Desc_4: 'فایل کیف پول و یا کلید خصوصی را انتخاب کنید و کیف پول خود را باز کنید. ',
HELP_3_Desc_5: 'HELP_3_Desc_5',
HELP_3_Desc_6: 'دکمه ""گشودن کیف پول"" را انتخاب کنید. ',
HELP_3_Desc_7: 'اطلاعات کیف پول شما باید نمایش داده شود. آدرس حساب خود را می توانید در کنار یک آیکون دایره ای شکل و رنگی بیابید. آیکون موجود بصورت بصری آدرس شما را نمایش می دهد. مطمئن شوید که آدرس همان آدرسی ست که در نوشته متنی خود و کیف پول کاغذی خود ذخیره کرده اید. ',
HELP_3_Desc_8: 'اگر می خواهید مقدار زیادی اتر سپرده (نگهداری) کنید، پیشنهاد می کنیم که پیش از این کار، در ابتدا مقدار کمی اتر از این کیف پول جدید ارسال کنید. 0.001 اتر به کیف پول جدید خود ارسال کنید، سپس از کیف پول خود آن مقدار را به یک آدرس دیگر بفرستید و مطمئن شوید که همه چیز به درستی کار می کند. ',

HELP_4_Title: 'سوال 4: چگونه از یک کیف پول به یک کیف پول دیگر اتر منتقل کنم؟ ',
HELP_4_Desc_1: 'اگر قصد دارید مقدار زیادی اتر جابجا کنید بهتر است که اول یک مقدار کم  به کیف پولتان ارسال کنید تا مطمئن شوید همه چیز درست کار می کند. ',
HELP_4_Desc_2: 'به صفحه ""ارسال اتر و توکن ها"" بروید. ',
HELP_4_Desc_3: 'با انتخاب فایل کیف پول و یا کلید خصوصی، قفل کیف پول خود را باز کنید. ',
HELP_4_Desc_4: 'اگر کیف پول رمزگذاری شده باشد، یک صفحه کوچک باز می شود که باید رمز عبور خود را در آن وارد کنید. ',
HELP_4_Desc_5: 'کلید ""باز کردن کیف پول"" را بفشارید. ',
HELP_4_Desc_6: 'در قسمت ""به آدرس""، آدرسی که می خواهید به آن اتر ارسال کنید را وارد کنید. ',
HELP_4_Desc_7: 'مقداری که می خواهید ارسال کنید را وارد کنید. در صورتی که می خواهید تمام موجودی خود را ارسال کنید می توانید گزینه ""ارسال کل موجودی"" را انتخاب کنید. ',
HELP_4_Desc_9: 'گزینه ""تولید تراکنش"" را بزنید. ',
HELP_4_Desc_10: 'چند قسمت دیگر ظاهر خواهد شد. این مربوط به مرورگر شماست که در حال ساخت تراکنش می باشد. ',
HELP_4_Desc_11: 'در زیر آن، بر روی دکمه آبی ""ارسال تراکنش"" کلیک کنید. ',
HELP_4_Desc_12: 'صفحه ای ظاهر می شود. در آن صفحه باید تایید کنید که میزان و آدرسی که می خواهید به آن اتر ارسال کنید صحیح است. سپس گزینه ""بله مطمئن هستم. تراکنش را انجام بده "" را انتخاب کنید. ',
HELP_4_Desc_13: 'تراکنش انجام خواهد شد و TX ID نمایش داده می شود. می توانید با کلیک بر روی TX ID آن را بر روی بلاکچین ببینید. ',

HELP_4CX_Title: 'سوال 4: چگونه با کیف پول MyEtherWallet خود اتر ارسال کنم؟ ',
HELP_4CX_Desc_1: 'ابتدا باید یک کیف پول را اضافه کنید. وقتی این کار را انجام دادید دو گزینه پیش رو خواهید داشت: گزینه ""ارسال سریع"" که از طریق آیکون افزونه Chrome Extension کار می کند و گزینه دیگر که از صفحه ""ارسال اتر و توکن"" به آن دسترسی خواهید داشت. ',
HELP_4CX_Desc_2: 'HELP_4CX_Desc_2',
HELP_4CX_Desc_3: 'بر روی آیکون Chrome Extension کلیک کنید. ',
HELP_4CX_Desc_4: 'دکمه ""ارسال سریع"" را بزنید. ',
HELP_4CX_Desc_5: 'کیف پولی که می خواهید از آن ارسال را انجام دهید انتخاب کنید. ',
HELP_4CX_Desc_6: 'در قسمت ""به آدرس""، آدرسی که می خواهید به آن ارسال انجام دهید را وارد کنید. ',
HELP_4CX_Desc_7: 'میزان ارسالی را وارد کنید. همچنین می توانید با استفاده از لینک ""ارسال کل موجودی"" ، تمام موجودی خود را ارسال کنید. ',
HELP_4CX_Desc_8: 'بر روی گزینه ""ارسال تراکنش"" کلیک کنید. ',
HELP_4CX_Desc_9: 'میزان و آدرس ارسالی را تایید کنید. ',
HELP_4CX_Desc_10: 'رمز عبور این کیف پول را وارد کنید. ',
HELP_4CX_Desc_11: 'بر روی گزینه ""ارسال تراکنش"" کلیک کنید. ',
HELP_4CX_Desc_12: 'استفاده از صفحه ""ارسال اتر و توکن ها"" ',

HELP_5_Title: 'سوال 5: چگونه از MyEtherWallet.com بصورت آفلاین استفاده کنم؟ ',
HELP_5_Desc_1: 'شما می توانید MyEtherWallet.com را به جای اجرا از روی سرورهای GitHub، روی کامپیوتر خود اجرا کنید. شما می توانید یک کیف پول را کاملا بصورت آفلاین بسازید و تراکنشی را از طریق صفحه ""تراکنش آفلاین"" ارسال کنید. ',
HELP_5_Desc_7: 'حال MyEtherWallet.com بطور کامل در حال اجرا شدن از روی کامپیوتر شماست. ',
HELP_5_Desc_8: 'در صورتی که با این موضوع آشنایی ندارید بهتر است بدانید که باید تمام پوشه (فولدر) را نگهداری کنید تا بتوانید وبسایت را اجرا کنید (نه فقط index.html را). به چیزی در این پوشه دست نزنید و یا جابجا نکنید. اگر یک نسخه پشتیبان از کد مخزن MyEtherWallet را برای آینده نگهداری می کنید پیشنهاد می شود که تنها ZIP را نگهداری کنید تا از اینکه تمام محتوای پوشه درست ذخیره می شوند اطمینان حاصل کنید. ',
HELP_5_Desc_9: 'از آنجایی که ما بطور مداوم در حال بروزرسانی MyEtherWallet.com هستیم، پیشنهاد می کنیم که نسخه ذخیره شده خود را بصورت دوره ای بروزرسانی کنید. ',

HELP_5CX_Title: 'سوال 5: چگونه می توانم این افزونه را به جای نصب کردن از Chrome Store، از مخزن نصب کنم؟ ',
HELP_5CX_Desc_2: 'بر روی chrome-extension-vX.X.X.X.zip کلیک کرده و آن را از حالت فشرده خارج کنید. ',
HELP_5CX_Desc_3: 'به قسمت تنظیمات (settings) مرورگر Google Chrome بروید (در منو قسمت بالا سمت راست) ',
HELP_5CX_Desc_4: 'بر روی افزونه یا همان Extensions در قسمت چپ کلیک کنید. ',
HELP_5CX_Desc_5: 'گزینه ""Developer Mode"" در بالای صفحه را انتخاب کنید. ',
HELP_5CX_Desc_6: 'گزینه Load unpacked extension… را انتخاب کنید. ',
HELP_5CX_Desc_7: 'به پوشه ای که به تازگی از حالت فشرده خارج کردید مراجعه کرده و گزینه select را انتخاب کنید. ',
HELP_5CX_Desc_8: 'افزونه حالا باید در قسمت افزونه های Chrom Extension نمایش داده شود. ',

HELP_7_Title: 'سوال 7: چگونه توکن ارسال کنم و توکن custom اضافه کنم؟ ',
HELP_7_Desc_0: 'از طریق [Ethplorer.io](https://ethplorer.io/) می توانید توکن ها را بررسی کنید و دهدهی های یک توکن را ببینید. ',
HELP_7_Desc_1: 'به صفحه ""ارسال اتر و توکن ها"" بروید. ',
HELP_7_Desc_2: 'کیف پول خود را باز کنید. ',
HELP_7_Desc_3: 'در بخش ""به آدرس:""، آدرسی که می خواهید به آن اتر بفرستید را وارد کنید. ',
HELP_7_Desc_4: 'مقداری که می خواهید بفرستید را وارد کنید. ',
HELP_7_Desc_5: 'توکنی که می خواهید ارسال کنید را انتخاب کنید. ',
HELP_7_Desc_6: 'اگر لیست توکن را ندیدید ',
HELP_7_Desc_7: 'HELP_7_Desc_7',
HELP_7_Desc_8: 'آدرس، اسم و دهدهی توکن را وارد کنید. این ها توسط توسعه دهندگان توکن ارائه می شود که برای ',
HELP_7_Desc_9: 'گزینه ""ذخیره"" را انتخاب کنید. ',
HELP_7_Desc_10: 'حال می توانید همزمان با مشاهده موجودی، توکن ارسال کنید ',
HELP_7_Desc_11: 'گزینه ""ایجاد تراکنش"" را انتخاب کنید. ',
HELP_7_Desc_12: 'تعدادی گزینه جدید ظاهر خواهد شد. این مرورگر شماست که در حال ایجاد تراکنش است. ',
HELP_7_Desc_13: 'گزینه آبی رنگ ""ارسال تراکنش"" را انتخاب کنید. ',
HELP_7_Desc_14: 'یک صفحه ظاهر می شود. صحت مقدار و آدرسی که به آن ارسال می کنید را تایید کنید. گزینه ""بله مطمئن هستم. تراکنش را انجام بده "" را انتخاب کنید. ',
HELP_7_Desc_15: 'تراکنش ثبت خواهد شد. TX ID نمایش داده می شود. می توانید بر روی TX ID جهت مشاهده آن بر روی بلاکچین کلیک کنید. ',

HELP_8_Title: 'سوال 8: اگر سایت شما از کار بیافتد چه اتفاقی میافتد؟ ',
HELP_8_Desc_1: 'وبسایت MyEtherWallet یک کیف پول وبی نیست. نیازی نیست که وارد شوید (لاگین کنید) و هیچ چیزی بر روی سرورهای ما ذخیره نمی شود. این تنها یک ظاهر است که به شما امکان برقراری ارتباط با بلاکچین را می دهد. ',
HELP_8_Desc_2: 'اگر  MyEtherWallet.com از کار بیافتد، راه دیگری (مثل geth یا Ethereum Wallet/ Mist) وجود دارد که کاری که ما انجام می دهیم را انجام دهد. اما نیازی نیست که اترهای خود را از  MyEtherWallet بیرون بیاورید چرا که آن ها در  MyEtherWallet نیستند، بلکه در هر کیف پولی ست که شما از طریق سایت ما ساخته باشید. ',
HELP_8_Desc_3: 'می توانید فایل های کلید خصوصی رمزنگاری نشده و Geth/Mist Format (رمزنگاری شده) را مستقیما به geth/ Ethereum Wallet/ Mist انتقال دهید. به سوال شماره 12 مراجعه کنید. ',
HELP_8_Desc_4: 'علاوه بر این، امکان اینکه  MyEtherWallet را از کار بیاندازیم نزدیک به صفر است. ازآنجایی که هیچ اطلاعاتی را ذخیره نمی کنیم در نتیجه هیچ هزینه نگهداری هم برای ما ندارد. اگر دامنه را به هر دلیلی از کار بیاندازیم، بصورت عمومی در آدرس های زیر در دسترس خواهد بود. [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages) . می توانید از آنجا ZIP را دانلود کنید و آن را بصورت محلی راه اندازی و اجرا کنید. ',

HELP_8CX_Title: 'سوال 8: اگر  MyEtherWallet CX ناپدید شود چه اتفاقی میافتد؟ ',
HELP_8CX_Desc_1: 'اول از همه اینکه تمام داده ها بر روی کامپیوتر شما ذخیره شده است و نه سرورهای ما. زمانی که به افزونه Chrome Extension نگاه می کنید، چیزی که روی سرورهای ما ذخیره شده باشد نمی بینید، بلکه تمام آن بر روی کامپیوتر خود شما ذخیره شده است. ',
HELP_8CX_Desc_2: 'مهم است در نظر داشته باشید که برای هر کیف پولی که با  MyEtherWallet CX ساخته می شود، از تمام اطلاعات خود یک نسخه پشتیبان تهیه کنید. در اینصورت اگر هر اتفاقی برای  MyEtherWallet CX یا کامپیوترتان بیافتد، همچنان اطلاعات لازم جهت دسترسی به اترهای خود را خواهید داشت. به سوال 2 الف برای چگونگی تهیه نسخه پشتیبان از کیف پول مراجعه کنید. ',
HELP_8CX_Desc_3: 'اگر به هر دلیلی  MyEtherWallet CX از Chrome Store ناپدید شد، می توانید سورس (کد منبع) آن را از Github پیدا کرده و بصورت دستی اجرا کنید. به سوال شماره 5 مراجعه کنید. ',

HELP_9_Title: 'سوال 9: آیا صفحه ""ارسال اتر و توکن"" آفلاین است؟ ',
HELP_9_Desc_1: ',خیر. برای بدست آوردن قیمت سوخت فعلی نیاز به اینترنت دارد',

HELP_10_Title: 'سوال 10: چگونه یک تراکنش آفلاین ایجاد کنم؟ ',
HELP_10_Desc_1: 'با کامپیوتر خود (که آنلاین است) به صفحه ""تراکنش آفلاین"" بروید. ',
HELP_10_Desc_2: 'قسمت ""از آدرس"" را پر کنید. توجه کنید که این آدرسی ست که از آن سرمایه ارسال می کنید و نه آدرسی که می خواهید به آن ارسال کنید. این کار هزینه سوخت و ؟؟؟ را ...."',
HELP_10_Desc_3: 'به کامپیوتر آفلاین خود بروید و قسمت ""به آدرس"" و ""مقدار"" (مقداری که می خواهید بفرستید) را وارد کنید. ',
HELP_10_Desc_4: 'در مرحله 1 قیمت سوخت در کامپیوتر آنلاین به شما نمایش داده شد. آن را در قسمت ""قیمت سوخت"" وارد کنید. ',
HELP_10_Desc_5: 'HELP_10_Desc_5',
HELP_10_Desc_6: 'مقدار پیش فرض برای ""سقف سوخت"" 21000 است که یک تراکنش استاندارد را پوشش می دهد. اگر در حال ارسال سرمایه به یک قرارداد هستید و یا اطلاعات بیشتری را در تراکنش خود جای دادید، باید مقدار سقف سوخت را افزایش دهید. هر مقدار سوخت که باقی بماند به شما برگردانده می شود. ',
HELP_10_Desc_7: 'اگر می خواهید می توانید اطلاعات بیشتری اضافه کنید. اگر اطلاعات را وارد کنید باید برای سقف سوخت بیش از 21000 در نظر بگیرید. تمام اطلاعات با فرمت هگز (HEX) است. ',
HELP_10_Desc_8: 'فایل کیف پول یا کلید خصوصی خود را جهت باز کردن کیف پول وارد کنید. ',
HELP_10_Desc_9: 'دکمه ""ارسال تراکنش امضا شده"" را بزنید. ',
HELP_10_Desc_10: 'HELP_10_Desc_10',
HELP_10_Desc_11: 'HELP_10_Desc_11',

HELP_12_Title: 'سوال 12: چگونه کیف پولی که با MyEtherWallet ساخته ام را به geth یا Ethereum Wallet یا Mist منتقل کنم؟ ',
HELP_12_Desc_1: ',با استفاده از فایل Geth یا Mist JSON از MyEtherWallet نسخه 2 به بالا.',
HELP_12_Desc_2: 'به صفحه ""مشاهده اطلاعات کیف پول"" بروید/ ',
HELP_12_Desc_3: 'قفل کیف پول خود را با استفاده از کلید خصوصی **رمزنگاری شده** و یا فایل JSON خود باز کنید. ',
HELP_12_Desc_4: 'به صفحه ""کیف پول های من"" بروید. ',
HELP_12_Desc_5: 'کیف پولی که می خواهید به Mist انتقال دهید را انتخاب کنید. بر روی آیکوین ""مشاهده"" کلیک کنید. رمزعبور خود را وارد کنید و به کیف پول دسترسی پیدا کنید. ',
HELP_12_Desc_6: 'بخش ""دانلود فایل JASON - فرمت Get یا Mist (رمزنگاری شده)"" را پیدا کنید. بر روی دکمه ""دانلود"" که در زیر آن قرار دارد کلیک کنید. حال شما فایل keystore خود را دارید. ',
HELP_12_Desc_7: 'برنامه کیف پول Ethereum Wallet را باز کنید. ',
HELP_12_Desc_8: 'در قسمت منو به ترتییب بخش های زیر را دنبال کنید تا به بخش آخر برسید: حساب ها --> پشتیبان --> حساب ها. ',
HELP_12_Desc_9: 'با این کار می توانید به پوشه ای که keystore خود را در آن ذخیره کردید دسترسی پیدا کنید. فایلی که به تازگی دانلود کردید (`UTC--2016-04-14......../`) را به همان پوشه keystore ببرید. ',
HELP_12_Desc_10: 'حساب شما سریعا در قسمت ""حساب ها"" نمایش داده می شود. ',
HELP_12_Desc_11: 'با استفاده از کلید خصوصی ررمزنگاری نشده خود... ',
HELP_12_Desc_12: 'اگر در حال حاضر کلید خصوصی رمزنگاری نشده خود را ندارید، به قست ""مشاهده اطلاعات کیف پول"" بروید. ',
HELP_12_Desc_13: 'فایل کیف پول خود را انتخاب کنید یا کلید خصوصی خود را وارد کنید تا قفل کیف پولتان باز شود. ',
HELP_12_Desc_14: 'کلید خصوصی (رمزنگاری نشده) خود را کپی کنید. ',
HELP_12_Desc_15: 'اگر با مک (Mac) کار می کنید ',
HELP_12_Desc_15b: 'اگر با کامپیوتر (PC) کار می کنید. ',
HELP_12_Desc_16: 'گزینه ""ویرایش نوشته"" را باز کنید و این کلید خصوصی را در آنجا paste کنید. ',
HELP_12_Desc_17: 'HELP_12_Desc_17',
HELP_12_Desc_18: 'این فایل را بر روی دسکتاپ خود با عنوان nothing_special_delete_me.txt ذخیره کنید. مطمئن شوید که می گوید ""UTF-8"" و در بخش ذخیره بنویسد """"If no extension is provided use .txt"" . ',
HELP_12_Desc_19: 'ترمینال را باز کنید دستور زیر را وارد کنید: `geth account import ~/Desktop/nothing_special_delete_me.txt` ',
HELP_12_Desc_20: 'این کار باعث می شود تا از شما در خواست یک رمزعبور جدید شود. این رمزعبوری ست که در زمان ارسال یک تراکنش با استفاده از geth یا Ethereum Wallet یا Mist از آن استفاده می کنید، در نتیجه آن را به خاطر بسپارید. ',
HELP_12_Desc_21: 'HELP_12_Desc_21',
HELP_12_Desc_22: 'دفعه بعد که برنامه Ethereum Wallet را باز کنید، حساب شما در بخش ""حساب ها"" قابل مشاهده خواهد بود. ',
HELP_12_Desc_23: 'برنامه Notepad را باز کنید و کلید خصوصی را در آن paste کنید. ',
HELP_12_Desc_24: 'فایل را با عنوان `nothing_special_delete_me.txt` در درایو :C ذخیره کنید. ',
HELP_12_Desc_25: 'این دستور را وارد کنید:  `geth account import C:\\nothing_special_delete_me.txt` ',
HELP_12_Desc_26: 'این کار باعث می شود تا از شما در خواست یک رمزعبور جدید شود. این رمزعبوری ست که در زمان ارسال یک تراکنش با استفاده از geth یا Ethereum Wallet یا Mist از آن استفاده می کنید، در نتیجه آن را به خاطر بسپارید. ',
HELP_12_Desc_27: 'بعد از انتقال موفق، فایل  `nothing_special_delete_me.txt` را پاک کنید. ',
HELP_12_Desc_28: 'دفعه بعد که برنامه Ethereum Wallet را باز کنید، حساب شما در بخش ""حساب ها"" قابل مشاهده خواهد بود. ',

HELP_13_Title: 'سوال 13: این جمه به چه معناست؟ : ""سرمایه کافی نیست. حسابی که سعی در ارسال تراکنش از طریق آن را دارید به اندازه کافی سرمایه ندارد. به XXXXXXXXXXXXXXXXXXX و تنها XXXXXXXXXXXXXXXX دارد"". ',
HELP_13_Desc_1: 'این بدان معناست که در حساب خود به اندازه کافی اتر (ٍETH) جهت پرداخت هزینه سوخت را ندارید. هر تراکنش (که شامل توکن و تراکنش های قراردادی نیز می شود) به سوخت نیاز دارد و این سوخت با اتر پرداخت می شود. عددی که نمایش داده شد، مقداری ست که برای پوشش هزینه تراکنش در Wei مورد نیاز است. آن عدد را بر `1000000000000000000` تقسیم کنید و از مقدار اتری که می خواستید ارسال کنید کم کنید (اگر می خواستید که اتر ارسال کنید). این کار به شما میزان اتری که برای انجام تراکنش باید به آن حساب بفرستید را مشخص می کند. ',

HELP_14_Title: 'سوال 14: برخی از سایت ها ساخت رندوم یا تصادفی کلیدهای خصوصی را بر اساس حرکت موس انجام می دهند. سایت MyEtherWallet.com این کار را انجام نمی دهد. آیا تولید تصادفی اعداد برای MyEtherWallet امن است؟ ',
HELP_14_Desc_1: 'روش ساخت بر اساس حرکت موس هوشمندانه است و می دانیم که  چرا مردم آن را دوست دارند، اما واقعیت این است که window.crypto ؟؟؟؟؟ بیشتری را نسبت به حرکات موس شما ارائه می کنند. حرکات موس ناامن نیستند اما ما (و بسیاری از آزمایش های کریپتو دیگر) در window.crypto باور بیشتری داریم. بعلاوه اینکه از MyEtherWallet.com می توان در دستگاه های لمسی نیز استفاده کرد. در [اینجا می توانید بحث بین یک نویسنده عصبانی در reddit و Vitalik Buterin درباره حرکات موس و window.crypto را ببینید](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ',

HELP_15_Title: 'سوال 15: چرا حسابی که همین الان ساخته ام در مرورگر بلاکچین (bllockchain explorer) دیده نمی شود؟ (برای مثال در etherchain یا etherscan) ',
HELP_15_Desc_1: 'HELP_15_Desc_1',

HELP_16_Title: 'سوال 16: چگونه موجودی حساب خود را ببینم؟ ',
HELP_16_Desc_1: 'برای این کار می توانید از یک مرورگر بلاکچین مثل  [etherscan.io](https://etherscan.io/) استفاده کنید. آدرس خود را در قسمت search (جستجو) وارد کنید و بعد می توانید آدرس و سابقه تراکنش های خود را مشاهده کنید. برای مثال حساب اهدایی ما [بدین صورت](https://etherscan.io/address/0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D) است. ',

HELP_17_Title: 'سوال 17: چرا زمانی که قفل کیف پول خود را باز می کنم موجودی من نمایش داده نمی شود؟ ',
HELP_17_Desc_1: 'این موضوع احتمالا بخاطر این است که شما پشت یک firewall (دیوار آتشین) هستید. API که ما برای بدست آوردن موجودی استفاده می کنیم به دلایلی معمولا توسط فایر وال ها بلاک می شوند. شما همچنان می توانید تراکنش هایتان را ارسال کنید و برای دیدن موجودی خود تنها باید از راه دیگری (مثل etherscan.io) استفاده کنید. ',

HELP_18_Title: 'سوال 18: فایل مربوط به کیف پول geth کجا قرار دارد؟ ',

HELP_19_Title: 'سوال 19: فایل مربوط به کیف پول Mist من کجا قرار دارد؟ ',
HELP_19_Desc_1: 'فایل های Mist معمولا در فضاهای بالا قرار دارند. اما را آسان تر این است که Mist را باز کنید، در قسمت بالا گزینه Accounts و بعد Backup را انتخاب کنید. این کار پوشه ای که فایل های شما در آن ذخیره شده را باز می کند. ',

HELP_20_Title: 'سوال 20: فایل مربوط به کیف پول پیش فروش (pre-sale) من کجا قرار دارد؟ ',
HELP_20_Desc_1: 'هر جایی که آن را ذخیره کرده اید! البته برای ایمیل شما هم ارسال شده است، در نتیجه آن را نیز بررسی کنید. بدنبال فایلی با نام ""ethereum_wallet_backup.json"" بگردید. این فایلِ کیف پول با یک رمزعبور رمزنگاری شده است. رمزعبوری که شما هنگام خرید در پیش فروش ساخته اید. ',

HELP_21_Title: 'سوال 21: آیا این امکان وجود ندارد که هر کسی یک کلید خصوصی تصادفی (رندوم) را وارد کرده و بدنبال یک موجودی بگردد و سپس آن را برای خود ارسال کند؟ ',
HELP_21_Desc_1: 'جواب کوتاه: بله، اما یافتن یک حساب با موجودی، بیش از هزاران سال طول می کشد؛ پس جواب خیر است. ',
HELP_21_Desc_2: 'نسخه Long ELI5: اتریوم بر پایه Public Key Cryptography یا رمزنگاری کلید عمومی و بطور خاص، منحنی رمزنگاری Elliptic است که بصورت گسترده ای نیز مورد استفاده قرار می گیرد. امنیت بسیاری از سرورها از طریق ECC فراهم می شود. بیتکوین نیز از همان، و از چیزهای دیگری مثل SSH و TLS استفاده می کند. کلیدهای اتریوم کلیدهای 256 بیتی هستند که بسیار قوی تر از مدل های 128بیتی و 192بیتی هستند که بصورت گسترده ای مورد استفاده قرار می گیرند و از نظر کارشناسان امن هستند. ',
HELP_21_Desc_3: 'در اینجا شما یک کلید خصوصی و یک کلید عمومی دارید. از کلید خصوصی می توان کلید عمومی ساخت، اما کلید عمومی را نمی توان برگرداند و به کلید خصوصی تبدیل کرد یا از طریق آن کلید خصوصی را بدست آورد. تمام دنیا و اینترنت در حال استفاده از این نوع رمزنگاری هستند و اگر راهی برای بدست آوردن کلید خصوصی از طریق کلید عمومی وجود داشته باشد و به این خاطر شما اترهای خود را از دست دهید، این موضوع کمترین نگرانی هر کسی خواهد بود. ',
HELP_21_Desc_4: 'اگر کسی کلید خصوصی شما را داشته باشد می تواند از حساب شما اتر منتقل کند؛ درست همانطور که اگر کسی رمزعبور ایمیل شما را داشته باشد می تواند ایمیل هایتان را بخواند و یا ایمیل ارسال کند، یا اگر کسی رمزعبور حساب شما را داشته باشد می تواند پول جابجا کند. می توانید نسخه Keystore کلید خصوصی خود، که کلید خصوصیِ رمزنگاری شده با یک رمزعبور است را دانلود کنید. این کار مثل این است که یک رمزعبوری دارید که توسط یک رمزعبور دیگر محافظت می شود. ',
HELP_21_Desc_5: 'بصورت تئوری این امکان وجود دارد که رشته هایی با 64 کاراکتر هگزادسیمالی وارد کنید تا یکی از آن ها کار کند و کلید خصوصی از آب در بیاید. البته افراد باهوش برای این کار برنامه ای می نویسند که با سرعت بالا کلیدهای خصوصی تصادفی مختلفی را امتحان کند. به این کار Brute-force یا نیروی کور و یا در اصطلاحی دیگر به آن mining یا استخراج کلید خصوصی گفته می شود. با تعداد کمی سرورهای قوی، احتمال چک کردن بیش از 1میلیون کلید در درثانیه وجود دارد. اما چک کردن این تعداد کلید در ثانیه نمی تواند هزینه های فعالیت سرورها را پوشش دهد و احتمالا نه تنها شما بلکه فرزندان و نوه های شما نیز نمی توانند کلیدی پیدا کند. ',
HELP_21_Desc_6: 'اگر چیزی درباره بیتکوین می دانید، برای نشان دادن اینکه این احتمال چقدر کم است به این نکته توجه کنید: فرض کنید هر ساتوشی از هر بیتکوینی که تا به حال ساخته شده به کلید خصوصی یکتای مربوط به خود رفته باشد. احتمال آنکه بین تمام آن کلیدها، دو کلید وجود داشته باشد که هر دو به یک آدرس اشاره کنند حدود یک در 100 کوینتیلیون (کوینتیلیون معادل است با 1 و هجده صفر جلوی آن که کل آن ها به توان 2 برسد) است. ',
HELP_21_Desc_7: 'این عددها هیچ ربطی با فناوری دستگاه ها ندارند؛ مقدارها بیشینه یا ماکزیمی هستند که از نظر ترمودینامیکی مجاز است و شدیده بر این موضوع دلالت دارد که حمله های نیروی کور یا brute force به کلیدهای 256بیتی تا زمانی که کامپیوترهایی با چیزی غیر از چیزهای فعلی ساخته شود و چیزی غیر از فضا را اشغال کند ساخته شوند غیر عملی است. ',
HELP_21_Desc_8: 'این موضوع نشانگر آن است که کلیدها بصورت کاملا تصادفی و با آنتروپی کافی ساخته می شوند. کلیدهایی که اینجا ساخته می شوند همانند Jaxx و Mist/geth از این معیار پیروی می کنند. کیف پول های اتریوم همگی خوب هستند. کلیدهای که توسط ذهن انسان ساخته می شوند خوب نیستند چرا که ذهن انسان توان ایجاد یک دانه یا رمز کاملا تصدفی را ندارد. مشکلاتی در زمینه آنتروپی و یا اینکه دانه ها بطور کاملا تصدفی ساخته نشدند در دنیای بیتکوین وجود داشته که موضوعی ست که باید بعدا راجع به آن صحبت کرد. ',

HELP_SecCX_Title: 'امنیت - MyEtherWallet CX ',
HELP_SecCX_Desc_1: 'این افزونه (extension) اطلاعات من را کجا ذخیره می کند؟ ',
HELP_SecCX_Desc_2: 'اطلاعاتی که در این Chrome Extension ذخیرنگهداری می کنید از طریق [chrome.storage](http://chrome.storage/) ذخیره می شود. این دقیقا همان جایی ست که رمزعبورهایی که در مرورگر Chrome ذخیره می کنید در آن ذخیره می شود. ',
HELP_SecCX_Desc_3: 'چه اطلاعاتی ذخیره می شود؟ ',
HELP_SecCX_Desc_4: 'آدرس، نام اختصاری و کلید خصوصی در chrome.storage ذخیره می شود. کلید خصوصی با استفاده از رمزعبوری که در زمان اضافه کردن کیف پول انتخاب کردید رمزنگاری شده است. نام اختصاری و کیف پول رمزنگاری نشده است. ',
HELP_SecCX_Desc_5: 'چرا نام اختصاری و کیف پول رمزنگاری نمی شوند؟ ',
HELP_SecCX_Desc_6: 'اگر می خواستیم این موارد را رمزنگاری کنیم، هربار که می خواستید موجودی حساب یا نام های اختصاری را ببینید مجبور به وارد کردن رمزعبور می شدید. اگر این موضوع برایتان مهم است، پیشنهاد می کنیم از MyEtherWallet.com به جای این Chrome Extension استفاده کنید. ',

HELP_Sec_Title: 'امنیت ',
HELP_Sec_Desc_1: 'ممکن است یکی از اولین سوالاتی که به ذهنتان می رسد این باشد که ""چرا باید به این افراد اعتماد کنم؟""؛ این سوال خوبی ست که ادامه می توانید جوابی برای آن جهت کم کردن ترس خود پیدا کنید. ',
HELP_Sec_Desc_2: 'ما از آگوست 2015 در حال فعالیت هستیم. اگر در [reddit](https://www.reddit.com/search?q=myetherwallet) بدنبال myetherwallet بگردید، تعداد زیادی از کاربران را خواهید دید که از سرویس ما با موفقیت استفاده کرده اند.  ',
HELP_Sec_Desc_3: 'ما نمی خواهیم که پول شما را بگیریم و یا کلیدهای خصوصی شما را بدزدیم. هیچ کد خرابی در این سایت وجود ندارد. در واقع صفحه های ""ایجاد کیف پول"" در سمت کاربر هستند (client-side). این بدان معناست که تمام کدها بر روی کامپیوتر خود شما اجرا می شود و هرگز جای دیگری ارسال و یا ذخیره نمی شود. ',
HELP_Sec_Desc_4: 'این سایت از طریق GitHub ارائه می شود، می توانید کد اصلی یا Source Code آن را در این آدرس ببینید:  [https://github.com/kvhnuke/etherwallet/tree/gh-](https://github.com/kvhnuke/etherwallet/tree/gh-pages) و [https://vintage.myetherwallet.com](https://vintage.myetherwallet.com). ',
HELP_Sec_Desc_5: 'برای ایجاد کیف پول، می توانید کد منبع را دانلود کنید و آن را بصورت محلی اجرا کنید. به سوال شماره 5 مراجعه کنید. (https://github.com/kvhnuke/etherwallet/releases/latest) ',
HELP_Sec_Desc_6: 'یک کیف پول تستی بسازید و به بررسی فعالیت شبکه بپردازید. ساده ترین راه این است که بر روی سایت کلیک راست کرده و گزینه ""inspect element"" را انتخاب کنید. به قسمت ""Network"" بروید. یک کیف پول آزمایشی بسازید. خواهید دید که هیچ فعالیت شبکه ای در آن جا رخ نمی دهد. خواهید دید که اتفاقی در حال رخداد است که همانند داده هایی مثل عکس یا گیف هستند. آن ها کدهای QR هستند که در حال ساخته شدن بر روی کامپیوتر شما و توسط کامپیوتر شما هستند. هیچ بایتی جابجا نمی شود. ',
HELP_Sec_Desc_8: 'اگر با استفاده از این ابزار راحت نیستید آن را کنار بگذارید. ما این ابزار را بعنوان یک راه موثر جهت ایجاد کیف پول و تراکنش بدون نیاز به اجرای یک فول نود یا رفتن به خط فرمان درست کرده ایم. در هر صورت اگر سوالی ذهن شما را به خود مشغول کرده می توانید با ما در ارتباط باشید و ما نیز در اولین فرصت پاسخگوی شما خواهیم بود. با تشکر از توجه شما ',

HELP_FAQ_Title: 'پاسخ های کامل تری به سوالات متداول ',
HELP_Contact_Title: 'HELP_Contact_Title'

};

module.exports = fa;
