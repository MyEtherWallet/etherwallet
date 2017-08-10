// Hungarian
'use strict';
var hu = function() {}
hu.code = 'hu';
hu.data = {

/* New Generics */
x_CancelReplaceTx           : 'Cancel or Replace Transaction',
x_CancelTx                  : 'Cancel Transaction',
x_PasswordDesc              : 'This password * encrypts * your private key. This does not act as a seed to generate your keys. **You will need this password + your private key to unlock your wallet.**',
x_ReadMore                  : 'Read More',
x_ReplaceTx                 : 'Replace Transaction',
x_TransHash                 : 'Transaction Hash',
x_TXFee                     : 'TX Fee',
x_TxHash                    : 'TX Hash',

/* Check TX Status */
NAV_CheckTxStatus           : 'Check TX Status',
NAV_TxStatus                : 'TX Status',
tx_Details                  : 'Transaction Details',
tx_Summary                  : 'During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and "cancel" / replace these TXs. ** This is not typically something you can do. It should not be relied upon & will only work when the TX Pools are full. [Please, read about this tool here.](https://myetherwallet.groovehq.com/knowledge_base/topics/how-can-i-check-on-the-status-of-my-transaction-can-i-cancel-override-overwrite-replace-or-do-anything-once-a-transaction-has-been-sent)**',
tx_notFound                 : 'Transaction Not Found',
tx_notFound_1               : 'This TX cannot be found in the TX Pool of the node you are connected to.',
tx_notFound_2               : 'If you just sent the transaction, please wait 15 seconds and press the "Check TX Status" button again. ',
tx_notFound_3               : 'It could still be in the TX Pool of a different node, waiting to be mined.',
tx_notFound_4               : 'Please use the dropdown in the top-right & select a different ETH node (e.g. `ETH (Etherscan.io)` or `ETH (Infura.io)` or `ETH (MyEtherWallet)`) and check again.',
tx_foundInPending           : 'Pending Transaction Found',
tx_foundInPending_1         : 'Your transaction was located in the TX Pool of the node you are connected to. ',
tx_foundInPending_2         : 'It is currently pending (waiting to be mined). ',
tx_foundInPending_3         : 'There is a chance you can "cancel" or replace this transaction. Unlock your wallet below.',
tx_FoundOnChain             : 'Transaction Found',
tx_FoundOnChain_1           : 'Your transaction was successfully mined and is on the blockchain.',
tx_FoundOnChain_2           : '**If you see a red `( ! )`, a `BAD INSTRUCTION` or `OUT OF GAS` error message**, it means that the transaction was not successfully *sent*. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.',
tx_FoundOnChain_3           : '**If you do not see any errors, your transaction was successfully sent.** Your ETH or Tokens are where you sent them. If you cannot see this ETH or Tokens credited in your other wallet / exchange account, and it has been 24+ hours since you sent, please [contact that service](https://myetherwallet.groovehq.com/knowledge_base/topics/i-have-a-question-but-its-not-about-myetherwallet-dot-com-what-do-i-do). Send them the *link* to your transaction and ask them, nicely, to look into your situation.',

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
GET_ConfButton              : 'I understand. Continue.',
GEN_Label_5                 : 'Save Your `Private Key`. ',
GEN_Unlock                  : 'Unlock your wallet to see your address',
GAS_PRICE_Desc              : 'Gas Price is the amount you pay per unit of gas. `TX fee = gas price * gas limit` & is paid to miners for including your TX in a block. Higher the gas price = faster transaction, but more expensive. Default is `21 GWEI`.',
GAS_LIMIT_Desc              : 'Gas limit is the amount of gas to send with your TX. `TX fee` = gas price * gas limit & is paid to miners for including your TX in a block. Increasing this number will not get your TX mined faster. Sending ETH = `21000`. Sending Tokens = ~`200000`.',
NONCE_Desc                  : 'The nonce is the number of transactions sent from a given address. It ensures transactions are sent in order & not more than once.',
TXFEE_Desc                  : 'The TX Fee is paid to miners for including your TX in a block. Is is the `gas limit` * `gas price`. [You can convert GWEI -> ETH here](https://www.myetherwallet.com/helpers.html)',



/* Navigation*/
NAV_YourWallets             : 'Tárcáid ',
NAV_AddWallet               : 'Tárca hozzáadása ',
NAV_GenerateWallet_alt      : 'New Wallet ',
NAV_GenerateWallet          : 'Tárca generálása ',
NAV_BulkGenerate            : 'Több tárca generálása ',
NAV_SendEther               : 'Ether & Tokenek küldése ',
NAV_SendTokens              : 'Tokenek küldése ',
NAV_Offline                 : 'Offline tranzakció ',
NAV_DeployContract          : 'Kontraktus Telepítése ',
NAV_InteractContract        : 'Interact with Contract ',
NAV_Contracts               : 'Kontraktus ',
NAV_Multisig                : 'Multisig ',
NAV_MyWallets               : 'Tárcáim ',
NAV_ViewWallet              : 'Tárca adatainak megtekintése ',
NAV_Help                    : 'Segítség ',
NAV_Contact                 : 'Kapcsolat ',
NAV_ENS                     : 'ENS',
NAV_Swap                    : 'Swap ',
NAV_SignMsg                 : 'Sign Message ',

/* General */
x_AddessDesc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Úgy is ismerheted ezt, mint "Számlaszám" vagy "Publikus Kulcs". Ez az amit a partnereidnek küldesz, hogy tudjanak ETH-et küldeni neked. Az oldalsó ikon egyszerű módja a saját címed felismerésének. ',
x_Address                   : 'A Te címed ',
x_Cancel                    : 'Mégse ',
x_CSV                       : 'CSV fájl (titkosítatlan) ',
x_Download                  : 'Letöltés ',
x_Json                      : 'JSON Fájl (titkosítatlan) ',
x_JsonDesc                  : 'Ez a titkosítotatlan, JSON formátumú változata a privát kulcsodnak. Ez azt jelenti, hogy nincs szükség jelszóra az eléréséhez, viszont ha bárki megtalálja a JSON fájlt, akkor hozzáférhet a tárcádhoz és az Etheredhez a jelszó ismerete nélkül. ',
x_Keystore                  : 'Keystore Fájl (UTC / JSON · Ajánlott · Titkosított) ',
x_Keystore2                 : 'Keystore Fájl (UTC / JSON) ',
x_KeystoreDesc              : 'Ez a Keystore fájl ugyanolyan formátumú, amit a Mist használ, tehát könnyedén importálhatod a későbbiekben. Leginkább ezt a fájlt ajánlott letölteni és elmenteni. ',
x_MetaMask                  : 'Metamask / Mist ',
x_Mnemonic                  : 'Mnemonikus frázis ',
x_ParityPhrase              : 'Parity Phrase ',
x_Password                  : 'Jelszó ',
x_Print                     : 'PapírTárca Nyomtatása ',
x_PrintDesc                 : 'Profi Tipp: Kattints a nyomtatásra és mentsd el PDF formátumban, még abban az esetben is, ha nincs nyomtatód! ',
x_PrintShort                : 'Nyomtatás ',
x_PrivKey                   : 'Privát Kulcs (titkosítatlan) ',
x_PrivKey2                  : 'Privát Kulcs ',
x_PrivKeyDesc               : 'Ez a titkosítatlan szöveges változata a privát kulcsodnak, ami azt jelenti, hogy az eléréséhez nem szükséges jelszó. Ha valaki megtalálta a titkosítatlan privát kulcsodat jelszó nélkül is hozzáférhet a tárcádhoz. Ezért a titkosított változat ajánlott. ',
x_Save                      : 'Mentés ',
x_TXT                       : 'TXT fájl (titkosítatlan) ',
x_Wallet                    : 'Tárca ',
x_Access                    : 'Access ',

/* Header */
MEW_Warning_1               : 'Mindig ellenőrizd az URL-t mielőtt megpróbálod elérni a tárcádat vagy új tárcát hozol létre. Óvakodj az adathalász oldalalaktól! ',
CX_Warning_1                : 'Győződj meg róla, hogy van **külső adatmentésed** minden tárcáról, amit itt tárolsz. Több dolog is történhet, ami adatvesztést eredményezhet a Chrome Bővítményben, többek között a Bővítmény törlése vagy újratelepítése. A bővítmény egyszerű módja annak, hogy elérd a tárcáidat, de **nem** annak, hogy elmentsd azokat. ',
MEW_Tagline                 : 'Nyílt forrású JavaScript-alapú, Kliens-oldali Ether Tárca ',
CX_Tagline                  : 'Nyílt forrású JavaScript-alapú, Kliens-oldali Ether Tárca Chrome Bővítmény ',

/* Footer */
FOOTER_1                    : 'Egy nyílt forrású, javascript-alapú, kliens-oldali eszköz Ethereum Tárcák létrehozására és tranzakicók végrehajtására. ',
FOOTER_1b                   : 'Készítette: ',
FOOTER_2                    : 'Az adományokat igazán nagyra értékeljük: ',
FOOTER_3                    : 'Kliens-oldali Tárca létrehozása: ',
FOOTER_4                    : 'Jogi nyilatkozat ',

/* Sidebar */
sidebar_AccountInfo         : 'Számlainformáció ',
sidebar_AccountAddr         : 'Számla címe ',
sidebar_AccountBal          : 'Számlaegyenleg ',
sidebar_TokenBal            : 'Token Egyenleg ',
sidebar_Equiv               : 'Ezzel egyenértékű ',
sidebar_TransHistory        : 'Tranzakció Történet ',
sidebar_donation            : 'A MyEtherWallet egy szabad, nyílt forrású szolgáltatás az adatod védelmének és a biztonságodnak szentelve. Minél több adomány érkezik, annál több időt tudunk fordítani új funkciók létrehozására, a visszajelzéseidre és olyan szolgáltatást nyújtani, amilyet szeretnél. Mindössze két ember, akik megpróbálnak változtatni a világon. Segítesz nekünk? ',
sidebar_donate              : 'Adományozok ',
sidebar_thanks              : 'KÖSZÖNJÜK!!! ',
sidebar_DisplayOnTrezor     : 'Display address on TREZOR',
sidebar_DisplayOnLedger     : 'Display address on Ledger',

/* Decrypt Panel */
decrypt_Access              : 'Hogyan szeretnéd elérni a tárcádat? ',
decrypt_Title               : 'Válaszd ki a privát kulcsod formátumát: ',
decrypt_Select              : 'Válassz egy Tárcát: ',

/* Add Wallet */
ADD_Label_1                 : 'Mit szeretnél tenni? ',
ADD_Radio_1                 : 'Új Tárca Létrehozása ',
ADD_Radio_2                 : 'Válaszd ki a Tárca fájlodat (Keystore / JSON) ',
ADD_Radio_2_alt             : 'Válaszd ki a Tárca fájlt ',
ADD_Radio_2_short           : 'TÁRCA FÁJL KIVÁLASZTÁSA... ',
ADD_Radio_2_success         : 'Kiválasztott Tárca ',
ADD_Radio_3                 : 'Illeszd be vagy írd be a Privát Kulcsodat ',
ADD_Radio_4                 : 'Tárca hozzáadása megfigyelésre ',
ADD_Radio_5                 : 'Másold/írd be a mnemonikus frázist ',
ADD_Radio_5_Path            : 'Select HD derivation path ',
ADD_Radio_5_woTrezor        : '(Jaxx, Metamask, Exodus, imToken)',
ADD_Radio_5_withTrezor      : '(Jaxx, Metamask, Exodus, imToken, TREZOR)',
ADD_Radio_5_PathAlternative : '(Ledger)',
ADD_Radio_5_PathTrezor      : '(TREZOR)',
ADD_Radio_5_PathCustom      : 'Custom',
ADD_Label_2                 : 'Hozz létre egy Nicknevet: ',
ADD_Label_3                 : 'A Tárcád titkosítva van. Írj be a jelszót ',
ADD_Label_4                 : 'Számla hozzáadása megfigyelésre ',
ADD_Warning_1               : 'Bármelyik számlát hozzáadhatod "megfigyelésre" a tárcák lapon, anélkül, hogy felöltenél privát kulcsot. Ez **nem azt jelenti**, hogy van hozzáférésed ehhez a tárcához és azt sem, hogy tudsz Ethert küldeni vele. ',
ADD_Label_5                 : 'Add meg a címet ',
ADD_Label_6                 : 'Tárcád feloldása ',
ADD_Label_6_short           : 'Feloldás ',
ADD_Label_7                 : 'Számla Hozzáadása ',
ADD_Label_8                 : 'Password (optional): ',

/* Generate Wallets */
GEN_desc                    : 'Ha több tárcát szeretnél egyszerre generálni, azt megteheted itt ',
GEN_Label_1                 : 'Adj meg egy erős jelszót! (legalább 9 karakter) ',
GEN_Placeholder_1           : 'NE felejtsd el elmenteni! ',
GEN_SuccessMsg              : 'Sikerült! A Tárcád legenerálódott. ',
GEN_Label_2                 : 'Mentsd el a Keystore fájlt vagy a Privát Kulcsot. Ne felejtsd el a fenti jelszót! ',
GEN_Label_3                 : 'Mentsd el a címed. ',
GEN_Label_4                 : 'Választható: Nyomtasd ki a papír tárcádat vagy tárold a QR kód változatot. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Generálni kívánt tárcák száma ',
BULK_Label_2                : 'Tárcák generálása ',
BULK_SuccessMsg             : 'Sikerült! A tárcáid legenerálódtak. ',

/* Sending Ether and Tokens */
SEND_addr                   : 'Erre a címre ',
SEND_amount                 : 'Küldendő összeg ',
SEND_amount_short           : 'Összeg ',
SEND_custom                 : 'Saját Token ',
SEND_gas                    : 'Gas ',
SEND_TransferTotal          : 'Teljes egyenleg küldése ',
SEND_generate               : 'Tranzakció generálása ',
SEND_raw                    : 'Raw/Nyers Tranzakció ',
SEND_signed                 : 'Aláírt Tranzakció ',
SEND_trans                  : 'Tranzakció Küldése ',
SENDModal_Title             : 'Figyelmeztetés! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Most készülsz küldeni ',
SENDModal_Content_2         : '-t az alábbi címre: ',
SENDModal_Content_3         : 'Biztos vagy benne? ',
SENDModal_Content_4         : 'JEGYZET: Ha hibával találkozol valószínűleg ethert kell küldened a számládra, hogy fedezni tudd a gas-költségét a token küldésének. A Gas etherben fizetendő. ',
SENDModal_No                : 'Nem, vigyél ki innen! ',
SENDModal_Yes               : 'Igen, biztos vagyok benne! Tranzakció indítása. ',

/* Tokens */
TOKEN_Addr                  : 'Cím ',
TOKEN_Symbol                : 'Token Szimbólum ',
TOKEN_Dec                   : 'Tizedesjegyek ',
TOKEN_show                  : 'Minden Token megjelenítése ',
TOKEN_hide                  : 'Tokenek elrejtése ',

/* Send Transaction */
TRANS_desc                  : 'Ha Tokeneket akarsz küldeni, kérlek használd a Token Küldése oldalt ehelyett. ',
TRANS_warning               : 'Ha a "Csak ETH" vagy a "Csak ETC" Funkciókat használod a küldés kontraktuson keresztül megy végbe. Néhány szolgáltatásnak problémái lehetnek az ilyen tranzakciók elfogadásával. Kattints és tudj meg többet. ',
TRANS_advanced              : '+Haladó: Több Adat ',
TRANS_data                  : 'Adat ',
TRANS_gas                   : 'Gas Limit ',
TRANS_sendInfo              : 'Egy standard tranzakció 21000 gas-t használ, ami 0.000441 ETH-be fog kerülni. Mi 0.000000021 ETH-nél (a minimálisnál) enyhén magasabb gas árat használunk, annak biztosítása érdekében, hogy gyorsan ki legyen bányászva. Tranazkciós költséget nem számolunk fel. ',

/* Send Transaction Modals */
TRANSModal_Title            : '"Csak ETH" és "Csak ETC" Tranzakciók ',
TRANSModal_Content_0        : 'Egy jegyzet a különféle tranzakciókról és szolgáltatásokról ',
TRANSModal_Content_1        : '**ETH (Standard Tranzakció): ** Egy alapértelmezett tranzakciót generál közvetlenül az egyik címről a másikra. A gas alapértéke 21000. Valószínűsíthető, hogy minden ETH, ami ezzel a módszerrel lesz elküldve, végbemegy az ETC láncon is. ',
TRANSModal_Content_2        : '**Csak ETH: **  Ez a tranzakciótípus [Timon Rapp replay protection/visszajátszás elleni védelem kontraktusán keresztül küld (ahogy azt Vitalik Buterin adjánlotta)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) tehát a küldés csak az **ETH** láncon megy végbe. ',
TRANSModal_Content_3        : '**Csak ETC: ** Ez a tranzakciótípus [Timon Rapp replay protection/visszajátszás elleni védelem kontraktusán keresztül küld (ahogy azt Vitalik Buterin adjánlotta)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) tehát a küldés csak az **ETC** láncon megy végbe. ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift: ** Csak Standard Tranzakció szerint küld. Ha a "Csak" kontraktusok valamelyikével küldesz, fel kell venned a kapcsolatot az ügyfélszolgálattal, hogy manuálisan hozzáadhassák az egyenleged vagy visszatérítést küldjenek. [Megpróbálhatod a Shapeshift "split" eszközét is.](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex:** Nincsenek ismert problémák. Használható bárhogyan. ',
TRANSModal_Yes              : 'Király, most már értem. ',
TRANSModal_No               : 'Ó istenem, most még jobban összezavarodtam. Segítsetek! ',

/* Offline Transaction */
OFFLINE_Title               : 'Offline tranzakció generálása és küldése ',
OFFLINE_Desc                : 'Az Offline tranzakció generálása három lépsében történik. Az első(1.) és a harmadik(3.) lépéseket online számítógépen kell végrehajtani, a második(2.) lépést pedig offline/airgap számítógépen. Ezzel meggyőződhetsz róla, hogy a privát kulcsod nem érintkezik internetre kötött eszközzel. ',
OFFLLINE_Step1_Title        : 'Lépés 1: Információ Generálása (Online Számítógép) ',
OFFLINE_Step1_Button        : 'Információ Generálása ',
OFFLINE_Step1_Label_1       : 'Erről a címről ',
OFFLINE_Step1_Label_2       : 'Jegyzet: Ez a FELADÓ címe, nem a FOGADÓÉ. A nonce a feladó számlájából generálódik. Ha airgap-elt számítógépet használsz, ez a cím a hidegtárcás számla címe legyen. ',
OFFLINE_Step2_Title         : 'Lépés 2: Tranzakció Generálása (Offline Számítógép) ',
OFFLINE_Step2_Label_1       : 'Erre a címre ',
OFFLINE_Step2_Label_2       : 'Érték / Összeg küldésre ',
OFFLINE_Step2_Label_3       : 'Gas Ár ',
OFFLINE_Step2_Label_3b      : 'Ez volt látható az online számítógépen az első lépésben. ',
OFFLINE_Step2_Label_4       : 'Gas Limit ',
OFFLINE_Step2_Label_4b      : '21000 az alapértelmezett gas limit. Amikor kontraktust küldesz vagy adatot adsz hozzá ezeknek különbözőeknek kell lennie. A nem használt gas visszatérül hozzád. ',
OFFLINE_Step2_Label_5       : 'Nonce ',
OFFLINE_Step2_Label_5b      : 'Ez volt látható az online számítógépen az első lépésben. ',
OFFLINE_Step2_Label_6       : 'Adat ',
OFFLINE_Step2_Label_6b      : 'Ez választható. Az adat mező gyakran használt, amikor tranzakciót küldesz kontraktusokba. ',
OFFLINE_Step2_Label_7       : 'Írd be / Válaszd ki a Privát Kulcsodat / JSON-fájlt. ',
OFFLINE_Step3_Title         : 'Lépés 3: Küld / Közzétesz (Online Számítógép) ',
OFFLINE_Step3_Label_1       : 'Illeszd be ide az aláírt tranzakciót a második lépésből (Lépés 2) és nyomd meg a "TRANZAKCIÓ KÜLDÉSE" gombot. ',

/* My Wallet */
MYWAL_Nick                  : 'Tárca Nickname ',
MYWAL_Address               : 'Tárca Cím ',
MYWAL_Bal                   : 'Egyenleg ',
MYWAL_Edit                  : 'Szerkesztés ',
MYWAL_View                  : 'Nézet ',
MYWAL_Remove                : 'Eltávolítás ',
MYWAL_RemoveWal             : 'Tárca Eltávolítása: ',
MYWAL_WatchOnly             : 'Megfigyelt Számláid ',
MYWAL_Viewing               : 'Tárca megtekintése ',
MYWAL_Hide                  : 'Tárca Információ elrejtése ',
MYWAL_Edit_2                : 'Tárca szerkesztése ',
MYWAL_Name                  : 'Tárca Neve ',
MYWAL_Content_1             : 'Figyelmeztetés! Arra készülsz, hogy eltávolítod a tárcádat ',
MYWAL_Content_2             : 'Győződj meg róla, hogy **elmentetted a privát kulcsodat és/vagy Keystore fájlodat a jelszóval együtt,** mielőtt törlöd őket. ',
MYWAL_Content_3             : 'Ha használni akarod ezt a tárcát a MyEtherWallet CX-szel a jövőben, manuálisan újra hozzá kell majd adnod a privát kulcs/JSON-nal és jelszóval. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Ez lehetővé teszi számodra, hogy különböző változatú privát kulcsokat tölts le és újranyomtasd a papírtárcádat.  Ezt megteheted úgy, hogy [importálod a számládat a Geth/Mist-be](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Ha ellenőrizni akarod a számládat, azt ajánljuk, hogy használj blokklánc explorert mint az [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Ez lehetővé teszi számodra, hogy különböző változatú privát kulcsokat tölts le és újranyomtasd a papírtárcádat. ',
VIEWWALLET_SuccessMsg       : 'Sikerült! Itt vannak a tárcád részletei. ',
VIEWWALLET_ShowPrivKey      : '(show)',
VIEWWALLET_HidePrivKey      : '(hide)',

/* Mnemonic */
MNEM_1                      : 'Válaszd ki a címet amelyiket használni szeretnéd. ',
MNEM_2                      : 'Egyetlen mnemonikus frázis egyszerre több tárcához / címhez ad hozzáférést. Válaszd ki a címet amelyiket most használni szeretnéd. ',
MNEM_more                   : 'További Címek ',
MNEM_prev                   : 'Előző Címek ',

/* Chrome Extension */
CX_error_1                  : 'Nincsen mentett Tárcád. Kattints ["Tárca Hozzáadása"](/cx-wallet.html#add-wallet) ahhoz, hogy hozzáadj egyet! ',
CX_quicksend                : 'GyorsKüldés ', // if no appropriate translation, just use "Send"

/* Node Switcher */
NODE_Title                  : 'Set Up Your Custom Node',
NODE_Subtitle               : 'To connect to a local node...',
NODE_Warning                : 'Your node must be HTTPS in order to connect to it via MyEtherWallet.com. You can [download the MyEtherWallet repo & run it locally](https://github.com/kvhnuke/etherwallet/releases/latest) to connect to any node. Or, get free SSL certificate via [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Node Name',
NODE_Port                   : 'Node Port',
NODE_CTA                    : 'Save & Use Custom Node',

/* Contracts */
CONTRACT_Title              : 'Contract Address ',
CONTRACT_Title_2            : 'Select Existing Contract ',
CONTRACT_Json               : 'ABI / JSON Interface ',
CONTRACT_Interact_Title     : 'Read / Write Contract ',
CONTRACT_Interact_CTA       : 'Select a function ',
CONTRACT_ByteCode           : 'Byte Code ',
CONTRACT_Read               : 'READ ',
CONTRACT_Write              : 'WRITE ',
DEP_generate                : 'Byte-kód Generálása ',
DEP_generated               : 'Generált Byte-kód ',
DEP_signtx                  : 'Aláírt Tranzakció ',
DEP_interface               : 'Generált Felület ',

/* Swap / Exchange */
SWAP_rates                  : "Current Rates ",
SWAP_init_1                 : "I want to swap my ",
SWAP_init_2                 : " for ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Let's do this! ", // or "Continue"
SWAP_information            : "Your Information ",
SWAP_send_amt               : "Amount to send ",
SWAP_rec_amt                : "Amount to receive ",
SWAP_your_rate              : "Your rate ",
SWAP_rec_add                : "Your Receiving Address ",
SWAP_start_CTA              : "Start Swap ",
SWAP_ref_num                : "Your reference number ",
SWAP_time                   : "Time remaining to send ",
SWAP_elapsed				        : "Time elapsed since sent ",
SWAP_progress_1             : "Order Initiated ",
SWAP_progress_2             : "Waiting for your ", // Waiting for your BTC...
SWAP_progress_3             : "Received! ", // ETH Received!
SWAP_progress_4             : "Sending your {{orderResult.output.currency}} ",
SWAP_progress_5             : "Order Complete ",
SWAP_order_CTA              : "Please send ", // Please send 1 ETH...
SWAP_unlock                 : "Unlock your wallet to send ETH or Tokens directly from this page. ",

/* Sign Message */
MSG_message                 : 'Message ',
MSG_date                    : 'Date ',
MSG_signature               : 'Signature ',
MSG_verify                  : 'Verify Message ',
MSG_info1                   : 'Include the current date so the signature cannot be reused on a different date. ',
MSG_info2                   : 'Include your nickname and where you use the nickname so someone else cannot use it. ',
MSG_info3                   : 'Include a specific reason for the message so it cannot be reused for a different purpose. ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Wallet ',
ADD_Ledger_scan             : 'Csatlakozás a Ledger Wallet-hez ',
ADD_Ledger_1                : 'Csatlakoztasd a Ledger Wallet-et ',
ADD_Ledger_2                : 'Nyisd meg az Ethereum applikációt (vagy egy kontraktus applikációt) ',
ADD_Ledger_3                : 'Ellenőrizd, hogy a beállításokban engedélyezve van a Böngésző Támogatás (Browser Support) ',
ADD_Ledger_4                : 'If no Browser Support is found in settings, verify that you have [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
ADD_Ledger_0a               : 'You must access MyEtherWallet via a secure (SSL / HTTPS) connection to connect. ',
ADD_Ledger_0b               : 'Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/) ',
WARN_Send_Link              : 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. ',
x_Trezor                    : 'TREZOR ',
ADD_Trezor_scan             : 'Connect to TREZOR ',
ADD_Trezor_select           : 'This is a TREZOR seed ',
ADD_MetaMask                : 'Connect to MetaMask ',

/* Error Messages */
ERROR_0                     : 'Kérlek írj be érvényes összeget ',
ERROR_1                     : 'A jelszavadnak minimum 9 karakter hosszúságúnak kell lennie. Kérlek győződj meg arról, hogy erős jelszót választasz. ',
ERROR_2                     : 'Sajnáljuk, de nem tudjuk felismerni ezt a típusú Tárca fájlt. ',
ERROR_3                     : 'Ez nem egy érvényes Tárca fájl. ',
ERROR_4                     : 'Ez a egység nem létezik, kérlek használj egyet az alábbi egységek közül ',
ERROR_5                     : 'Érvénytelen cím. ',
ERROR_6                     : 'Érvénytelen jelszó. ',
ERROR_7                     : 'Érvénytelen összeg. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Érvénytelen gas limit. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Érvénytelen adatérték. (Must be hex.) ', // 9
ERROR_10                    : 'Érvénytelen gas összeg. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Érvénytelen nonce. (Must be integer.) ', // 11
ERROR_12                    : 'Érvénytelen aláírású tranzakció. ',
ERROR_13                    : 'Egy Tárca ezzel a Nicknévvel már létezik ',
ERROR_14                    : 'Tárca nem található. ',
ERROR_15                    : 'Úgy tűnik ezzel az ID-vel nem létezik javaslat, vagy hiba történt a javaslat beolvasása közben. ',
ERROR_16                    : 'Egy tárca ezzel a címmel már létezik a tárolóban. Kérlek ellenőrizd a tárcák oldalán. ',
ERROR_17                    : 'Nincs elegendő egyenleg. A számlán amiről küldeni próbálsz nem elég az egyenleg. Legalább 0.01 ethernek kell lennie a számládon, ahhoz, hogy fedezni tudd a gas költségeit. Kérlek adj hozzá ethert és próbáld újra! ',
ERROR_18                    : 'Az összes gas felhasználásra kerülne ezen a tranzakción. Ez azt jelenti, hogy már szavaztál erre a javaslatra vagy a vita periódus már lejárt. ',
ERROR_19                    : 'Érvénytelen szimbólum ',
ERROR_20                    : 'Not a valid ERC-20 token', // 20
ERROR_21                    : 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.', // 21
ERROR_22                    : 'Please enter a valid node name', // 22
ERROR_23                    : 'Please enter a valid URL. If you are on https, your URL must be https', // 23
ERROR_24                    : 'Please enter a valid port. ', // 24
ERROR_25                    : 'Please enter a valid chain ID. ', // 25
ERROR_26                    : 'Please enter a valid ABI. ', // 26
ERROR_27                    : 'Minimum amount: 0.01. Max amount: ', // 27
ERROR_28                    : '**Szükséged lesz a Keystore Fájlra és a jelszóra vagy a Privát Kulcsra**, ahhoz, hogy hozzáférj ehhez a tárcához a jövőben. Kérlek mentsd el és készíts külső biztonsági mentést is! Nincs lehetőség egy tárca visszaszerzésére, ha nem mented el. Olvasd el a [Segítség lapot](https://www.myetherwallet.com/#help) további instrukciókért. ',
ERROR_29                    : 'Please enter a valid user and password. ', // 29
ERROR_30                    : 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
ERROR_31                    : 'Please enter a valid secret phrase. ', // 31
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35
ERROR_36                    : 'Enter valid TX hash', // 36
ERROR_37                    : 'Enter valid hex string (0-9, a-f)', // 37

SUCCESS_1                   : 'Érvényes cím ',
SUCCESS_2                   : 'Tárca sikeresen dekódolva ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ', //'Tranzakció elküldve. TX Hash ',
SUCCESS_4                   : 'Tárcád sikeresen hozzáadva ',
SUCCESS_5                   : 'File Selected ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
/* Geth Error Messages */
GETH_InvalidSender          : 'Érvénytelen küldő ',
GETH_Nonce                  : 'a Nonce túl alacsony ',
GETH_Cheap                  : 'A Gas ára túl alacsony az elfogadáshoz ',
GETH_Balance                : 'Hiányos egyenleg ',
GETH_NonExistentAccount     : 'A Számla nem létezik vagy az egyenleg túl alacsony ',
GETH_InsufficientFunds      : 'Hiányos alap a gas-hoz * ár + érték ',
GETH_IntrinsicGas           : 'Intrinsic gas túl alacsony ',
GETH_GasLimit               : 'Meghaladja a blokk gas limitjét ',
GETH_NegativeValue          : 'Negatív érték ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "Egy azonos hash-sel rendelkező tranzakció már importálva volt.",
PARITY_Old                  : "A tranzakciós nonce túl alacsony. Próbáld meg megnövelni.",
PARITY_TooCheapToReplace    : "Túl alacsony a tranzakciós díj. Van egy másik tranzakció is a sorban azonos nonce-szal. Próbáld meg megemelni adíjat vagy megnövelni a nonce-t.",
PARITY_LimitReached         : "Túl sok tranzakció van a sorodban, ezért ez a tranzakció nem lett feldolgozva.",
PARITY_InsufficientGasPrice : "Túl alacsony a tranzakciós díj. Nem felel meg a node-od minimum díjának. Minimum: {}, ennyi lenne: {}. Próbáld meg megnövelni a díjat.",
PARITY_InsufficientBalance  : "Nincs elegendő egyenleg. A számlán amiről küldeni próbálsz nem elég az egyenleg. Szükséges: {} és van: {}.",
PARITY_GasLimitExceeded     : "A tranzakcó ára meghaladja a jelenlegi gas limitet. Limit: {}, ennyi lenne: {}.",
PARITY_InvalidGasLimit      : "Supplied gas is beyond limit.",

/* Tranlsation Info */
translate_version           : '0.4.3 ',
Translator_Desc             : 'Köszönet a fordításért ',
TranslatorName_1            : '[belpheg](https://www.myetherwallet.com/?gaslimit=21000&to=0xBF8C35176eAD29257834D5A1592ed50Adb0b6e4f&value=1.0#send-transaction) · ',
TranslatorAddr_1            : '0xBF8C35176eAD29257834D5A1592ed50Adb0b6e4f ',
/* Translator 1             : email: zoltan.tapi@donamin.com */
TranslatorName_2            : '[bluqesh](https://www.myetherwallet.com/?gaslimit=21000&to=0x4270A331d14CcdB6FB941f3f5De9Cf01607Bff9F&value=1.0#send-transaction) ',
TranslatorAddr_2            : '0x4270A331d14CcdB6FB941f3f5De9Cf01607Bff9F ',
/* Translator 2             : Insert Comments Here */
TranslatorName_3            : '',
TranslatorAddr_3            : '',
/* Translator 3             : Insert Comments Here */
TranslatorName_4            : '',
TranslatorAddr_4            : '',
/* Translator 4             : Insert Comments Here */
TranslatorName_5            : '',
TranslatorAddr_5            : '',
/* Translator 5             : Insert Comments Here */

/* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
HELP_Warning                : 'Ha **2015 december 31** előtt készítettél egy tárcát vagy töltötted le a repo-t, akkor ellenőrizd a tárcáidat és töltsd le a repo új verzióját. Kattints a részletekért. ',
HELP_Desc                   : 'Valamit hiányolsz? Egyéb kérdésed lenne? [Írj nekünk](mailto:support@myetherwallet.com), és nem csak választ fogsz kapni, de még ezt az oldalt is frissítjük, hogy másoknak is hasznosabb legyen. ',
HELP_Remind_Title           : 'Néhány emlékeztető ',
HELP_Remind_Desc_1          : 'Az **Ethereum, MyEtherWallet.com és MyEtherWallet CX, továbbá néhány, az oldal által használt JavaScript könyvtár aktív fejlesztés alatt állnak.** Az alapos tesztelés és a világszerte több tízezer sikeresen létrehozott tárca ellenére mindig fennáll az apró lehetőség arra, hogy valami váratlan esemény miatt elveszted az ETH-id. Ne fektess be annál többet, mint amit hajlandó lennél elveszítnei. Ha esetleg bármi ilyen történne, nagyon sajnáljuk, de **nem vagyunk a felősek az elvesztett Etherekért**. ',
HELP_Remind_Desc_2          : 'A MyEtherWallet.com és a MyEtherWallet CX nem "web tárcák". Nem kell nálunk regisztrálnod, vagy ránk bízni az Ethereid megőrzésre. Semmilyen adat nem hagyja el a gépedet/böngésződet. Abban segítünk, hogy egyszerűen tudd az tárcáid látrehozni, lementeni és hozzájuk férni, és egyéb módon használni a blokkláncot. ',
HELP_Remind_Desc_3          : 'Ha nem mented le a privát kulcsodat és a jelszót, akkor nincs lehetőség visszaszerezni a tárcádhoz a hozzáférést, sem a rajta levő összeget. Készíts róluk több példányban is biztonsági másolatot, és ne csak a gépeden legyenek! ',

HELP_0_Title                : '0) Új vagyok. Mire tudom használni ezt az oldalt? ',
HELP_0_Desc_1               : 'A MyEtherWallet-tel új tárcákat lehet létrehozni, hogy saját magadnál tudd tárolni az Ethert, és nem egy exchange-nél. Ez a folyamat teljesen a te gépeden történik, nem a mi szerverünkön, így amikor létrehozol egy új tárcát **a te felelősséged biztonságosan tárolni azt**. ',
HELP_0_Desc_2               : 'Hozz létre egy új tárcát. ',
HELP_0_Desc_3               : 'Készíts róla biztonsági mentést. ',
HELP_0_Desc_4               : 'Ellnőrizd, hogy van hozzáférésed az új tárcához, és helyesen mentettél le minden szükséges információt. ',
HELP_0_Desc_5               : 'Küldj Ethert az új címedre. ',

HELP_1_Title                : '1) Hogyan tudok új tárcát készíteni? ',
HELP_1_Desc_1               : 'Menj a "Tárca Generálása" oldalra. ',
HELP_1_Desc_2               : 'Menj a "Tárca hozzáadása" oldalra, és válaszd ki az "Új Tárca Létrehozása" opciót. ',
HELP_1_Desc_3               : 'Írj be egy erős jelszót. Ha úgy gondolod, esetleg elfelejtheted, akkor ments le / írd le egy biztonságos helyre, mert szükséged lesz rá később, hogy tranzakciókat küldhess. ',
HELP_1_Desc_4               : 'Kattints a "Tárca generálása" gombra. ',
HELP_1_Desc_5               : 'Az új tárcád ezzel kész van. ',

HELP_2a_Title               : 'Hogyan tudom lementeni/biztonsági másolatot készíteni a tárcáról? ',
HELP_2a_Desc_1              : 'A tárcádról ajánlott mindig külső biztonsági mentést tartani, több, fizikailag különböző helyen - például egy pendrive-on és/vagy papíron. ',
HELP_2a_Desc_2              : 'Mentsd le a címet. Megtarthatod magadnak, vagy megoszthatod másokkal is, így ők is tudnak neked Ethert küldeni. ',
HELP_2a_Desc_3              : 'Mentsd el több példányban a privát kulcsot, és ne oszd meg senkivel. Erre van ugyanis szükség, ha hozzá szeretnél férni az Etheredhez, és el szeretnéd küldeni. Három fajta privát kulcs van: ',
HELP_2a_Desc_4              : 'Tedd a címed, a privát kulcsod egy változatát és a papírtárca PDF-et egy mappába. Ments ezt le a számítógépedre és egy USB pendrive-ra. ',
HELP_2a_Desc_5              : 'Ha van nyomtatód, nyomtasd ki a papírtárcát. Ennek hiányában írd le a privát kulcsot és a címed egy darab papírra. Ezt a számítógépedtől és a pendrive-tól elkülönített, biztonságos helyen tárold. ',
HELP_2a_Desc_6              : 'Figyel arra is, hogy olyankor is legyen másolatod a privát kulcsról/jelszóról, ha a számítógéped, a pendrive vagy a papír eltűnik, vagy elromlik. Olyan esetekkel is számolj ami akár fizikailag nagyobb területet érinthet, mint például egy tűz, vagy árvíz. ',

HELP_2b_Title               : '2b) Hogyan tudom biztonságosan/offline/hidegen használni a MyEtherWallet-et? ',
HELP_2b_Desc_1              : 'Menj a github oldalunkra: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ',
HELP_2b_Desc_2              : 'Kattints a `etherwallet-vX.X.X.X.zip`. ',
HELP_2b_Desc_3              : 'Másold a letöltött zip fájlt egy airgap-elt számítógépre. ',
HELP_2b_Desc_4              : 'Csomagold ki, és indítsd el az "index.html" fájlt. ',
HELP_2b_Desc_5              : 'Generálj egy tárcát egy erős jelszóval. ',
HELP_2b_Desc_6              : 'Mentsd le a címet, és a privát kulcs különféle verzióit. Mentsd le a jelszót is, ha esetleg nem emlékeznél rá örökre. ',
HELP_2b_Desc_7              : 'Ezeket a paírokat / pendriveoket egymástól fizikailag különböző helyeken tárold. ',
HELP_2b_Desc_8              : 'Menj a "Tárca adatainak megtekintése" oldalra, majd írd be a privát kulcsot/jelszót, hogy le tudd ellenőrizni, hogy minden helyes. Győződj meg róla, hogy a címet is helyesen írtad le. ',

HELP_3_Title                : '3) Hogyan tudom ellenőrizni, hogy hozzáférek a tárcához?How do I verify I have access to my new wallet? ',
HELP_3_Desc_1               : '**Mielőtt bármennyi Ethert küldesz az új tárcádba**, mindenképp ellenőrizd le, hogy később hozzá tudsz majd férni. ',
HELP_3_Desc_2               : 'Menj a "Tárca adatainak megtekintése" oldalra. ',
HELP_3_Desc_3               : 'Menj a MyEtherWallet.com-on a "Tárca adatainak megtekintése" oldalra. ',
HELP_3_Desc_4               : 'Válaszd ki a tárca fájlt -vagy- a privát kulcsot, és nyisd ki a tárcádat. Select your wallet file -or- your private key and unlock your wallet. ',
HELP_3_Desc_5               : 'Ha a tárca titkosított, automatikusan megjelenik egy szövegdoboz. Ide írd be a jelszót. ',
HELP_3_Desc_6               : 'Kattints a "Tárca feloldása" gombra. ',
HELP_3_Desc_7               : 'Ezután megjelennek a tárcádhoz kapcsolódó információk. A címedet a színes, kör alakú ikon mellett fogod megtalálni. Ez az ikon a címed képi reprezentációja. Bizonyosodj meg róla, hogy ez a cím megegyezik az általad lementett címmel, és azzal ami a papír tárcán is szerepel. ',
HELP_3_Desc_8               : 'Ha egy nagyobb összeget szeretnél a tárolni, akkor azt javasoljuk, hogy előtte próbálj meg egy kisebb összeget küldeni az új tárcából. Ehhez küldj az új címedre 0.001 Etheret, nyisd ki a tárcát, és küldd tovább ezt a 0.001 Ethert egy másik címre. Így biztos lehetsz benne, hogy minden jól működik. ',

HELP_4_Title                : '4) Hogyan tudok Ethert küldeni az egyik tárcámból egy másikba? ',
HELP_4_Desc_1               : 'Ha egy nagyobb összeget szeretnél küldeni, előtte mindig próbáld ki a küldést egy kisebb összeggel. Így biztos lehetsz benne, hogy minden jól fog működni. ',
HELP_4_Desc_2               : 'Menj az "Ether & Tokenek küldése" oldalra. ',
HELP_4_Desc_3               : 'Válaszd ki a tárca fájlt -vagy- a privát kulcsot, és nyisd ki a tárcádat. ',
HELP_4_Desc_4               : 'Ha a tárca titkosított, automatikusan megjelenik egy szövegdoboz. Ide írd be a jelszót. ',
HELP_4_Desc_5               : 'Kattints a "Tárca feloldása" gombra. ',
HELP_4_Desc_6               : 'Írd be a címet ahova küldeni szeretnél az "Erre a címre" mezőbe. ',
HELP_4_Desc_7               : 'Írd be az összeget, amennyit küldeni szeretnél. Ha a teljes egyenleget át szeretnéd küldeni, akkor használhatod a "Teljes egyenleg küldése" gombot is. ',
HELP_4_Desc_9               : 'Kattints a "Tranzakció generálása" gombra. ',
HELP_4_Desc_10              : 'Meg fog jelenni még néhány mező. Ezeket a böngésződ tölti ki, miközben legenerálja a tranzakciót. ',
HELP_4_Desc_11              : 'Kattints az ezek alatt levő kék "Tranzakció küldése" gombra. ',
HELP_4_Desc_12              : 'Felugrik egy pop-up, ahol le tudod ellenőrizni a címet és az összeget. Ha minden jó, kattints az "Igen, biztos vagyok benne! Tranzakció indítása." gombra. ',
HELP_4_Desc_13              : 'A tranzakció el lesz küldve, és megjelenik egy TX Hash. Erre a TX Hash-re kattintva megnézheted a tranzakciót a blokkláncon. ',

HELP_4CX_Title              : '4) Hogyan tudok Ethert küldeni a MyEtherWalet CX-szel? ',
HELP_4CX_Desc_1             : 'Első lépésként hozzá kell adj egy tárcát. Ha ez megvan, két lehetőséged van: a "GyorsKüldés" funkció a Chrome Bővítmény ikonon, vagy az "Ether & Tokenek küldése" oldal. ',
HELP_4CX_Desc_2             : 'GyorsKüldés: ',
HELP_4CX_Desc_3             : 'Kattints a Chrome Bővítmény ikonra. ',
HELP_4CX_Desc_4             : 'Kattints a "GyorsKüldés" gombra. ',
HELP_4CX_Desc_5             : 'Válaszd ki a tárcát ahonnan küldeni szerentél. ',
HELP_4CX_Desc_6             : 'Írd be a címet ahova küldeni szeretnél az "Erre a címre" mezőbe. ',
HELP_4CX_Desc_7             : 'Írd be az összeget, amennyit küldeni szeretnél. Ha a teljes egyenleget át szeretnéd küldeni, akkor használhatod a "Teljes egyenleg küldése" gombot is. ',
HELP_4CX_Desc_8             : 'Kattints a "Tranzakció küldése" gombra. ',
HELP_4CX_Desc_9             : 'Ellenőrizd, hogy a cím és a küldendő összeg helyes. ',
HELP_4CX_Desc_10            : 'Írd be a tárcád jelszavát. ',
HELP_4CX_Desc_11            : 'Kattints a "Tranzakció küldése" gombra. ',
HELP_4CX_Desc_12            : 'A "Tranzakció küldése" oldalon ',

HELP_5_Title                : '5) Hogyan lehet a MyEtherWallet-et offline/lokálisan használni? ',
HELP_5_Desc_1               : 'Futtahatod a MyEtherWallet.com-ot a saját számítógépeden is, a GitHub szerverei nélkül. Így lehetőséged van teljesen offline generálni tárcákat, vagy Ethert küldeni az "Offline tranzakció" oldalról. ',
HELP_5_Desc_7               : 'A MyEtherWallet.com most teljesen a te számítógépedről fut. ',
HELP_5_Desc_8               : 'Ha esetleg nem csináltál volna még ilyet: a teljes mappára szükséged van az oldal futtatásához, nem elég csak az "index.html" fájl. A mappában ne piszkálj / mozgass el semmit. Ha biztonsági másolatot szeretnél a MyEtherWallet repo-ról későbbre, akkor az eredeti zip fájl tárolását javasoljuk, így biztos lehetsz benne hogy a tartalma érintetlen marad. ',
HELP_5_Desc_9               : 'Mivel folyamatosan frissítjük a MyEtherWallet.com-ot, ezért javasoljuk, hogy időközönként frissítsd a lementett repo-t is. ',

HELP_5CX_Title              : '5) Hogyan tudom ezt a kiegészítőt a repo-ból telepíteni a Chrome Store helyett? ',
HELP_5CX_Desc_2             : 'Kattints a `chrome-extension-vX.X.X.X.zip`. ',
HELP_5CX_Desc_3             : 'A Goole Chrome-ban menj a Beállításokba (a jobb fenti menüből). ',
HELP_5CX_Desc_4             : 'Kattints a "Bővítmények"-re a bal oldalon. ',
HELP_5CX_Desc_5             : 'Az oldal tetején jelöld be a "Fejlesztői mód" opciót. ',
HELP_5CX_Desc_6             : 'Kattints a "Kicsomagolt bővítmények betöltése..." gombra. ',
HELP_5CX_Desc_7             : 'Keresd meg az előző lépésekben letöltött és már kicsomagolt mappát. Klikelj az "OK"-ra. ',
HELP_5CX_Desc_8             : 'A bővítmény meg kell jelenjen a többi bővítmény közt és a Chrome menüben. ',

HELP_7_Title                : '7) How do I send Tokens & add custom tokens? ',
HELP_7_Desc_0               : '[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token. ',
HELP_7_Desc_1               : 'Navigate to the "Ether & Tokenek küldése" page. ',
HELP_7_Desc_2               : 'Unlock your wallet. ',
HELP_7_Desc_3               : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_7_Desc_4               : 'Enter the amount you would like to send. ',
HELP_7_Desc_5               : 'Select which token you would like to send. ',
HELP_7_Desc_6               : 'If you do not see the token listed: ',
HELP_7_Desc_7               : 'Click "Custom". ',
HELP_7_Desc_8               : 'Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist. ',
HELP_7_Desc_9               : 'Click "Save". ',
HELP_7_Desc_10              : 'You can now send that token as well as see it\'s balance in the sidebar. ',
HELP_7_Desc_11              : 'Click "Generate Transaction". ',
HELP_7_Desc_12              : 'A couple more fields will appear. This is your browser generating the transaction. ',
HELP_7_Desc_13              : 'Click the blue "Send Transaction" button below that. ',
HELP_7_Desc_14              : 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. ',
HELP_7_Desc_15              : 'The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain. ',

HELP_8_Title                : '8) What happens if your site goes down? ',
HELP_8_Desc_1               : 'MyEtherWallet is not a web wallet. You don\'t have a login and nothing ever gets saved to our servers. It is simply an interface that allows you interact with the blockchain. ',
HELP_8_Desc_2               : 'If MyEtherWallet.com goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn\'t have to "get" your Ether out of MyEtherWallet because it\'s not in MyEtherWallet. It\'s in whatever wallet your generated via our site. ',
HELP_8_Desc_3               : 'You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #12 below. ',
HELP_8_Desc_4               : 'In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren\'t storing any information. If we do take the domain down, it still is, and always will be, publicly available at [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). You can download the ZIP there and run it locally. ',

HELP_8CX_Title              : '8) What happens if MyEtherWallet CX disappears? ',
HELP_8CX_Desc_1             : 'First, all data is saved on your computer, not our servers. I know it can be confusing, but when you look at the Chrome Extension, you are NOT looking at stuff saved on our servers somewhere - it\'s all saved on your own computer. ',
HELP_8CX_Desc_2             : 'That said, it is **very important** that you back up all your information for any new wallets generated with MyEtherWallet CX. That way if anything happens to MyEtherWallet CX or your computer, you still have all the information necessary to access your Ether. See the #2a for how to back up your wallets. ',
HELP_8CX_Desc_3             : 'If for some reason MyEtherWallet CX disappears from the Chrome Store, you can find the source on Github and load it manually. See #5 above. ',

HELP_9_Title                : '9) Is the "Ether & Tokenek küldése" page offline? ',
HELP_9_Desc_1               : 'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times. ',

HELP_10_Title               : '10) How do I make an offline transaction? ',
HELP_10_Desc_1              : 'Navigate to the "Offline Transaction" page via your online computer. ',
HELP_10_Desc_2              : 'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price. ',
HELP_10_Desc_3              : 'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send. ',
HELP_10_Desc_4              : 'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1. ',
HELP_10_Desc_5              : 'Enter the "NONCE" as it was displayed to you on your online computer in step #1. ',
HELP_10_Desc_6              : 'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you. ',
HELP_10_Desc_7              : 'If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format. ',
HELP_10_Desc_8              : 'Select your wallet file -or- your private key and unlock your wallet. ',
HELP_10_Desc_9              : 'Press the "GENERATE SIGNED TRANSACTION" button. ',
HELP_10_Desc_10             : 'The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer. ',
HELP_10_Desc_11             : 'On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction. ',

HELP_12_Title               : '12) How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist? ',
HELP_12_Desc_1              : 'Using an Geth/Mist JSON file from MyEtherWallet v2+.... ',
HELP_12_Desc_2              : 'Go to the "View Wallet Info" page. ',
HELP_12_Desc_3              : 'Unlock your wallet using your **encrypted** private key or JSON file. ',
HELP_12_Desc_4              : 'Go to the "My Wallets" page. ',
HELP_12_Desc_5              : 'Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet. ',
HELP_12_Desc_6              : 'Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file. ',
HELP_12_Desc_7              : 'Open the Ethereum Wallet application. ',
HELP_12_Desc_8              : 'In the menu bar, go "Accounts" -> "Backup" -> "Accounts" ',
HELP_12_Desc_9              : 'This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder. ',
HELP_12_Desc_10             : 'Your account should show up immediately under "Accounts." ',
HELP_12_Desc_11             : 'Using your unencrypted private key... ',
HELP_12_Desc_12             : 'If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page. ',
HELP_12_Desc_13             : 'Select your wallet file -or- enter/paste your private key to unlock your wallet. ',
HELP_12_Desc_14             : 'Copy Your Private Key (unencrypted). ',
HELP_12_Desc_15             : 'If you are on a Mac: ',
HELP_12_Desc_15b            : 'If you are on a PC: ',
HELP_12_Desc_16             : 'Open Text Edit and paste this private key. ',
HELP_12_Desc_17             : 'Go to the menu bar and click "Format" -> "Make Plain Text". ',
HELP_12_Desc_18             : 'Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog. ',
HELP_12_Desc_19             : 'Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt` ',
HELP_12_Desc_20             : 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. ',
HELP_12_Desc_21             : 'After successful import, delete `nothing_special_delete_me.txt` ',
HELP_12_Desc_22             : 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',
HELP_12_Desc_23             : 'Open Notepad & paste the private key ',
HELP_12_Desc_24             : 'Save the file as `nothing_special_delete_me.txt` at `C:` ',
HELP_12_Desc_25             : 'Run the command, `geth account import C:\\nothing_special_delete_me.txt` ',
HELP_12_Desc_26             : 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. ',
HELP_12_Desc_27             : 'After successful import, delete `nothing_special_delete_me.txt` ',
HELP_12_Desc_28             : 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',

HELP_13_Title               : '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean? ',
HELP_13_Desc_1              : 'This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction. ',

HELP_14_Title               : '14) Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn\'t do this. Is the random number generation for MyEtherWallet safe? ',
HELP_14_Desc_1              : 'While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren\'t unsafe, it\'s just that we (and tons of other crypto experiments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here\'s a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ',

HELP_15_Title               : '15) Why hasn\'t the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan) ',
HELP_15_Desc_1              : 'Accounts will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. ',

HELP_16_Title               : '16) How do I check the balance of my account? ',
HELP_16_Desc_1              : 'You can use a blockchain explorer like [etherscan.io](http://etherscan.io/). Paste your address into the search bar and it will pull up your address and transaction history. For example, here\'s what our [donation account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) looks like on etherscan.io ',

HELP_17_Title               : '17) Why isn\'t my balance showing up when I unlock my wallet? ',
HELP_17_Desc_1              : 'This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io ',

HELP_18_Title               : '18) Where is my geth wallet file? ',

HELP_19_Title               : '19) Where is my Mist wallet file? ',
HELP_19_Desc_1              : 'Mist files are typically found in the file locations above, but it\'s much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored. ',

HELP_20_Title               : '20) Where is my pre-sale wallet file? ',
HELP_20_Desc_1              : 'Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale. ',

HELP_21_Title               : '21) Couldn\'t everybody put in random private keys, look for a balance, and send to their own address? ',
HELP_21_Desc_1              : 'Short version: yes, but finding an account with a balance would take longer than the universe...so...no. ',
HELP_21_Desc_2              : 'Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts. ',
HELP_21_Desc_3              : 'In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems. ',
HELP_21_Desc_4              : 'Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password. ',
HELP_21_Desc_5              : 'And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match. ',
HELP_21_Desc_6              : 'If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion. ',
HELP_21_Desc_7              : '[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space. ',
HELP_21_Desc_8              : 'Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person\'s brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that\'s a separate issue that can wait for another day. ',

HELP_SecCX_Title            : 'Security - MyEtherWallet CX ',
HELP_SecCX_Desc_1           : 'Where is this extension saving my information? ',
HELP_SecCX_Desc_2           : 'The information you store in this Chrome Extension is saved via [chrome.storage](http://chrome.storage/). - this is the same place your passwords are saved when you save your password in Chrome. ',
HELP_SecCX_Desc_3           : 'What information is saved? ',
HELP_SecCX_Desc_4           : 'The address, nickname, private key is stored in chrome.storage. The private key is encrypted using the password you set when you added the wallet. The nickname and wallet address is not encrypted. ',
HELP_SecCX_Desc_5           : 'Why aren\'t the nickname and wallet address encrypted? ',
HELP_SecCX_Desc_6           : 'If we were to encrypt these items, you would need to enter a password each time you wanted to view your account balance or view the nicknames. If this concerns you, we recommend you use MyEtherWallet.com instead of this Chrome Extension. ',

HELP_Sec_Title              : 'Security ',
HELP_Sec_Desc_1             : 'If one of your first questions is "Why should I trust these people?", that is a good thing. Hopefully the following will help ease your fears. ',
HELP_Sec_Desc_2             : 'We\'ve been up and running since August 2015. If you search for ["myetherwallet" on reddit](https://www.reddit.com/search?q=myetherwallet), you can see numerous people who use us with great success. ',
HELP_Sec_Desc_3             : 'We aren\'t going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" pages are completely client-side. That means that all the code is executed on ** your computer** and it is never saved and transmitted anywhere. ',
HELP_Sec_Desc_4             : 'Check the URL -- This site is being served through GitHub and you can see the source code here: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) to [https://www.myetherwallet.com](https://www.myetherwallet.com). ',
HELP_Sec_Desc_5             : 'For generating wallets, you can download the [source code and run it locally](https://github.com/kvhnuke/etherwallet/releases/latest). See #5 above. ',
HELP_Sec_Desc_6             : 'Generate a test wallet and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred. ',
HELP_Sec_Desc_8             : 'If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks! ',

HELP_FAQ_Title              : 'More Helpful Answers to Frequent Questions ',
HELP_Contact_Title          : 'Ways to Get in Touch'
};

module.exports = hu;
