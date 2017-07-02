// Finnish
'use strict';
var fi = function() {}
fi.code = 'fi';
fi.data = {

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
WALL_Add               : 'Lisää Lompakko ',
BULK_Generate            : 'Massa Generoi ',
x_Contact                 : 'Yhteystiedot ',
CONTRACT_Title               : 'Contracts ',
CONTRACT_Deploy          : 'Deploy Contract ',
CONTRACT_Deploy          : 'Ota Käyttöön Sopimus ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Luo Lompakko ',
x_Help                    : 'Apua ',
CONTRACT_Interact        : 'Interact with Contract ',
CONTRACT_Multisig                : 'Multisig ',
WALL_walletViewCX               : 'Minun Lompakkoni ',
x_Offline                 : 'Lähetä Offlinena ',
TX_Send_Title             : 'Lähetä Etheriä ja Tokeneita ',
TX_Send_ShortTokens              : 'Lähetä Tokeneita ',
MSG_Sign                 : 'Sign Message ',
SWAP_Title                    : 'Swap ',
WALL_View              : 'Tarkastele Lompakon Tietoja ',
WALL_Your             : 'Sinun Lompakkosi ',

/* General */
x_Access                    : 'Access ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Saatat tuntea tämän "Tilinumeronasi" tai "Julkisena Salausavaimenasi". Tämä on se jonka jaat ihmisille, jotta he voivat lähettää sinulle ETHiä. Tuo kuvake on helppo tapa tunnistaa sinun osoitteesi. ',
ADDR_                   : 'Sinun osoitteesi ',
x_Cancel                    : 'Peruuta ',
x_CSV                       : 'CSV tiedosto (salaamaton) ',
x_Download                  : 'Lataa ',
x_Json                      : 'JSON Tiedosto (salaamaton) ',
x_JsonDesc                  : 'Tämä on salaamaton JSON tiedosto yksityisestä salausavaimestasi. Tämä tarkoittaa että et tarvitse salasanaa mutta kuka tahansa joka löytää JSON tiedostosi saa pääsyn lompakkoosi ja sen sisältämään Etheriin ilman salasanaa. ',
x_Keystore                  : 'Avainsäilö Tiedosto (UTC / JSON · Suositeltu · Salattu) ',
x_Keystore2                 : 'Avainsäilö Tiedosto (UTC / JSON) ',
x_KeystoreDesc              : 'Tämä Avainsäilö tiedosto vastaa sitä tiedostoformaattia jota Mist käyttävät, joten voit helposti importata sen tulevaisuudessa. Se on suositeltu tiedostomuoto ladata ja varmuuskopioida. ',
x_Mnemonic                  : 'Mnemonic Phrase ',
x_ParityPhrase              : 'Parity Phrase ',
PW_                  : 'Salasana ',
x_Print                     : 'Tulosta Paperi Lompakko ',
x_PrintDesc                 : 'ProTip: Klikkaa Tulosta ja tallenna tämä PDF:nä, vaikka et omistaisikaan tulostinta! ',
x_PrintShort                : 'Tulosta ',
x_PrivKey                   : 'Yksityinen salausavain (salaamaton) ',
x_PrivKey2                  : 'Yksityinen salausavain ',
x_PrivKeyDesc               : 'Tämä on salaamaton versio sinun yksityisestä salausavaimestasi, tarkoittaen että salasanaa ei tarvita. Jos joku sattuisi löytämään sinun salaamattoman yksityisen salausavaimesi, he pääsisivät käsiksi sinun lompakkoosi ilman salasanaa. Tästä syystä salatut versiot ovat yleensä suositeltuja. ',
x_Save                      : 'Tallenna ',
x_TXT                       : 'TXT tiedosto (salaamaton) ',
WALL_                    : 'Lompakko ',
WALL_                    : 'Wallet ',

/* Header */
WARN_01               : 'Tarkista URL aina ennen kuin avaat lompakkosi tai luot uuden lompakon. Varo tietojen-kalastelu sivustoja! ',
WARN_04                : 'Varmista että sinulla on **ulkoiset varmuuskopiot** kaikista lompakoista joita säilytät täällä. Monia asioita voi tapahtua joiden seurauksena voit menettää tietoja tässä Chrome Laajennuksessa, mukaan lukien laajennuksen asennuksen poistaminen tai uudelleenasennus. Tämä laajennus on keino jolla saat helpon pääsyn lompakkoosi, **ei** keino varmuuskopioida niitä. ',
FOOTER_Tagline                 : 'Avoimen Lähdekoodin JavaScript Ether Lompakko ',
CX_Tagline                  : 'Avoimen Lähdekoodin JavaScript Chrome Laajennus ',

/* Footer */
FOOTER_1                    : 'Avoimen lähdekoodin, javascript työkalu Ethereum lompakkojen luomista & varojen siirtoja varten. ',
FOOTER_1b                   : 'Luonut ',
FOOTER_2                    : 'Lahjoituksia arvostetaan suuresti: ',
FOOTER_3                    : 'Lompakon luomisen tarjoaa ',
FOOTER_4                    : 'Vastuuvapauslauseke / Disclaimer ',

/* Sidebar */
ACCOUNT_Info         : 'Tilin Tiedot ',
ACCOUNT_Address         : 'Tilin Osoite ',
ACCOUNT_Balance          : 'Tilin Saldo ',
TOKEN_Balance            : 'Tokenien Saldo ',
SIDEBAR_Equiv               : 'Vastaavat Arvot ',
TX_History        : 'Siirto Historia ',
SIDEBAR_donation            : 'MyEtherWallet on ilmainen, avoimen lähdekoodin palvelu joka on omistautunut sinun yksityisyyteesi ja turvallisuuteesi. Mitä enemmän lahjoituksia me vastaanotamme, sitä enemmän aikaa me käytämme uusien toimintojen luomiseksi, kuunnellen teidän palautettanne ja antaen teille juuri sitä mitä te tahdotte. Me olemme vain kaksi ihmistä jotka koittavat muuttaa maailmaa. Auta meitä? ',
SIDEBAR_donate              : 'Lahjoita ',
SIDEBAR_thanks              : 'KIITOS!!! ',

/* Decrypt Panel */
DECRYPT_Access              : 'Kuinka haluaisit saada pääsyn lompakkoosi? ',
DECRYPT_Title               : 'Valitse yksityisen salausavaimesi muoto: ',
WALL_Select              : 'Valitse Lompakko: ',

/* Add Wallet */
DECRYPT_Label_1                 : 'Mitä tahtoisit tehdä? ',
WALL_GenerateNew                 : 'Luo Uusi Lompakko ',
DECRYPT_Radio_2                 : 'Valitse Lompakko Tiedostosi (Avainsäilö / JSON) ',
DECRYPT_Radio_2_alt             : 'Valitse Lompakko Tiedostosi ',
DECRYPT_Radio_2_short           : 'VALITSE LOMPAKKO TIEDOSTO... ',
DECRYPT_Radio_3                 : 'Liitä/Kirjoita Yksityinen Salausavaimesi ',
ACCOUNT_AddWatch                 : 'Lisää Tili Jota Seurata ',
MNEM_Enter                 : 'Paste/Type Your Mnemonic ',
MNEM_Enter_Path            : 'Select HD derivation path ',
MNEM_Enter_PathCustom      : 'Custom',
DECRYPT_Label_2                 : 'Luo Kutsumanimi: ',
DECRYPT_Label_3                 : 'Lompakkosi on salattu, ole hyvä ja syötä salasanasi ',
DECRYPT_Label_4                 : 'Lisää Tili Jota Seurata ',
WARN_03               : 'Voit lisätä minkä tahansa tilin jota "seurata" lompakkojen välilehdessä ilman yksityisen salausavaimesi lähettämistä. Tämä ** ei ** tarkoita että sinulla olisi pääsy tähän lompakkoon, tai että voit siirtää Etheriä siitä. ',
DECRYPT_Label_5                 : 'Syötä Osoite ',
WALL_Unlock                 : 'Avaa Sinun Lompakkosi ',
WALL_Unlock_Short           : 'Avaa ',
ACCOUNT_Add                 : 'Lisää Tili ',

/* Generate Wallets */
GEN_desc                    : 'Jos tahdot luoda useita lompakoita, voit tehdä sen täältä ',
PW_Enter                 : 'Syötä vahva salasana (vähintään 9 merkkiä) ',
PW_Enter           : 'ÄLÄ unohda tallentaa tätä! ',
GEN_SuccessMsg              : 'Onnistui! Sinun lompakkosi on luotu. ',
x_Keystore_Save                 : 'Tallenna Avainsäilö tai Yksityinen salausavaimesi. Älä unohda yllä olevaa salasanaasi. ',
ADDR_Save                 : 'Tallenna Osoitteesi. ',
GEN_Label_4                 : 'Valinnainen: Tulosta paperi lompakkosi, tai säilö QR koodi versio. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Kuinka Monta Lompakkoa Luodaan ',
BULK_Label_2                : 'Luo Lompakot ',
BULK_SuccessMsg             : 'Onnistui! Sinun lompakkosi on luotu. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'Osoitteeseen ',
x_Amount                 : 'Summa Joka Lähetetään ',
x_Amount_short           : 'Summa ',
TOKEN_AddCustom                 : 'Mukautettu ',
x_GasLimit                    : 'Gas ',
TX_Send_All          : 'Lähetä Koko Saldo ',
TX_Generate               : 'Luo Allekirjoitettu Siirto ',
TX_Unsigned                    : 'Käsittelemätön Siirto ',
TX_Signed                 : 'Allekirjoitettu Siirto ',
TX_Send_Short                  : 'Lähetä Siirto ',
TOKEN_AddCustom                 : 'Add Custom Token ',
SENDModal_Title             : 'Varoitus! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Olet lähettämässä ',
SENDModal_Content_2         : 'osoitteeseen ',
SENDModal_Content_3         : 'Oletko varma että haluat tehdä tämän? ',
SENDModal_Content_4         : 'HUOMAUTUS: Jos kohtaat virheen, sinun täytyy todennäköisesti lisätä ETHiä tilillesi kattaaksesi siirron vaatiman gasin hinnan. Gas maksetaan ETHeinä. ',
SENDModal_No                : 'En, vie minut pois täältä! ',
SENDModal_Yes               : 'Kyllä, olen varma! Toteuta siirto. ',

/* Tokens */
ADDR_Short                  : 'Osoite ',
TOKEN_Symbol                : 'Token Tunnus ',
TOKEN_Dec                   : 'Desimaalit ',
TOKEN_hide                  : 'Hide Tokens ',
TOKEN_show                  : 'Show All Tokens ',

/* Send Transaction */
TX_desc                  : 'Jos haluat lähettää Tokeneita, ole hyvä ja käytä "Lähetä Tokeneita" sivua. ',
TX_warning               : 'Jos käytät "Vain ETH" tai "Vain ETC" Toimintoja, niin lähetät sopimuksen kautta. Joillakin palveluilla on vaikeuksia hyväksyä näitä siirtoja. Lue lisää. ',
SEND_Advanced              : '+Edistynyt: Lisää Tietoja ',
x_Data                  : 'Tiedot ',
x_GasLimit                   : 'Gas Limit ',
TX_Send_ShortInfo              : 'Tavallinen siirto käyttäen 21000 gasia maksaa 0.000441 ETHiä. Me käytämme hieman-yli-minimin gasin hintaa 0.000000021 ETHiä varmistaaksemme että se louhitaan nopeasti. Me emme veloita siirto maksua. ',

/* Send Transaction Modals */
TRANSModal_Title            : '"Vain ETH" ja "Vain ETC" Siirrot ',
TRANSModal_Content_0        : 'Huomautus erilaisista siirroista ja eri palveluista: ',
TRANSModal_Content_1        : '**ETH (Tavallinen Siirto): ** Tämä luo oletusarvoisen siirron osoitteesta toiseen. Siinä on oletus gasina 21000. On todennäköistä että kaikki ETH joka lähetetään tällä tavalla, toistetaan ETC ketjussa. ',
TRANSModal_Content_2        : '**Vain ETH: ** Tämä lähettää [Timon Rappin toiston suojaus sopimuksen kautta (kuten VB on suositellut)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) niin että sinä lähetät vain **ETH** ketjussa. ',
TRANSModal_Content_3        : '**Only ETC: ** Tämä lähettää [Timon Rappin toiston suojaus sopimuksen kautta (kuten VB on suositellut)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) niin että sinä lähetät vain **ETC** ketjussa. ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift: ** Lähetä ainoastaan käyttäen Tavallista Siirtoa. Jos lähetät käyttäen "Vain" sopimuksia, sinun täytyy olla yhteydessä heidän asiakastukensa henkilöstöön jotta he joko manuaalisesti lisäävät sinun saldosi tai palauttavat rahasi. [Voit kokeilla myös ShapeShiftin "split" työkalua.](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex:** Ei tunnettuja ongelmia. Käytä mitä vain. ',
TRANSModal_Yes              : 'Siistiä, nyt ymmärrän. ',
TRANSModal_No               : 'Voi ei, olen entistä enemmän hämilläni. Auttakaa minua. ',

/* Offline Transaction */
OFFLINE_Title               : 'Luo ja Lähetä Offline Siirto ',
OFFLINE_Desc                : 'Offline siirtojen luonti voidaan tehdä kolmella eri vaiheella. Teet vaiheet 1 ja 3 käyttäen verkkoon yhdistettyä (online) tietokonetta, ja vaiheen 2 käyttäen offline/airgappattua tietokonetta. Tämä varmistaa ettei sinun yksityinen salausavaimesi ole kosketuksissa internettiin yhdistetyn laitteen kanssa. ',
OFFLLINE_Step1_Title        : 'Vaihe 1: Luo Tiedot (Online Tietokone) ',
OFFLINE_Step1_Button        : 'Luo Tiedot ',
ADDR_From       : 'Osoitteesta ',
OFFLINE_Step1_Label_2       : 'Huomautus: Tämä on MISTÄ osoitteesta, ei MIHIN osoitteeseen. Nonce luodaan osoitteesta josta siirto on peräisin. Jos käytetään airgappattua tietokonetta, se olisi kylmä-varasto tilin osoite. ',
OFFLINE_Step2_Title         : 'Vaihe 2: Luo Siirto (Offline Tietokone) ',
ADDR_To       : 'Osoitteeseen ',
OFFLINE_Step2_Label_2       : 'Arvo / Määrä Joka Lähetetään ',
x_GasPrice                  : 'Gasin hinta ',
x_GasPriceDesc                 : 'Tämä näytettiin kohdassa Vaihe 1 sinun verkkoon yhdistetyssä tietokoneessasi. ',
x_GasLimit       : 'Gas Raja ',
x_GasLimitDesc      : '21000 on oletusarvoinen gas raja. Kun lähetät sopimuksiin tai lisäät tietoa, saattaa tämä määrä joutua olemaan eri. Kaikki käyttämätön gas palautetaan sinulle. ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'Tämä näytettiin kohdassa Vaihe 1 sinun verkkoon yhdistetyssä tietokoneessasi. ',
x_Data       : 'Tiedot ',
x_DataDesc      : 'Tämä on valinnainen. Tietoja käytetään usein kun varoja lähetetään sopimuksiin. ',
OFFLINE_Step2_Label_7       : 'Syötä / Valitse Yksityinen salausavaimesi / JSON. ',
OFFLINE_Step3_Title         : 'Vaihe 3: Lähetä / Julkaise Siirto (Verkkoon yhdistetty (online) tietokone) ',
OFFLINE_Step3_Label_1       : 'Liitä allekirjoitettu siirto Vaiheesta 2 tähän ja paina "LÄHETÄ SIIRTO" nappia. ',

/* Deploy Contracts */
CONTRACT_GenBytecode                : 'Generoi Bytecode ',
CONTRACT_GenBytecoded               : 'Generoitu Bytecode ',
TX_Sign                  : 'Allekirjoita Siirto ',
CONTRACT_GenInterface               : 'Generoitu Rajapinta ',

/* My Wallet */
WALL_Nickname                  : 'Lompakon Kutsumanimi ',
MYWAL_Address               : 'Lompakon Osoite ',
ACCOUNT_Balance                   : 'Saldo ',
WALL_Edit_Short                  : 'Muokkaa ',
WALL_View_Short                  : 'Katso ',
WALL_Remove                : 'Poista ',
WALL_RemoveWal             : 'Poista Lompakko: ',
WALL_WatchOnlyAccounts             : 'Sinun Seuraa-Ainoastaan Tilisi ',
WALL_Viewing               : 'Tarkastellaan Lompakkoa ',
WALL_Hide                  : 'Piilota Lompakon Tiedot ',
WALL_Edit                : 'Muokkaa Lompakkoa ',
WALL_Name                  : 'Lompakon Nimi ',
WARN_06             : 'Varoitus! Olet poistamassa lompakkoasi. ',
WARN_07             : 'Varmista että olet **tallentanut tähän lompakkoon liittyvät yksityisen salausavaimesi/JSON tiedostosi ja salasanasi** ennen kuin poistat sen. ',
WARN_08             : 'Jos tahdot käyttää tätä lompakkoa MyEtherWallet CX:si kanssa tulevaisuudessa, sinun täytyy manuaalisesti uudelleen-lisätä se käyttäen yksityistä salausavaintasi/JSONia ja salasanaa. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Tämä antaa sinun ladata eri versiota yksityisistä salausavaimistasi ja uudelleen-tulostaa paperi lompakkosi. Saatat tahtoa tehdä tämän [tuodaksesi sinun tilisi Gethiin/Mistiin](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Jos haluat tarkistaa saldosi, me suosittelemme käyttämään blockchain exploreria kuten [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Tämä antaa sinun ladata eri versiota yksityisistä salausavaimistasi ja uudelleen-tulostaa paperi lompakkosi. ',
VIEWWALLET_SuccessMsg       : 'Onnistui! Tässä ovat lompakkosi yksityiskohdat. ',

/* Chrome Extension */
ERROR_CX_01                  : 'Sinulla ei ole lompakkoja tallennettuna. Klikkaa ["Lisää Lompakko"](/cx-wallet.html#add-wallet) lisätäksesi! ',
CX_quicksend                : 'PikaLähetä ', // if no appropriate translation, just use "Send"

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
CONTRACT_GenBytecode                : 'Generate Bytecode ',
CONTRACT_GenBytecoded               : 'Generated Bytecode ',
TX_Sign                  : 'Sign Transaction ',
CONTRACT_GenInterface               : 'Generated Interface ',

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

/* Mnemonic */
MNEM_1                      : 'Please select the address you would like to interact with. ',
MNEM_2                      : 'Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. ',
MNEM_more                   : 'More Addresses ',
MNEM_prev                   : 'Previous Addresses ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S ',
DECRYPT_Ledger_1                : 'Connect your Ledger Nano S ',
DECRYPT_Ledger_2                : 'Open the Ethereum application (or a contract application) ',
DECRYPT_Ledger_3                : 'Verify that Browser Support is enabled in Settings ',
DECRYPT_Ledger_4                : 'If no Browser Support is found in settings, verify that you have [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_0a               : 'Re-open MyEtherWallet on a secure (SSL) connection ',
DECRYPT_Ledger_0b               : 'Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/) ',
DECRYPT_Ledger_scan             : 'Connect to Ledger Nano S ',
x_Trezor                    : 'TREZOR ',
DECRYPT_Trezor_scan             : 'Connect to TREZOR ',
DECRYPT_Trezor_select           : 'This is a TREZOR seed ',

/* Chrome Extension */
ERROR_CX_01                  : 'You don\'t have any wallets saved. Click ["Add Wallet"](/cx-wallet.html#add-wallet) to add one! ',
CX_quicksend                : 'QuickSend ', // if no appropriate translation, just use "Send"

/* Misc */
FOOTER_1b                   : 'Created by ',
FOOTER_4                    : 'Disclaimer ',

/* Error Messages */
ERROR_0                     : 'Ole hyvä ja syötä kelpaava summa. ',
ERROR_1                     : 'Salasanasi pitää olla vähintään 9 merkkiä pitkä. Ole hyvä ja varmista että käytät vahvaa salasanaa. ',
ERROR_2                     : 'Pahoittelut! Emme tunnista tämänlaista lompakko tiedostoa. ',
ERROR_3                     : 'Tämä ei ole validi lompakko tiedosto. ',
ERROR_4                     : 'Tätä yksikköä ei ole olemassa, ole hyvä ja käytä jotain seuraavista yksiköistä ',
ERROR_5                     : 'Virheellinen osoite. ',
ERROR_6                     : 'Virheellinen salasana. ',
ERROR_7                     : 'Virheellinen summa. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Virheellinen gas raja. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Virheellinen tieto arvo. (Must be hex.) ', // 9
ERROR_10                    : 'Virheellinen gasin määrä. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Virheellinen nonce. (Must be integer.) ', // 11
ERROR_12                    : 'Virheellinen allekirjoitettu siirto. ',
ERROR_13                    : 'Lompakko tällä kutsumanimellä on jo olemassa. ',
ERROR_14                    : 'Lompakkoa ei löytynyt. ',
ERROR_15                    : 'Ei näytä että ehdotusta tällä ID:llä olisi vielä olemassa tai tapahtui virhe ehdotusta luettaessa. ',
ERROR_16                    : 'Lompakko jolla on tämä osoite on jo muistissa. Ole hyvä ja tarkista oma lompakko sivusi. ',
ERROR_17                    : 'Riittämätön saldo gas * hinta + arvo. Sinulla täytyy olla vähintään 0.01 ETHiä tililläsi kattaaksesi gasin hinnan. Ole hyvä ja lisää hieman ETHiä ja kokeile uudelleen. ',
ERROR_18                    : 'Kaikki gas käytettäisiin tässä siirrossa. Tämä tarkoittaa että olet jo äänestänyt tässä ehdotuksessa tai debaatti aika on jo päättynyt. ',
ERROR_19                    : 'Virheellinen merkki ',
ERROR_20                    : 'Not a valid ERC-20 token', // 20
ERROR_21                    : 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.', // 21
ERROR_22                    : 'Please enter a valid node name', // 22
ERROR_23                    : 'Please enter a valid URL. If you are on https, your URL must be https', // 23
ERROR_24                    : 'Please enter a valid port. ', // 24
ERROR_25                    : 'Please enter a valid chain ID. ', // 25
ERROR_26                    : 'Please enter a valid ABI. ', // 26
ERROR_27                    : 'Minimum amount: 0.01. Max amount: ', // 27
ERROR_28                    : '**Tarvitset Avainsäilö Tiedostosi & salasanan tai Yksityisen salausavaimesi** saadaksesi pääsyn tähän lompakkoon tulevaisuudessa. Ole hyvä ja tallenna sekä varmuuskopioi se ulkoisesti! Ei ole mitään keinoa palauttaa sitä jos et tallenna sitä. Voit lukea ohjeet [Apua sivulta](https://www.myetherwallet.com/#help). ',
ERROR_29                    : 'Please enter a valid user and password. ', // 29
ERROR_30                    : 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
ERROR_31                    : 'Please enter a valid secret phrase. ', // 31
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : 'Validi osoite ',
SUCCESS_2                   : 'Lompakon salaus onnistuneesti purettu ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ', //'Siirto lähetetty. TX Hash ',
SUCCESS_4                   : 'Lompakkosi lisätty onnistuneesti ',
SUCCESS_5                   : 'Valittu Tiedosto ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
WARN_02              : 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. ',

/* Geth Error Messages */
GETH_InvalidSender          : 'Virheellinen lähettäjä ',
GETH_Nonce                  : 'Nonce liian pieni ',
GETH_Cheap                  : 'Gasin hinta liian matala hyväksyttäväksi ',
GETH_Balance                : 'Riittämätön saldo ',
GETH_NonExistentAccount     : 'Tiliä ei ole olemassa tai tilin saldo liian pieni ',
GETH_InsufficientFunds      : 'Riittämätön saldo gas * hinta + arvo ',
GETH_IntrinsicGas           : 'Olennainen gas liian pieni ',
GETH_GasLimit               : 'Ylittää blockin gas rajan ',
GETH_NegativeValue          : 'Negatiivinen arvo ',

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
z_TRANSLATEDesc             : 'Kiitos kääntäjillemme... ',
z_TRANSLATE1            : '[Smokyish](https://www.myetherwallet.com/?gaslimit=21000&to=0xac9a2c1dd946da64c0dc8e70cec2cfb14304fd4f&value=0.1#send-transaction)',
z_TRANSLATE2            : '',
z_TRANSLATE3            : '',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''
};

module.exports = fi;
