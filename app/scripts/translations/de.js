// German
'use strict';
var de = function() {}
de.code = 'de';
de.data = {

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
WALL_Add               : 'Wallet hinzufügen ',
BULK_Generate            : 'Mehrere Wallets erstellen ',
x_Contact                 : 'Kontakt ',
CONTRACT_Title               : 'Verträge ',
CONTRACT_Deploy          : 'Vertrag aufstellen ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Wallet erstellen ',
x_Help                    : 'Hilfe ',
CONTRACT_Interact        : 'Interact with Contract ',
CONTRACT_Multisig                : 'Multisig ',
WALL_walletViewCX               : 'Meine Wallets ',
x_Offline                 : 'Sende offline ',
TX_Send_Title             : 'Sende Ether und Tokens ',
TX_Send_ShortTokens              : 'Sende Tokens ',
MSG_Sign                 : 'Sign Message ',
SWAP_Title                    : 'Swap ',
WALL_View              : 'Wallet Infos anzeigen ',
WALL_Your             : 'Deine Wallets ',

/* General */
x_Access                    : 'Access ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Dies ist deine "Kontonummer" oder dein "Öffentlicher Schlüssel". Du benötigst diese Adresse, wenn dir jemand Ether senden möchte. Das Icon ist eine einfache Möglichkeit, die Adresse zu überprüfen ',
ADDR_                   : 'Deine Adresse ',
x_Cancel                    : 'Abbrechen ',
x_CSV                       : 'CSV-Datei (unverschlüsselt) ',
x_Download                  : 'Herunterladen ',
x_Json                      : 'JSON-Datei (unverschlüsselt) ',
x_JsonDesc                  : 'Dies ist die unverschlüsselte Version deines privaten Schlüssels im JSON-Format. Du benötigst daher kein Passwort, aber jeder, der über diese JSON-Datei verfügt, hat ohne Passwort Zugang zu deinem Wallet und dem darin enthaltenen Ether. ',
x_Keystore                  : 'Keystore File (UTC / JSON · Empfohlen · Verschlüsselt) ',
x_Keystore2                 : 'Keystore File (UTC / JSON) ',
x_KeystoreDesc              : 'Diese Keystore-Datei passt zu dem Format, das von Mist verwendet wird, sodass du diese Datei dort zukünftig einfach importieren kannst. Es ist empfehlenswert, diese Datei herunterzuladen und zu sichern. ',
x_Mnemonic                  : 'Mnemonic Phrase ',
x_ParityPhrase              : 'Parity Phrase ',
PW_                  : 'Passwort ',
x_Print                     : 'Papier-Version des Wallets drucken ',
x_PrintDesc                 : 'ProTip: Klicke auf "Drucken" und sichere die Datei als PDF, auch wenn du keinen Drucker hast! ',
x_PrintShort                : 'Drucken ',
x_PrivKey                   : 'Privater Schlüssel (unverschlüsselt) ',
x_PrivKey2                  : 'Privater Schlüssel ',
x_PrivKeyDesc               : 'Dies ist die unverschlüsselte Textversion deines privaten Schlüssels, d. h. du benötigst kein Passwort. Wenn jemand über diesen unverschlüsselten privaten Schlüssel verfügt, hat er/sie ohne Passwort Zugang zu deinem Wallet. Es wird daher empfohlen, den privaten Schlüssel zu verschlüsseln. ',
x_Save                      : 'Sichern ',
x_TXT                       : 'TXT-Datei (unverschlüsselt) ',
WALL_                    : 'Wallet ',

/* Header */
WARN_01               : 'Bitte prüfe stets die URL, bevor du auf dein Wallet zugreifst oder ein neues Wallet erzeugst. Vorsicht vor Phishing-Seiten! ',
WARN_04                : 'Stelle sicher, dass du über eine **externe Sicherung** von allen Wallets verfügst, die du hier speicherst. Es gibt viele Möglichkeiten, die dazu führen können, dass deine in dieser Chrome-Extension gespeicherten Daten verloren gehen, z.B. Deinstallation oder Neu-Installation. Diese Extension erleichert den Zugang zu deinen Wallets, ist jedoch keine empfohlene Möglichkeit, diese zu sichern. ',
FOOTER_Tagline                 : 'Open Source JavaScript Client-Side Ether Wallet ',
CX_Tagline                  : 'Open Source JavaScript Client-Side Ether Wallet Chrome Extension ',

/* Footer */
FOOTER_1                    : 'Ein quelloffenes, browserseitiges Werkzeug zur Erzeugung von Ethereum-Wallets und Versenden von Transaktionen. ',
FOOTER_1b                   : 'Erstellt von ',
FOOTER_2                    : 'Spenden sind herzlich willkommen ',
FOOTER_3                    : 'Browserseitige Wallet-Erzeugung durch ',
FOOTER_4                    : 'Disclaimer ',

/* Sidebar */
ACCOUNT_Info         : 'Kontoinformation ',
ACCOUNT_Address         : 'Kontoadresse ',
ACCOUNT_Balance          : 'Kontostand ',
TOKEN_Balance            : 'Token Kontostand ',
SIDEBAR_Equiv               : 'Währungs-Gegenwerte ',
TX_History        : 'Transaktions-Historie ',
SIDEBAR_donation            : 'MyEtherWallet ist ein freier, quelloffener Service, der deiner Privatsphäre und Sicherheit gewidmet ist. Je mehr Spenden wir erhalten, desto mehr Zeit können wir investieren, um neue Funktionen zu programmieren, dein Feedback zu verarbeiten und dir zu geben, was du dir wünschst. Wir sind nur zwei Leute, die die Welt ändern möchten. Hilfst du uns dabei? ',
SIDEBAR_donate              : 'Spenden ',
SIDEBAR_thanks              : 'Dankeschön!!! ',

/* Decrypt Panel */
DECRYPT_Access              : 'Wie möchtst du auf dein wallet zugreifen? ',
DECRYPT_Title               : 'Wähle das format deines privaten schlüssels ',
WALL_Select              : 'Wallet auswählen ',

/* Add Wallet */
DECRYPT_Label_1                 : 'Was möchtest du tun? ',
WALL_GenerateNew                 : 'Neues Wallet erstellen ',
DECRYPT_Radio_2                 : 'Wallet-Datei auswählen (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : 'Wallet-Datei auswählen ',
DECRYPT_Radio_2_short           : 'WALLET-DATEI AUSWÄHLEN... ',
DECRYPT_Radio_3                 : 'Kopiere/Tippe deinen privaten Schlüssel ein ',
ACCOUNT_AddWatch                 : 'Kontoadresse zur Beobachtung hinzufügen ',
MNEM_Enter                 : 'Füge deinen Mnemonic ein ',
MNEM_Enter_Path            : 'Select HD derivation path ',
MNEM_Enter_PathCustom      : 'Benutzerdefiniert ',
DECRYPT_Label_2                 : 'Wähle ein Kürzel ',
DECRYPT_Label_3                 : 'Deine Datei ist verschlüsselt. Bitte gib das Passwort ein ',
DECRYPT_Label_4                 : 'Kontoadresse zur Beobachtung hinzufügen ',
WARN_03               : 'Du kannst unter dem "Wallet-Tab" eine Kontoadresse "beobachten", ohne den privaten Schlüssel hochzuladen. Du hast damit **keinen** Zugang zu diesem Wallet und kannst auch keinen Ether daraus versenden. ',
DECRYPT_Label_5                 : 'Kontoadresse eingeben ',
WALL_Unlock                 : 'Wallet entsperren ',
WALL_Unlock_Short           : 'Entsperren ',
ACCOUNT_Add                 : 'Kontoadresse hinzufügen ',

/* Generate Wallets */
GEN_desc                    : 'Wenn du mehrere Wallets auf einmal erstellen möchtest, kannst du dies hier tun ',
PW_Enter                 : 'Gib ein starkes Passwort ein (mindestens 9 Zeichen) ',
PW_Enter           : 'BITTE VERGISS NICHT dieses Passwort an einem sicheren Ort zu notieren! ',
GEN_SuccessMsg              : 'Erfolgreich! Dein Wallet wurde erzeugt. ',
x_Keystore_Save                 : 'Sichere deine Keystore-Datei oder deinen privaten Schlüssel. Sichere auch dein Passwort! ',
ADDR_Save                 : 'Sichere deine Kontoadresse. ',
GEN_Label_4                 : 'Optional: Drucke dein Papier-Wallet oder speichere einen QR-Code. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Anzahl zu generierender Wallets ',
BULK_Label_2                : 'Wallets erstellen ',
BULK_SuccessMsg             : 'Erfolgreich! Deine Wallets wurden erstellt. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'An Adresse ',
x_Amount                 : 'Zu sendender Betrag ',
x_Amount_short           : 'Betrag ',
TOKEN_AddCustom                 : 'Benutzerdefiniert ',
x_GasLimit                    : 'Gas ',
TX_Send_All          : 'Gesamten verfügbaren Saldo übertragen ',
TX_Generate               : 'Erzeuge Transaktion ',
TX_Unsigned                    : 'Transaktion (Binärformat) ',
TX_Signed                 : 'Signierte Transaktion ',
TX_Send_Short                  : 'Sende Transaktion ',
TOKEN_AddCustom                 : 'Add Custom Token ',
SENDModal_Title             : 'Achtung! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Du bist dabei, ',
SENDModal_Content_2         : 'an die Adresse ',
SENDModal_Content_3         : 'zu senden. Bis du sicher, dass du das willst? ',
SENDModal_Content_4         : 'HINWEIS: Wenn du eine Fehlermeldung erhälst, musst du vermutlich deinen Ether-Saldo erhöhen, um die Gas-Kosten des Token-Versands zu bezahlen. Gas wird in Ether bezahlt. ',
SENDModal_No                : 'Nein, ich möchte diesen Vorgang abbrechen! ',
SENDModal_Yes               : 'Ja, ich bin mir sicher! Führe die Transaktion durch. ',

/* Tokens */
ADDR_Short                  : 'Adresse ',
TOKEN_Symbol                : 'Token-Symbol ',
TOKEN_Dec                   : 'Dezimalstellen ',
TOKEN_hide                  : 'Verstecke Token ',
TOKEN_show                  : 'Zeige alle Tokens ',

/* Send Transaction */
TX_desc                  : 'Wenn du Token senden willst, nutze bitte die "Sende Tokens" Funktion ',
TX_warning               : 'Wenn du die "Nur ETH" oder "Nur ETC" Funktionen benutzt, erfolgt die Transaktion über einen Vertrag. Einige Dienste haben ein Problem damit diese Transaktionen zu empfangen. Mehr lesen. ',
SEND_Advanced              : '+Fortgeschritten: Daten hinzufügen ',
x_Data                  : 'Daten ',
x_GasLimit                   : 'Gas Limit ',
TX_Send_ShortInfo              : 'Eine Standard Transaktion mit 21000 Gas kostet 0.000441 ETH. Wir zahlen einen minimal höheren Gaspreis von 0.000000021 ETH um zu garantieren, dass die Transaktion schnell bearbeitet wird. Wir erheben keine Transaktionsgebühren. ',

/* Send Transaction Modals */
TRANSModal_Title            : '"Nur ETH" und "Nur ETC" Transaktionen ',
TRANSModal_Content_0        : 'Ein Hinweis zu den verschiedenen Transaktionen und Angeboten ',
TRANSModal_Content_1        : '**ETH (Standard Transaktion): ** Dies erzeugt eine Standard Transaktion direkt von einer Adresse zu einer anderen. Diese nutzt standardmässig 21000 Gas. Es ist gut möglich, dass alle Transaktionen dieser Art auf der ETC Blockchain wiederholt werden (Replay Attacke). ',
TRANSModal_Content_2        : '**Nur ETH: ** Dies sendet die Transaktion so über [Timon Rapp\'s "replay protection contract" (wie von VB empfohlen)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/), dass sie nur auf der **ETH** Blockchain ausgeführt wird. ',
TRANSModal_Content_3        : '**Nur ETC: ** Dies sendet die Transaktion so über [Timon Rapp\'s "replay protection contract" (wie von VB empfohlen)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/), dass sie nur auf der **ETC** Blockchain ausgeführt wird. ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift: ** Sende nur Standard Transaktionen. Wenn du die Transaktion über eine der "Nur" Funktionen versendest, musst du den Support kontaktieren um deinen Betrag oder eine Rückerstattung zu erhalten. [Du kannst auch Shapeshifts "split" Werkzeug ausprobieren.](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex:** Keine Probleme bekannt. Nutzen, was dir lieber ist ',
TRANSModal_Yes              : 'Cool, jetzt hab ich\'s verstanden. ',
TRANSModal_No               : 'Bitte was? Ich bin noch verwirrter. Ich brauche Hilfe ',

/* Offline Transaction */
OFFLINE_Title               : 'Erzeuge & sende Offline Transaktionen ',
OFFLINE_Desc                : 'Offline Transaktionen können in drei Schritten erzeugt werden. Schritt 1 und 3 erledigst an einem Online Computer und Schritt 3 an einem Offline/abgeschirmten Computer. Dies stellt sicher, dass deine privaten Schlüssel nie ein mit dem Internet verbundenes Gerät berühren. ',
OFFLLINE_Step1_Title        : 'Schritt 1: Informationen sammeln (Online Computer) ',
OFFLINE_Step1_Button        : 'Informationen sammeln ',
ADDR_From       : 'Von Adresse ',
OFFLINE_Step1_Label_2       : 'Hinweis: Dies ist die VON Adresse, nicht die AN Adresse. Die Nonce wird basierend auf dem Ursprungsaccount berechnet. Wenn du einen abgeschirmten Computer nutzt, wäre dies die Adresse deines "cold-storage". ',
OFFLINE_Step2_Title         : 'Schritt 2: Transaktion generieren (Offline Computer) ',
ADDR_To       : 'An Adresse ',
OFFLINE_Step2_Label_2       : 'Zu sendender Betrag ',
x_GasPrice                  : 'Gaspreis ',
x_GasPriceDesc                 : 'Dies wurde dir in Schritt 1 an deinem Online Computer angezeigt. ',
x_GasLimit       : 'Gas Limit ',
x_GasLimitDesc      : '21000 ist das Standard Gas Limit. Wenn du Verträge oder Daten sendest, musst du diesen Wert eventuell anpassen. Alles ungenutzte Gas wird dir zurück gesendet. ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'Dies wurde dir in Schritt 1 an deinem Online Computer angezeigt. ',
x_Data       : 'Daten ',
x_DataDesc      : 'Dies ist optional. Daten werden meist in Transaktionen an Verträge verwendet. ',
OFFLINE_Step2_Label_7       : 'Gib deine privaten Schlüssel ein. ',
OFFLINE_Step3_Title         : 'Schritt 3: Transaktion senden/veröffentlichen (Online Computer) ',
OFFLINE_Step3_Label_1       : 'Kopiere die signierte Transaktion aus Schritt 2 hier hinein und drücke "TRANSAKTION SENDEN". ',

/* Deploy Contracts */
CONTRACT_GenBytecode                : 'Bytecode generieren ',
CONTRACT_GenBytecoded               : 'Generierter Bytecode ',
TX_Sign                  : 'Transaktion signieren ',
CONTRACT_GenInterface               : 'Generiertes Interface ',

/* My Wallet */
WALL_Nickname                  : 'Wallet Spitzname ',
MYWAL_Address               : 'Wallet Addresse ',
ACCOUNT_Balance                   : 'Guthaben ',
WALL_Edit_Short                  : 'Bearbeiten ',
WALL_View_Short                  : 'Ansehen ',
WALL_Remove                : 'Löschen ',
WALL_RemoveWal             : 'Wallet löschen ',
WALL_WatchOnlyAccounts             : 'Deine Watch-Only Konten ',
WALL_Viewing               : 'Du siehst Wallet ',
WALL_Hide                  : 'Wallet Info verstecken ',
WALL_Edit                : 'Wallet bearbeiten ',
WALL_Name                  : 'Wallet Name ',
WARN_06             : 'Achtung! Du bist gerade dabei dein Wallet zu löschen ',
WARN_07             : 'Stelle sicher, dass du **die private Key/JSON Datei und das Passwort** deines Wallets gespeichert hast, bevor du es löschst. ',
WARN_08             : 'Wenn du dieses Wallet in Zukunft mit MyEtherWallet CX verwenden willst, musst du es mittels der privaten Key/JSON Datei und deinem Passwort manuell wieder hinzufügen. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Dies erlaubt dir den Download verschiedener Versionen deines privaten Schlüssel sowie das erneute Drucken deines Papier-Wallets. Es wird empfohlen, dies zu tun um [Deinen Account in Geth/Mist zu importieren.](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Zum Überprüfen deines Kontostands empfehlen wir, einen Blockchain Explorer wie [etherscan.io](http://etherscan.io/) zu verwenden. ',
VIEWWALLET_Subtitle_Short   : 'Dies erlaubt dir den Download verschiedener Versionen deines privaten Schlüssel sowie das erneute Drucken deines Papier-Wallets. ',
VIEWWALLET_SuccessMsg       : 'Erfolgreich! Hier sind die Daten deines Wallets. ',

/* Chrome Extension */
ERROR_CX_01                  : 'Du hast keine Wallets gespeichert. Klicke ["Wallet hinzufügen"](/cx-wallet.html#add-wallet) um eines hinzuzufügen! ',
CX_quicksend                : 'Senden ', // Was "QuickSend". If no appropriate translation, just use "Send"

/* Node Switcher */
NODE_Title                  : 'Benutzerdefinierten Knoten einstellen',
NODE_Subtitle               : 'Verbinde mit einem lokalem Knoten...',
WARN_05                : 'Your node must be HTTPS in order to connect to it via MyEtherWallet.com. You can [download the MyEtherWallet repo & run it locally](https://github.com/kvhnuke/etherwallet/releases/latest) to connect to any node. Or, get free SSL certificate via [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Knotenname',
NODE_Port                   : 'Knotenport',
NODE_CTA                    : 'Speicher & Benutze Knoten',

/* Contracts */
CONTRACT_Title              : 'Vertragsadresse ',
CONTRACT_Title_2            : 'Existierenden Vertrag auswählen ',
CONTRACT_Json               : 'ABI / JSON Schnittstelle ',
CONTRACT_Interact_Title     : 'Vertrag lesen / schreiben ',
CONTRACT_Interact_CTA       : 'Wähle eine Funktion ',
CONTRACT_Bytecode           : 'Bytecode',
CONTRACT_Read               : 'LESEN ',
CONTRACT_Write              : 'SCHREIBEN ',

/* Swap / Exchange */
SWAP_rates                  : "Aktueller Kurs ",
SWAP_init_1                 : "Wechsel meine  ",
SWAP_init_2                 : " gegen ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Lass es uns tun! ", // or "Continue"
SWAP_information            : "Deine Informationen ",
x_Amount               : "Zusendender Betrag ",
SWAP_rec_amt                : "Empfangender Betrag ",
SWAP_your_rate              : "Dein Kurs ",
SWAP_rec_add                : "Deine Empfangsadresse ",
SWAP_start_CTA              : "Starte Wechsel ",
SWAP_ref_num                : "Deine Referenznummer ",
SWAP_time                   : "Zum Senden verbleibende Zeit   ",
SWAP_progress_1             : "Auftrag initialisiert ",
SWAP_progress_2             : "Warte auf deine ", // Waiting for your BTC...
SWAP_progress_3             : "Erhalten! ", // ETH Received!
SWAP_progress_4             : "Sende deine {{orderResult.output.currency}} ",
SWAP_progress_5             : "Auftrag erfüllt ", //Vielleicht erledigt!
SWAP_order_CTA              : "Bitte sende ", // Please send 1 ETH...
SWAP_unlock                 : "Schalte dein Wallet frei um ETH oder Tokens direkt von dieser Seite aus zu senden ",

/* Sign Message */
MSG_message                 : 'Nachticht ',
MSG_date                    : 'Datum ',
MSG_signature               : 'Signatur ',
MSG_verify                  : 'Nachricht verifizieren ',
MSG_info1                   : 'Include the current date so the signature cannot be reused on a different date. ',
MSG_info2                   : 'Include your nickname and where you use the nickname so someone else cannot use it. ',
MSG_info3                   : 'Include a specific reason for the message so it cannot be reused for a different purpose. ',

/* Mnemonic */
MNEM_1                      : 'Wähle den Vertrag, mit dem du interagieren willst. ',
MNEM_2                      : 'Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. ',
MNEM_more                   : 'Mehrere Adressen ',
MNEM_prev                   : 'Letzte Adressen ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S ',
DECRYPT_Ledger_1                : 'Verbinde deinen Ledger Nano S ',
DECRYPT_Ledger_2                : 'Öffne das Ethereum Programm (oder ein Vertragsprogramm) ', //Statt Programm -> Applikation?
DECRYPT_Ledger_3                : 'Gehe sicher, dass Browser Support aktiviert ist. ',
DECRYPT_Ledger_4                : 'If no Browser Support is found in settings, verify that you have [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_0a               : 'Re-open MyEtherWallet on a secure (SSL) connection ',
DECRYPT_Ledger_0b               : 'Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/) ',
DECRYPT_Ledger_scan             : 'Connect to Ledger Nano S ',
x_Trezor                    : 'TREZOR ',
DECRYPT_Trezor_scan             : 'Connect to TREZOR ',
DECRYPT_Trezor_select           : 'This is a TREZOR seed ',

/* Error Messages */
ERROR_0                     : 'Bitte gebe eine gültige betrag ein ',
ERROR_1                     : 'Dein Passwort muss mindestens 9 Zeichen lang sein. Bitte wähle ein sicheres Passwort. ',
ERROR_2                     : 'Oh oh! Wir haben den Typ der Wallet-Datei nicht erkannt. ',
ERROR_3                     : 'Dies ist keine gültige Wallet-Datei. ',
ERROR_4                     : 'Diese Einheit existiert nicht, bitte wähle eine dieser Einheiten aus ',
ERROR_5                     : 'Bitte gebe eine gültige Addresse ein. ',
ERROR_6                     : 'Bitte gebe eine gültige Passwort ein. ',
ERROR_7                     : 'Bitte gebe eine gültige Betrag ein. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Bitte gebe eine gültige Gasverbrauch ein. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Bitte gebe eine gültige Datenwert ein. (Must be hex.) ', // 9
ERROR_10                    : 'Bitte gebe eine gültige Gasbetrag ein. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Bitte gebe eine gültige Nonce ein. (Must be integer.) ', // 11
ERROR_12                    : 'Ungültige unterzeichnete Transaktion. ',
ERROR_13                    : 'Ein Wallet mit diesem Spitznamen existiert bereits. ',
ERROR_14                    : 'Wallet nicht gefunden. ',
ERROR_15                    : 'Es sieht nicht so aus als würde ein Proposal mit dieser ID existieren oder es gab einen Fehler beim Lesen des Proposal. ',
ERROR_16                    : 'Es ist bereits ein Wallet mit dieser Adresse gespeichert. Bitte überprüfe die Seite deines Wallets. ',
ERROR_17                    : 'Unzureichendes Guthaben für Gasverbrauch * Gaspreis + Wert. Du brauchst **0.01 ETH** in deinem Account um die Gaskosten zu decken. Bitte füge ETH hinzu und versuche es noch einmal. ',
ERROR_18                    : 'Diese Transaktion würde dein gesamtes verbleibendes Gas verbrauchen. Das bedeutet, du hast bereits über dieses Proposal abgestimmt oder die Debattierphase ist zu Ende. ',
ERROR_19                    : 'Ungültiges Symbol ',
ERROR_20                    : 'Not a valid ERC-20 token ',
ERROR_21                    : 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative. ',
ERROR_22                    : 'Bitte gebe einen gültigen Knotennamen ein ',
ERROR_23                    : 'Bitte gebe eine gültige URL ein. Falls du dich mit HTTPS verbindest, muss auch der Knoten mit HTTPS ausgestattet werden. ',
ERROR_24                    : 'Bitte gebe eine gültige Portnummer ein ',
ERROR_25                    : 'Bitte gebe eine gültige Chain-ID ein ',
ERROR_26                    : 'Bitte gebe eine gültige ABI ein ',
ERROR_27                    : 'Mindestbetrag: 0.01. Maximaler Betrag: ',
ERROR_28                    : '**Du benötigst deine Keystore-Datei & das Passwort** (oder den privaten Schlüssel) um künftig auf dein Wallet zugreifen zu können. Bitte sichere diese Datei daher auf einem externen Medium! Es gibt KEINE Möglichkeit, ein Wallet wiederherzustellen, wenn du diese Datei und das Passwort nicht sicherst. Lies die [Hilfe-Seite](https://www.myetherwallet.com/#help) für weitere Informationen. ',
ERROR_29                    : 'Bitte gebe einen gültigen Benutzer und Password ein ',
ERROR_30                    : 'Bitte gebe einen gültigen ENS Namen ein ',
ERROR_31                    : 'Bitte gebe einen gültigen Geheime Phasre ein ',
ERROR_32                    : 'Verbindung zum Knoten nicht möglich. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : 'Gültige Addresse ',
SUCCESS_2                   : 'Wallet erfolgreich entschlüsselt ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ', //'Transaktion übermittelt. TX Hash ',
SUCCESS_4                   : 'Dein Wallet wurde erfolgreich hinzugefügt ',
SUCCESS_5                   : 'Ausgewählte Datei ',
SUCCESS_6                   : 'Erfolgreich verbunden ',
SUCCESS_7                   : 'Nachtichten Signatur verifiziert',

/* Geth Error Messages */
GETH_InvalidSender          : 'Invalid sender Ungültiger Sender ',
GETH_Nonce                  : 'Nonce too low  ',
GETH_Cheap                  : 'Gaspreis zu niedrig! ', //Gas price too low for acceptance!
GETH_Balance                : 'Nicht genügend Guthaben ',
GETH_NonExistentAccount     : 'Account existiert nicht oder besitzt nicht genügend Guthaben ',
GETH_InsufficientFunds      : 'Unzureichendes Guthaben für Gasverbrauch * Gaspreis + Wert ',
GETH_IntrinsicGas           : 'Intrinsic gas too low ',
GETH_GasLimit               : 'Exceeds block gas limit ',
GETH_NegativeValue          : 'Negativer Wert ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "Transaction with the same hash was already imported.",
PARITY_Old                  : "Transaction nonce is too low. Try incrementing the nonce.",
PARITY_TooCheapToReplace    : "Transaction fee is too low. There is another transaction with same nonce in the queue. Try increasing the fee or incrementing the nonce.",
PARITY_LimitReached         : "There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the fee.",
PARITY_InsufficientGasPrice : "Transaction fee is too low. It does not satisfy your node's minimal fee (minimal: {}, got: {}). Try increasing the fee.",
PARITY_InsufficientBalance  : "Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} and got: {}.",
PARITY_GasLimitExceeded     : "Transaction cost exceeds current gas limit. Limit: {}, got: {}. Try decreasing supplied gas.",
PARITY_InvalidGasLimit      : "Supplied gas is beyond limit.",

WARN_02              : 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. ',

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : 'Vielen Dank an unsere ÜbersetzerInnen ',
z_TRANSLATE1            : 'christoph2806 · K · ',
z_TRANSLATE2            : '[mawalu](https://www.myetherwallet.com/?gaslimit=21000&to=0xA6e9A24981aFB71f96C7330618139a7B34BCdEc3&value=0.1#send-transaction) · ',
z_TRANSLATE3            : '[huhn_solo](https://www.myetherwallet.com/?gaslimit=21000&to=0x1DAd1765381460db9A44846cDfA6f74c65A06B77&value=0.1#send-transaction) · ',
z_TRANSLATE4            : '[FelixA](https://www.myetherwallet.com/?gaslimit=21000&to=0xb6999051b0Bfad32E192e107181E0ac72bE7EE3D&value=0.1#send-transaction) · ',
z_TRANSLATE5            : 'danielsun174 · ffidan61 '

};

module.exports = de;
