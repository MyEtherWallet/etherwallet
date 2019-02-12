// Japanese
'use strict';
var ja = function() {}
ja.code = 'ja';
ja.data = {

GEN_Help_0                      :  '既にお財布をお持ちですか?', /*Already have a wallet somewhere?*/
GEN_Help_MetaMask               :  'とても簡単です! キーは MetaMask に保存されます。フィッシングサイトに保存されることはありません! すぐにお試しください。', /*So easy! Keys stay in MetaMask, not on a phishing site! Try it today.*/

GEN_Warning_1                   :  '**絶対に忘れないようにしてください!** 失くしてしまうと、回復できません。', /***Do not lose it!** It cannot be recovered if you lose it.*/
GEN_Warning_2                   :  '**他人と共有しないでください!** 悪意のあるサイトでこのファイルを使うと、あなたのお金が盗まれます。', /***Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site.*/
GEN_Warning_3                   :  '**バックアップを作成してください!** ゆくゆくは、数億円の大金になるものと心得て安全性を確保してください。', /***Make a backup!** Secure it like the millions of dollars it may one day be worth.*/

GAS_Price_1                     : '普通', /*Not So Fast*/
GAS_Price_2                     : '迅速', /*Fast*/
GAS_Price_3                     : '超速', /*Fast AF*/

CONTRACT_Helper_1               :  'マルチシグのアドレスに変えてください', /*Please change the address to your own Multisig Contract Address.*/
CONTRACT_Warning_1              :  '**契約を展開**しようとしています。', /*You are about to **deploy a contract**.*/
CONTRACT_Warning_2              :  '次のネットワークに展開されます:', /*It will be deployed on the following network:*/
CONTRACT_Warning_3              :  '**契約上の機能を実行**しようとしています。', /*You are about to **execute a function on contract**.*/

SEND_Helper_Contract            :  'ほとんどの場合、0のままにしておきます。', /*In most cases you should leave this as 0.*/
SEND_ViewOnly                   :  '自分のアドレスを指定するだけでは送信できません。お財布を解錠する必要があります。', /*You cannot send with only your address. You must use one of the other options to unlock your wallet in order to send.*/
SEND_LoadTokens                 :  'トークン読込', /*Load Tokens*/
SEND_CustomAddrMsg              :  '対応するメッセージ', /*A message regarding*/

SWAP_Warning_1                  :  '警告! 交換するためにに必要な金額が不足しています。', /*Warning! You do not have enough funds to complete this swap.*/
SWAP_Warning_2                  :  '資金を追加するか、別のお財布をお使いください。',　/*Please add more funds to your wallet or access a different wallet.*/

X_Advanced                      :  '熟練者向け。', /*Advanced Users Only.*/
X_HelpfulLinks                  :  '役立つリンクとよくある問答集', /*Helpful Links & FAQs*/
X_HelpfulLinks_1                :  'お財布の操作方法', /*How to Access your Wallet*/
X_HelpfulLinks_2                :  '秘密鍵を紛失してしまいました', /*I lost my private key*/
X_HelpfulLinks_3                :  '秘密鍵が別のアドレスを解錠しました', /*My private key opens a different address*/
X_HelpfulLinks_4                :  'MyEtherWallet から、または MyEtherWallet へ移行するには', /*Migrating to/from MyEtherWallet*/
X_Network                       :  'ノード', // aka "node" or "chain" - used in the dropdown in header  /*Network*/
X_Network_Custom                :  'カスタムネットワークやノードを追加', /*Add Custom Network / Node*/

DOMAIN_Buy                      :  'ドメインを購入する', /*Buy the domain*/
DOMAIN_BuyItNow                 :  'ドメイン即決価格:', /*Price to buy the domain immediately:*/
DOMAIN_bid                      :  'ドメインを入札する', /*Bid for the domain*/
DOMAIN_bid_0                    :  'あなたの入札が現在の最高値です。増額して再入札できますが、競売の終了が24時間延長されます。', /*You are currently winning this auction with the highest bid. You can bid higher if you want, but it will delay the close of the auction for 24 hours.*/
DOMAIN_bid_1                    :  'ドメイン入札には最低', /*Bid at least*/
DOMAIN_bid_2                    :  'が必要です。', /*on the domain.*/
DOMAIN_bid_3                    :  '24時間以内にさらに高額の入札がなければ、落札することができます。', /*You will win the domain if no higher bids are placed within the next 24 hours.*/
DOMAIN_bid_4                    :  'このドメイン名の供託額は', /*Note that the domain has a locked value of*/
DOMAIN_bid_5                    :  'このドメイン名を開放して受け取ることができる供託額は', /*As part of the sale you will receive the deed with this value but cannot claim it unless you release the name.*/
DOMAIN_Finish_1                 :  'この競売とは無関係です', /*Not related to that auction*/
DOMAIN_Finish_2                 :  'このアドレスは、競売の落札者・主催者のいずれのものでもありません。', /*This address is neither the winner nor the seller of the auction.*/
DOMAIN_Finish_3                 :  '競売を終了する', /*Finish the auction*/
DOMAIN_Finish_4                 :  '競売を終了して、落札者にドメインを移管し、主催者に落札金を渡す。', /*Finish the auction to allocate the domain to the winner and the funds to the seller.*/
DOMAIN_Finish_5                 :  'ドメイン名がDomainsaleに移管されてたかを確認するために、自分のTXハッシュをクリックしてください。', /*Click your TX hash to see if you successfully transferred the domain to DomainSale.*/
DOMAIN_offer_1                  :  'お財布が違います', /*Incorrect Wallet*/
DOMAIN_offer_2                  :  '解錠されたお財布は、このドメイン名のものではありません。', /*The wallet you unlocked does not own this name.*/
DOMAIN_offer_3                  :  'この名前を提供するには、次のアドレスのお財布を解錠してください:', /*In order to offer this name, please unlock the wallet with address:*/
DOMAIN_offer_4                  :  '販売を申請する:', /*Offer For Sale:*/
DOMAIN_offer_5                  :  'ドメイン名を販売するには、以下のいずれか又は両方の価格を設定してください。なお、ドメイン名の供託金は落札者に、また落札額の10％は仲介者に支払われます。', /*Set either of both of the prices below to offer your domain for sale.  Remember that any funds you have locked in the domain\'s deed will go to the buyer and 10% of the funds when sold goes to referrers.*/
DOMAIN_offer_7                  :  '販売条件を修正する:', /*Alter Your Offer for:*/
DOMAIN_offer_8                  :  '販売条件を修正するには、以下のいずれか又は両方の価格を変更してください。なお、ドメイン名の供託金は落札者に、また落札額の10％は仲介者に支払われます。', /*Change either of both of the prices below to alter your domain sale offer.  Remember that any funds you have locked in the domain\'s deed will go to the buyer and 10% of the funds when sold goes to referrers.*/
DOMAIN_offer_9                  :  '入札価格', /*Buy price*/
DOMAIN_offer_10                 :  'これはドメイン名を落札するための即決価格です。即決させたくない場合は0を指定してください。', /*This is the price at which someone can buy the domain immediately. 0 means that the domain cannot be purchased immediately.*/
DOMAIN_offer_11                 :  'これはドメイン名競売の入札開始価格です。競売を行いたくない場合は0を指定してください。', /*This is the price at which someone can start an auction for the domain.  0 means that the domain will not be available for auction.*/
DOMAIN_offer_12                 :  '自分のドメイン名を競売に出す', /*Offer your domain*/
DOMAIN_offer_13                 :  '販売条件の変更', /*Alter your sale*/
DOMAIN_offer_14                 :  '販売の中止', /*Cancel your sale*/
DOMAIN_offer_15                 :  'ドメイン名の販売を中止して、そのドメイン名の登録者を自分に戻すことが無料でできます。まだ入札がされていない場合のみ有効です。', /*You can cancel your domain sale, which will return the domain to you with no charge.  This is only available before any bids have been received for the domain.*/

ENS_Bid_Title                   :  '入札する', /*Place a Bid*/
ENS_Finalize                    :  '終了:', /*Finalize*/ /*Note: followed the domain name*/
ENS_Finalize_content            :  '終了処理を行うと、ドメイン名が落札者に移管されます。落札者には、第2位の入札価格との差額が返却されます。入札が1件だけの場合には、0.01ETHとの差額が返却されます。落札者以外の入札も返却されます。', /*Finalizing this name assigns the ENS name to the winning bidder. The winner will be refunded the difference between their bid and the next-highest bid. If you are the only bidder, you will be refunded all but 0.01 ETH. Any non-winners will also be refunded.*/
ENS_Finalize_content_1          :  '次のドメイン名の競売の終了処理と登録を行おうとしています:', /*You are about to finalize the auction & claim the name:*/ /*Note: followed the domain name*/
ENS_Helper_1                    :  '手順の概要', /*What is the process like?*/
ENS_Helper_2                    :  '1. 準備', /*1. Preparation*/
ENS_Helper_3                    :  'どのアカウント（お財布）を使用するか決め、複数のバックアップがあることを確認してください（無い場合は作成してください）。', /*Decide which account you wish to own the name & ensure that you have multiple backups of that account.*/
ENS_Helper_4                    :  'そのドメイン名に対して、どれだけETHを支払えるかを決めてください（自分の<u>Bid Amount</u>）。また、入札に必要な額+0.01ETH（ガス消費分）がお財布に入っているかを確認してください。', /*Decide the maximum amount of ETH you are willing to pay for the name (your <u>Bid Amount</u>). Ensure that the account has enough to cover your bid + 0.01 ETH for gas.*/
ENS_Helper_5                    :  '2. 競売の開始・入札', /*2. Start an Auction / Place a Bid*/
ENS_Helper_6                    :  '入札期間は3日間（72時間）です。', /*Bidding period lasts 3 days (72 hours).*/
ENS_Helper_7                    :  '<u>name</u>・<u>Actual Bid Amount</u>・<u>Bid Mask</u>を入力し、<u>Secret Phrase</u>で保護します。', /*You will enter the <u>name</u>, <u>Actual Bid Amount</u>, <u>Bid Mask</u>, which is protected by a <u>Secret Phrase</u>.*/
ENS_Helper_8                    :  'これで入札は完了しますが、これらの情報は入札開示を行うまで公表されません。', /*This places your bid, but this information is kept secret until you reveal it.*/
ENS_Helper_9                    :  '3. 入札の開示', /*3. Reveal your Bid*/
ENS_Helper_10                   :  '入札を開示しないと、払い戻しを受けられません。', /***If you do not reveal your bid, you will not be refunded.***/
ENS_Helper_11                   :  '開示期間は2日間（48時間）です。', /*Reveal Period lasts 2 days (48 hours).*/
ENS_Helper_12                   :  'アカウントを解錠してから<u>Bid Amount</u>と<u>Secret Phrase</u>を入力してください。', /*You will unlock your account, enter the <u>Bid Amount</u>, and the <u>Secret Phrase</u>.*/
ENS_Helper_13                   :  '同一価格の入札が複数あった場合、先に開示された入札が優先されます。', /*In the event that two parties bid exactly the same amount, the first bid revealed will win.*/
ENS_Helper_14                   :  '4. 競売の終了', /*4. Finalize the Auction*/
ENS_Helper_15                   :  '競売終了後（5日後 / 120時間後）、落札者は最終処理を行なって新しいドメイン名を確定する必要があります。', /*Once the auction has ended (after 5 days / 120 hours), the winner needs to finalize the auction in order to claim their new name.*/
ENS_Helper_16                   :  '落札者には、自身の入札価格と第2位の入札価格との差額が返金されます。他の入札者がいない場合は、0.01ETHとの差額が返却されます。', /*The winner will be refunded the difference between their bid and the next-highest bid. If you are the only bidder, you will be refunded all but 0.01 ETH.*/
ENS_Helper_17                   :  '詳細情報', /*More Information*/
ENS_Helper_18                   :  '登録のための競売は、封印入札方式です。詳細はこちら:', /*The auction for this registrar is a blind auction, and is described in*/
ENS_Helper_19                   :  '基本的には入札中に何も開示されません。', /*Basically, no one can see *anything* during the auction.*/
ENS_Helper_20                   :  'ENS: 解説書を読む', /*ENS: Read the Docs*/
ENS_Helper_21                   :  'Ethereum Name Service再開日について！', /*Announcing the Ethereum Name Service Relaunch Date!*/
ENS_Helper_22                   :  'ナレッジベース: ENS', /*Knowledge Base: ENS*/
ENS_Helper_23                   :  '不正な入札開示（a [BAD INSTRUCTION] Reveal）をデバッグするには', /*Debugging a [BAD INSTRUCTION] Reveal*/
ENS_Helper_24                   :  '入札開示（Reveal）時のエラーにつきましては、お手数おかけいたしますが、サポート依頼の前に上記をお試しください。m(_ _)m', /*Please try the above before relying on support for reveal issues as we are severely backlogged on support tickets. We\'re so sorry. :(*/
ENS_Reveal_Title                :  '入札を開示する', /*Reveal your Bid*/
ENS_Start_Title                 :  '競売を始める', /*Start an Auction*/
ENS_WrongAddress_1              :  '解錠されたお財布は、このドメイン名のものではありません。', /*The wallet you unlocked does not own the name */
ENS_WrongAddress_2              :  'アドレスを指定してお財布を解錠してください。', /*Please unlock the wallet with address */

EOS_01                          :  '**EOSの鍵ペアの生成**', /* **Generate EOS Key-pair** */
EOS_02                          :  '**EOSの鍵を登録／転写する**', /* **Register / Map your EOS Key** */
EOS_03                          :  '`register`を選択する', /*Select `register`*/
EOS_04                          :  '**EOSの公開鍵**を入力する　<---　注意！ 「EOSの公開鍵」です！', /*Enter your **EOS Public Key** <--- CAREFUL! EOS PUBLIC KEY!*/
EOS_05                          :  '送出ページでEOSの契約に入金する', /*Fund EOS Contract on Send Page*/
EOS_06                          :  'Ether/トークンの送出ページに移動する', /*Go to Send Ether & Tokens Page*/
EOS_07                          :  '現在解錠中のお財布と同じものをここで解錠する', /*Unlock same wallet you are unlocking here.*/
EOS_08                          :  '支援したい量を`0xd0a6E6C54DbC68Db5db3A091B171A77407Ff7ccf`に送出する', /*Send Amount you want to Contribute to `0xd0a6E6C54DbC68Db5db3A091B171A77407Ff7ccf`*/
EOS_09                          :  'EOSトークンを請求する', /*Claim EOS Tokens*/
EOS_10                          :  '`claimAll`を選択する', /*Select `claimAll`.*/

/* Onboarding */
ONBOARD_welcome_title           :  'MyEtherWallet.com へようこそ!', /*Welcome to MyEtherWallet.com*/
ONBOARD_welcome_content__1      :  'あなた自身の安全のために、以下の事項をご理解ください。🙏', /*Please take some time to understand this for your own safety. 🙏*/
ONBOARD_welcome_content__2      :  'これらの警告をよくご覧いただきませんと、**資産が盗まれる**ことになります。', /*Your funds will be stolen if you do not heed these warnings.*/
ONBOARD_welcome_content__3      :  'わずらわしい説明だと重々承知しております。申し訳ございません。', /*We know this click-through stuff is annoying. We are sorry.*/
ONBOARD_welcome_content__4      :  'MyEtherWallet とは何か', /*What is MEW*/
ONBOARD_welcome_content__5      :  'MyEtherWallet は、無料で、オープンソースの、クライアントサイド・インターフェイスです。', /*MyEtherWallet is a free, open-source, client-side interface.*/
ONBOARD_welcome_content__6      :  '暗号鍵と資産を自身の管理下に置きながら、ブロックチェーンを直接操作することができます。', /*We allow you to interact directly with the blockchain while remaining in full control of your keys &amp; your funds.*/
ONBOARD_welcome_content__7      :  '**あなた**が、そして**あなただけ**が、自分のセキュリテイの全責任を負います。', /***You** and **only you** are responsible for your security.*/
ONBOARD_welcome_content__8      :  '詐欺サイトに騙されたり、暗号鍵を失くしてしまっても、私たちは資産を取り返したりお財布を凍結したりすることはできません。', /*We cannot recover your funds or freeze your account if you visit a phishing site or lose your private key.*/
ONBOARD_bank_title              :  'MyEtherWallet は金融機関に非ず', /*MyEtherWallet is not a Bank*/
ONBOARD_bank_content__1         :  '銀行や取引所などの金融機関に口座を開設すると、その金融機関がシステムの中にあなたの口座を作成します。', /*When you open an account with a bank or exchange, they create an account for you in their system.*/
ONBOARD_bank_content__2         :  'その金融機関はあなたの個人情報や口座のパスワード、残高、取引記録、そして究極的にはあなたの財産を記録・管理します。', /*The bank keeps track of your personal information, account passwords, balances, transactions and ultimately your money.*/
ONBOARD_bank_content__3         :  'また、カードが盗難に遭った際の払い戻しなど、口座の維持・管理に必要な手数料を徴収します。', /*The bank charge fees to manage your account and provide services, like refunding transactions when your card gets stolen.*/
ONBOARD_bank_content__4         :  '金融機関では、小切手を切ったり、送金のためにデビッドカードをチャージしたり、オンラインで残高の確認をしたり、パスワードや盗難に遭ったカードの再発行ができます。', /*The bank allows you to write a check or charge your debit card to send money, go online to check your balance, reset your password, and get a new debit card if you lose it.*/
ONBOARD_bank_content__5         :  'あなたの口座はその金融機関のものであり、送金額の上限や送金相手の指定、怪しい入金をどれだけの間差し止めるか、などの基準を独自に定めています。全て手数料が元になっています。', /*You have an account *with the bank or exchange* and they decide how much money you can send, where you can send it, and how long to hold on a suspicious deposit. All for a fee.*/
ONBOARD_welcome_title__alt      :  '前書き', /*Introduction*/
ONBOARD_interface_title         :  'MyEtherWallet は窓口である', /*MyEtherWallet is an Interface*/
ONBOARD_interface_content__1    :  'MyEtherWallet を使って口座を開設すると、一組の暗号数列、すなわち秘密鍵と公開鍵 (アドレス) が作成されます。', /*When you create an account on MyEtherWallet you are generating a cryptographic set of numbers: your private key and your public key (address).*/
ONBOARD_interface_content__2    :  'これらの暗号鍵の操作は全て、あなたのコンピューターの、あなたのブラウザの中で行われます。', /*The handling of your keys happens entirely on your computer, inside your browser.*/
ONBOARD_interface_content__3    :  '私たちは、秘密鍵やパスワード、その他一切の口座情報を送信・受信・保管いたしません。', /*We never transmit, receive or store your private key, password, or other account information.*/
ONBOARD_interface_content__4    :  '私たちは取引手数料を一切いただきません。', /*We do not charge a transaction fee.*/
ONBOARD_interface_content__5    :  'あなたは、私たちの**窓口**で**ブロックチェーンを直接**操作しています。', /*You are simply using our **interface** to interact **directly with the blockchain**.*/
ONBOARD_interface_content__6    :  '公開鍵 (アドレス) を相手に教えると、ETHやトークンを送ってもらうことができます。👍', /*If you send your *public key (address)* to someone, they can send you ETH or tokens. 👍*/
ONBOARD_interface_content__7    :  '秘密鍵が誰かの手に渡ると、受け取った相手があなたの口座を横取りしてしまいます。👎', /*If you send your *private key* to someone, they now have full control of your account. 👎*/
ONBOARD_bank_title__alt         :  'MyEtherWallet は金融機関に非ず', /*MEW isn\'t a Bank*/
ONBOARD_blockchain_title__alt   :  'そもそもブロックチェーンとは何か', /*WTF is a Blockchain?*/
ONBOARD_blockchain_skip         :  'もう知ってるんだけど...', /*I already know what a blockchain is...*/
ONBOARD_blockchain_title        :  'ちょっと待って、一体ブロックチェーンって何?', /*Wait, WTF is a Blockchain?*/
ONBOARD_blockchain_content__1   :  'ブロックチェーンは、世界共通の巨大な分散型のスプレッドシートのようなものです。', /*The blockchain is like a huge, global, decentralized spreadsheet.*/
ONBOARD_blockchain_content__2   :  '誰が誰にコインをいくら送ったとか、どの口座にいくら残っているか、などの情報を全て記録・保持しています。', /*It keeps track of who sent how many coins to whom, and what the balance of every account is.*/
ONBOARD_blockchain_content__3   :  '世界中に何千もいる特殊なコンピューターを持った人 (マイナー) によって、記録と管理が行われています。', /*It is stored and maintained by thousands of people (miners) across the globe who have special computers.*/
ONBOARD_blockchain_content__4   :  'ブロックチェーンの中にあるブロックは全て、MyEtherWallet や MetaMask、Exodus、Mist、Geth、Parity、その他様々な場所から送られてきた個々の取引記録で構成されています。', /*The blocks in the blockchain are made up of all the individual transactions sent from MyEtherWallet, MetaMask, Exodus, Mist, Geth, Parity, and everywhere else.*/
ONBOARD_blockchain_content__5   :  'MyEtherWallet や [etherscan.io](https://etherscan.io) で残高や取引記録を確認すると、見えるのは私たちのシステムの中身ではなく、ブロックチェーン上にあるデータです。', /*When you see your balance on MyEtherWallet.com or view your transactions on [etherscan.io](https://etherscan.io), you are seeing data on the blockchain, not in our personal systems.*/
ONBOARD_blockchain_content__6   :  '大事なことなのでもう一度: **私たちは金融機関ではありません。**', /*Again: **we are not a bank**.*/
ONBOARD_interface_title__alt    :  'MyEtherWallet は窓口である', /*MEW is an Interface*/
ONBOARD_why_title__alt          :  'でも... 何故それがそんなに大事なの?', /*But...why does this matter?*/
ONBOARD_why_title               :  '何故全部読ませるの?', /*Why are you making me read all this?*/
ONBOARD_why_content__1          :  'それは、私たちに**出来ない**事をご理解していただくためです...', /*Because we need you to understand that we **cannot**...*/
ONBOARD_why_content__2          :  '口座にアクセスし、あなたに代わって送金することはできません。', /*Access your account or send your funds for you X.*/
ONBOARD_why_content__3          :  '秘密鍵の復元や変更はできません。', /*Recover or change your private key.*/
ONBOARD_why_content__4          :  'パスワードの復元やリセットはできません。', /*Recover or reset your password.*/
ONBOARD_why_content__5          :  '取引の巻き戻し・取り消し・金額変更はできません。', /*Reverse, cancel, or refund transactions.*/
ONBOARD_why_content__6          :  '口座の凍結はできません。', /*Freeze accounts.*/
ONBOARD_why_content__7          :  '**あなた**が、そして**あなただけ**が、自分のセキュリテイの全責任を負います。', /***You** and **only you** are responsible for your security.*/
ONBOARD_why_content__8          :  '秘密鍵とパスワードを大事に保管してください。秘密鍵は、Mnemonic (ニーモニック) フレーズ、Keystoreファイル、UTCファイル、JSONファイル、お財布 (ウォレット) ファイルとも呼ばれることがあります。', /*Be diligent to keep your private key and password safe. Your private key is sometimes called your mnemonic phrase, keystore file, UTC file, JSON file,  wallet file.*/
ONBOARD_why_content__9          :  'もし秘密鍵やパスワードを忘れると、誰も回復させることができません。', /*If you lose your private key or password, no one can recover it.*/
ONBOARD_why_content__10         :  'もし、あなたが秘密鍵を詐欺サイトで入力すると、**全ての資産**が盗まれてしまいます。', /*If you enter your private key on a phishing website, you will have **all your funds taken**.*/
ONBOARD_blockchain_title__alt   :  'そもそもブロックチェーンとは何か', /*WTF is a Blockchain?*/
ONBOARD_point_title__alt        :  'それなら MyEtherWallet は何ができるの?', /*What\'s the Point of MEW then?*/
ONBOARD_whymew_title            :  'MyEtherWallet ができないなら、つまりどういうこと?', /*If MyEtherWallet can\'t do those things, what\'s the point?*/
ONBOARD_whymew_content__1       :  'これがブロックチェーンと分散化の**肝**である、ということです。', /*Because that is the point of decentralization and the blockchain.*/
ONBOARD_whymew_content__2       :  '自分の資産を動かすときに、金融機関・政府や他の誰かを頼る必要が全くありません。', /*You don\'t have to rely on your bank, government, or anyone else when you want to move your funds.*/
ONBOARD_whymew_content__3       :  '自分の資産を守るために、取引所や銀行のセキュリティに頼る必要もありません。', /*You don\'t have to rely on the security of an exchange or bank to keep your funds safe.*/
ONBOARD_whymew_content__4       :  'もし、こういった事には価値がない、と感じるのでしたら、なぜブロックチェーンや仮想通貨に価値を感じたのか、よく考えてみてください。😉', /*If you don\'t find these things valuable, ask yourself why you think the blockchain and cryptocurrencies are valuable. 😉*/
ONBOARD_whymew_content__5       :  'もし、お気に召さないようでしたら、[Coinbase](https://www.coinbase.com/) や [Blockchain.info](https://blockchain.info/wallet/#/signup)をお使いください。これらは、IDとパスワードを使用する、より一般的な口座を採用しています。', /*If you don\'t like the sound of this, consider using [Coinbase](https://www.coinbase.com/) or [Blockchain.info](https://blockchain.info/wallet/#/signup). They have more familiar accounts with usernames & passwords.*/
ONBOARD_whymew_content__6       :  'もし、少し不安だけれども MyEtherWallet を使いたければ、[ハードウェアウォレットを入手しましょう](https://kb.myetherwallet.com/hardware-wallets/hardware-wallet-recommendations.html)！(英語) あなたの鍵を安全に保管してくれます。', /*If you are scared but want to use MEW, [get a hardware wallet](https://kb.myetherwallet.com/hardware-wallets/hardware-wallet-recommendations.html)! These keep your keys secure.*/
ONBOARD_why_title__alt          :  'でも... どうして?', /*But...why?*/
ONBOARD_secure_title            :  '自分自身とその資産の守り方', /*How To Protect Yourself & Your Funds*/
ONBOARD_secure_1_title          :  'フィッシング詐欺から自分自身を守る方法', /*How To Protect Yourself from Phishers*/
ONBOARD_secure_1_content__1     :  'フィッシング詐欺師は、MyEtherWallet や EtherDelta、Paypalやあなたの銀行に似せて作られたウェブサイトのリンクが含まれたメッセージを送りつけてきますが、これは偽サイトです。あなたの情報を盗み、そして資産を盗みます。', /*Phishers send you a message with a link to a website that looks just like MyEtherWallet, EtherDelta, Paypal, or your bank, but is not the real website. They steal your information and then steal your money.*/
ONBOARD_secure_1_content__2     :  '[EAL](https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn) または [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)、[Cryptonite by Metacert](https://chrome.google.com/webstore/detail/cryptonite-by-metacert/keghdcpemohlojlglbiegihkljkgnige)、[MyEtherWallet Chrome Extension](https://chrome.google.com/webstore/detail/myetherwallet-cx/nlbmnnijcnlegkjjpcfjclmcfggfefdm) を使い、悪質なサイトを遮断してください。', /*Install [EAL](https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn) or [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) or  or the [MyEtherWallet Chrome Extension](https://chrome.google.com/webstore/detail/myetherwallet-cx/nlbmnnijcnlegkjjpcfjclmcfggfefdm) to block malicious websites.*/
ONBOARD_secure_1_content__3     :  'いつも、必ず、URLが「https://vintage.myetherwallet.com」であるを確認してください。', /*Always check the URL: `https://vintage.myetherwallet.com`.*/
ONBOARD_secure_1_content__4     :  'URLバーに、`MYETHERWALLET INC` と緑色で表示されていることを必ず確認してください。', /* Always make sure the URL bar has `MYETHERWALLET INC` in green. */
ONBOARD_secure_1_content__5     :  'Eメールや Slack、Reddit、Twitter などから無差別に送られてくるメッセージやリンクを信用しないでください。', /*Do not trust messages or links sent to you randomly via email, Slack, Reddit, Twitter, etc.*/
ONBOARD_secure_1_content__6     :  '情報を入力する際は、Eメールやメッセージ中のリンクを経由してWebサイトに行くのではなく、常に直接Webサイトを訪れてください。', /*Always navigate directly to a site before you enter information. Do not enter information after clicking a link from a message or email.*/
ONBOARD_secure_1_content__7     :  '[広告ブロッカーを導入](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=ja)し、サーチエンジン（例: Google）の広告をクリックしないでください。', /*[Install an AdBlocker](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en) and do not click ads on your search engine (e.g. Google).*/
ONBOARD_point_title__alt_2      :  'それで要点は?', /*What\'s the point?*/
ONBOARD_secure_2_title          :  '詐欺から自分自身を守る方法', /*How To Protect Yourself from Scams*/
ONBOARD_secure_2_content__1     :  'こういった人たちは、「何の見返りもなしにお金をあげる」と言って近づいてきます。', /*People will try to get you to give them money in return for nothing.*/
ONBOARD_secure_2_content__2     :  'もし、あり得ないくらい良い話であれば、きっと本当に「あり得ない話」です。', /*If it is too good to be true, it probably is.*/
ONBOARD_secure_2_content__3     :  '誰か、あるいは何かのプロジェクトに送金する前に、よく調査してください。様々なWebサイトやフォーラムの情報をよく確かめてください。慎重に。', /*Research before sending money to someone or some project. Look for information on a variety of websites and forums. Be wary.*/
ONBOARD_secure_2_content__4     :  '理解できなかったり、正しくないと思われる場合には、誰かに質問してください。', /*Ask questions when you don\'t understand something or it doesn\'t seem right.*/
ONBOARD_secure_2_content__5     :  '不安や懐疑心、流行遅れへの恐怖が常識の範囲を越えないように。もし何かとても緊急だと言われたら、「なぜだろう」と自分でもう一度考えてみてください。おそらくそれは、時期を逃してしまう恐怖を煽るものか、十分な下調べをさせないための罠です。', /*Don\'t let fear, FUD, or FOMO win over common sense. If something is very urgent, ask yourself "why?". It may be to create FOMO or prevent you from doing research.*/
ONBOARD_secure_3_title__alt     :  'くたばれ詐欺師ども', /*Phuck Phishers*/
ONBOARD_secure_3_title          :  '損失を防ぐ方法　', /*How To Protect Yourself from Loss*/
ONBOARD_secure_3_content__1     :  'もし秘密鍵やパスワードを失くした場合、財産を永久に失います。絶対に失くさないでください。', /*If you lose your private key or password, it is gone forever. Don\'t lose it.*/
ONBOARD_secure_3_content__2     :  '秘密鍵やパスワードのバックアップを作成してください。絶対にコンピューターに保存したままにしないでください。紙に印刷したりUSBに保存してください。', /*Make a backup of your private key and password. Do NOT just store it on your computer. Print it out on a piece of paper or save it to a USB drive.*/
ONBOARD_secure_3_content__3     :  '印刷した紙やUSBキーを、物理的に別の場所に保管してください。バックアップ一つだけでは、火事や津波などで、コンピューターと共に破壊されてしまいます。', /*Store this paper or USB drive in a different physical location. A backup is not useful if it is destroyed by a fire or flood along with your laptop.*/
ONBOARD_secure_3_content__4     :  '秘密鍵を Dropbox や Google Drive、または他のクラウドストレージに保管しないでください。そのアカウントのセキュリティが損なわれた場合に、資産が盗まれてしまいます。', /*Do not store your private key in Dropbox, Google Drive, or other cloud storage. If that account is compromised, your funds will be stolen.*/
ONBOARD_secure_3_content__5     :  'もし、あなたが1週間以上の給料に値する仮想通貨をお持ちであれば、ハードウェアウォレットを入手してください。言い訳ご無用。それだけの価値があります。絶対です。', /*If you have more than 1-week\'s worth of pay worth of cryptocurrency, get a hardware wallet. No excuses. It\'s worth it. I promise.*/
ONBOARD_secure_3_content__6     :  '[さらなる安全確保のためのセキュリティ情報はこちら！](https://kb.myetherwallet.com/getting-started/protecting-yourself-and-your-funds.html)', /*[Even more Security Tips!](https://kb.myetherwallet.com/getting-started/protecting-yourself-and-your-funds.html)*/
ONBOARD_secure_2_title__alt_2   :  '詐欺の撲滅', /*Screw Scams*/
ONBOARD_final_title__alt        :  'あとワンクリックで完了です! 🤘', /*One more click & you\'re done! 🤘*/
ONBOARD_final_title             :  'よし、これにて講義終了!', /*Alright, I\'m done lecturing you!*/
ONBOARD_final_subtitle          :  'こんな風で申し訳ありません。次はこれです!', /*Sorry for being like this. Onwards!*/
ONBOARD_final_content__1        :  'お財布を作る', /*Create a wallet*/
ONBOARD_final_content__2        :  'ハードウェアウォレットを手に入れる', /*Get a hardware wallet*/
ONBOARD_final_content__3        :  'MEW+Metamaskの設定方法', /*How to Set up MEW + MetaMask*/
ONBOARD_final_content__4        :  'オフライン/ローカル環境でのMEWの使い方', /*How to Run MEW Offline / Locally*/
ONBOARD_final_content__5        :  'Ledgerハードウェアウォレットでの送出方法', /*How to Send via Ledger hardware wallet*/
ONBOARD_final_content__6        :  'TREZORハードウェアウォレットでの送出方法', /*How to Send via TREZOR hardware wallet*/
ONBOARD_final_content__7        :  'MetaMaskでの送出方法', /*How to Send via MetaMask*/
ONBOARD_final_content__8        :  'より詳しく / お問い合わせ', /*Learn More or Contact Us*/
ONBOARD_final_content__9        :  'もう勘弁、お願い、早く使わせて。', /*OMG, please just let me send FFS.*/
ONBOARD_resume                  :  'まだスライドを最後までお読みになっていないようです。アドバイス: スライドは全部読んだほうがいいですよ 😉',/*It looks like you didn\'t finish reading through these slides last time. ProTip: Finish reading through the slides 😉*/

/* Old */
ADD_DigitalBitbox_0a        : 'セキュア通信（SSL)で、MyEtherWalletを開きなおしてください。',
ADD_DigitalBitbox_0b        : '[Chrome](https://www.google.com/chrome/browser/desktop/)か[Opera](https://www.opera.com/)で、MyEtherWalletを開きなおしてください',
ADD_DigitalBitbox_scan      : 'Digital Bitboxに接続する',
ADD_Secalot_0a              : 'セキュア通信（SSL)で、MyEtherWalletを開きなおしてください。',
ADD_Secalot_0b              : '[Chrome](https://www.google.com/chrome/browser/desktop/)か[Opera](https://www.opera.com/)で、MyEtherWalletを開きなおしてください',
ADD_Secalot_scan            : 'Secalotに接続する',
ADD_Label_1                 : 'ご希望の操作方法をお選びください。',
ADD_Label_2                 : 'ニックネームの作成:',
ADD_Label_3                 : 'お財布が暗号化されています。パスワードを入力してください:',
ADD_Label_4                 : 'ウォッチ用アカウントを追加する',
ADD_Label_5                 : 'アドレスを入力する',
ADD_Label_6                 : 'お財布を解錠する',
ADD_Label_6_short           : '解錠',
ADD_Label_7                 : 'アカウントを追加する',
ADD_Label_8                 : 'パスワード（任意）:',
ADD_Ledger_0a               : 'セキュア通信（SSL)で、MyEtherWalletを開きなおしてください。',
ADD_Ledger_0b               : '[Chrome](https://www.google.com/chrome/browser/desktop/)か[Opera](https://www.opera.com/)で、MyEtherWalletを開きなおしてください',
ADD_Ledger_1                : 'Ledger Walletに接続する',
ADD_Ledger_2                : 'Etherreumアプリケーション（または契約アプリケーション）を開く',
ADD_Ledger_2_Exp            : 'Expanseアプリケーション（または契約アプリケーション）を開く',
ADD_Ledger_2_Ubq            : 'Ubiqアプリケーション（または契約アプリケーション）を開く',
ADD_Ledger_3                : '設定画面で、ブラウザサポートが有効にされていることを確認してください。',
ADD_Ledger_4                : '設定画面にブラウザサポートが見つからなければ、[Firmware 1.2以上](https://www.ledgerwallet.com/apps/manager)を確認してください。',
ADD_Ledger_scan             : 'Ledger Walletに接続する',
ADD_MetaMask                : 'MetaMaskに接続する',
ADD_Radio_1                 : 'お財布を新規作成する',
ADD_Radio_2                 : 'お財布ファイルを選択 (Keystore / JSON)',
ADD_Radio_2_alt             : 'お財布ファイルを選択',
ADD_Radio_2_short           : 'お財布ファイルを選択...',
ADD_Radio_3                 : '秘密鍵を貼り付ける',
ADD_Radio_4                 : 'ウォッチ用アカウントを追加',
ADD_Radio_5                 : 'Mnemonic（ニーモニック）を貼り付ける',
ADD_Radio_5_Path            : 'HD derivation pathを選択する',
ADD_Radio_5_woTrezor        : '(Jaxx, Metamask, Exodus, imToken)',
ADD_Radio_5_withTrezor      : '(Jaxx, Metamask, Exodus, imToken, TREZOR)',
ADD_Radio_5_PathAlternative : '(Ledger)',
ADD_Radio_5_PathTrezor      : '(TREZOR)',
ADD_Radio_5_PathCustom      : 'カスタム',
ADD_Trezor_scan             : 'TREZORに接続する',
ADD_Warning_1               : '任意のアカウントをウォッチする目的で、秘密鍵をアップロードせずにお財布タブに追加することできます。これによってお財布の操作や、Etherの送受金が可能になるわけではありません。',

BULK_Label_1                : '作成するお財布の数',
BULK_Label_2                : 'お財布を複数を作成する',
BULK_SuccessMsg             : '成功！お財布が作成されました。',

CONTRACT_ByteCode           : 'バイトコード',
CONTRACT_Interact_CTA       : '機能を選んでください',
CONTRACT_Interact_Title     : '契約の読込・書込',
CONTRACT_Json               : 'ABI / JSON インターフェース',
CONTRACT_Read               : '読込',
CONTRACT_Title              : '契約アドレス',
CONTRACT_Title_2            : '既存の契約を選択する',
CONTRACT_Write              : '書込',

CX_error_1                  : 'お財布が保存されていません。["Add Wallet"](/cx-wallet.html#add-wallet)をクリックして追加してください！',
CX_quicksend                : '簡単送信', // if no appropriate translation, just use "Send"
CX_Tagline                  : 'オープンソース JavaScript クライアントサイド Ether ウォレット Chrome Extension',
CX_Warning_1                : 'ここに保管する全てのお財布の「**外部バックアップ**」を必ず作成してください。このChrome拡張機能のアンインストールや再インストールなどで、データが消失する場合があります。この拡張機能は簡単にお財布を操作するだけのものであり、**バックアップ**のためのものではありません。',

decrypt_Access              : 'どの方法でお財布を操作しますか？',
decrypt_Title               : '秘密鍵形式を選択',
decrypt_Select              : 'お財布を選択',

DEP_generate                : 'バイトコードを生成する',
DEP_generated               : '生成されたバイトコード',
DEP_signtx                  : 'トランザクションに署名する',
DEP_interface               : '生成されたインターフェース',

ERROR_0                     : '(error_01) 正しい値を入力してください。',
ERROR_1                     : '(error_02) パスワードは最低9文字が必要です。強固なパスワードであることをお確かめください。',
ERROR_2                     : '(error_03) 申し訳ございませんが、この形式のお財布ファイルは認識できません。',
ERROR_3                     : '(error_04) 正しいお財布ファイルではありません。',
ERROR_4                     : '(error_05) この単位は存在しません。指定された単位の中からお選びください。',
ERROR_5                     : '(error_06) 正しいアドレスを入力してください。',
ERROR_6                     : '(error_07) 正しいパスワードを入力してください。',
ERROR_7                     : '(error_08) 正しい数を入力してください（0～18の整数である必要があります）。',
ERROR_8                     : '(error_09) 正しいガスリミットを入力してください（21000から4000000の整数である必要があります）。',
ERROR_9                     : '(error_10) 正しいデータ値を入力してください（16進数である必要があります）。',
ERROR_10                    : '(error_11) 正しいガス価格を入力してください（整数である必要があります。20 GWEI（20000000000 WEI）でお試しください）。',
ERROR_11                    : '(error_12) 正しいnonceを入力してください（整数である必要があります）',
ERROR_12                    : '(error_13) 無効な署名のトランザクションです。',
ERROR_13                    : '(error_14) 同じニックネームのお財布が既に存在します。',
ERROR_14                    : '(error_15) お財布が見つかりません。',
ERROR_15                    : '(error_16) おや、このIDのプロポーサルは存在しないか、あるいは正常に読み込みできないようです。',
ERROR_16                    : '(error_17) 同じアドレスのお財布が既に存在します。お財布のページをご確認ください。',
ERROR_17                    : '(error_18) 残高が足りません。ガスリミット × ガス価格 + 送出したい量 が現在の残高より多いです。口座にETHを追加するか「残高をすべて送出する」ボタンを使ってください。もしこのエラーが間違いだと思う場合は、 トランザクションを生成しなおしてください。 必要量: (d+), 所持量: (d+) [詳細はこちら](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)',
ERROR_18                    : '(error_19) 全てのガスがこのトランザクションにより消費されます。これは、このプロポーサルに既に投票したか、ディベート期間が終了しているためです。',
ERROR_19                    : '(error_20) 正しいシンボルを入力してください。',
ERROR_20                    : '(error_21) 正しいERC-20トークンではありません。',
ERROR_21                    : '(error_22) ガス量を推定できません。十分な資金が口座にないか、受取側の契約アドレスでエラーが発生しています。ガス量を手動で設定し、続行してください。送出時により詳しいエラーメッセージが表示される場合があります。',
ERROR_22                    : '(error_23) 正しいノード名を入力してください。',
ERROR_23                    : '(error_24) 正しいURLを入力してください。HTTPSで接続している場合には、URLもHTTPS接続にしなければなりません。',
ERROR_24                    : '(error_25) 正しいポートを入力してください。',
ERROR_25                    : '(error_26) 正しいchain IDを入力してください。',
ERROR_26                    : '(error_27) 正しいABIを入力してください。',
ERROR_27                    : '(error_28) 最小値: 0.01. 最大値:',
ERROR_28                    : '(error_29) 今後お財布を操作するためには、この`Keystoreファイルとパスワード`または`秘密鍵`（次ページ）が必要になります。',
ERROR_29                    : '(error_30) 正しいユーザーとパスワードを入力してください',
ERROR_30                    : '(error_31) 正しい名前を入力してください（7文字以上、句読点制限）',
ERROR_31                    : '(error_32) 正しいsecret phraseを入力してください。',
ERROR_32                    : '(error_33) ノードに接続できませんでした。ページを再表示したり、別のノード（画面の右上にあります）を試したり、ファイアーウォールの設定を確認したりしてください。 カスタムノードを使用している場合は、設定を確認してください。',
ERROR_33                    : '(error_34) 解錠したお財布のアドレスが、オーナーのアドレスと一致しません。',
ERROR_34                    : '(error_35) 開示しようとしている名前が、以前に入力した名前と異なります。',
ERROR_35                    : '(error_36) 入力したアドレスには、チェックサムが付いていません。<a href="https://kb.myetherwallet.com/addresses/what-does-checksummed-mean.html" target="_blank" rel="noopener noreferrer">詳細はこちら</a>',
ERROR_36                    : '(error_37) 正しいトランザクションハッシュを入力してください。',
ERROR_37                    : '(error_38) 16進数を正しく入力してください。（入力可能文字列: 0x, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, a, b, c, d, e, f）',
ERROR_38                    : '(error_39) 申請は、価格か最低価格を0以上に設定する必要があります。',
ERROR_39                    : '(error_40) 入札額は指定された最少額よりも大きい必要があります。',
ERROR_40                    : '(error_41) Please enter a valid private key',

GETH_Balance                : '(geth-01) 残高が足りません。ガスリミット × ガス価格 + 送出したい量 が現在の残高より多いです。口座にETHを追加するか「残高をすべて送出する」ボタンを使ってください。もしこのエラーが間違いだと思う場合は、 トランザクションを生成しなおしてください。 必要量: (d+), 所持量: (d+) [詳細はこちら](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)',
GETH_Cheap                  : '(geth-02) ガス価格が低すぎて承認できません。画面右上のドロップダウンメニューから、ガス価格を21 GWEIに上げてみてください。',
GETH_GasLimit               : '(geth-03) ブロックのガスリミットを超過しました。トランザクション・コストが現在のガスリミットを超過しました。 リミット: (d+), 指定: (d+). ガスリミットを21000（送出時）か200000（トークンや契約の送出時）より少なくして、もう一度お試しください。[詳細はこちら](https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html)',
GETH_InsufficientFunds      : '(geth-04) 残高が足りません。ガスリミット × ガス価格 + 送出したい量 が現在の残高より多いです。口座にETHを追加するか「残高をすべて送出する」ボタンを使ってください。もしこのエラーが間違いだと思う場合は、 トランザクションを生成しなおしてください。 必要量: (d+), 所持量: (d+) [詳細はこちら](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)',
GETH_IntrinsicGas           : '(geth-05) もともとのガスの量が低すぎます。画面右上のドロップダウンメニューから、ガス価格を21 GWEIに上げるか、ガスリミットを21000（送出時）か200000（トークンや契約の送出時）まで上げて、もう一度お試しください。',
GETH_InvalidSender          : '(geth-06) 送出元が無効です。',
GETH_NegativeValue          : '(geth-07) 負の値です。',
GETH_Nonce                  : '(geth-08) トランザクションの[nonce](https://kb.myetherwallet.com/transactions/what-is-nonce.html)が低すぎます。トランザクション生成ボタンを押してnonceを増やすか、[待機中トランザクションを置き換えてください](https://kb.myetherwallet.com/transactions/check-status-of-ethereum-transaction.html)。',
GETH_NonExistentAccount     : '(geth-09) アカウントが存在しないか、残高不足です。',

PARITY_AlreadyImported      : "(parity-01) 同じハッシュのトランザクションが既にインポートされています。このトランザクションは既に送出されている可能性があります。トランザクションの重複を防ぐために、[etherscan.io](https://etherscan.io)でアドレスを確認してください。再送出しようとする前に10分間待機してください。[詳しくはこちら](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)",
PARITY_GasLimitExceeded     : "(parity-02) トランザクション・コストが現在のガスリミットを超過しました。 リミット: (d+), 指定: (d+). ガスリミットを21000（送出時）か200000（トークンや契約の送出時）より少なくして、もう一度お試しください。[詳細はこちら](https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html)",　　　/* increasing gas limit???  Transaction cost exceeds current gas limit. Limit: (d+), got: (d+). Please lower the gas limit to 21000 (for sending) or 200000 (for sending tokens or contracts) and try again. [Learn More](https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html)*/
PARITY_InsufficientBalance  : "(parity-03) 残高が足りません。トランザクションを送出しようとしているアカウントに、十分な量の資金がありません。もしこのエラーが間違いだと思う場合は、「残高をすべて送出する」ボタンを使うか、トランザクションを生成しなおしてください。必要量: (d+), 所持量: (d+) [詳細はこちら](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)",
PARITY_InsufficientGasPrice : "(parity-04) 同じnonceのトランザクションが既にキューに存在しているか、トランザクション手数料が低すぎます。トランザクション生成ボタンを押してnonceを増やしてください。[詳細はこちら](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)",
PARITY_InvalidGasLimit      : "(parity-05) ガス供給量が制限を超過しています。ガスリミットを21000に下げてください。[詳細はこちら](https://kb.myetherwallet.com/gas/what-is-gas-ethereum.html)",
PARITY_LimitReached         : "(parity-06) キューに存在するトランザクションの数が多すぎます。上限超過のため、このトランザクションは除外されています。ガス価格を上げてください。[詳細はこちら](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)",
PARITY_Old                  : "(parity-07) 同じ[nonce](https://kb.myetherwallet.com/transactions/what-is-nonce.html)のトランザクションが既に存在しています。トランザクション生成ボタンを押してnonceを増やすか、[待機中トランザクションを置き換えてください](https://kb.myetherwallet.com/transactions/check-status-of-ethereum-transaction.html)。",
PARITY_TooCheapToReplace    : "(parity-08) トランザクション手数料が低すぎます。ご利用のノードの最低額を満たしていません（最低額: (d+), 指定: (d+)）。ガス価格かガスリミットを上げてください。[詳細はこちら](https://kb.myetherwallet.com/transactions/transactions-not-showing-or-pending.html)",


FOOTER_1                    : 'Ethereum ウォレットを作成するための、無料で、オープンソースの、クライアントサイド・インターフェイス。Ethereum のブロックチェーンを簡単且つ安全に操作。お財布解錠の前に、URL (myetherwallet.com) を再確認してください。',
FOOTER_1b                   : '制作者:',
FOOTER_2                    : '投げ銭に感謝いたします！',
FOOTER_3                    : 'クライアント・サイド ウォレット制作者:',
FOOTER_4                    : '免責事項',

GAS_PRICE_Desc              : 'ガス価格は、ガスの一単位当たりにかかるの料金のことです。 `トランザクション手数料`は「ガス価格 × ガスリミット」で算出され、自分のトランザクションをブロックに取り入れてもらうために、マイナーに支払われます。ガス価格が高いほど処理は早く行われますが、料金は高くなります。既定値は`41 GWEI`です。', /*Gas Price is the amount you pay per unit of gas. `TX fee = gas price * gas limit` & is paid to miners for including your TX in a block. Higher the gas price = faster transaction, but more expensive. Default is `41 GWEI`.*/
GAS_LIMIT_Desc              : 'ガスリミットは、トランザクション送出のためのガスの最大量です。`トランザクション手数料`は「ガス価格 × ガスリミット」で算出され、自分のトランザクションをブロックに取り入れてもらうために、マイナーに支払われます。 この数字を増やしても、トランザクションの処理が早くなることはありません。ETHの送出には`21000`、トークンの送出には`200000`以下が目安になります。', /*Gas limit is the amount of gas to send with your TX. `TX fee` = gas price * gas limit & is paid to miners for including your TX in a block. Increasing this number will not get your TX mined faster. Sending ETH = `21000`. Sending Tokens = ~`200000`.*/

GEN_desc                    : '複数のお財布の作成をこのタブで行う事ができます:', /* If you want to generate multiple wallets, you can do so here */
GEN_Help_1                  : 'この', /* Use your */
GEN_Help_2                  : 'で自分の口座アドレスにアクセスしてください。', /* to access your account. */
GEN_Help_3                  : '自分のデバイスそのものが、あなたののお財布です。',　/* Your device * is * your wallet. */
GEN_Help_4                  : '説明書とFAQ',　/* Guides & FAQ */
GEN_Help_5                  : 'お財布の作り方', /* How to Create a Wallet */
GEN_Help_6                  : 'はじめに', /* Getting Started */
GEN_Help_7                  : '安全な場所で保管する · バックアップを作成する · 誰にも教えない · 絶対に失くさない · 失くしても復元はできない。',
GEN_Help_8                  : 'ファイルをダウンロードしませんでしたか？', /* Not Downloading a File? */
GEN_Help_9                  : 'Google Chromeをお使いください', /* Try using Google Chrome */
GEN_Help_10                 : '右クリックしてファイルを保存してください。ファイル名:', /* Right click & save file as. Filename:  */
GEN_Help_11                 : 'このファイルは、コンピューター上で開かないでください', /*Don\'t open this file on your computer */
GEN_Help_12                 : 'MyEtherWallet上でこれを使用し、お財布を解錠してください（Mist、Geth、Parityやその他のお財布クライアントでも可）。', /*Use it to unlock your wallet via MyEtherWallet (or Mist, Geth, Parity and other wallet clients.)*/
GEN_Help_13                 : 'Keystoreファイルのバックアップ方法', /*How to Back Up Your Keystore File */
GEN_Help_14                 : 'これらの形式の違いは？',　/*What are these Different Formats? */
GEN_Help_15                 : '資金の紛失や盗難を防止するには', /* Preventing loss & theft of your funds. */
GEN_Help_16                 : 'これらの形式の違いは？', /*What are these Different Formats?*/
GEN_Help_17                 : '何故これらをすべきか？', /*Why Should I?*/
GEN_Help_18                 : '2つ目のバックアップ作成のため', /*To have a secondary backup.*/
GEN_Help_19                 : 'パスワードを忘れた場合のため', /* In case you ever forget your password. */
GEN_Help_20                 : 'コールドストレージ用', /* Cold Storage */
GEN_Label_1                 : 'パスワードを入力してください', /* Enter a password */
GEN_Label_2                 : '`Keystore`ファイルを保存してください。', /* Save your `Keystore` File. */
GEN_Label_3                 : 'アドレスを保存してください。', /* Save Your Address. */
GEN_Label_4                 : 'お財布紙情報 (ペーパーウォレット) かQRコードを印刷してください。', /* Print paper wallet or a QR code. */
GEN_Label_5                 : '自分の`秘密鍵`を保存してください。', /* Save Your `Private Key`. */
GEN_Placeholder_1           : '必ず保存してください!', /* Do NOT forget to save this! */
GEN_SuccessMsg              : '成功! お財布が作成されました。', /* Success! Your wallet has been generated. */
GEN_Unlock                  : '自分のアドレスを確認するために、お財布を解錠する。', /* Unlock your wallet to see your address */
GET_ConfButton              : 'わかりました。続けます。', /* I understand. Continue. */

MEW_Warning_1               : 'お財布を操作したり新しいお財布を作成したりする前に、必ずURLを確認してください。詐欺サイトにご注意ください！',
MEW_Tagline                 : 'オープンソース JavaScript クライアントサイド Ether ウォレット',

MNEM_1                      : '操作したいアドレスを選択してください。',
MNEM_2                      : 'HD Mnemonic（ニーモニック）の一文節で、複数のお財布やアドレスが操作可能です。操作したいアドレスを選択してください。',
MNEM_more                   : 'さらにアドレスを表示',
MNEM_prev                   : '前のアドレスを表示',

MSG_message                 : 'メッセージ',
MSG_date                    : '日付',
MSG_signature               : '署名',
MSG_verify                  : 'メッセージを確認',
MSG_info1                   : 'この署名が別の日付で再度使われないようにするために、現時点の日付を入れてください。',
MSG_info2                   : '他人に使われないようにするため、あなたのニックネームとそれが使われるところを入れてください。',
MSG_info3                   : '異なった目的で使用されないようにするために、利用目的を入れてください。',

MYWAL_Nick                  : 'お財布ニックネーム',
MYWAL_Address               : 'お財布アドレス',
MYWAL_Bal                   : '残高',
MYWAL_Edit                  : '編集',
MYWAL_View                  : '表示',
MYWAL_Remove                : '消去',
MYWAL_RemoveWal             : 'お財布を消去',
MYWAL_WatchOnly             : 'ウォッチ中のアカウント',
MYWAL_Viewing               : 'お財布を表示：',
MYWAL_Hide                  : 'お財布情報を隠す',
MYWAL_Edit_2                : 'お財布を編集：',
MYWAL_Name                  : 'お財布名',
MYWAL_Content_1             : '警告！ お財布を消去しようとしています',
MYWAL_Content_2             : '消去する前に、**秘密鍵とKeystoreファイルのいずれか又は両方、及びパスワードが保管されているか**確認してください。',
MYWAL_Content_3             : '今後MyEtherWallet CXでこのお財布を使用するためには、秘密鍵/JSONとパスワードを手動で追加する必要があります。',

NAV_AddWallet               : 'お財布の追加', /* Add Wallet */
NAV_BulkGenerate            : '大量作成', /* Bulk Generate */
NAV_CheckTxStatus           : '取引状況の確認', /* Check TX Status */
NAV_Contact                 : '連絡する', /* Contact */
NAV_Contracts               : '契約', /* Contracts */
NAV_DeployContract          : '契約を展開', /* Deploy Contract */
NAV_DomainSale              : 'ドメイン販売', /*DomainSale*/
NAV_ENS                     : 'ENS', /* ENS */
NAV_GenerateWallet          : 'お財布の作成', /* Create New Wallet */
NAV_GenerateWallet_alt      : 'お財布の作成', /* New Wallet */
NAV_Help                    : 'ヘルプ', /* Help */
NAV_InteractContract        : '契約を操作',
NAV_Multisig                : 'マルチシグ',
NAV_MyWallets               : '自分のお財布',
NAV_Offline                 : 'オフライン送出',
NAV_SendEther               : 'Ether/トークンの送出',
NAV_SendTokens              : 'トークン送出',
NAV_SignMsg                 : 'メッセージ署名',
NAV_Swap                    : '通貨の両替',
NAV_TxStatus                : '取引状況',
NAV_ViewWallet              : 'お財布情報の確認',
NAV_YourWallets             : '自分のお財布',

NODE_Title                  : 'カスタムノードをセットアップ',
NODE_Subtitle               : 'ローカルノードに接続するには...',
NODE_Warning                : 'MyEtherWallet.com 経由で接続するためには、HTTPSノードが必要です。[MyEtherWalletをレポジトリからダウンロードして、ローカル環境で実行させて](https://github.com/kvhnuke/etherwallet/releases/latest)、いずれかのノードに接続することもできます。または、無料のSSL証明書を[LetsEncrypt](https://letsencrypt.org/)から入手してください。',
NODE_Name                   : 'ノード名',
NODE_Port                   : 'ノードポート',
NODE_CTA                    : '保存してカスタムノードを使用',

NONCE_Desc                  : 'このnonceは、指定のアドレスから送出されるトランザクション数です。トランザクションを重複なく正しい順番で送出するためのものです。',

OFFLINE_Desc                : 'オフライントランザクションの生成は、3ステップで行う事ができます。ステップ1と3はオンラインのコンピューター上で行い、ステップ２はオフライン又は物理的にネットワークと切断されたコンピューターを用います。これにより秘密鍵が、インターネットに接続したデバイスと接触するのを避けることができます。',
OFFLINE_Step1_Button        : '情報を生成する',
OFFLINE_Step1_Label_1       : '送出元アドレス:',
OFFLINE_Step1_Label_2       : '注意: これは、送出「元」アドレスであり、送出「先」アドレスではありません。nonceは操作元アカウントから生成されます。物理的に切断されたコンピューターを使用する場合は、コールドストレージのアカウントを指定してください。',
OFFLINE_Step2_Title         : 'ステップ2: 情報の生成（オフラインコンピューター）',
OFFLINE_Step2_Label_1       : '送出先アドレス:',
OFFLINE_Step2_Label_2       : '送出する値/量',
OFFLINE_Step2_Label_3       : 'ガス価格',
OFFLINE_Step2_Label_3b      : 'これは、ステップ1でオンラインコンピューター上に表示されたものです。',
OFFLINE_Step2_Label_4       : 'ガスリミット',
OFFLINE_Step2_Label_4b      : 'ガスリミットの既定値は21000です。契約や追加データを送出する場合には、値を変更する必要があります。使用されなかったガスは全て返却されます。',
OFFLINE_Step2_Label_5       : 'Nonce',
OFFLINE_Step2_Label_5b      : 'これは、ステップ1でオンラインコンピューター上に表示されたものです。',
OFFLINE_Step2_Label_6       : 'データ',
OFFLINE_Step2_Label_6b      : 'これは、任意の追加データです。契約に対してトランザクションを送出する際によく使われます。',
OFFLINE_Step2_Label_7       : '秘密鍵/JSONの入力/選択',
OFFLINE_Step3_Title         : 'ステップ3: トランザクションの送出/公開（オンラインコンピューター）',
OFFLINE_Step3_Label_1       : 'ステップ2で署名されたトランザクションをここに貼り付け、「トランザクションの送出」ボタンをクリックしてください。',
OFFLINE_Title               : 'オフライントランザクションの生成・送出',
OFFLLINE_Step1_Title        : 'ステップ1: 情報の生成（オンラインコンピューター）',

SEND_addr                   : '送出先アドレス:',
SEND_amount                 : '送出数量:',
SEND_amount_short           : '数量',
SEND_custom                 : 'カスタムトークンを追加',
SEND_gas                    : 'ガス',
SEND_generate               : 'トランザクションを生成',
SEND_raw                    : '未加工トランザクション',
SEND_signed                 : '署名済みトランザクション',
SEND_trans                  : 'トランザクションを送出',
SEND_TransferTotal          : '残高をすべて送出する',
SENDModal_Content_1         : '次のEther/トークンの送出準備完了:',
SENDModal_Content_2         : '送出先:',
SENDModal_Content_3         : '本当に送出してよろしいですか？',
SENDModal_Content_4         : '注意: エラーが発生した場合、トークン送出のためのガスが足りない可能性があります。ガスはETHで支払われます。',
SENDModal_No                : 'いいえ、中断します！',
SENDModal_Title             : '警告!',
SENDModal_Yes               : 'はい、問題ありません！ 処理を実行します。',

sidebar_AccountInfo         : 'アカウント情報',
sidebar_AccountAddr         : 'アカウントアドレス',
sidebar_AccountBal          : 'アカウント残高',
sidebar_TokenBal            : 'トークン残高',
sidebar_Equiv               : '同等価値',
sidebar_TransHistory        : 'トランザクション履歴',
sidebar_donation            : 'MyEtherWalletは、無料で、オープンソースのサービスで、皆さまのプライバシーとセキュリティのための全力を尽くしています。寄付が増えることによって、新機能の作成やフィードバックの反映に多くの時間を費やし、よりユーザーの皆さまのご希望に沿ったものを提供することが可能になります。私たちは、たった二人で世界を変えようとしています。どうかお手伝いいただけませんか？',
sidebar_donate              : '寄付する',
sidebar_thanks              : 'ありがとう!!!',
sidebar_DisplayOnTrezor     : 'TREZORでアドレスを表示',
sidebar_DisplayOnLedger     : 'Ledgerでアドレスを表示',

SUCCESS_1                   : '正しいアドレス',
SUCCESS_2                   : 'お財布は正常に解錠されました。',
SUCCESS_3                   : 'トランザクションはブロックチェーン上に展開されましたが、まだ採掘・送出は完了していません。繁盛期には送出に3時間以上かかる場合があります。1) 下のボタンからトランザクションを確認してください。 2) 何時間も待機中だったり、トランザクションが消失した場合は、取引状況ページでトランザクションを置き換えてください。 3) [ETH Gas Station](https://ethgasstation.info/)を利用して、最適なガス価格を確認してください。 4) 後に必要になった時のために、トランザクションハッシュを保存してください。トランザクションハッシュは: ', //'トランザクションが送出されました。 TX Hash',
SUCCESS_4                   : 'お財布は正常に追加されました',
SUCCESS_5                   : 'ファイルが選択されました',
SUCCESS_6                   : '接続に成功しました',
SUCCESS_7                   : 'メッセージの署名が確認されました',

SWAP_rates                  : "現在のレート ",
SWAP_init_1                 : "両替する ",
SWAP_init_2                 : " を ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "両替します！ ", // or "Continue"
SWAP_information            : "あなたの情報 ",
SWAP_send_amt               : "送出総額 ",
SWAP_rec_amt                : "受取総額 ",
SWAP_your_rate              : "両替レート ",
SWAP_rec_add                : "受取アドレス ",
SWAP_start_CTA              : "両替を開始する ",
SWAP_ref_num                : "参照番号 ",
SWAP_time                   : "送出までの残り時間 ",
SWAP_elapsed                : "発注後の経過時間 ", /*Time elapsed since sent*/
SWAP_progress_1             : "注文が開始されました ",
SWAP_progress_2             : "到着を待機しています ", // Waiting for your BTC...
SWAP_progress_3             : "受け取りを確認しました！ ", // ETH Received!
SWAP_progress_4             : "{{orderResult.output.currency}} を送出しています ",
SWAP_progress_5             : "注文完了 ",
SWAP_order_CTA              : "お送りいただきたいのは ", // Please send 1 ETH...
SWAP_unlock                 : "このページから直接ETHまたはトークンを送出するためには、お財布を解錠してください。",

TOKEN_Addr                  : 'トークン契約アドレス',
TOKEN_Symbol                : 'トークンシンボル',
TOKEN_Dec                   : '桁数：',
TOKEN_show                  : '全てのトークンを表示',
TOKEN_hide                  : 'トークンを隠す',

TRANS_advanced              : '+高度な設定：データを追加します',
TRANS_data                  : 'データ',
TRANS_desc                  : 'トークンを送出するには、代わりに「トークン送出」のタブを選択してください。',
TRANS_gas                   : 'ガスリミット',
TRANS_sendInfo              : '21000ガスを使用する標準トランザクションは、0.000441 ETHを消費します。このサービスでは、トランザクション料金を徴収いたしません。',

translate_version           : '0.5',
Translator_Desc             : '日本語翻訳を支援する:',
TranslatorAddr_1            : '0xf991119Eea62Eee1a6fdaA7f621e91A42f325FcE',
TranslatorAddr_2            : '0x4cEE3D48603CbA315Bf8311492e3a2221a95273B',
TranslatorAddr_3            : '',
TranslatorAddr_4            : '',
TranslatorAddr_5            : '',
TranslatorName_1            : '[sekisanchi.eth](https://etherscan.io/address/0xf991119eea62eee1a6fdaa7f621e91a42f325fce)', /* Translator 1: Kazunori Seki / 関一典 */
TranslatorName_2            : '[MaySoMusician](https://etherscan.io/address/0x4cEE3D48603CbA315Bf8311492e3a2221a95273B)', /* Translator 2: MaySoMusician / 迷奏ミュージシャン */
TranslatorName_3            : '', /* Translator 3: */
TranslatorName_4            : '', /* Translator 4: */
TranslatorName_5            : '', /* Translator 5: */

tx_Details                  : 'トランザクション内容の詳細',
tx_foundInPending           : '待機中のトランザクションが見つかりました。',
tx_foundInPending_1         : 'トランザクションが、現在接続中のノードのTXプールの中で見つかりました。',
tx_foundInPending_2         : '現在待機中です（発掘待ち）。',
tx_foundInPending_3         : 'トランザクションの「取り消し」または置き換えができる可能性があります。下でお財布を解錠してください。',
tx_FoundOnChain             : 'トランザクションが見つかりました',
tx_FoundOnChain_1           : 'トランザクションは正常に発掘され、ブロックチェーンに組み込まれました。',
tx_FoundOnChain_2           : '**もし赤い`( ! )`マークや`BAD INSTRUCTION`、あるいは`OUT OF GAS` のエラーメッセージを見つけたら**, トランザクションの送出に失敗したということです。トランザクションの取り消しや置き換えはできません。代わりに、新しくトランザクションを送出してください。"Out of Gas"エラーの場合には、ガスリミットを初めに指定した値の2倍にしてください。',
tx_FoundOnChain_3           : '**何もエラーメッセージが表示されていなければ、トランザクションは正しく送出されました。** ETH/トークンは、送出先に到着しました。もし、ETH/トークンが他のお財布や取引所のウォレットに見つからず、送出から24時間以上経っていたら、[送出先のサービスに連絡](https://kb.myetherwallet.com/diving-deeper/ethereum-list-of-support-and-communities.html)してください。自分のトランザクションのリンクを連絡し、正確に状況を確認してもらってください。',
tx_notFound                 : 'トランザクションが見つかりません',
tx_notFound_1               : 'このトランザクションは、現在接続中のTXプールの中にありませんでした。',
tx_notFound_2               : 'もしたった今トランザクションを送出したばかりであれば、15秒待ってから「取引状況の確認」ボタンをもう一度押してください。',
tx_notFound_3               : '別のTXプールで発掘を待っているままかもしれません。',
tx_notFound_4               : '画面右上のドロップダウンメニューから、別のノード（例: `ETH (Etherscan.io)`・`ETH (Infura.io)`・`ETH (MyEtherWallet)`）を選択し、もう一度確認してください',
tx_Summary                  : '繁盛期（ICO実施中など）は、トランザクションは数時間（数日間ではなく）待機中のままになることがあります。このツールは、こういったトランザクションを検索し、「取り消し」または置き換えを行えるようにするためのものです。**これは通常は不要な操作です。このツールに頼るのは本来好ましいことではなく、TXプールが満杯のときのみ効果を発揮します。[このツールに関しては、こちらを参照してください。](https://kb.myetherwallet.com/transactions/check-status-of-ethereum-transaction.html)**',

TXFEE_Desc                  : 'トランザクション手数料は、トランザクションをブロックへ組み込むためにマイナーに支払われます。`ガスリミット` × `ガス価格`で算出されます。 [GWEI -> ETHの単位変換はこちらからどうぞ](https://vintage.myetherwallet.com/helpers.html)',　/*The TX Fee is paid to miners for including your TX in a block. It is the `gas limit` * `gas price`. [You can convert GWEI -> ETH here](https://vintage.myetherwallet.com/helpers.html)*/

VIEWWALLET_HidePrivKey      : '(隠す)',
VIEWWALLET_ShowPrivKey      : '(表示する)',
VIEWWALLET_Subtitle         : '異なったバージョンの秘密鍵をダウンロードしたり、お財布紙情報（ペーパーウォレット）を再印刷することができます。[Geth/Mistに口座をインポートする](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/)際に必要になります。残高を確認するためには、[etherscan.io](https://etherscan.io/)のようなブロックチェーン・エクスプローラー サービスを使う事をおすすめします。',
VIEWWALLET_Subtitle_Short   : '異なったバージョンの秘密鍵をダウンロードしたり、お財布紙情報（ペーパーウォレット）を再印刷することができます。',
VIEWWALLET_SuccessMsg       : '成功しました! お財布の詳細は以下の通りです。',

WARN_Send_Link              : 'アドレス・ガス・データフィールド・トランザクションタイプ（送出モード）が指定されたリンクを経由してきました。送出前に情報を変更することができます。送出を開始するには、お財布を解錠してください。',

x_CancelReplaceTx           : 'トランザクションの取り消し・置き換え',
x_CancelTx                  : 'トランザクションを取り消す',
x_DigitalBitbox             : 'Digital Bitbox',
x_Secalot                   : 'Secalot',
x_PasswordDesc              : 'このパスワードで秘密鍵を**暗号化**します。新しい鍵を作るための元種（seed）ではありません。**お財布を解錠する際に、このパスワードと（暗号化された）秘密鍵が必要になります。**',
x_ReadMore                  : '詳細',
x_ReplaceTx                 : 'トランザクションを置き換える',
x_TransHash                 : 'トランザクションハッシュ',
x_TXFee                     : 'Tx手数料',
x_TxHash                    : 'Txハッシュ',
x_Access                    : 'アクセス',
x_AddessDesc                : 'お財布のアドレスとは、`アカウント番号`や`公開鍵`とも呼ばれ、他の人と共有してEtherやトークンを送ってもらうためのものです。カラフルなアドレスアイコンがあるでしょう。自分のお財布紙情報（ペーパーウォレット）や、お財布アドレスを入力する際に、同じアイコンであることを確認してください。',
x_Address                   : 'あなたのアドレス',
x_Cancel                    : '取り消す',
x_CSV                       : 'CSVファイル（未暗号化）',
x_Download                  : 'ダウンロード',
x_Json                      : 'JSONファイル（未暗号化）',
x_JsonDesc                  : 'これはパスワードが不要な、暗号化されていないJSON形式の秘密鍵です。これを持っていれば、誰でもパスワードを使わずにあなたのお財布とEtherを操作できます。',
x_Keystore                  : 'Keystoreファイル（UTC / JSON · 推奨 · 暗号化済み）',
x_Keystore2                 : 'Keystoreファイル（UTC / JSON）',
x_KeystoreDesc              : 'このKeystoreファイルは、Mistで使用されている形式と同じものであり、後で簡単にインポートすることができます。ダウンロードしてバックアップするのにおすすめのファイルです。',
x_Ledger                    : 'Ledger Wallet',
x_MetaMask                  : 'MetaMask / Mist',
x_Mnemonic                  : 'Mnemonic（ニーモニック）フレーズ',
x_ParityPhrase              : 'Parity（パリティ）フレーズ',
x_Password                  : 'パスワード',
x_Print                     : 'お財布紙情報（ペーパーウォレット）を印刷',
x_PrintDesc                 : 'アドバイス: 今すぐ印刷できない場合でも、「印刷」をクリックすれば、後で印刷するためのPDFファイルを保存できます。印刷後にコンピューターから削除するのを忘れずに！',
x_PrintShort                : '印刷',
x_PrivKey                   : '秘密鍵（未暗号化）',
x_PrivKey2                  : '秘密鍵',
x_PrivKeyDesc               : 'これは暗号化されていない秘密鍵であり、パスワードが必要ありません。万が一、他の人がこの暗号化されていない秘密鍵を知ってしまった場合、あなたのお財布をパスワードなしで操作できてしまう可能性があります。そのため、通常は暗号化された秘密鍵の利用をおすすめします。',
x_Save                      : '保存する',
x_Trezor                    : 'TREZOR',
x_TXT                       : 'TXTファイル（未暗号化）',
x_Wallet                    : 'お財布',

HELP_0_Title                : '0) I\'m new. What do I do?',
HELP_0_Desc_1               : 'MyEtherWallet gives you the ability to generate new wallets so you can store your Ether yourself, not on an exchange. This process happens entirely on your computer, not our servers. Therefore, when you generate a new wallet, **you are responsible for safely backing it up**.',
HELP_0_Desc_2               : 'Create a new wallet.',
HELP_0_Desc_3               : 'Back the wallet up.',
HELP_0_Desc_4               : 'Verify you have access to this new wallet and have correctly saved all necessary information.',
HELP_0_Desc_5               : 'Transfer Ether to this new wallet.',
HELP_1_Title                : '1) How do I create a new wallet?',
HELP_1_Desc_1               : 'Go to the "Generate Wallet" page.',
HELP_1_Desc_2               : 'Go to the "Add Wallet" page & select "Generate New Wallet"',
HELP_1_Desc_3               : 'Enter a strong password. If you think you may forget it, save it somewhere safe. You will need this password to send transactions.',
HELP_1_Desc_4               : 'Click "GENERATE".',
HELP_1_Desc_5               : 'Your wallet has now been generated.',
HELP_2a_Desc_1              : 'You should always back up your wallet externally and in multiple physical locations - like on a USB drive and/or a piece of paper.',
HELP_2a_Desc_2              : 'Save the address. You can keep it to yourself or share it with others. That way, others can transfer ether to you.',
HELP_2a_Desc_3              : 'Save versions of the private key. Do not share it with anyone else. Your private key is necessary when you want to access your Ether to send it! There are 3 types of private keys:',
HELP_2a_Desc_4              : 'Place your address, versions of the private key, and the PDF version of your paper wallet in a folder. Save this on your computer and a USB drive.',
HELP_2a_Desc_5              : 'Print the wallet if you have a printer. Otherwise, write down your private key and address on a piece of paper. Store this as a secure location, separate from your computer and the USB drive.',
HELP_2a_Desc_6              : 'Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood).',
HELP_2a_Title               : 'お財布の保管やバックアップの方法は？',
HELP_2b_Title               : '2b) How do I safely / offline / cold storage with MyEtherWallet?',
HELP_2b_Desc_1              : 'Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).',
HELP_2b_Desc_2              : 'Click on `etherwallet-vX.X.X.X.zip`.',
HELP_2b_Desc_3              : 'Move zip to an airgapped computer.',
HELP_2b_Desc_4              : 'Unzip it and double-click `index.html`.',
HELP_2b_Desc_5              : 'Generate a wallet with a strong password.',
HELP_2b_Desc_6              : 'Save the address. Save versions of the private key. Save the password if you might not remember it forever.',
HELP_2b_Desc_7              : 'Store these papers / USBs in multiple physically separate locations.',
HELP_2b_Desc_8              : 'Go to the "View Wallet Info" page and type in your private key / password to ensure they are correct and access your wallet. Check that the address you wrote down is the same.',
HELP_3_Title                : '3) How do I verify I have access to my new wallet?',
HELP_3_Desc_1               : '**Before you send any Ether to your new wallet**, you should ensure you have access to it.',
HELP_3_Desc_2               : 'Navigate to the "View Wallet Info" page.',
HELP_3_Desc_3               : 'Navigate to the MyEtherWallet.com "View Wallet Info" page.',
HELP_3_Desc_4               : 'Select your wallet file -or- your private key and unlock your wallet.',
HELP_3_Desc_5               : 'If the wallet is encrypted, a text box will automatically appear. Enter the password.',
HELP_3_Desc_6               : 'Click the "Unlock Wallet" button.',
HELP_3_Desc_7               : 'Your wallet information should show up. Find your account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet.',
HELP_3_Desc_8               : 'If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly.',
HELP_4_Title                : '4) How do I send Ether from one wallet to another?',
HELP_4_Desc_1               : 'If you plan to move a large amount of ether, you should test sending a small amount to your wallet first to ensure everything goes as planned.',
HELP_4_Desc_2               : 'Navigate to the "Ether送出 トークン送出" page.',
HELP_4_Desc_3               : 'Select your wallet file -or- your private key and unlock your wallet.',
HELP_4_Desc_4               : 'If the wallet is encrypted, a text box will automatically appear. Enter the password.',
HELP_4_Desc_5               : 'Click the "Unlock Wallet" button.',
HELP_4_Desc_6               : 'Enter the address you would like to send to in the "To Address:" field.',
HELP_4_Desc_7               : 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance.',
HELP_4_Desc_9               : 'Click "Generate Transaction".',
HELP_4_Desc_10              : 'A couple more fields will appear. This is your browser generating the transaction.',
HELP_4_Desc_11              : 'Click the blue "Send Transaction" button below that.',
HELP_4_Desc_12              : 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button.',
HELP_4_Desc_13              : 'The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain.',
HELP_4CX_Title              : '4) How do I send Ether using MyEtherWallet CX?',
HELP_4CX_Desc_1             : 'First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Ether送出 トークン送出" page.',
HELP_4CX_Desc_2             : 'QuickSend:',
HELP_4CX_Desc_3             : 'Click the Chrome Extension Icon.',
HELP_4CX_Desc_4             : 'Click the "QuickSend" button.',
HELP_4CX_Desc_5             : 'Select the wallet you wish to send from.',
HELP_4CX_Desc_6             : 'Enter the address you would like to send to in the "To Address:" field.',
HELP_4CX_Desc_7             : 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance.',
HELP_4CX_Desc_8             : 'Click "Send Transaction".',
HELP_4CX_Desc_9             : 'Verify the address and the amount you are sending is correct.',
HELP_4CX_Desc_10            : 'Enter the password for that wallet.',
HELP_4CX_Desc_11            : 'Click "Send Transaction."',
HELP_4CX_Desc_12            : 'Using "Ether送出 トークン送出" Page',
HELP_5_Title                : '5) How do I run MyEtherWallet.com offline/locally?',
HELP_5_Desc_1               : 'You can run MyEtherWallet.com on your computer instead of from the GitHub servers. You can generate a wallet completely offline and send transactions from the "Offline Transaction" page.',
HELP_5_Desc_7               : 'MyEtherWallet.com is now running entirely on your computer.',
HELP_5_Desc_8               : 'In case you are not familiar, you need to keep the entire folder in order to run the website, not just `index.html`. Don\'t touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact.',
HELP_5_Desc_9               : 'As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo.',
HELP_5CX_Title              : '5) How can I install this extension from the repo instead of the Chrome Store?',
HELP_5CX_Desc_2             : 'Click on `chrome-extension-vX.X.X.X.zip` and unzip it.',
HELP_5CX_Desc_3             : 'Go to Google Chrome and find you settings (in the menu in the upper right).',
HELP_5CX_Desc_4             : 'Click "Extensions" on the left.',
HELP_5CX_Desc_5             : 'Check the "Developer Mode" button at the top of that page.',
HELP_5CX_Desc_6             : 'Click the "Load unpacked extension..." button.',
HELP_5CX_Desc_7             : 'Navigate to the now-unzipped folder that you downloaded earlier. Click "select".',
HELP_5CX_Desc_8             : 'The extension should now show up in your extensions and in your Chrome Extension bar.',
HELP_7_Title                : '7) How do I send Tokens & add custom tokens?',
HELP_7_Desc_0               : '[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token.',
HELP_7_Desc_1               : 'Navigate to the "Ether送出 トークン送出" page.',
HELP_7_Desc_2               : 'Unlock your wallet.',
HELP_7_Desc_3               : 'Enter the address you would like to send to in the "To Address:" field.',
HELP_7_Desc_4               : 'Enter the amount you would like to send.',
HELP_7_Desc_5               : 'Select which token you would like to send.',
HELP_7_Desc_6               : 'If you do not see the token listed:',
HELP_7_Desc_7               : 'Click "Custom".',
HELP_7_Desc_8               : 'Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist.',
HELP_7_Desc_9               : 'Click "Save".',
HELP_7_Desc_10              : 'You can now send that token as well as see it\'s balance in the sidebar.',
HELP_7_Desc_11              : 'Click "Generate Transaction".',
HELP_7_Desc_12              : 'A couple more fields will appear. This is your browser generating the transaction.',
HELP_7_Desc_13              : 'Click the blue "Send Transaction" button below that.',
HELP_7_Desc_14              : 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button.',
HELP_7_Desc_15              : 'The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain.',
HELP_8_Title                : '8) What happens if your site goes down?',
HELP_8_Desc_1               : 'MyEtherWallet is not a web wallet. You don\'t have a login and nothing ever gets saved to our servers. It is simply an interface that allows you interact with the blockchain.',
HELP_8_Desc_2               : 'If MyEtherWallet.com goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn\'t have to "get" your Ether out of MyEtherWallet because it\'s not in MyEtherWallet. It\'s in whatever wallet your generated via our site.',
HELP_8_Desc_3               : 'You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #12 below.',
HELP_8_Desc_4               : 'In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren\'t storing any information. If we do take the domain down, it still is, and always will be, publicly available at [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). You can download the ZIP there and run it locally.',
HELP_8CX_Title              : '8) What happens if MyEtherWallet CX disappears?',
HELP_8CX_Desc_1             : 'First, all data is saved on your computer, not our servers. I know it can be confusing, but when you look at the Chrome Extension, you are NOT looking at stuff saved on our servers somewhere - it\'s all saved on your own computer.',
HELP_8CX_Desc_2             : 'That said, it is **very important** that you back up all your information for any new wallets generated with MyEtherWallet CX. That way if anything happens to MyEtherWallet CX or your computer, you still have all the information necessary to access your Ether. See the #2a for how to back up your wallets.',
HELP_8CX_Desc_3             : 'If for some reason MyEtherWallet CX disappears from the Chrome Store, you can find the source on Github and load it manually. See #5 above.',
HELP_9_Title                : '9) Is the "Ether送出 トークン送出" page offline?',
HELP_9_Desc_1               : 'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times.',
HELP_10_Title               : '10) How do I make an offline transaction?',
HELP_10_Desc_1              : 'Navigate to the "Offline Transaction" page via your online computer.',
HELP_10_Desc_2              : 'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price.',
HELP_10_Desc_3              : 'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send.',
HELP_10_Desc_4              : 'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1.',
HELP_10_Desc_5              : 'Enter the "NONCE" as it was displayed to you on your online computer in step #1.',
HELP_10_Desc_6              : 'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you.',
HELP_10_Desc_7              : 'If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format.',
HELP_10_Desc_8              : 'Select your wallet file -or- your private key and unlock your wallet.',
HELP_10_Desc_9              : 'Press the "GENERATE SIGNED TRANSACTION" button.',
HELP_10_Desc_10             : 'The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer.',
HELP_10_Desc_11             : 'On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction.',
HELP_12_Title               : '12) How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist?',
HELP_12_Desc_1              : 'Using an Geth/Mist JSON file from MyEtherWallet v2+....',
HELP_12_Desc_2              : 'Go to the "View Wallet Info" page.',
HELP_12_Desc_3              : 'Unlock your wallet using your **encrypted** private key or JSON file.',
HELP_12_Desc_4              : 'Go to the "My Wallets" page.',
HELP_12_Desc_5              : 'Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet.',
HELP_12_Desc_6              : 'Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file.',
HELP_12_Desc_7              : 'Open the Ethereum Wallet application.',
HELP_12_Desc_8              : 'In the menu bar, go "Accounts" -> "Backup" -> "Accounts"',
HELP_12_Desc_9              : 'This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder.',
HELP_12_Desc_10             : 'Your account should show up immediately under "Accounts."',
HELP_12_Desc_11             : 'Using your unencrypted private key...',
HELP_12_Desc_12             : 'If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page.',
HELP_12_Desc_13             : 'Select your wallet file -or- enter/paste your private key to unlock your wallet.',
HELP_12_Desc_14             : 'Copy Your Private Key (unencrypted).',
HELP_12_Desc_15             : 'If you are on a Mac:',
HELP_12_Desc_15b            : 'If you are on a PC:',
HELP_12_Desc_16             : 'Open Text Edit and paste this private key.',
HELP_12_Desc_17             : 'Go to the menu bar and click "Format" -> "Make Plain Text".',
HELP_12_Desc_18             : 'Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog.',
HELP_12_Desc_19             : 'Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt`',
HELP_12_Desc_20             : 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it.',
HELP_12_Desc_21             : 'After successful import, delete `nothing_special_delete_me.txt`',
HELP_12_Desc_22             : 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts".',
HELP_12_Desc_23             : 'Open Notepad & paste the private key',
HELP_12_Desc_24             : 'Save the file as `nothing_special_delete_me.txt` at `C:`',
HELP_12_Desc_25             : 'Run the command, `geth account import C:\\nothing_special_delete_me.txt`',
HELP_12_Desc_26             : 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it.',
HELP_12_Desc_27             : 'After successful import, delete `nothing_special_delete_me.txt`',
HELP_12_Desc_28             : 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts".',
HELP_13_Title               : '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean?',
HELP_13_Desc_1              : 'This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction.',
HELP_14_Title               : '14) Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn\'t do this. Is the random number generation for MyEtherWallet safe?',
HELP_14_Desc_1              : 'While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren\'t unsafe, it\'s just that we (and tons of other crypto experiments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here\'s a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto).',
HELP_15_Title               : '15) Why hasn\'t the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan)',
HELP_15_Desc_1              : 'Accounts will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it.',
HELP_16_Title               : '16) How do I check the balance of my account?',
HELP_16_Desc_1              : 'You can use a blockchain explorer like [etherscan.io](https://etherscan.io/). Paste your address into the search bar and it will pull up your address and transaction history. For example, here\'s what our [donation account](https://etherscan.io/address/0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D) looks like on etherscan.io',
HELP_17_Title               : '17) Why isn\'t my balance showing up when I unlock my wallet?',
HELP_17_Desc_1              : 'This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io',
HELP_18_Title               : '18) Where is my geth wallet file?',
HELP_19_Title               : '19) Where is my Mist wallet file?',
HELP_19_Desc_1              : 'Mist files are typically found in the file locations above, but it\'s much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored.',
HELP_20_Title               : '20) Where is my pre-sale wallet file?',
HELP_20_Desc_1              : 'Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale.',
HELP_21_Title               : '21) Couldn\'t everybody put in random private keys, look for a balance, and send to their own address?',
HELP_21_Desc_1              : 'Short version: yes, but finding an account with a balance would take longer than the universe...so...no.',
HELP_21_Desc_2              : 'Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts.',
HELP_21_Desc_3              : 'In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems.',
HELP_21_Desc_4              : 'Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password.',
HELP_21_Desc_5              : 'And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match.',
HELP_21_Desc_6              : 'If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion.',
HELP_21_Desc_7              : '[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space.',
HELP_21_Desc_8              : 'Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person\'s brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that\'s a separate issue that can wait for another day.',
HELP_Warning                : 'If you created a wallet -or- downloaded the repo before **Dec. 31st, 2015**, please check your wallets &amp; download a new version of the repo. Click for details.',
HELP_Desc                   : 'Do you see something missing? Have another question? [Get in touch with us](mailto:support@myetherwallet.com), and we will not only answer your question, we will update this page to be more useful to people in the future!',
HELP_Remind_Title           : 'Some reminders',
HELP_Remind_Desc_1          : '**Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development.** While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the remote possibility that something unexpected happens that causes your ETH to be lost. Please do not invest more than you are willing to lose, and please be careful. If something were to happen, we are sorry, but **we are not responsible for the lost Ether**.',
HELP_Remind_Desc_2          : 'MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account or give us your Ether to hold onto. All data never leaves your computer/your browser. We make it easy for you to create, save, and access your information and interact with the blockchain.',
HELP_Remind_Desc_3          : 'If you do not save your private key & password, there is no way to recover access to your wallet or the funds it holds.  Back them up in multiple physical locations &ndash; not just on your computer!',
HELP_SecCX_Title            : 'セキュリティ - MyEtherWallet CX',
HELP_SecCX_Desc_1           : 'Where is this extension saving my information?',
HELP_SecCX_Desc_2           : 'The information you store in this Chrome Extension is saved via [chrome.storage](http://chrome.storage/). - this is the same place your passwords are saved when you save your password in Chrome.',
HELP_SecCX_Desc_3           : 'What information is saved?',
HELP_SecCX_Desc_4           : 'The address, nickname, private key is stored in chrome.storage. The private key is encrypted using the password you set when you added the wallet. The nickname and wallet address is not encrypted.',
HELP_SecCX_Desc_5           : 'Why aren\'t the nickname and wallet address encrypted?',
HELP_SecCX_Desc_6           : 'If we were to encrypt these items, you would need to enter a password each time you wanted to view your account balance or view the nicknames. If this concerns you, we recommend you use MyEtherWallet.com instead of this Chrome Extension.',
HELP_Sec_Title              : 'セキュリティ',
HELP_Sec_Desc_1             : 'If one of your first questions is "Why should I trust these people?", that is a good thing. Hopefully the following will help ease your fears.',
HELP_Sec_Desc_2             : 'We\'ve been up and running since August 2015. If you search for ["myetherwallet" on reddit](https://www.reddit.com/search?q=myetherwallet), you can see numerous people who use us with great success.',
HELP_Sec_Desc_3             : 'We aren\'t going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" pages are completely client-side. That means that all the code is executed on ** your computer** and it is never saved and transmitted anywhere.',
HELP_Sec_Desc_4             : 'Check the URL -- This site is being served through GitHub and you can see the source code here: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) to [https://vintage.myetherwallet.com](https://vintage.myetherwallet.com).',
HELP_Sec_Desc_5             : 'For generating wallets, you can download the [source code and run it locally](https://github.com/kvhnuke/etherwallet/releases/latest). See #5 above.',
HELP_Sec_Desc_6             : 'Generate a test wallet and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred.',
HELP_Sec_Desc_8             : 'If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks!',
HELP_FAQ_Title              : 'More Helpful Answers to Frequent Questions',
HELP_Contact_Title          : 'Ways to Get in Touch',

PHISHING_Warning_1              :  'このアドレスにフラグが付けられました: ',
PHISHING_Warning_2              :  'フィッシングの可能性があるため、このアドレスにフラグが付けられました。送出先が正しいアドレスかどうか確認してください。',
APPLE_Mob_Notice_Head           :  "iPhoneやiPadをご利用でしょうか。",
APPLE_Mob_Notice_Body_1         :  "Appleのストレージ制限により、iPhoneやiPadなどの端末でのお財布生成には対応しておりません。",
APPLE_Mob_Notice_Body_2         :  'お手数おかけいたしますが、ノートPCやデスクトップPCでご利用ください。',
APPLE_Mob_Notice_Understand     :  'わかりました。'
};

module.exports = ja;
