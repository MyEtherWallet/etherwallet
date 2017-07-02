// Spanish
'use strict';
var es = function() {}
es.code = 'es';
es.data = {

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
WALL_Add               : 'Añadir cartera ',
BULK_Generate            : 'Generar en masa ',
x_Contact                 : 'Contacto ',
CONTRACT_Title               : 'Contratos ',
CONTRACT_Deploy          : 'Desplegar contrato ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Generar cartera ',
x_Help                    : 'Ayuda ',
CONTRACT_Interact        : 'Interactuar con un contrato ',
CONTRACT_Multisig                : 'Multifirma ',
WALL_walletViewCX               : 'Mis carteras ',
x_Offline                 : 'Enviar sin conexión ',
TX_Send_Title             : 'Enviar ether y tokens ',
TX_Send_ShortTokens              : 'Enviar tokens ',
MSG_Sign                 : 'Firmar mensaje ',
SWAP_Title                    : 'Intercambiar ',
WALL_View              : 'Ver información de las carteras ',
WALL_Your             : 'Tus carteras ',

/* General */
x_Access                    : 'Access ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Puedes pensar en esto como tu "número de cuenta" o tu "clave pública". Es lo que le das a la gente para que te puedan enviar ether. Ese icono es una forma fácil de reconocer tu dirección. ',
ADDR_                   : 'Tu dirección ',
x_Cancel                    : 'Cancelar ',
x_CSV                       : 'Archivo CSV (sin encriptar) ',
x_Download                  : 'Descargar ',
x_Json                      : 'Archivo JSON (sin encriptar) ',
x_JsonDesc                  : 'Esta es tu clave privada sin encriptar en formato JSON. Esto significa que no necesitas una contraseña, pero cualquiera que encuentre tu archivo JSON puede acceder a tu cartera y ether sin necesitar ninguna contraseña. ',
x_Keystore                  : 'Archivo Keystore (UTC / JSON · Recomendado · Encriptado) ',
x_Keystore2                 : 'Archivo Keystore (UTC / JSON) ',
x_KeystoreDesc              : 'Este archivo Keystore/JSON concuerda con el formato usado por Mist para una fácil importación en el futuro. Es el archivo recomendado para descargar y guardar como copia de seguridad. ',
x_Mnemonic                  : 'Mnemonic Phrase ',
x_ParityPhrase              : 'Parity Phrase ',
PW_                  : 'Contraseña ',
x_Print                     : 'Imprimir Cartera de Papel ',
x_PrintDesc                 : 'Consejo: Hax clic en imprimir y guardar esto como un PDF, ¡incluso si no tienes impresora! ',
x_PrintShort                : 'Imprimir ',
x_PrivKey                   : 'Clave Privada (sin encriptar) ',
x_PrivKey2                  : 'Clave Privada ',
x_PrivKeyDesc               : 'Esta es la versión en texto sin encriptar de tu clave privada, lo cual quiere decir que no hace falta contraseña. Si alguien encontrase tu clave privada sin encriptar, podrían acceder a tu cartera sin necesitar contraseña. Por esta razón, normalmente se recomiendan las versiones encriptadas. ',
x_Save                      : 'Guardar ',
x_TXT                       : 'Archivo TXT (sin encriptar) ',
WALL_                    : 'Cartera ',

/* Header */
WARN_01               : 'Comprueba siempre la URL antes de acceder a tu cartera o crear una cartera nueva. ¡Ten cuidado con los sitios falsos (phishing)! ',
WARN_04                : 'Asegúrate de tener **copias de seguridad externas** de cualquier cartera que almacenes aquí. Pueden ocurrir muchas cosas que te hagan perder los datos de esta extensión de Chrome; esto incluye desinstalar y volver a instalar la extensión. Esta extensión es un modo de acceder fácilmente a tus carteras, **no** una manera de respaldarlas. ',
FOOTER_Tagline                 : 'Cartera Ether JavaScript de código abierto ejecutado en el cliente ',
CX_Tagline                  : 'Cartera Ether JavaScript de código abierto ejecutado en el cliente extensión Chrome ',

/* Footer */
FOOTER_1                    : 'Una herramienta de código abierto JavaScript que se ejecuta en el lado del cliente, para generar carteras y enviar transacciones Ethereum. ',
FOOTER_1b                   : 'Creado por ',
FOOTER_2                    : 'Se agradecen las donaciones: ',
FOOTER_3                    : 'Generación de carteras en el cliente por ',
FOOTER_4                    : 'Renuncia de responsabilidad ',

/* Sidebar */
ACCOUNT_Info         : 'Información de la cuenta ',
ACCOUNT_Address         : 'Dirección de la cuenta ',
ACCOUNT_Balance          : 'Saldo de la cuenta ',
TOKEN_Balance            : 'Saldos de tokens ',
SIDEBAR_Equiv               : 'Valores equivalentes ',
TX_History        : 'Historial de transacciones ',
SIDEBAR_donation            : 'MyEtherWallet es un servicio gratuito y de código abierto dedicado a tu privacidad y seguridad. Cuantas más donaciones recibimos, más tiempo dedicamos creando nuevas características, escuchando vuestros comentarios y proporcionando lo que queréis. Sólo somos dos personas intentando cambiar el mundo. ¿Nos ayudas? ',
SIDEBAR_donate              : 'Donar ',
SIDEBAR_thanks              : '¡¡¡GRACIAS!!! ',

/* Decrypt Panel */
DECRYPT_Access              : '¿Cómo te gustaría acceder a tu cartera? ',
DECRYPT_Title               : 'Elige el formato de tu clave privada: ',
WALL_Select              : 'Elige una cartera: ',

/* Add Wallet */
DECRYPT_Label_1                 : '¿Qué quieres hacer? ',
WALL_GenerateNew                 : 'Generar nueva cartera ',
DECRYPT_Radio_2                 : 'Elige tu archivo de cartera (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : 'Elige tu archivo de cartera ',
DECRYPT_Radio_2_short           : 'ELIGE ARCHIVO DE CARTERA... ',
DECRYPT_Radio_3                 : 'Pega/escribe tu clave privada ',
ACCOUNT_AddWatch                 : 'Añade una cuenta para supervisar ',
MNEM_Enter                 : 'Paste/Type Your Mnemonic ',
MNEM_Enter_Path            : 'Select HD derivation path ',
MNEM_Enter_PathCustom      : 'Personalizado',
DECRYPT_Label_2                 : 'Crear un alias: ',
DECRYPT_Label_3                 : 'Tu cartera está encriptada. Introduce tu contraseña ',
DECRYPT_Label_4                 : 'Añade una cuenta para supervisar ',
WARN_03               : 'Puedes añadir una cuenta para supervisar en la pestaña de carteras sin cargar una clave privada. Esto ** no ** significa que tengas acceso a la cartera, ni puedes transferir ether desde ésta. ',
DECRYPT_Label_5                 : 'Introduce la dirección ',
WALL_Unlock                 : 'Desbloquea tu cartera ',
WALL_Unlock_Short           : 'Desbloquear ',
ACCOUNT_Add                 : 'Añadir cuenta ',

/* Generate Wallets */
GEN_desc                    : 'Si quieres generar varias carteras, puedes hacerlo aquí ',
PW_Enter                 : 'Introduce una contraseña fuerte (mínimo 9 caracteres) ',
PW_Enter           : '¡NO olvides guardar esto! ',
GEN_SuccessMsg              : '¡Enhorabuena! Se ha generado tu cartera. ',
x_Keystore_Save                 : 'Guarda tu Keystore. No olvides tu contraseña. ',
ADDR_Save                 : 'Guarda tu dirección. ',
GEN_Label_4                 : 'Opcional: Imprime tu cartera en papel o guarda una versión en código QR. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Cantidad de carteras a generar ',
BULK_Label_2                : 'Generar carteras ',
BULK_SuccessMsg             : '¡Enhorabuena! Se han generado tus carteras. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'Dirección de destino ',
x_Amount                 : 'Cantidad a enviar ',
x_Amount_short           : 'Cantidad ',
TOKEN_AddCustom                 : 'Personalizado ',
x_GasLimit                    : 'Gas ',
TX_Send_All          : 'Enviar todo el saldo ',
TX_Generate               : 'Generar transacción ',
TX_Unsigned                    : 'Transacción en bruto ',
TX_Signed                 : 'Transacción firmada ',
TX_Send_Short                  : 'Enviar transacción ',
TOKEN_AddCustom                 : 'Añadir token personalizado ',
SENDModal_Title             : '¡Atención! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Vas a enviar ',
SENDModal_Content_2         : 'a la dirección ',
SENDModal_Content_3         : '¿Estás seguro de que quieres hacer esto? ',
SENDModal_Content_4         : 'NOTA: Si recibes un error, es muy probable que necesites añadir ether a tu cuenta para cubrir el coste en gas de enviar tokens. Gas se paga en ether. ',
SENDModal_No                : 'No, sácame de aquí. ',
SENDModal_Yes               : 'Sí, estoy seguro. Hacer la transacción. ',

/* Tokens */
ADDR_Short                  : 'Dirección ',
TOKEN_Symbol                : 'Símbolo del token ',
TOKEN_Dec                   : 'Decimales ',
TOKEN_hide                  : 'Ocultar tokens ',
TOKEN_show                  : 'Mostrar todos los tokens ',

/* Send Transaction */
TX_desc                  : 'Si quieres enviar tokens, utiliza la página "Enviar tokens" en lugar de esta. ',
TX_warning               : 'Si utilizas las funciones "Sólo ETH" o "Sólo ETC" estás enviando a través de un contrato. Algunos servicios tienen problemas aceptando estas transacciones. Leer más. ',
SEND_Advanced              : '+Avanzado: Añadir datos ',
x_Data                  : 'Datos ',
x_GasLimit                   : 'Límite de gas ',
TX_Send_ShortInfo              : 'Una transacción estándar que utiliza 21000 gas cuesta 0.000441 ETH. Utilizamos un precio de gas de 0.000000021 ETH, ligeramente por encima del mínimo, para asegurarnos de que se mina con rapidez. Nosotros no recibimos ninguna comisión por la transacción. ',

/* Send Transaction Modals */
TRANSModal_Title            : 'Transacciones "Sólo ETH" y "Sólo ETC" ',
TRANSModal_Content_0        : 'Una nota sobre las distintas transacciones y servicios: ',
TRANSModal_Content_1        : '**ETH (transacción estándar): ** Esto genera una transacción predeterminada directamente de una dirección a otra. Utiliza gas predeterminado de 21000. Es probable que cualquier transacción de ETH enviada mediante este método se reproduzca (replay) en la cadena ETC. ',
TRANSModal_Content_2        : '**Sólo ETH: ** Esto envía a través del [contrato de protección contra replay de Timon Rapp (según recomienda VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) de modo que envías solamente en la cadena **ETH**. ',
TRANSModal_Content_3        : '**Sólo ETC: ** Esto envía a través del [contrato de protección contra replay de Timon Rapp (según recomienda VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) de modo que envías solamente en la cadena **ETC**. ',
TRANSModal_Content_4        : '**Coinbase y ShapeShift: ** Envía solamente utilizando transacción estándar. Si envías utilizando los contratos "Sólo ETH" o "Sólo ETC", será necesario que contactes con su equipo de soporte para que añadan manualmente el saldo o te lo devuelvan. [También puedes probar la herramienta de "split" de Shapeshift.](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken y Poloniex:** No se conocen problemas. Usa cualquiera. ',
TRANSModal_Yes              : 'Bien, ahora lo entiendo. ',
TRANSModal_No               : 'Estoy más confundido. Ayuda, por favor. ',

/* Offline Transaction */
OFFLINE_Title               : 'Generar y enviar transacción sin conexión ',
OFFLINE_Desc                : 'Se puede generar transacciones sin conexión en tres pasos. Debes hacer los pasos 1 y 3 en un equipo online y el paso 2 en un equipo sin conexión y aislado. Esto asegura que tus claves privadas no estén en contacto con un equipo con conexión a Internet. ',
OFFLLINE_Step1_Title        : 'Paso 1: generar información (equipo conexión) ',
OFFLINE_Step1_Button        : 'Generar información ',
ADDR_From       : 'Dirección de origen ',
OFFLINE_Step1_Label_2       : 'Nota: Esta es la dirección de origen, no la dirección de destino. El nonce se genera desde la cuenta que origina la transacción. Si se está utilizando un equipo aislado, será la dirección de la cuenta de almacenaje en frío. ',
OFFLINE_Step2_Title         : 'Paso 2: generar transacción (equipo sin conexión) ',
ADDR_To       : 'Dirección de destino ',
OFFLINE_Step2_Label_2       : 'Valor / Cantidad a enviar ',
x_GasPrice                  : 'Precio del gas ',
x_GasPriceDesc                 : 'Esto se ha mostrado en el Paso 1 en tu equipo con conexión. ',
x_GasLimit       : 'Límite de gas ',
x_GasLimitDesc      : '21000 es el límite de gas predeterminado. Cuando envías contratos o datos adicionales, puede que esto necesite ser diferente. El gas no utilizado se te devolverá. ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'Esto se indicó en el Paso 1 en tu equipo con conexión. ',
x_Data       : 'Datos ',
x_DataDesc      : 'Opcional. Los datos se utilizan habitualmente al enviar transacciones a contratos. ',
OFFLINE_Step2_Label_7       : 'Introduce / elige tu Clave Privada / JSON. ',
OFFLINE_Step3_Title         : 'Paso 3: Enviar / Publicar transacción (con conexión) ',
OFFLINE_Step3_Label_1       : 'Pega aquí la transacción firmada del paso 2 y pulsa el botón "ENVIAR TRANSACCIÓN". ',

/* Deploy Contracts */
CONTRACT_GenBytecode                : 'Generar Bytecode ',
CONTRACT_GenBytecoded               : 'Bytecode generado ',
TX_Sign                  : 'Firmar transacción ',
CONTRACT_GenInterface               : 'Interfaz generada ',

/* My Wallet */
WALL_Nickname                  : 'Alias de cartera ',
MYWAL_Address               : 'Dirección de cartera ',
ACCOUNT_Balance                   : 'Saldo ',
WALL_Edit_Short                  : 'Editar ',
WALL_View_Short                  : 'Ver ',
WALL_Remove                : 'Eliminar ',
WALL_RemoveWal             : 'Eliminar cartera: ',
WALL_WatchOnlyAccounts             : 'Tus cuentas de sólo visualización ',
WALL_Viewing               : 'Viendo cartera ',
WALL_Hide                  : 'Ocultar información de cartera ',
WALL_Edit                : 'Editar cartera ',
WALL_Name                  : 'Nombre de la cartera ',
WARN_06             : '¡Atención! Estás a punto de eliminar tu cartera ',
WARN_07             : 'Asegúrate de haber **guardado tu clave privada y/o archivo almacén de clave y la contraseña** antes de eliminarlo. ',
WARN_08             : 'Si en el futuro quieres utilizar esta cartera con MyEtherWallet CX, tendrás que volver a añadirla manualmente utilizando Clave Privada/JSON y contraseña. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Esto te permite descargar múltiples versiones de claves privadas e imprimir de nuevo tu cartera en papel. Puede que te interese hacer esto para [importar tu cuenta en Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Si quieres comprobar tu saldo, recomendamos utilizar un explorador de blockchain como [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Esto te permite descargar múltiples versiones de claves privadas e imprimir de nuevo tu cartera en papel. ',
VIEWWALLET_SuccessMsg       : '¡Enhorabuena! Estos son los detalles de tu cartera. ',

/* Chrome Extension */
ERROR_CX_01                  : 'No tienes ninguna cartera guardada. ¡Haz clic en ["Añadir cartera"](/cx-wallet.html#add-wallet) para añadir una! ',
CX_quicksend                : 'Enviar ', // if no appropriate translation, just use "Send"

/* Node Switcher */
NODE_Title                  : 'Configurar nodo personalizado',
NODE_Subtitle               : 'Para conectar a un nodo local...',
WARN_05                : 'Tu nodo debe ser HTTPS para poder conectar a él desde MyEtherWallet.com. Para conectarte a cualquier nodo, puedes [descargar el repositorio de MyEtherWallet y ejecutarlo localmente](https://github.com/kvhnuke/etherwallet/releases/latest). También puedes conseguir un certificado SSL gratuito a través de [Let\'s Encrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Nombre del nodo',
NODE_Port                   : 'Puerto del nodo',
NODE_CTA                    : 'Guardar y usar nodo personalizado',

/* Contracts */
CONTRACT_Title              : 'Dirección del contrato ',
CONTRACT_Title_2            : 'Seleccionar contrato existente ',
CONTRACT_Json               : 'Interfaz ABI / JSON ',
CONTRACT_Interact_Title     : 'Leer/escribir contrato ',
CONTRACT_Interact_CTA       : 'Seleccionar una función ',
CONTRACT_Bytecode           : 'Bytecode',
CONTRACT_Read               : 'LEER ',
CONTRACT_Write              : 'ESCRIBIR ',

/* Swap / Exchange */
SWAP_rates                  : "Tipos de cambio actuales ",
SWAP_init_1                 : "Quiero cambiar mis ",
SWAP_init_2                 : " por ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Continuar", // or "Continue"
SWAP_information            : "Tu información ",
x_Amount               : "Cantidad a enviar ",
SWAP_rec_amt                : "Cantidad a recibir ",
SWAP_your_rate              : "Tu tipo de cambio ",
SWAP_rec_add                : "Tu dirección de destino ",
SWAP_start_CTA              : "Iniciar intercambio ",
SWAP_ref_num                : "Tu número de referencia ",
SWAP_time                   : "Tiempo restante para enviar ",
SWAP_progress_1             : "Pedido iniciado ",
SWAP_progress_2             : "Esperando recibir tus ", // Waiting for your BTC...
SWAP_progress_3             : "¡Recibido! ", // ETH Received!
SWAP_progress_4             : "Enviando tu {{orderResult.output.currency}} ",
SWAP_progress_5             : "Pedido completado ",
SWAP_order_CTA              : "Por favor, envía ", // Please send 1 ETH...
SWAP_unlock                 : "Desbloquea tu cartera para enviar ETH o tokens directamente desde esta página. ",

/* Sign Message */
MSG_message                 : 'Mensaje ',
MSG_date                    : 'Fecha ',
MSG_signature               : 'Firma ',
MSG_verify                  : 'Verificar mensaje ',
MSG_info1                   : 'Incluye la fecha actual para que la firma no se pueda volver a utilizar en otra fecha. ',
MSG_info2                   : 'Incluye tu apodo y dónde utilizas ese apodo para que otra persona no lo pueda utilizar. ',
MSG_info3                   : 'Incluye una razón específica para el mensaje para que no se pueda volver a utilizar con otra finalidad. ',

/* Mnemonic */
MNEM_1                      : 'Selecciona la dirección con la que deseas interactuar. ',
MNEM_2                      : 'Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. ',
MNEM_more                   : 'Más direcciones ',
MNEM_prev                   : 'Direcciones anteriores ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S ',
DECRYPT_Ledger_1                : 'Conecta tu Ledger Nano S ',
DECRYPT_Ledger_2                : 'Inicia la aplicacin Ethereum (o una aplicación de contrato) ',
DECRYPT_Ledger_3                : 'Comprueba que "Browser Support" está activado en "Settings" ',
DECRYPT_Ledger_4                : 'Si no encuentras la opción "Browser Support" en "Settings", asegúrate de tener instalado el [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_0a               : 'Volver a abrir MyEtherWallet en una conexión segura (SSL) ',
DECRYPT_Ledger_0b               : 'Volver a abrir MyEtherWallet usando [Chrome](https://www.google.com/chrome/browser/desktop/) u [Opera](https://www.opera.com/) ',
DECRYPT_Ledger_scan             : 'Conectar a Ledger Nano S ',
x_Trezor                    : 'TREZOR ',
DECRYPT_Trezor_scan             : 'Conectar a TREZOR ',
DECRYPT_Trezor_select           : 'Esto es una semilla TREZOR ',

/* Error Messages */
ERROR_0                     : 'Introduce una cantidad válida. ',
ERROR_1                     : 'Tu contraseña debe tener al menos 9 caracteres. Por favor utiliza una contraseña fuerte. ',
ERROR_2                     : 'Lo sentimos. No reconocemos este tipo de archivo de cartera. ',
ERROR_3                     : 'Este no es un archivo de cartera válido. ',
ERROR_4                     : 'Esta unidad no existe. Por favor utiliza una de las siguientes unidades ',
ERROR_5                     : 'Introduce una Dirección válida. ',
ERROR_6                     : 'Introduce una Contraseña válida. ',
ERROR_7                     : 'Introduce una Cantidad válida. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Introduce un Límite de gas válido. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Introduce un Valor de datos válido. (Must be hex.) ', // 9
ERROR_10                    : 'Introduce una Cantidad de gas válida. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Introduce un Nonce válido. (Must be integer.) ', // 11
ERROR_12                    : 'Introduce una Transacción firmada válida. ',
ERROR_13                    : 'Ya existe una cartera con este alias. ',
ERROR_14                    : 'Cartera no encontrada. ',
ERROR_15                    : 'No parece que exista todavía una propuesta con este ID o hay un error al leer esta propuesta. ',
ERROR_16                    : 'Ya hay almacenada una cartera con esta dirección. Por favor comprueba la página de carteras. ',
ERROR_17                    : 'Fondos no suficientes para gas * precio + valor. Es necesario tener al menos 0.01 ether en tu cuenta para cubrir el coste del gas. Añade algo de ether e inténtalo de nuevo. ',
ERROR_18                    : 'Sería necesario utilizar todo el gas en esta transacción. Esto significa que ya has votado en esta propuesta o que el periodo de debate ha concluido. ',
ERROR_19                    : 'Introduce un Símbolo válido ',
ERROR_20                    : 'No es un token ERC-20 válido ',
ERROR_21                    : 'No se ha podido estimar el gas. No hay suficientes fondos en la cuenta, o el contrato de destino ha devuelto un error. Puedes ajustar el gas manualmente y continuar. Puede que el mensaje de error al enviar contenga más información. ',
ERROR_22                    : 'Introduce un nombre de nodo válido ',
ERROR_23                    : 'Introduce una URL válida. Si estás en HTTPS, tu URL debe ser HTTPS ',
ERROR_24                    : 'Introduce un puerto válido ',
ERROR_25                    : 'Introduce un chain ID válido ',
ERROR_26                    : 'Introduce un ABI válido ',
ERROR_27                    : 'Cantidad mínima 0.01 ',
ERROR_28                    : '**Necesitas tu archivo Keystore/JSON y la contraseña** (o clave privada) para acceder a esta cartera en el futuro. Por favor ¡guárdala y respáldala externamente! No hay modo de recuperar una cartera si no la guardas. Lee la [página de ayuda](https://www.myetherwallet.com/#help) para instrucciones. ',
ERROR_29                    : 'Introduce un user & password válido. ', // 29
ERROR_30                    : 'Introduce un name válido (7+ characters, limited punctuation) ', // 30
ERROR_31                    : 'Introduce un secret phrase válido. ', // 31
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : 'Dirección válida ',
SUCCESS_2                   : 'Cartera descifrada con éxito ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ', //'Transacción enviada. TX Hash ',
SUCCESS_4                   : 'Se ha añadido tu cartera ',
SUCCESS_5                   : 'Archivo seleccionado ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
WARN_02              : 'Has llegado aquí a través de un enlace que ya tiene rellenados la dirección, cantidad, gas, campos de datos o el tipo de transacción (modo de envío). Puedes cambiar cualquier parámetro antes de enviar. Desbloquea tu cartera para comenzar. ',

/* Geth Error Messages */
GETH_InvalidSender          : 'Remitente no válido ',
GETH_Nonce                  : 'Nonce demasiado bajo ',
GETH_Cheap                  : 'Precio de gas demasiado bajo para aceptación ',
GETH_Balance                : 'Saldo insuficiente ',
GETH_NonExistentAccount     : 'La cuenta no existe o tiene un saldo insuficiente ',
GETH_InsufficientFunds      : 'Fondos no suficientes para gas * precio + valor ',
GETH_IntrinsicGas           : 'Gas intrínseco demasiado bajo ',
GETH_GasLimit               : 'Sobrepasa el límite de gas del bloque ',
GETH_NegativeValue          : 'Valor negativo ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "Transaction with the same hash was already imported.",
PARITY_GasLimitExceeded     : "Transaction cost exceeds current gas limit. Limit: {}, got: {}. Try decreasing supplied gas.",
PARITY_InsufficientBalance  : "Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} and got: {}.",
PARITY_InsufficientGasPrice : "Transaction fee is too low. It does not satisfy your node's minimal fee (minimal: {}, got: {}). Try increasing the fee.",
PARITY_InvalidGasLimit      : "Supplied gas is beyond limit.",
PARITY_LimitReached         : "There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the fee.",
PARITY_Old                  : "Transaction nonce is too low. Try incrementing the nonce.",
PARITY_TooCheapToReplace    : "Transaction fee is too low. There is another transaction with same nonce in the queue. Try increasing the fee or incrementing the nonce.",

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : 'Gracias a nuestros traductores ',
z_TRANSLATE1            : 'Ignacio Fernández del Álamo  · ',
z_TRANSLATE2            : 'Carlos Lizarraga Rodrigo ',
z_TRANSLATE3            : '',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''
};

module.exports = es;
