// Greek
'use strict';
var el = function() {}
el.code = 'el';
el.data = {

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
WALL_Add               : 'Προσθήκη Πορτοφολιού ',
BULK_Generate            : 'Δημιουργία Πολλών Πορτοφολιών ',
x_Contact                 : 'Επικοινωνία ',
CONTRACT_Title               : 'Contracts ',
CONTRACT_Deploy          : 'Deploy Contract ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Δημηουργία Πορτοφολιού ',
x_Help                    : 'Βοήθεια ',
CONTRACT_Interact        : 'Interact with Contract ',
CONTRACT_Multisig                : 'Multisig ',
WALL_walletViewCX               : 'Τα Πορτοφόλια μου ',
x_Offline                 : 'Αποστολή εκτός Σύνδεσης ',
TX_Send_Title             : 'Αποστολή Ether και Tokens ',
TX_Send_ShortTokens              : 'Αποστολή Tokens ',
MSG_Sign                 : 'Sign Message ',
SWAP_Title                    : 'Swap ',
WALL_View              : 'Προβολή Πληροφοριών Πορτοφολιού ',
WALL_Your             : 'Τα Πορτοφόλια σας ',

/* General */
x_Access                    : 'Access ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Γνωστή και ως "Αριθμός Λογαριασμού" σας ή "Δημόσιο Κλειδί" σας. Αυτή δίνετε σε όσους επιθυμούν να σας στείλουν ether. Το εικονίδιο είναι ένας εύκολος τρόπος αναγνώρισης της διεύθυνσής σας. ',
ADDR_                   : 'Η Διεύθυνσή σας ',
x_Cancel                    : 'Ακύρωση ',
x_CSV                       : 'Αρχείο CSV (μη κρυπτογραφημένο) ',
x_Download                  : 'Λήψη ',
x_Json                      : 'Αρχείο JSON (μη κρυπτογραφημένο) ',
x_JsonDesc                  : 'Αυτή είναι η μη κρυπτογραφημένη, JSON μορφή του Ιδιωτικού Κλειδιού σας. Αυτό σημαίνει ότι δεν απαιτείται κωδικός όμως οποιοσδήποτε βρει το JSON σας έχει πρόσβαση στο πορτοφόλι και τα Ether σας χωρίς κωδικό. ',
x_Keystore                  : 'Αρχείο Keystore (UTC / JSON · Συνιστάται · Κρυπτογραφημένο) ',
x_Keystore2                 : 'Αρχείο Keystore (UTC / JSON) ',
x_KeystoreDesc              : 'Αυτό το Αρχείο Keystore έχει την ίδια μορφή που χρησιμοποιείται από το Mist ώστε να μπορείτε εύκολα να το εισάγετε στο μέλλον. Είναι το συνιστώμενο αρχείο για λήψη και δημιουργία αντιγράφου ασφαλείας. ',
x_Mnemonic                  : 'Mnemonic Phrase ',
x_ParityPhrase              : 'Parity Phrase ',
PW_                  : 'Κωδικός ',
x_Print                     : 'Εκτύπωση Χάρτινου Πορτοφολιού ',
x_PrintDesc                 : 'Συμβουλή: Κλικάρετε "Εκτύπωση και Αποθήκευση ως PDF" ακόμη κι αν δεν έχετε εκτυπωτή! ',
x_PrintShort                : 'Εκτύπωση ',
x_PrivKey                   : 'Ιδιωτικό Κλειδί (μη κρυπτογραφημένο) ',
x_PrivKey2                  : 'Ιδιωτικό Κλειδί ',
x_PrivKeyDesc               : 'Αυτό το κείμενο είναι η μη κρυπτογραφημένη εκδοχή του Ιδιωτικού Κλειδιού σας που σημαίνει ότι δεν απαιτείται κωδικός. Στην περίπτωση που κάποιος βρει το μη κρυπτογραφημένο Ιδιωτικό Κλειδί σας, έχει πρόσβαση στο πορτοφόλι σας χωρίς κωδικό. Για αυτόν τον λόγο, συνήθως συνιστώνται οι κρυπτογραφημένες εκδοχές. ',
x_Save                      : 'Αποθήκευση ',
x_TXT                       : 'Αρχείο TXT (μη κρυπτογραφημένο) ',
WALL_                    : 'Πορτοφόλι ',

/* Header */
WARN_01               : 'Πάντα να ελέγχετε την διεύθυνση URL προτού μπείτε στο πορτοφόλι σας ή δημιουργήσετε καινούριο πορτοφόλι. Προσοχή στις σελίδες ηλεκτρονικού ψαρέματος! ',
WARN_04                : 'Σιγουρευτείτε ότι έχετε **εξωτερικά αντίγραφα ασφαλείας** όλων των πορτοφολιών που αποθηκεύετε εδώ. Μπορούν να συμβούν διάφορα που θα προκαλούσαν απώλεια των δεδομένων σας σε αυτήν την επέκταση Chrome, συμπεριλαμβανομένης απεγκατάστασης και επανεγκατάστασης της επέκτασης. Αυτή η επέκταση είναι ένας τρόπος εύκολης πρόσβασης στα πορτοφόλια σας και **όχι** ένας τρόπος να δημηιουργήσετε αντίγραφα ασφαλείας τους. ',
FOOTER_Tagline                 : 'Ασφαλές Πορτοφόλι Ether Ανοιχτού Κώδικα JavaScript από την πλευρά του Πελάτη ',
CX_Tagline                  : 'Επέκταση Chrome για Ασφαλές Πορτοφόλι Ether Ανοιχτού Κώδικα JavaScript από την πλευρά του Πελάτη ',

/* Footer */
FOOTER_1                    : 'Ένα εργαλείο ανοιχτού κώδικα, javascript, από πλευράς πελάτη για την δημιουργία Πορτοφολιών Ethereum & αποστολή συναλλαγών. ',
FOOTER_1b                   : 'Δημιουργήθηκε από ',
FOOTER_2                    : 'Εκτιμούμε πολύ τις δωρεές σας: ',
FOOTER_3                    : 'Δημιουργία Πορτοφολιών από πλευράς πελάτη από ',
FOOTER_4                    : 'Disclaimer ',

/* Sidebar */
ACCOUNT_Info         : 'Πληροφορίες Λογαριασμού ',
ACCOUNT_Address         : 'Διεύθυνση Λογαριασμού ',
ACCOUNT_Balance          : 'Υπόλοιπο Λογαριασμού ',
TOKEN_Balance            : 'Υπόλοιπο Token ',
SIDEBAR_Equiv               : 'Ισότιμες Αξίες ',
TX_History        : 'Ιστορικό Συναλλαγών ',
SIDEBAR_donation            : 'Το MyEtherWallet είναι μία δωρεάν υπηρεσία ανοιχτού κώδικα αφοσιωμένη στην ιδιωτικότητα και την ασφάλεια σας. Όσο περισσότερες δωρεές λαμβάνουμε, τόσο περισσότερο χρόνο αφιερώνουμε στη δημιουργία νέων χαρακτηριστικών καθώς και την αξιολόγηση και εφαρμογή όσων μας προτείνετε. Είμαστε απλά δύο άνθρωποι που προσπαθούν να αλλάξουν τον κόσμο. Θα μας βοηθήσετε; ',
SIDEBAR_donate              : 'Δωρεά ',
SIDEBAR_thanks              : 'ΣΑΣ ΕΥΧΑΡΙΣΤΟΥΜΕ!!! ',

/* Decrypt Panel */
DECRYPT_Access              : 'Πώς θα θέλατε να έχετε πρόσβαση στο Πορτοφόλι σας; ',
DECRYPT_Title               : 'Επιλέξτε την μορφή του Ιδιωτικού Κλειδιού σας: ',
WALL_Select              : 'Επιλέξτε Πορτοφόλι: ',

/* Add Wallet */
DECRYPT_Label_1                 : 'Τι θα θέλατε να κάνετε; ',
WALL_GenerateNew                 : 'Δημιουργία Νέου Πορτοφολιού ',
DECRYPT_Radio_2                 : 'Επιλέξτε το αρχείο Πορτοφολιού σας (Keystore / JSON) ',
DECRYPT_Radio_2_short           : 'ΕΠΙΛΕΞΤΕ ΑΡΧΕΙΟ ΠΟΡΤΟΦΟΛΙΟΥ... ',
DECRYPT_Radio_3                 : 'Επικολλήστε/Πληκτρολογήστε το Ιδιωτικό Κλειδί σας ',
ACCOUNT_AddWatch                 : 'Προσθήκη Λογαριασμού προς Παρακολούθηση ',
MNEM_Enter                 : 'Paste/Type Your Mnemonic ',
MNEM_Enter_Path            : 'Select HD derivation path ',
MNEM_Enter_PathCustom      : 'Custom',
DECRYPT_Label_2                 : 'Δημιουργία Ψευδωνύμου: ',
DECRYPT_Label_3                 : 'Το πορτοφόλι σας είναι κρυπτογραφημένο. Παρακαλώ εισάγετε τον κωδικό ',
DECRYPT_Label_4                 : 'Προσθήκη Λογαριασμού προς Παρακολούθηση ',
WARN_03               : 'Μπορείτε να προσθέσετε έναν λογαριασμό προς "παρακολούθηση" στην καρτέλα πορτοφολιών χωρίς να ανεβάσετε ιδιωτικό κλειδί. Αυτό ** δεν ** σημαίνει ότι έχετε πρόσβαση στο πορτοφόλι, ούτε ότι μπορείτε να μεταφέρετε Ether από αυτό. ',
DECRYPT_Label_5                 : 'Εισάγετε την Διεύθυνση ',
WALL_Unlock                 : 'Ξεκλειδώστε το Πορτοφόλι σας ',
WALL_Unlock_Short           : 'Ξεκλείδωμα ',
ACCOUNT_Add                 : 'Προσθήκη Λογαριασμού ',

/* Generate Wallets */
GEN_desc                    : 'Αν επιθυμείτε να δημιουργήσετε πολλά πορτοφόλια, μπορείτε να το κάνετε εδώ: ',
PW_Enter                 : 'Εισάγετε ισχυρό κωδικό (τουλάχιστον 9 χαρακτήρες) ',
PW_Enter           : 'ΜΗΝ ξεχάσετε να τον αποθηκεύσετε! ',
GEN_SuccessMsg              : 'Επιτυχία! Το πορτοφόλι σας δημιουργήθηκε. ',
x_Keystore_Save                 : 'Αποθηκεύστε το αρχέιο Keystore/JSON ή το Ιδιωτικό Κλειδί. Μην ξεχάσετε τον παραπάνω κωδικό. ',
ADDR_Save                 : 'Αποθηκέυστε την Διεύθυνση σας. ',
GEN_Label_4                 : 'Εκτυπώστε το χάρτινο Πορτοφόλι σας ή αποθηκέυστε την εκδοχή με QR code. (προαιρετικό) ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Αριθμός Πορτοφολιών για Δημιουργία ',
BULK_Label_2                : 'Δημιουργία Πορτοφολιών ',
BULK_SuccessMsg             : 'Επιτυχία! Τα πορτοφόλια σας δημιουργήθηκαν. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'Προς Διεύθυνση ',
x_Amount                 : 'Ποσό για αποστολή ',
x_Amount_short           : 'Ποσό ',
TOKEN_AddCustom                 : 'Custom ',
x_GasLimit                    : 'Gas ',
TX_Generate               : 'Δημιουργία Υπογεγραμμένης Συναλλαγής ',
TX_Unsigned                    : 'Ακατέργαστη Συναλλαγή ',
TX_Signed                 : 'Υπογεγραμμένη Συναλλαγή ',
TX_Send_Short                  : 'Αποστολή Συναλλαγής ',
TX_Send_All          : 'Μεταφορά συνολικού διαθέσιμου υπολοίπου ',
TOKEN_AddCustom                 : 'Add Custom Token ',
SENDModal_Title             : 'Προσοχή! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Πρόκειται να στείλετε ',
SENDModal_Content_2         : 'στη διεύθυνση ',
SENDModal_Content_3         : 'Είστε σίγουροι ότι θέλετε να το κάνετε; ',
SENDModal_Content_4         : 'ΣΗΜΕΙΩΣΗ: Αν αντιμετωπίσετε σφάλμα, το πιο πιθανό χρειάζεται να προσθέσετε ether στον λογαριασμό σας για να καλύψετε το κόστος gas για την αποστολή token. Το gas πληρώνεται σε ether. ',
SENDModal_No                : 'Όχι, θέλω να φύγω από εδώ! ',
SENDModal_Yes               : 'Ναι, είμαι σίγουρος/η! Εκτελέστε την συναλλαγή. ',
TX_Send_All          : 'Μεταφορά όλου του υπάρχοντος υπολοίπου ',

/* Tokens */
ADDR_Short                  : 'Διεύθυνση ',
TOKEN_Symbol                : 'Σύμβολο Token ',
TOKEN_Dec                   : 'Δεκαδικά ',
TOKEN_hide                  : 'Hide Tokens ',
TOKEN_show                  : 'Show All Tokens ',

/* Send Transaction */
TX_desc                  : 'Άν επιθυμείτε να στείλετε Tokens, παρακαλώ χρησιμοποιήστε την σελίδα "Αποστολή Token". ',
TX_warning               : 'Άν χρησιμοποιείτε τις λειτουργίες "Μόνο ETH" ή "Μόνο ETC", η αποστολή γίνεται μέσω contracts. Ορισμένες υπηρεσίες παρουσιάζουν προβλήματα με την αποδοχή τέτοιων συναλλαγών. Διαβάστε περισσότερα. ',
SEND_Advanced              : '+Για προχωρημένους: Προσθήκη Data ',
x_Data                  : 'Data ',
x_GasLimit                   : 'Gas Limit ',
TX_Send_ShortInfo              : 'Μία standard συναλλαγή που χρησιμοποιεί 21000 gas θα κοστίσει 0,000441 ETH. Χρησιμοποιούμε για τιμή gas 0.000000021 ETH που είναι λίγο πάνω απο την ελάχιστη ώστε διασφαλίσουμε οτι θα επικυρωθεί γρήγορα. Δεν παίρνουμε προμήθεια για την συναλλαγή. ',

/* Send Transaction Modals */
TRANSModal_Title            : 'Συναλλαγές "Μόνο ETH" και "Μόνο ETC" ',
TRANSModal_Content_0        : 'Μια σημείωση για τις διάφορετικές συναλλαγές και διαφορετικές υπηρεσίες συναλλαγών: ',
TRANSModal_Content_1        : '**ETH (Standard Συναλλαγή): ** This generates a default transaction directly from one address to another. It has a default gas of 21000. It is likely that any ETH sent via this method will be replayed onto the ETC chain. ',
TRANSModal_Content_2        : '**Μόνο ETH: ** This sends via [Timon Rapp\'s replay protection contract (as recommended by VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) so that you only send on the **ETH** chain. ',
TRANSModal_Content_3        : '**Μόνο ETC: ** This sends via [Timon Rapp\'s replay protection contract (as recommended by VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) so that you only send on the **ETC** chain. ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift: ** Αποστέλλετε μόνο με Standard Συναλλαγή. Αν στείλετε με τα "Μόνο" contracts, θα χρεαιστεί να έρθετε σε επφή με το προσωπικό υποστήριξης τους ώστε να σας βοηθήσουν με χειροκίνητη μεταφορά υπολοίπων ή επιστροφή χρημάτων.[Μπορείτε επίσης να δοκιμάσετε το εργαλείο "διαχωρισμού" του Shapeshift](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex:** Δεν υπάρχουν γνωστά προβλήματα. Αποστέλλετε με οποιαδήποτε μέθοδο. ',
TRANSModal_Yes              : 'Τέλεια, το κατάλαβα. ',
TRANSModal_No               : 'Πωπω, μπερδεύτηκα ακόμη περισσότερο. Βοηθήστε με. ',

/* Offline Transaction */
OFFLINE_Title               : 'Δημιουργία και Αποστολή Συναλλαγής εκτός Σύνδεσης ',
OFFLINE_Desc                : 'Η δημιουργία συναλλαγών εκτός σύνδεσης μπορεί να γίνει σε τρία βήματα. Θα προβείτε στα βήματα 1 και 3 σε έναν συνδεδεμένο υπολογιστή και το βήμα 2 σε έναν εκτός σύνδεσης/αποκομμένο υπολογιστή. Αυτό εξασφαλίζει ότι τα ιδιωτικά κλειδιά σας δεν έρχονται σε επαφή με συσκευή συνδεδεμένη στο διαδίκτυο. ',
OFFLLINE_Step1_Title        : 'Βήμα 1: Δημιουργία Πληροφοριών (Συνδεδεμένος Υπολογιστής) ',
OFFLINE_Step1_Button        : 'Δημιουργία Πληροφοριών ',
ADDR_From       : 'Από Διεύθυνση: ',
OFFLINE_Step1_Label_2       : 'Σημείωση: Αυτή είναι η Διεύθυνση ΑΠΟΣΤΟΛΕΑ, ΟΧΙ η Διεύθυνση. Το nonce δημιουργείται απο τον λογαριασμό προέλευσης. Αν χρησιμοποιείται αποκομμένο υπολογιστή, πρόκειται για την διεύθυνση του λογαριασμού σε cold-storage. ',
OFFLINE_Step2_Title         : 'Step 2: Δημιουργία Συναλλαγής (εκτός Σύνδεσης Υπολογιστής) ',
ADDR_To       : 'Προς Διεύθυνση ',
OFFLINE_Step2_Label_2       : 'Αξία / Ποσό για Αποστολή ',
x_GasPrice                  : 'Τιμή Gas ',
x_GasPriceDesc                 : 'Εμφανίστηκε στο Βήμα 1 στον συνδεδεμένο υπολογιστή σας. ',
x_GasLimit       : 'Όριο Gas ',
x_GasLimitDesc      : '21000 είναι το προεπιλεγμένο όριο gas. When you send contracts or add\'l data, this may need to be different. Any unused gas will be returned to you. ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'Εμφανίστηκε στο Βήμα 1 στον συνδεδεμένο υπολογιστή σας. ',
x_Data       : 'Data ',
x_DataDesc      : 'Αυτό είναι προαιρετικό. Data συνήθως χρησιμοποιούνται όταν αποστέλλονται συναλλαγές σε contracts. ',
OFFLINE_Step2_Label_7       : 'Εισαγωγή / Επιλογή του Ιδιωτικού Κλειδιού / JSON. ',
OFFLINE_Step3_Title         : 'Βήμα 3: Δημοσίευση Συναλλαγής (Συνδεδεμένος Υπολογιστής) ',
OFFLINE_Step3_Label_1       : 'Επικολλήστε την υπογεγραμμένη συναλλαγή εδώ και πατήστε το κουμπί "ΑΠΟΣΤΟΛΗ ΣΥΝΑΛΛΑΓΗΣ". ',

/* My Wallet */
WALL_Nickname                  : 'Ψευδώνυμο Πορτοφολιού ',
MYWAL_Address               : 'Διεύθυνση Πορτοφολιού ',
ACCOUNT_Balance                   : 'Υπόλοιπο ',
WALL_Edit_Short                  : 'Επεξεργασία ',
WALL_View_Short                  : 'Προβολή ',
WALL_Remove                : 'Αφαίρεση ',
WALL_RemoveWal             : 'Αφαίρεση Πορτοφολιού: ',
WALL_WatchOnlyAccounts             : 'Οι Μόνο-προς-παρακολούθηση-Λογαριασμοί ',
WALL_Viewing               : 'Προβάλλεται το Πορτοφόλι ',
WALL_Hide                  : 'Απόκρυψη Πληροφοριών Πορτοφολιού ',
WALL_Edit_Short                  : 'Επεξεργασία Πορτοφολιού ',
WALL_Name                  : 'Όνομα Πορτοφολιού ',
WARN_06             : 'Προσοχή! Πρόκειται να αφαιρέσετε το πορτοφόλι σας. ',
WARN_07             : 'Σιγουρευτείτε ότι έχετε **αποθηκεύσει το αρχέιο Keystore/JSON και τον κωδικό** του πορτοφολιού αυτού πριν το αφαιρέσετε. ',
WARN_08             : 'Αν θέλετε να χρησιμοποιήσετε το ποροτοφόλι αυτό με το MyEtherWalletCX στο μέλλον, θα χρειαστεί να το ξαναπροσθέσετε χειροκίνητα χρησιμοποιώντας το Ιδιωτικό Κλειδί/JSON και τον κωδικό. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Αυτό σας επιτρέπει να κατεβάσετε διαφορετικές εκδοχές των ιδιωτικών κλειδιών σας και να επανεκτυπώσετε το χάρτινο πορτοφόλι σας. Ίσως επιθυμείτε να το κάνετε προκειμένου να [εισάγετε τον Λογαριασμό σας στο Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Αν επιθυμείτε να ελέγξετε το υπόλοιπό σας, συνιστούμε να χρησιμοποιήσετε ένα εργαλείο εξερεύνησης blockchain όπως το [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Αυτό σας επιτρέπει να κατεβάσετε διαφορετικές εκδοχές των ιδιωτικών κλειδιών σας και να επανεκτυπώσετε το χάρτινο πορτοφόλι σας. ',
VIEWWALLET_SuccessMsg       : 'Επιτυχία! Εδώ είναι οι πληροφορίες για το πορτοφόλι σας. ',

/* CX */
ERROR_CX_01                  : 'Δεν έχετε αποθηκευμένα πορτοφόλια. Κάντε κλικ στο ["Προσθήκη Πορτοφολιού"](/cx-wallet.html#add-wallet) για να προσθεσετε ένα! ',
CX_quicksend                : 'ΤαχυΑποστολή ',

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

/* Error Messages */
ERROR_0                     : 'Παρακαλώ εισάγετε έγκυρο ποσό. ',
ERROR_1                     : 'Ο κωδικός σας πρέπει να αποτελείται απο τουλάχιστον 9 χαρακτήρες. Παρακαλώ σιγουρευτείτε ότι είναι ισχυρός κωδικός. ',
ERROR_2                     : 'Συγγνώμη! Δεν αναγνωρίζουμε αυτού του είδους αρχεία πορτοφολιού ',
ERROR_3                     : 'Αυτό δεν είναι έγκυρο αρχείο πορτοφολιού. ',
ERROR_4                     : 'Αυτή η μονάδα δεν υπάρχει, παρακαλώ χρησιμοποιήστε μία απο τις ακόλουθες μονάδες: ',
ERROR_5                     : 'Λάθος Διεύθυνση. ',
ERROR_6                     : 'Λάθος κωδικός. ',
ERROR_7                     : 'Λάθος ποσό. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Λάθος όριο gas. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Λάθος data value. (Must be hex.) ', // 9
ERROR_10                    : 'Λάθος ποσό gas. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Λάθος nonce. (Must be integer.) ', // 11
ERROR_12                    : 'Λάθος υπογεγραμμένη συναλλαγή. ',
ERROR_13                    : 'Υπάρχει ήδη πορτοφόλι με αυτό το ψευδώνυμο. ',
ERROR_14                    : 'Δεν βρέθηκε πορτοφόλι. ',
ERROR_15                    : 'Φαίνετα να μην υπάρχει ακόμη πρόταση με αυτό το ID ή υπήρξε σφάλμα κατά την ανάγνωση της πρότασης αυτής. ',
ERROR_16                    : 'Υπάρχει ήδη αποθηκευμένο πορτοφόλι με αυτή την διεύθυνση. Παρακαλώ ελέγξτε την σελίδα πορτοφολιών σας. ',
ERROR_17                    : 'Account you are sending from does not have enough funds. If sending tokens, you must have 0.01 ETH in your account to cover the cost of gas. ', // 17
ERROR_18                    : 'Όλο το gas θα είχε δαπανηθεί στην συναλλαγή αυτή. Αυτό σημαίνει ότι έχετε ήδη ψηφίσει στην πρόταση αυτή ή ότι η περίοδος συζήτησης έχει λήξει. ',
ERROR_19                    : 'Λάθος σύμβολο ',
ERROR_20                    : 'Not a valid ERC-20 token', // 20
ERROR_21                    : 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.', // 21
ERROR_22                    : 'Please enter a valid node name', // 22
ERROR_23                    : 'Please enter a valid URL. If you are on https, your URL must be https', // 23
ERROR_24                    : 'Please enter a valid port. ', // 24
ERROR_25                    : 'Please enter a valid chain ID. ', // 25
ERROR_26                    : 'Please enter a valid ABI. ', // 26
ERROR_27                    : 'Minimum amount: 0.01. Max amount: ', // 27
ERROR_28                    : 'Προκειμένου να έχετε πρόσβαση σε αυτό το πορτοφόλι στο μέλλον **είναι απαραίτητο το αρχείο Keystore/JSON & ο κωδικός ή το Ιδιωτικό Κλειδί σας**. Παρακαλούμε κρατήστε ένα εξωτερικό αντίγραφο ασφαλείας! Δεν υπάρχει τρόπος ανάκτησης ενός πορτοφολιού άν δεν το αποθηκέυσετε. Διαβάστε την σελίδα [Βοήθειας](https://www.myetherwallet.com/#help) για οδηγίες. ',
ERROR_29                    : 'Please enter valid user and password ',
ERROR_30                    : 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
ERROR_31                    : 'Please enter a valid secret phrase. ', // 31
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : 'Έγκυρη διεύθυνση ',
SUCCESS_2                   : 'Το πορτοφόλι αποκρυπτογραφήθηκε επιτυχώς ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ', //'Η συναλλαγή υποβλήθηκε. TX Hash ',
SUCCESS_4                   : 'Το πορτοφόλι σας προστέθηκε επιτυχώς ',
SUCCESS_5                   : 'File Selected ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
/* Messages */
GETH_InvalidSender          : 'Invalid sender ',
GETH_Nonce                  : 'Nonce too low ',
GETH_Cheap                  : 'Gas price too low for acceptance ',
GETH_Balance                : 'Insufficient balance ',
GETH_NonExistentAccount     : 'Account does not exist or account balance too low ',
GETH_InsufficientFunds      : 'Insufficient funds for gas * price + value ',
GETH_IntrinsicGas           : 'Intrinsic gas too low ',
GETH_GasLimit               : 'Exceeds block gas limit ',
GETH_NegativeValue          : 'Negative value ',

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
z_TRANSLATEDesc             : 'Ευχαριστούμε τους μεταφραστές μας ',
z_TRANSLATE1            : '[VitalikFanBoy#117](https://www.myetherwallet.com/?gaslimit=21000&to=0x245f27796a44d7e3d30654ed62850ff09ee85656&value=0.1#send-transaction) · ',
z_TRANSLATE2            : 'LefterisJP  · ',
z_TRANSLATE3            : '[Nikos Vavoulas](https://www.myetherwallet.com/?gaslimit=21000&to=0x062711C89Bd46E9765CfF0b743Cb83a9dBA2d2d2&value=0.1#send-transaction)',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''
};

module.exports = el;
