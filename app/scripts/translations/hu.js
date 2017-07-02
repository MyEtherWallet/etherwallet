// Hungarian
'use strict';
var hu = function() {}
hu.code = 'hu';
hu.data = {

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
WALL_Your             : 'Tárcáid ',
WALL_Add               : 'Tárca hozzáadása ',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Tárca generálása ',
BULK_Generate            : 'Több tárca generálása ',
TX_Send_Title             : 'Ether & Tokenek küldése ',
TX_Send_ShortTokens              : 'Tokenek küldése ',
x_Offline                 : 'Offline tranzakció ',
CONTRACT_Deploy          : 'Kontraktus Telepítése ',
CONTRACT_Interact        : 'Interact with Contract ',
CONTRACT_Title               : 'Kontraktus ',
CONTRACT_Multisig                : 'Multisig ',
WALL_walletViewCX               : 'Tárcáim ',
WALL_View              : 'Tárca adatainak megtekintése ',
x_Help                    : 'Segítség ',
x_Contact                 : 'Kapcsolat ',
ENS_Title                     : 'ENS',
SWAP_Title                    : 'Swap ',
MSG_Sign                 : 'Sign Message ',

/* General */
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Úgy is ismerheted ezt, mint "Számlaszám" vagy "Publikus Kulcs". Ez az amit a partnereidnek küldesz, hogy tudjanak ETH-et küldeni neked. Az oldalsó ikon egyszerű módja a saját címed felismerésének. ',
ADDR_                   : 'A Te címed ',
x_Cancel                    : 'Mégse ',
x_CSV                       : 'CSV fájl (titkosítatlan) ',
x_Download                  : 'Letöltés ',
x_Json                      : 'JSON Fájl (titkosítatlan) ',
x_JsonDesc                  : 'Ez a titkosítotatlan, JSON formátumú változata a privát kulcsodnak. Ez azt jelenti, hogy nincs szükség jelszóra az eléréséhez, viszont ha bárki megtalálja a JSON fájlt, akkor hozzáférhet a tárcádhoz és az Etheredhez a jelszó ismerete nélkül. ',
x_Keystore                  : 'Keystore Fájl (UTC / JSON · Ajánlott · Titkosított) ',
x_Keystore2                 : 'Keystore Fájl (UTC / JSON) ',
x_KeystoreDesc              : 'Ez a Keystore fájl ugyanolyan formátumú, amit a Mist használ, tehát könnyedén importálhatod a későbbiekben. Leginkább ezt a fájlt ajánlott letölteni és elmenteni. ',
x_Mnemonic                  : 'Mnemonikus frázis ',
x_ParityPhrase              : 'Parity Phrase ',
PW_                  : 'Jelszó ',
x_Print                     : 'PapírTárca Nyomtatása ',
x_PrintDesc                 : 'Profi Tipp: Kattints a nyomtatásra és mentsd el PDF formátumban, még abban az esetben is, ha nincs nyomtatód! ',
x_PrintShort                : 'Nyomtatás ',
x_PrivKey                   : 'Privát Kulcs (titkosítatlan) ',
x_PrivKey2                  : 'Privát Kulcs ',
x_PrivKeyDesc               : 'Ez a titkosítatlan szöveges változata a privát kulcsodnak, ami azt jelenti, hogy az eléréséhez nem szükséges jelszó. Ha valaki megtalálta a titkosítatlan privát kulcsodat jelszó nélkül is hozzáférhet a tárcádhoz. Ezért a titkosított változat ajánlott. ',
x_Save                      : 'Mentés ',
x_TXT                       : 'TXT fájl (titkosítatlan) ',
WALL_                    : 'Tárca ',
x_Access                    : 'Access ',

/* Header */
WARN_01               : 'Mindig ellenőrizd az URL-t mielőtt megpróbálod elérni a tárcádat vagy új tárcát hozol létre. Óvakodj az adathalász oldalalaktól! ',
WARN_04                : 'Győződj meg róla, hogy van **külső adatmentésed** minden tárcáról, amit itt tárolsz. Több dolog is történhet, ami adatvesztést eredményezhet a Chrome Bővítményben, többek között a Bővítmény törlése vagy újratelepítése. A bővítmény egyszerű módja annak, hogy elérd a tárcáidat, de **nem** annak, hogy elmentsd azokat. ',
FOOTER_Tagline                 : 'Nyílt forrású JavaScript-alapú, Kliens-oldali Ether Tárca ',
CX_Tagline                  : 'Nyílt forrású JavaScript-alapú, Kliens-oldali Ether Tárca Chrome Bővítmény ',

/* Footer */
FOOTER_1                    : 'Egy nyílt forrású, javascript-alapú, kliens-oldali eszköz Ethereum Tárcák létrehozására és tranzakicók végrehajtására. ',
FOOTER_1b                   : 'Készítette: ',
FOOTER_2                    : 'Az adományokat igazán nagyra értékeljük: ',
FOOTER_3                    : 'Kliens-oldali Tárca létrehozása: ',
FOOTER_4                    : 'Jogi nyilatkozat ',

/* Sidebar */
ACCOUNT_Info         : 'Számlainformáció ',
ACCOUNT_Address         : 'Számla címe ',
ACCOUNT_Balance          : 'Számlaegyenleg ',
TOKEN_Balance            : 'Token Egyenleg ',
SIDEBAR_Equiv               : 'Ezzel egyenértékű ',
TX_History        : 'Tranzakció Történet ',
SIDEBAR_donation            : 'A MyEtherWallet egy szabad, nyílt forrású szolgáltatás az adatod védelmének és a biztonságodnak szentelve. Minél több adomány érkezik, annál több időt tudunk fordítani új funkciók létrehozására, a visszajelzéseidre és olyan szolgáltatást nyújtani, amilyet szeretnél. Mindössze két ember, akik megpróbálnak változtatni a világon. Segítesz nekünk? ',
SIDEBAR_donate              : 'Adományozok ',
SIDEBAR_thanks              : 'KÖSZÖNJÜK!!! ',

/* Decrypt Panel */
DECRYPT_Access              : 'Hogyan szeretnéd elérni a tárcádat? ',
DECRYPT_Title               : 'Válaszd ki a privát kulcsod formátumát: ',
WALL_Select              : 'Válassz egy Tárcát: ',

/* Add Wallet */
DECRYPT_Label_1                 : 'Mit szeretnél tenni? ',
WALL_GenerateNew                 : 'Új Tárca Létrehozása ',
DECRYPT_Radio_2                 : 'Válaszd ki a Tárca fájlodat (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : 'Válaszd ki a Tárca fájlt ',
DECRYPT_Radio_2_short           : 'TÁRCA FÁJL KIVÁLASZTÁSA... ',
DECRYPT_Radio_2_success         : 'Kiválasztott Tárca ',
DECRYPT_Radio_3                 : 'Illeszd be vagy írd be a Privát Kulcsodat ',
ACCOUNT_AddWatch                 : 'Tárca hozzáadása megfigyelésre ',
MNEM_Enter                 : 'Másold/írd be a mnemonikus frázist ',
MNEM_Enter_Path            : 'Select HD derivation path ',
MNEM_Enter_PathCustom      : 'Custom',
DECRYPT_Label_2                 : 'Hozz létre egy Nicknevet: ',
DECRYPT_Label_3                 : 'A Tárcád titkosítva van. Írj be a jelszót ',
DECRYPT_Label_4                 : 'Számla hozzáadása megfigyelésre ',
WARN_03               : 'Bármelyik számlát hozzáadhatod "megfigyelésre" a tárcák lapon, anélkül, hogy felöltenél privát kulcsot. Ez **nem azt jelenti**, hogy van hozzáférésed ehhez a tárcához és azt sem, hogy tudsz Ethert küldeni vele. ',
DECRYPT_Label_5                 : 'Add meg a címet ',
WALL_Unlock                 : 'Tárcád feloldása ',
WALL_Unlock_Short           : 'Feloldás ',
ACCOUNT_Add                 : 'Számla Hozzáadása ',

/* Generate Wallets */
GEN_desc                    : 'Ha több tárcát szeretnél egyszerre generálni, azt megteheted itt ',
PW_Enter                 : 'Adj meg egy erős jelszót! (legalább 9 karakter) ',
PW_Enter           : 'NE felejtsd el elmenteni! ',
GEN_SuccessMsg              : 'Sikerült! A Tárcád legenerálódott. ',
x_Keystore_Save                 : 'Mentsd el a Keystore fájlt vagy a Privát Kulcsot. Ne felejtsd el a fenti jelszót! ',
ADDR_Save                 : 'Mentsd el a címed. ',
GEN_Label_4                 : 'Választható: Nyomtasd ki a papír tárcádat vagy tárold a QR kód változatot. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Generálni kívánt tárcák száma ',
BULK_Label_2                : 'Tárcák generálása ',
BULK_SuccessMsg             : 'Sikerült! A tárcáid legenerálódtak. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'Erre a címre ',
x_Amount                 : 'Küldendő összeg ',
x_Amount_short           : 'Összeg ',
TOKEN_AddCustom                 : 'Saját Token ',
x_GasLimit                    : 'Gas ',
TX_Send_All          : 'Teljes egyenleg küldése ',
TX_Generate               : 'Tranzakció generálása ',
TX_Unsigned                    : 'Raw/Nyers Tranzakció ',
TX_Signed                 : 'Aláírt Tranzakció ',
TX_Send_Short                  : 'Tranzakció Küldése ',
SENDModal_Title             : 'Figyelmeztetés! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Most készülsz küldeni ',
SENDModal_Content_2         : '-t az alábbi címre: ',
SENDModal_Content_3         : 'Biztos vagy benne? ',
SENDModal_Content_4         : 'JEGYZET: Ha hibával találkozol valószínűleg ethert kell küldened a számládra, hogy fedezni tudd a gas-költségét a token küldésének. A Gas etherben fizetendő. ',
SENDModal_No                : 'Nem, vigyél ki innen! ',
SENDModal_Yes               : 'Igen, biztos vagyok benne! Tranzakció indítása. ',

/* Tokens */
ADDR_Short                  : 'Cím ',
TOKEN_Symbol                : 'Token Szimbólum ',
TOKEN_Dec                   : 'Tizedesjegyek ',
TOKEN_show                  : 'Minden Token megjelenítése ',
TOKEN_hide                  : 'Tokenek elrejtése ',

/* Send Transaction */
TX_desc                  : 'Ha Tokeneket akarsz küldeni, kérlek használd a Token Küldése oldalt ehelyett. ',
TX_warning               : 'Ha a "Csak ETH" vagy a "Csak ETC" Funkciókat használod a küldés kontraktuson keresztül megy végbe. Néhány szolgáltatásnak problémái lehetnek az ilyen tranzakciók elfogadásával. Kattints és tudj meg többet. ',
SEND_Advanced              : '+Haladó: Több Adat ',
x_Data                  : 'Adat ',
x_GasLimit                   : 'Gas Limit ',
TX_Send_ShortInfo              : 'Egy standard tranzakció 21000 gas-t használ, ami 0.000441 ETH-be fog kerülni. Mi 0.000000021 ETH-nél (a minimálisnál) enyhén magasabb gas árat használunk, annak biztosítása érdekében, hogy gyorsan ki legyen bányászva. Tranazkciós költséget nem számolunk fel. ',

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
ADDR_From       : 'Erről a címről ',
OFFLINE_Step1_Label_2       : 'Jegyzet: Ez a FELADÓ címe, nem a FOGADÓÉ. A nonce a feladó számlájából generálódik. Ha airgap-elt számítógépet használsz, ez a cím a hidegtárcás számla címe legyen. ',
OFFLINE_Step2_Title         : 'Lépés 2: Tranzakció Generálása (Offline Számítógép) ',
ADDR_To       : 'Erre a címre ',
OFFLINE_Step2_Label_2       : 'Érték / Összeg küldésre ',
x_GasPrice                  : 'Gas Ár ',
x_GasPriceDesc                 : 'Ez volt látható az online számítógépen az első lépésben. ',
x_GasLimit       : 'Gas Limit ',
x_GasLimitDesc      : '21000 az alapértelmezett gas limit. Amikor kontraktust küldesz vagy adatot adsz hozzá ezeknek különbözőeknek kell lennie. A nem használt gas visszatérül hozzád. ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'Ez volt látható az online számítógépen az első lépésben. ',
x_Data       : 'Adat ',
x_DataDesc      : 'Ez választható. Az adat mező gyakran használt, amikor tranzakciót küldesz kontraktusokba. ',
OFFLINE_Step2_Label_7       : 'Írd be / Válaszd ki a Privát Kulcsodat / JSON-fájlt. ',
OFFLINE_Step3_Title         : 'Lépés 3: Küld / Közzétesz (Online Számítógép) ',
OFFLINE_Step3_Label_1       : 'Illeszd be ide az aláírt tranzakciót a második lépésből (Lépés 2) és nyomd meg a "TRANZAKCIÓ KÜLDÉSE" gombot. ',

/* My Wallet */
WALL_Nickname                  : 'Tárca Nickname ',
MYWAL_Address               : 'Tárca Cím ',
ACCOUNT_Balance                   : 'Egyenleg ',
WALL_Edit_Short                  : 'Szerkesztés ',
WALL_View_Short                  : 'Nézet ',
WALL_Remove                : 'Eltávolítás ',
WALL_RemoveWal             : 'Tárca Eltávolítása: ',
WALL_WatchOnlyAccounts             : 'Megfigyelt Számláid ',
WALL_Viewing               : 'Tárca megtekintése ',
WALL_Hide                  : 'Tárca Információ elrejtése ',
WALL_Edit                : 'Tárca szerkesztése ',
WALL_Name                  : 'Tárca Neve ',
WARN_06             : 'Figyelmeztetés! Arra készülsz, hogy eltávolítod a tárcádat ',
WARN_07             : 'Győződj meg róla, hogy **elmentetted a privát kulcsodat és/vagy Keystore fájlodat a jelszóval együtt,** mielőtt törlöd őket. ',
WARN_08             : 'Ha használni akarod ezt a tárcát a MyEtherWallet CX-szel a jövőben, manuálisan újra hozzá kell majd adnod a privát kulcs/JSON-nal és jelszóval. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Ez lehetővé teszi számodra, hogy különböző változatú privát kulcsokat tölts le és újranyomtasd a papírtárcádat.  Ezt megteheted úgy, hogy [importálod a számládat a Geth/Mist-be](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Ha ellenőrizni akarod a számládat, azt ajánljuk, hogy használj blokklánc explorert mint az [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Ez lehetővé teszi számodra, hogy különböző változatú privát kulcsokat tölts le és újranyomtasd a papírtárcádat. ',
VIEWWALLET_SuccessMsg       : 'Sikerült! Itt vannak a tárcád részletei. ',

/* Mnemonic */
MNEM_1                      : 'Válaszd ki a címet amelyiket használni szeretnéd. ',
MNEM_2                      : 'Egyetlen mnemonikus frázis egyszerre több tárcához / címhez ad hozzáférést. Válaszd ki a címet amelyiket most használni szeretnéd. ',
MNEM_more                   : 'További Címek ',
MNEM_prev                   : 'Előző Címek ',

/* Chrome Extension */
ERROR_CX_01                  : 'Nincsen mentett Tárcád. Kattints ["Tárca Hozzáadása"](/cx-wallet.html#add-wallet) ahhoz, hogy hozzáadj egyet! ',
CX_quicksend                : 'GyorsKüldés ', // if no appropriate translation, just use "Send"

/* Node Switcher */
NODE_Title                  : 'Set Up Your Custom Node',
NODE_Subtitle               : 'To connect to a local node...',
WARN_05                : 'Your node must be HTTPS in order to connect to it via MyEtherWallet.com. You can [download the MyEtherWallet repo & run it locally](https://github.com/kvhnuke/etherwallet/releases/latest) to connect to any node. Or, get free SSL certificate via [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Node Name',
NODE_Port                   : 'Node Port',
NODE_CTA                    : 'Save & Use Custom Node',

/* Contracts */
CONTRACT_Title              : 'Contract Address ',
CONTRACT_Title_2            : 'Select Existing Contract ',
CONTRACT_Json               : 'ABI / JSON Interface ',
CONTRACT_Interact_Title     : 'Read / Write Contract ',
CONTRACT_Interact_CTA       : 'Select a function ',
CONTRACT_Bytecode           : 'Bytecode',
CONTRACT_Read               : 'READ ',
CONTRACT_Write              : 'WRITE ',
CONTRACT_GenBytecode                : 'Byte-kód Generálása ',
CONTRACT_GenBytecoded               : 'Generált Byte-kód ',
TX_Sign                  : 'Aláírt Tranzakció ',
CONTRACT_GenInterface               : 'Generált Felület ',

/* Swap / Exchange */
SWAP_rates                  : "Current Rates ",
SWAP_init_1                 : "I want to swap my ",
SWAP_init_2                 : " for ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Let's do this! ", // or "Continue"
SWAP_information            : "Your Information ",
x_Amount               : "Amount to send ",
SWAP_rec_amt                : "Amount to receive ",
SWAP_your_rate              : "Your rate ",
SWAP_rec_add                : "Your Receiving Address ",
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
MSG_message                 : 'Message ',
MSG_date                    : 'Date ',
MSG_signature               : 'Signature ',
MSG_verify                  : 'Verify Message ',
MSG_info1                   : 'Include the current date so the signature cannot be reused on a different date. ',
MSG_info2                   : 'Include your nickname and where you use the nickname so someone else cannot use it. ',
MSG_info3                   : 'Include a specific reason for the message so it cannot be reused for a different purpose. ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S ',
DECRYPT_Ledger_scan             : 'Csatlakozás a Ledger Nano S-hez ',
DECRYPT_Ledger_1                : 'Csatlakoztasd a Ledger Nano S-et ',
DECRYPT_Ledger_2                : 'Nyisd meg az Ethereum applikációt (vagy egy kontraktus applikációt) ',
DECRYPT_Ledger_3                : 'Ellenőrizd, hogy a beállításokban engedélyezve van a Böngésző Támogatás (Browser Support) ',
DECRYPT_Ledger_4                : 'If no Browser Support is found in settings, verify that you have [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_0a               : 'Re-open MyEtherWallet on a secure (SSL) connection ',
DECRYPT_Ledger_0b               : 'Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/) ',
WARN_02              : 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. ',
x_Trezor                    : 'TREZOR ',
DECRYPT_Trezor_scan             : 'Connect to TREZOR ',
DECRYPT_Trezor_select           : 'This is a TREZOR seed ',

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

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : 'Köszönet a fordításért ',
z_TRANSLATE1            : '[belpheg](https://www.myetherwallet.com/?gaslimit=21000&to=0xBF8C35176eAD29257834D5A1592ed50Adb0b6e4f&value=0.1#send-transaction) · ',
z_TRANSLATE2            : '[bluqesh](https://www.myetherwallet.com/?gaslimit=21000&to=0x4270A331d14CcdB6FB941f3f5De9Cf01607Bff9F&value=0.1#send-transaction) ',
z_TRANSLATE3            : '',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''

};

module.exports = hu;
