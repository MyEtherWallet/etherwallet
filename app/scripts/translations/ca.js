// Català
'use strict';
var ca = function() {}
ca.code = 'ca';
ca.data = {

/* New Generics */
x_CancelReplaceTx           : 'Cancel·la o Reemplaça la transacció',
x_CancelTx                  : 'Cancel·la la transacció',
x_PasswordDesc              : 'Aquesta contrasenya * xifra * la teva clau privada. Això no funciona com a llavor per generar les vostres claus. **Necessitaràs aquesta contrasenya + la teva clau privada per desbloquejar la teva cartera.**',
x_ReadMore                  : 'Llegir-ne més',
x_ReplaceTx                 : 'Reemplaça la transacció',
x_TransHash                 : 'Hash de la transacció',
x_TXFee                     : 'TX Fee',
x_TxHash                    : 'TX Hash',

/* Check TX Status */
NAV_CheckTxStatus           : 'Comprova l\'estat d\'una TX',
NAV_TxStatus                : 'Estat de la TX',
tx_Details                  : 'Detalls de transacció',
tx_Summary                  : 'Durant períodes de molt volum (quan hi ha ICOs per exemple) les transaccions poder restar pendents durant hores, o dies. Aquesta eina té com a objectiu permetre\'t trobar i "cancel·lar" / reemplaçar aquestes TXs. ** Això no sol ser una cosa que puguis fer. No s\'hi hauria de confirmar i només funcionarà quan les TX Pools siguin plenes. [Si us plau, llegiu sobre aquesta eina aquí.](https://myetherwallet.github.io/knowledge-base/transactions/check-status-of-ethereum-transaction.html)**',
tx_notFound                 : 'Transacció no trobada',
tx_notFound_1               : 'Aquesta TX no es pot trobar al TX Pool del node amb el qual estàs connectat.',
tx_notFound_2               : 'Si acabes d\'enviar la transacció, espera 15 segons i prem el botó "Comprova l\'estat d\'una TX" de nou. ',
tx_notFound_3               : 'Encara podria estar al TX Pool d\'un node diferent, esperant ser minat.',
tx_notFound_4               : 'Utilitza el menú desplegable a la part superior dreta i selecciona un node ETH diferent (p. Ex. `ETH (Etherscan.io)` o `ETH (Infura.io)` o `ETH (MyEtherWallet)`)  i torna-ho a comprovar.',
tx_foundInPending           : 'Transacció pendent trobada',
tx_foundInPending_1         : 'La teva transacció s\'ha trobat a la TX Pool del node amb el qual estàs connectat. ',
tx_foundInPending_2         : 'Actualment està pendent (esperant ser minada). ',
tx_foundInPending_3         : 'Hi ha una oportunitat de "cancel·lar" or reemplaçar aquesta transacció. Desbloqueja la teva cartera a continuació.',
tx_FoundOnChain             : 'Transacció trobada',
tx_FoundOnChain_1           : 'La teva transacció s\'ha minat correctament i és a la blockchain.',
tx_FoundOnChain_2           : '**Si veus un `( ! )` vermell, un missatge d\'error `BAD INSTRUCTION` o `OUT OF GAS` **, vol dir que la transacció no s\'ha *enviat* correctament. No es pot cancel·lar o reemplaçar aquesta transacció. En lloc d\'això, envia una transacció nova. Si reps un error "Out of Gas", hauries de duplicar el límit de gas especificat originalment.',
tx_FoundOnChain_3           : '**Si no veus cap error, la teva transacció s\'ha enviat amb èxit.** El teu ETH o Tokens són on els has enviat. Si no pots veure aquest ETH o Tokens a la teva cartera / compte de bescanvi, i han passat més de 24 hores des de l\'enviament, si us plau [contacta amb aquest servei](https://myetherwallet.github.io/knowledge-base/diving-deeper/ethereum-list-of-support-and-communities.html). Envia *l\'enllaç* de la teva transacció si demana amablement que investiguin.',

/* Gen Wallet Updates */
GEN_Help_1                  : 'Utilitza la teva',
GEN_Help_2                  : 'per accedir al teu compte.',
GEN_Help_3                  : 'El teu dispositiu * és * la teva cartera.',
GEN_Help_4                  : 'Guies & PMF',
GEN_Help_5                  : 'Com Crear una cartera',
GEN_Help_6                  : 'Començant',
GEN_Help_7                  : 'Mantén-l\'ho segur · Fes-ne una còpia de seguretat · No el comparteixis amb ningú · No el perdis · No es pot recuperar si el perds.',
GEN_Help_8                  : 'No es descarrega un fitxer? ',
GEN_Help_9                  : 'Intentar fer servir Google Chrome ',
GEN_Help_10                 : 'Fes clic amb el botó dret i deseu el fitxer com a. Nom del fitxer: ',
GEN_Help_11                 : 'No obris aquest fitxer al teu ordinador ',
GEN_Help_12                 : 'Utilitza\'l per desbloquejar la teva cartera amb MyEtherWallet (o Mist, Geth, Parity i altres clients de carteres.) ',
GEN_Help_13                 : 'Com fer una copia de seguretat del teu fitxer Keystore ',
GEN_Help_14                 : 'Que són aquests formats diferents? ',
GEN_Help_15                 : 'Evitant perdues i robatoris dels teus fons.',
GEN_Help_16                 : 'Que són aquests formats diferents?',
GEN_Help_17                 : 'Perquè hauria?',
GEN_Help_18                 : 'Per tenir-ne una segona copia de seguretat.',
GEN_Help_19                 : 'En cas que oblidis la teva contrasenya.',
GEN_Help_20                 : 'Cold Storage',
GET_ConfButton              : 'Ho entenc. Continua.',
GEN_Label_5                 : 'Desa la teva `Clau Privada`. ',
GEN_Unlock                  : 'Desbloqueja la teva cartera per veure\'n l\'adreça',
GAS_PRICE_Desc              : 'El preu del gas és la quantitat que pagues per unitat de gas. `TX fee = preu del gas * límit de gas` i es paga als miners per incloure la teva TX a un block. Preu de gas més elevat = transacció més ràpida, però més cara. Per defecte és `21 GWEI`.',
GAS_LIMIT_Desc              : 'El límit de gas és la quantitat de gas a enviar amb la teva TX. `TX fee` = preu del gas * límit de gas; i es paga als miners per incloure la teva TX a un block. Incrementat aquest nombre no farà que la teva TX sigui minada més ràpidament. Enviant ETH = `21000`. Enviant Tokens = ~`200000`.',
NONCE_Desc                  : 'El nonce és el nombre de transaccions enviades des d\'una adreça determinada. Assegura que les transaccions  s\'envien en ordre i no més d\'una vegada.',
TXFEE_Desc                  : 'La comissió per la TX es paga als miners per incloure la teva TX en un block. És el `límit de gas` * `preu del gas`. [Pots convertir GWEI -> ETH aquí](https://www.myetherwallet.com/helpers.html)',


/* Navigation*/
NAV_AddWallet               : 'Afegir Cartera ',
NAV_BulkGenerate            : 'Generar en massa ',
NAV_Contact                 : 'Contacte ',
NAV_Contracts               : 'Contracte ',
NAV_DeployContract          : 'Desplegar contracte ',
NAV_ENS                     : 'ENS',
NAV_GenerateWallet_alt      : 'Nova cartera ',
NAV_GenerateWallet          : 'Crear una nova cartera ',
NAV_Help                    : 'Ajuda ',
NAV_InteractContract        : 'Interactua amb un contracte ',
NAV_Multisig                : 'Multisig ',
NAV_MyWallets               : 'Les meves carteres ',
NAV_Offline                 : 'Enviar sense connexió ',
NAV_SendEther               : 'Envia Ether & Tokens ',
NAV_SendTokens              : 'Envia Tokens ',
NAV_SignMsg                 : 'Firmar missatge ',
NAV_Swap                    : 'Intercanviar ',
NAV_ViewWallet              : 'Veure informació d\'una cartera ',
NAV_YourWallets             : 'Les teves carteres ',

/* General */
x_Access                    : 'Accedir ',
x_AddessDesc                : 'La teva adreça també pot ser anomenada `# de compte` o `Clau Pública`. És el que comparteixes amb la gent perquè puguin enviar-te Ether o Tokens. Cerqueu la icona d\'adreça de colors. Assegura\'t que coincideixi amb la vostra cartera de paper i quan introduïu la vostra adreça en algun lloc.',
x_Address                   : 'La teva adreça ',
x_Cancel                    : 'Cancel·lar ',
x_CSV                       : 'Fitxer CSV (no xifrat) ',
x_Download                  : 'Descarregar ',
x_Json                      : 'Fitxer JSON(no xifrat) ',
x_JsonDesc                  : 'Aquesta és la teva clau privada no xifrada, en format JSON. Això significa que no necessites la contrasenya, però qualsevol que trobi el JSON pot accedir a la teva cartera i Ether sense la contrasenya. ',
x_Keystore                  : 'Fitxer Keystore (UTC / JSON · Recomanat · Xifrat) ',
x_Keystore2                 : 'Fitxer Keystore (UTC / JSON) ',
x_KeystoreDesc              : 'Aquest fitxer Keystore coincideix amb el format que utilitza Mist perquè pugui importar-lo fàcilment en el futur. És el fitxer recomanat per descarregar i fer una còpia de seguretat. ',
x_MetaMask                  : 'Metamask / Mist ',
x_Mnemonic                  : 'Frase Mnemònica',
x_ParityPhrase              : 'Frase de Parity ',
x_Password                  : 'Contrasenya ',
x_Print                     : 'Imprimir cartera de paper ',
x_PrintDesc                 : 'ProTip: Fes clic a imprimir i desa\'l com a PDF, encara que no tinguis una impressora! ',
x_PrintShort                : 'Imprimir ',
x_PrivKey                   : 'Clau privada (no xifrada) ',
x_PrivKey2                  : 'Clau privada ',
x_PrivKeyDesc               : 'Aquesta és la versió de text que no està xifrada de la teva clau privada, la qual cosa significa que no cal una contrasenya. Si algú trobés la teva clau privada sense xifrar, podrien accedir a la cartera sense cap contrasenya. Per aquest motiu, generalment es recomanen les versions xifrades. ',
x_Save                      : 'Desar ',
x_TXT                       : 'Fitxer TXT (no xifrat) ',
x_Wallet                    : 'Cartera ',

/* Header */
CX_Tagline                  : 'Cartera d\'Ether de codi obert programada amb JavaScript executada en el client com a extensió de Chrome ',
CX_Warning_1                : 'Assegura\'t que tens **còpies de seguretat externes** de les carteres que emmagatzemes aquí. Podrien passar moltes coses que farien que perdessis les dades d\'aquesta extensió de Chrome, inclosa la desinstal·lació i reinstal·lació de l\'extensió. Aquesta extensió és una forma d\'accedir fàcilment a les carteres, ** no ** una manera de fer-los una còpia de seguretat. ',
MEW_Tagline                 : 'Cartera d\'Ether de codi obert programada amb JavaScript ',
MEW_Warning_1               : 'Comprova sempre l\'URL abans d\'accedir a la vostra cartera o crear una cartera nova. Ves amb compte amb els llocs de phishing! ',

/* Footer */
FOOTER_1                    : 'Eina gratuïta, de codi obert que s\'executa en el client per generar carteres d\'Ethereum i més. Interactua fàcilment amb la blockchain d\'Ethereum de manera fàcil i segura. Comprova l\'URL (.com) abans de desbloquejar la teva cartera.',
FOOTER_1b                   : 'Creat per ',
FOOTER_2                    : 'Donacions molt agraïdes ',
FOOTER_3                    : 'Generació de carteres al client per ',
FOOTER_4                    : 'Descàrrec de responsabilitat ',

/* Sidebar */
sidebar_AccountInfo         : 'Informació del compte ',
sidebar_AccountAddr         : 'Adreça del compte ',
sidebar_AccountBal          : 'Saldo del compte ',
sidebar_TokenBal            : 'Saldo dels tokens ',
sidebar_Equiv               : 'Valors equivalents ',
sidebar_TransHistory        : 'Historial de transaccions ',
sidebar_donation            : 'MyEtherWallet és un servei lliure i de codi obert, dedicat a la teva privacitat i seguretat. Com més donacions rebem, més temps invertim creant noves funcions, escoltant els vostres comentaris i oferint-vos el que voleu. Només som dues persones que intentem canviar el món. Ens ajudes? ',
sidebar_donate              : 'Dóna ',
sidebar_thanks              : 'Moltes gràcies!!! ',
sidebar_DisplayOnTrezor     : 'Mostrar l\'adreça al TREZOR',
sidebar_DisplayOnLedger     : 'Mostrar l\'adreça al Ledger',

/* Decrypt Panel */
decrypt_Access              : 'Com t\'agradaria accedir a la teva cartera? ',
decrypt_Title               : 'Selecciona el format de la teva clau privada ',
decrypt_Select              : 'Selecciona una cartera ',

/* Mnemonic */
MNEM_1                      : 'Si us plau selecciona l\'adreça amb la que vols interactuar. ',
MNEM_2                      : 'La teva frase mnemotècnica HD pot accedir a més d\'una cartera / adreça. Selecciona l\'adreça amb la que vols interactuar en aquest moment. ',
MNEM_more                   : 'Més adreces ',
MNEM_prev                   : 'Adreces anteriors ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Wallet ',
ADD_Ledger_1                : 'Connecta amb el teu Ledger Wallet ',
ADD_Ledger_2                : 'Obre l\'aplicació d\'Ethereum (o una aplicació de contracte) ',
ADD_Ledger_3                : 'Verifica que "Browser Support" està habilitat a "Settings" ',
ADD_Ledger_4                : 'Si no trobes "Browser Support" a "Settings", verifica que tens instal·lat el [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
ADD_Ledger_0a               : 'Has d\'accedir a MyEtherWallet utilitzant una connexió segura (SSL / HTTPS). ',
ADD_Ledger_0b               : 'Torna a obrir MyEtherWallet utilitzant [Chrome](https://www.google.com/chrome/browser/desktop/) o [Opera](https://www.opera.com/) ',
ADD_Ledger_scan             : 'Connecta a Ledger Wallet ',

ADD_MetaMask                : 'Connecta to MetaMask ',

x_Trezor                    : 'TREZOR ',
ADD_Trezor_scan             : 'Connecta a TREZOR ',
x_DigitalBitbox             : 'Digital Bitbox ',
ADD_DigitalBitbox_0a        : 'Torna a obrir MyEtherWallet utilitzant una connexió segura (SSL) ',
ADD_DigitalBitbox_0b        : 'Torna a obrir MyEtherWallet utilitzant [Chrome](https://www.google.com/chrome/browser/desktop/) o [Opera](https://www.opera.com/) ',
ADD_DigitalBitbox_scan      : 'Connecta el teu Digital Bitbox ',

/* Add Wallet */
ADD_Label_1                 : 'Que vols fer?? ',
ADD_Radio_1                 : 'Generar una nova cartera ',
ADD_Radio_2                 : 'Selecciona un fitxer de cartera (Keystore / JSON) ',
ADD_Radio_2_alt             : 'Selecciona un fitxer de cartera ',
ADD_Radio_2_short           : 'SELECCIONA UN FITXER DE CARTERA... ',
ADD_Radio_3                 : 'Enganxa/Escriu la teva clau privada ',
ADD_Radio_4                 : 'Afegir un compte per supervisar ',
ADD_Radio_5                 : 'Enganxa/Escriu la teva frase mnemotècnica ',
ADD_Radio_5_Path            : 'Select HD derivation path ',
ADD_Radio_5_woTrezor        : '(Jaxx, Metamask, Exodus, imToken)',
ADD_Radio_5_withTrezor      : '(Jaxx, Metamask, Exodus, imToken, TREZOR)',
ADD_Radio_5_PathAlternative : '(Ledger)',
ADD_Radio_5_PathTrezor      : '(TREZOR)',
ADD_Radio_5_PathCustom      : 'Personalitzat',
ADD_Label_2                 : 'Crea un àlies ',
ADD_Label_3                 : 'La teva cartera està xifrada. Si us plau, introdueix-ne la contrasenya. ',
ADD_Label_4                 : 'Afegeix un compte per supervisar ',
ADD_Warning_1               : 'Pots afegir qualsevol compte per "supervisar" a la pestanya de carteres sense pujar una clau privada. Això ** no ** vol dir que tinguis accés a aquesta cartera ni que puguis transferir-ne l\'Ether d\'aquesta. ',
ADD_Label_5                 : 'Introdueix l\'adreça ',
ADD_Label_6                 : 'Desbloqueja la teva cartera ',
ADD_Label_6_short           : 'Desbloqueja ',
ADD_Label_7                 : 'Afegeix un compte ',
ADD_Label_8                 : 'Contrasenya (opcional): ',

/* My Wallet */
MYWAL_Nick                  : 'Àlies de la cartera ',
MYWAL_Address               : 'Adreça de la cartera ',
MYWAL_Bal                   : 'Saldo ',
MYWAL_Edit                  : 'Edita ',
MYWAL_View                  : 'Veure ',
MYWAL_Remove                : 'Elimina ',
MYWAL_RemoveWal             : 'Elimina una cartera ',
MYWAL_WatchOnly             : 'Els teus comptes supervisats ',
MYWAL_Viewing               : 'Veient cartera ',
MYWAL_Hide                  : 'Amagar informació de la cartera ',
MYWAL_Edit_2                : 'Editar la cartera ',
MYWAL_Name                  : 'Nom de la cartera ',
MYWAL_Content_1             : 'Atenció! Estàs a punt d\'eliminar la teva cartera ',
MYWAL_Content_2             : 'Assegura\'t que has **desat la teva clau privada i/o el teu fitxer "Keystore" i la contrasenya** abans d\'eliminar-la. ',
MYWAL_Content_3             : 'Si vols utilitzar aquesta cartera amb MyEtherWallet CX en el futur, hauràs de tornar a afegir-la manualment utilitzant la clau privada/JSON i contrasenya. ',

/* Generate Wallets */
GEN_desc                    : 'Si vols crear múltiples carteres, pots fer-ho aquí ',
GEN_Label_1                 : 'Introdueix una contrasenya',
GEN_Placeholder_1           : 'NO oblidis desar això! ',
GEN_SuccessMsg              : 'Enhorabona! S\'ha creat la teva cartera. ',
GEN_Label_2                 : 'Desa el teu fitxer `Keystore`. ',
GEN_Label_3                 : 'Desa la teva adreça. ',
GEN_Label_4                 : 'Imprimeix la teva cartera de paper o un codi QR. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Quantitat de carteres a generar ',
BULK_Label_2                : 'Quantitat de carteres ',
BULK_SuccessMsg             : 'Enhorabona! S\'han creat les teves carteres. ',

/* Sending Ether and Tokens */
SEND_addr                   : 'A l\'adreça ',
SEND_amount                 : 'Quantitat a enviar ',
SEND_amount_short           : 'Quantitat ',
SEND_custom                 : 'Afegir un Token personalitzat ',
SEND_gas                    : 'Gas ',
SEND_TransferTotal          : 'Enviar tot el saldo ',
SEND_generate               : 'Generar la transacció ',
SEND_raw                    : 'Transacció en brut ',
SEND_signed                 : 'Transacció signada ',
SEND_trans                  : 'Enviar transacció ',
SENDModal_Title             : 'Alerta! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Estàs a punt d\'enviar ',
SENDModal_Content_2         : 'a l\'adreça ',
SENDModal_Content_3         : 'Estàs segur que vols fer-ho? ',
SENDModal_Content_4         : 'NOTA: Si trobes un error, és molt probable que necessitis afegir ether al teu compte per cobrir el cost del gas d\'enviar tokens. El gas es paga amb ether. ',
SENDModal_No                : 'No, treu-me d\'aquí! ',
SENDModal_Yes               : 'Sí, n\'estic segur! Realitza la transacció. ',

/* Tokens */
TOKEN_Addr                  : 'Adreça del Token ',
TOKEN_Symbol                : 'Símbol del Token ',
TOKEN_Dec                   : 'Decimals ',
TOKEN_show                  : 'Mostra tots els tokens ',
TOKEN_hide                  : 'Amaga els tokens ',

/* Send Transaction */
TRANS_desc                  : 'Si vols enviar tokens, si us plau utilitza la pàgina d\'"Enviar token". ',
TRANS_advanced              : '+Avançat: Afegir dades ',
TRANS_data                  : 'Dades ',
TRANS_gas                   : 'Limit de gas ',
TRANS_sendInfo              : 'Una transacció estàndard utilitzant 21000 gas costarà 0.000441 ETH. Utilitzem un preu una mica per sobre del mínim de 0.000000021 ETH per assegurar que es mina ràpidament. No ens quedem cap comissió per la transacció. ',

/* Offline Transaction */
OFFLINE_Title               : 'Crea i envia una transacció sense connexió ',
OFFLINE_Desc                : 'Es poden crear transaccions sense connexió amb tres passos. Has de realitzar els passos 1 i 3 en un ordinador amb connexió, i el pas 2 en un ordinador sense connexió. Això assegura que les teves claus privades no toquen un dispositiu connectat a internet. ',
OFFLLINE_Step1_Title        : 'Pas 1: Genera la informació (Ordinador amb connexió) ',
OFFLINE_Step1_Button        : 'Genera la informació ',
OFFLINE_Step1_Label_1       : 'Des de l\'adreça ',
OFFLINE_Step1_Label_2       : 'Nota: Aquesta és l\'adreça ORIGEN, no l\'adreça de destí. El Nonce es genera des de la compte origen. Si utilitzer un ordinador sense connexió, seria l\'adreça del compte del "cold-storage". ',
OFFLINE_Step2_Title         : 'Pas 2: Genera la transacció (Ordinador sense connexió) ',
OFFLINE_Step2_Label_1       : 'A l\'adreça ',
OFFLINE_Step2_Label_2       : 'Valor / Quantitat a enviar ',
OFFLINE_Step2_Label_3       : 'Preu del gas ',
OFFLINE_Step2_Label_3b      : 'Això s\'ha mostrat al pas 1 al teu ordinador amb connexió. ',
OFFLINE_Step2_Label_4       : 'Límit de gas ',
OFFLINE_Step2_Label_4b      : '21000 és el límit de gas per defecte. Quan envies contractes o dades addicionals, pot ser que el que necessitis sigui diferent. El gas no utilitzat se\'t retornarà. ',
OFFLINE_Step2_Label_5       : 'Nonce ',
OFFLINE_Step2_Label_5b      : 'Això s\'ha mostrat al pas 1 al teu ordinador amb connexió. ',
OFFLINE_Step2_Label_6       : 'Dades ',
OFFLINE_Step2_Label_6b      : 'Això és opcional. Les dades normalment són utilitzades quan envies transaccions a contractes. ',
OFFLINE_Step2_Label_7       : 'Introdueix / Selecciona la teva clau privada / JSON. ',
OFFLINE_Step3_Title         : 'Pas 3: Envia / Publica la transacció (Ordinador amb connexió) ',
OFFLINE_Step3_Label_1       : 'Enganxa la transacció signada del pas 2 aquí i prem el botó "ENVIAR TRANSACCIÓ". ',

/* Contracts */
CONTRACT_Title              : 'Adreça del contracte ',
CONTRACT_Title_2            : 'Selecciona un contracte existent ',
CONTRACT_Json               : 'Interfície ABI / JSON ',
CONTRACT_Interact_Title     : 'Llegeix / Escriu el contracte ',
CONTRACT_Interact_CTA       : 'Selecciona una funció ',
CONTRACT_ByteCode           : 'Codi de Bytes ',
CONTRACT_Read               : 'LLEGIR ',
CONTRACT_Write              : 'ESCRIURE ',
DEP_generate                : 'Genera Bytecode ',
DEP_generated               : 'Bytecode generat',
DEP_signtx                  : 'Signa la transacció ',
DEP_interface               : 'Interfície generada ',

/* Node Switcher */
NODE_Title                  : 'Configura el teu node personalitzar',
NODE_Subtitle               : 'Per connectar al teu node local...',
NODE_Warning                : 'El teu node ha de ser HTTPS per tal de poder-t\'hi connectar utilitzant MyEtherWallet.com. Pots [descarregar-te el repo de MyEtherWallet i executar-lo localment](https://github.com/kvhnuke/etherwallet/releases/latest) per connectar-te a qualsevol node. O, obtén un certificat SSSL gratuït amb [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Nom del node',
NODE_Port                   : 'Port del node',
NODE_CTA                    : 'Desa & utilitza el node personalitzat',

/* Swap / Exchange */
SWAP_rates                  : "Tarifes actuals ",
SWAP_init_1                 : "Vull intercanviar els meus ",
SWAP_init_2                 : " per ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Fes-ho! ", // or "Continue"
SWAP_information            : "Le teva informació ",
SWAP_send_amt               : "Quantitat a enviar ",
SWAP_rec_amt                : "Quantitat a rebre ",
SWAP_your_rate              : "La teva tarifa ",
SWAP_rec_add                : "La teva adreça de recepció ",
SWAP_start_CTA              : "Inicia l\'intercanvi ",
SWAP_ref_num                : "El teu número de referència ",
SWAP_time                   : "Temps restant per enviar ",
SWAP_elapsed				: "Temps transcorregut des de l'enviament ",
SWAP_progress_1             : "Comanda iniciada ",
SWAP_progress_2             : "Esperant pels teus  ", // Waiting for your BTC...
SWAP_progress_3             : "Rebut! ", // ETH Received!
SWAP_progress_4             : "Enviant el teu {{orderResult.output.currency}} ",
SWAP_progress_5             : "Comanda completa ",
SWAP_order_CTA              : "Si us plau envia ", // Please send 1 ETH...
SWAP_unlock                 : "Desbloqueja la teva cartera per enviar ETH o Tokens directament des d\'aquesta pàgina ",

/* Sign Message */
MSG_message                 : 'Missatge ',
MSG_date                    : 'Data ',
MSG_signature               : 'Signatura ',
MSG_verify                  : 'Verifica el missatge ',
MSG_info1                   : 'Inclou la data actual per tal que la signatura no pugui ser reutilitzada en una data diferent. ',
MSG_info2                   : 'Inclou el teu àlies i on el fas servir per tal que ningú més pugui utilitzar-lo. ',
MSG_info3                   : 'Inclou una raó específica per tal que el missatge no pugui ser reutilitzat per un altre propòsit. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Això et permet descarregar diferents versions de les claus privades i tornar a imprimir la teva cartera de paper. És possible que vulguis fer això per [importar el teu compte a Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Si vols comprovar el teu saldo, recomanem utilitzar un explorador de la blockchain com [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Això et permet descarregar diferents versions de les claus privades i tornar a imprimir la teva cartera de paper. ',
VIEWWALLET_SuccessMsg       : 'Enhorabona! Aquests són els detalls de la teva cartera. ',
VIEWWALLET_ShowPrivKey      : '(mostra)',
VIEWWALLET_HidePrivKey      : '(amaga)',

/* Chrome Extension */
CX_error_1                  : 'No tens cap cartera desada. Fes clic ["Afegeix cartera"](/cx-wallet.html#add-wallet) per afegir-ne una! ',
CX_quicksend                : 'Envia ', // if no appropriate translation, just use "Send"

/* Error Messages */
ERROR_0                     : 'Si us plau, introdueix una quantitat vàlida.', // 0
ERROR_1                     : 'La teva contrasenya ha de tenir 9 caràcters com a mínim. Si us plau, assegura\´t que és una contrasenya forta. ', // 1
ERROR_2                     : 'Perdó! No reconeixem aquest tipus de fitxer de cartera. ', // 2
ERROR_3                     : 'Aquest fitxer de cartera no és vàlid. ', // 3
ERROR_4                     : 'Aquesta unitat no existeix, si us plau utilitza\'n una de les següents ', // 4
ERROR_5                     : 'Si us plau introdueix una adreça vàlida. ', // 5
ERROR_6                     : 'Si us plau introdueix una contrasenya vàlida. ', // 6
ERROR_7                     : 'Si us plau introdueix decimals vàlids (Ha de ser enter. Prova 0-18.) ', // 7
ERROR_8                     : 'Si us plau introdueix un gas límit vàlid (Ha de ser  enter. Prova 21000-4000000.) ', // 8
ERROR_9                     : 'Si us plau introdueix un valor per les dades vàlid (Ha de ser hex.) ', // 9
ERROR_10                    : 'Si us plau introdueix un preu de gas vàlid. (Enter. Prova 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Si us plau introdueix un nonce vàlid (Ha de ser enter.) ', // 11
ERROR_12                    : 'Transacció signada no vàlida. ', // 12
ERROR_13                    : 'Ja existeix una cartera amb aquest àlies. ', // 13
ERROR_14                    : 'Cartera no trobada. ', // 14
ERROR_15                    : 'No sembla que existeixi una proposta amb aquest ID o hi ha hagut un error llegint-la. ', // 15 - NOT USED
ERROR_16                    : 'Ja hi ha emmagatzemada una cartera amb aquesta adreça. Si us plau comprova la pàgina de carteres. ', // 16
ERROR_17                    : 'El compte d\'origen no té prou saldo. Si estàs enviant tokens, has de tenir 0.01 ETH al teu compte per cobrir el cost del gas. ', // 17
ERROR_18                    : 'Tot el gas seria utilitzat en aquesta transacció. Això vol dir que ja has votat aquesta proposta o que el període de debat ja ha acabat.', // 18
ERROR_19                    : 'Si us play introdueix un símbol vàlid', // 19
ERROR_20                    : 'No és un token ERC-20 vàlid', // 20
ERROR_21                    : 'No s\'ha pogut calcular el gas necessari. No hi ha prou saldo en el compte, o el contracte destí ha llençat un error. Pots ajustar el gas manualment i continuar. És possible que el missatge d\'error al enviar contingui més informació.', // 21
ERROR_22                    : 'Si us plau introdueix un nom de node vàlid', // 22
ERROR_23                    : 'Si us plau introdueix una URL vàlida URL. Si estàs sota https, la teva URL ha de ser https', // 23
ERROR_24                    : 'Si us plau introdueix un port vàlid. ', // 24
ERROR_25                    : 'Si us plau introdueix un ID de cadena vàlid. ', // 25
ERROR_26                    : 'PSi us plau introdueix un ABI vàlid. ', // 26
ERROR_27                    : 'Quantitat mínima: 0.01. Quantitat max.: ', // 27
ERROR_28                    : 'Necessites aquest `Fitxer Keystore + Contrasenya` o la `Clau Privada` (següent pàgina) per tal d\'accedir a aquesta cartera en el futur.  ', // 28
ERROR_29                    : 'Si us plau introdueix un usuari i contrasenya vàlids. ', // 29
ERROR_30                    : 'Si us plau introdueix un nom vàlid (+7 caràcters, puntuació límitada) ', // 30
ERROR_31                    : 'Introdueix una frase secreta vàlida. ', // 31
ERROR_32                    : 'No s\'ha pogut connectar al node. Refresca la teva pàgina, prova-ho amb un altre node (cantonada superior-dreta), comprova el teu firewall. En mode personalitzar, comprova les teves preferències.', // 32
ERROR_33                    : 'La cartera que has desbloquejat no correspon amb l\'adreça del propietari. ', // 33
ERROR_34                    : 'El nom que estàs intentant mostrar no coincideix amb el nom que has introduït. ', // 34
ERROR_35                    : 'L\'adreça introduïda no s\'ha comprovat mitjantçant checksum. <a href="https://myetherwallet.github.io/knowledge-base/addresses/not-checksummed-shows-when-i-enter-an-address.html" target="_blank" rel="noopener noreferrer"> Més informació</a>', // 35
ERROR_36                    : 'Introdueix un hash de TX vàlid', // 36
ERROR_37                    : 'Introdueix una cadena hex (0-9, a-f) vàlida', // 37

SUCCESS_1                   : 'Adreça vàlida ',
SUCCESS_2                   : 'Cartera desxifrada amb èxit ',
SUCCESS_3                   : 'La teva TX s\'ha emès a la xarxa. Està esperant ha ser minada i confirmada. Durant ICOs, pot trigar més de 3 hores a ser confirmada. Utilitza els següents botons de Verificar & Comprovar per veur-ho. TX Hash:  ',
SUCCESS_4                   : 'La teva cartera s\'ha afegit correctament ',
SUCCESS_5                   : 'Fitxer seleccionat ',
SUCCESS_6                   : 'Estàs connectat correctament ',
SUCCESS_7                   : 'Signatura del missatge verificada',
WARN_Send_Link              : 'Has arribat mitjançant un enllaç que conté una adreça, valor, gas, dades o tipus de transacció (mode enviar) omplerts. Pots canviar qualsevol informació abans d\'enviar. Desbloqueja la teva cartera per començar. ',

/* Geth Error Messages */
GETH_InvalidSender          : 'Emissor no vàlid ',
GETH_Nonce                  : 'Nonce massa baix ',
GETH_Cheap                  : 'El preu del gas és massa petit per ser acceptat ',
GETH_Balance                : 'Saldo insuficient',
GETH_NonExistentAccount     : 'El compte no existeix o el saldo és massa baix ',
GETH_InsufficientFunds      : 'Saldo insuficient per gas * preu + valor ',
GETH_IntrinsicGas           : 'Gas intrínsec massa baix ',
GETH_GasLimit               : 'Excedeix del block gas límit ',
GETH_NegativeValue          : 'Valor negatiu ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "Ja s'havia importat la transacció amb el mateix hash.",
PARITY_Old                  : "El nonce de la transacció és massa baix. Proveu d'augmentar-lo.",
PARITY_TooCheapToReplace    : "La comissió de la transacció és massa baixa. Hi ha una altra transacció amb el mateix nonce a la cua. Intenta augmentar la comissió o el nonce.",
PARITY_LimitReached         : "Hi ha massa transaccions a la cua. La teva transacció ha sigut eliminada degut al límit. Prova incrementant la comissió.",
PARITY_InsufficientGasPrice : "La comissió de la transacció és massa baixa. No satisfà la comissió mínima dle node (minimal: {}, got: {}). Intenta augmentar la comissió.",
PARITY_InsufficientBalance  : "Saldo insuficient. El compte d\'origen que estàs utilitzant no té prou saldo. Obligatori {} wei i tens: {} wei.",
PARITY_GasLimitExceeded     : "El cost de la transacció sobrepassa el límit actual de gas. Limit: {}, tens: {}. Intenta disminuir el gas proporcionat.",
PARITY_InvalidGasLimit      : "El gas proporcionat és més enllà del límit.",

/* Tranlsation Info */
translate_version           : '0.1 ',
Translator_Desc             : 'Gràcies als nostres traductors ',
TranslatorName_1            : 'Aleix Canal Oliver ',
TranslatorAddr_1            : ' ',
/* Translator 1             : Insert Comments Here */
TranslatorName_2            : ' ',
TranslatorAddr_2            : ' ',
/* Translator 2             : Insert Comments Here */
TranslatorName_3            : ' ',
TranslatorAddr_3            : ' ',
/* Translator 3             : Insert Comments Here */
TranslatorName_4            : ' ',
TranslatorAddr_4            : ' ',
/* Translator 4             : Insert Comments Here */
TranslatorName_5            : ' ',
TranslatorAddr_5            : ' ',
/* Translator 5             : Insert Comments Here */

/* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
HELP_Warning                : 'If you created a wallet -or- downloaded the repo before **Dec. 31st, 2015**, please check your wallets &amp; download a new version of the repo. Click for details. ',
HELP_Desc                   : 'Do you see something missing? Have another question? [Get in touch with us](mailto:support@myetherwallet.com), and we will not only answer your question, we will update this page to be more useful to people in the future! ',
HELP_Remind_Title           : 'Some reminders ',
HELP_Remind_Desc_1          : '**Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development.** While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the remote possibility that something unexpected happens that causes your ETH to be lost. Please do not invest more than you are willing to lose, and please be careful. If something were to happen, we are sorry, but **we are not responsible for the lost Ether**. ',
HELP_Remind_Desc_2          : 'MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account or give us your Ether to hold onto. All data never leaves your computer/your browser. We make it easy for you to create, save, and access your information and interact with the blockchain. ',
HELP_Remind_Desc_3          : 'If you do not save your private key & password, there is no way to recover access to your wallet or the funds it holds.  Back them up in multiple physical locations &ndash; not just on your computer! ',

HELP_0_Title                : '0) I\'m new. What do I do? ',
HELP_0_Desc_1               : 'MyEtherWallet gives you the ability to generate new wallets so you can store your Ether yourself, not on an exchange. This process happens entirely on your computer, not our servers. Therefore, when you generate a new wallet, **you are responsible for safely backing it up**. ',
HELP_0_Desc_2               : 'Create a new wallet. ',
HELP_0_Desc_3               : 'Back the wallet up. ',
HELP_0_Desc_4               : 'Verify you have access to this new wallet and have correctly saved all necessary information. ',
HELP_0_Desc_5               : 'Transfer Ether to this new wallet. ',

HELP_1_Title                : '1) How do I create a new wallet? ',
HELP_1_Desc_1               : 'Go to the "Generate Wallet" page. ',
HELP_1_Desc_2               : 'Go to the "Add Wallet" page & select "Generate New Wallet" ',
HELP_1_Desc_3               : 'Enter a strong password. If you think you may forget it, save it somewhere safe. You will need this password to send transactions. ',
HELP_1_Desc_4               : 'Click "GENERATE". ',
HELP_1_Desc_5               : 'Your wallet has now been generated. ',

HELP_2a_Title               : 'How do I save/backup my wallet? ',
HELP_2a_Desc_1              : 'You should always back up your wallet externally and in multiple physical locations - like on a USB drive and/or a piece of paper. ',
HELP_2a_Desc_2              : 'Save the address. You can keep it to yourself or share it with others. That way, others can transfer ether to you. ',
HELP_2a_Desc_3              : 'Save versions of the private key. Do not share it with anyone else. Your private key is necessary when you want to access your Ether to send it! There are 3 types of private keys ',
HELP_2a_Desc_4              : 'Place your address, versions of the private key, and the PDF version of your paper wallet in a folder. Save this on your computer and a USB drive. ',
HELP_2a_Desc_5              : 'Print the wallet if you have a printer. Otherwise, write down your private key and address on a piece of paper. Store this as a secure location, separate from your computer and the USB drive. ',
HELP_2a_Desc_6              : 'Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood). ',

HELP_2b_Title               : '2b) How do I safely / offline / cold storage with MyEtherWallet? ',
HELP_2b_Desc_1              : 'Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ',
HELP_2b_Desc_2              : 'Click on `etherwallet-vX.X.X.X.zip`. ',
HELP_2b_Desc_3              : 'Move zip to an airgapped computer. ',
HELP_2b_Desc_4              : 'Unzip it and double-click `index.html`. ',
HELP_2b_Desc_5              : 'Generate a wallet with a strong password. ',
HELP_2b_Desc_6              : 'Save the address. Save versions of the private key. Save the password if you might not remember it forever. ',
HELP_2b_Desc_7              : 'Store these papers / USBs in multiple physically separate locations. ',
HELP_2b_Desc_8              : 'Go to the "View Wallet Info" page and type in your private key / password to ensure they are correct and access your wallet. Check that the address you wrote down is the same. ',

HELP_3_Title                : '3) How do I verify I have access to my new wallet? ',
HELP_3_Desc_1               : '**Before you send any Ether to your new wallet**, you should ensure you have access to it. ',
HELP_3_Desc_2               : 'Navigate to the "View Wallet Info" page. ',
HELP_3_Desc_3               : 'Navigate to the MyEtherWallet.com "View Wallet Info" page. ',
HELP_3_Desc_4               : 'Select your wallet file -or- your private key and unlock your wallet. ',
HELP_3_Desc_5               : 'If the wallet is encrypted, a text box will automatically appear. Enter the password. ',
HELP_3_Desc_6               : 'Click the "Unlock Wallet" button. ',
HELP_3_Desc_7               : 'Your wallet information should show up. Find your account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet. ',
HELP_3_Desc_8               : 'If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly. ',

HELP_4_Title                : '4) How do I send Ether from one wallet to another? ',
HELP_4_Desc_1               : 'If you plan to move a large amount of ether, you should test sending a small amount to your wallet first to ensure everything goes as planned. ',
HELP_4_Desc_2               : 'Navigate to the "Send Ether & Tokens" page. ',
HELP_4_Desc_3               : 'Select your wallet file -or- your private key and unlock your wallet. ',
HELP_4_Desc_4               : 'If the wallet is encrypted, a text box will automatically appear. Enter the password. ',
HELP_4_Desc_5               : 'Click the "Unlock Wallet" button. ',
HELP_4_Desc_6               : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_4_Desc_7               : 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. ',
HELP_4_Desc_9               : 'Click "Generate Transaction". ',
HELP_4_Desc_10              : 'A couple more fields will appear. This is your browser generating the transaction. ',
HELP_4_Desc_11              : 'Click the blue "Send Transaction" button below that. ',
HELP_4_Desc_12              : 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. ',
HELP_4_Desc_13              : 'The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain. ',

HELP_4CX_Title              : '4) How do I send Ether using MyEtherWallet CX? ',
HELP_4CX_Desc_1             : 'First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Send Ether & Tokens" page. ',
HELP_4CX_Desc_2             : 'QuickSend ',
HELP_4CX_Desc_3             : 'Click the Chrome Extension Icon. ',
HELP_4CX_Desc_4             : 'Click the "QuickSend" button. ',
HELP_4CX_Desc_5             : 'Select the wallet you wish to send from. ',
HELP_4CX_Desc_6             : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_4CX_Desc_7             : 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. ',
HELP_4CX_Desc_8             : 'Click "Send Transaction". ',
HELP_4CX_Desc_9             : 'Verify the address and the amount you are sending is correct. ',
HELP_4CX_Desc_10            : 'Enter the password for that wallet. ',
HELP_4CX_Desc_11            : 'Click "Send Transaction." ',
HELP_4CX_Desc_12            : 'Using "Send Ether & Tokens" Page ',

HELP_5_Title                : '5) How do I run MyEtherWallet.com offline/locally? ',
HELP_5_Desc_1               : 'You can run MyEtherWallet.com on your computer instead of from the GitHub servers. You can generate a wallet completely offline and send transactions from the "Offline Transaction" page. ',
HELP_5_Desc_7               : 'MyEtherWallet.com is now running entirely on your computer. ',
HELP_5_Desc_8               : 'In case you are not familiar, you need to keep the entire folder in order to run the website, not just `index.html`. Don\'t touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact. ',
HELP_5_Desc_9               : 'As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo. ',

HELP_5CX_Title              : '5) How can I install this extension from the repo instead of the Chrome Store? ',
HELP_5CX_Desc_2             : 'Click on `chrome-extension-vX.X.X.X.zip` and unzip it. ',
HELP_5CX_Desc_3             : 'Go to Google Chrome and find you settings (in the menu in the upper right). ',
HELP_5CX_Desc_4             : 'Click "Extensions" on the left. ',
HELP_5CX_Desc_5             : 'Check the "Developer Mode" button at the top of that page. ',
HELP_5CX_Desc_6             : 'Click the "Load unpacked extension..." button. ',
HELP_5CX_Desc_7             : 'Navigate to the now-unzipped folder that you downloaded earlier. Click "select". ',
HELP_5CX_Desc_8             : 'The extension should now show up in your extensions and in your Chrome Extension bar. ',

HELP_7_Title                : '7) How do I send tokens & add custom tokens? ',
HELP_7_Desc_0               : '[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token. ',
HELP_7_Desc_1               : 'Navigate to the "Send Ether & Tokens" page. ',
HELP_7_Desc_2               : 'Unlock your wallet. ',
HELP_7_Desc_3               : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_7_Desc_4               : 'Enter the amount you would like to send. ',
HELP_7_Desc_5               : 'Select which token you would like to send. ',
HELP_7_Desc_6               : 'If you do not see the token listed ',
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

HELP_9_Title                : '9) Is the "Send Ether & Tokens" page offline? ',
HELP_9_Desc_1               : 'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times. ',

HELP_10_Title               : '10) How do I make an offline transaction? ',
HELP_10_Desc_1              : 'Navigate to the "Offline Transaction" page via your online computer. ',
HELP_10_Desc_2              : 'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price. ',
HELP_10_Desc_3              : 'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send. ',
HELP_10_Desc_4              : 'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1. ',
HELP_10_Desc_5              : 'Enter the "NONCE" as it was displayed to you on your online computer in step #1. ',
HELP_10_Desc_6              : 'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas límit. Any excess gas will be returned to you. ',
HELP_10_Desc_7              : 'If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas límit. All data is in HEX format. ',
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
HELP_12_Desc_15             : 'If you are on a Mac ',
HELP_12_Desc_15b            : 'If you are on a PC ',
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
HELP_17_Desc_1              : ' This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io ',

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
HELP_Contact_Title          : 'Ways to Get in Touch '
};

module.exports = ca;
