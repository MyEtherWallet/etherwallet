// Dutch
'use strict';
var nl = function() {}
nl.code = 'nl';
nl.data = {

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
WALL_Add               : 'Wallet Toevoegen ',
BULK_Generate            : 'Bulk Genereren ',
x_Contact                 : 'Contact ',
CONTRACT_Title               : 'Contracten ',
CONTRACT_Deploy          : 'Verspreid Contract ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Genereer Wallet ',
x_Help                    : 'Help ',
CONTRACT_Interact        : 'Interactie met Contract ',
CONTRACT_Multisig                : 'Multisig ',
WALL_walletViewCX               : 'Mijn Wallets ',
x_Offline                 : 'Verzend Offline ',
TX_Send_Title             : 'Verzend Ether & Tokens ',
TX_Send_ShortTokens              : 'Verzend Tokens ',
MSG_Sign                 : 'Onderteken Bericht ',
SWAP_Title                    : 'Omwisselen ',
WALL_View              : 'Bekijk Wallet Info ',
WALL_Your             : 'Jouw Wallets ',

/* General */
x_Access                    : 'Verkrijg Toegang ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Dit is je "Account #" ofwel je "Publieke Sleutel". Maak dit bekend aan anderen zodat ze je ether kunnen sturen. Dit icoon is een makkelijke manier om je adres te herkennen. ',
ADDR_                   : 'Je Adres ',
x_Cancel                    : 'Annuleren ',
x_CSV                       : 'CSV bestand (onversleuteld) ',
x_Download                  : 'Download ',
x_Json                      : 'JSON Bestand (onversleuteld) ',
x_JsonDesc                  : 'Dit is het onversleutelde, JSON formaat van je prive sleutel. Dit betekend dat je het wachtwoord niet nodig hebt, maar ook dat een ieder die je JSON bestand vind toegang heeft tot je wallet & Ether zonder wachtwoord. ',
x_Keystore                  : 'Keystore Bestand (UTC / JSON · Aangeraden · versleuteld) ',
x_Keystore2                 : 'Keystore Bestand (UTC / JSON) ',
x_KeystoreDesc              : 'Dit Keystore bestand voldoet aan het formaat zoals gebruikt door Mist waardoor je het gemakkelijk kunt importeren in de toekomst. Dit is de aanbevolen methode voor download en back up. ',
x_Mnemonic                  : 'Mnemonic Zin ',
x_ParityPhrase              : 'Parity herstelzin ',
PW_                  : 'Wachtwoord ',
x_Print                     : 'Druk je papieren wallet af ',
x_PrintDesc                 : 'ProTip: Klik Afdrukken en sla deze pagina op als PDF, zelfs als je geen printer hebt! ',
x_PrintShort                : 'Afdrukken ',
x_PrivKey                   : 'Prive Sleutel (onversleuteld) ',
x_PrivKey2                  : 'Prive Sleutel ',
x_PrivKeyDesc               : 'Dit is een onversleutelde tekst versie van je prive sleutel waarbij geen wachtwoord benodigd is. Mocht iemand deze unversleutelde prive sleutel vinden, kunnen zij zonder wachtwoord bij je account. Om deze reden zijn versleutelde versies aanbevolen. ',
x_Save                      : 'Opslaan ',
x_TXT                       : 'TXT bestand (onversleuteld) ',
WALL_                    : 'Wallet ',

/* Header */
CX_Tagline                  : 'Open Source JavaScript Client-Side Ether Wallet Chrome Extensie ',
WARN_04                : 'Zorg voor **externe backups** van alle wallets die je hier opslaat. Er kunnen diverse dingen gebeuren die ervoor zorgen dat je gegevens in deze Chrome Extensie verloren gaan, inclusief het deinstalleren en installeren van de extensie. Deze extensie is een manier om je wallet gemakkelijk toegankelijk te maken, **geen** manier om ze te backuppen. ',
FOOTER_Tagline                 : 'Open Source JavaScript Client-Side Ether Wallet ',
WARN_01               : 'Check altijd de URL voordat je jouw wallet opent of een nieuwe wallet genereert. Pas op voor phishing sites! ',

/* Footer */
FOOTER_1                    : 'Een open source, javascript, client-side tool om Ethereum Wallets te genereren & transacties te verzenden. ',
FOOTER_1b                   : 'Gemaakt door ',
FOOTER_2                    : 'Donaties worden zeer gewaardeerd: ',
FOOTER_3                    : 'Client-side wallet genereren door ',
FOOTER_4                    : 'Disclaimer ',

/* Sidebar */
ACCOUNT_Info         : 'Account Informatie ',
ACCOUNT_Address         : 'Account Adres ',
ACCOUNT_Balance          : 'Account Saldo ',
TOKEN_Balance            : 'Token Saldo ',
SIDEBAR_Equiv               : 'Equivalente Waarde ',
TX_History        : 'Transactie Geschiedenis ',
SIDEBAR_donation            : 'MyEtherWallet is een gratis, open-source service toegewijd aan jouw privacy en beveiliging. Des te meer donaties we ontvangen, des te meer tijd we zullen spenderen aan nieuwe functies, aan de hand van jouw terugkoppeling, en we je kunnen geven wat jij wilt. Wij zijn slechts twee mensen die de wereld een stukje beter willen maken. Help jij mee? ',
SIDEBAR_donate              : 'Doneer ',
SIDEBAR_thanks              : 'BEDANKT!!! ',

/* Decrypt Panel */
DECRYPT_Access              : 'Hoe wil je toegang tot je wallet? ',
DECRYPT_Title               : 'Selecteer het formaat van je prive sleutel: ',
WALL_Select              : 'Selecteer een Wallet: ',

/* Mnemonic */
MNEM_1                      : 'Selecteer het adres waarmee je wilt communiceren. ',
MNEM_2                      : 'Met jouw enkele HD mnemonic zin heb je toegang tot meerdere wallets / adressen. Selecteer het adres waarmee je nu wilt communiceren. ',
MNEM_more                   : 'Meer Adressen ',
MNEM_prev                   : 'Vorige Adressen ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S ',
DECRYPT_Ledger_1                : 'Verbind je Ledger Nano S ',
DECRYPT_Ledger_2                : 'Open de Ethereum applicatie (of een contract applicatie) ',
DECRYPT_Ledger_3                : 'Controleer of "Browser Support" is ingeschakeld in je instellingen ',
DECRYPT_Ledger_4                : 'Als je "Browser Support" niet in je instellingen kunt vinden, controleer dan dat je [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) is ',
DECRYPT_Ledger_0a               : 'Her-open MyEtherWallet met een veilige (SSL) verbinding ',
DECRYPT_Ledger_0b               : 'Her-open MyEtherWallet door gebruik te maken van [Chrome](https://www.google.com/chrome/browser/desktop/) of [Opera](https://www.opera.com/) ',
DECRYPT_Ledger_scan             : 'Verbind met Ledger Nano S ',
x_Trezor                    : 'TREZOR ',
DECRYPT_Trezor_scan             : 'Verbind met TREZOR ',

/* Add Wallet */
DECRYPT_Label_1                 : 'Wat wil je doen? ',
WALL_GenerateNew                 : 'Genereer nieuwe wallet ',
DECRYPT_Radio_2                 : 'Selecteer je wallet bestand (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : 'Selecteer je wallet bestand ',
DECRYPT_Radio_2_short           : 'SELECTEER WALLET BESTAND... ',
DECRYPT_Radio_3                 : 'Plak/Type je prive sleutel ',
ACCOUNT_AddWatch                 : 'Voeg een te bekijken account toe ',
MNEM_Enter                 : 'Plak/type Mnemonic ',
MNEM_Enter_Path            : 'Selecteer HD derivation path ',
MNEM_Enter_PathCustom      : 'Custom',
DECRYPT_Label_2                 : 'Verzin een Nickname: ',
DECRYPT_Label_3                 : 'Je wallet is versleuteld. Geef je wachtwoord ',
DECRYPT_Label_4                 : 'Voeg een te bekijken account toe ',
WARN_03               : 'Je kunt elk account toevoegen als "bekijken" in het wallets tabblad zonder de prive sleutel te uploaden. Dit betekend ** niet ** dat je toegang hebt tot deze wallet, noch dat je er Ether vanuit kunt versturen. ',
DECRYPT_Label_5                 : 'Voer het adres in ',
WALL_Unlock                 : 'Ontsleutel je wallet ',
WALL_Unlock_Short           : 'Ontsleutel ',
ACCOUNT_Add                 : 'Voeg account toe ',
PW_Optional                 : 'Wachtwoord (optioneel): ',

/* My Wallet */
WALL_Nickname                  : 'Wallet Nickname ',
MYWAL_Address               : 'Wallet Adres ',
ACCOUNT_Balance                   : 'Saldo ',
WALL_Edit_Short                  : 'Bewerken ',
WALL_View_Short                  : 'Bekijken ',
WALL_Remove                : 'Verwijderen ',
WALL_RemoveWal             : 'Verwijder Wallet: ',
WALL_WatchOnlyAccounts             : 'Je Watch-Only Accounts ',
WALL_Viewing               : 'Te Bekijken Wallet ',
WALL_Hide                  : 'Verberg Wallet Info ',
WALL_Edit                : 'Bewerk Wallet ',
WALL_Name                  : 'Wallet Naam ',
WARN_06             : 'Waarschuwing! Je staat op het punt om je wallet te verwijderen ',
WARN_07             : 'Wees er zeker van dat je **de prive sleutel/JSON bestand en het wachtwoord opgeslagen hebt** van deze wallet voordat je het verwijderd. ',
WARN_08             : 'Als je deze wallet in de toekomst nog wilt gebruiken met MyEtherWallet CX, zul je het met de hand moeten toevoegen door gebruik te maken van de prive sleutel/JSON en wachtwoord. ',

/* Generate Wallets */
GEN_desc                    : 'Als je meerdere wallets wilt genereren, kun je dat hier doen ',
PW_Enter                 : 'Geef een sterk wachtwoord (ten minste 9 karakters) ',
PW_Enter           : 'Vergeet NIET om dit op te slaan! ',
GEN_SuccessMsg              : 'Gelukt! Je wallet is gegenereerd. ',
x_Keystore_Save                 : 'Sla je Keystore of Prive Sleutel op. Vergeet je wachtwoord hierboven niet. ',
ADDR_Save                 : 'Sla je adres op. ',
GEN_Label_4                 : 'Optioneel: Druk je papieren wallet af, of bewaar hem als QR code.',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Aantal te genereren wallets ',
BULK_Label_2                : 'Genereer Wallets ',
BULK_SuccessMsg             : 'Gelukt! Je wallets zijn gegenereerd. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'Aan Adres ',
x_Amount                 : 'Te verzenden bedrag ',
x_Amount_short           : 'Bedrag ',
TOKEN_AddCustom                 : 'Aangepast Token ',
x_GasLimit                    : 'Gas ',
TX_Send_All          : 'Verzend volledig saldo ',
TX_Generate               : 'Genereer Transactie ',
TX_Unsigned                    : 'Raw Transactie ',
TX_Signed                 : 'Gesigneerde Transactie ',
TX_Send_Short                  : 'Verzend Transactie ',
SENDModal_Title             : 'Waarschuwing! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Je staat op het punt om het volgende bedrag over te maken ',
SENDModal_Content_2         : 'aan adres ',
SENDModal_Content_3         : 'Weet je zeker dat je dit wilt doen? ',
SENDModal_Content_4         : 'OPMERKING: Als je een fout bent tegengekomen, zul je waarschijnlijk ether aan je account moeten toevoegen om de gas kosten voor het verzenden van deze transactie te betalen. Gas wordt betaald in ether. ',
SENDModal_No                : 'Nee, haal me hier weg! ',
SENDModal_Yes               : 'Ja, ik weet het zeker! Maak de transactie. ',

/* Tokens */
ADDR_Short                  : 'Adres ',
TOKEN_Symbol                : 'Token Symbool ',
TOKEN_Dec                   : 'Decimalen ',
TOKEN_show                  : 'Toon alle Tokens ',
TOKEN_hide                  : 'Verberg Tokens ',

/* Send Transaction */
TX_desc                  : 'Als je Tokens wilt versturen, gebruik dan de "Verzend Token" pagina i.p.v. deze pagina. ',
TX_warning               : 'Als je gebruik maakt van de "Enkel ETH" of "Enkel ETC" functies zul je de transactie uitvoeren via een contract. Sommige diensten hebben problemen met het accepteren van deze transacties. Lees meer. ',
SEND_Advanced              : '+Geavanceerd: Voeg Data toe ',
x_Data                  : 'Data ',
x_GasLimit                   : 'Gas Limit ',
TX_Send_ShortInfo              : 'Een standaard transactie met 21000 gas zal 0.000441 ETH kosten. Wij gebruiken een iets-boven-minimum gas prijs van 0.000000021 ETH om te garranderen dat de transactie snel uitgevoerd zal worden. Wij zijn niet verantwoordelijk voor je transactie kosten. ',

/* Offline Transaction */
OFFLINE_Title               : 'Genereer & Verzend een Offline Transactie ',
OFFLINE_Desc                : 'Een offline transactie doe je in drie stappen. Stap 1 en 3 doe je op een online computer, terwijl je stap 2 uitvoert op een offline/afgeschermde computer. Dit zorgt ervoor dat je prive sleutel niet in aanraking komt met een met internet verbonden computer. ',
OFFLLINE_Step1_Title        : 'Stap 1: Genereer Informatie (Online Computer) ',
OFFLINE_Step1_Button        : 'Genereer Informatie ',
ADDR_From       : 'Van Adres ',
OFFLINE_Step1_Label_2       : 'Opmerking: Dit is het VAN adress, niet het AAN adres. De Nonce wordt generenereerd van het oorspronkelijke account. Als je een afgeschermde (airgapped) computer gebruikt, zal dit het adres van het cold-storage account zijn. ',
OFFLINE_Step2_Title         : 'Stap 2: Genereer Transactie (Offline Computer) ',
ADDR_To       : 'Aan Adres ',
OFFLINE_Step2_Label_2       : 'Waarde / Te Verzenden Bedrag ',
x_GasPrice                  : 'Gas Prijs ',
x_GasPriceDesc                 : 'Dit werd weergegeven in Stap 1 op je online computer. ',
x_GasLimit       : 'Gas Limiet ',
x_GasLimitDesc      : '21000 is de standaard gas limiet. Als je (naar) een contract verstuurd of data toegoegd, zou je dit anders moeten instellen. Alle onbenutte gas zal aan je worden teruggestuurd. ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'Dit werd weergegeven in Stap 1 op je online computer. ',
x_Data       : 'Data ',
x_DataDesc      : 'Dit is optioneel. Data wordt vaak gebruikt als je transacties naar contracten verstuurd. ',
OFFLINE_Step2_Label_7       : 'Selecteer en geef je Prive Sleutel / JSON in. ',
OFFLINE_Step3_Title         : 'Stap 3: Verstuur / Publiceer Transactie (Online Computer) ',
OFFLINE_Step3_Label_1       : 'Plak de gesigneerde transactie van Stap 2 hier en klik de "Verzend Transactie" knop. ',

/* Contracts */
CONTRACT_Title              : 'Contract Adres ',
CONTRACT_Title_2            : 'Selecteer Bestaand Contract ',
CONTRACT_Json               : 'ABI / JSON Interface ',
CONTRACT_Interact_Title     : 'Lees / Schrijf Contract ',
CONTRACT_Interact_CTA       : 'Selecteer een functie ',
CONTRACT_Bytecode           : 'Bytecode',
CONTRACT_Read               : 'LEES ',
CONTRACT_Write              : 'SCHRIJF ',
CONTRACT_GenBytecode                : 'Genereer Bytecode ',
CONTRACT_GenBytecoded               : 'Gegenereerde Bytecode ',
TX_Sign                  : 'Onderteken Transactie ',
CONTRACT_GenInterface               : 'Gegenereerde Interface ',

/* Node Switcher */
NODE_Title                  : 'Stel je Custom Node in',
NODE_Subtitle               : 'Om met een lokale node te verbinden...',
WARN_05                : 'Je node dient HTTPS te zijn om met MyEtherWallet.com te kunnen verbinden. Je kunt de [MyEtherWallet repo downloaden](https://github.com/kvhnuke/etherwallet/releases/latest) en lokaal uitvoeren en vervolgens met iedere node verbinden. Of, verkrijg een gratis SSL certificaat via [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Node Naam',
NODE_Port                   : 'Node Poort',
NODE_CTA                    : 'Opslaan & Custom Node gebruiken',

/* Swap / Exchange */
SWAP_rates                  : "Actuele Koersen ",
SWAP_init_1                 : "Ik wil mijn ",
SWAP_init_2                 : " omwisselen voor ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Naar de volgende stap ", // or "Continue"
SWAP_information            : "Je informatie ",
x_Amount               : "Te verzenden bedrag ",
SWAP_rec_amt                : "Te ontvangen bedrag ",
SWAP_your_rate              : "Je wisselkoers ",
SWAP_rec_add                : "Je ontvangst Adres ",
SWAP_start_CTA              : "Start Omwisselen ",
SWAP_ref_num                : "Je referentie nummer ",
SWAP_time                   : "Resterende tijd om te verzenden ",
SWAP_elapsed                : "Verstreken tijd sinds verzonden",
SWAP_progress_1             : "Bestelling Gestart ",
SWAP_progress_2             : "Wachten op je ", // Waiting for your BTC...
SWAP_progress_3             : "Ontvangen! ", // ETH Received!
SWAP_progress_4             : "Verzenden van je {{orderResult.output.currency}} ",
SWAP_progress_5             : "Bestelling Voltooid ",
SWAP_order_CTA              : "Verzend alsjeblieft ", // Please send 1 ETH...
SWAP_unlock                 : "Open je Wallet op deze pagina om ETH of Tokens direct te verzenden. ",

/* Sign Message */
MSG_message                 : 'Bericht ',
MSG_date                    : 'Datum ',
MSG_signature               : 'Handtekening ',
MSG_verify                  : 'Verifieer Bericht ',
MSG_info1                   : 'Voeg de huidige datum toe zodat je handtekening niet opnieuw kan worden gebruikt op een andere datum. ',
MSG_info2                   : 'Voeg je nickname toe en waar je deze gebruikt zodat anderen deze niet kunnen gebruiken. ',
MSG_info3                   : 'Geef een specifieke reden op voor de boodschap, zodat deze niet kan worden hergebruikt voor een ander doel. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Hiermee kun je verschillende versies van je prive sleutels downloaden en je papieren wallet opnieuw afdrukken. Je zou dit kunnen doen om [je account in Geth/Mist te importeren](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Als je enkel je saldo wilt raadplegen, adviseren we je om gebruik te maken van een blockchain explorer zoals [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Hiermee kun je verschillende versies van je prive sleutels downloaden en je papieren wallet opnieuw afdrukken. ',
VIEWWALLET_SuccessMsg       : 'Gelukt! Hier zijn je wallet details. ',
VIEWWALLET_ShowPrivKey      : '(laat zien)',
VIEWWALLET_HidePrivKey      : '(verberg)',

/* Chrome Extension */
ERROR_CX_01                  : 'Je hebt nog geen enkele wallets opgeslagen. Klik ["Voeg wallet toe"](/cx-wallet.html#add-wallet) om er een toe te voegen! ',
CX_quicksend                : 'VerzendSnel ',

/* Error Messages */
ERROR_0                     : 'Geef alsjeblieft een geldig bedrag in. ',
ERROR_1                     : 'Je wachtwoord dient minimaal 9 karakters lang te zijn. Zorg voor een sterk wachtwoord. ',
ERROR_2                     : 'Sorry! We herkennen dit type Wallet bestand niet. ',
ERROR_3                     : 'Dit is geen geldig Wallet bestand. ',
ERROR_4                     : 'Deze eenheid bestaat niet, kies alsjeblieft een van de volgende eenheden ',
ERROR_5                     : 'Ongeldig adres. ',
ERROR_6                     : 'Ongeldig wachtwoord. ',
ERROR_7                     : 'Ongeldig bedrag. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Ongeldige gas limiet. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Ongeldige data waarde. (Must be hex.) ', // 9
ERROR_10                    : 'Ongeldige gas bedrag. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Ongeldige nonce. (Must be integer.) ', // 11
ERROR_12                    : 'Ongeldige gesigneerde transactie. ',
ERROR_13                    : 'Een wallet met deze nickname bestaat reeds. ',
ERROR_14                    : 'Wallet niet gevonden. ',
ERROR_15                    : 'Het ziet er niet naar uit dat een proposal met dit ID bestaat of dat er een  fout is opgetreden bij het lezenvan dit proposal. ',
ERROR_16                    : 'Een wallet met dit adres bestaat reeds. Check alsjeblileft je wallet pagina. ',
ERROR_17                    : 'Ontoereikend saldo. Het account waarvan je probeert te versturen bevat niet voldoende saldo. Je hebt mininaal 0.01 ether in je account nodig om de in de gas kosten te voorzien. Voeg alsjeblieft wat ether toe en probeer het opnieuw. ',
ERROR_18                    : 'Alle gas zou worden verbruikt op deze transactie. Dit betekend dat je al gestemd hebt op dit proposal of dat de debateerperiode is verstreken. ',
ERROR_19                    : 'Ongeldig symbol ',
ERROR_20                    : 'is geen geldig ERC-20 token. Als andere tokens nog aan het laden zijn, verwijder dan dit token en probeer het opnieuw. ',
ERROR_21                    : 'Kon gas niet inschatten. Er is onvoldoende saldo in het account, of het ontvangende contract adres geeft een fout. Voel je vrij om het gas handmatig in te stellen en door te gaan. De foutmelding bij het verzenden kan informatiever zijn. ',
ERROR_22                    : 'Geef een geldige node naam in ',
ERROR_23                    : 'Voer een geldige url in, als je van https gebruik maakt moet je url met https beginnen ',
ERROR_24                    : 'Voer een geldige poort in ',
ERROR_25                    : 'Voer een geldig chain ID in ',
ERROR_26                    : 'Voer een geldige ABI in ',
ERROR_27                    : 'Minimale hoeveelheid is 0.01 ',
ERROR_28                    : '**Je hebt je Keystore Bestand & wachtwoord of prive sleutel nodig** om toegang tot deze wallet te verkrijgen in de toekomst. Sla het op & maak een externe back-up! Er is geen enkele manier om je wallet te herstellen als je het nu niet opslaat. Lees ook de help pagina (https://www.myetherwallet.com/#help) voor instructies. ',
ERROR_29                    : 'Voer een valide gebruikersnaam en wachtwoord in ',
ERROR_30                    : 'Voer een valide ENS naam in ',
ERROR_31                    : 'Ongeldige geheime zin ',
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : 'Geldig adres ',
SUCCESS_2                   : 'Wallet succesvol ontsleuteld ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ', //'Transactie verzonden. TX Hash ',
SUCCESS_4                   : 'Je Wallet is succesvol toegevoegd ',
SUCCESS_5                   : 'Bestand Geselecteerd ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
WARN_02              : 'Je bent hier gekomen via een link waarbij het adres, bedrag, gas of data velden al ingevuld zijn. Indien gewenst kun je elk veld nog aanpassen voor het verzenden. Ontgrendel je wallet on te beginnen. ',

/* Geth Error Messages */
GETH_InvalidSender          : 'Ongeldige verzender ',
GETH_Nonce                  : 'Nonce te laag ',
GETH_Cheap                  : 'Gas prijs te laag voor acceptatie ',
GETH_Balance                : 'Ontoereikend saldo ',
GETH_NonExistentAccount     : 'Account bestaat  niet of account saldo te laag ',
GETH_InsufficientFunds      : 'Ontoereikend saldo voor gas * prijs + waarde ',
GETH_IntrinsicGas           : 'Intrinsiek gas te laag ',
GETH_GasLimit               : 'Overstijgt blok gas limiet ',
GETH_NegativeValue          : 'Negative waarde ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "Transactie met dezelfde hash was reeds geimporteerd.",
PARITY_Old                  : "Transactie nonce is te laag. Probeer de nonce te verhogen.",
PARITY_TooCheapToReplace    : "Transactie vergoeding is te laag. Er staat een andere transactie met dezelfde nonce in de wachtrij. Probeer de transactie vergoeding of de nonce te verhogen.",
PARITY_LimitReached         : "Er staan te veel transacties in de wachtrij. Je transactie is afgewezen door deze limiet. Probeer je transactie vergoeding te verhogen.",
PARITY_InsufficientGasPrice : "Transactie vergoeding is te laag. Het voldoet niet aan je node's minimale vergoeding (minimaal: {}, momenteel: {}). Probeer je transactie vergoeding te verhogen.",
PARITY_InsufficientBalance  : "Ontoereikend saldo. Het account waarvan je probeert te versturen bevat niet voldoende saldo. Vereist {} en momenteel: {}.",
PARITY_GasLimitExceeded     : "Transactie kosten overstijgen de huidige gas limiet. Limiet: {}, momenteel: {}. Probeer de hoeveelheid gas te verminderen.",
PARITY_InvalidGasLimit      : "Hoeveelheid gas is boven de limiet.",

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : 'Bedank onze vertalers ',
z_TRANSLATE1            : '[h3ll0fr13nd](https://www.myetherwallet.com/?gaslimit=21000&to=0xB5FbCE123F12347206c881cae73A3046BA1A90bA&value=0.1#send-transaction) ',
z_TRANSLATE2            : '',
z_TRANSLATE3            : '',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''
};

module.exports = nl;
