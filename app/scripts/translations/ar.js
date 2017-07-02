// Arabic
'use strict';
var ar = function() {}
ar.code = 'ar';
ar.data = {

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
WALL_Add               : 'إضافة محفظة ',
BULK_Generate            : 'Générer des portefeuilles par lots ',
x_Contact                 : 'اتصال ',
CONTRACT_Title               : 'عقود ',
CONTRACT_Deploy          : 'نشر عقد ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Générer un portefeuille ',
x_Help                    : 'مساعدة ',
CONTRACT_Interact        : 'التفاعل مع العقد ',
CONTRACT_Multisig                : 'Multisig ',
WALL_walletViewCX               : 'Mes portefeuilles ',
x_Offline                 : 'Envoyer hors-ligne ',
TX_Send_Title             : 'Envoyer des Ether et des Tokens ',
TX_Send_ShortTokens              : 'Envoyer des tokens ',
MSG_Sign                 : 'Signer un message ',
SWAP_Title                    : 'Échange ',
WALL_View              : 'Visualiser un portefeuille ',
WALL_Your             : 'Vos portefeuilles ',

/* General */
x_Access                    : 'Accès ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Aussi appelé "Numéro de compte" ou "Clé publique". C\'est ce que vous envoyez aux gens pour qu\'ils puissent vous envoyer des ether. Cette icone est une façon simple de reconnaitre votre adresse. ',
ADDR_                   : 'Votre adresse ',
x_Cancel                    : 'Annuler ',
x_CSV                       : 'Fichier CSV (non-chiffré) ',
x_Download                  : 'Télécharger ',
x_Json                      : 'Fichier JSON (non-chiffré) ',
x_JsonDesc                  : 'C\'est la version non-chiffrée au format JSON de votre clé privée. Cela signifie que vous n\'avez pas besoin de votre mot de passe pour l\'utiliser mais que toute personne qui trouve ce JSON peut accéder à votre portefeuille et vos Ether sans mot de passe. ',
x_Keystore                  : 'Fichier Keystore (UTC / JSON · Recommandé · Chiffré) ',
x_Keystore2                 : 'Fichier Keystore (UTC / JSON) ',
x_KeystoreDesc              : 'Ce fichier Keystore utilise le même format que celui que Mist, vous pouvez donc facilement l\'importer plus tard dans ces logiciels. C\'est le fichier que nous vous recommandons de télécharger et sauvegarder. ',
x_Ledger                    : 'Ledger Nano S ',
x_Mnemonic                  : 'Phrase mnémonique ',
x_ParityPhrase              : 'Phrase Parity ',
PW_                  : 'Mot de passe ',
x_Print                     : 'Imprimer un portefeuille papier ',
x_PrintDesc                 : 'Astuce : Cliquez sur Imprimer et sauvegardez le portefeuille papier comme un PDF, même si vous n\'avez pas d\'imprimante ! ',
x_PrintShort                : 'Imprimer ',
x_PrivKey                   : 'Clé privée (non-chiffrée) ',
x_PrivKey2                  : 'Clé privée ',
x_PrivKeyDesc               : 'C\'est la version textuelle non-chiffrée de votre clé privée, ce qui signifie qu\'aucun mot de passe n\'est nécessaire pour l\'utiliser. Si quelqu\'un venait à découvrir cette clé privée, il pourrrait accéder à votre portefeuille sans mot de passe. Pour cette raison, la version chiffrée de votre clé privée est recommandée. ',
x_Save                      : 'Sauvegarder ',
x_TXT                       : 'Fichier TXT (non-chiffré) ',
WALL_                    : 'Portefeuille ',

/* Header */
WARN_01               : 'Vérifiez toujours l\'URL avant d\'accéder à votre portefeuille ou de générer un nouveau portefeuille. Attentions aux sites de phishing ! ',
WARN_04                : 'Assurez vous d\'avoir une **sauvegarde externe** de tout portefeuille que vous gérez ici. De nombreux événements peuvent vous faire perdre les données de cette extension Chrome, y compris la dédinstallation et la réinstallation de l\'extension. Cette extension est une manière d\'accéder facilement à vos portefeuilles, **pas** une façon de les sauvegarder. ',
FOOTER_Tagline                 : 'Portefeuille d\'Ether Open Source JavaScript côté client ',
CX_Tagline                  : 'Extension Chrome de portefeuille d\'Ether Open Source JavaScript côté client ',

/* Footer */
FOOTER_1                    : 'Un outil open source en Javascript s\'exécutant côté client pour générer des portefeuilles Ethereum et envoyer des transactions. ',
FOOTER_1b                   : 'Créé par ',
FOOTER_2                    : 'Donations extrêmement appréciées : ',
FOOTER_3                    : 'Génération de portefeuille côté client par ',
FOOTER_4                    : 'Avertissement ',

/* Sidebar */
ACCOUNT_Info         : 'Informations du compte ',
ACCOUNT_Address         : 'Addresse du compte ',
ACCOUNT_Balance          : 'Solde du compte ',
TOKEN_Balance            : 'Solde en tokens ',
SIDEBAR_Equiv               : 'Valeur correspondante ',
TX_History        : 'Historique des transactions ',
SIDEBAR_donation            : 'MyEtherWallet est un service gratuit et open source respectueux de votre vie privée et de votre sécurité. Plus nous recevons de donations, plus nous dédions du temps à développer de nouvelles fonctions, à écouter vos retours et à vous fournir ce dont vous avez besoin. Nous ne sommes que deux personnes qui essayent de changer le monde. Aidez nous ! ',
SIDEBAR_donate              : 'Faire une donation ',
SIDEBAR_thanks              : 'MERCI !!! ',

/* Decrypt Panel */
DECRYPT_Access              : 'Comment voulez-vous accéder à votre portefeuille ? ',
DECRYPT_Title               : 'Choisissez le format de votre clé privée ',
WALL_Select              : 'Choisissez un portefeuille : ',

/* Add Wallet */
DECRYPT_Label_1                 : 'Que voulez-vous faire ? ',
WALL_GenerateNew                 : 'Générer un nouveau portefeuille ',
DECRYPT_Radio_2                 : 'Choisissez le fichier de votre portefeuille (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : 'Choisissez le fichier de portefeuille ',
DECRYPT_Radio_2_short           : 'CHOISISSEZ LE FICHIER DU PORTEFEUILLE... ',
DECRYPT_Radio_3                 : 'Collez/saisissez votre clé privée ',
ACCOUNT_AddWatch                 : 'Ajoutez un compte ',
MNEM_Enter                 : 'Collez/entrez votre mnémonique ',
MNEM_Enter_Path            : 'Select HD derivation path ',
MNEM_Enter_PathCustom      : 'Custom',
DECRYPT_Label_2                 : 'Nommez votre compte : ',
DECRYPT_Label_3                 : 'Votre fichier est chiffré, merci de saisir le mot de passe ',
DECRYPT_Label_4                 : 'Ajouter un compte à afficher ',
WARN_03               : 'Vous pouvez ajouter n\'importe quel compte pour l\'afficher dans l\'onglet "portefeuilles" sans uploader une clé privée. Cela ne veut **pas** dire que vous aurez accès à ce portefeuille, ni que vous pouvez transférer des Ethers depuis ce portefeuille. ',
DECRYPT_Label_5                 : 'Entrez l\'adresse ',
WALL_Unlock                 : 'Déverrouiller votre portefeuille ',
WALL_Unlock_Short           : 'Déverrouiller ',
ACCOUNT_Add                 : 'Ajouter un compte ',

/* Generate Wallets */
GEN_desc                    : 'Si vous voulez générer plusieurs portefeuilles, vous pouvez le faire ici ',
PW_Enter                 : 'Entrez un mot de passe fort',
PW_Enter           : 'N\'oubliez PAS de sauvegarder ceci ! ',
GEN_SuccessMsg              : 'Succès ! Votre portefeuille a été généré. ',
x_Keystore_Save                 : 'Sauvegardez votre fichier Keystore ou votre clé privée. N\'oubliez pas votre mot de passe ci-dessus. ',
ADDR_Save                 : 'Sauvegarder votre portefeuille. ',
GEN_Label_4                 : 'Optionnel: Imprimer votre portefeuille papier, ou conserver une version QR code. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Nombre de portefeuilles à générer ',
BULK_Label_2                : 'Générer les portefeuilles ',
BULK_SuccessMsg             : 'Succès ! Vos portefeuilles ont été générés. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'Adresse de destination ',
x_Amount                 : 'Montant à envoyer ',
x_Amount_short           : 'Montant ',
TOKEN_AddCustom                 : 'Token spécifique ',
x_GasLimit                    : 'Gaz ',
TX_Send_All          : 'Envoi du solde total ', // updated to be shorter
TX_Generate               : 'Générer la transaction ',
TX_Unsigned                    : 'Transaction brute ',
TX_Signed                 : 'Transaction signée ',
TX_Send_Short                  : 'Envoyer la transaction ',
SENDModal_Title             : 'Attention ! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Vous êtes sur le point d\'envoyer ',
SENDModal_Content_2         : 'à l\'adresse ',
SENDModal_Content_3         : 'En êtes-vous sûr ? ',
SENDModal_Content_4         : 'NOTE : Si vous renontrez une erreur, il est très probable que vous deviez ajouter des ether à votre compte pour couvrir les coûts en gaz d\'envoi des tokens. Le gaz est payé en ether. ',
SENDModal_No                : 'Non, je veux sortir d\'ici ! ',
SENDModal_Yes               : 'Oui, j\'en suis sûr ! Effectuer la transaction. ',

/* Tokens */
ADDR_Short                  : 'Adresse ',
TOKEN_Symbol                : 'Symbole du token ',
TOKEN_Dec                   : 'Décimales ',
TOKEN_show                  : 'Montrer tous les tokens ',
TOKEN_hide                  : 'Cacher les tokens ',

/* Send Transaction */
TX_desc                  : 'Si vous voulez envoyer des tokens, allez plutôt à la page "Envoi de tokens". ',
TX_warning               : 'L\'emploi des fonctions "ETH seulement" et "ETC seulement" vous fait passer par un contrat. Certains services ont des problèmes avec ces transactions. En savoir plus. ',
SEND_Advanced              : '+Avancé : Ajouter du gaz ',
x_Data                  : 'Données ',
TX_Send_ShortInfo              : 'Une transaction standard utilisant 21000 gaz coûtera 0.000441 ETH. Le prix du gaz de 0.000000021 ETH que nous avons choisi est légèrement supérieur au minimum ain d\'assurer une confirmation rapide. Nous ne prenons pas de frais de transaction. ',
x_GasLimit                   : 'Limite en gaz ', // changed in ENG to Gas Limit:

/* Send Transaction Modals */
TRANSModal_Title            : 'Transactions "ETH seulement" et "ETC seulement" ',
TRANSModal_Content_0        : 'Note sur les transactions et services divers : ',
TRANSModal_Content_1        : '**ETH (Transaction standard) : ** Génère une transaction par défaut directement depuis une adresse vers une autre. Son gaz par défaut est de 21000. Il est probable que toute transaction d\'ETH envoyé de cette manière sera réexécutée sur la chaîne ETC. ',
TRANSModal_Content_2        : '**ETH seulement : ** Envoie à travers le [contrat anti-réexécution de Timon Rapp (recommandé par VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) afin de n\'envoyer que sur la chaîne **ETH**. ',
TRANSModal_Content_3        : '**ETC seulement : ** Envoie à travers le [contrat anti-réexécution de Timon Rapp (recommandé par VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) afin de n\'envoyer que sur la chaîne **ETC**. ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift : ** N\'envoyer que par transaction standard. Si vous utilisez les contrats d\'envoi sur une seule chaîne, vous devrez joindre leur équipe de support pour ajouter manuellement la somme à votre solde ou pour vous rembourser. [Vous pouvez aussi essayer l\'outil "split" de Shapeshift.](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex :** Pas de problème connu. Utilisez ce que vous voulez. ',
TRANSModal_Yes              : 'Génial, j\'ai compris. ',
TRANSModal_No               : 'Aïe, je comprends de moins en moins. Aidez-moi. ',

/* Offline Transaction */
OFFLINE_Title               : 'Génération et envoi d\'une transaction hors ligne ',
OFFLINE_Desc                : 'La génération d\'une transaction hors ligne s\'effectue en trois étapes. Les étapes 1 et 3 sont réalisées sur un ordinateur en ligne et l\'étape 2 sur un ordinateur déconnecté du réseau. Cela permet d\'isoler totalement vos clefs privées de toute machine connectée à l\'internet. ',
OFFLLINE_Step1_Title        : 'Étape 1 : Gérération de l\'information (ordinateur en ligne) ',
OFFLINE_Step1_Button        : 'Générer l\'information ',
ADDR_From       : 'Addresse d\'émission ',
OFFLINE_Step1_Label_2       : 'Note : Il s\'agit de l\'adresse de départ, pas de l\'adresse d\'arrivée. Le nonce est généré à partir du compte de l\'expéditeur. Si on utilise une machine déconnectée du réseau, cette adresse est celle du compte en _cold storage_. ',
OFFLINE_Step2_Title         : 'Étape 2 : Génération de la transaction (ordinateur hors ligne) ',
ADDR_To       : 'Adresse de destination ',
OFFLINE_Step2_Label_2       : 'Valeur / montant à envoyer ',
x_GasPrice                  : 'Prix du gaz ',
x_GasPriceDesc                 : 'Ce montant était affiché à l\'étape 1 sur votre ordinateur en ligne. ',
x_GasLimit       : 'Limite de gaz ',
x_GasLimitDesc      : '21000 est la limite par défaut. En cas d\'envoi vers des contrats ou avec des données supplémentaires, cette valeur peut être différente. Tout gaz non consommé vous sera renvoyé. ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'Cette valeur a été affichée à l\'étape 1 sur votre ordinateur en ligne. ',
x_Data       : 'Données ',
x_DataDesc      : 'Cette zone est optionnelle. Les données sont souvent utilisées lors de transactions vers des contrats. ',
OFFLINE_Step2_Label_7       : 'Entrez / sélectionnez votre clef privée / JSON. ',
OFFLINE_Step3_Title         : 'Étape 3 : Envoyer / publier la transaction (ordinateur en ligne) ',
OFFLINE_Step3_Label_1       : 'Copier ici la transaction signée à l\'étape 2 et cliquez sur le bouton "ENVOYER LA TRANSACTION". ',

/* Sign Message */
MSG_message                 : 'Message ',
MSG_date                    : 'Date ',
MSG_signature               : 'Signature ',
MSG_verify                  : 'Verifier un message ',
MSG_info1                   : 'Inclure la date courante afin que la signature ne puisse pas être réutilisée à un autre moment. ',
MSG_info2                   : 'Inclure votre surnom et là où vous l\'utilisez afin que quelqu\'un d\'autre ne puisse l\'utiliser. ',
MSG_info3                   : 'Inclure une raison spécifique pour le message afin qu\'il ne puisse être réutilisé pour une raison différente. ',

/* My Wallet */
WALL_Nickname                  : 'Nom du portefeuille ',
MYWAL_Address               : 'Adresse du portefeuille ',
ACCOUNT_Balance                   : 'Solde ',
WALL_Edit_Short                  : 'Modifier ',
WALL_View_Short                  : 'Voir ',
WALL_Remove                : 'Supprimer ',
WALL_RemoveWal             : 'Supprimer le portefeuille : ',
WALL_WatchOnlyAccounts             : 'Vos comptes en affichage uniquement ',
WALL_Viewing               : 'Affichage des portefeuilles ',
WALL_Hide                  : 'Cacher les informations sur le portefeuille ',
WALL_Edit                : 'Modifier le portefeuille ',
WALL_Name                  : 'Nom du portefeuille ',
WARN_06             : 'Attention ! Vous êtes sur le point de supprimer votre portefeuille ',
WARN_07             : 'Assurez-vous d\'avoir bien **sauvegardé la clé privée/ fichier JSON et le mot de passe** associé à ce portefeuille avant de le supprimer. ',
WARN_08             : 'Si vous voulez utiliser ce portefeuille avec MyEtherWallet CX à l\'avenir, vous devrez le rajouter manuellement en utilisant la clé privée/fichier JSON et le mot de passe. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Ceci vous permet de télécharger plusieurs versions des clefs privées et de ré-imprimer votre portefeuille papier. Vous devrez le faire pour [importer votre compte dans Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Si vous voulez consulter votre solde, nous recommandons d\'utiliser un explorateur de blockchain comme [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Ceci vous permet de télécharger plusieurs versions des clefs privées et de ré-imprimer votre portefeuille papier. ',
VIEWWALLET_SuccessMsg       : 'Succès ! Voici les détails de votre portefeuille. ',

/* Mnemonic */
MNEM_1                      : 'Sélectionnez l\'adresse avec laquelle vous désirez interagir. ',
MNEM_2                      : 'Votre phrase mnémonique HD unique peut accéder à un certain nombre de portefeuilles/adresses. Sélectionnez l\'adresse avec laquelle vous désirez interagir actuellement. ',
MNEM_more                   : 'Plus d\'adresses ',
MNEM_prev                   : 'Adresses précédentes ',

/* Hardware wallets */
DECRYPT_Ledger_1                : 'Connectez votre Ledger Nano S ',
DECRYPT_Ledger_2                : 'Ouvrez l\'application Ethereum (ou une application de contrat) ',
DECRYPT_Ledger_3                : 'Vérifiez que l\'option Browser Support est activée dans Settings ',
DECRYPT_Ledger_scan             : 'Se connecter au Ledger Nano S ',
DECRYPT_Ledger_4                : 'Si l\'option Browser Support n\'est pas présente dans Settings, vérifiez que vous avez le [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_0a               : 'Réouvrir MyEtherWallet sur une connexion sécurisée (SSL) ',
DECRYPT_Ledger_0b               : 'Réouvrir MyEtherWallet avec [Chrome](https://www.google.com/chrome/browser/desktop/) ou [Opera](https://www.opera.com/) ',
x_Trezor                    : 'TREZOR ',
DECRYPT_Trezor_scan             : 'Connexion au TREZOR ',
DECRYPT_Trezor_select           : 'Ceci est une _seed_ TREZOR ',

/* Chrome Extension */
ERROR_CX_01                  : 'Vous n\'avez pas de portefeuille sauvegardé. Cliquez sur ["Ajout de portefeuille"](/cx-wallet.html#add-wallet) pour en ajouter un ! ',
CX_quicksend                : 'Envoi rapide ', // if no appropriate translation, just use "Send"

/* Misc *//* Node Switcher */
NODE_Title                  : 'Installer votre nœud personnalisé',
NODE_Subtitle               : 'Pour se connecter à un nœud local…',
WARN_05                : 'Votre nœud doit être en HTTPS pour vous y connecter via MyEtherWallet.com. Vous pouvez [téléccharger le repo MyEtherWallet et le lancer localement](https://github.com/kvhnuke/etherwallet/releases/latest) pour vous connecter à un nœud quelconque, ou obtenir un certificat SSL gratuit via [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Nom du nœud',
NODE_Port                   : 'Port du nœud',
NODE_CTA                    : 'Sauvegarder et utiliser un nœud personnalisé',

/* Contracts */
CONTRACT_Title              : 'Adresse de contrat ',
CONTRACT_Title_2            : 'Sélectionner un contrat existant ',
CONTRACT_Json               : 'Interface ABI / JSON ',
CONTRACT_Interact_Title     : 'Lecture / écriture de contrat ',
CONTRACT_Interact_CTA       : 'Sélectionnez une fonction ',
CONTRACT_Bytecode           : 'Bytecode ',
CONTRACT_Read               : 'LIRE ',
CONTRACT_Write              : 'ECRIRE ',
CONTRACT_GenBytecode                : 'Générer le bytecode ',
CONTRACT_GenBytecoded               : 'Bytecode généré ',
TX_Sign                  : 'Signer la transaction ',
CONTRACT_GenInterface               : 'Interface générée ',

/* Swap / Exchange */
SWAP_rates                  : "Taux actuels ",
SWAP_init_1                 : "Je veux échanger ",
SWAP_init_2                 : " contre ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Allons-y ! ", // or "Continue"
SWAP_information            : "Vos informations ",
x_Amount               : "Montant à envoyer ",
SWAP_rec_amt                : "Montant à recevoir ",
SWAP_your_rate              : "Votre taux ",
SWAP_rec_add                : "Votre adresse de réception ",
SWAP_start_CTA              : "Commencer l'échange ",
SWAP_ref_num                : "Votre numéro de référence ",
SWAP_time                   : "Temps restant pour l'envoi ",
SWAP_progress_1             : "Ordre déclenché ",
SWAP_progress_2             : "En attente de vos ", // Waiting for your BTC...
SWAP_progress_3             : "reçu ! ", // ETH Received!
SWAP_progress_4             : "Envoi de vos {{orderResult.output.currency}} ",
SWAP_progress_5             : "Ordre exécuté ",
SWAP_order_CTA              : "Envoyer ", // Please send 1 ETH...
SWAP_unlock                 : "Déverrouillez votre portefeuille pour envoyer des ETH ou des tokens directement depuis cette page. ",

/* Error Messages */
ERROR_0                     : 'Veuillez entrer un montant valide. ',
ERROR_1                     : 'Votre mot de passe doit faire au moins 9 caractères. Assurez vous qu\'il s\'agisse d\'un mot de passe fort. ',
ERROR_2                     : 'Désolé ! Notre service ne permet pas de gérer ce type de fichier de portefeuille. ',
ERROR_3                     : 'Ceci n\'est pas un fichier de portefeuille. ',
ERROR_4                     : 'Cette unité n\'existe pas, merci d\'utiliser une des unités suivantes ',
ERROR_5                     : 'Adresse invalide. ',
ERROR_6                     : 'Mot de passe invalide. ',
ERROR_7                     : 'Montant invalide. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Limite de gaz invalide. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Valeur des donnnées invalide. (Must be hex.) ', // 9
ERROR_10                    : 'Montant de gaz invalide. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Nonce invalide. (Must be integer.) ', // 11
ERROR_12                    : 'Transaction signée invalide. ',
ERROR_13                    : 'Un portefeuille avec ce nom existe déjà. ',
ERROR_14                    : 'Portefeuille non trouvé. ',
ERROR_15                    : 'Il semble qu\'aucune proposition n\'existe encore avec cet identifiant ou qu\'il y a une erreur lors de la consultation de cette proposition. ',
ERROR_16                    : 'Un portefeuille avec cette adresse existe déja. Merci de consulter la page listant vos portefeuilles. ',
ERROR_17                    : 'iFonds insuffisants. Le compte d\'où vous essayez d\'envoyer une transaction ne possède pas assez de fonds. Il vous faut au moins 0,01 ether sur votre compte pour couvrir les coûts du gaz. Ajoutez des ether et réessayez. ',
ERROR_18                    : 'Tout le gaz serait consommé lors de cette transaction. Cela signifie que vous avez déjà voté pour cette proposition ou que la période du débat est terminée. ',
ERROR_19                    : 'Symbole invalide ',
ERROR_20                    : 'n\'est pas un token ERC-20 valide. Si d\'autres tokens sont en train de se charger, enlevez celui-ci et réessayez. ',
ERROR_21                    : 'Impossible d\'estimer le gaz. Il n\'y a pas assez de fonds sur le compte, ou l\'adresse du contrat de réception a pu renvoyer une erreur. Vous pouvez ajuster vous-même le gaz et recommencer. Le message d\'erreur à l\'envoi peut comporter plus d\'informations. ',
ERROR_22                    : 'Entrez un nom de nœud valide ',
ERROR_23                    : 'Entrez une URL valide ; si vous êtes en https votre URL doit être https. ',
ERROR_24                    : 'Entrez un port valide ',
ERROR_25                    : 'Entrez un ID de chaîne valide ',
ERROR_26                    : 'Entrez une ABI valide ',
ERROR_27                    : 'Montant minimum : 0.01. Montant maximum : ',
ERROR_28                    : '**Vous avez besoin de votre fichier Keystore et du mot de passe** (ou de la clé privée) pour accéder à ce portefeuille dans le futur. Merci de le télécharger et d\'en faire une sauvegarde externe ! Il n\'existe aucun moyen de récupérer un portefeuille si vous ne le sauvegardez pas. Merci de lire la [page d\'Aide](https://www.myetherwallet.com/#help) pour plus de détails. ',
ERROR_29                    : 'Entrez un utilisateur et mot de passe valide ',
ERROR_30                    : 'Entrez un nom ENS valide ',
ERROR_31                    : 'Phrase secrète invalide ',
ERROR_32                    : 'Connexion au nœud impossible. Rafraîchissez la page or try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : 'Adresse valide ',
SUCCESS_2                   : 'Portefeuille déchiffré avec succès ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ', //'Transaction successfully broadcasted to the blockchain. **CLICK THE LINK TO ENSURE IT DID NOT FAIL DUE TO OUT OF GAS OR CONTRACT EXECUTION ERROR ON THE BLOCKCHAIN.** TX Hash ', //'Transaction envoyée. Identifiant de transaction ',
SUCCESS_4                   : 'Votre portefeuille a été ajouté avec succès ',
SUCCESS_5                   : 'Fichier sélectionné ',
SUCCESS_6                   : 'Vous êtes bien connecté ',
SUCCESS_7                   : 'Signature du message erifiée',

WARN_02              : 'Vous être arrivé grâce à un lien qui a rempli l\'adresse, le montant, le gaz ou les champs de données pour vous. Vous pouvez modifier toutes les informations avant d\'envoyer. Débloquez votre portefeuille pour démarrer. ',

/* Geth Error Messages */
GETH_InvalidSender          : 'Expéditeur invalide ',
GETH_Nonce                  : 'Nonce trop bas ',
GETH_Cheap                  : 'Prix du gaz trop bas pour être accepté ',
GETH_Balance                : 'Solde insuffisant ',
GETH_NonExistentAccount     : 'Compte inexistant ou solde du compte trop bas ',
GETH_InsufficientFunds      : 'Fonds insuffisants pour gaz * prix + valeur ',
GETH_IntrinsicGas           : 'Gaz intrinsèque trop bas ',
GETH_GasLimit               : 'Limite en gaz dépassée ',
GETH_NegativeValue          : 'Valeur négative ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "Une transaction avec un même hash a déjà été importée.",
PARITY_Old                  : "Le nonce de la transaction est trop bas. Essayez d'incrémenter le nonce.",
PARITY_TooCheapToReplace    : "Les frais de transaction sont trop bas. Il y a une autre transaction avec le même nonce en file d'attente. Essayez d'augmenter les frais ou d'incrémenter le nonce.",
PARITY_LimitReached         : "Il y a trop de transactions en file d'attente. Votre transaction a été abandonnée en raison de cette limite. Essayez d'augmenter les frais.",
PARITY_InsufficientGasPrice : "Les frais de transaction sont trop bas. Ils ne satisfont pas au minimum de votre nœud (minimum : {}, reçu : {}). Essayez d'augmenter les frais.",
PARITY_InsufficientBalance  : "iFonds insuffisants. Le compte d'où vous essayez d'envoyer une transaction ne possède pas assez de fonds. Requis : {}, reçu : {}.",
PARITY_GasLimitExceeded     : "Le coût de la transaction excède la limite en gaz courante. Limite : {}, reçu : {}. Essayez de réduire le gaz fourni.",
PARITY_InvalidGasLimit      : "Le gaz fourni est en-deça de la limite.",

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : 'Merci à nos traducteurs ',
z_TRANSLATE1            : '',
z_TRANSLATE2            : '',
z_TRANSLATE3            : '',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''

};

module.exports = ar;
