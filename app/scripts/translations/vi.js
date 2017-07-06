// Vietnamese
'use strict';
var vi = function() {}
vi.code = 'vi';
vi.data = {

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
WALL_Add               : 'Thêm Ví ',
BULK_Generate            : 'Tạo Nhiều Ví ',
x_Contact                 : 'Liên Hệ ',
CONTRACT_Title               : 'Hợp Đồng ',
CONTRACT_Deploy          : 'Phát Triển Hợp Đồng ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Tạo Ví ',
x_Help                    : 'Trợ Giúp ',
CONTRACT_Interact        : 'Interact with Contract ',
CONTRACT_Multisig                : 'Multisig ',
WALL_walletViewCX               : 'Ví Của Tôi ',
x_Offline                 : 'Giao Dịch Offline ',
TX_Send_Title             : 'Gửi Ether và Tokens ',
TX_Send_ShortTokens              : 'Gửi Token ',
MSG_Sign                 : 'Sign Message ',
SWAP_Title                    : 'Swap ',
WALL_View              : 'Thông Tin Ví ',
WALL_Your             : 'Ví Của Bạn ',

/* General */
x_Access                    : 'Access ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Bạn có thể xem đây là Địa chỉ ví cá nhân của bạn. Bạn có thể gửi "Địa chỉ ví" này đến người mà bạn muốn nhận ETH từ họ. Biểu tượng bên cạnh giúp việc nhận dạng "Địa chỉ ví" của bạn dễ dàng hơn. ',
ADDR_                   : 'Địa Chỉ Của Bạn ',
x_Cancel                    : 'Huỷ ',
x_CSV                       : 'Định Dạng CSV (Không mã hoá) ',
x_Download                  : 'Tải Về Máy ',
x_Json                      : 'Định Dạng JSON (Không mã hoá) ',
x_JsonDesc                  : 'Định Dạng JSON là một tập tin chứa dữ liệu ví chưa được mã hoá của Private Key. Bạn có thể đăng nhập vào ví của bạn bằng việc sử dụng định dạng JSON mà không cần đến mật khẩu. Vì vậy, bất kỳ người nào sở hữu định dạng  JSON của bạn thì họ đều có khả năng đăng nhập vào ví của bạn mà không cần đến mật khẩu. ',
x_Keystore                  : 'Định Dạng Keystore (UTC / JSON) (Đã mã hoá. Định Dạng này sử dụng cho Mist) ',
x_Keystore2                 : 'Định Dạng Keystore (UTC / JSON) ',
x_KeystoreDesc              : 'Định dạng Keystore là tập một tin chứa dữ liệu ví đã được mã hoá của Private Key và sử dụng cho Mist. Do đó bạn có thể dễ dàng bỏ nó vào bên trong Mist và tiếp tục sử dụng ví của bạn. Đây là một tập tin được đề xuất nhằm sao lưu dữ liệu ví cá nhân. ',
x_Mnemonic                  : 'Cụm từ dễ nhớ ',
x_ParityPhrase              : 'Parity Phrase ',
PW_                  : 'Mật Khẩu ',
x_Print                     : 'Tạo Ví Giấy ',
x_PrintDesc                 : 'Mẹo: kích chuột trái vào nút "In Ví" sau đó chọn "Save this as a PDF" đễ lưu nó thành định dạng PDF trên máy tính của bạn nếu bạn không sở hữu máy in cá nhân! ',
x_PrintShort                : 'In Ví ',
x_PrivKey                   : 'Private Key (Không mã hoá) ',
x_PrivKey2                  : 'Private Key ',
x_PrivKeyDesc               : 'Đây là một đoạn dữ liệu có định dạng bằng văn bản không bị mã hoá và nó chính là private key của bạn. Nếu người nào sở hữu Private Key của bạn thì họ có thể truy cập vào ví của bạn mà không cần đến mật khẩu. Vì vậy, Chúng tôi khuyên bạn nên dùng phiên bản có định dạng đã được mã hoá. ',
x_Save                      : 'Lưu ',
x_TXT                       : 'Định Dạng TXT (Không mã Hoá) ',
WALL_                    : 'Ví ',

/* Header */
WARN_01               : 'Chú Ý! kiễm tra cẩn thận URL trước khi bạn muốn đăng nhập vào ví hoặc tạo một ví mới. Cảnh giác cao đối với những trang web lừa đảo! ',
WARN_04                : 'Hãy chắc chắn rằng bạn đã thực hiện việc sao lưu dữ liệu cho những ví bạn đang sử dụng tại đây. Nhiều khả năng có thể xảy ra sẽ dẩn đến việc mất đi dữ liệu mà bạn lưu tại phần mở rộng của Chrome (bao gồm việc gỡ bỏ cài đặt và cài đặt lại các phần mở rộng). Phần mở rộng này là cách dễ dàng đễ truy cập vào ví của bạn, nhưng nó không phải là nơi đễ bạn sao lưu dữ liệu. ',
FOOTER_Tagline                 : 'Open Source JavaScript Client-Side Ether Wallet ',
CX_Tagline                  : 'Open Source JavaScript Client-Side Ether Wallet Chrome Extension ',

/* Footer */
FOOTER_1                    : 'Free, open-source, client-side tool for easily &amp; securely interacting with the Ethereum blockchain. ',
FOOTER_1b                   : 'Nhà Phát Triển: ',
FOOTER_2                    : 'Quyên Góp & Ủng Hộ Vào "Quỹ Phát Triển" Từ Bạn Là Một Hành Động Đáng Trân Trọng: ',
FOOTER_3                    : 'Client-side wallet generation by ',
FOOTER_4                    : 'Những Điều Cần Lưu Ý ',

/* Sidebar */
ACCOUNT_Info         : 'Thông Tin Tài Khoản ',
ACCOUNT_Address         : 'Địa Chỉ Tài Khoản ',
ACCOUNT_Balance          : 'Số Dư Tài Khoản ',
TOKEN_Balance            : 'Số Dư Token ',
SIDEBAR_Equiv               : 'Giá Trị Tương Đương ',
TX_History        : 'Lịch Sử Giao Dịch ',
SIDEBAR_donation            : 'MyEtherWallet là một ứng dụng miễn phí được xây dựng trên mã nguồn mở nhằm bảo vệ quyền riêng tư và sự bảo mật của người sử dụng. các khoản quyên góp mà chúng tôi nhận được sẽ giúp chúng tôi có cơ hội dành nhiều thơi gian hơn cho việc lắng nghe những phản hồi từ người sử dụng nhằm tạo ra những ứng dụng mới nhằm đáp ứng những mong muốn từ người sử dụng. Chúng tôi hiện tại là hai cá nhân đang cố gắng làm cho thế giới ngày một tốt hơn. Hãy cùng chung giúp chúng tôi ',
SIDEBAR_donate              : 'Quyên Góp ',
SIDEBAR_thanks              : 'Xin Chân Thành Cảm Ơn!!! ',

/* Decrypt Panel */
DECRYPT_Access              : 'Làm thế nào đễ truy cập vào ví của bạn? ',
DECRYPT_Title               : 'Chọn Loại Định Dạng Private Key Thích Hợp: ',
WALL_Select              : 'Chọn ví: ',

/* Add Wallet */
DECRYPT_Label_1                 : 'Bạn đang cần làm gì? ',
WALL_GenerateNew                 : 'Tạo Ví Mới ',
DECRYPT_Radio_2                 : 'Chọn Tập Tin Ví Của Bạn (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : 'Chọn Tập Tin Ví Của Bạn ',
DECRYPT_Radio_2_short           : 'CHỌN TẬP TIN VÍ... ',
DECRYPT_Radio_3                 : 'Dán/Gõ Private Key Ví Của Bạn ',
ACCOUNT_AddWatch                 : 'Thêm Tài Khoản đễ Theo Dõi ',
MNEM_Enter                 : 'Dán/Điền ký tự dễ nhớ của bạn ',
MNEM_Enter_Path            : 'Select HD derivation path ',
MNEM_Enter_PathCustom      : 'Custom',
DECRYPT_Label_2                 : 'Tạo Tên Gọi: ',
DECRYPT_Label_3                 : 'Ví của bạn sẽ được giải mã. Xin vui lòng điền mật khẩu ',
DECRYPT_Label_4                 : 'Thêm Tài Khoản đễ Theo Dõi ',
WARN_03               : 'Bạn có thể thêm bất kỳ tài khoản nào bạn muốn theo dõi trên ví mà không cần đến Mật khẩu bảo mật. Việc này không có nghĩa là bạn đã truy cập vào bên trong ví. Do đó bạn sẽ không thực hiện được giao dịch tại chức năng này. ',
DECRYPT_Label_5                 : 'Điền Địa Chỉ Ví ',
WALL_Unlock                 : 'Mở Khoá Cho Ví Của Bạn ',
WALL_Unlock_Short           : 'Mở Khoá ',
ACCOUNT_Add                 : 'Thêm Tài Khoản ',

/* Generate Wallets */
GEN_desc                    : 'Nếu bạn muốn tạo nhiều ví cùng một lúc, bạn có thể thực hiện tại đây ',
PW_Enter                 : 'Tạo mật khẩu thật mạnh nhằm bảo mật tài khoản (ít nhất 9 ký tự) ',
PW_Enter           : 'Lưu nó lại một cách cẩn thận! ',
GEN_SuccessMsg              : 'Ví của bạn đã được tạo thành công. ',
x_Keystore_Save                 : 'Lưu lại tập tin chứa định dạng Keystore/JSON hoặc Private Key. Đừng quên mật khẩu mà bạn đã tạo phía trên. ',
ADDR_Save                 : 'Địa Chỉ Ví (bạn cần lưu lại cho việc sử dụng). ',
GEN_Label_4                 : 'Bạn có thể in ví giấy hoặc lưu giữ mã QR một cách cẩn thận. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Số Lượng Ví Cần Tạo ',
BULK_Label_2                : 'Tạo Ví ',
BULK_SuccessMsg             : 'Ví của bạn đã được tạo thành công. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'Địa Chỉ Đến ',
x_Amount                 : 'Số Lượng Cần Gửi ',
x_Amount_short           : 'Số Lượng ',
TOKEN_AddCustom                 : 'Token được yêu cầu! ',
x_GasLimit                    : 'Gas ',
TX_Send_All          : 'Gửi Hết Số Dư Hiện Có ',
TX_Generate               : 'Tạo Giao Dịch ',
TX_Unsigned                    : 'Định Dạng Giao Dịch ',
TX_Signed                 : 'Chữ Ký Giao Dich ',
TX_Send_Short                  : 'Gửi Đi ',
SENDModal_Title             : 'Cảnh Báo! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Bạn muốn gửi đi ',
SENDModal_Content_2         : 'Địa chỉ đến ',
SENDModal_Content_3         : 'Bạn đã chắc chắn muốn thực hiện giao dịch này ',
SENDModal_Content_4         : 'Lưu Ý: Nếu bạn gặp lỗi, bạn cần phải thêm ether vào tài khoản của bạn để thanh toán chi phí gas của việc gửi Token. Gas được thanh toán bằng ether. ',
SENDModal_No                : 'Không, Đưa tôi ra khỏi đây! ',
SENDModal_Yes               : 'Có, Tôi chắc chắn! Hãy thực hiện giao dịch. ',

/* Tokens */
ADDR_Short                  : 'Địa Chỉ ',
TOKEN_Symbol                : 'Ký Hiệu Token ',
TOKEN_Dec                   : 'Phân Số Thập Phân ',
TOKEN_show                  : 'Hiển thị tất cả các loại Tokens ',
TOKEN_hide                  : 'Ẩn Tokens ',

/* Send Transaction */
TX_desc                  : 'Nếu bạn muốn gửi Token, xin vui lòng sử dụng danh mục "Gửi Token". ',
TX_warning               : 'Nếu bạn sử dụng chức năng "Chỉ ETH" hoặc "Chỉ ETC" trong việc gửi đi thông qua một hợp đồng thông minh. Những dịch vụ có chức năng chấp nhận các giao dịch. Đọc Thêm. ',
SEND_Advanced              : 'Nâng Cao: Thêm Dữ Liệu ',
x_Data                  : 'Dữ Liệu: ',
x_GasLimit                   : 'Gas Limit: ',
TX_Send_ShortInfo              : 'Mỗi Giao dịch Phổ Thông sử dụng hết 21000 gas có giá tương đương 0.000441 ETH. Chúng tôi áp dụng giá Gas dành cho một giao dịch cao hơn so với mức tối thiểu là 0.000000021 ETH nhằm đảm bảo một giao dịch được diễn ra nhanh. Chúng tôi hoàn toàn không nhận được khoản tiền phát sinh nào từ phí giao dịch. ',

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
ADDR_From       : 'Địa Chỉ Gửi ',
OFFLINE_Step1_Label_2       : 'Lưu ý: Đây phải là tài khoản gửi, không phải tài khoản đến. Nonce sẽ được tạo ra từ tài khoản có nguồn gốc. Nếu sử dụng máy tính có tình trạng airgapped, thì nó sẽ trở thành địa chỉ của tài khoản lưu trữ lạnh. ',
OFFLINE_Step2_Title         : 'Bước 2: Tạo Giao Dịch (Máy Tính Đang Offline) ',
ADDR_To       : 'Địa Chỉ Đến ',
OFFLINE_Step2_Label_2       : 'Đơn vị / Tổng số gửi: ',
x_GasPrice                  : 'Giá Gas ',
x_GasPriceDesc                 : 'Điều này đã được hiển thị ở bước 1 trên máy tính trực tuyến của bạn. ',
x_GasLimit       : 'Giới hạn Gas ',
x_GasLimitDesc      : '21000 măc định sẽ là số gas giới hạn. khi bạn gửi đi một hợp đồng hoặc thêm dữ liệu, việc này sẽ cần phải làm khác đi. Lượng Gas không được sử dụng sẽ hoàn trả cho bạn. ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'Điều này đã được hiển thị ở bước 1 trên máy tính trực tuyến của bạn. ',
x_Data       : 'Dữ Liệu ',
x_DataDesc      : 'Đây là phần tùy chọn. Dữ liệu thường được sử dụng khi bạn gửi các giao dịch hợp đồng. ',
OFFLINE_Step2_Label_7       : 'Nhập / Chọn  Private Key / JSON của bạn. ',
OFFLINE_Step3_Title         : 'Bước 3: Gửi / Làm rõ Giao Dịch (Máy tính đang Online) ',
OFFLINE_Step3_Label_1       : 'Dán chữ ký Giao Dịch được tạo từ Bước 2 vào đây và chọn nút "Thực hiện Giao Dịch". ',

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
MSG_date                    : 'Date ',
MSG_info1                   : 'Include the current date so the signature cannot be reused on a different date. ',
MSG_info2                   : 'Include your nickname and where you use the nickname so someone else cannot use it. ',
MSG_info3                   : 'Include a specific reason for the message so it cannot be reused for a different purpose. ',
MSG_message                 : 'Message ',
MSG_signature               : 'Signature ',
MSG_verify                  : 'Verify Message ',

/* Hardware wallets */
x_Trezor                    : 'TREZOR ',
DECRYPT_Trezor_scan             : 'Connect to TREZOR ',
DECRYPT_Trezor_select           : 'This is a TREZOR seed ',
x_Ledger                    : 'Ledger Nano S ',
DECRYPT_Ledger_1                : 'Kết Nối Với Ledger Nano S Của Bạn ',
DECRYPT_Ledger_2                : 'Mở Lên Ứng Dụng Của Ethereum (Hoặc một ứng dụng của Hợp Đồng) ',
DECRYPT_Ledger_3                : 'Xác nhận lại phần Hổ Trợ dành cho Trình Duyệt đã được kích hoạt trong mục Cài Đặt ',
DECRYPT_Ledger_4                : 'Nếu mục Hổ Trợ dành cho Trình duyệt không tìm thấy trong mục Cài Đặt, Xác nhận lại bạn đã có [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) hay chưa ',
DECRYPT_Ledger_0a               : 'Hảy mở lại trang MyEtherWallet trên một kết nối có tính bảo mật (SSL) ',
DECRYPT_Ledger_0b               : 'Sử dụng [Chrome](https://www.google.com/chrome/browser/desktop/) hoặc [Opera](https://www.opera.com/) Để mở lại trang MyEtherWallet ',
DECRYPT_Ledger_scan             : 'Kết nối với Ledger Nano S ',

/* Deploy Contracts */
CONTRACT_GenBytecode                : 'Tạo Bytecode ',
CONTRACT_GenBytecoded               : 'Bytecode Đã Được Tạo ',
TX_Sign                  : 'Chữ Ký Giao Dịch ',
CONTRACT_GenInterface               : 'Đã Tạo Giao Diện ',

/* My Wallet */
WALL_Nickname                  : 'Tên Gọi Của Ví ',
MYWAL_Address               : 'Địa Chỉ Ví ',
ACCOUNT_Balance                   : 'Số Dư ',
WALL_Edit_Short                  : 'Chỉnh Sửa ',
WALL_View_Short                  : 'Xem ',
WALL_Remove                : 'Gỡ Bỏ ',
WALL_RemoveWal             : 'Gỡ Bỏ Ví: ',
WALL_WatchOnlyAccounts             : 'Tài khoản theo dõi của bạn ',
WALL_Viewing               : 'Xem Ví ',
WALL_Hide                  : 'Ẩn Thông Tin Ví ',
WALL_Edit                : 'Chỉnh Sửa Ví ',
WALL_Name                  : 'Tên Ví ',
WARN_06             : 'Cảnh Báo! Bạn Muốn gỡ bỏ Ví của bạn ',
WARN_07             : 'Hãy chắc chắn bạn đã **Lưu giữ Private Key hoặc Tập Tin chứa định dạng Keystore và mật khẩu** Trước khi bạn gỡ bỏ nó. ',
WARN_08             : 'Nếu bạn muốn sử dụng địa chỉ Ví này với MyEtherWallet CX trong tương lai, bạn sẽ cần phải tự thêm vào lại bằng cách sử dụng tập tin Private Key / JSON và mật khẩu. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Việc này cho phép bạn tải về các phiên bản khác nhau của Private Key và in lại ví giấy của bạn. Bạn có thể muốn làm điều này để [nhập tài khoản của bạn vào Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Nếu bạn muốn kiễm tra số dư của bạn, chúng tôi khuyên bạn sử dụng một blockchain explorer như [etherscan.io] (http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Việc này cho phép bạn tải về các phiên bản khác nhau của Private Key và in lại ví giấy của bạn. ',
VIEWWALLET_SuccessMsg       : 'Đã Thành Công! Đây là thông tin chi tiết về Ví của bạn. ',

/* Mnemonic */
MNEM_1                      : 'Xin vui lòng, Chọn địa chỉ mà bạn muốn tương tác. ',
MNEM_2                      : 'Cụm từ dễ nhớ đó có thể truy nhập vào số địa chỉ Ví của bạn. Vui lòng chọn địa chỉ mà bạn muốn tương tác tại thời điểm này. ',
MNEM_more                   : 'Nhiều địa chỉ ',
MNEM_prev                   : 'Địa chỉ trước đó ',

/* Chrome Extension */
ERROR_CX_01                  : 'Bạn không có bất kỳ ví nào được lưu lại. Chọn Nút ["Thêm Ví"](/cx-wallet.html#add-wallet) để thêm ví! ',
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

SUCCESS_1                   : 'Địa Chỉ Hợp Lệ ',
SUCCESS_2                   : 'Ví đã được giải mã thành công ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ',
SUCCESS_4                   : 'Ví của bạn đã được thêm thành công: ',
SUCCESS_5                   : 'Tập Tin Được Chọn ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
WARN_02              : 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. ',

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

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : 'Chân Thành Cảm Ơn ',
z_TRANSLATE1            : '[Phạm Thế Vũ](https://twitter.com/PhamTheVu3) · ',
z_TRANSLATE2            : '[và Ethereum Vietnam](https://www.ethereumvn.com) & [(Facebook)](https://www.facebook.com/ethereumvietnam)',
z_TRANSLATE3            : '',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''

};

module.exports = vi;
