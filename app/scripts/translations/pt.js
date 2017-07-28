// Portuguese
'use strict';
var pt = function() {}
pt.code = 'pt';
pt.data = {

HELP_2a_Title               : 'How do I save/backup my wallet? ',

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
NAV_AddWallet               : 'Adicionar Carteira ',
NAV_BulkGenerate            : 'Gerar Bulk ',
NAV_Contact                 : 'Contato ',
NAV_Contracts               : 'Contratos ',
NAV_DeployContract          : 'Implantar Contrato ',
NAV_ENS                     : 'ENS',
NAV_GenerateWallet_alt      : 'New Wallet ',
NAV_GenerateWallet          : 'Gerar Carteira ',
NAV_Help                    : 'Ajuda ',
NAV_InteractContract        : 'Interact with Contract ',
NAV_Multisig                : 'Multisig ',
NAV_MyWallets               : 'Minhas Carteiras ',
NAV_Offline                 : 'Enviar Offline ',
NAV_SendEther               : 'Enviar Ether & Tokens ',
NAV_SendTokens              : 'Enviar Tokens ',
NAV_SignMsg                 : 'Sign Message ',
NAV_Swap                    : 'Exchange ',
NAV_ViewWallet              : 'Ver Informação da Carteira ',
NAV_YourWallets             : 'Suas Carteiras ',

/* General */
x_Access                    : 'Access ',
x_AddessDesc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Você deve saber sua "Conta #" ou sua "Chave Pública". É o que você enviar para que as pessoas possam enviar-lhe ether. Esse ícone é uma maneira fácil de reconhecer o seu endereço. ',
x_Address                   : 'Seu Endereço ',
x_Cancel                    : 'Cancelar ',
x_CSV                       : 'Arquivo CSV (não criptografado) ',
x_Download                  : 'Download ',
x_Json                      : 'Arquivo JSON (não criptografada) ',
x_JsonDesc                  : 'Este é o descriptografado, formato JSON da sua chave privada. Isto significa que você não precisa da senha, mas qualquer um que encontrar o seu JSON pode acessar sua carteira & Éter sem a senha. ',
x_Keystore                  : 'Arquivo de armazenamento de chaves (UTC / JSON · Recomendado · Criptografado) ',
x_Keystore2                 : 'Arquivo de armazenamento de chaves (UTC / JSON) ',
x_KeystoreDesc              : 'Este arquivo de armazenamento de chaves corresponde ao formato usado pela Mist para que você possa facilmente importá-lo no futuro. É recomendado que o arquivo seja transferido e feito seu backup. ',
x_Mnemonic                  : 'Frase Mnemonic ',
x_ParityPhrase              : 'Parity Phrase ',
x_Password                  : 'Senha ',
x_Print                     : 'Imprimir Carteira de Papel ',
x_PrintDesc                 : 'Dica: Clique impressão e salve como PDF, mesmo se você não possui uma impressora! ',
x_PrintShort                : 'Imprimir ',
x_PrivKey                   : 'Chave Privada (não criptografada) ',
x_PrivKey2                  : 'Chave Privada ',
x_PrivKeyDesc               : 'Essa é a versão de texto não criptografada da sua chave privada, o que significa que nenhuma senha é necessária. Se alguém encontrar a sua chave privada sem criptografia, eles podem acessar sua carteira sem a senha. Por esta razão, as versões codificadas são tipicamente recomendadas. ',
x_Save                      : 'Salvar ',
x_TXT                       : 'Arquivo TXT (não criptografado) ',
x_Wallet                    : 'Carteira ',

/* Header */
MEW_Warning_1               : 'Sempre verifique a URL antes de acessar sua carteira ou criar uma nova carteira. Cuidado com os sites de phishing! ',
CX_Warning_1                : 'Certifique-se de que você tem ** backups externos ** de quaisquer carteiras armazenadas aqui. Muitas coisas podem acontecer que faria com que você perdesse os dados nesta extensão Chrome, incluindo desinstalar e reinstalar a extensão. Esta extensão é uma maneira de acessar facilmente as suas carteiras, ** não ** uma forma de apoiá-los. ',
MEW_Tagline                 : 'Fonte aberta JavaScript para o client-side da Carteira Ether ',
CX_Tagline                  : 'Fonte Aberta JavaScript para o client-side da Carteira Ether para extensão do Chrome ',

/* Footer */
FOOTER_1                    : 'Uma fonte aberta, javascript, ferramenta do client-side para gerar Carteiras Ethereum & envio de transações. ',
FOOTER_1b                   : 'Criado por ',
FOOTER_2                    : 'Doações serão muito apreciadas: ',
FOOTER_3                    : 'Carteira Client-side gerada por ',
FOOTER_4                    : 'Aviso Legal ',

/* Sidebar */
sidebar_AccountInfo         : 'Informações da Conta ',
sidebar_AccountAddr         : 'Endereço da Conta ',
sidebar_AccountBal          : 'Saldo da Conta ',
sidebar_TokenBal            : 'Saldo de Tokens ',
sidebar_Equiv               : 'Valor Equivalente ',
sidebar_TransHistory        : 'Histórico de Transações ',
sidebar_donation            : 'MyEtherWallet é grátis, um serviço de fonte aberta dedicado a sua privacidade e segurança. Quanto mais doações nós recebermos, mais podemos gastar criando novidade, ouvindo seu feedback, e entregando o que você deseja. Somos apenas duas pessoas tentando mudar o mundo. Ajude-nos? ',
sidebar_donate              : 'De ',
sidebar_thanks              : 'OBRIGADO!!! ',

/* Decrypt Panel */
decrypt_Access              : 'Como você gostaria de acessar sua carteira? ',
decrypt_Title               : 'Selecione o formato da sua chave privada: ',
decrypt_Select              : 'Selecione uma Carteira: ',

/* Add Wallet */
ADD_Label_1                 : 'O que você gostaria de fazer? ',
ADD_Radio_1                 : 'Gerar Nova Carteira ',
ADD_Radio_2                 : 'Selecione seu arquivo da Carteira (Keystore / JSON) ',
ADD_Radio_2_alt             : 'Selecione seu arquivo da Carteira ',
ADD_Radio_2_short           : 'SELECIONE O ARQUIVO DA CARTEIRA... ',
ADD_Radio_3                 : 'Cole/Digite sua Chave Privada ',
ADD_Radio_4                 : 'Adicionar uma conta para ver ',
ADD_Radio_5                 : 'Cole/Digite sua Mnemonic ',
ADD_Radio_5_Path            : 'Select HD derivation path ',
ADD_Label_2                 : 'Crie um Apelido: ',
ADD_Label_3                 : 'Sua carteira é criptografada. Por favor, insira a senha ',
ADD_Label_4                 : 'Adicionar uma conta para ver ',
ADD_Warning_1               : 'Você pode adicionar qualquer conta para "ver" na tab de carteiras sem fazer o upload da chave privada. Isso significa que você ** não **  tem acesso a essa carteira, nem pode transferir Ether a partir dela. ',
ADD_Label_5                 : 'Insira o Endereço ',
ADD_Label_6                 : 'Desbloqueie sua Carteira ',
ADD_Label_6_short           : 'Desbloqueie ',
ADD_Label_7                 : 'Adicionar Conta ',

/* Generate Wallets */
GEN_desc                    : 'Se você quer gerar multiplas carteiras. você pode fazer isso aqui ',
GEN_Label_1                 : 'Insira uma senha forte (pelo menos 9 dígitos) ',
GEN_Placeholder_1           : 'NÃO esqueça de salvar isso! ',
GEN_SuccessMsg              : 'Sucesso! Sua carteira foi gerada. ',
GEN_Label_2                 : 'Salve seu arquivo de armazenamento de chaves. Não esqueça da sua senha acima. ',
GEN_Label_3                 : 'Salve Seu Enderço. ',
GEN_Label_4                 : 'Opcional: Imprima sua carteira de papel, ou guarde a versão do código QR. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Número de Carteiras a gerar ',
BULK_Label_2                : 'Gerar Carteiras ',
BULK_SuccessMsg             : 'Sucesso! Suas carteiras foram geradas. ',

/* Sending Ether and Tokens */
SEND_addr                   : 'Para o Endereço ',
SEND_amount                 : 'Valor a enviar ',
SEND_amount_short           : 'Valor ',
SEND_custom                 : 'Adicionar token personalizado ',
SEND_gas                    : 'Gás ',
SEND_TransferTotal          : 'Enviar o Salto Total ',
SEND_generate               : 'Gerar Transação ',
SEND_raw                    : 'Transação Raw ',
SEND_signed                 : 'Transação Assinada ',
SEND_trans                  : 'Enviar Transação ',
SENDModal_Title             : 'Cuidado! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Você está prestes a enviar ',
SENDModal_Content_2         : 'para o endereço ',
SENDModal_Content_3         : 'Você tem certeza que quer fazer isso? ',
SENDModal_Content_4         : 'NOTA: Se você encontrar um erro, você provavelmente precisará adicionar ether a sua conta para cobrir o custo do gás para o envio de tokens. Gás é pago em ether. ',
SENDModal_No                : 'Não, me tire daqui! ',
SENDModal_Yes               : 'Sim, eu tenho certeza! Faça a transação. ',

/* Tokens */
TOKEN_Addr                  : 'Endereço ',
TOKEN_Symbol                : 'Símbolo do Token ',
TOKEN_Dec                   : 'Decimais ',
TOKEN_show                  : 'Mostre todos os Tokens ',
TOKEN_hide                  : 'Esconder Tokens ',

/* Send Transaction */
TRANS_desc                  : '',
TRANS_warning               : 'Se você estiver usando somente "ETH" ou "ETC" Funções que você está enviando através de um contrato. Alguns serviços têm problemas para aceitar essas transações. Leia mais. ',
TRANS_advanced              : '+Avançado: Adicionar dados ',
TRANS_data                  : 'Dados ',
TRANS_gas                   : 'Gás Limit ',
TRANS_sendInfo              : 'Uma transação padrão usando 21000 gás irá custar 0.000441 ETH. Nós usamos um preço ligeiramente acima do mínima de gás de 0,000000021 ETH para garantir que ele seja minado rapidamente. Nós não recebemos nenhuma taxa de transação. ',

/* Send Transaction Modals */
TRANSModal_Title            : '"Só ETH" e "Só ETC" Transações ',
TRANSModal_Content_0        : 'Uma nota sobre diferentes transações e diferentes serviços: ',
TRANSModal_Content_1        : '**ETH (Transação Padrão): ** Isso gera uma transação padrão diretamente de um endereço para outro. Tem um gás padrão de 21000. É provável que qualquer ETH enviados através deste método serão repetidos para a cadeia ETC.. ',
TRANSModal_Content_2        : '**Só ETH: ** Isso envia via [Timon Rapp\'s contrato de proteção de repetição (como recomendado pelo VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) para que você só envie na cadeia **ETH**. ',
TRANSModal_Content_3        : '**Só ETC: ** Isso envia via [Timon Rapp\'s contrato de proteção de repetição (como recomendado pelo VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) para que você só envie na cadeia **ETC**. ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift: ** Envia somente via Transação Padrão. Se você enviar via contrato "único", você vai precisar contatar a equipe de suporte para adicionar manualmente o seu balanço ou reembolsá-lo. [Pode tentar Shapeshift\'s ferramenta de "mistura".](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex:** Sem problemas conhecidos. Use qualquer um. ',
TRANSModal_Yes              : 'Legal, agora eu entendi. ',
TRANSModal_No               : 'Oh Deus, eu fiquei mais confuso. Ajude-me. ',

/* Offline Transaction */
OFFLINE_Title               : 'Gere & Envie Transações Offline ',
OFFLINE_Desc                : 'Gerar transações offline pode ser feita em três passos. Você vai completar os passos 1 e 3 em um computador online, e o passo 2 em um computador offline/airgapped. Isto garante que suas chaves privadas não sejam utilizadas em um dispositivo conectado à internet. ',
OFFLLINE_Step1_Title        : 'Passo 1: Gerar a Informação (Computador Online) ',
OFFLINE_Step1_Button        : 'Gerar Informaçoes ',
OFFLINE_Step1_Label_1       : 'Do Endereço ',
OFFLINE_Step1_Label_2       : 'Nota: Este é o endereço de partina, não o endereço de destino. O valor aleatório é gerado a partir da conta de origem. Se estiver usando um computador airgapped, seria o endereço da conta de armazenagem a frio. ',
OFFLINE_Step2_Title         : 'Step 2: Generate Transaction (Offline Computer) ',
OFFLINE_Step2_Label_1       : 'Para o Endereço ',
OFFLINE_Step2_Label_2       : 'Valor / Quantia para Enviar ',
OFFLINE_Step2_Label_3       : 'Preço do Gás ',
OFFLINE_Step2_Label_3b      : 'Isto foi exibido no Passo 1 no seu computador on-line. ',
OFFLINE_Step2_Label_4       : 'Limite de Gás ',
OFFLINE_Step2_Label_4b      : '21000 é o limite de gás padrão. Quando você envia contratos ou adiciona os dados, isso pode ter de ser diferente. Qualquer gás não utilizado será devolvido a você. ',
OFFLINE_Step2_Label_5       : 'Nonce ',
OFFLINE_Step2_Label_5b      : 'Isto foi exibido no Passo 1 no seu computador on-line. ',
OFFLINE_Step2_Label_6       : 'Dados ',
OFFLINE_Step2_Label_6b      : 'Isto é opcional. Os dados são frequentemente utilizados quando se envia transações com contratos. ',
OFFLINE_Step2_Label_7       : 'Insira / Selecione sua Chave Privada / JSON. ',
OFFLINE_Step3_Title         : 'Passo 3: Envia / Publica a Transação (Computador Online) ',
OFFLINE_Step3_Label_1       : 'Cole a transação assinada do Passo 2 e aperte o botão "ENVIAR TRANSAÇÃO". ',

/* My Wallet */
MYWAL_Nick                  : 'Apelido da Carteira ',
MYWAL_Address               : 'Endereço da Carteira ',
MYWAL_Bal                   : 'Saldo ',
MYWAL_Edit                  : 'Editar ',
MYWAL_View                  : 'Ver ',
MYWAL_Remove                : 'Remover ',
MYWAL_RemoveWal             : 'Remover Carteira: ',
MYWAL_WatchOnly             : 'Suas contas somente de exibição ',
MYWAL_Viewing               : 'Exibindo Carteira ',
MYWAL_Hide                  : 'Esconder Info da Carteira ',
MYWAL_Edit_2                : 'Editar Carteira ',
MYWAL_Name                  : 'Nome da Carteira ',
MYWAL_Content_1             : 'Cuidado! Você está prestes a remover sua carteira ',
MYWAL_Content_2             : 'Certifique-se de que **salvou a chave privada e / ou o Arquivo do Keystore e a senha** antes de removê-la. ',
MYWAL_Content_3             : 'Se pretender utilizar esta carteira com o MyEtherWallet CX no futuro, terá de voltar a adicioná-la manualmente utilizando a chave privada/JSON e a palavra-passe. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'This allows you to download different versions of private keys and re-print your paper wallet. You may want to do this in order to [import your account into Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). If you want to check your balance, we recommend using a blockchain explorer like [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'This allows you to download different versions of private keys and re-print your paper wallet. ',
VIEWWALLET_SuccessMsg       : 'Success! Here are your wallet details. ',

/* Mnemonic */
MNEM_1                      : 'Por favor, selecione o endereço com o qual você gostaria de interagir. ',
MNEM_2                      : 'Sua frase HD mnemônica única pode acessar uma série de carteiras/endereços. Por favor, selecione o endereço com o qual você gostaria interagir neste momento. ',
MNEM_more                   : 'Mais Endereços ',
MNEM_prev                   : 'Endereço Anterior ',

/* Hardware wallets */
x_Ledger                    : 'Carteira Ledge ',
ADD_Ledger_1                : 'Conectar-se a Carteira Ledge ',
ADD_Ledger_2                : 'Abra a aplicação Ethereum (ou uma aplicação de contrato) ',
ADD_Ledger_3                : 'Verifique se o Suporte do Navegador está habilitado em Configurações ',
ADD_Ledger_scan             : 'Conectar-se a Ledger Wallet ',
ADD_Ledger_4                : 'Se nenhum suporte de navegador for encontrado nas configurações, verifique se [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
ADD_Ledger_0a               : 'Re-abra MyEtherWallet em uma conexão (SSL) segura ',
ADD_Ledger_0b               : 'Re-abra MyEtherWallet usando [Chrome](https://www.google.com/chrome/browser/desktop/) ou [Opera](https://www.opera.com/) ',
WARN_Send_Link              : 'Você chegou através de um link que tem o endereço, quantidade de gás, ou campos de dados preenchidos para você. Você pode alterar qualquer informação antes de enviar. Desbloqueie sua carteira para começar. ',
x_Trezor                    : 'TREZOR ',
ADD_Trezor_scan             : 'Connect to TREZOR ',
ADD_Trezor_select           : 'This is a TREZOR seed ',

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
DEP_generate                : 'Gerar Bytecode ',
DEP_generated               : 'Bytecode Gerado ',
DEP_signtx                  : 'Transação Assinada ',
DEP_interface               : 'Interface Gerada ',

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

/* Chrome Extension */
CX_error_1                  : 'You don\'t have any wallets saved. Click ["Add Wallet"](/cx-wallet.html#add-wallet) to add one! ',
CX_quicksend                : 'QuickSend ', // if no appropriate translation, just use "Send"

/* Error Messages */
ERROR_0                     : 'Please enter a valid amount.', // 0
ERROR_1                     : 'Your password must be at least 9 characters. Please ensure it is a strong password. ', // 1
ERROR_2                     : 'Sorry! We don\'t recognize this type of wallet file. ', // 2
ERROR_3                     : 'This is not a valid wallet file. ', // 3
ERROR_4                     : 'This unit doesn\'t exists, please use the one of the following units ', // 4
ERROR_5                     : 'Please enter a valid address. ', // 5
ERROR_6                     : 'Please enter a valid password. ', // 6
ERROR_7                     : 'Please enter valid decimals     (Must be integer, 0-18). ', // 7
ERROR_8                     : 'Please enter a valid gas limit  (Must be integer. Try 21000-4000000). ', // 8
ERROR_9                     : 'Please enter a valid data value (Must be hex). ', // 9
ERROR_10                    : 'Please enter a valid gas price. (Must be integer. Try 20 GWEI (20000000000 WEI)',
ERROR_11                    : 'Please enter a valid nonce      (Must be integer).', // 11
ERROR_12                    : 'Invalid signed transaction. ', // 12
ERROR_13                    : 'A wallet with this nickname already exists. ', // 13
ERROR_14                    : 'Wallet not found. ', // 14
ERROR_15                    : 'Whoops. It doesn\'t look like a proposal with this ID exists yet or there is an error reading this proposal. ', // 15 - NOT USED
ERROR_16                    : 'A wallet with this address already exists in storage. Please check your wallets page. ', // 16
ERROR_17                    : 'Account you are sending from does not have enough funds. If sending tokens, you must have 0.01 ETH in your account to cover the cost of gas. ', // 17
ERROR_18                    : 'All gas would be used on this transaction. This means you have already voted on this proposal or the debate period has ended.', // 18
ERROR_19                    : 'Please enter a valid symbol', // 19
ERROR_20                    : 'Não é um token ERC-20 válido ',
ERROR_21                    : 'Não foi possível estimar o gás. Não há fundos suficientes na conta, ou o endereço do contrato de recebimento iria lançar um erro. Sinta-se livre para definir manualmente o gás e prossiga. A mensagem de erro ao enviar pode ser mais informativa. ',
ERROR_22                    : 'Please enter a valid node name', // 22
ERROR_23                    : 'Please enter a valid URL. If you are on https, your URL must be https', // 23
ERROR_24                    : 'Please enter a valid port. ', // 24
ERROR_25                    : 'Please enter a valid chain ID. ', // 25
ERROR_26                    : 'Please enter a valid ABI. ', // 26
ERROR_27                    : 'Minimum amount: 0.01. Max amount: ', // 27
ERROR_28                    : '**Você precisa do seu arquivo de armazenamento de chaves & senha** (ou Chave Privada) para acessar essa carteira no futuro. Por favor, salve e armazene ela externamente! Não há como recuperar uma carteira se você não salvar isso. Leia a [página de ajuda](https://www.myetherwallet.com/#help) para instruções. ',
ERROR_29                    : 'Please enter a valid user and password. ', // 29
ERROR_30                    : 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
ERROR_31                    : 'Please enter a valid secret phrase. ', // 31
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : 'Valid address ',
SUCCESS_2                   : 'Wallet successfully decrypted ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:  ',
SUCCESS_4                   : 'Your wallet was successfully added ',
SUCCESS_5                   : 'File Selected ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
WARN_Send_Link              : 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. ',

/* Geth Error Messages */
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
PARITY_InsufficientBalance  : "Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} wei and got: {} wei.",
PARITY_GasLimitExceeded     : "Transaction cost exceeds current gas limit. Limit: {}, got: {}. Try decreasing supplied gas.",
PARITY_InvalidGasLimit      : "Supplied gas is beyond limit.",


/* Tranlsation Info */
translate_version           : '0.3 ',
Translator_Desc             : 'Thank you to our translators ',
// fill in your name and address
TranslatorName_1            : '[ Pedro "ShooterXD" Vieira ](https://www.myetherwallet.com/?gaslimit=21000&to=0x24eB7d82166361A8B69adE6FEA187Cb00FD7c7E1&value=1.0#send-transaction) ',
TranslatorAddr_1            : '',
/* Translator 1             : Insert Comments Here */
TranslatorName_2            : '',
TranslatorAddr_2            : '',
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

HELP_2a_Desc_1              : 'You should always back up your wallet externally and in multiple physical locations - like on a USB drive and/or a piece of paper. ',
HELP_2a_Desc_2              : 'Save the address. You can keep it to yourself or share it with others. That way, others can transfer ether to you. ',
HELP_2a_Desc_3              : 'Save versions of the private key. Do not share it with anyone else. Your private key is necessary when you want to access your Ether to send it! There are 3 types of private keys: ',
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
HELP_4_Desc_2               : 'Navigate to the "Enviar Ether & Tokens" page. ',
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
HELP_4CX_Desc_1             : 'First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Enviar Ether & Tokens" page. ',
HELP_4CX_Desc_2             : 'QuickSend: ',
HELP_4CX_Desc_3             : 'Click the Chrome Extension Icon. ',
HELP_4CX_Desc_4             : 'Click the "QuickSend" button. ',
HELP_4CX_Desc_5             : 'Select the wallet you wish to send from. ',
HELP_4CX_Desc_6             : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_4CX_Desc_7             : 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. ',
HELP_4CX_Desc_8             : 'Click "Send Transaction". ',
HELP_4CX_Desc_9             : 'Verify the address and the amount you are sending is correct. ',
HELP_4CX_Desc_10            : 'Enter the password for that wallet. ',
HELP_4CX_Desc_11            : 'Click "Send Transaction." ',
HELP_4CX_Desc_12            : 'Using "Enviar Ether & Tokens" Page ',

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

HELP_7_Title                : '7) How do I send Tokens & add custom tokens? ',
HELP_7_Desc_0               : '[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token. ',
HELP_7_Desc_1               : 'Navigate to the "Enviar Ether & Tokens" page. ',
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

HELP_9_Title                : '9) Is the "Enviar Ether & Tokens" page offline? ',
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

module.exports = pt;
