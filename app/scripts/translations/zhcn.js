// simplified Chinese, zh-CN, 简体中文
'use strict';
var zhcn = function() {}
zhcn.code = 'zhcn';
zhcn.data = {

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
WALL_Add               : '添加钱包 ',
BULK_Generate            : '批量生成 ',
x_Contact                 : '联系我们 ',
CONTRACT_Title               : '合同 ',
CONTRACT_Deploy          : '部署合约 ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : '生成钱包 ',
x_Help                    : '帮助 ',
CONTRACT_Interact        : 'Interact with Contract ',
CONTRACT_Multisig                : 'Multisig ',
WALL_walletViewCX               : '我的钱包 ',
x_Offline                 : '离线发送 ',
TX_Send_Title             : '发送以太币 / 发送代币 ', //combined these tabs
MSG_Sign                 : 'Sign Message ',
SWAP_Title                    : 'Swap ',
WALL_View              : '查看钱包信息 ',
WALL_Your             : '你的钱包 ',

/* General */
x_Access                    : 'Access ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. 你可以把地址理解为你的“账户”或者“公钥”。你将地址告诉别人，他们就可以向你发送以太币。那个图标有助于判别你的地址。 ',
ADDR_                   : '你的地址 ',
x_Cancel                    : '拒绝 ',
x_CSV                       : 'CSV文件（未加密） ',
x_Download                  : '下载 ',
x_Json                      : 'JSON文件（未加密） ',
x_JsonDesc                  : '这是你的未加密JSON格式的私钥文件。 这意味着你发送交易时不需要密码，也意味着拿到你的JSON文件的可以无需密码就可以控制你的钱包和以太币。 ',
x_Keystore                  : 'Keystore File (UTC / JSON · 推荐加密的) ',
x_Keystore2                 : 'Keystore File (UTC / JSON) ',
x_KeystoreDesc              : '这个Keystore/JSON文件和Mist、Geth使用的钱包文件是一样的，所以将来你可以非常容易地导入。 It is the recommended file to download and back up.推荐下载和备份这个文件。 ',
x_Mnemonic                  : 'Mnemonic Phrase ',
x_ParityPhrase              : 'Parity Phrase ',
PW_                  : '密码 ',
x_Print                     : '打印纸钱包 ',
x_PrintDesc                 : '小技巧：点击打印，并保存为PDF格式，即使你没有打印机。 ',
x_PrintShort                : '打印 ',
x_PrivKey                   : '私钥（未加密） ',
x_PrivKey2                  : '私钥 ',
x_PrivKeyDesc               : '这是未加密的文本格式私钥文件，这意味发送交易不需要密码。 如果某个人拿到了你的未加密的私钥，他们无需密码就能够控制你的钱包。 出于这个考虑，我们推荐你使用加密的私钥文件。 ',
x_Save                      : '保存 ',
x_TXT                       : 'TXT文件（未加密） ',
WALL_                    : '钱包 ',

/* Header */
WARN_01               : '使用或者创建新钱包之前，一定要检查下网址是否正确。小心钓鱼网址！ ',
WARN_04                : '确保你备份了保存在这里的所有钱包。 许多事情包括卸载和重装扩展，都将使你丢失Chrome扩展中的数据。这个扩展是一种使用钱包的简单方式，但不是备份钱包的方式。 ',
FOOTER_Tagline                 : '开源JavaScript客户端以太币钱包 ',
CX_Tagline                  : '开源JavaScript客户端以太币钱包Chrome扩展 ',

/* Footer */
FOOTER_1                    : '一个开源的生成以太坊钱包和发送交易的JavaScript客户端工具 ',
FOOTER_1b                   : '创建者 ',
FOOTER_2                    : '欢迎捐赠我们： ',
FOOTER_3                    : 'Client-side wallet generation by ',
FOOTER_4                    : '声明 ',

/* Sidebar */
ACCOUNT_Info         : '账户信息： ',
ACCOUNT_Address         : '账户地址： ',
ACCOUNT_Balance          : '账户余额： ',
TOKEN_Balance            : '代币余额： ',
SIDEBAR_Equiv               : '价值： ',
TX_History        : '交易历史： ',
SIDEBAR_donation            : 'MyEtherWallet是保护你的隐私和安全的免费、开源服务。 我们收到的捐赠越多，我们开发新特性、听取你的反馈的时间就越多。我们只是两个尝试改变世界的两个开发者。您能帮助我们吗？ ',
SIDEBAR_donate              : '捐赠 ',
SIDEBAR_thanks              : '感谢你！！！ ',

/* Decrypt Panel */
DECRYPT_Access              : '你将怎样使用钱包？ ',
DECRYPT_Title               : '选择你的私钥文件格式： ',
WALL_Select              : '选择一个钱包： ',

/* Add Wallet */
DECRYPT_Label_1                 : '你想执行什么操作？ ',
WALL_GenerateNew                 : '生成新钱包 ',
DECRYPT_Radio_2                 : '选择你的钱包文件（Keystore/JSON） ',
DECRYPT_Radio_2_alt             : '选择你的钱包文件： ',
DECRYPT_Radio_2_short           : '选择钱包文件... ',
DECRYPT_Radio_3                 : '粘贴/输入你的私钥 ',
ACCOUNT_AddWatch                 : '添加一个查看账户 ',
MNEM_Enter                 : 'Paste/Type Your Mnemonic ',
MNEM_Enter_Path            : 'Select HD derivation path ',
MNEM_Enter_PathCustom      : 'Custom',
DECRYPT_Label_2                 : '生成一个钱包昵称： ',
DECRYPT_Label_3                 : '你的钱包被加密，请输入密码： ',
DECRYPT_Label_4                 : '添加一个查看账户 ',
WARN_03               : '你可以钱包标签页面添加任何要查看的账户，不需要上传私钥。这不意味着你可以使用钱包和发送以太币。 ',
DECRYPT_Label_5                 : '输入地址： ',
WALL_Unlock                 : '解锁钱包 ',
WALL_Unlock_Short           : '解锁 ',
ACCOUNT_Add                 : '增加账户 ',

/* Generate Wallets */
GEN_desc                    : '如果你想生成多个钱包，你可以在这里进行： ',
PW_Enter                 : '输入一个强密码（至少9位） ',
PW_Enter           : '不要忘记保存！ ',
GEN_SuccessMsg              : '成功！你的钱包已经生成。 ',
x_Keystore_Save                 : '保存你的Keystore或者私钥。不要忘记你的密码。 ',
ADDR_Save                 : '保存你的地址。 ',
GEN_Label_4                 : '打印你的纸钱包，或者存储二维码。（可选） ',

/* Bulk Generate Wallets */
BULK_Label_1                : '打算生成的钱包数量 ',
BULK_Label_2                : '生成钱包 ',
BULK_SuccessMsg             : '成功！你的钱包生成好了。 ',

/* Sending Ether and Tokens */
ADDR_To                   : '发送至地址： ',
x_Amount                 : '转账数额： ',
x_Amount_short           : '数额 ',
TOKEN_AddCustom                 : 'Custom ',
x_GasLimit                    : 'Gas ',
TX_Send_All          : '发送所有余额 ',
TX_Generate               : '生成交易 ',
TX_Unsigned                    : '未生效交易 ',
TX_Signed                 : '签名交易 ',
TX_Send_Short                  : '发送交易 ',
TOKEN_AddCustom                 : 'Add Custom Token ',
SENDModal_Title             : '警告！ ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : '你将发送 ',
SENDModal_Content_2         : '到地址 ',
SENDModal_Content_3         : '你确定这样做吗？ ',
SENDModal_Content_4         : '注意：如果你遇到错误，你最有可能向你的账户添加以太币，用以支付发送代币所需的gas。 Gas is paid in ether.Gas用以太币支付。 ',
SENDModal_No                : '不，离开这里。 ',
SENDModal_Yes               : '是的，我确定！发送交易。 ',

/* Tokens */
ADDR_Short                  : '地址： ',
TOKEN_Symbol                : '代币符号： ',
TOKEN_Dec                   : '小数点位数： ',
TOKEN_hide                  : 'Hide Tokens ',
TOKEN_show                  : 'Show All Tokens ',

/* Send Transaction */
TX_desc                  : '如果你想发送代币，请使用“发送代币”页面。 ',
TX_warning               : '如果你使用“只发送ETH”或则“只发送ETC”功能，那么你是通过合约发送交易。 一些服务（例如交易所充值）接收这些交易时会遇到问题。阅读更多内容。 ',
SEND_Advanced              : '高级功能：增加更多Gas或者数据 ',
x_Data                  : '数据： ',
x_GasLimit                   : 'Gas Limit： ',
TX_Send_ShortInfo              : '一笔标准交易需要21000gas，花费0.000441以太币。我们将gas价格设为0.000000021以太币，略高于最低价格，以保证交易被快速打包。我们不收取交易费用。 ',

/* Send Transaction Modals */
TRANSModal_Title            : '“只发送ETH”和“只发送ETC”交易 ',
TRANSModal_Content_0        : '注意不同的交易和不同的服务： ',
TRANSModal_Content_1        : '**发送ETH（标准交易）：** 这将生成一个默认交易，直接从一个地址发送到另一个地址。它的默认gas是21000。 用这种方式发送ETH可能会在ETC链上重放。 ',
TRANSModal_Content_2        : '**只发送：ETH：** 这是通过[Timon Rapp的重放保护合约（VB推荐）](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/)， 所以你只会在ETH链上发送交易。 ',
TRANSModal_Content_3        : '**只发送：ETC：** 这是通过[Timon Rapp的重放保护合约（VB推荐）](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/)， 所以你只会在ETH链上发送交易。 ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift: ** 通过标准交易只发送ETH或者ETC。如果你通过“只发送ETH或者ETC”合约发送交易，你需要联系他们的客服，让他们手动增加你的余额或者返币给你。 [你也可以尝试Shapeshift的”分割“工具。](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken、Poloniex交易所：**向这两个交易所地址发送没币有遇到问题。可以使用。 ',
TRANSModal_Yes              : '我理解了。 ',
TRANSModal_No               : '我更加糊涂了，请帮助我。 ',

/* Offline Transaction */
OFFLINE_Title               : '生成、发送离线交易 ',
OFFLINE_Desc                : '生成离线交易需要3个步骤。步骤1和步骤3在连网的电脑上完成，步骤2在离线电脑上完成。这确保了你的私钥不会接触到联网设备。 ',
OFFLLINE_Step1_Title        : '步骤1：生成信息（联网电脑） ',
OFFLINE_Step1_Button        : '生成信息 ',
ADDR_From       : '发自地址： ',
OFFLINE_Step1_Label_2       : '注意：这是发自地址，不是发往地址。 Nonce是从起始账户生成的。如果使用一台隔离电脑，它就是冷存储的账户地址。 ',
OFFLINE_Step2_Title         : '步骤2：生成交易（离线电脑） ',
ADDR_To       : '发往地址： ',
OFFLINE_Step2_Label_2       : '发送数额 ',
x_GasPrice                  : 'Gas价格 ',
x_GasPriceDesc                 : '在你的连网电脑的第1步骤中显示了。 ',
x_GasLimit       : 'Gas限制 ',
x_GasLimitDesc      : '21000是默认的gas限制。当你发送合约或者添加数据时，gas限制可能会不同。没使用的gas将返回给你。 ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : '在你的连网电脑的第1步中显示了。 ',
x_Data       : '数据 ',
x_DataDesc      : '这是可选项。当你向合约发送交易时，往往需要用到数据。 ',
OFFLINE_Step2_Label_7       : '输入/选择你的私钥文件/JSON ',
OFFLINE_Step3_Title         : '步骤3：发送/公开交易（连网电脑） ',
OFFLINE_Step3_Label_1       : '将步骤2的签名交易粘贴到这里，点击“发送交易”按钮。 ',

/* Deploy Contracts */
CONTRACT_GenBytecode                : '生成字节码 ',
CONTRACT_GenBytecoded               : '生成字节码 ',
TX_Sign                  : '签名交易 ',
CONTRACT_GenInterface               : '生成界面 ',

/* My Wallet */
WALL_Nickname                  : '钱包昵称 ',
MYWAL_Address               : '钱包地址 ',
ACCOUNT_Balance                   : '余额 ',
WALL_Edit_Short                  : '编辑 ',
WALL_View_Short                  : '查看 ',
WALL_Remove                : '移除 ',
WALL_RemoveWal             : '移除钱包： ',
WALL_WatchOnlyAccounts             : '你的只可查看账户 ',
WALL_Viewing               : '查看钱包： ',
WALL_Hide                  : '隐藏钱包信息 ',
WALL_Edit                : '编辑钱包： ',
WALL_Name                  : '钱包名字 ',
WARN_06             : '警告！你将移除你的钱包： ',
WARN_07             : '确保在移除以前你已经保存了私钥和Keystore文件，并记住了密码。 ',
WARN_08             : '如果你想将来在MyEtherWallet插件中使用该钱包，你需要手动添加私钥/JSON文件和密码。 ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : '这允许你下载不同格式的私钥和重新打印你的纸钱包。为了将[你的账户导入到Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/)，你可能需要这个操作。如果你想查看你的余额，我们推荐使用区块浏览器，例如[etherscan.io](http://etherscan.io/)。 ',
VIEWWALLET_Subtitle_Short   : '这允许你下载不同格式的私钥和重新打印你的纸钱包。 ',
VIEWWALLET_SuccessMsg       : '成功！这是你的钱包细节！ ',

/* Chrome Extension */
ERROR_CX_01                  : '你没有已保存的钱包。点击["添加钱包"](/cx-wallet.html#add-wallet)，添加一个钱包。 ',
CX_quicksend                : '快速发送 ', // if no appropriate translation, just use "Send"

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
ERROR_0                     : '请输入有效数额。 ',
ERROR_1                     : '你的密码至少需要设置为9位。请确保密码足够强。 ',
ERROR_2                     : '抱歉！我们不能识别这种类型的钱包文件。 ',
ERROR_3                     : '这不是一个有效的钱包文件。 ',
ERROR_4                     : 'This unit doesn\'t exists, please use the one of the following units 这个单位不存在，请用下面给出的单位 ',
ERROR_5                     : '无效地址。 ',
ERROR_6                     : '无效密码。 ',
ERROR_7                     : '无效数额。(Must be integer. Try 0-18.) ', // 7
ERROR_8                     : '无效gas上限。(Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : '无效数据值。(Must be hex.) ', // 9
ERROR_10                    : '无效gas数额。(Must be integer. Try 20 GWEI / 20000000000 WEI.)',
ERROR_11                    : '无效nonce。(Must be integer.)', // 11
ERROR_12                    : '无效签名交易。 ',
ERROR_13                    : '已经有一个钱包使用该昵称。 ',
ERROR_14                    : '找不到钱包。 ',
ERROR_15                    : '看起来这个提议不存在或者读取这个提议时出现错误。 ',
ERROR_16                    : '这个地址钱包已经存在于存储中。请查看你的钱包页面。 ',
ERROR_17                    : '你的账户需要至少0.01以太币，已支付gas费用。请添加一些以太币，再次尝试。 ',
ERROR_18                    : '所有的gas将用于这笔交易。 这意味着你已经对这个提议进行投票或者辩论期已经结束。 ',
ERROR_19                    : '无效符号 ',
ERROR_20                    : 'Not a valid ERC-20 token', // 20
ERROR_21                    : 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.', // 21
ERROR_22                    : 'Please enter a valid node name', // 22
ERROR_23                    : 'Please enter a valid URL. If you are on https, your URL must be https', // 23
ERROR_24                    : 'Please enter a valid port. ', // 24
ERROR_25                    : 'Please enter a valid chain ID. ', // 25
ERROR_26                    : 'Please enter a valid ABI. ', // 26
ERROR_27                    : 'Minimum amount: 0.01. Max amount: ', // 27
ERROR_28                    : '将来使用钱包时，你需要Keystore文件或者私钥。 请做好保存和备份。 如果你没有保存，没有办法恢复钱包。 请阅读[帮助页面](https://www.myetherwallet.com/#help)，获得更多信息。 ',
ERROR_29                    : 'Please enter a valid user and password. ', // 29
ERROR_30                    : 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
ERROR_31                    : 'Please enter a valid secret phrase. ', // 31
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : '有效地址 ',
SUCCESS_2                   : '钱包解密成功 ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:  ', //'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ', //
SUCCESS_4                   : '成功添加你的钱包： ',
SUCCESS_5                   : '选择的文件： ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
WARN_02              : 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. ',

/* Geth Error Messages */
GETH_InvalidSender          : '无效发送者 ',
GETH_Nonce                  : 'Nonce太低 ',
GETH_Cheap                  : 'Gas价格太低，不被接受 ',
GETH_Balance                : '余额不足 ',
GETH_NonExistentAccount     : '账户不存在或者账户余额太低 ',
GETH_InsufficientFunds      : '余额不足，余额低于 gas * price + 发送数额 ',
GETH_IntrinsicGas           : '固有gas太低 ',
GETH_GasLimit               : '超过区块gas上限 ',
GETH_NegativeValue          : '负值 ',

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
z_TRANSLATEDesc             : '感谢中文译者： ',
z_TRANSLATE1            : '[Shaoping@ethfans.org （少平]((https://www.myetherwallet.com/?gaslimit=21000&to=0x4dF5698B1B0195FC44Fe1D2d6037CE33F215c740&value=0.1#send-transaction)) ',
z_TRANSLATE2            : '',
z_TRANSLATE3            : '',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''

};

module.exports = zhcn;
