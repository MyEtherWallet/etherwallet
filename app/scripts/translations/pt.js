// Portuguese
'use strict';
var pt = function() {}
pt.code = 'pt';
pt.data = {

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
WALL_Add               : 'Adicionar Carteira ',
BULK_Generate            : 'Gerar Bulk ',
x_Contact                 : 'Contato ',
CONTRACT_Title               : 'Contratos ',
CONTRACT_Deploy          : 'Implantar Contrato ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Gerar Carteira ',
x_Help                    : 'Ajuda ',
CONTRACT_Interact        : 'Interact with Contract ',
CONTRACT_Multisig                : 'Multisig ',
WALL_walletViewCX               : 'Minhas Carteiras ',
x_Offline                 : 'Enviar Offline ',
TX_Send_Title             : 'Enviar Ether & Tokens ',
TX_Send_ShortTokens              : 'Enviar Tokens ',
MSG_Sign                 : 'Sign Message ',
SWAP_Title                    : 'Exchange ',
WALL_View              : 'Ver Informação da Carteira ',
WALL_Your             : 'Suas Carteiras ',

/* General */
x_Access                    : 'Access ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Você deve saber sua "Conta #" ou sua "Chave Pública". É o que você enviar para que as pessoas possam enviar-lhe ether. Esse ícone é uma maneira fácil de reconhecer o seu endereço. ',
ADDR_                   : 'Seu Endereço ',
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
PW_                  : 'Senha ',
x_Print                     : 'Imprimir Carteira de Papel ',
x_PrintDesc                 : 'Dica: Clique impressão e salve como PDF, mesmo se você não possui uma impressora! ',
x_PrintShort                : 'Imprimir ',
x_PrivKey                   : 'Chave Privada (não criptografada) ',
x_PrivKey2                  : 'Chave Privada ',
x_PrivKeyDesc               : 'Essa é a versão de texto não criptografada da sua chave privada, o que significa que nenhuma senha é necessária. Se alguém encontrar a sua chave privada sem criptografia, eles podem acessar sua carteira sem a senha. Por esta razão, as versões codificadas são tipicamente recomendadas. ',
x_Save                      : 'Salvar ',
x_TXT                       : 'Arquivo TXT (não criptografado) ',
WALL_                    : 'Carteira ',

/* Header */
WARN_01               : 'Sempre verifique a URL antes de acessar sua carteira ou criar uma nova carteira. Cuidado com os sites de phishing! ',
WARN_04                : 'Certifique-se de que você tem ** backups externos ** de quaisquer carteiras armazenadas aqui. Muitas coisas podem acontecer que faria com que você perdesse os dados nesta extensão Chrome, incluindo desinstalar e reinstalar a extensão. Esta extensão é uma maneira de acessar facilmente as suas carteiras, ** não ** uma forma de apoiá-los. ',
FOOTER_Tagline                 : 'Fonte aberta JavaScript para o client-side da Carteira Ether ',
CX_Tagline                  : 'Fonte Aberta JavaScript para o client-side da Carteira Ether para extensão do Chrome ',

/* Footer */
FOOTER_1                    : 'Uma fonte aberta, javascript, ferramenta do client-side para gerar Carteiras Ethereum & envio de transações. ',
FOOTER_1b                   : 'Criado por ',
FOOTER_2                    : 'Doações serão muito apreciadas: ',
FOOTER_3                    : 'Carteira Client-side gerada por ',
FOOTER_4                    : 'Aviso Legal ',

/* Sidebar */
ACCOUNT_Info         : 'Informações da Conta ',
ACCOUNT_Address         : 'Endereço da Conta ',
ACCOUNT_Balance          : 'Saldo da Conta ',
TOKEN_Balance            : 'Saldo de Tokens ',
SIDEBAR_Equiv               : 'Valor Equivalente ',
TX_History        : 'Histórico de Transações ',
SIDEBAR_donation            : 'MyEtherWallet é grátis, um serviço de fonte aberta dedicado a sua privacidade e segurança. Quanto mais doações nós recebermos, mais podemos gastar criando novidade, ouvindo seu feedback, e entregando o que você deseja. Somos apenas duas pessoas tentando mudar o mundo. Ajude-nos? ',
SIDEBAR_donate              : 'De ',
SIDEBAR_thanks              : 'OBRIGADO!!! ',

/* Decrypt Panel */
DECRYPT_Access              : 'Como você gostaria de acessar sua carteira? ',
DECRYPT_Title               : 'Selecione o formato da sua chave privada: ',
WALL_Select              : 'Selecione uma Carteira: ',

/* Add Wallet */
DECRYPT_Label_1                 : 'O que você gostaria de fazer? ',
WALL_GenerateNew                 : 'Gerar Nova Carteira ',
DECRYPT_Radio_2                 : 'Selecione seu arquivo da Carteira (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : 'Selecione seu arquivo da Carteira ',
DECRYPT_Radio_2_short           : 'SELECIONE O ARQUIVO DA CARTEIRA... ',
DECRYPT_Radio_3                 : 'Cole/Digite sua Chave Privada ',
ACCOUNT_AddWatch                 : 'Adicionar uma conta para ver ',
MNEM_Enter                 : 'Cole/Digite sua Mnemonic ',
MNEM_Enter_Path            : 'Select HD derivation path ',
DECRYPT_Label_2                 : 'Crie um Apelido: ',
DECRYPT_Label_3                 : 'Sua carteira é criptografada. Por favor, insira a senha ',
DECRYPT_Label_4                 : 'Adicionar uma conta para ver ',
WARN_03               : 'Você pode adicionar qualquer conta para "ver" na tab de carteiras sem fazer o upload da chave privada. Isso significa que você ** não **  tem acesso a essa carteira, nem pode transferir Ether a partir dela. ',
DECRYPT_Label_5                 : 'Insira o Endereço ',
WALL_Unlock                 : 'Desbloqueie sua Carteira ',
WALL_Unlock_Short           : 'Desbloqueie ',
ACCOUNT_Add                 : 'Adicionar Conta ',

/* Generate Wallets */
GEN_desc                    : 'Se você quer gerar multiplas carteiras. você pode fazer isso aqui ',
PW_Enter                 : 'Insira uma senha forte (pelo menos 9 dígitos) ',
PW_Enter           : 'NÃO esqueça de salvar isso! ',
GEN_SuccessMsg              : 'Sucesso! Sua carteira foi gerada. ',
x_Keystore_Save                 : 'Salve seu arquivo de armazenamento de chaves. Não esqueça da sua senha acima. ',
ADDR_Save                 : 'Salve Seu Enderço. ',
GEN_Label_4                 : 'Opcional: Imprima sua carteira de papel, ou guarde a versão do código QR. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Número de Carteiras a gerar ',
BULK_Label_2                : 'Gerar Carteiras ',
BULK_SuccessMsg             : 'Sucesso! Suas carteiras foram geradas. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'Para o Endereço ',
x_Amount                 : 'Valor a enviar ',
x_Amount_short           : 'Valor ',
TOKEN_AddCustom                 : 'Adicionar token personalizado ',
x_GasLimit                    : 'Gás ',
TX_Send_All          : 'Enviar o Salto Total ',
TX_Generate               : 'Gerar Transação ',
TX_Unsigned                    : 'Transação Raw ',
TX_Signed                 : 'Transação Assinada ',
TX_Send_Short                  : 'Enviar Transação ',
SENDModal_Title             : 'Cuidado! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Você está prestes a enviar ',
SENDModal_Content_2         : 'para o endereço ',
SENDModal_Content_3         : 'Você tem certeza que quer fazer isso? ',
SENDModal_Content_4         : 'NOTA: Se você encontrar um erro, você provavelmente precisará adicionar ether a sua conta para cobrir o custo do gás para o envio de tokens. Gás é pago em ether. ',
SENDModal_No                : 'Não, me tire daqui! ',
SENDModal_Yes               : 'Sim, eu tenho certeza! Faça a transação. ',

/* Tokens */
ADDR_Short                  : 'Endereço ',
TOKEN_Symbol                : 'Símbolo do Token ',
TOKEN_Dec                   : 'Decimais ',
TOKEN_show                  : 'Mostre todos os Tokens ',
TOKEN_hide                  : 'Esconder Tokens ',

/* Send Transaction */
TX_desc                  : '',
TX_warning               : 'Se você estiver usando somente "ETH" ou "ETC" Funções que você está enviando através de um contrato. Alguns serviços têm problemas para aceitar essas transações. Leia mais. ',
SEND_Advanced              : '+Avançado: Adicionar dados ',
x_Data                  : 'Dados ',
x_GasLimit                   : 'Gás Limit ',
TX_Send_ShortInfo              : 'Uma transação padrão usando 21000 gás irá custar 0.000441 ETH. Nós usamos um preço ligeiramente acima do mínima de gás de 0,000000021 ETH para garantir que ele seja minado rapidamente. Nós não recebemos nenhuma taxa de transação. ',

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
ADDR_From       : 'Do Endereço ',
OFFLINE_Step1_Label_2       : 'Nota: Este é o endereço de partina, não o endereço de destino. O valor aleatório é gerado a partir da conta de origem. Se estiver usando um computador airgapped, seria o endereço da conta de armazenagem a frio. ',
OFFLINE_Step2_Title         : 'Step 2: Generate Transaction (Offline Computer) ',
ADDR_To       : 'Para o Endereço ',
OFFLINE_Step2_Label_2       : 'Valor / Quantia para Enviar ',
x_GasPrice                  : 'Preço do Gás ',
x_GasPriceDesc                 : 'Isto foi exibido no Passo 1 no seu computador on-line. ',
x_GasLimit       : 'Limite de Gás ',
x_GasLimitDesc      : '21000 é o limite de gás padrão. Quando você envia contratos ou adiciona os dados, isso pode ter de ser diferente. Qualquer gás não utilizado será devolvido a você. ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'Isto foi exibido no Passo 1 no seu computador on-line. ',
x_Data       : 'Dados ',
x_DataDesc      : 'Isto é opcional. Os dados são frequentemente utilizados quando se envia transações com contratos. ',
OFFLINE_Step2_Label_7       : 'Insira / Selecione sua Chave Privada / JSON. ',
OFFLINE_Step3_Title         : 'Passo 3: Envia / Publica a Transação (Computador Online) ',
OFFLINE_Step3_Label_1       : 'Cole a transação assinada do Passo 2 e aperte o botão "ENVIAR TRANSAÇÃO". ',

/* My Wallet */
WALL_Nickname                  : 'Apelido da Carteira ',
MYWAL_Address               : 'Endereço da Carteira ',
ACCOUNT_Balance                   : 'Saldo ',
WALL_Edit_Short                  : 'Editar ',
WALL_View_Short                  : 'Ver ',
WALL_Remove                : 'Remover ',
WALL_RemoveWal             : 'Remover Carteira: ',
WALL_WatchOnlyAccounts             : 'Suas contas somente de exibição ',
WALL_Viewing               : 'Exibindo Carteira ',
WALL_Hide                  : 'Esconder Info da Carteira ',
WALL_Edit                : 'Editar Carteira ',
WALL_Name                  : 'Nome da Carteira ',
WARN_06             : 'Cuidado! Você está prestes a remover sua carteira ',
WARN_07             : 'Certifique-se de que **salvou a chave privada e / ou o Arquivo do Keystore e a senha** antes de removê-la. ',
WARN_08             : 'Se pretender utilizar esta carteira com o MyEtherWallet CX no futuro, terá de voltar a adicioná-la manualmente utilizando a chave privada/JSON e a palavra-passe. ',

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
DECRYPT_Ledger_1                : 'Conectar-se a Carteira Ledge ',
DECRYPT_Ledger_2                : 'Abra a aplicação Ethereum (ou uma aplicação de contrato) ',
DECRYPT_Ledger_3                : 'Verifique se o Suporte do Navegador está habilitado em Configurações ',
DECRYPT_Ledger_scan             : 'Conectar-se a Ledger Wallet ',
DECRYPT_Ledger_4                : 'Se nenhum suporte de navegador for encontrado nas configurações, verifique se [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_0a               : 'Re-abra MyEtherWallet em uma conexão (SSL) segura ',
DECRYPT_Ledger_0b               : 'Re-abra MyEtherWallet usando [Chrome](https://www.google.com/chrome/browser/desktop/) ou [Opera](https://www.opera.com/) ',
WARN_02              : 'Você chegou através de um link que tem o endereço, quantidade de gás, ou campos de dados preenchidos para você. Você pode alterar qualquer informação antes de enviar. Desbloqueie sua carteira para começar. ',
x_Trezor                    : 'TREZOR ',
DECRYPT_Trezor_scan             : 'Connect to TREZOR ',
DECRYPT_Trezor_select           : 'This is a TREZOR seed ',

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
CONTRACT_GenBytecode                : 'Gerar Bytecode ',
CONTRACT_GenBytecoded               : 'Bytecode Gerado ',
TX_Sign                  : 'Transação Assinada ',
CONTRACT_GenInterface               : 'Interface Gerada ',

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

/* Chrome Extension */
ERROR_CX_01                  : 'You don\'t have any wallets saved. Click ["Add Wallet"](/cx-wallet.html#add-wallet) to add one! ',
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
WARN_02              : 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. ',

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


/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : 'Thank you to our translators ',
z_TRANSLATE1            : '[ Pedro "ShooterXD" Vieira ](https://www.myetherwallet.com/?gaslimit=21000&to=0x24eB7d82166361A8B69adE6FEA187Cb00FD7c7E1&value=0.1#send-transaction) ',
z_TRANSLATE2            : '',
z_TRANSLATE3            : '',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''

};

module.exports = pt;
