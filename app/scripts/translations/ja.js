// Japanese
'use strict';
var ja = function() {}
ja.code = 'ja';
ja.data = {

HELP_2a_Title               : 'お財布の保管やバックアップの方法は？ ',

/* New Generics */
x_CancelReplaceTx           : '処理を中断、あるいは置換',
x_CancelTx                  : '処理を中断',
x_PasswordDesc              : 'このパスワードで秘密鍵を＊暗号化＊します。新しい鍵を作るための元種(seed)ではありません。＊＊このパスワードと(暗号化された)秘密鍵の二つを使って、お財布を解錠します＊＊',
x_ReadMore                  : 'もっと読む',
x_ReplaceTx                 : '処理を置き換える',
x_TransHash                 : '処理ハッシュ',
x_TXFee                     : '処理料',
x_TxHash                    : '処理ハッシュ',

/* Check TX Status */
NAV_CheckTxStatus           : '処理状況を確認',
NAV_TxStatus                : '処理状況',
tx_Details                  : '処理内容詳細',
tx_Summary                  : 'もし数日経ってから処理状況を確認した場合でなければ、大量の処理発生時(ICO期間など)には、数時間待たされることがあります。本ツールは、そのような状況において処理待ちのものを探し出し取り消す、あるいは新しくする機能を提供します。＊＊これは一般的な操作ではありませんが、処理プールが満杯の場合にのみ有効です。  [このツールに関しては、こちらを参考にしてください。](https://myetherwallet.groovehq.com/knowledge_base/topics/how-can-i-check-on-the-status-of-my-transaction-can-i-cancel-override-overwrite-replace-or-do-anything-once-a-transaction-has-been-sent)**',
tx_notFound                 : '対象の処理が見つかりません',
tx_notFound_1               : 'この処理は、現在接続中の処理プールの中にありませんでした。',
tx_notFound_2               : 'もし今、処理を送出した直後であれば、１５秒待ってから「処理状況を確認」ボタンを再度押してください。',
tx_notFound_3               : '別の処理プールで発掘待ちになっているかもしれません。',
tx_notFound_4               : '右上の下展開メニューから、別のノードを選択してください。 (例： `ETH (Etherscan.io)` or `ETH (Infura.io)` or `ETH (MyEtherWallet)`) から選んで再度確認する。',
tx_foundInPending           : '待機中の処理が見つかりました。',
tx_foundInPending_1         : 'あなたの処理が、現在接続中のノードの処理待ちプールの中で見つかりました。',
tx_foundInPending_2         : '現在待機中です（発掘待ち）。',
tx_foundInPending_3         : 'この処理を取り消す、あるいは置き換えることができます。下記のお財布をアンロックしてください。 ',
tx_FoundOnChain             : '処理が見つかりました',
tx_FoundOnChain_1           : 'あなたの待機中の処理は発掘されてブロックチェーンに載りました。',
tx_FoundOnChain_2           : '**もし赤い `( ! )`, `BAD INSTRUCTION` あるいは `OUT OF GAS` のエラーメッセージを見つけたら**, これは、処理送出に失敗したということです。処理の取り消しや置き換えはできません。代わりに、新しい処理を送出してください。 "Out of Gas" エラーの場合には, ガスリミットをはじめに指定した値の倍にしてください。',
tx_FoundOnChain_3           : '**何もエラーメッセージが返ってこなければ、あなたの処理は正しく送出されています。** ETHあるいはトークンは、送ろうとしたあて先の場所にあります。 もし、ETHやトークンが他のお財布や交換所のお財布に見つからず、処理を開始してから２４時間以上経っていたら、 [そのサービスに連絡](https://myetherwallet.groovehq.com/knowledge_base/topics/i-have-a-question-but-its-not-about-myetherwallet-dot-com-what-do-i-do)してください。状況を確認してもらうために、自分の処理のリンクをうまく知らせてください。',

/* Gen Wallet Updates */
GEN_Help_1                  : 'この', /* Use your */
GEN_Help_2                  : 'で自分の口座にアクセスしてください。', /* to access your account. */
GEN_Help_3                  : '自分のデバイスそのものが、自分のお財布です。',　/* Your device * is * your wallet. */
GEN_Help_4                  : 'ガイドとＦＡＱ',　/* Guides & FAQ */
GEN_Help_5                  : 'お財布の作り方', /* How to Create a Wallet */
GEN_Help_6                  : 'ここから始める', /* Getting Started */
GEN_Help_7                  : '安全な所で保管してください · バックアップを作成してください · 他の誰にも教えないでください · 絶対になくさないでください · 無くした時には回復する方法はありません。',
GEN_Help_8                  : 'ファイルをダウンロードしませんでしたか？', /* Not Downloading a File? */
GEN_Help_9                  : 'Google Chromeをお使いください', /* Try using Google Chrome */
GEN_Help_10                 : '右クリックしてファイルを保存。ファイル名: ', /* Right click & save file as. Filename:  */
GEN_Help_11                 : 'このファイルは自分のコンピューターで開かないでください', /*Don\'t open this file on your computer */
GEN_Help_12                 : 'MyEtherWalletの上でこれを使って自分のお財布をアンロックしてください（Mist, Geth, Parityや他のお財布クライアントも可）', /*Use it to unlock your wallet via MyEtherWallet (or Mist, Geth, Parity and other wallet clients.)
*/
GEN_Help_13                 : '自分のキーストアファイルのバックアップ作成方法', /*How to Back Up Your Keystore File */
GEN_Help_14                 : 'これらの方式の違いは？',　/*What are these Different Formats? */
GEN_Help_15                 : '自分の資金の紛失や盗難を防止する。', /* Preventing loss & theft of your funds. */
GEN_Help_16                 : 'これらの方式の違いは？', /*What are these Different Formats?*/
GEN_Help_17                 : 'なぜこれらをすべきか？', /*Why Should I?*/
GEN_Help_18                 : '２番目のバックアップ作成のため', /*To have a secondary backup.*/
GEN_Help_19                 : 'パスワードを忘れた場合には', /*In case you ever forget your password.*/
GEN_Help_20                 : '隔離された保管場所', /*Cold Storage*/
GET_ConfButton              : '理解できました。続けます。', /*I understand. Continue.*/
GEN_Label_5                 : '自分の秘密鍵を保存する。', /*Save Your `Private Key`. */
GEN_Unlock                  : '自分のアドレスを確認するために、お財布を解錠する', /*Unlock your wallet to see your address*/
GAS_PRICE_Desc              : 'ガス価格は、ガスの一単位にかかる料金のことです。 「処理料金 = ガス価格 ＊ ガスリミット」かつ、自分の処理をブロックに配置するためにマイナーに支払われます。ガス価格が高いほど処理は早く行われますが、料金は高くなります。デファルトは 「21 GWEI」です。', /*Gas Price is the amount you pay per unit of gas. `TX fee = gas price * gas limit` & is paid to miners for including your TX in a block. Higher the gas price = faster transaction, but more expensive. Default is `21 GWEI`.*/
GAS_LIMIT_Desc              : 'ガスリミットは、自分の処理にかかる料金の額です。「使用料金」 = ガス価格 ＊ ガスリミット」で、自分の処理をブロックに配置するための料金に支払われます。 この数字を増やしても、自分の処理が早く発掘されることはありません。ETHの送出 = 「２１０００」。トークンの送出 = ~「２０００００」。', /*Gas limit is the amount of gas to send with your TX. `TX fee` = gas price * gas limit & is paid to miners for including your TX in a block. Increasing this number will not get your TX mined faster. Sending ETH = `21000`. Sending Tokens = ~`200000`.*/
NONCE_Desc                  : 'そのnonceは、指定のアドレスから送出される処理の数です。処理が正しい順番で重複しないように確実にするためのものです。',
TXFEE_Desc                  : 'その処理料金は自分の処理をブロックに配置するためにマイナーに支払われます。「ガスリミット」＊「ガス価格」です。 [GWEI -> ETHの変換はここです。](https://www.myetherwallet.com/helpers.html)',　/*The TX Fee is paid to miners for including your TX in a block. It is the `gas limit` * `gas price`. [You can convert GWEI -> ETH here](https://www.myetherwallet.com/helpers.html)*/




/* Navigation*/
NAV_AddWallet               : 'お財布の追加 ',
NAV_BulkGenerate            : 'バルク作成 ',
NAV_Contact                 : '連絡する ',
NAV_Contracts               : '契約 ',
NAV_DeployContract          : '契約を展開 ',
NAV_ENS                     : 'ENS',
NAV_GenerateWallet_alt      : 'New Wallet ',
NAV_GenerateWallet          : 'お財布の作成 ',
NAV_Help                    : 'ヘルプ ',
NAV_InteractContract        : '契約を操作 ',
NAV_Multisig                : '多重署名 ',
NAV_MyWallets               : '自分のお財布 ',
NAV_Offline                 : 'オフライン送出 ',
NAV_SendEther               : 'Ether/トークンの送出 ',
NAV_SendTokens              : 'トークン送出 ',
NAV_SignMsg                 : 'メッセージ署名 ',
NAV_Swap                    : '通貨の両替 ',
NAV_ViewWallet              : 'お財布情報を見る ',
NAV_YourWallets             : '自分のお財布 ',

/* General */
x_Access                    : 'アクセス ',
x_AddessDesc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. これは自分のアカウント番号と公開鍵になります。ETHを送信するために必要な情報です。アイコンは自分のアドレスを識別するものです。 ',
x_Address                   : '自分のアドレス ',
x_Cancel                    : '取り消す ',
x_CSV                       : 'CSV ファイル (未暗号化) ',
x_Download                  : 'ダウンロード ',
x_Json                      : 'JSON ファイル (未暗号化) ',
x_JsonDesc                  : 'これはパスワードが不要な暗号化されていないJSONフォーマットの秘密鍵です。この暗号化されていないJSONフォーマットの秘密鍵を使えば、誰でもパスワードを使わずに自分のお財布とEtherにアクセスできます。 ',
x_Keystore                  : 'Keystore ファイル (UTC / JSON · 推奨 · 暗号化) ',
x_Keystore2                 : 'Keystore ファイル (UTC / JSON) ',
x_KeystoreDesc              : 'この Keystore / JSON ファイルは、後で容易にインポートするため、Mistで使われているフォーマットと一致させる必要があります。ダウンロードしてバックアップを取ることをおすすめします。 ',
x_Ledger                    : 'Ledger Wallet ',
x_MetaMask                  : 'Metamask / Mist ',
x_Mnemonic                  : 'ニーモニック文節 ',
x_ParityPhrase              : 'パリティ文節 ',
x_Password                  : 'パスワード ',
x_Print                     : 'お財布紙情報を印刷 ',
x_PrintDesc                 : '助言: プリンターが接続されていなくても、「印刷」をクリックしてPDFで保存できます。 ',
x_PrintShort                : '印刷 ',
x_PrivKey                   : '秘密鍵（未暗号化） ',
x_PrivKey2                  : '秘密鍵 ',
x_PrivKeyDesc               : 'これはパスワードが不要な暗号化されていない秘密鍵です。この暗号化されていない秘密鍵を使えば、誰でもパスワードなしで自分のお財布を使用できます。従って、暗号化された秘密鍵の利用をおすすめします。 ',
x_Save                      : '保存する ',
x_Trezor                    : 'TREZOR ',
x_TXT                       : 'TXT ファイル (未暗号化) ',
x_Wallet                    : 'お財布 ',

/* Header */
MEW_Warning_1               : 'お財布を操作したり新しいお財布を作成する前に、必ずURLを確認してください。詐欺サイトに御注意ください！ ',
CX_Warning_1                : '必ずここに保管するすべてのお財布の「外部バックアップ」を作成してください。このChrome Extensionでは、再導入などで、データが保存されずの消失することが頻繁に起こります。このエクステンションは容易な操作を提供するのみで、「バックアップ」は行いません。 ',
MEW_Tagline                 : 'オープンソース JavaScript クライアントサイド Etherお財布 ',
CX_Tagline                  : 'オープンソース JavaScript クライアントサイド Etherお財布 Chrome Extension ',

/* Footer */
FOOTER_1                    : 'イサーリアムお財布の作成とトランザクション実行のためのオープンソース、javascript、 クライアントサイドツール。 ',
FOOTER_1b                   : '制作 ',
FOOTER_2                    : '投げ銭に感謝致します！: ',
FOOTER_3                    : 'クライアントサイドお財布制作 ',
FOOTER_4                    : '免責事項 ',

/* Sidebar */
sidebar_AccountInfo         : 'アカウント情報 ',
sidebar_AccountAddr         : 'アカウントアドレス:  ',
sidebar_AccountBal          : 'アカウント残高 ',
sidebar_TokenBal            : 'トークン残高 ',
sidebar_Equiv               : '等価 ',
sidebar_TransHistory        : 'トランザクション履歴 ',
sidebar_donation            : 'MyEtherWalletは、プライバシーとセキュリティのための無料のオープンソースサービスです。　寄付が増えることによって、新機能やフィードバックの反映を行い、よりユーザーの皆様のご希望に沿った制作の時間を増やす事が可能になります。私たちは、たった二人で世界を変えようとしています。お手伝いいただけますか? ',
sidebar_donate              : '寄付する ',
sidebar_thanks              : '感謝します!!! ',
sidebar_DisplayOnTrezor     : 'Display address on TREZOR',
sidebar_DisplayOnLedger     : 'Display address on Ledger',

/* Chrome Extension */
CX_error_1                  : 'お財布が保存されていません。["Add Wallet"](/cx-wallet.html#add-wallet)をクリックして追加してください。 ',
CX_quicksend                : '簡易送信 ', // if no appropriate translation, just use "Send"

/* Decrypt Panel */
decrypt_Access              : 'どの方法でお財布を操作しますか？ ',
decrypt_Title               : '秘密鍵形式の選択： ',
decrypt_Select              : 'お財布の選択 ',

/* Add Wallet */
ADD_Label_1                 : 'ご希望の操作方法をお選びください ',
ADD_Radio_1                 : 'お財布の新規作成 ',
ADD_Radio_2                 : 'お財布ファイルの選択 (Keystore / JSON) ',
ADD_Radio_2_alt             : 'お財布ファイルの選択： ',
ADD_Radio_2_short           : 'お財布ファイルを選択 ',
ADD_Radio_3                 : '秘密鍵をペースト/タイプ ',
ADD_Radio_4                 : '監視するアカウントを追加 ',
ADD_Radio_5                 : 'ニーモニックを上書き/タイプ ',
ADD_Radio_5_Path            : 'HD derivation pathを選択 ',
ADD_Radio_5_woTrezor        : '(Jaxx, Metamask, Exodus, imToken)',
ADD_Radio_5_withTrezor      : '(Jaxx, Metamask, Exodus, imToken, TREZOR)',
ADD_Radio_5_PathAlternative : '(Ledger)',
ADD_Radio_5_PathTrezor      : '(TREZOR)',
ADD_Radio_5_PathCustom      : 'カスタム',
ADD_Label_2                 : 'ニックネームの作成： ',
ADD_Label_3                 : 'お財布が暗号化されています。パスワードを入力してください： ',
ADD_Label_4                 : '監視するアカウントを追加 ',
ADD_Warning_1               : '任意のアカウントを監視する目的で、秘密鍵をアップロードせずにお財布タブに追加することできます。これによってお財布の操作や、ETHERの移動が可能になるわけではありません。 ',
ADD_Label_5                 : 'アドレスを入力 ',
ADD_Label_6                 : 'お財布をアンロック： ',
ADD_Label_6_short           : 'アンロック ',
ADD_Label_7                 : 'アカウント追加 ',
ADD_Label_8                 : 'Password (optional): ',

/* Mnemonic */
MNEM_1                      : '操作したいアドレスを選択してください。 ',
MNEM_2                      : 'ＨＤニーモニックの一つの文節で、複数のお財布やアドレスが操作可能です。操作したいアドレスを選択してください。 ',
MNEM_more                   : 'さらにアドレスを表示 ',
MNEM_prev                   : '前のアドレス表示 ',

/* Hardware wallets */
ADD_Ledger_1                : '自分の Ledger Wallet　を接続する ',
ADD_Ledger_2                : 'イサリアムアプリケーション（あるいはコントラクトアプリケーション）を開く　。 ',
ADD_Ledger_3                : '設定中で、ブラウザサポートが有効にされていることを確認してください。 ',
ADD_Ledger_4                : '設定にブラウザサポートが見つからなければ、[Firmware >1.2]を確認してください。(https://www.ledgerwallet.com/apps/manager) ',
ADD_Ledger_0a               : 'セキュアコネクション（SSL)で再度MyEtherWalletを開いてください。 ',
ADD_Ledger_0b               : 'MyEtherWalletを再度「Chrome」(https://www.google.com/chrome/browser/desktop/) あるいは [Opera](https://www.opera.com/)で開いてください。 ',
ADD_Ledger_scan             : 'Ledger Wallet　に接続 ',
  
ADD_MetaMask                : 'Connect to MetaMask ',

ADD_Trezor_scan             : 'TREZORに接続する ',
ADD_Trezor_select           : 'これはTREZORのシードです ',
x_DigitalBitbox             : 'Digital Bitbox ',
ADD_DigitalBitbox_0a        : 'セキュアコネクション（SSL)で再度MyEtherWalletを開いてください。 ',
ADD_DigitalBitbox_0b        : 'MyEtherWalletを再度「Chrome」(https://www.google.com/chrome/browser/desktop/) あるいは [Opera](https://www.opera.com/)で開いてください。 ',
ADD_DigitalBitbox_scan      : 'DigitalBitboxに接続する ',

/* Generate Wallets */
GEN_desc                    : '複数のお財布の作成をこのタブで行う事ができます： ',
GEN_Label_1                 : '強固なパスワードを入力(９文字以上） ',
GEN_Placeholder_1           : '必ず保存してください！ ',
GEN_SuccessMsg              : '成功！お財布が作成されました。 ',
GEN_Label_2                 : 'Keystore/JSON あるいは秘密鍵を保存してください。パスワードを絶対に忘れないようにしてください。 ',
GEN_Label_3                 : 'アドレスを保存してください。 ',
GEN_Label_4                 : '必要であれば、お財布紙情報、あるいはQRコードを印刷してください。 ',

/* Bulk Generate Wallets */
BULK_Label_1                : '作成するお財布の数 ',
BULK_Label_2                : 'お財布を複数を作成する ',
BULK_SuccessMsg             : '成功！お財布が作成されました。 ',

/* Sending Ether and Tokens */
SEND_addr                   : '宛先アドレス： ',
SEND_amount                 : '送出数量： ',
SEND_amount_short           : '数量 ',
SEND_custom                 : 'カスタム ',
SEND_gas                    : 'ガス ',
SEND_TransferTotal          : '残高をすべて送出する ',
SEND_generate               : 'トランザクションを生成 ',
SEND_raw                    : '未加工トランザクション ',
SEND_signed                 : '署名済みトランザクション ',
SEND_trans                  : 'トランザクションの送出 ',
SENDModal_Title             : '警告！ ',
SEND_custom                 : 'カスタムトークンを追加 ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : '送出準備が ',
SENDModal_Content_2         : 'について、アドレス ',
SENDModal_Content_3         : 'に対し完了。本当に送出してよろしいですか？ ',
SENDModal_Content_4         : 'ノート：最も起こりやすいエラーの原因は、送出のためのガス不足で、その場合には、ETHを追加する必要があります。ガスはETHで支払われます。 ',
SENDModal_No                : 'いいえ、中断します。 ',
SENDModal_Yes               : 'はい、確かです。処理を実行します。 ',

/* Tokens */
TOKEN_Addr                  : 'アドレス： ',
TOKEN_Symbol                : 'トークンシンボル： ',
TOKEN_Dec                   : 'ケタ数： ',
TOKEN_show                  : '全てのトークンを表示 ',
TOKEN_hide                  : 'トークンを隠す ',

/* Send Transaction */
TRANS_desc                  : 'トークンを送出するには「トークン送出」のタブを選択してください。 ',
TRANS_warning               : 'コントラクト上で、「ETHのみ」あるいは「ETCのみ」の送出を行う場合、受け入れサービスによって、これらのトランザクションに問題を生ずる場合があります。以下参照。 ',
TRANS_advanced              : '+Advanced: ガスあるいはデータを追加してください ',
TRANS_data                  : 'データ： ',
TRANS_gas                   : 'ガスリミット： ',
TRANS_sendInfo              : '21000ガスを使用する標準トランザクションは、0.000441 ETHを消費します。迅速な処理を行うために、若干最小量よりも多めの0.000000021 ETHのガスを使用します。当サービスでは、トランザクション料金は徴収いたしません。 ',

/* Send Transaction Modals */
TRANSModal_Title            : '「ETHのみ」と「ETCのみ」トランザクション ',
TRANSModal_Content_0        : '異なるトランザクションと異なるサービスの注釈： ',
TRANSModal_Content_1        : '**ETH(標準トランザクション): ** これは、アドレス間移動のデファルトのトランザクションを生成します。デフォルトガス値は21000です。このメソッドで送出されたETHは、高い可能性でETCチェーンでリプレイされます。 ',
TRANSModal_Content_2        : '**ETHのみ: ** [Timon Rappのリプレイコントラクト(VB推奨)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) を使用して、**ETH**チェーンのみに送出します。 ',
TRANSModal_Content_3        : '**ETCのみ: ** [Timon Rappのリプレイコントラクト(VB推奨)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) を使用して、**ETC**チェーンのみに送出します。 ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift: ** スタンダードトランザクションのみで送出します。どちらかのみのコントラクトで送出する場合には、サポートスタッフに連絡して、手動で残高に追加したり払い戻しをする必要があります。[Shapeshiftの「スプリット」ツールも使用可能です。(https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex:** 問題は確認されていません。どれでもお使いください。 ',
TRANSModal_Yes              : '理解しました。 ',
TRANSModal_No               : 'わかりません。おしえてください。 ',

/* Offline Transaction */
OFFLINE_Title               : 'オフライントランザクションを作成し送出 ',
OFFLINE_Desc                : 'オフライントランザクションの作成は、3ステップで行う事ができます。ステップ１と３はオンラインのコンピューター上で行い、ステップ２は、オフライン、あるいは物理的にネットワークと切断されたコンピューターを用います。これにより、秘密鍵が、インターネットに接続したデバイスと接触する事を避ける事ができます。 ',
OFFLLINE_Step1_Title        : 'ステップ1: 情報生成 (オンラインコンピューター) ',
OFFLINE_Step1_Button        : '情報生成 ',
OFFLINE_Step1_Label_1       : '送出元アドレス： ',
OFFLINE_Step1_Label_2       : 'ノート：これは、送出元アドレスであって、送出先アドレスではありません。操作元アカウントからは「Nonce」が生成されます。切断されたコンピューターを使用する場合に、このアドレスはコールドストレージのアカウントのものになります。 ',
OFFLINE_Step2_Title         : 'ステップ2: 情報生成 (オフラインコンピューター) ',
OFFLINE_Step2_Label_1       : '送出先アドレス： ',
OFFLINE_Step2_Label_2       : '送出する値/総量 ',
OFFLINE_Step2_Label_3       : 'ガス価格 ',
OFFLINE_Step2_Label_3b      : 'これは、ステップ１でオンラインコンピューターに表示されたものです。 ',
OFFLINE_Step2_Label_4       : 'ガスリミット ',
OFFLINE_Step2_Label_4b      : 'デフォルトガスリミット値は21000です。契約や付加データーを送出する場合には、これらの値は　異なるものにする必要があります。使用されなかったガスは全て返却されます。 ',
OFFLINE_Step2_Label_5       : 'Nonce ',
OFFLINE_Step2_Label_5b      : 'これらは、ステップ１でオンラインコンピューターに表示されたものです。 ',
OFFLINE_Step2_Label_6       : 'データ ',
OFFLINE_Step2_Label_6b      : 'これは、任意の付加データです。契約に対してトランザクションを送出する際などでよく使われます。 ',
OFFLINE_Step2_Label_7       : '秘密鍵/JSONの入力/選択 ',
OFFLINE_Step3_Title         : 'ステップ３: トランザクションの送出/公開(オンラインコンピューター) ',
OFFLINE_Step3_Label_1       : 'ステップ２で署名されたトランザクションをここにペーストして「トランザクションの送出」ボタンをクリックする。 ',

/* Contracts */
DEP_generate                : 'バイトコードを生成する ',
DEP_generated               : '生成されたバイトコード ',
DEP_signtx                  : 'トランザクションに署名 ',
DEP_interface               : '生成されたインターフェース ',
CONTRACT_Title              : '契約アドレス ',
CONTRACT_Title_2            : '既存の契約を選択 ',
CONTRACT_Json               : 'ABI / JSON インターフェース ',
CONTRACT_Interact_Title     : '契約の読込や書込 ',
CONTRACT_Interact_CTA       : '機能を一つ選ぶ ',
CONTRACT_ByteCode           : 'バイトコード ',
CONTRACT_Read               : '読み取り ',
CONTRACT_Write              : '書き込み ',

/* My Wallet */
MYWAL_Nick                  : 'お財布ニックネーム ',
MYWAL_Address               : 'お財布アドレス ',
MYWAL_Bal                   : '残高 ',
MYWAL_Edit                  : '編集 ',
MYWAL_View                  : '表示 ',
MYWAL_Remove                : '消去 ',
MYWAL_RemoveWal             : 'お財布を消去： ',
MYWAL_WatchOnly             : '監視中のアカウント ',
MYWAL_Viewing               : 'お財布を表示： ',
MYWAL_Hide                  : 'お財布情報を隠す ',
MYWAL_Edit_2                : 'お財布を編集： ',
MYWAL_Name                  : 'お財布名 ',
MYWAL_Content_1             : '警告！　お財布を消去しようとしています： ',
MYWAL_Content_2             : '**秘密鍵と鍵保存ファイル及びパスワード**が保管されているか確認してください。 ',
MYWAL_Content_3             : 'MyEtherWallet CXでこのお財布を使用するためには、秘密鍵あるいはJSONとパスワードを手動で追加する必要があります。 ',

/* Node Switcher */
NODE_Title                  : 'カスタムノードをセットアップ',
NODE_Subtitle               : 'ローカルノードに接続するには...',
NODE_Warning                : 'MyEtherWallet.com 経由で接続するためには、HTTPSノードが必要です。[MyEtherWalletをレポジトリからダウンロードして、手元で走らせ、](https://github.com/kvhnuke/etherwallet/releases/latest)いずれかのノードに接続することもできます。 あるいは、無料のSSL証明書を[LetsEncrypt](https://letsencrypt.org/)から入手してください',
NODE_Name                   : 'ノード名',
NODE_Port                   : 'ノードポート',
NODE_CTA                    : '保存してカスタムノードを使用',

/* Swap / Exchange */
SWAP_rates                  : "現在のレート ",
SWAP_init_1                 : "これから両替で ",
SWAP_init_2                 : " を ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "次へ ", // or "Continue"
SWAP_information            : "あなたの情報 ",
SWAP_send_amt               : "送出総額 ",
SWAP_rec_amt                : "受け取り総額 ",
SWAP_your_rate              : "変換レート ",
SWAP_rec_add                : "受け取りアドレス ",
SWAP_start_CTA              : "交換開始 ",
SWAP_ref_num                : "参照番号 ",
SWAP_time                   : "送出するまでにあと、 ",
SWAP_elapsed				        : "Time elapsed since sent ", 
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
VIEWWALLET_SuccessMsg       : '成功しました! お財布の詳細は以下の通りです。 ',
VIEWWALLET_ShowPrivKey      : '(show)',
VIEWWALLET_HidePrivKey      : '(hide)',

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
ERROR_36                    : 'Enter valid TX hash', // 36
ERROR_37                    : 'Enter valid hex string (0-9, a-f)', // 37

SUCCESS_1                   : '有効なアドレス ',
SUCCESS_2                   : 'お財布は正常に暗号解除されました。 ',
SUCCESS_3                   : 'トランザクションはブロックチェイン上に展開されています。そのトランザクションを表示し、ガス不足や契約実行エラーがないことを確認しするためにクリックしてください。 TX Hash:  ', //'トランザクションが送出されました。 TX Hash ',
SUCCESS_4                   : 'お財布が追加されました： ',
SUCCESS_5                   : '選択されました： ',
SUCCESS_6                   : '接続完了しました ',
SUCCESS_7                   : 'メッセージの署名が確認されました',
WARN_Send_Link              : '自分のアドレス、リンク、ガス、データ、あるいはトランザクションタイプ（送出モード）が指定されたリンクでここに表示されています。 送出前に修正可能です。もう一度行うために、お財布を解錠してください。 ',

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

/* Tranlsation Info */
translate_version           : '0.3 ',
Translator_Desc             : '日本語開発者に投げ銭： ',
TranslatorName_1            : '[sekisanchi](https://www.myetherwallet.com/?gaslimit=21000&to=0xf991119Eea62Eee1a6fdaA7f621e91A42f325FcE&value=1.0#send-transaction) ',
TranslatorAddr_1            : '0xf991119Eea62Eee1a6fdaA7f621e91A42f325FcE ',
/* Translator 1             : Kazunori Seki / 関一典 */
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
HELP_4_Desc_2               : 'Navigate to the "Ether送出 トークン送出" page. ',
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
HELP_4CX_Desc_1             : 'First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Ether送出 トークン送出" page. ',
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
HELP_4CX_Desc_12            : 'Using "Ether送出 トークン送出" Page ',

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
HELP_7_Desc_1               : 'Navigate to the "Ether送出 トークン送出" page. ',
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

HELP_9_Title                : '9) Is the "Ether送出 トークン送出" page offline? ',
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

module.exports = ja;
