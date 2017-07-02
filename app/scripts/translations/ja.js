// Japanese
'use strict';
var ja = function() {}
ja.code = 'ja';
ja.data = {

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
WALL_Add               : 'お財布の追加 ',
BULK_Generate            : 'バルク作成 ',
x_Contact                 : '連絡する ',
CONTRACT_Title               : '契約 ',
CONTRACT_Deploy          : '契約を展開 ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'お財布の作成 ',
x_Help                    : 'ヘルプ ',
CONTRACT_Interact        : '契約を操作 ',
CONTRACT_Multisig                : '多重署名 ',
WALL_walletViewCX               : '自分のお財布 ',
x_Offline                 : 'オフライン送出 ',
TX_Send_Title             : 'Ether/トークンの送出 ',
TX_Send_ShortTokens              : 'トークン送出 ',
MSG_Sign                 : 'メッセージ署名 ',
SWAP_Title                    : '通貨の両替 ',
WALL_View              : 'お財布情報を見る ',
WALL_Your             : '自分のお財布 ',

/* General */
x_Access                    : 'アクセス ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. これは自分のアカウント番号と公開鍵になります。ETHを送信するために必要な情報です。アイコンは自分のアドレスを識別するものです。 ',
ADDR_                   : '自分のアドレス ',
x_Cancel                    : '取り消す ',
x_CSV                       : 'CSV ファイル (未暗号化) ',
x_Download                  : 'ダウンロード ',
x_Json                      : 'JSON ファイル (未暗号化) ',
x_JsonDesc                  : 'これはパスワードが不要な暗号化されていないJSONフォーマットの秘密鍵です。この暗号化されていないJSONフォーマットの秘密鍵を使えば、誰でもパスワードを使わずに自分のお財布とEtherにアクセスできます。 ',
x_Keystore                  : 'Keystore ファイル (UTC / JSON · 推奨 · 暗号化) ',
x_Keystore2                 : 'Keystore ファイル (UTC / JSON) ',
x_KeystoreDesc              : 'この Keystore / JSON ファイルは、後で容易にインポートするため、Mistで使われているフォーマットと一致させる必要があります。ダウンロードしてバックアップを取ることをおすすめします。 ',
x_Ledger                    : 'Ledger Nano S ',
x_Mnemonic                  : 'ニーモニック文節 ',
x_ParityPhrase              : 'パリティ文節 ',
PW_                  : 'パスワード ',
x_Print                     : 'お財布紙情報を印刷 ',
x_PrintDesc                 : '助言: プリンターが接続されていなくても、「印刷」をクリックしてPDFで保存できます。 ',
x_PrintShort                : '印刷 ',
x_PrivKey                   : '秘密鍵（未暗号化） ',
x_PrivKey2                  : '秘密鍵 ',
x_PrivKeyDesc               : 'これはパスワードが不要な暗号化されていない秘密鍵です。この暗号化されていない秘密鍵を使えば、誰でもパスワードなしで自分のお財布を使用できます。従って、暗号化された秘密鍵の利用をおすすめします。 ',
x_Save                      : '保存する ',
x_Trezor                    : 'TREZOR ',
x_TXT                       : 'TXT ファイル (未暗号化) ',
WALL_                    : 'お財布 ',

/* Header */
WARN_01               : 'お財布を操作したり新しいお財布を作成する前に、必ずURLを確認してください。詐欺サイトに御注意ください！ ',
WARN_04                : '必ずここに保管するすべてのお財布の「外部バックアップ」を作成してください。このChrome Extensionでは、再導入などで、データが保存されずの消失することが頻繁に起こります。このエクステンションは容易な操作を提供するのみで、「バックアップ」は行いません。 ',
FOOTER_Tagline                 : 'オープンソース JavaScript クライアントサイド Etherお財布 ',
CX_Tagline                  : 'オープンソース JavaScript クライアントサイド Etherお財布 Chrome Extension ',

/* Footer */
FOOTER_1                    : 'イサリアムお財布の作成とトランザクション実行のためのオープンソース、javascript、 クライアントサイドツール。 ',
FOOTER_1b                   : '制作 ',
FOOTER_2                    : '投げ銭に感謝致します！: ',
FOOTER_3                    : 'クライアントサイドお財布制作 ',
FOOTER_4                    : '免責事項 ',

/* Sidebar */
ACCOUNT_Info         : 'アカウント情報 ',
ACCOUNT_Address         : 'アカウントアドレス:  ',
ACCOUNT_Balance          : 'アカウント残高 ',
TOKEN_Balance            : 'トークン残高 ',
SIDEBAR_Equiv               : '等価 ',
TX_History        : 'トランザクション履歴 ',
SIDEBAR_donation            : 'MyEtherWalletは、プライバシーとセキュリティのための無料のオープンソースサービスです。　寄付が増えることによって、新機能やフィードバックの反映を行い、よりユーザーの皆様のご希望に沿った制作の時間を増やす事が可能になります。私たちは、たった二人で世界を変えようとしています。お手伝いいただけますか? ',
SIDEBAR_donate              : '寄付する ',
SIDEBAR_thanks              : '感謝します!!! ',

/* Chrome Extension */
ERROR_CX_01                  : 'お財布が保存されていません。["Add Wallet"](/cx-wallet.html#add-wallet)をクリックして追加してください。 ',
CX_quicksend                : '簡易送信 ', // if no appropriate translation, just use "Send"

/* Decrypt Panel */
DECRYPT_Access              : 'どの方法でお財布を操作しますか？ ',
DECRYPT_Title               : '秘密鍵形式の選択： ',
WALL_Select              : 'お財布の選択 ',

/* Add Wallet */
DECRYPT_Label_1                 : 'ご希望の操作方法をお選びください ',
WALL_GenerateNew                 : 'お財布の新規作成 ',
DECRYPT_Radio_2                 : 'お財布ファイルの選択 (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : 'お財布ファイルの選択： ',
DECRYPT_Radio_2_short           : 'お財布ファイルを選択 ',
DECRYPT_Radio_3                 : '秘密鍵をペースト/タイプ ',
ACCOUNT_AddWatch                 : '監視するアカウントを追加 ',
MNEM_Enter                 : 'ニーモニックを上書き/タイプ ',
MNEM_Enter_Path            : 'HD derivation pathを選択 ',
MNEM_Enter_PathCustom      : 'カスタム',
DECRYPT_Label_2                 : 'ニックネームの作成： ',
DECRYPT_Label_3                 : 'お財布が暗号化されています。パスワードを入力してください： ',
DECRYPT_Label_4                 : '監視するアカウントを追加 ',
WARN_03               : '任意のアカウントを監視する目的で、秘密鍵をアップロードせずにお財布タブに追加することできます。これによってお財布の操作や、ETHERの移動が可能になるわけではありません。 ',
DECRYPT_Label_5                 : 'アドレスを入力 ',
WALL_Unlock                 : 'お財布をアンロック： ',
WALL_Unlock_Short           : 'アンロック ',
ACCOUNT_Add                 : 'アカウント追加 ',

/* Mnemonic */
MNEM_1                      : '操作したいアドレスを選択してください。 ',
MNEM_2                      : 'ＨＤニーモニックの一つの文節で、複数のお財布やアドレスが操作可能です。操作したいアドレスを選択してください。 ',
MNEM_more                   : 'さらにアドレスを表示 ',
MNEM_prev                   : '前のアドレス表示 ',

/* Hardware wallets */
DECRYPT_Ledger_1                : '自分の Ledger Nano S　を接続する ',
DECRYPT_Ledger_2                : 'イサリアムアプリケーション（あるいはコントラクトアプリケーション）を開く　。 ',
DECRYPT_Ledger_3                : '設定中で、ブラウザサポートが有効にされていることを確認してください。 ',
DECRYPT_Ledger_4                : '設定にブラウザサポートが見つからなければ、[Firmware >1.2]を確認してください。(https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_0a               : 'セキュアコネクション（SSL)で再度MyEtherWalletを開いてください。 ',
DECRYPT_Ledger_0b               : 'MyEtherWalletを再度「Chrome」(https://www.google.com/chrome/browser/desktop/) あるいは [Opera](https://www.opera.com/)で開いてください。 ',
DECRYPT_Ledger_scan             : 'Ledger Nano S　に接続 ',
DECRYPT_Trezor_scan             : 'TREZORに接続する ',
DECRYPT_Trezor_select           : 'これはTREZORのシードです ',

/* Generate Wallets */
GEN_desc                    : '複数のお財布の作成をこのタブで行う事ができます： ',
PW_Enter                 : '強固なパスワードを入力(９文字以上） ',
PW_Enter           : '必ず保存してください！ ',
GEN_SuccessMsg              : '成功！お財布が作成されました。 ',
x_Keystore_Save                 : 'Keystore/JSON あるいは秘密鍵を保存してください。パスワードを絶対に忘れないようにしてください。 ',
ADDR_Save                 : 'アドレスを保存してください。 ',
GEN_Label_4                 : '必要であれば、お財布紙情報、あるいはQRコードを印刷してください。 ',

/* Bulk Generate Wallets */
BULK_Label_1                : '作成するお財布の数 ',
BULK_Label_2                : 'お財布を複数を作成する ',
BULK_SuccessMsg             : '成功！お財布が作成されました。 ',

/* Sending Ether and Tokens */
ADDR_To                   : '宛先アドレス： ',
x_Amount                 : '送出数量： ',
x_Amount_short           : '数量 ',
TOKEN_AddCustom                 : 'カスタム ',
x_GasLimit                    : 'ガス ',
TX_Send_All          : '残高をすべて送出する ',
TX_Generate               : 'トランザクションを生成 ',
TX_Unsigned                    : '未加工トランザクション ',
TX_Signed                 : '署名済みトランザクション ',
TX_Send_Short                  : 'トランザクションの送出 ',
SENDModal_Title             : '警告！ ',
TOKEN_AddCustom                 : 'カスタムトークンを追加 ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : '送出準備が ',
SENDModal_Content_2         : 'について、アドレス ',
SENDModal_Content_3         : 'に対し完了。本当に送出してよろしいですか？ ',
SENDModal_Content_4         : 'ノート：最も起こりやすいエラーの原因は、送出のためのガス不足で、その場合には、ETHを追加する必要があります。ガスはETHで支払われます。 ',
SENDModal_No                : 'いいえ、中断します。 ',
SENDModal_Yes               : 'はい、確かです。処理を実行します。 ',

/* Tokens */
ADDR_Short                  : 'アドレス： ',
TOKEN_Symbol                : 'トークンシンボル： ',
TOKEN_Dec                   : 'ケタ数： ',
TOKEN_show                  : '全てのトークンを表示 ',
TOKEN_hide                  : 'トークンを隠す ',

/* Send Transaction */
TX_desc                  : 'トークンを送出するには「トークン送出」のタブを選択してください。 ',
TX_warning               : 'コントラクト上で、「ETHのみ」あるいは「ETCのみ」の送出を行う場合、受け入れサービスによって、これらのトランザクションに問題を生ずる場合があります。以下参照。 ',
SEND_Advanced              : '+Advanced: ガスあるいはデータを追加してください ',
x_Data                  : 'データ： ',
x_GasLimit                   : 'ガスリミット： ',
TX_Send_ShortInfo              : '21000ガスを使用する標準トランザクションは、0.000441 ETHを消費します。迅速な処理を行うために、若干最小量よりも多めの0.000000021 ETHのガスを使用します。当サービスでは、トランザクション料金は徴収いたしません。 ',

/* Send Transaction Modals */
TRANSModal_Title            : '「ETHのみ」と「ETCのみ」トランザクション ',
TRANSModal_Content_0        : '異なるトランザクションと異なるサービスの注釈： ',
TRANSModal_Content_1        : '**ETH(標準トランザクション): ** これは、アドレス間移動のデファルトのトランザクションを生成します。デフォルトガス値は21000です。このメソッドで送出されたETHは、高い可能性でETCチェーンでリプレイされます。 ',
TRANSModal_Content_2        : '**ETHのみ: ** [Timon Rappのリプレイコントラクト(VB推奨)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) を使用して、**ETH**チェーンのみに送出します。 ',
TRANSModal_Content_3        : '**ETCのみ: ** [Timon Rappのリプレイコントラクト(VB推奨)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) を使用して、**ETC**チェーンのみに送出します。 ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift: ** スタンダードトランザクションのみで送出します。どちらかのみのコントラクトで送出する場合には、サポートスタッフに連絡して、手動で残高に追加したり払い戻しをする必要があります。[Shapeshiftの「スプリット」ツールも使用可能です。(https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex:** 問題は確認されていません。どれでもお使いください。 ',
TRANSModal_Yes              : '理解しました。 ',
TRANSModal_No               : '理解できません。ヘルプが必要です。 ',

/* Offline Transaction */
OFFLINE_Title               : 'オフライントランザクションを作成し送出 ',
OFFLINE_Desc                : 'オフライントランザクションの作成は、3ステップで行う事ができます。ステップ１と３はオンラインのコンピューター上で行い、ステップ２は、オフライン、あるいは物理的にネットワークと切断されたコンピューターを用います。これにより、秘密鍵が、インターネットに接続したデバイスと接触する事を避ける事ができます。 ',
OFFLLINE_Step1_Title        : 'ステップ1: 情報生成 (オンラインコンピューター) ',
OFFLINE_Step1_Button        : '情報生成 ',
ADDR_From       : '送出元アドレス： ',
OFFLINE_Step1_Label_2       : 'ノート：これは、送出元アドレスであって、送出先アドレスではありません。操作元アカウントからは「Nonce」が生成されます。切断されたコンピューターを使用する場合に、このアドレスはコールドストレージのアカウントのものになります。 ',
OFFLINE_Step2_Title         : 'ステップ2: 情報生成 (オフラインコンピューター) ',
ADDR_To       : '送出先アドレス： ',
OFFLINE_Step2_Label_2       : '送出する値/総量 ',
x_GasPrice                  : 'ガス価格 ',
x_GasPriceDesc                 : 'これは、ステップ１でオンラインコンピューターに表示されたものです。 ',
x_GasLimit       : 'ガスリミット ',
x_GasLimitDesc      : 'デフォルトガスリミット値は21000です。契約や付加データーを送出する場合には、これらの値は　異なるものにする必要があります。使用されなかったガスは全て返却されます。 ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'これらは、ステップ１でオンラインコンピューターに表示されたものです。 ',
x_Data       : 'データ ',
x_DataDesc      : 'これは、任意の付加データです。契約に対してトランザクションを送出する際などでよく使われます。 ',
OFFLINE_Step2_Label_7       : '秘密鍵/JSONの入力/選択 ',
OFFLINE_Step3_Title         : 'ステップ３: トランザクションの送出/公開(オンラインコンピューター) ',
OFFLINE_Step3_Label_1       : 'ステップ２で署名されたトランザクションをここにペーストして「トランザクションの送出」ボタンをクリックする。 ',

/* Contracts */
CONTRACT_GenBytecode                : 'バイトコードを生成する ',
CONTRACT_GenBytecoded               : '生成されたバイトコード ',
TX_Sign                  : 'トランザクションに署名 ',
CONTRACT_GenInterface               : '生成されたインターフェース ',
CONTRACT_Title              : '契約アドレス ',
CONTRACT_Title_2            : '既存の契約を選択 ',
CONTRACT_Json               : 'ABI / JSON インターフェース ',
CONTRACT_Interact_Title     : '契約の読込や書込 ',
CONTRACT_Interact_CTA       : '機能を一つ選ぶ ',
CONTRACT_Bytecode           : 'バイトコード ',
CONTRACT_Read               : '読み取り ',
CONTRACT_Write              : '書き込み ',

/* My Wallet */
WALL_Nickname                  : 'お財布ニックネーム ',
MYWAL_Address               : 'お財布アドレス ',
ACCOUNT_Balance                   : '残高 ',
WALL_Edit_Short                  : '編集 ',
WALL_View_Short                  : '表示 ',
WALL_Remove                : '消去 ',
WALL_RemoveWal             : 'お財布を消去： ',
WALL_WatchOnlyAccounts             : '監視中のアカウント ',
WALL_Viewing               : 'お財布を表示： ',
WALL_Hide                  : 'お財布情報を隠す ',
WALL_Edit                : 'お財布を編集： ',
WALL_Name                  : 'お財布名 ',
WARN_06             : '警告！　お財布を消去しようとしています： ',
WARN_07             : '**秘密鍵と鍵保存ファイル及びパスワード**が保管されているか確認してください。 ',
WARN_08             : 'MyEtherWallet CXでこのお財布を使用するためには、秘密鍵あるいはJSONとパスワードを手動で追加する必要があります。 ',

/* Node Switcher */
NODE_Title                  : 'カスタムノードをセットアップ',
NODE_Subtitle               : 'ローカルノードに接続するには...',
WARN_05                : 'MyEtherWallet.com 経由で接続するためには、HTTPSノードが必要です。[MyEtherWalletをレポジトリからダウンロードして、手元で走らせ、](https://github.com/kvhnuke/etherwallet/releases/latest)いずれかのノードに接続することもできます。 あるいは、無料のSSL証明書を[LetsEncrypt](https://letsencrypt.org/)から入手してください',
NODE_Name                   : 'ノード名',
NODE_Port                   : 'ノードポート',
NODE_CTA                    : '保存してカスタムノードを使用',

/* Swap / Exchange */
SWAP_rates                  : "現在のレート ",
SWAP_init_1                 : "これから両替で ",
SWAP_init_2                 : " を ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "次へ ", // or "Continue"
SWAP_information            : "あなたの情報 ",
x_Amount               : "送出総額 ",
SWAP_rec_amt                : "受け取り総額 ",
SWAP_your_rate              : "変換レート ",
SWAP_rec_add                : "受け取りアドレス ",
SWAP_start_CTA              : "交換開始 ",
SWAP_ref_num                : "参照番号 ",
SWAP_time                   : "送出するまでにあと、 ",
SWAP_progress_1             : "注文を開始しました ",
SWAP_progress_2             : "到着待機中 ", // Waiting for your BTC...
SWAP_progress_3             : "ETH受け取り完了 ", // ETH Received!
SWAP_progress_4             : "送出中 {{orderResult.output.currency}} ",
SWAP_progress_5             : "注文完了 ",
SWAP_order_CTA              : "お送りいただきたいのは ", // Please send 1 ETH...
SWAP_unlock                 : "このページから直接ETHあるいはトークンを送出するためには、お財布を解錠してください。",

/* Sign Message */
MSG_message                 : 'メッセージ ',
MSG_date                    : '日付 ',
MSG_signature               : '署名 ',
MSG_verify                  : 'メッセージを確認 ',
MSG_info1                   : 'この署名が別の日付で再度使われないようにするために、現時点の日付を入れてください。 ',
MSG_info2                   : '他人に使われないようにするため、あなたのニックネームとそれが使われるところを入れてください。 ',
MSG_info3                   : '異なった目的で使用されないようにするために、利用目的を入れてください。 ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : '異なったバージョンの秘密鍵をダウンロードしたり、お財布紙情報を再印刷することができます。[import your account into Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/)する時に必要です。残高をチェックするためには、[etherscan.io](http://etherscan.io/)のようなブロックチェーンエクスプローラーサービスを使う事をおすすめします。 ',
VIEWWALLET_Subtitle_Short   : '異なったバージョンの秘密鍵をダウンロードしたり、お財布紙情報を再印刷することができます。 ',
VIEWWALLET_SuccessMsg       : '成功! お財布の詳細は以下の通りです。 ',

/* Error Messages */
ERROR_0                     : '正しい値を入力してください。 ',
ERROR_1                     : 'パスワードは少なくとも９文字が必要です。強固なパスワードであることをお確かめください。 ',
ERROR_2                     : '申し訳ございませんが、このタイプのお財布ファイルは認識できません。 ',
ERROR_3                     : '正しいお財布ファイルではありません。 ',
ERROR_4                     : 'この単位は存在しませんので、下記の中からお選びください。 ',
ERROR_5                     : '無効なアドレスです。 ',
ERROR_6                     : '無効なパスワードです。 ',
ERROR_7                     : '無効な総量です。 (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : '無効なガスリミットです。 (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : '無効なデータです。 (Must be hex.) ', // 9
ERROR_10                    : '無効なガス総量です。 (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : '無効な nonce　です。 (Must be integer.) ', // 11
ERROR_12                    : '無効な署名のトランザクションです。 ',
ERROR_13                    : '同じニックネームのお財布が既にあります。 ',
ERROR_14                    : 'お財布が見つかりません。 ',
ERROR_15                    : 'このIDのプロポーサルは存在しない、あるいは正常に読み込みできません。 ',
ERROR_16                    : '同じアドレスのお財布が既に存在します。お財布のページをご確認ください。 ',
ERROR_17                    : '"ファンドが足りません。 トランザクション送出元のファンドが不足しています。ガスとして使われるために、少なくとも0.01 etherがお財布上に必要です。 ',
ERROR_18                    : '全てのガスがこのトランザクションにより消費されます。これは、既に投票を行ったか、あるいはディベート期間が終了したためです。 ',
ERROR_19                    : '無効なシンボル ',
ERROR_20                    : ' は有効なERC-20トークンではありません。もし他のトークンをロード中であれば、このトークンを取り除いてからもう一度試してください。 ',
ERROR_21                    : 'ガス量を推定できません。十分な資金が口座にないか、あるいは受け取り側のコントラクトがエラーになっています。ガス量を変更してから試してください。送出時にはより詳しいエラーメッセージが返ります。 ',
ERROR_22                    : '正しいノード名を入力してください ',
ERROR_23                    : '正しいURLを入力してください。 HTTPS接続の場合には、ノードはHTPPSで接続しなければなりません。 ',
ERROR_24                    : '正しいポートを入力してください ',
ERROR_25                    : '正しい chain ID を入力してください ',
ERROR_26                    : '正しい ABI を入力してください ',
ERROR_27                    : '最小値: 0.01. 最大値: ',
ERROR_28                    : 'お財布を操作するためには**Keystore/JSONとパスワードか秘密鍵が必要** 保存してから、外部バックアップしてください！ここで保存しないとお財布が使用できなくなります。詳細はヘルプページを参照してください。(https://www.myetherwallet.com/#help) ',
ERROR_29                    : '正しいユーザーとパスワードを入力してください ',
ERROR_30                    : '正しい ENS名を入力してください ',
ERROR_31                    : '無効な秘密フレーズです ',
ERROR_32                    : 'ノードに接続できませんでした。Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : '有効なアドレス ',
SUCCESS_2                   : 'お財布は正常に暗号解除されました。 ',
SUCCESS_3                   : 'トランザクションはブロックチェイン上に展開されています。そのトランザクションを表示し、ガス不足や契約実行エラーがないことを確認しするためにクリックしてください。 TX Hash:  ', //'トランザクションが送出されました。 TX Hash ',
SUCCESS_4                   : 'お財布が追加されました： ',
SUCCESS_5                   : '選択されました： ',
SUCCESS_6                   : '接続完了しました ',
SUCCESS_7                   : 'メッセージの署名が確認されました',
WARN_02              : '自分のアドレス、リンク、ガス、データ、あるいはトランザクションタイプ（送出モード）が指定されたリンクでここに表示されています。 送出前に修正可能です。もう一度行うために、お財布を解錠してください。 ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "同じハッシュのトランザクションがすでにインポートされています。",
PARITY_Old                  : "トランザクション nonceが小さすぎます。増やしてみてください。",
PARITY_TooCheapToReplace    : "トランザクションフィー不足です。同じ nonce のトランザクションが別のキューにあります。fee または nonce を増やしてみてください。",
PARITY_LimitReached         : "キューにあるトランザクションの数が多すぎます。上限を超えたため、対象のトランザクションは除外されています。その fee を増やしてみてください。",
PARITY_InsufficientGasPrice : "トランザクションフィー不足です。 ノードの最小 fee を満たしていません。 (minimal: {}, got: {}). fee を増やしてください。",
PARITY_InsufficientBalance  : "ファンドが足りません。 トランザクション送出元のファンドが不足しています。 必要量 {} で 現在： {}　　です。",
PARITY_GasLimitExceeded     : "トランザクションコストがガスリミットを超過しました。 リミット： {}, 現在: {}. ガス供給量を減らして見てください。",　　　/* increasing gas limit??? */
PARITY_InvalidGasLimit      : "ガス供給量が制限を超過しています。",

/* Geth Error Messages */
GETH_InvalidSender          : '送出元が無効です ',
GETH_Nonce                  : 'Nonce が足りません ',
GETH_Cheap                  : 'ガス価格が低すぎます ',
GETH_Balance                : '残高不足 ',
GETH_NonExistentAccount     : 'アカウントが存在しない、あるいはその残高不足です ',
GETH_InsufficientFunds      : 'ガス*価格+数量に足りません ',
GETH_IntrinsicGas           : '基本のガス不足です ',
GETH_GasLimit               : 'ブロックガスリミットを越えています ',
GETH_NegativeValue          : '負の値です ',

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : 'トランスレーターにお恵みの投げ銭： ',
z_TRANSLATE1            : '[sekisanchi](https://www.myetherwallet.com/?gaslimit=21000&to=0xf991119Eea62Eee1a6fdaA7f621e91A42f325FcE&value=0.1#send-transaction) ',
z_TRANSLATE2            : '',
z_TRANSLATE3            : '',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''

};

module.exports = ja;
