// Turkish
'use strict';
var tr = function() {}
tr.code = 'tr';
tr.data = {

GEN_Help_21               : 'How do I save/backup my wallet? ',

/* New Generics */
TX_CancelReplace           : 'Cancel or Replace Transaction',
TX_Cancel                  : 'Cancel Transaction',
PW_Desc              : 'This password * encrypts * your private key. This does not act as a seed to generate your keys. **You will need this password + your private key to unlock your wallet.**',
x_ReadMore                  : 'Read More',
TX_Replace                 : 'Replace Transaction',
x_TransHash                 : 'Transaction Hash',
TX_TXFee                     : 'TX Fee',
TX_Hash                    : 'TX Hash',

/* Check TX Status */
WALL_Create             : 'Check TX Status',
WALL_View_Short                  : 'TX Status',
TX_Details                  : 'Transaction Details',
VIEWTX_Desc                  : 'During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and "cancel" / replace these TXs. ** This is not typically something you can do. It should not be relied upon & will only work when the TX Pools are full. [Please, read about this tool here.](https://myetherwallet.groovehq.com/knowledge_base/topics/how-can-i-check-on-the-status-of-my-transaction-can-i-cancel-override-overwrite-replace-or-do-anything-once-a-transaction-has-been-sent)**',
VIEWTX_NotFound                 : 'Transaction Not Found',
VIEWTX_NotFound_1               : 'This TX cannot be found in the TX Pool of the node you are connected to.',
VIEWTX_NotFound_2               : 'If you just sent the transaction, please wait 15 seconds and press the "Check TX Status" button again. ',
VIEWTX_NotFound_3               : 'It could still be in the TX Pool of a different node, waiting to be mined.',
VIEWTX_NotFound_4               : 'Please use the dropdown in the top-right & select a different ETH node (e.g. `ETH (Etherscan.io)` or `ETH (Infura.io)` or `ETH (MyEtherWallet)`) and check again.',
VIEWTX_Found           : 'Pending Transaction Found',
VIEWTX_Found_1         : 'Your transaction was located in the TX Pool of the node you are connected to. ',
VIEWTX_Found_2         : 'It is currently pending (waiting to be mined). ',
VIEWTX_Found_3         : 'There is a chance you can "cancel" or replace this transaction. Unlock your wallet below.',
VIEWTX_FoundOnChain             : 'Transaction Found',
VIEWTX_FoundOnChain_1           : 'Your transaction was successfully mined and is on the blockchain.',
VIEWTX_FoundOnChain_2           : '**If you see a red `( ! )`, a `BAD INSTRUCTION` or `OUT OF GAS` error message**, it means that the transaction was not successfully *sent*. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.',
VIEWTX_FoundOnChain_3           : '**If you do not see any errors, your transaction was successfully sent.** Your ETH or Tokens are where you sent them. If you cannot see this ETH or Tokens credited in your other wallet / exchange account, and it has been 24+ hours since you sent, please [contact that service](https://myetherwallet.groovehq.com/knowledge_base/topics/i-have-a-question-but-its-not-about-myetherwallet-dot-com-what-do-i-do). Send them the *link* to your transaction and ask them, nicely, to look into your situation.',

/* Gen Wallet Updates */
GEN_Help_1                  : 'Use your',
GEN_Help_2                  : 'to access your account.',
GEN_Help_3                  : 'Your device * is * your wallet.',
GEN_Help_4                  : 'Guides & FAQ',
GEN_Help_5                  : 'How to Create a Wallet',
GEN_Help_6                  : 'Getting Started',
GEN_Help_7                  : 'Keep it safe · Make a backup · Don\'t share it with anyone · Don\'t lose it · It cannot be recovered if you lose it.',
GEN_Help_8                  : 'Not Downloading a File? ',
GEN_Help_9                  : 'Try using Google Chrome ',
GEN_Help_10                 : 'Right click & save file as. Filename: ',
GEN_Help_11                 : 'Don\'t open this file on your computer ',
GEN_Help_12                 : 'Use it to unlock your wallet via MyEtherWallet (or Mist, Geth, Parity and other wallet clients.) ',
GEN_Help_13                 : 'How to Back Up Your Keystore File ',
GEN_Help_14                 : 'What are these Different Formats? ',
GEN_Help_15                 : 'Preventing loss &amp; theft of your funds.',
GEN_Help_16                 : 'What are these Different Formats?',
GEN_Help_17                 : 'Why Should I?',
GEN_Help_18                 : 'To have a secondary backup.',
GEN_Help_19                 : 'In case you ever forget your password.',
GEN_Help_20                 : 'Cold Storage',
GEN_ConfButton              : 'I understand. Continue.',
GEN_Label_5                 : 'Save Your Private Key ',
GEN_Unlock                  : 'Unlock your Wallet to See Your Address',
x_GasPriceDesc              : 'Gas Price is the amount you pay per unit of gas. `TX fee = gas price * gas limit` & is paid to miners for including your TX in a block. Higher the gas price = faster transaction, but more expensive. Default is `21 GWEI`.',
x_GasLimitDesc              : 'Gas limit is the amount of gas to send with your TX. `TX fee` = gas price * gas limit & is paid to miners for including your TX in a block. Increasing this number will not get your TX mined faster. Sending ETH = `21000`. Sending Tokens = ~`200000`.',
x_NonceDesc                  : 'The nonce is the number of transactions sent from a given address. It ensures transactions are sent in order & not more than once.',
TX_TXFeeDesc                  : 'The TX Fee is paid to miners for including your TX in a block. Is is the `gas limit` * `gas price`. [You can convert GWEI -> ETH here](https://www.myetherwallet.com/helpers.html)',




/* Navigation*/
WALL_Add               : 'Cüzdan ekle ',
BULK_Generate            : 'Birkaç Cüzdan oluştur ',
x_Contact                 : 'Iletişime geç ',
CONTRACT_Title               : 'Sözleşmeler ',
CONTRACT_Deploy          : 'Sözleşme kur ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Cüzdan oluştur ',
x_Help                    : 'Yardim et ',
CONTRACT_Interact        : 'Interact with Contract ',
CONTRACT_Multisig                : 'Multisig ',
WALL_walletViewCX               : 'Cüzdanim ',
x_Offline                 : 'Offline gönder ',
TX_Send_Title             : 'Ether ve Tokens gönder ',
TX_Send_ShortTokens              : 'Tokens gönder ',
MSG_Sign                 : 'Mesajı Doğrula ',
SWAP_Title                    : 'Çevir ',
WALL_View              : 'Cüzdan bilgilerni göster ',
WALL_Your             : 'Cüzdanin ',

/* General */
x_Access                    : 'Erişim ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Bu "hesap numarası" veya "genel anahtar" dir. Birisi ether göndermek istiyorsa bu adresi kullanmasi gerekir. Ikon adresini kontrol etmek kolay bir yoldur ',
ADDR_                   : 'Adresin ',
x_Cancel                    : 'Iptal et ',
x_CSV                       : 'CSV dosya (şifrelenmemis) ',
x_Download                  : 'Indir ',
x_Json                      : 'JSON dosya (şifrelenmemis) ',
x_JsonDesc                  : 'Bu özel anahtarinin sifresiz, JSON formatidir. Demekki parolasiz cüzdanini acabilirsin. Özel anahatarina sahip olan herkez sifresiz cüzdani aca bilir. ',
x_Keystore                  : 'Keystore dosya (UTC / JSON · Tavsiye edilen · şifrelenmiş) ',
x_Keystore2                 : 'Keystore dosya (UTC / JSON) ',
x_KeystoreDesc              : 'This Keystore file matches the format used by Mist so you can easily import it in the future. It is the recommended file to download and back up. ',
x_Mnemonic                  : 'Mnemonic Phrase ',
x_ParityPhrase              : 'Parity Phrase ',
PW_                  : 'Parola ',
x_Print                     : 'Cüzdanin kağıt versiyonunu yazdir ',
x_PrintDesc                 : 'ProTavsiye: Eğer yazıcınız olmasa bile, "Yazdır" seçeneğini tıklayın ve PDF dosyası olarak kaydedin! ',
x_PrintShort                : 'Yazdir ',
x_PrivKey                   : 'Özel anahtar (şifrelenmemis) ',
x_PrivKey2                  : 'Özel anahtar ',
x_PrivKeyDesc               : 'Bu özel anahtarinin şifrelenmemiş metin sürümüdür. Birisi şifrelenmemiş özel anahtarı bulduysa, şifre olmadan cüzdani acabilir. Bu nedenle, şifrelenmiş sürümlerini genellikle tavsiye edilir. ',
x_Save                      : 'Indir ',
x_TXT                       : 'TXT dosya (şifrelenmemis) ',
WALL_                    : 'Cüzdan ',

/* Header */
WARN_01               : 'Cüzdani acmadan veya yeni bir cüzdan olusturmadan önce her zaman URL\'yi gözden geçirin. Phishing sitelerinden dikkat! ',
WARN_04                : 'Burda kaydetdigin tüm cüzdanlari **yedeklediginden** emin ol. Make sure you have **external backups** of any wallets you store here. Many things could happen that would cause you to lose the data in this Chrome Extension, including uninstalling and reinstalling the extension. This extension is a way to easily access your wallets, **not** a way to back them up. ',
FOOTER_Tagline                 : 'Acik kaynak JavaScript Client-Side Ether cüzdani ',
CX_Tagline                  : 'Acik kaynak JavaScript Client-Side Ether cüzdani Chrome Extension ',

/* Footer */
FOOTER_1                    : 'Acik kaynak, javascript Client-Side Ethererum cüzdani ve Ether islemleri ',
FOOTER_1b                   : 'tarafından yaratıldı ',
FOOTER_2                    : 'Bağışlar büyük takdirle kabuledilir: ',
FOOTER_3                    : 'Client-side cüzdan olusturma ',
FOOTER_4                    : 'Disclaimer ',

/* Sidebar */
ACCOUNT_Info         : 'Hesap bilgiler ',
ACCOUNT_Address         : 'Hesap adres ',
ACCOUNT_Balance          : 'Bakiye ',
TOKEN_Balance            : 'Token bakiye ',
SIDEBAR_Equiv               : 'Eşdeğer Değerler ', /* Belki sadece Esdeger yeter */
TX_History        : 'Işlem geçmişi ',
SIDEBAR_donation            : 'MyEtherWallet gizlilik ve güvenlike adanmış ücretsiz ve açık kaynak kodlu bir hizmettir. Ne kadar cok bagis edilirse o kadar cok yeni özellik programlamaya, görüşlerinizi işlemeye yatitim yapabiliriz. Biz sadece dünyayı değiştirmek isteyen iki kişiyiz. Bize yardım edermisin? ',
SIDEBAR_donate              : 'Bağışta bulun ',
SIDEBAR_thanks              : 'TEŞEKKÜRLER!!! ',

/* Decrypt Panel */
DECRYPT_Access              : 'Cüzdanını nasıl acmak istersin? ',
DECRYPT_Title               : 'Özel anahtarinin formatini sec: ',
WALL_Select              : 'Bir cüzdan sec: ',

/* Add Wallet */
DECRYPT_Label_1                 : 'Ne yapmak istiyorsunuz? ',
WALL_GenerateNew                 : 'Yeni cüzdan olusturun ',
DECRYPT_Radio_2                 : 'Cüzdan dosyayi sec (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : 'Cüzdan dosyayi sec ',
DECRYPT_Radio_2_short           : 'CÜZDAN DOSYAYI SEC... ',
DECRYPT_Radio_3                 : 'Özel anahatarini Yaspistir/Yaz ',
ACCOUNT_AddWatch                 : 'Izlenecek hesap adresi ekle ', /* maybe another word for watch/izlencek --> Takip edilecek? */
MNEM_Enter                 : 'Paste/Type Your Mnemonic ',
MNEM_Enter_Path            : 'Select HD derivation path ',
MNEM_Enter_PathCustom      : '(Custom) ',
DECRYPT_Label_2                 : 'Bir takma isim oluştur ',
DECRYPT_Label_3                 : 'Cüzdan şifrelidir. Parolayi yaz:  ',
DECRYPT_Label_4                 : 'Izlenecek hesap adresi ekle ',
WARN_03               : 'Özel anahtar yazmadan cüzdan sekmesinde "izlemek" için herhangi bir hesap ekleyebilirsin. Bu demek ** degilki ** cüzdani acabilirsin, veya ondan Ether aktarabilirsin. ',
DECRYPT_Label_5                 : 'Adresi ekle ',
WALL_Unlock                 : 'Cüzdani ac ',
WALL_Unlock_Short           : 'Ac ',
ACCOUNT_Add                 : 'Hesap ekle ',

/* Generate Wallets */
GEN_desc                    : 'Birden birkac cüzdan olusturmak istiryorsan burdan yapabilirsin ',
PW_Enter                 : 'Güçlü bir şifre sec (en az 9 sembol) ',
PW_Enter           : 'Bunu kaydetmeyi unutma! ',
GEN_SuccessMsg              : 'Başarı! Cüzdan oluşturuldu. ',
x_Keystore_Save                 : 'Keystore dosyayi veya özel anahtranini kaydet. Yukarıdaki şifreni unutma. ',
ADDR_Save                 : 'Adresini kaydet. ',
GEN_Label_4                 : 'Isteye bagli: Cüzdanin kağıt versiyonunu yazdir veya QR code versiyonunu sakla.',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Oluşturulacak cüzdan sayısı ',
BULK_Label_2                : 'Cüzdanlari olustur ',
BULK_SuccessMsg             : 'Başarı! Cüzdanlarin olusturuldu. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'Bu Adrese gönder ',
x_Amount                 : 'Gönderilecek miktar ',
x_Amount_short           : 'Miktar ',
TOKEN_AddCustom                 : 'Kullaniciya özel ', /*maybe another word here too */
x_GasLimit                    : 'Gas ',
TX_Send_All          : 'Tüm dengeyi gönder ',
TX_Generate               : 'Generate Transaction ',
TX_Unsigned                    : 'İşlem oluştur ikili sistem ', /* add Binär */
TX_Signed                 : 'Imzali İşlem ',
TX_Send_Short                  : 'Islemi gönder ',
SENDModal_Title             : 'Uyarı! ',
TOKEN_AddCustom                 : 'Özel Token Ekle ',

/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'şu an ',
SENDModal_Content_2         : 'bu adresse ',
SENDModal_Content_3         : 'Göndermek üzeresin. Emin misin? ',
SENDModal_No                : 'Hayir, cikar beni burdan! ',
SENDModal_Yes               : 'Evet, eminim! Islemi tamamla. ',

/* Tokens */
ADDR_Short                  : 'Adres ',
TOKEN_Symbol                : 'Token symbolu ',
TOKEN_Dec                   : 'Ondalık ',
TOKEN_show                  : 'Tüm tokenleri göster ',
TOKEN_hide                  : 'Tokenleri gizle ',

/* Send Transaction */
TX_desc                  : 'Eğer Token göndermek istiyorsan, bunun yerine "Token Gönder" sayfasını kullan. ',
TX_warning               : '"Yalnızca ETH" ya da "Yalnızca ETC" fonksiyonu kullanıyorsan, bir sözleşme yoluyla gönderiyorsun. Bazı servisler bu işlemleri kabul etmekde sorunları var. Daha fazla oku. ',
SEND_Advanced              : '+Gelişmiş: Veri ekle ',
x_Data                  : 'Veri ',
x_GasLimit                   : 'Gas Limiti ',
TX_Send_ShortInfo              : '21000 gaz kullanan standart bir islem 0.000441 ETH ile mal olur. Biz hizli bir sekilde mayinlanmasi için, 0.000000021 ETH\'dan biraz daha yüksek gaz fiyatini kullaniyoruz. Biz herhangi bir islem ücreti almiyoruz. ',

/* Send Transaction Modals */
TRANSModal_Title            : '"Yalnızca ETH" and "Yalnızca ETC" islemler ',
TRANSModal_Content_0        : 'Farklı işlemler ve farklı hizmetleri hakkında bir not: ',
TRANSModal_Content_1        : '**ETH (Standart islem): ** Bu standart bir islem baslatir bir hesapten direkt baska bir hesapa. Standart gas 21000\'dir. Bu islemlen gönderileren islem ETC zincirinde\'de yer bulabilir. ',
TRANSModal_Content_2        : '**Only ETH: ** This sends via [Timon Rapp\'s replay protection contract (as recommended by VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) so that you only send on the **ETH** chain. ',
TRANSModal_Content_3        : '**Only ETC: ** This sends via [Timon Rapp\'s replay protection contract (as recommended by VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) so that you only send on the **ETC** chain. ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift: ** Only send via Standard Transaction. If you send via the "Only" contracts, you will need to reach out to their support staff to manually add your balance or refund you. [You can try Shapeshift\'s "split" tool as well.](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex:** Bilinen sorun yok, ikisinden birini sec ', /* */
TRANSModal_Yes              : 'Güzel, şimdi anladım. ',
TRANSModal_No               : 'Aman, kafam daha cok karıştı. Yardım et. ',

/* Offline Transaction */
OFFLINE_Title               : 'Olustur & offline islem ',
OFFLINE_Desc                : 'Offline islemler 3. adimda gerçeklestirir. 1. ve 3. adimi internete bagli olan bir bilgisayarda, 2. adimi offline olan bir bilgisayarda tamamliyorsun. Böyle özel anahtarinin internete bagli olan bir bilgisayara ulasmasini engelnenir. ',
OFFLLINE_Step1_Title        : 'Adim 1: Bilgileri olustur (Online Bilgisayar) ',
OFFLINE_Step1_Button        : 'Bilgileri olustur ',
ADDR_From       : 'Adres\'den ',
OFFLINE_Step1_Label_2       : 'Nota: This is the FROM address, not the TO address. Nonce is generated from the originating account. If using an airgapped computer, it would be the address of the cold-storage account. ',
OFFLINE_Step2_Title         : 'Adim 2: Generate Transaction (Offline Computer) ',
ADDR_To       : 'Adrese ',
OFFLINE_Step2_Label_2       : 'Gönderilen miktar ',
x_GasPrice                  : 'Gas fiyati ',
x_GasPriceDesc                 : 'Bu online bilgisayarınızda adım 1\'de gösterilirdi. ',
x_GasLimit       : 'Gas limiti ',
x_GasLimitDesc      : '21000 is the default gas limit. When you send contracts or add\'l data, this may need to be different. Any unused gas will be returned to you. ',
x_Nonce                     : 'Veri ',
x_NonceDesc                 : 'Bu online bilgisayarınızda adım 1\'de gösterilir. ',
x_Data       : 'Veri ',
x_DataDesc      : 'Bu istege bagli. Data is often used when you send transactions to contracts. ',
OFFLINE_Step2_Label_7       : 'Enter / Select your Private Key / JSON. ',
OFFLINE_Step3_Title         : 'Adim 3: Gönder / Islemi duyur (Online Computer) ',
OFFLINE_Step3_Label_1       : 'Paste the signed transaction from Step 2 here and press the "SEND TRANSACTION" button. ',

/* Deploy Contracts */
CONTRACT_GenBytecode                : 'Bytecode oluştur ',
CONTRACT_GenBytecoded               : 'Oluşturulan Bytecode ',
TX_Sign                  : 'Islmemi Imzala ',
CONTRACT_GenInterface               : 'Interface oluştur ',

/* My Wallet */
WALL_Nickname                  : 'Cüzdan nickname ',
MYWAL_Address               : 'Cüzdan adres ',
ACCOUNT_Balance                   : 'Bakiye ',
WALL_Edit_Short                  : 'Düzenle ',
WALL_View_Short                  : 'Göster ',
WALL_Remove                : 'Kaldir ',
WALL_RemoveWal             : 'Cüzdani kaldir: ',
WALL_WatchOnlyAccounts             : 'Sadece izlenen hesaplar ',
WALL_Viewing               : 'Izlenen Cüzdan ',
WALL_Hide                  : 'Cüzdan bilgilerini gizle ',
WALL_Edit                : 'Cüzdani düzenle ',
WALL_Name                  : 'Cüzdan Ismi ',
WARN_06             : 'Uyarı! Cüzdanını silmek üzeresin ',
WARN_07             : 'Bunu kaldırmadan önce ** özel anahtarıni ve / veya Keystore Dosya ve şifreni ** kaydettiğinden emin ol. ',
WARN_08             : 'If you want to use this wallet with your MyEtherWallet CX in the future, you will need to manually re-add it using the private key/JSON and password. ',

/* Node Switcher */
NODE_Title                  : 'Set Up Your Custom Node',
NODE_Subtitle               : 'To connect to a local node...',
WARN_05                : 'Your node must be HTTPS in order to connect to it via MyEtherWallet.com. You can [download the MyEtherWallet repo & run it locally](https://github.com/kvhnuke/etherwallet/releases/latest) to connect to any node. Or, get free SSL certificate via [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Node Name',
NODE_Port                   : 'Node Port',
NODE_CTA                    : 'Save & Use Custom Node',

/* Contracts */
CONTRACT_Title              : 'Sözleşme adresi ',
CONTRACT_Title_2            : 'Mevcut sözleşmeyi seç ',
CONTRACT_Json               : 'ABI / JSON arabirimi ',
CONTRACT_Interact_Title     : 'Sözleşmesi oku / yaz ',
CONTRACT_Interact_CTA       : 'Select a function ',
CONTRACT_Bytecode           : 'Bytecode',
CONTRACT_Read               : 'OKU ',
CONTRACT_Write              : 'YAZ ',

/* Swap / Exchange */
SWAP_rates                  : "Güncel Fiyatlar ",
SWAP_init_1                 : "I want to swap my ",
SWAP_init_2                 : " for ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Let's do this! ", // or "Continue"
SWAP_information            : "Bilgilerin ",
x_Amount               : "Gönderilecek miktar ",
SWAP_rec_amt                : "Alınacak miktar ",
SWAP_your_rate              : "Oran ",
SWAP_rec_add                : "Alınan Adres ",
SWAP_start_CTA              : "Start Swap ",
SWAP_ref_num                : "Your reference number ",
SWAP_time                   : "Time remaining to send ",
SWAP_progress_1             : "Order Initiated ",
SWAP_progress_2             : "Waiting for your ", // Waiting for your BTC...
SWAP_progress_3             : "Received! ", // ETH Received!
SWAP_progress_4             : "Sending your {{orderResult.output.currency}} ",
SWAP_progress_5             : "Order Complete ",
SWAP_order_CTA              : "Please send ", // Please send 1 ETH...
SWAP_unlock                 : "Unlock your wallet to send ETH or Tokens directly from this page. ",

/* Sign Message */
MSG_message                 : 'Mesaj ',
MSG_date                    : 'Tarih ',
MSG_signature               : 'İmza ',
MSG_verify                  : 'Mesajı Doğrula ',
MSG_info1                   : 'Include the current date so the signature cannot be reused on a different date. ',
MSG_info2                   : 'Include your nickname and where you use the nickname so someone else cannot use it. ',
MSG_info3                   : 'Include a specific reason for the message so it cannot be reused for a different purpose. ',

/* Mnemonic */
MNEM_1                      : 'Please select the address you would like to interact with. ',
MNEM_2                      : 'Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. ',
MNEM_more                   : 'Daha Fazla Adres ',
MNEM_prev                   : 'Önceki Adresler ',

/* Hardware wallets */
DECRYPT_Ledger_1                : 'Connect your Ledger Nano S ',
DECRYPT_Ledger_2                : 'Open the Ethereum application (or a contract application) ',
DECRYPT_Ledger_3                : 'Verify that Browser Support is enabled in Settings ',
DECRYPT_Ledger_4                : 'If no Browser Support is found in settings, verify that you have [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_0a               : 'Re-open MyEtherWallet on a secure (SSL) connection ',
DECRYPT_Ledger_0b               : 'Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/) ',
DECRYPT_Ledger_scan             : 'Ledger Nano S\'e bağlan ',
DECRYPT_Trezor_scan             : 'TREZOR\'a bağlan ',
DECRYPT_Trezor_select           : 'This is a TREZOR seed ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'This allows you to download different versions of private keys and re-print your paper wallet. You may want to do this in order to [import your account into Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). If you want to check your balance, we recommend using a blockchain explorer like [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'This allows you to download different versions of private keys and re-print your paper wallet. ',
VIEWWALLET_SuccessMsg       : 'Success! Here are your wallet details. ',

/* Chrome Extension */
ERROR_CX_01                  : 'Su an cüzdan eklenmemis. Cüzdan ekle tikla ["Add Wallet"](/cx-wallet.html#add-wallet) ve bir cüzdan ekle! ',
CX_quicksend                : 'Gönder ', // if no appropriate translation, just use "Send" maybe add hizli

/* Error Messages */
ERROR_0                     : 'Geçerli tutar yaz. ',
ERROR_1                     : 'Sifren en az 9 sembol\'dan olusmasi lazim. Güçlü bir parola sectiginden emin ol. ',
ERROR_2                     : 'Sorry! We don\'t recognize this type of wallet file. ',
ERROR_3                     : 'Geçerli bir cüzdan dosyası değil. ',
ERROR_4                     : 'Var olmayan bir birim, bu birimlerden birini kullan lütfen ',
ERROR_5                     : 'Geçersiz adres. ',
ERROR_6                     : 'Geçersiz parola. ',
ERROR_7                     : 'Yetersiz bakiye. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Geçersiz gas limit. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Geçersiz data value. (Must be hex.) ', // 9
ERROR_10                    : 'Yetersiz gas. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Geçersiz veri. (Must be integer.) ', // 11
ERROR_12                    : 'Geçersiz imzali isleme. ',
ERROR_13                    : 'Secdigin Nickname baska bir cüzdanda kullaniliyor. ',
ERROR_14                    : 'Cüzdan bulunmadi. ',
ERROR_15                    : 'Whoops. It doesn\'t look like a proposal with this ID exists yet or there is an error reading this proposal. ', // 15 - NOT USED
ERROR_16                    : 'Bu adrese sahip bir cüzdan zaten depolama alanında mevcut. Lütfen cüzdan sayfanızı kontrol edin. ',
ERROR_17                    : 'Account you are sending from does not have enough funds. If sending tokens, you must have 0.01 ETH in your account to cover the cost of gas. ', // 17
ERROR_18                    : 'All gas would be used on this transaction. This means you have already voted on this proposal or the debate period has ended.', // 18
ERROR_19                    : 'Geçersiz sembol ',
ERROR_20                    : 'Geçersiz ERC-20 token\'i ',
ERROR_21                    : 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative. ',
ERROR_22                    : 'Please enter valid node name ',
ERROR_23                    : 'Lütfen geçerli URL yaz. If you are connecting via HTTPS, your node must be over HTTPS ',
ERROR_24                    : 'Lütfen geçerli port numarası yaz ',
ERROR_25                    : 'Lütfen geçerli zincir kimliği (ID) yaz ',
ERROR_26                    : 'Lütfen geçerli bir ABI yaz ',
ERROR_27                    : 'Minimum miktar: 0.01. Maximum miktar: ',
ERROR_28                    : 'Ilerde cüzdanini acmak icin **Keystore dosyan ve parolan veya özel anahtarin** lazim olacak. Lütfen kaydet ve dista yedekle! Kaydedilmemiş cüzdanini kurtarmanin hiçbir yolu yoktur. Talimatlar icin yardim [help page](https://www.myetherwallet.com/#help) sayfasini oku ',
ERROR_29                    : 'Lütfen geçerli kullanıcı ve şifreyi yaz ',
ERROR_30                    : 'Lütfen geçerli ENS isim yaz ',
ERROR_31                    : 'Geçersiz gizli cümle (phrase) ',
ERROR_32                    : 'Düğüme bağlanılamadı. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank"  rel="noopener"> More info</a>', // 35

SUCCESS_1                   : 'Geçerli adres ',
SUCCESS_2                   : 'Cüzdan basariyla desifre edildi ',
SUCCESS_3                   : 'TX blockchain\'e yayınlandı. İşleminizi görmek ve mayınlandığını doğrulamak veya herhangi bir gaz veya sözleşme yürütme hatası bulunmadığını görmek için tıklayın. TX Kimliği: ', //'İşlem teslim edildi TX Hash ',
SUCCESS_4                   : 'Cüzdanın başarıyla eklendi ',
SUCCESS_5                   : 'Dosya secildi ',
SUCCESS_6                   : 'Başarıyla bağlandı ',
SUCCESS_7                   : 'Mesaj imzası doğrulandi ',
WARN_02              : 'Işlem türü (gönderme modu), adres, miktar, gaz ve veri alanları sizin için doldurulmus olan bir bağlantı\'ile geldiniz. Göndermeden önce herhangi bir bilgiyi değiştirebilirsiniz. Başlamak için cüzdanınızı açın. ',

/* Geth Error Messages */
GETH_InvalidSender          : 'Geçersiz gönderici ',
GETH_Nonce                  : 'Nonce too low ',
GETH_Cheap                  : 'Gas price too low for acceptance ',
GETH_Balance                : 'Insufficient balance ',
GETH_NonExistentAccount     : 'Account does not exist or account balance too low ',
GETH_InsufficientFunds      : 'Insufficient funds for gas * price + value ',
GETH_IntrinsicGas           : 'Intrinsic gas too low ',
GETH_GasLimit               : 'Gaz block sınırını aşıyor ',
GETH_NegativeValue          : 'Negatif değer ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "Transaction with the same hash was already imported.",
PARITY_Old                  : "Transaction nonce is too low. Try incrementing the nonce.",
PARITY_TooCheapToReplace    : "Transaction fee is too low. There is another transaction with same nonce in the queue. Try increasing the fee or incrementing the nonce.",
PARITY_LimitReached         : "There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the fee.",
PARITY_InsufficientGasPrice : "Transaction fee is too low. It does not satisfy your node's minimal fee (minimal: {}, got: {}). Try increasing the fee.",
PARITY_InsufficientBalance  : "Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} wei and got: {} wei.",
PARITY_GasLimitExceeded     : "Transaction cost exceeds current gas limit. Limit: {}, got: {}. Try decreasing supplied gas.",
PARITY_InvalidGasLimit      : "Supplied gas is beyond limit.",

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : 'Thank you to our translators ',
z_TRANSLATE1            : '[ffidan61](https://www.myetherwallet.com/?gaslimit=21000&to=0xF1Fdf8635cc35a084B97905F62a021cAd71fbC21&value=0.1#send-transaction) ',
z_TRANSLATE2            : '',
z_TRANSLATE3            : '',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''

};

module.exports = tr;
