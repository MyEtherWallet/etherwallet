// Vietnamese
'use strict';
var vi = function() {}
vi.code = 'vi';
vi.data = {

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
NAV_AddWallet               : 'Thêm Ví ',
NAV_BulkGenerate            : 'Tạo Nhiều Ví ',
NAV_Contact                 : 'Liên Hệ ',
NAV_Contracts               : 'Hợp Đồng ',
NAV_DeployContract          : 'Phát Triển Hợp Đồng ',
NAV_ENS                     : 'ENS',
NAV_GenerateWallet_alt      : 'New Wallet ',
NAV_GenerateWallet          : 'Tạo Ví ',
NAV_Help                    : 'Trợ Giúp ',
NAV_InteractContract        : 'Interact with Contract ',
NAV_Multisig                : 'Multisig ',
NAV_MyWallets               : 'Ví Của Tôi ',
NAV_Offline                 : 'Giao Dịch Offline ',
NAV_SendEther               : 'Gửi Ether và Tokens ',
NAV_SendTokens              : 'Gửi Token ',
NAV_SignMsg                 : 'Sign Message ',
NAV_Swap                    : 'Swap ',
NAV_ViewWallet              : 'Thông Tin Ví ',
NAV_YourWallets             : 'Ví Của Bạn ',

/* General */
x_Access                    : 'Access ',
x_AddessDesc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Bạn có thể xem đây là Địa chỉ ví cá nhân của bạn. Bạn có thể gửi "Địa chỉ ví" này đến người mà bạn muốn nhận ETH từ họ. Biểu tượng bên cạnh giúp việc nhận dạng "Địa chỉ ví" của bạn dễ dàng hơn. ',
x_Address                   : 'Địa Chỉ Của Bạn ',
x_Cancel                    : 'Huỷ ',
x_CSV                       : 'Định Dạng CSV (Không mã hoá) ',
x_Download                  : 'Tải Về Máy ',
x_Json                      : 'Định Dạng JSON (Không mã hoá) ',
x_JsonDesc                  : 'Định Dạng JSON là một tập tin chứa dữ liệu ví chưa được mã hoá của Private Key. Bạn có thể đăng nhập vào ví của bạn bằng việc sử dụng định dạng JSON mà không cần đến mật khẩu. Vì vậy, bất kỳ người nào sở hữu định dạng  JSON của bạn thì họ đều có khả năng đăng nhập vào ví của bạn mà không cần đến mật khẩu. ',
x_Keystore                  : 'Định Dạng Keystore (UTC / JSON) (Đã mã hoá. Định Dạng này sử dụng cho Mist) ',
x_Keystore2                 : 'Định Dạng Keystore (UTC / JSON) ',
x_KeystoreDesc              : 'Định dạng Keystore là tập một tin chứa dữ liệu ví đã được mã hoá của Private Key và sử dụng cho Mist. Do đó bạn có thể dễ dàng bỏ nó vào bên trong Mist và tiếp tục sử dụng ví của bạn. Đây là một tập tin được đề xuất nhằm sao lưu dữ liệu ví cá nhân. ',
x_MetaMask                  : 'Metamask / Mist ',
x_Mnemonic                  : 'Cụm từ dễ nhớ ',
x_ParityPhrase              : 'Parity Phrase ',
x_Password                  : 'Mật Khẩu ',
x_Print                     : 'Tạo Ví Giấy ',
x_PrintDesc                 : 'Mẹo: kích chuột trái vào nút "In Ví" sau đó chọn "Save this as a PDF" đễ lưu nó thành định dạng PDF trên máy tính của bạn nếu bạn không sở hữu máy in cá nhân! ',
x_PrintShort                : 'In Ví ',
x_PrivKey                   : 'Private Key (Không mã hoá) ',
x_PrivKey2                  : 'Private Key ',
x_PrivKeyDesc               : 'Đây là một đoạn dữ liệu có định dạng bằng văn bản không bị mã hoá và nó chính là private key của bạn. Nếu người nào sở hữu Private Key của bạn thì họ có thể truy cập vào ví của bạn mà không cần đến mật khẩu. Vì vậy, Chúng tôi khuyên bạn nên dùng phiên bản có định dạng đã được mã hoá. ',
x_Save                      : 'Lưu ',
x_TXT                       : 'Định Dạng TXT (Không mã Hoá) ',
x_Wallet                    : 'Ví ',

/* Header */
MEW_Warning_1               : 'Chú Ý! kiễm tra cẩn thận URL trước khi bạn muốn đăng nhập vào ví hoặc tạo một ví mới. Cảnh giác cao đối với những trang web lừa đảo! ',
CX_Warning_1                : 'Hãy chắc chắn rằng bạn đã thực hiện việc sao lưu dữ liệu cho những ví bạn đang sử dụng tại đây. Nhiều khả năng có thể xảy ra sẽ dẩn đến việc mất đi dữ liệu mà bạn lưu tại phần mở rộng của Chrome (bao gồm việc gỡ bỏ cài đặt và cài đặt lại các phần mở rộng). Phần mở rộng này là cách dễ dàng đễ truy cập vào ví của bạn, nhưng nó không phải là nơi đễ bạn sao lưu dữ liệu. ',
MEW_Tagline                 : 'Open Source JavaScript Client-Side Ether Wallet ',
CX_Tagline                  : 'Open Source JavaScript Client-Side Ether Wallet Chrome Extension ',

/* Footer */
FOOTER_1                    : 'Free, open-source, client-side interface for generating Ethereum wallets &amp; more. Interact with the Ethereum blockchain easily &amp; securely. Double-check the URL ( .com ) before unlocking your wallet.',
FOOTER_1b                   : 'Nhà Phát Triển: ',
FOOTER_2                    : 'Quyên Góp & Ủng Hộ Vào "Quỹ Phát Triển" Từ Bạn Là Một Hành Động Đáng Trân Trọng: ',
FOOTER_3                    : 'Client-side wallet generation by ',
FOOTER_4                    : 'Những Điều Cần Lưu Ý ',

/* Sidebar */
sidebar_AccountInfo         : 'Thông Tin Tài Khoản ',
sidebar_AccountAddr         : 'Địa Chỉ Tài Khoản ',
sidebar_AccountBal          : 'Số Dư Tài Khoản ',
sidebar_TokenBal            : 'Số Dư Token ',
sidebar_Equiv               : 'Giá Trị Tương Đương ',
sidebar_TransHistory        : 'Lịch Sử Giao Dịch ',
sidebar_donation            : 'MyEtherWallet là một ứng dụng miễn phí được xây dựng trên mã nguồn mở nhằm bảo vệ quyền riêng tư và sự bảo mật của người sử dụng. các khoản quyên góp mà chúng tôi nhận được sẽ giúp chúng tôi có cơ hội dành nhiều thơi gian hơn cho việc lắng nghe những phản hồi từ người sử dụng nhằm tạo ra những ứng dụng mới nhằm đáp ứng những mong muốn từ người sử dụng. Chúng tôi hiện tại là hai cá nhân đang cố gắng làm cho thế giới ngày một tốt hơn. Hãy cùng chung giúp chúng tôi ',
sidebar_donate              : 'Quyên Góp ',
sidebar_thanks              : 'Xin Chân Thành Cảm Ơn!!! ',
sidebar_DisplayOnTrezor     : 'Display address on TREZOR',
sidebar_DisplayOnLedger     : 'Display address on Ledger',

/* Decrypt Panel */
decrypt_Access              : 'Làm thế nào đễ truy cập vào ví của bạn? ',
decrypt_Title               : 'Chọn Loại Định Dạng Private Key Thích Hợp: ',
decrypt_Select              : 'Chọn ví: ',

/* Add Wallet */
ADD_Label_1                 : 'Bạn đang cần làm gì? ',
ADD_Radio_1                 : 'Tạo Ví Mới ',
ADD_Radio_2                 : 'Chọn Tập Tin Ví Của Bạn (Keystore / JSON) ',
ADD_Radio_2_alt             : 'Chọn Tập Tin Ví Của Bạn ',
ADD_Radio_2_short           : 'CHỌN TẬP TIN VÍ... ',
ADD_Radio_3                 : 'Dán/Gõ Private Key Ví Của Bạn ',
ADD_Radio_4                 : 'Thêm Tài Khoản đễ Theo Dõi ',
ADD_Radio_5                 : 'Dán/Điền ký tự dễ nhớ của bạn ',
ADD_Radio_5_Path            : 'Select HD derivation path ',
ADD_Radio_5_woTrezor        : '(Jaxx, Metamask, Exodus, imToken)',
ADD_Radio_5_withTrezor      : '(Jaxx, Metamask, Exodus, imToken, TREZOR)',
ADD_Radio_5_PathAlternative : '(Ledger)',
ADD_Radio_5_PathTrezor      : '(TREZOR)',
ADD_Radio_5_PathCustom      : 'Custom',
ADD_Label_2                 : 'Tạo Tên Gọi: ',
ADD_Label_3                 : 'Ví của bạn sẽ được giải mã. Xin vui lòng điền mật khẩu ',
ADD_Label_4                 : 'Thêm Tài Khoản đễ Theo Dõi ',
ADD_Warning_1               : 'Bạn có thể thêm bất kỳ tài khoản nào bạn muốn theo dõi trên ví mà không cần đến Mật khẩu bảo mật. Việc này không có nghĩa là bạn đã truy cập vào bên trong ví. Do đó bạn sẽ không thực hiện được giao dịch tại chức năng này. ',
ADD_Label_5                 : 'Điền Địa Chỉ Ví ',
ADD_Label_6                 : 'Mở Khoá Cho Ví Của Bạn ',
ADD_Label_6_short           : 'Mở Khoá ',
ADD_Label_7                 : 'Thêm Tài Khoản ',
ADD_Label_8                 : 'Password (optional): ',

/* Generate Wallets */
GEN_desc                    : 'Nếu bạn muốn tạo nhiều ví cùng một lúc, bạn có thể thực hiện tại đây ',
GEN_Label_1                 : 'Tạo mật khẩu thật mạnh nhằm bảo mật tài khoản (ít nhất 9 ký tự) ',
GEN_Placeholder_1           : 'Lưu nó lại một cách cẩn thận! ',
GEN_SuccessMsg              : 'Ví của bạn đã được tạo thành công. ',
GEN_Label_2                 : 'Lưu lại tập tin chứa định dạng Keystore/JSON hoặc Private Key. Đừng quên mật khẩu mà bạn đã tạo phía trên. ',
GEN_Label_3                 : 'Địa Chỉ Ví (bạn cần lưu lại cho việc sử dụng). ',
GEN_Label_4                 : 'Bạn có thể in ví giấy hoặc lưu giữ mã QR một cách cẩn thận. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Số Lượng Ví Cần Tạo ',
BULK_Label_2                : 'Tạo Ví ',
BULK_SuccessMsg             : 'Ví của bạn đã được tạo thành công. ',

/* Sending Ether and Tokens */
SEND_addr                   : 'Địa Chỉ Đến ',
SEND_amount                 : 'Số Lượng Cần Gửi ',
SEND_amount_short           : 'Số Lượng ',
SEND_custom                 : 'Token được yêu cầu! ',
SEND_gas                    : 'Gas ',
SEND_TransferTotal          : 'Gửi Hết Số Dư Hiện Có ',
SEND_generate               : 'Tạo Giao Dịch ',
SEND_raw                    : 'Định Dạng Giao Dịch ',
SEND_signed                 : 'Chữ Ký Giao Dich ',
SEND_trans                  : 'Gửi Đi ',
SENDModal_Title             : 'Cảnh Báo! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Bạn muốn gửi đi ',
SENDModal_Content_2         : 'Địa chỉ đến ',
SENDModal_Content_3         : 'Bạn đã chắc chắn muốn thực hiện giao dịch này ',
SENDModal_Content_4         : 'Lưu Ý: Nếu bạn gặp lỗi, bạn cần phải thêm ether vào tài khoản của bạn để thanh toán chi phí gas của việc gửi Token. Gas được thanh toán bằng ether. ',
SENDModal_No                : 'Không, Đưa tôi ra khỏi đây! ',
SENDModal_Yes               : 'Có, Tôi chắc chắn! Hãy thực hiện giao dịch. ',

/* Tokens */
TOKEN_Addr                  : 'Địa Chỉ ',
TOKEN_Symbol                : 'Ký Hiệu Token ',
TOKEN_Dec                   : 'Phân Số Thập Phân ',
TOKEN_show                  : 'Hiển thị tất cả các loại Tokens ',
TOKEN_hide                  : 'Ẩn Tokens ',

/* Send Transaction */
TRANS_desc                  : 'Nếu bạn muốn gửi Token, xin vui lòng sử dụng danh mục "Gửi Token". ',
TRANS_warning               : 'Nếu bạn sử dụng chức năng "Chỉ ETH" hoặc "Chỉ ETC" trong việc gửi đi thông qua một hợp đồng thông minh. Những dịch vụ có chức năng chấp nhận các giao dịch. Đọc Thêm. ',
TRANS_advanced              : 'Nâng Cao: Thêm Dữ Liệu ',
TRANS_data                  : 'Dữ Liệu: ',
TRANS_gas                   : 'Gas Limit: ',
TRANS_sendInfo              : 'Mỗi Giao dịch Phổ Thông sử dụng hết 21000 gas có giá tương đương 0.000441 ETH. Chúng tôi áp dụng giá Gas dành cho một giao dịch cao hơn so với mức tối thiểu là 0.000000021 ETH nhằm đảm bảo một giao dịch được diễn ra nhanh. Chúng tôi hoàn toàn không nhận được khoản tiền phát sinh nào từ phí giao dịch. ',

/* Send Transaction Modals */
TRANSModal_Title            : 'Giao Dịch "Chỉ ETH" Và "Chỉ ETC" ',
TRANSModal_Content_0        : 'Một số lưu ý về sự khác biệt của từng loại giao dịch và sự khác biệt của từng dịch vụ: ',
TRANSModal_Content_1        : '**ETH (Giao Dịch Phổ Thông): ** Phương pháp này mặc định rằng nó sẽ tạo giao dịch từ một địa chỉ gửi đến địa chỉ nhận khác và nó sẽ tiêu thụ hết 21000 gas. Theo giả thuyết thì bất kì số ETH gửi đi thông qua phương pháp này sẽ được thực hiện lại tương tự trên chuổi ETC. ',
TRANSModal_Content_2        : '**Chỉ ETH: ** Phương pháp này sẽ thực hiện giao dịch thông qua [Hợp đồng thông minh nhằm "tránh việc phát lại" được phát triển bởi Timon Rapp (theo lời cảnh báo của VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) vì vậy giao dịch này chỉ được thực hiện trên chuổi **ETH**. ',
TRANSModal_Content_3        : '**Chỉ ETC: ** Phương pháp này sẽ thực hiện giao dịch thông qua [Hợp đồng thông minh nhằm "tránh việc phát lại" được phát triển bởi Timon Rapp (theo lời cảnh báo của VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) vì vậy giao dịch này chỉ được thực hiện trên chuổi **ETC**. ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift: ** Giao Dịch chỉ được thực hiện thông qua giao dịch phổ thông. Nếu bạn thực hiện thông qua hợp đồng "Chỉ", thì bạn cần phải liên hệ trực tiếp với nhân viên hỗ trợ của họ để họ tự thêm vào hoặc hoàn lại tiền cho bạn. [bạn cũng có thể thử với công cụ "chia tách" của Shapeshift.](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex:** không có sự cố nào xảy ra khi thực hiện giao dịch. ',
TRANSModal_Yes              : 'Tuyệt vời, Tôi dã hiểu. ',
TRANSModal_No               : 'Tôi gặp gặp phải một vài vấn đề khó hiểu.Làm ơn giúp tôi hiểu rõ hơn. ',

/* Offline Transaction */
OFFLINE_Title               : 'Tạo và Gửi đối với giao dịch offline ',
OFFLINE_Desc                : 'Tạo một giao dịch Offline sẽ được thực hiện với 3 bước. bạn sẽ hoàn thành bước 1 và 3 trên cùng 1 máy tính đang trong tình trạng online và thực hiện bước 2 trên một máy tính đang trong tình trạng offline/airgapped. Việc này sẽ đảm bảo Private Key của bạn không có bất cứ một liên kết nào với một thiết bị đang kết nối internet nào khác. ',
OFFLLINE_Step1_Title        : 'Bước 1: Tạo Thông Tin (Máy tính đang Online) ',
OFFLINE_Step1_Button        : 'Tạo Thông Tin ',
OFFLINE_Step1_Label_1       : 'Địa Chỉ Gửi ',
OFFLINE_Step1_Label_2       : 'Lưu ý: Đây phải là tài khoản gửi, không phải tài khoản đến. Nonce sẽ được tạo ra từ tài khoản có nguồn gốc. Nếu sử dụng máy tính có tình trạng airgapped, thì nó sẽ trở thành địa chỉ của tài khoản lưu trữ lạnh. ',
OFFLINE_Step2_Title         : 'Bước 2: Tạo Giao Dịch (Máy Tính Đang Offline) ',
OFFLINE_Step2_Label_1       : 'Địa Chỉ Đến ',
OFFLINE_Step2_Label_2       : 'Đơn vị / Tổng số gửi: ',
OFFLINE_Step2_Label_3       : 'Giá Gas ',
OFFLINE_Step2_Label_3b      : 'Điều này đã được hiển thị ở bước 1 trên máy tính trực tuyến của bạn. ',
OFFLINE_Step2_Label_4       : 'Giới hạn Gas ',
OFFLINE_Step2_Label_4b      : '21000 măc định sẽ là số gas giới hạn. khi bạn gửi đi một hợp đồng hoặc thêm dữ liệu, việc này sẽ cần phải làm khác đi. Lượng Gas không được sử dụng sẽ hoàn trả cho bạn. ',
OFFLINE_Step2_Label_5       : 'Nonce ',
OFFLINE_Step2_Label_5b      : 'Điều này đã được hiển thị ở bước 1 trên máy tính trực tuyến của bạn. ',
OFFLINE_Step2_Label_6       : 'Dữ Liệu ',
OFFLINE_Step2_Label_6b      : 'Đây là phần tùy chọn. Dữ liệu thường được sử dụng khi bạn gửi các giao dịch hợp đồng. ',
OFFLINE_Step2_Label_7       : 'Nhập / Chọn  Private Key / JSON của bạn. ',
OFFLINE_Step3_Title         : 'Bước 3: Gửi / Làm rõ Giao Dịch (Máy tính đang Online) ',
OFFLINE_Step3_Label_1       : 'Dán chữ ký Giao Dịch được tạo từ Bước 2 vào đây và chọn nút "Thực hiện Giao Dịch". ',

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
SWAP_elapsed				        : "Time elapsed since sent ",
SWAP_progress_1             : "Order Initiated ",
SWAP_progress_2             : "Waiting for your ", // Waiting for your BTC...
SWAP_progress_3             : "Received! ", // ETH Received!
SWAP_progress_4             : "Sending your {{orderResult.output.currency}} ",
SWAP_progress_5             : "Order Complete ",
SWAP_order_CTA              : "Please send ", // Please send 1 ETH...
SWAP_unlock                 : "Unlock your wallet to send ETH or Tokens directly from this page. ",

/* Sign Message */
MSG_date                    : 'Date ',
MSG_info1                   : 'Include the current date so the signature cannot be reused on a different date. ',
MSG_info2                   : 'Include your nickname and where you use the nickname so someone else cannot use it. ',
MSG_info3                   : 'Include a specific reason for the message so it cannot be reused for a different purpose. ',
MSG_message                 : 'Message ',
MSG_signature               : 'Signature ',
MSG_verify                  : 'Verify Message ',

/* Hardware wallets */
x_Trezor                    : 'TREZOR ',
ADD_Trezor_scan             : 'Connect to TREZOR ',
ADD_Trezor_select           : 'This is a TREZOR seed ',
x_Ledger                    : 'Ledger Wallet ',
ADD_Ledger_1                : 'Kết Nối Với Ledger Wallet Của Bạn ',
ADD_Ledger_2                : 'Mở Lên Ứng Dụng Của Ethereum (Hoặc một ứng dụng của Hợp Đồng) ',
ADD_Ledger_3                : 'Xác nhận lại phần Hổ Trợ dành cho Trình Duyệt đã được kích hoạt trong mục Cài Đặt ',
ADD_Ledger_4                : 'Nếu mục Hổ Trợ dành cho Trình duyệt không tìm thấy trong mục Cài Đặt, Xác nhận lại bạn đã có [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) hay chưa ',
ADD_Ledger_0a               : 'Hảy mở lại trang MyEtherWallet trên một kết nối có tính bảo mật (SSL) ',
ADD_Ledger_0b               : 'Sử dụng [Chrome](https://www.google.com/chrome/browser/desktop/) hoặc [Opera](https://www.opera.com/) Để mở lại trang MyEtherWallet ',
ADD_Ledger_scan             : 'Kết nối với Ledger Wallet ',
ADD_MetaMask                : 'Connect to MetaMask ',
ADD_Ledger_scan             : 'Kết nối với Ledger Nano S ',
x_DigitalBitbox             : 'Digital Bitbox ',
ADD_DigitalBitbox_0a        : 'Hảy mở lại trang MyEtherWallet trên một kết nối có tính bảo mật (SSL) ',
ADD_DigitalBitbox_0b        : 'Sử dụng [Chrome](https://www.google.com/chrome/browser/desktop/) hoặc [Opera](https://www.opera.com/) Để mở lại trang MyEtherWallet ',
ADD_DigitalBitbox_scan      : 'Kết nối với Digital Bitbox ',

/* Deploy Contracts */
DEP_generate                : 'Tạo Bytecode ',
DEP_generated               : 'Bytecode Đã Được Tạo ',
DEP_signtx                  : 'Chữ Ký Giao Dịch ',
DEP_interface               : 'Đã Tạo Giao Diện ',

/* My Wallet */
MYWAL_Nick                  : 'Tên Gọi Của Ví ',
MYWAL_Address               : 'Địa Chỉ Ví ',
MYWAL_Bal                   : 'Số Dư ',
MYWAL_Edit                  : 'Chỉnh Sửa ',
MYWAL_View                  : 'Xem ',
MYWAL_Remove                : 'Gỡ Bỏ ',
MYWAL_RemoveWal             : 'Gỡ Bỏ Ví: ',
MYWAL_WatchOnly             : 'Tài khoản theo dõi của bạn ',
MYWAL_Viewing               : 'Xem Ví ',
MYWAL_Hide                  : 'Ẩn Thông Tin Ví ',
MYWAL_Edit_2                : 'Chỉnh Sửa Ví ',
MYWAL_Name                  : 'Tên Ví ',
MYWAL_Content_1             : 'Cảnh Báo! Bạn Muốn gỡ bỏ Ví của bạn ',
MYWAL_Content_2             : 'Hãy chắc chắn bạn đã **Lưu giữ Private Key hoặc Tập Tin chứa định dạng Keystore và mật khẩu** Trước khi bạn gỡ bỏ nó. ',
MYWAL_Content_3             : 'Nếu bạn muốn sử dụng địa chỉ Ví này với MyEtherWallet CX trong tương lai, bạn sẽ cần phải tự thêm vào lại bằng cách sử dụng tập tin Private Key / JSON và mật khẩu. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Việc này cho phép bạn tải về các phiên bản khác nhau của Private Key và in lại ví giấy của bạn. Bạn có thể muốn làm điều này để [nhập tài khoản của bạn vào Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Nếu bạn muốn kiễm tra số dư của bạn, chúng tôi khuyên bạn sử dụng một blockchain explorer như [etherscan.io] (http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Việc này cho phép bạn tải về các phiên bản khác nhau của Private Key và in lại ví giấy của bạn. ',
VIEWWALLET_SuccessMsg       : 'Đã Thành Công! Đây là thông tin chi tiết về Ví của bạn. ',
VIEWWALLET_ShowPrivKey      : '(show)',
VIEWWALLET_HidePrivKey      : '(hide)',

/* Mnemonic */
MNEM_1                      : 'Xin vui lòng, Chọn địa chỉ mà bạn muốn tương tác. ',
MNEM_2                      : 'Cụm từ dễ nhớ đó có thể truy nhập vào số địa chỉ Ví của bạn. Vui lòng chọn địa chỉ mà bạn muốn tương tác tại thời điểm này. ',
MNEM_more                   : 'Nhiều địa chỉ ',
MNEM_prev                   : 'Địa chỉ trước đó ',

/* Chrome Extension */
CX_error_1                  : 'Bạn không có bất kỳ ví nào được lưu lại. Chọn Nút ["Thêm Ví"](/cx-wallet.html#add-wallet) để thêm ví! ',
CX_quicksend                : 'Gửi Nhanh ', // if no appropriate translation, just use "Send"

/* Error Messages */
ERROR_0                     : 'Vui lòng nhập số dư hợp lệ. ',
ERROR_1                     : 'Mật khẩu của bạn phải có ít nhất 9 ký tự. Hãy đảm bảo rằng nó là một mật khẩu mạnh. ',
ERROR_2                     : 'Lấy làm tiếc! Chúng tôi không nhận ra loại Định Dạng từ tập tin ví. ',
ERROR_3                     : 'Đây không phải là một tập tin ví hợp lệ. ',
ERROR_4                     : 'Đơn vị này không tồn tại, xin vui lòng sử dụng một trong những đơn vị sau đây ',
ERROR_5                     : 'Địa chỉ không hợp lệ. ',
ERROR_6                     : 'Mật khẩu không hợp lệ. ',
ERROR_7                     : 'Tổng số không hợp lệ. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Giới hạn gas không hợp lệ. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Dữ liệu không hợp lệ. (Must be hex.) ', // 9
ERROR_10                    : 'Tổng số gas không hợp lệ. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Nonce không hợp lệ. (Must be integer.) ', // 11
ERROR_12                    : 'Chữ ký giao dịch không hợp lệ. ',
ERROR_13                    : 'Tên gọi này đã được sữ dụng. ',
ERROR_14                    : 'Không tìm thấy Ví. ',
ERROR_15                    : 'Trông có vẻ như một proposal ới số ID này chưa kết thúc hoặc đang có một lỗi xảy ra để đọc được proposal này. ',
ERROR_16                    : 'Đã có một ví với địa chỉ này đang tồn tại trong mục lưu trữ. Vui lòng kiễm tra trang ví của bạn. ',
ERROR_17                    : 'Bạn cần có ít nhất **0.01 ETH** trong tài khoản để thanh toán chi phí gas. Hãy thêm một số ether và thực hiện lại. ',
ERROR_18                    : 'Toàn bộ gas sẽ được sử dụng trong giao dịch này. Việc làm này có nghĩa là bạn đã bỏ phiếu cho đề xuất này hoặc kỳ hạn của cuộc tranh luận đã kết thúc. ',
ERROR_19                    : 'Biểu tượng không hợp lệ ',
ERROR_20                    : 'Không tồn tại trên hệ thống ERC-20 token. Nếu bạn phải chờ lâu. Xin vui lòng thử lại lần nữa!. ',
ERROR_21                    : 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.', // 21
ERROR_22                    : 'Please enter a valid node name', // 22
ERROR_23                    : 'Please enter a valid URL. If you are on https, your URL must be https', // 23
ERROR_24                    : 'Please enter a valid port. ', // 24
ERROR_25                    : 'Please enter a valid chain ID. ', // 25
ERROR_26                    : 'Please enter a valid ABI. ', // 26
ERROR_27                    : 'Minimum amount: 0.01. Max amount: ', // 27
ERROR_28                    : '**Bạn cần sử dụng tập tin chứa định dạng Keystore/JSON cùng với Mật khẩu hoặc Private Key của bạn** cho việc đăng nhập vào ví này trong tương lai. Hãy sao lưu và cất giữ nó cẩn thận tại kho lưu trữ của bạn! Không có cách nào đễ khôi phục Ví của bạn nếu bạn không sao lưu dữ liệu ví lại. Đọc Thêm [trang trợ giúp] (https://www.myetherwallet.com/#help) đễ được hướng dẫn cụ thể. ',
ERROR_29                    : 'Please enter a valid user and password. ', // 29
ERROR_30                    : 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
ERROR_31                    : 'Please enter a valid secret phrase. ', // 31
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35
ERROR_36                    : 'Enter valid TX hash', // 36
ERROR_37                    : 'Enter valid hex string (0-9, a-f)', // 37

SUCCESS_1                   : 'Địa Chỉ Hợp Lệ ',
SUCCESS_2                   : 'Ví đã được giải mã thành công ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ',
SUCCESS_4                   : 'Ví của bạn đã được thêm thành công: ',
SUCCESS_5                   : 'Tập Tin Được Chọn ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
WARN_Send_Link              : 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. ',

/* Geth Error Messages */
GETH_InvalidSender          : 'Sai người nhận ',
GETH_Nonce                  : 'Nonce quá thấp ',
GETH_Cheap                  : 'Gas quá thấp ',
GETH_Balance                : 'Số dư tài khoản không đủ ',
GETH_NonExistentAccount     : 'Tài khoản không tồn tại hoặc số dư không đủ ',
GETH_InsufficientFunds      : 'Số dư không đủ thanh toán cho gas * Giá + Giá trị ',
GETH_IntrinsicGas           : 'Số gas quá thấp ',
GETH_GasLimit               : 'Số gas vượt mức giới hạn đối với một Block ',
GETH_NegativeValue          : 'Cảnh báo xấu về lượng gas ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "Giao dịch có cùng đoạn hash đã được ghi nhận.",
PARITY_Old                  : "Nonce quá thấp để tạo một giao dịch, hãy thử lại bằng cách tăng số nonce.",
PARITY_TooCheapToReplace    : "Phí giao dịch quá thấp. Đang có một giao dịch khác có cùng số nonce đang bị gián đoạn. Hãy thử lại bằng cách tăng phí giao dịch.",
PARITY_LimitReached         : "Có quá nhiều giao dịch đang bị gián đoạn. Giao dịch của bạn sẽ bị ngắt nhằm đảm bảo mức giới hạn an toàn. Hãy thử lại bằng cách tăng phí giao dịch.",
PARITY_InsufficientGasPrice : "Phí giao dịch quá thấp. Nó không đáp ứng được mức phí tối thiểu dành cho node của bạn (Tối thiểu: {}, bạn có: {}). Hãy thử lại bằng cách tăng phí giao dịch.",
PARITY_InsufficientBalance  : "Không đủ số dư. Bạn đang cố gắng gửi đi một giao dịch vs số dư bị thiếu. Số dư cần thiết {} và bạn có: {}.",
PARITY_GasLimitExceeded     : "Phí giao dịch đang vượt quá mức giới hạn gas hiện tại. Giới hạn: {}, bạn có: {}. Hãy thử lại bằng cách giảm bớt số gas.",
PARITY_InvalidGasLimit      : "Tổng số gas mà bạn sử dụng đang vượt mức giới hạn cho phép.",

/* Tranlsation Info */
translate_version           : '0.3 ',
Translator_Desc             : 'Chân Thành Cảm Ơn ',
TranslatorName_1            : '[Phạm Thế Vũ](https://twitter.com/PhamTheVu3) · ',
TranslatorAddr_1            : 'https://twitter.com/PhamTheVu3 ',
/* Translator 1             : Insert Comments Here */
TranslatorName_2            : '[và Ethereum Vietnam](https://www.ethereumvn.com) ',
TranslatorAddr_2            : 'https://www.facebook.com/ethereumvietnam https://www.ethereumvn.com ',
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
HELP_Warning                : 'Nếu bạn đã khởi tạo Ví -hoặc- đã tải về máy tập tin có chứa dữ liệu ví trước **Ngày 31 Tháng 12 năm 2015**, xin vui lòng kiễm tra lại dữ liệu Ví; dễ tải về phiên bản mới của tập tin Ví. Chi tiết xem tại. ',
HELP_Desc                   : 'Nếu bạn thấy có gì sai sót và có những câu hỏi nào khác cần được giải đáp. [Xin Liên Lạc Với Chúng Tôi](mailto:support@myetherwallet.com), và chúng tôi sẽ giải đáp những thắc mắc từ bạn, ngoài ra chúng tôi sẽ cập nhật lại trang web nhằm đem lại nhiều tiện lợi nhất có thể cho người sử dụng trong tương lai! ',
HELP_Remind_Title           : 'Một số lưu ý! ',
HELP_Remind_Desc_1          : '**Ethereum, MyEtherWallet.com & MyEtherWallet CX, và các nền tảng khác từ Javascript libraries mà chúng tôi sử dụng đang được phát triển một cách tích cực.** Mặc dù toàn bộ đã được chúng tôi kiễm tra rất kỹ lưỡng và hàng chục nghìn địa chỉ Ví đã được tạo thành công từ người sử dụng trên toàn cầu, nhưng vẫn có những vấn đề có thể xảy ra làm cho ETH của bạn bị mất đi. Xin vui lòng không nên đầu tư với số tiền nhiều hơn khả năng mà bạn đã cho rằng nó sẽ mất và hãy luôn cẩn thận. Trong trường hợp rủi ro xảy ra, chung tôi rất chân thành xin lỗi. Tuy nhiên **Chúng tôi sẽ không chịu bất cứ một trách nhiệm nào đối với số lượng Ether mà bạn đã bị mất!**. ',
HELP_Remind_Desc_2          : 'MyEtherWallet.com & MyEtherWallet CX không phải "Ví Web". Vì vậy bạn không tạo tài khoản sau đó gửi số Ether của bạn cho chúng tôi dễ giữ hộ. Toàn bộ Dữ liệu sẽ không bao giờ bị rò rỉ ra khỏi máy tính/trình duyệt của bạn. Chúng tôi xây dựng nó nhằm giúp người sử dụng có thể đễ dàng tạo mới, lưu trữ và truy cập thông tin Ví của bạn và tương tác với Blockchain. ',
HELP_Remind_Desc_3          : 'Nếu bạn không lưu lại Private key và mật khẩu của bạn, thì sẽ không có bất cứ một cách nào có thể khôi phục lại Ví và tài sản hiện đang chứa trong Ví. Bạn nên sao lưu dữ liệu Ví tại nhiều nơi và những thiết bị lưu trữ khác nhau! ',

HELP_0_Title                : '0) Tôi mới sử dụng lần đầu tiên. Tôi phải làm gì? ',
HELP_0_Desc_1               : 'MyEtherWallet giúp bạn có khả năng tạo Ví mới dùng dễ lưu trữ số lượng Ether của ban bởi chính mình, Ví được tạo ra không nằm trên bất cứ một sàn giao dịch nào. Quá trình tạo Ví điễn ra hoàn toàn trên máy tính cá nhân của bạn chứ không phải trên hệ thống máy chủ của chúng tôi. Do đó, khi bạn khởi tạo một Ví mới, **bạn chịu trách nhiệm hoàn toàn về vấn đề sao lưu dữ liệu đối với Ví được tạo**. ',
HELP_0_Desc_2               : 'Khởi Tạo Một Ví Mới. ',
HELP_0_Desc_3               : 'Sao Lưu Dữ Liệu Ví. ',
HELP_0_Desc_4               : 'Xác thực rằng  bạn có quyền truy cập vào ví mới này và hãy chắc chắn đã sao lưu tất cả các thông tin cần thiết. ',
HELP_0_Desc_5               : 'Gửi Ether đến Ví mới này. ',

HELP_1_Title                : '1) Làm thế nào dễ khởi tạo một Ví mới? ',
HELP_1_Desc_1               : 'Đi đến trang "Tạo Ví". ',
HELP_1_Desc_2               : 'Đi đến trang "Thêm Ví" và chọn "Tạo Ví Mới" ',
HELP_1_Desc_3               : 'Nhập một mật khẩu mạnh. Nếu bạn nghĩ có thể quên mật khẩu thì bạn nên lưu nó lại một nơi nào đó thật an toàn. bạn sẽ cần đến mật khẩu này dễ gửi đi một giao dịch. ',
HELP_1_Desc_4               : 'Chọn "Tạo Ví". ',
HELP_1_Desc_5               : 'Ví của bạn sẽ được tạo ngay bây giờ. ',

HELP_2a_Title               : 'Làm thế nào dễ sao lưu Ví? ',
HELP_2a_Desc_1              : 'Bạn nên sao lưu tập tin Ví của bạn bên ngoài máy tính và tại nhiều nơi khác nhau - như trên USB hoặc/và một tờ giấy. ',
HELP_2a_Desc_2              : 'Lưu lại địa chỉ Ví. Bạn có thể giữ nó cho chính mình hoặc chia sẽ nó cho bất cứ ai. Người khác có thể gửi Ether cho bạn thông qua địa chỉ Ví của bạn. ',
HELP_2a_Desc_3              : 'Private key. Không được chia sẽ Private key cho bất cứ ai. Private key rất cần thiết khi bạn muốn truy cập vào Ví và Gửi đi một lượng Ether! hiện tại có 3 phiên bản lưu trữ dành cho Private Key: ',
HELP_2a_Desc_4              : 'Place your address, versions of the private key, and the PDF version of your paper wallet in a folder. Save this on your computer and a USB drive. ',
HELP_2a_Desc_5              : 'Bạn Có thể in Ví giấy nếu bạn sở hữu máy in. Ngoài ra, bạn có thể ghi lại Private key và địa chỉ Ví của bạn lên một tờ giấy. Hãy Cất giữ chúng tại một nơi an toàn, hãy ngắt kết nối hoàn toàn giữa máy tính và USB của bạn. ',
HELP_2a_Desc_6              : 'Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood). ',

HELP_2b_Title               : '2b) Làm thế nào dễ bảo mật Ví / offline / lưu trữ lạnh cùng với MyEtherWallet? ',
HELP_2b_Desc_1              : 'Đến trang github của chúng tôi: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ',
HELP_2b_Desc_2              : 'Chọn vào ô `etherwallet-vX.X.X.X.zip`. ',
HELP_2b_Desc_3              : 'Chuyển tiếp tập tin zip đi đến máy tính airgapped. ',
HELP_2b_Desc_4              : 'Giải nén tập tin Zip và nhấn kép chuột vào tập tin `index.html`. ',
HELP_2b_Desc_5              : 'Khởi tạo một Ví cá nhân mới cùng với một mật khẩu mạnh. ',
HELP_2b_Desc_6              : 'Lưu giữ lại địa chỉ Ví vừa tạo. Lưu giữ lại các định dạng của Private key. Lưu giữ lại mật khẩu của bạn nếu bạn không hoàn toàn nhớ nó mãi mãi. ',
HELP_2b_Desc_7              : 'Cất giữ tờ giáy mà bạn đã ghi lên / USB tại nhiều nơi riêng biệt. ',
HELP_2b_Desc_8              : 'đi đến trang "Xem thông tin Ví" và gõ vào Private key của bạn / mật khẩu nhằm đảm bảo rằng nó hoàn toàn chính xác và truy cập vào Ví. kiễm tra lại mật khẩu mà bạn ghi lại trên giấy có giống nhau hay chưa. ',

HELP_3_Title                : '3) Làm thế nào dễ xác minh và truy cập vào Ví mới được khởi tạo? ',
HELP_3_Desc_1               : '**Trước khi bạn gửi số lượng Ether vô Ví mới của bạn**, bạn nên chắc chắn rằng bạn đã truy cập vào Ví thành công. ',
HELP_3_Desc_2               : 'Đi đến trang "Xem Thông Tin Ví". ',
HELP_3_Desc_3               : 'Bạn hãy đi đến trang MyEtherWallet.com "Xem Thông Tin Ví". ',
HELP_3_Desc_4               : 'Chọn tập tin định dạng Ví của bạn -hoặc- sử dụng Private key của bạn dễ mở khoá Ví. ',
HELP_3_Desc_5               : 'Nếu Ví của bạn được mã hoá, ô điền thông tin sẽ tự động báo lại. Nhập mật khẩu. ',
HELP_3_Desc_6               : 'Chọn vào ô "Mở khoá Ví". ',
HELP_3_Desc_7               : 'Your wallet information should show up. Find your account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet. ',
HELP_3_Desc_8               : 'If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly. ',

HELP_4_Title                : '4) Làm thế nào dễ gửi Ether từ Ví này sang Ví khác ? ',
HELP_4_Desc_1               : 'Nếu như bạn dự định dễ chuyển một số lượng lớn Ether, bạn nên gửi đi một lượng nhỏ đến Ví của bạn dễ thử nghiệm, nhằm xác định chắc chắn tất cả chức năng đều hoạt động đúng như dự định. ',
HELP_4_Desc_2               : 'Đi đến trang "Gửi Ether và Tokens". ',
HELP_4_Desc_3               : 'Chọn tập tin Ví -hoặc- Private key của bạn dễ mở khoá cho Ví. ',
HELP_4_Desc_4               : 'Nếu Ví của bạn đang trong tình trạng mã hoá,ô điền thông tin sẽ tự động báo lại. Nhập mật khẩu. ',
HELP_4_Desc_5               : 'Chọn vào nút "Mở Khoá Ví". ',
HELP_4_Desc_6               : 'Điền địa chỉ mà bạn muốn gửi đến tại khung trống "Địa chỉ đến:". ',
HELP_4_Desc_7               : 'Điền số lượng Ether mà bạn muốn gửi đi.Hoặc bạn có thể chọn vào phần "Gửi toàn bộ số dư" nếu bạn muốn chuyển đi toàn bộ số Ether mà bạn hiện có trong tài khoản. ',
HELP_4_Desc_9               : 'Chọn vào "Khởi tạo Giao dịch". ',
HELP_4_Desc_10              : 'Một cửa sổ thông báo sẽ hiện ra. Việc khởi tạo giao dịch này được thực hiện từ trình duyệt của bạn. ',
HELP_4_Desc_11              : 'Chọn vào nút màu xanh "Gửi giao dịch đi" phía dưới. ',
HELP_4_Desc_12              : 'Một cửa sổ yêu cầu sẽ xuất hiện. Xác nhận lại số lượng cần gửi và địa chỉ đến. Sau đó chọn vào ô "Có, tôi chắc chắn! Hãy thực hiện giao dịch.". ',
HELP_4_Desc_13              : 'Giao dịch của bạn sẽ được gửi đi. TX Hash sẽ xuất hiện trên màn hình. Bạn có thể chọn vào TX Hash dễ xem nó trên blockchain. ',

HELP_4CX_Title              : '4) Làm thế nào dễ gửi đi Ether bằng cách sử dụng MyEtherWallet CX? ',
HELP_4CX_Desc_1             : 'Trước tiên, bạn cần phải thêm Ví của bạn vào. Sau khi thực hiện xong, Bạn sẽ có 2 lựa chọn: Chức năng "Gửi Nhanh" từ biểu tượng nằm trên thanh công cụ tiện ích của Google Chrome hoặc chọn vào "Gửi Ether và Tokens" dễ đi đến trang trình duyệt. ',
HELP_4CX_Desc_2             : 'Gửi Nhanh ',
HELP_4CX_Desc_3             : 'Chọn vào biểu tượng trên thanh tiẹn ích của Google Chrome. ',
HELP_4CX_Desc_4             : 'Chọn vào ô "Gửi Nhanh". ',
HELP_4CX_Desc_5             : 'Chọn vào Ví mà bạn muốn dùng dễ gửi. ',
HELP_4CX_Desc_6             : 'Điền địa chỉ mà bạn muốn gửi đến tại khung trống "Địa chỉ đến:". ',
HELP_4CX_Desc_7             : 'Điền số lượng Ether mà bạn muốn gửi đi.Hoặc bạn có thể chọn vào phần "Gửi toàn bộ số dư" nếu bạn muốn chuyển đi toàn bộ số Ether mà bạn hiện có trong tài khoản. ',
HELP_4CX_Desc_8             : 'Chọn vào ô "Thực hiện Giao Dịch". ',
HELP_4CX_Desc_9             : 'Xác nhận lại số lượng cần gửi và địa chỉ đến. ',
HELP_4CX_Desc_10            : 'Điền vào mật khẩu của Ví bạn dùng dễ gửi. ',
HELP_4CX_Desc_11            : 'Chọn vào ô "Gửi giao dịch đi." ',
HELP_4CX_Desc_12            : 'Sử dụng trang "Gửi Ether và Tokens" ',

HELP_5_Title                : '5) Làm thế nào dễ kích hoạt MyEtherWallet.com với tính năng offline? ',
HELP_5_Desc_1               : 'Bạn hãy kích hoạt MyEtherWallet.com trên máy tính của bạn thay thế cho việc chạy trên máy chủ của Github. Bạn có thể khởi tạo Ví mới hoàn toàn trong tình trạng offline và gửi giao dịch đi từ trang "Giao dịch Offline". ',
HELP_5_Desc_7               : 'MyEtherWallet.com sẽ được chạy hoàn toàn trên máy tính của bạn. ',
HELP_5_Desc_8               : 'Trong trường hợp bạn chưa quen với việc sử dụng này, bạn cần nên giữ nguyên toàn bộ thư mục và chừa một phần dung lượng vừa đủ để chạy trang web, không chỉ riêng tập tin `index.html`. Không nên thử mở lên hoặc di chuyển bất cứ một tập tin nào trong thư mục. Nếu bạn lưu trữ một bản sao tập tin repo của MyEtherWallet, chúng tôi khuyên bạn nên lưu trữ tập tin nén nhằm chắc chắn các nội dung của thư mục được giữ nguyên. ',
HELP_5_Desc_9               : 'Cũng như việc chúng tôi liên tục cập nhật MyEtherWallet.com, vì vậy chúng tôi khuyên bạn nên cập nhận định kì cho các tập tin đã Lưu của định dạng repo. ',

HELP_5CX_Title              : '5) Làm sao dễ chúng tôi có thể cài đặt phần mở rộng từ repo thay vì từ cửa hàng ứng dụng của Chrome? ',
HELP_5CX_Desc_2             : 'Chọn vào ô `chrome-extension-vX.X.X.X.zip`. ',
HELP_5CX_Desc_3             : 'Tại trình duyệt Google Chrome và tìm phần cài đặt của nó (Trong mục menu nằm trên góc phải cửa sổ). ',
HELP_5CX_Desc_4             : 'chọn phần "Extensions" nằm bên trái. ',
HELP_5CX_Desc_5             : 'kiễm tra lại nút "Developer Mode" nằm trên cùng của trang. ',
HELP_5CX_Desc_6             : 'Chọn vào ô "Load unpacked extension...". ',
HELP_5CX_Desc_7             : 'Đưa chuột và chọn vào tập tin mà bạn vừa tải về và giải nén nó trước đó, nhấp vào nút "Select". ',
HELP_5CX_Desc_8             : 'Ứng dụng mở rộng không nên cho xuất hiện tại mục mở rộng và thanh ứng dụng mở rộng tại Google Chrome. ',

HELP_7_Title                : '7) Làm thế nào dễ gửi token và thêm Token vào Ví? ',
HELP_7_Desc_0               : '[Ethplorer.io](https://ethplorer.io/) là cách tốt nhất dễ kiễm tra Token và số Token. ',
HELP_7_Desc_1               : 'Đi đến trang "Gửi Ether và Tokens". ',
HELP_7_Desc_2               : 'mở khoá Ví của bạn. ',
HELP_7_Desc_3               : 'Điền địa chỉ mà bạn cần gửi đến tại ô trống "Địa chỉ đến:" . ',
HELP_7_Desc_4               : 'Điền số lượng Token mà bạn muốn gửi. ',
HELP_7_Desc_5               : 'Chọn loại Token mà bạn muốn gửi đi. ',
HELP_7_Desc_6               : 'Nếu bạn không thấy Token của bạn hiển thị trên trang chúng tôi: ',
HELP_7_Desc_7               : 'Chọn vào "Custom". ',
HELP_7_Desc_8               : 'Điền địa chỉ, tên, đơn vị số thập phân của loại Token mà bạn muốn. Chúng được cung cấp bởi các nhà phát triển Token và nó cũng cần thiết khi bạn "thêm vào dễ xem Token" trên Mist. ',
HELP_7_Desc_9               : 'Chọn "Lưu". ',
HELP_7_Desc_10              : 'Bạn có thể gửi token cũng như bạn sẽ nhìn thấy số dư của nó nằm ở khung bên cạnh. ',
HELP_7_Desc_11              : 'Chọn "Khởi tạo giao dịch". ',
HELP_7_Desc_12              : 'Một thông báo sẽ xuất hiện và xác thực rằng đây là việc khởi tạo giao dịch từ trình duyệt của bạn. ',
HELP_7_Desc_13              : 'Chọn vào nút màu xanh phía dưới "Gửi giao dịch đi". ',
HELP_7_Desc_14              : 'Sau đó một thông báo sẽ xuất hiện. Xác thực lại số lượng Ether và địa chỉ đến. sau đó nhấn vào nút  "Có, Tôi chắc chắn! Hãy thực hiện giao dịch.". ',
HELP_7_Desc_15              : 'Giao dịch của bạn sẽ được Thực hiện. TXid sẽ hiển thị cho bạn. Bạn có thể chọn vào TXid và nhìn ấy giao dịch của bạn trên blockchain. ',

HELP_8_Title                : '8) Những gì sẽ xảy ra nếu trang của chúng tôi bị sập? ',
HELP_8_Desc_1               : 'MyEtherWallet không phải là Ví online. Bạn không cần phải đăng nhập và không có bất cứ gì được lưu lại trên máy chủ của chúng tôi. Đây chỉ đơn giản là một giao diện cho phép bạn tương tác với blockchain. ',
HELP_8_Desc_2               : 'Nếu MyEtherWallet.com bị sập, bạn sẽ phải tìm một giải pháp khác (như là geth hoặc Ví Ethereum / Mist) dễ tiếp tục thực hiện giao dịch. Nhưng bạn không cần thiết phải "Mang" Ether của bạn ra khỏi MyEtherWallet bởi vì số Ether đó không nằm trong MyEtherWallet. Bởi vì số Ether đó đang nằm trong Ví Ethereum được khởi tạo thông qua trang của chúng tôi. ',
HELP_8_Desc_3               : 'Bạn chỉ cần bỏ tập tin chứa định dạng mã hoá Private key của bạn vào và Geth/Mist sẽ tự động giải mã tập tin (mã hoá) trực tiếp bên trong  geth / Ví Ethereum / Mist một cách dễ dàng. Xem câu hỏi #12. ',
HELP_8_Desc_4               : 'Ngoài ra, Khả năng xảy ra vấn đề trang MyEtherWallet bị sập là rất khó. Cũng như việc chúng tôi không lưu trữ lại bất cứ dữ liệu gì vì vậy giá trị của nó sở hữu hoàn toàn bằng không. Nếu chúng tôi buộc phải  tháo tên miền này xuống, thì toàn bộ sẽ vẫn còn, tồn tại và công khai trên trang  [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Bạn có thể tải tập tin nén của nó và chạy nó trực tiếp trên máy tính của bạn. ',

HELP_8CX_Title              : '8) Những gì sẽ xảy ra néu MyEtherWallet CX hoàn toàn biến mất? ',
HELP_8CX_Desc_1             : 'Trước tiên, Toàn bộ dữ liệu đã được lưu trên máy tính của bạn, Chứ không phải ở máy chủ của chúng tôi. Chúng tôi biết rằng bạn sẽ dễ nhầm lẫn, nhưng khi bạn nhìn vào kho tiện ích của Chrome, bạn sẽ không tìm thấy được những gì hiện đang được lưu trên máy chủ của chúng tôi - Bởi vì toàn bộ đều được lưu trên chính máy tính của bạn. ',
HELP_8CX_Desc_2             : 'Điều đó cho thấy tầm **quan trọng** đối với việc sao lưu toàn bộ thông tin và dữ liệu Ví mới được khởi tạo từ bạn tại trang MyEtherWallet CX. Và việc sao lưu dữ liệu là cách dự phòng tốt khi những vấn đề xấu có thể xảy ra đối với MyEtherWallet CX hoặc máy tính của bạn, và nó giúp bạn có toàn bộ thông tin cần thiết dễ bạn có thể truy cập vào Ví và quản lý được số Ether của bạn. xem lại phần #2a dễ rõ hơn về cách sao lưu dữ liệu. ',
HELP_8CX_Desc_3             : 'Nếu vì một lý do bất kì buộc MyEtherWallet CX không tồn tại trên kho tiện ích của Chrome, bạn có thể tìm thấy mã nguồn trên Github và tải về máy của bạn. Xem phần #5 ở trên. ',

HELP_9_Title                : '9) Có phải trang "Gửi Ether" là trang offline? ',
HELP_9_Desc_1               : 'Không. Nó cần kết nối internet dễ xác định được giá Gas hiện tại, nonce của tài khoản, và phát tán các dữ liệu dễ xác thực các giao dịch (không "gửi" nó đi). Tuy nhiên, nó chỉ gửi đi khi giao dịch của bạn được ký từ chính bạn. Private key của bạn hoàn toàn an toàn từ bạn. hiện nay, chúng tôi có hỗ trợ thêm chức năng "Giao dịch Offline" dễ bạn có thể đảm bảo Private key của bạn đang trong tình trạng offline/airgapped của máy tính trong bất cứ lúc nào. ',

HELP_10_Title               : '10) Làm thế nào dễ tạo giao dịch Offline? ',
HELP_10_Desc_1              : 'Đi đến trang "Giao dịch Offline" thông qua máy tính đang online. ',
HELP_10_Desc_2              : 'Điền vào "Địa chỉ gửi". Lưu ý, đây là địa chỉ mà bạn dùng dễ gửi, không phải là địa chỉ đến. và nó sẽ khởi tạo nonce và xác định giá Gas hiện tại. ',
HELP_10_Desc_3              : 'Sau đó, chuyển đến máy tính Offline của bạn. Điền vào "Địa chỉ đến" và "Số cần gửi" mà bạn muốn gửi đi. ',
HELP_10_Desc_4              : 'Điền vào "Giá Gas" được hiển thị trên máy tính online của bạn ở bước #1. ',
HELP_10_Desc_5              : 'Điền vào "NONCE" được hiển thị trên máy tính online của bạn ở bước #1. ',
HELP_10_Desc_6              : 'Sau đó "Giới hạn GAS" sẽ được mặc định với số gas là 21000. Điều này sẽ khởi tạo một giao dịch thông thường. Nếu bạn gửi đi một hợp đồng hoặc bổ sung thêm dữ liệu vối với giao dịch của bạn, bạn cần phải tăng lên số Giới hạn gas và bất kì gas dư thừa sẽ được hoàn trả lại cho bạn. ',
HELP_10_Desc_7              : 'Nếu bạn muốn, Thêm vào một số dữ liệu. Nếu bạn điền dữ liệu vào, bạn sẽ cần số Giới hạn gas nhiều hơn số 21000 được mạc định ban đầu. Tất cả dữ liệu đều ở định dạng HEX . ',
HELP_10_Desc_8              : 'Chọn tập tin Ví của bạn -hoặc- Private key của bạn dễ mở khoá Ví. ',
HELP_10_Desc_9              : 'nhấn vào nút "Khởi tạo Chữ Ký cho giao dịch". ',
HELP_10_Desc_10             : 'Các trường dữ liệu phía dưới nút này sẽ dùng dễ chứng thực chữ ký cho giao dịch của bạn. Cóp hết đoạn dữ liệu này và chuyển đến máy tính online của bạn. ',
HELP_10_Desc_11             : 'Trên máy tính online của bạn, bạn hãy dán chữ ký giao dịch vào khung điền văn bản tại bước #3 và chọn nút "Gửi Ether". Việc làm này sẽ phát sóng đi giao dịch của bạn. ',

HELP_12_Title               : '12) Làm thế nào dễ tôi sử dụng Ví được khởi tạo từ MyEtherWallet trên geth / Ví Ethereum / Mist? ',
HELP_12_Desc_1              : 'Bạn phải sử dụng tập tin chứa định dạng JSON dành cho Geth/Mist từ MyEtherWallet v2+.... ',
HELP_12_Desc_2              : 'Đi đến trang "Xem Thông Tin Ví". ',
HELP_12_Desc_3              : 'Mở khoá Ví và sử dụng định dạng **mã hoá** private key của bạn hoặc tập tin chứa định dạng JSON. ',
HELP_12_Desc_4              : 'Đi đến trang "Ví Của Tôi". ',
HELP_12_Desc_5              : 'Chọn Ví mà bạn muốn dùng dễ sử dụng trên Mist, chon vào biểu tượng "Xem", Điền mật khẩu của bạn, và đăng nhập vào Ví của bạn. ',
HELP_12_Desc_6              : 'Tìm phần "Tải về định dạng JSON - định dạng Geth/Mist (Mã hoá)". Nhấn vào nút "Tải về máy" nằm phía dưới. Bây giờ bạn đã sở hữu định dạng Keystone. ',
HELP_12_Desc_7              : 'Truy cập Ví trên ứng dụng Ví Ethereum. ',
HELP_12_Desc_8              : 'Tại thanh Menu, bạn chọn như sau "Accounts" -> "Backup" -> "Accounts" ',
HELP_12_Desc_9              : 'Bạn sẽ mở thư mục keystore của bạn ra. Sao chép tập tin mà bạn đã tải về máy (`UTC--2016-04-14......../`) vào trong thư mục keystone. ',
HELP_12_Desc_10             : 'Tài khoản của bạn sẽ hiển thị ngay dưới phần "Accounts." ',
HELP_12_Desc_11             : 'Sử dụng Private key không mã hóa của bạn... ',
HELP_12_Desc_12             : 'Nếu bạn chưa sở hữu private key không mã hoá , hãy đi đến trang "Xem thông tin Ví". ',
HELP_12_Desc_13             : 'Chọn tập tin Ví của bạn -hoặc- Private key của bạn dễ mở khoá Ví. ',
HELP_12_Desc_14             : 'Sao chép Private Key (không mã hoá) của bạn. ',
HELP_12_Desc_15             : 'Nếu bạn sử dụng máy MAC: ',
HELP_12_Desc_15b            : 'Nếu bạn sử dụng máy PC: ',
HELP_12_Desc_16             : 'Mở phần Text Edit và dán private key này vào. ',
HELP_12_Desc_17             : 'Tại thanh menu bạn hãy chọn "Format" -> "Make Plain Text". ',
HELP_12_Desc_18             : 'Lưu tập tin này trên `desktop/` của bạn như `nothing_special_delete_me.txt`. chắc chắn rằng nó được khai báo "UTF-8" và " Nếu không có phần mở rộng được cung cấp sử dụng .text" và lưu vào dialog. ',
HELP_12_Desc_19             : 'Mở terminal và dùng câu lệnh như sau: `geth account import ~/Desktop/nothing_special_delete_me.txt` ',
HELP_12_Desc_20             : 'Việc này sẽ yêu cầu bạn thực hiện một mật khẩu mới. Và nó sẽ là mật khẩu mà bạn sử dụng tại geth / Ví Ethereum / Mist . Lưu ý, Bạn phải ghi nhớ mật khẩu này. ',
HELP_12_Desc_21             : 'Sau khi hoàn thành việc nhập Ví trên ứng dụng, bạn nên xoá tập tin `nothing_special_delete_me.txt` ',
HELP_12_Desc_22             : 'Trong lần sử dụng ứng dụng Ví Ethereum sau này, Tài khoản của bạn sẽ tự đọng liên kết và hiển thị dưới phần "Accounts". ',
HELP_12_Desc_23             : 'Mở mục Notepad & dán private key vào ',
HELP_12_Desc_24             : 'Lưu tập tin lại với tên như sau `nothing_special_delete_me.txt` tại ổ đĩa `C:` ',
HELP_12_Desc_25             : 'Sử dụng câu lệnh, `geth account import C:\\nothing_special_delete_me.txt` ',
HELP_12_Desc_26             : 'Việc này sẽ yêu cầu bạn thực hiện một mật khẩu mới. Và nó sẽ là mật khẩu mà bạn sử dụng tại geth / Ví Ethereum / Mist . Lưu ý, Bạn phải ghi nhớ mật khẩu này. ',
HELP_12_Desc_27             : 'Sau khi hoàn thành việc nhập Ví trên ứng dụng, bạn nên xoá tập tin `nothing_special_delete_me.txt` ',
HELP_12_Desc_28             : 'Trong lần sử dụng ứng dụng Ví Ethereum sau này, Tài khoản của bạn sẽ tự đọng liên kết và hiển thị dưới phần "Accounts". ',

HELP_13_Title               : '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean? ',
HELP_13_Desc_1              : 'This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction. ',

HELP_14_Title               : '14) Một số trang khi khởi tạo Private key thông qua việc di chuyển con trỏ chuột máy tính trên màn hình. MyEtherWallet.com không làm theo cách này. Các ký tự Private key được tạo ra trên trang MyEtherWallet một cách an toàn nhất? ',
HELP_14_Desc_1              : 'Mặc dù chúng tôi hiểu với việc di chuyển chuột xung quanh màn hình như vậy sẽ khá thú vị, nhưng thực tế window.crypto sẽ đảm bảo việc tạo ra những "dữ liệu ngẫu nhiên" hơn đối với việc di chuyển chuột. Việc di chuyển chuột như vậy không phải là không an toàn, nhưng thông qua rất nhiều những thử nghiệm về mật mã khác thì chúng tôi hoàn toàn tin tưởng vào window.crypto. Ngoài ra, MyEtherWallet.com còn được sử dụng trên những thiết bị cảm ứng. Đây là [Cuộc tranh cải tức giận giữa một redditor và Vitalik Buterin Liên quan đến vấn đề Di chuyển con chuột với window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ',

HELP_15_Title               : '15) Vì sao tài khoản của tôi vừa tạo lại không tồn tại trên Blockchain Explorer? (bao gồm: etherchain, etherscan) ',
HELP_15_Desc_1              : 'Tài khoản của bạn chỉ tồn tại duy nhất trên một Blockchain Explorer và tài khoản được kích hoạt khi bởi chính nó khi bạn dùng tài khoản đó và chuyển Ether vào tức khắc tài khoản sử dụng sẽ hiển thị trên hệ thống Blockchain Explorer thích hợp. ',

HELP_16_Title               : '16) Làm thế nào dễ kiễm tra số dư hiện tại của tài khoản? ',
HELP_16_Desc_1              : 'Bạn có thể sử dụng Blockchain Explorer dễ kiễm tra, Ví dụ: [etherscan.io](http://etherscan.io/). Dán địa chỉ của bạn vào khung tìm kiếm và nó sẽ hiển thị tài khoản của bạn và toạn bộ lịch sữ giao dịch đã thực hiện đối với địa chỉ này. Ví Dụ: Đây là địa chỉ của chúng tôi [donation account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) được trông thấy trên etherscan.io ',

HELP_17_Title               : '17) Tại sao số dư tài khoản của tôi không hiển thị khi tôi truy cập vào tài khoản? ',
HELP_17_Desc_1              : 'Vấn đề này rất có thể xảy ra nếu như máy tính của bạn đang kích hoạt tường lửa. Các API mà chúng tôi sử dụng nhằm tải xuống số Dư của hiện có của tài khoản và chuyển đổi số dư thường bị chặn bởi tường lửa bởi bất kì lý do nào. Nhưng bạn vẫn có thể gửi đi các giao dịch và bạn chỉ cần sử dụng một phương pháp khác dễ kiễm tra số dư của bạn hiện tại trước và sau khi giao dịch được thực hiện, ví dụ: etherscan.io ',

HELP_18_Title               : '18) Tập tin chứa định dạng Geth của ví tôi nằm ở đâu? ',

HELP_19_Title               : '19) Tập tin chứa dịnh dạng Mist của ví tôi nằm ở đâu? ',
HELP_19_Desc_1              : 'Tập tin chứa định dạng dành cho Ví mist nằm ở mục the file locations phía trên, nó rất đễ dàng dễ mở Mist, Chọn "Accounts" hàng đầu tiên của thanh công cụ, chọn "Backup", và chọn "Accounts". Nó sẽ mở ra thư mục hiện tại đang lưu trữ tập tin định dạng Ví của bạn. ',

HELP_20_Title               : '20) Tập tin Pre-sale cho Ví của tôi nằm ở đâu? ',
HELP_20_Desc_1              : 'Cho dù bạn lưu trữ nó ở đâu. ;) nó cũng đều được gửi đến email của bạn, vì vậy hãy kiễm tra email. Kiếm tập tin mang tên `"ethereum_wallet_backup.json"` và sau đó chọn tập tin này. Tập tin Ví này thường đc mã hoá bởi một mật khẩu khi bạn khởi tạo nó trong lúc bạn thanh toán trong thời gian pre-sale. ',

HELP_21_Title               : '21) có thể xảy ra trường hợp có một cá nhân nào đó sử dụng ngẫu nhiên một Private key dễ thấy được số dư tài khoản của một người khác và chuyển số Ether đó vào địa chỉ mà cá nhân dó sở hữu hay không? ',
HELP_21_Desc_1              : 'Đối với phiên bản ngắn: Điều đó có thể xảy ra, nhưng việc chọn ngẫu nhiên dễ nhằm tìm kiếm một tài khoản chứa Ether là một việc làm mất rất nhiều thời gian và cũng có thể mất cả vài chục năm dễ đạt được mục đích đó. bởi vậy trường hợp này được coi là rất khó dễ xảy ra. ',
HELP_21_Desc_2              : 'Phiên bản dài ELI5: Bởi vậy Ethereum được dựa trên [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), Đặc biệt là [Mật mã đường cong Elliptic](https://eprint.iacr.org/2013/734.pdf) Được sử dụng rất rộng rãi, không chỉ duy nhất ở Ethereum. Hầu hết các Server được bảo vệ thông qua ECC. Bitcoin cũng tương tự, cũng giống như SSH và TLS và rất nhiều thứ khác. Mã khoá của Ethereum cụ thể bao gồm 256-bit ký tự, Đoạn mã đó dài và khó đoán hơn đoạn mã 128-bit và 192-bit, mặc dù 128-bit và 192-bit hiện cũng được dùng khá rộng rãi và vẫn được nhận định là rất bảo mật từ các chuyên gia. ',
HELP_21_Desc_3              : 'Tại đây bạn đang sở hữu private key và public key. private key có thể dùng thay thế cho public key, nhưng public key không thể dùng nhằm thay thế và dùng dễ phục hồi lại private key. Thực tế trên internet và các dữ liệu cần được bảo mật của thế giới đang sử dụng loại mật mã học này, có nghĩa nếu một cách nào đó nhằm dùng public key dễ phục hồi lại private key, Thì lượng Ether mà bạn bị đánh cắp nó không phải là vấn đề lớn so với nhiều vấn đề mang tính quan trọng rất lớn của những tổ chức tài chính và chính phủ trên toàn cầu. ',
HELP_21_Desc_4              : 'Hiện tại chỉ khẳng định rằng nếu ai đó sở hữu được Private key của bạn thì thực sự họ mới có khả năng chuyển số Ether trong tài khoản của bạn đi được. Giống như nếu ai đó có được mật khẩu email của bạn, họ có thể đọc và gửi email, hoặc mật khẩu tài khoản ngân hàng của bạn, họ mới có thể đánh cắp tiền của bạn đi được. Bạn có thể tải về định dạng Keystore bởi vì nó là định dạng đã mã hoá dữ liệu từ Private key của bạn cùng với mật khẩu giải mã khác. Trường hợp này giống như hiện tại bạn đang có một mật khẩu A nhưng được bảo vệ bởi một mật khẩu B khác và nó giúp tài khoản của bạn càng khó bị đánh mất hơn. ',
HELP_21_Desc_5              : 'Vẫn có thẻ xảy ra, theo lý thuyết thì bạn sẽ sử dụng một chuỗi gồn 64 ký tự cho đến khi bạn nhận được một kết quả đúng. Thực tế, một cá nhân thông minh có thể lập trình lên một chương trình rà kết quả đúng với Private key của bạn một cách nhanh chóng. Trường hợp này giống như "brute-forcing" hoặc "mining" private keys. Nhưng viêc làm này vẫn mất rất nhièu thời gian và rất khó. Cùng với một hệ thống Server công nghệ cao, họ có khả năng dò ngẫu nhiên 1 triệu ký tự / giây. Tuy nhiên, Việc kiễm tra ngẩu nghiên này nhằm mang lại quyền đột nhập vào tài khoản của bạn sẽ phải mất một lượng chi phí rất cao đễ duy trì hệ thống Server của họ - và dễ rà soát cho đến khi hoàn toàn chính xác được Private key của bạn thì có lẽ cá nhân đó đã già vì phải mất cả gần trăm năm dễ cho ra kết quả chính xác. ',
HELP_21_Desc_6              : 'Nếu bạn hiểu toàn bộ về Bitcoin, [Điều này có thể xem qua tại:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *Nhằm làm rõ cho việc: Cho rằng mỗi satoshi của mỗi bitcoin từng được tạo ra đã gửi đến nó những private key được nó sở hữu mà không có trường hợp khác thay thế. Xác xuất dễ có một mã khoá bị trùng lặp tại hai địa chỉ khác nhau là một trong 100 quintillion, bởi vậy được coi là hoàn toàn không thể. ',
HELP_21_Desc_7              : '[Nếu bạn cần một phương pháp bảo mật cao hơn có thể tham khảo:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *Đối với đoạn mã của Private thì hầu như những công nghệ tiên tiến trên máy tính của bạn chỉ là vô nghĩa, vì khi người nào đó muốn dò ngẫu nhiên nó thì họ không cần thiết phải tấn công vào thiết bị của bạn. Nhưng đối với một mã khoá 265-bit sẽ bất khả thi đối với việc làm trên trừ khi máy tính của họ được xây dựng bởi một cái gì đó khác biệt và cực kì tiên tiến thì mới rà được và cho ra kết quả tốt nhất và trường hợp này sẽ cần rất rất nhiều thời gian và những công nghệ đó có lẽ còn phải mất rất nhiều thời gian trong tương lai dễ nghiên cứu . ',
HELP_21_Desc_8              : 'Tất cả những giả đinh trên nhằm xác định rõ đoạn mã được tạo ra một cách hoàn toàn ngẫu nhiên. các mã khoá được tạo ra ở đây đáp ứng các tiêu chí, mà có thể tương tích đc với Jaxx và Mist/Geth. Ví Ethereum là tất cả những gì tuyệt vời nhất. Keys generated by brainwallets do not, as a person\'s brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that\'s a separate issue that can wait for another day. ',

HELP_SecCX_Title            : 'Bảo mật - MyEtherWallet CX ',
HELP_SecCX_Desc_1           : 'Những thông tin dữ liệu được kho tiện ích lưu trữ ở đâu? ',
HELP_SecCX_Desc_2           : 'Các thông tin dữ liệu được lưu trữ tại kho tiện ích của trình duyệt Chrome thông qua [chrome.storage](http://chrome.storage/). - Đây cũng là nơi mà mật khẩu của bạn được lưu trữ khi bạn chọn cài đặt lưu lại mật khẩu ở trình duyệt Chrome. ',
HELP_SecCX_Desc_3           : 'Những loại thông tin nào sẽ được lưu trữ? ',
HELP_SecCX_Desc_4           : 'Địa chỉ, tên gọi và Private key sẽ được lưu trữ tại chrome.storage. Private key sẽ được mã hoá và sử dụng mật khẩu mà bạn thiết lập trong lúc bạn đang thực hiện thêm Ví nhưng địa chỉ Ví và tên Ví thì không bị mã hoá. ',
HELP_SecCX_Desc_5           : 'Vì sao địa chỉ và tên gọi lại không cần thiết mã hoá? ',
HELP_SecCX_Desc_6           : 'Nếu chúng tôi mã hoá chúng, thì bạn phải điền mật khẩu khi bạn muốn xem số dư hiện tại của tài khoản bạn và xem tên gọi của tài khoản đó. Nếu như bạn cảm thấy đáp ứng nhu cầu bạn đã nêu, Chúng tôi cung cấp thêm lựa chọn khác dành cho bạn đó là MyEtherWallet.com thay vì phải sử dụng Chrome Extension. ',

HELP_Sec_Title              : 'Bảo Mật ',
HELP_Sec_Desc_1             : 'Nếu câu hỏi đầu tiên mà bạn đặt ra đó là "Vì sao tôi phải tin vào những người tạo ra trang này?", thì đó là một câu hỏi tốt. Hi vọng rằng những thông tin sau đây sẽ làm giảm bớt sự lo ngại từ phía bạn. ',
HELP_Sec_Desc_2             : 'Chúng tôi đã bất đầu đưa trang của chúng tôi ra thị trường vào tháng 8 năm 2015. Nếu bạn tìm kiếm trên nguồn ["myetherwallet" tại reddit](https://www.reddit.com/search?q=myetherwallet), bạn sẽ thấy được lượng người hiện tại đang sử dụng và sự thành công của trang myetherwallet. ',
HELP_Sec_Desc_3             : 'Chúng tôi không dùng trang này nhằm mục đích sử dụng tiền của bạn hoặc đánh cắp các Private key của bạn. Và trên trang của chúng tôi hoàn toàn không xuất hiện mã độc. Trong thực tế tại trang "Tạo Ví" là hoàn toàn được thực hiện từ người sử dụng. Việc này có nghĩa tất cả các đoạn mã và mật khẩu sẽ được thực hiện hoàn toàn trên **Máy tính cá nhân của bạn** và nó hoàn toàn không lưu lại hoặc chuyển đi bất cứ một dữ liệu nào ra khỏi máy tính của bạn. ',
HELP_Sec_Desc_4             : 'Hãy kiễm tra URL -- Trang của chúng tôi được cung cấp thông qua Github và bạn có thể kiễm tra lại toàn bộ mã nguồn ở đây: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) đến các tên miền: [https://www.myetherwallet.com](https://www.myetherwallet.com). ',
HELP_Sec_Desc_5             : 'Đối với việc khởi tạo Ví, bạn có thể tải về [Mã nguồn](https://github.com/kvhnuke/etherwallet/releases/latest). Xem phần #5 phía trên. ',
HELP_Sec_Desc_6             : 'Bạn hãy cho chạy thử đễ kiễm tra lại toàn bộ hoạt động của nó. Cách đơn giản nhất đễ bạn kiễm tra là nhấn chuột phải vào trang của chúng tôi vào chọn mục "inspect element". đi đến mục "Network". Khởi tạo thử một Ví. Lúc này bạn sẽ thấy được các hoạt động của hệ thống sẽ diễn ra như thế nào. Bạn sẽ thấy được dữ liệu sau: image/gif và image/png. Nó chính là mã QR đã được khởi tạo...trên máy tính của bạn. Và không có một dung lượng dữ liệu nào được chuyển ra khỏi máy của bạn. ',
HELP_Sec_Desc_8             : 'Nếu bạn cảm thấy không an tâm khi sử dụng công cụ của chúng tôi, bạn có quyền không sử dụng nó. Chúng tôi tạo ra ứng dụng này nhằm giúp người sử dụng dễ dàng tạo Ví mới và lập giao dịch mà không cần dùng đến những câu lệnh trên Terminal hoặc tải về đầy đủ các node. Một lần nữa xin nhắc lại, bạn hoàn toàn có thể ngưng sử dụng và báo lại với chúng tôi nếu bạn có một mối quan ngại nào đó, chúng tôi sẽ chịu trách nhiệm chỉnh sửa hoặc giải đáp thắc mắc từ nơi bạn một cách sớm nhất có thể. Xin Chân Thành Cảm Ơn! ',

HELP_FAQ_Title              : 'Lời giãi đáp cho những câu hỏi thường gặp: ',
HELP_Contact_Title          : 'Những cách đễ liên lạc với chúng tôi:'
};

module.exports = vi;
