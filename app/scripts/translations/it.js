// Italian
// Last sync with en.js     : commit f025c496254b8ce69660b682f90ec3dc5a12caa8
'use strict';
var it = function() {}
it.code = 'it';
it.data = {

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
WALL_Add               : 'Aggiungi portafoglio ',
BULK_Generate            : 'Generazione multipla ',
x_Contact                 : 'Contatti ',
CONTRACT_Title               : 'Contratti ',
CONTRACT_Deploy          : 'Pubblica contratto ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Genera portafoglio ',
x_Help                    : 'Aiuto ',
CONTRACT_Interact        : 'Interagisci con un contratto ',
CONTRACT_Multisig                : 'Multifirma ',
WALL_walletViewCX               : 'I miei portafogli ',
x_Offline                 : 'Invia offline ',
TX_Send_Title             : 'Invia ether e token ',
TX_Send_ShortTokens              : 'Invia token ',
MSG_Sign                 : 'Firma messaggio ',
SWAP_Title                    : 'Scambia ',
WALL_View              : 'Informazioni portafoglio ',
WALL_Your             : 'I tuoi portafogli ',

/* General */
x_Access                    : 'Accedi ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Potresti sentirlo chiamare "Numero di conto" o "Chiave pubblica". È ciò che dai a chi ti vuole inviare degli ether. L\'icona è un modo facile di riconoscere il tuo indirizzo. ',
ADDR_                   : 'Il tuo indirizzo ',
x_Cancel                    : 'Annulla ',
x_CSV                       : 'File CSV (non crittografato) ',
x_Download                  : 'Download ',
x_Json                      : 'File JSON (non crittografato) ',
x_JsonDesc                  : 'Questa è la tua chiave privata in formato JSON non crittografato. Significa che non hai bisogno della password, ma chiunque trovi questo file JSON potrà avere accesso al tuo portafoglio e ai tuoi ether senza password. ',
x_Keystore                  : 'File Keystore (UTC / JSON · Consigliato · Crittografato) ',
x_Keystore2                 : 'File Keystore (UTC / JSON) ',
x_KeystoreDesc              : 'Questo file Keystore è compatibile con il formato usato da Mist, in modo da poterlo facilmente importare in futuro. È il file consigliato da scaricare e conservare. ',
x_Mnemonic                  : 'Frase mnemonica ',
x_ParityPhrase              : 'Frase di Parity ',
PW_                  : 'Password ',
x_Print                     : 'Stampa portafoglio cartaceo ',
x_PrintDesc                 : 'Suggerimento Pro: Fai clic su stampa e salvalo come PDF, anche se non hai una stampante! ',
x_PrintShort                : 'Stampa ',
x_PrivKey                   : 'Chiave privata (non crittografata) ',
x_PrivKey2                  : 'Chiave privata ',
x_PrivKeyDesc               : 'Questa è la versione testuale non crittografata della tua chiave privata, il che significa che non serve una password. Se qualcuno trovasse la tua chiave privata non crittografata potrebbe avere accesso al tuo portafoglio senza una password. Per questa ragione di solito si consigliano le versioni crittografate. ',
x_Save                      : 'Salva ',
x_TXT                       : 'File TXT (non crittografato) ',
WALL_                    : 'Portafoglio ',

/* Header */
WARN_01               : 'Controlla sempre l\'URL prima di accedere al tuo portafoglio o di crearne uno nuovo. Fai attenzione ai siti di phishing! ',
WARN_04                : 'Assicurati di avere **dei backup esterni** di ogni portafoglio salvato qui. Ci sono molte cose che potrebbero causare la perdita dei dati di questa estensione di Chrome, come la disinstallazione e reinstallazione dell\'estensione. Questa estensione è un mezzo per accedere facilmente ai tuoi portafogli, **non** un modo di salvarli al sicuro. ',
FOOTER_Tagline                 : 'Portafoglio ether JavaScript lato client Open Source ',
CX_Tagline                  : 'Portafoglio ether JavaScript lato client Open Source (Estensione Chrome) ',

/* Footer */
FOOTER_1                    : 'Strumento open source lato client per interagire facilmente e in modo sicuro con la rete Ethereum. ',
FOOTER_1b                   : 'Creato da ',
FOOTER_2                    : 'Donazioni molto apprezzate: ',
FOOTER_3                    : 'Generazione portafogli lato client da parte di ',
FOOTER_4                    : 'Dichiarazione di non responsabilità ',

/* Sidebar */
ACCOUNT_Info         : 'Informazioni conto ',
ACCOUNT_Address         : 'Indirizzo conto ',
ACCOUNT_Balance          : 'Saldo conto ',
TOKEN_Balance            : 'Saldo token ',
SIDEBAR_Equiv               : 'Valori equivalenti ',
TX_History        : 'Storico transazioni ',
SIDEBAR_donation            : 'MyEtherWallet è un servizio gratuito e open-source votato alla tua privacy e sicurezza. Più donazioni riceviamo, più tempo dedichiamo a creare nuove funzionalità, considerare i tuoi commenti, e darti ciò che vuoi. Siamo solo due persone che provano a cambiare il mondo. Ci aiuti? ',
SIDEBAR_donate              : 'Dona ',
SIDEBAR_thanks              : 'GRAZIE!!! ',

/* Decrypt Panel */
DECRYPT_Access              : 'Come vuoi accedere al tuo portafoglio? ',
DECRYPT_Title               : 'Seleziona il formato della tua chiave privata: ',
WALL_Select              : 'Seleziona un portafoglio: ',

/* Add Wallet */
DECRYPT_Label_1                 : 'Cosa vuoi fare? ',
WALL_GenerateNew                 : 'Genera un nuovo portafoglio ',
DECRYPT_Radio_2                 : 'Seleziona il file del tuo portafoglio (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : 'Seleziona il file del tuo portafoglio ',
DECRYPT_Radio_2_short           : 'SELEZIONA FILE PORTAFOGLIO... ',
DECRYPT_Radio_3                 : 'Incolla/Inserisci la tua chiave privata ',
ACCOUNT_AddWatch                 : 'Aggiungi un conto da osservare ',
MNEM_Enter                 : 'Incolla/Inserisci la tua frase mnemonica ',
MNEM_Enter_Path            : 'Seleziona un percorso di derivazione HD ',
MNEM_Enter_PathCustom      : 'altro',
DECRYPT_Label_2                 : 'Crea un nome: ',
DECRYPT_Label_3                 : 'Il portafoglio è crittografato. Inserire la password ',
DECRYPT_Label_4                 : 'Aggiungi un conto da osservare ',
WARN_03               : 'Puoi aggiungere qualunque conto da "osservare" nella scheda dei portafogli senza caricare una chiave privata. Ciò ** non ** significa che avrai accesso a quel portafoglio, né che potrai trasferire gli Ether lì contenuti. ',
DECRYPT_Label_5                 : 'Inserisci l\'indirizzo ',
WALL_Unlock                 : 'Sblocca portafoglio ',
WALL_Unlock_Short           : 'Sblocca ',
ACCOUNT_Add                 : 'Aggiungi conto ',
PW_Optional                 : 'Password (facoltativo): ',

/* Generate Wallets */
GEN_desc                    : 'Se vuoi generare più portafogli, puoi farlo qui ',
PW_Enter                 : 'Inserisci una password robusta (almeno 9 caratteri) ',
PW_Enter           : 'NON dimenticarti di salvarla! ',
GEN_SuccessMsg              : 'Perfetto! Il tuo portafoglio è stato generato. ',
x_Keystore_Save                 : 'Salva il file del tuo portafoglio.   ',
ADDR_Save                 : 'Salva il tuo indirizzo. ',
GEN_Label_4                 : 'Stampa il portafoglio cartaceo o un QR code. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Numero di portafogli da generare ',
BULK_Label_2                : 'Genera portafogli ',
BULK_SuccessMsg             : 'Perfetto! I tuoi portafogli sono stati generati. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'Indirizzo destinatario ',
x_Amount                 : 'Importo da inviare ',
x_Amount_short           : 'Importo ',
TOKEN_AddCustom                 : 'Aggiungi altro token ',
x_GasLimit                    : 'Gas ',
TX_Generate               : 'Genera transazione ',
TX_Unsigned                    : 'Transazione grezza ',
TX_Signed                 : 'Transazione firmata ',
TX_Send_Short                  : 'Invia transazione ',
TX_Send_All          : 'Invia l\'intero saldo ',
SENDModal_Title             : 'Attenzione! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Stai per inviare ',
SENDModal_Content_2         : 'all\'indirizzo ',
SENDModal_Content_3         : 'Sei sicuro di volerlo fare? ',
SENDModal_Content_4         : 'NOTA: Se ricevi un errore, molto probabilmente dovrai aggiungere ether al tuo conto per coprire il costo del gas necessario ad inviare i token. Il gas si paga in ether. ',
SENDModal_No                : 'No, tiratemi fuori da qui! ',
SENDModal_Yes               : 'Sì, sono sicuro! Esegui la transazione. ',

/* Tokens */
ADDR_Short                  : 'Indirizzo ',
TOKEN_Symbol                : 'Simbolo del token ',
TOKEN_Dec                   : 'Decimali ',
TOKEN_show                  : 'Mostra tutti i token ',
TOKEN_hide                  : 'Nascondi token ',

/* Send Transaction */
TX_desc                  : 'Se invece volevi inviare dei token, utilizza la pagina "Invia token". ',
TX_warning               : 'Se usi le opzioni "Solo ETH" o "Solo ETC" invierai tramite un contratto. Certi servizi hanno difficoltà ad accettare queste transazioni. Leggi tutto. ',
SEND_Advanced              : '+Avanzate: aggiungi dati ',
x_Data                  : 'Dati ',
x_GasLimit                   : 'Limite gas ',
TX_Send_ShortInfo              : 'Una transazione standard che utilizza 21000 gas costerà 0,000441 ETH. Utilizziamo un prezzo del gas leggermente al di sopra del minimo pari a 0,000000021 ETH per assicurarci che venga elaborata velocemente. Noi non prendiamo commissioni. ',

/* Offline Transaction */
OFFLINE_Title               : 'Genera & invia una transazione offline ',
OFFLINE_Desc                : 'Per generare transazioni offline sono necessari tre passaggi. Svolgerai i passi 1 e 3 su un computer online, e il passo 2 su un computer offline/*air-gapped*. Questo per assicurarsi che le tue chiavi private non tocchino un dispositivo connesso a Internet. ',
OFFLLINE_Step1_Title        : 'Passo 1: generazione delle informazioni (computer online) ',
OFFLINE_Step1_Button        : 'Genera informazioni ',
ADDR_From       : 'Indirizzo mittente ',
OFFLINE_Step1_Label_2       : 'Nota: Questo è l\'indirizzo MITTENTE, non l\'indirizzo DESTINATARIO. Il *nonce* è generato dal conto di origine. Se stessi usando un computer *air-gapped*, sarebbe l\'indirizzo del conto offline. ',
OFFLINE_Step2_Title         : 'Passo 2: generazione della transazione (computer offline) ',
ADDR_To       : 'Indirizzo destinatario ',
OFFLINE_Step2_Label_2       : 'Valore / importo da inviare ',
x_GasPrice                  : 'Prezzo gas ',
x_GasPriceDesc                 : 'Questo valore è stato mostrato nel passo 1 sul computer online. ',
x_GasLimit       : 'Limite gas ',
x_GasLimitDesc      : '21000 è il limite gas predefinito. Quando invii a contratti o aggiungi dati potresti aver bisogno di un valore maggiore. Eventuale gas non utilizzato ti sarà restituito. ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'Questo valore è stato mostrato nel passo 1 sul computer online. ',
x_Data       : 'Dati ',
x_DataDesc      : 'Facoltativo. I dati sono usati spesso nelle transazioni inviate ai contratti. ',
OFFLINE_Step2_Label_7       : 'Inserisci / seleziona la tua chiave privata o JSON. ',
OFFLINE_Step3_Title         : 'Passo 3: Invia / pubblica la transazione (computer online) ',
OFFLINE_Step3_Label_1       : 'Incolla la transazione firmata dal passo 2 qui e premi il pulsante "INVIA TRANSAZIONE". ',

/* Sign Message */
MSG_message                 : 'Messaggio ',
MSG_date                    : 'Data ',
MSG_signature               : 'Firma ',
MSG_verify                  : 'Verifica messaggio ',
MSG_info1                   : 'Inserisci la data corrente per far sì che la firma non possa essere riutilizzata in un altro momento. ',
MSG_info2                   : 'Indica il tuo nickname e dove lo usi in modo che qualcun altro non possa usarlo. ',
MSG_info3                   : 'Includi una ragione specifica per il messaggio, così che non possa essere riutilizzato per uno scopo diverso. ',

/* My Wallet */
WALL_Nickname                  : 'Nome portafoglio ',
MYWAL_Address               : 'Indirizzo portafoglio ',
ACCOUNT_Balance                   : 'Saldo ',
WALL_Edit_Short                  : 'Modifica ',
WALL_View_Short                  : 'Mostra ',
WALL_Remove                : 'Rimuovi ',
WALL_RemoveWal             : 'Rimozione portafoglio: ',
WALL_WatchOnlyAccounts             : 'I tuoi conti osservati ',
WALL_Viewing               : 'Dettagli portafoglio ',
WALL_Hide                  : 'Nascondi informazioni portafoglio ',
WALL_Edit                : 'Modifica portafoglio ',
WALL_Name                  : 'Nome portafoglio ',
WARN_06             : 'Attenzione! Stai per rimuovere il tuo portafoglio ',
WARN_07             : 'Assicurati di aver **salvato la chiave privata e/o il file Keystore e la password** prima di rimuoverlo. ',
WARN_08             : 'Se vorrai utilizzare questo portafoglio con MyEtherWallet CX in futuro, dovrai ri-aggiungerlo manualmente tramite la chiave privata/JSON e password. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Qui è possibile scaricare diverse versioni delle chiavi private e ristampare il portafoglio cartaceo. Potresti volerlo fare per  [importare il tuo conto in Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Se vuoi controllare il tuo saldo, ti consigliamo di utilizzare uno strumento per esplorare la *blockchain* come [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Qui è possibile scaricare diverse versioni delle chiavi private e ristampare il portafoglio cartaceo. ',
VIEWWALLET_SuccessMsg       : 'Perfetto! Questi sono i dettagli del tuo portafoglio. ',
VIEWWALLET_ShowPrivKey      : '(mostra)',
VIEWWALLET_HidePrivKey      : '(nascondi)',

/* Mnemonic */
MNEM_1                      : 'Seleziona l\'indirizzo col quale vuoi interagire. ',
MNEM_2                      : 'Con una singola frase mnemonica puoi avere accesso a un certo numero di portafogli / indirizzi. Seleziona l\'indirizzo con il quale vuoi interagire in questo momento. ',
MNEM_more                   : 'Altri indirizzi ',
MNEM_prev                   : 'Indirizzi precedenti ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S ',
DECRYPT_Ledger_0a               : 'Riapri MyEtherWallet su una connessione sicura (SSL) ',
DECRYPT_Ledger_0b               : 'Riapri MyEtherWallet utilizzando [Chrome](https://www.google.com/chrome/browser/desktop/) o [Opera](https://www.opera.com/) ',
DECRYPT_Ledger_1                : 'Collega il tuo Ledger Nano S ',
DECRYPT_Ledger_2                : 'Apri l\'applicazione Ethereum (o l\'applicazione di un contratto) ',
DECRYPT_Ledger_3                : 'Verifica che il supporto browser sia abilitato nelle impostazioni ',
DECRYPT_Ledger_4                : 'Se non c\'è l\'opzione per il supporto browser nelle impostazioni, verifica di avere un [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_scan             : 'Collegati al Ledger Nano S ',
x_Trezor                    : 'TREZOR ',
DECRYPT_Trezor_scan             : 'Collegati al TREZOR ',

/* CX */
ERROR_CX_01                  : 'Non c\'è nessun portafoglio. Fai clic su ["Aggiungi portafoglio"](/cx-wallet.html#add-wallet) per aggiungerne uno! ',
CX_quicksend                : 'Invio rapido ',

/* Contracts */
CONTRACT_Title              : 'Indirizzo contratto ',
CONTRACT_Title_2            : 'Seleziona contratto esistente ',
CONTRACT_Json               : 'Interfaccia ABI / JSON ',
CONTRACT_Interact_Title     : 'Leggi da / Scrivi su contratto ',
CONTRACT_Interact_CTA       : 'Seleziona una funzione ',
CONTRACT_Bytecode           : 'Bytecode',
CONTRACT_Read               : 'LEGGI ',
CONTRACT_Write              : 'SCRIVI ',
CONTRACT_GenBytecode                : 'Genera bytecode ',
CONTRACT_GenBytecoded               : 'Bytecode generato ',
TX_Sign                  : 'Firma transazione ',
CONTRACT_GenInterface               : 'Interfaccia generata ',

/* Node Switcher */
NODE_Title                  : 'Configura nodo personalizzato',
NODE_Subtitle               : 'Per collegarti a un nodo locale...',
WARN_05                : 'Il tuo nodo deve utilizzare HTTPS per potertici collegare da MyEtherWallet.com. Puoi [scaricare il repository di MyEtherWallet ed eseguirlo in locale](https://github.com/kvhnuke/etherwallet/releases/latest) per collegarti ad altri tipi di nodo. Oppure, ottieni un certificato SSL gratuito tramite [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Nome del nodo',
NODE_Port                   : 'Porta del nodo',
NODE_CTA                    : 'Salva & utilizza il nodo',

/* Swap / Exchange */
SWAP_rates                  : "Tassi correnti ",
SWAP_init_1                 : "Voglio scambiare i miei ",
SWAP_init_2                 : " per ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Facciamolo! ", // or "Continue"
SWAP_information            : "Il tuo riepilogo ",
x_Amount               : "Importo da inviare ",
SWAP_rec_amt                : "Importo da ricevere ",
SWAP_your_rate              : "Il tuo tasso ",
SWAP_rec_add                : "Indirizzo di ricezione ",
SWAP_start_CTA              : "Avvia scambio ",
SWAP_ref_num                : "Il tuo codice di riferimento ",
SWAP_time                   : "Tempo rimanente per l\'invio ",
SWAP_elapsed                : "Tempo trascorso dall\'invio ",
SWAP_progress_1             : "Ordine creato ",
SWAP_progress_2             : "In attesa dei tuoi ", // Waiting for your BTC...
SWAP_progress_3             : "ricevuti! ", // ETH Received!
SWAP_progress_4             : "Invio dei tuoi {{orderResult.output.currency}} ",
SWAP_progress_5             : "Ordine completato ",
SWAP_order_CTA              : "Invia ", // Please send 1 ETH...
SWAP_unlock                 : "Sblocca il tuo portafoglio per inviare ETH o token direttamente da questa pagina. ",

/* Error Messages */
ERROR_0                     : 'Ti preghiamo di inserire una quantità valida. ',
ERROR_1                     : 'La password deve essere di almeno 9 caratteri. Assicurati che sia robusta. ',
ERROR_2                     : 'Siamo spiacenti! Non riconosciamo questo tipo di file portafoglio. ',
ERROR_3                     : 'Questo non è un file portafoglio valido. ',
ERROR_4                     : 'Questa unità non esiste, ti preghiamo di usare una delle seguenti unità ',
ERROR_5                     : 'Inserisci un indirizzo valido. ',
ERROR_6                     : 'Inserisci una password valida. ',
ERROR_7                     : 'Inserisci dei decimali validi. (Deve essere un intero. Prova 0-18.) ', // 7
ERROR_8                     : 'Inserisci un limite gas valido. (Deve essere un intero. Prova 21000-4000000.) ', // 8
ERROR_9                     : 'Inserisci un valore valido per i dati. (Deve essere una stringa esadecimale.) ', // 9
ERROR_10                    : 'Inserisci prezzo valido per il gas. (Deve essere un intero. Prova 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Inserisci un nonce valido. (Deve essere un intero.) ', // 11
ERROR_12                    : 'Transazione firmata non valida. ',
ERROR_13                    : 'Esiste già un portafoglio con questo nome. ',
ERROR_14                    : 'Portafoglio non trovato. ',
ERROR_15                    : 'Ops. Sembra che non esista ancora una proposta con questo ID o c\'è un errore nella lettura della proposta. ', // 15 - NOT USED
ERROR_16                    : 'C\'è già un portafoglio con questo indirizzo fra quelli salvati. Controlla la pagina dei tuoi portafogli. ',
ERROR_17                    : 'L\'account dal quale stai provando ad inviare la transazione non ha abbastanza fondi. Se stai inviando token, ti servono 0,01 ETH nel conto per coprire i costi del gas. ',
ERROR_18                    : 'Questa transazione consumerebbe tutto il gas. Ciò significa che hai già votato questa proposta o che il periodo di discussione è terminato. ',
ERROR_19                    : 'Inserisci un simbolo valido ',
ERROR_20                    : 'Non è un token ERC-20 valido. ',
ERROR_21                    : 'Impossibile eseguire una stima del gas necessario. Non ci sono abbastanza fondi nel conto, oppure l\'indirizzo del contratto ricevente genererebbe un errore. Puoi inserire il gas manualmente e procedere. Il messaggio di errore al momento dell\'invio potrebbe contenere ulteriori informazioni. ',
ERROR_22                    : 'Inserisci un nome di nodo valido ',
ERROR_23                    : 'Inserisci un URL valido. Se usi https, l\'URL deve cominciare con https',
ERROR_24                    : 'Inserisci una porta valida ',
ERROR_25                    : 'Inserisci un ID catena valido ',
ERROR_26                    : 'Inserisci una ABI valida ',
ERROR_27                    : 'Importo minimo: 0.01. Importo massimo: ',
ERROR_28                    : 'Avrai bisogno del file del tuo portafoglio e della password per avere accesso a questo portafoglio in futuro. ',
ERROR_29                    : 'Inserisci un nome utente e una password validi ',
ERROR_30                    : 'Inserisci un nome valido (almeno 7 caratteri, punteggiatura limitata)',
ERROR_31                    : 'Inserisci una frase segreta valida ',
ERROR_32                    : 'Impossibile collegarsi al nodo. Aggiorna la pagina, prova con un altro nodo (angolo in alto a destra), controlla le impostazioni del firewall. Se si tratta di un nodo personalizzato, controlla la configurazione.', // 32
ERROR_33                    : 'L\'indirizzo del portafoglio non corrisponde a quello del proprietario. ',
ERROR_34                    : 'Il nome che stai provando a rivelare non combacia con quello che hai inserito. ',
ERROR_35                    : 'L\'indirizzo inserito non ha un checksum. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> Ulteriori informazioni</a>', // 35

SUCCESS_1                   : 'Indirizzo valido ',
SUCCESS_2                   : 'Portafoglio decodificato correttamente ',
SUCCESS_3                   : 'La transazione è stata inviata alla blockchain. Fai clic per vederla e controllare che sia stata inclusa in un blocco e non si siano verificati errori relativi al gas o all\'esecuzione del contratto.  TX Hash:  ',
SUCCESS_4                   : 'Il portafoglio è stato aggiunto correttamente ',
SUCCESS_5                   : 'File selezionato ',
SUCCESS_6                   : 'Ora sei connesso ',
SUCCESS_7                   : 'Firma del messaggio verificata',
WARN_02              : 'Sei arrivato qui da un link che ha riempito per te i campi indirizzo, importo, gas, dati o tipo di transazione (modalità di invio). Puoi cambiare queste informazioni prima di inviare. Sblocca il tuo portafoglio per iniziare. ',

/* Geth Error Messages */
GETH_InvalidSender          : 'Mittente non valido ',
GETH_Nonce                  : 'Nonce troppo basso ',
GETH_Cheap                  : 'Prezzo del gas troppo basso per essere accettato ',
GETH_Balance                : 'Saldo insufficiente ',
GETH_NonExistentAccount     : 'Il conto non esiste o il saldo è insufficiente ',
GETH_InsufficientFunds      : 'Fondi insufficienti per gas * prezzo + valore ',
GETH_IntrinsicGas           : 'Gas intrinseco troppo basso ',
GETH_GasLimit               : 'Eccede il limite gas per il blocco ',
GETH_NegativeValue          : 'Valore negativo ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "È già stata importata una transazione con lo stesso hash.",
PARITY_Old                  : "Il nonce della transazione è troppo basso. Prova ad incrementare il nonce.",
PARITY_TooCheapToReplace    : "La commissione per la transazione è troppo bassa. Nella coda c'è un'altra transazione con lo stesso nonce. Prova ad aumentare la commissione o ad incrementare il nonce.",
PARITY_LimitReached         : "Ci sono troppe transazioni nella coda. La tua transazione è stata scartata per il superamento del limite. Prova ad aumentare la commissione.",
PARITY_InsufficientGasPrice : "La commissione per la transazione è troppo bassa. Non soddisfa la commissione minima del tuo nodo (minima: {}, fornita: {}). Prova ad aumentare la commissione.",
PARITY_InsufficientBalance  : "Fondi insufficienti. L'account dal quale stai provando ad inviare la transazione non ha abbastanza fondi. Richiesti {} ma presenti: {}.",
PARITY_GasLimitExceeded     : "Il costo della transazione eccede il limite gas corrente. Limite: {}, fornito: {}. Prova a ridurre il gas fornito.",
PARITY_InvalidGasLimit      : "Il gas fornito supera il limite.",

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : 'Grazie ai nostri traduttori ',
z_TRANSLATE1            : '[ugilio](https://www.myetherwallet.com/?gaslimit=21000&to=0x07932bc1c68c8ff188f4225e892178ab6d8c4eaa&value=0.1#send-transaction) ',
z_TRANSLATE2            : '',
z_TRANSLATE3            : '',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''

};

module.exports = it;
