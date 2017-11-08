// English
'use strict';
var th = function() {}
th.code = 'th';
th.data = {

/* New Generics */
x_CancelReplaceTx           : 'ยกเลิกหรือเปลี่ยนแปลงธุรกรรม',
x_CancelTx                  : 'ยกเลิกธุรกรรม',
x_PasswordDesc              : 'รหัสผ่านนี้ใช้เพื่อ * เข้ารหัส * กุญแจส่วนตัว (Private Key) ของคุณ และไม่ได้ถูกใช้เพื่อเป็นตัวตั้งต้น (Seed) สำหรับสร้างกุญแจส่วนตัวของคุณ **คุณจะต้องใช้รหัสผ่านนี้ + กุญแจส่วนตัว (Private Key) เพื่อปลดล็อกกระเป๋าของคุณ**',
x_ReadMore                  : 'อ่านต่อ',
x_ReplaceTx                 : 'เปลี่ยนแปลงธุรกรรม',
x_TransHash                 : 'ค่าแฮชของธุรกรรม',
x_TXFee                     : 'ค่าธรรมเนียมของ TX',
x_TxHash                    : 'ค่าแฮชของ TX',

/* Check TX Status */
NAV_CheckTxStatus           : 'ตรวจสอบสถานะของ TX',
NAV_TxStatus                : 'สถานะ TX',
tx_Details                  : 'ข้อมูลการทำธุรกรรม',
tx_Summary                  : 'ในขณะที่มีปริมาณการซื้อขายเป็นจำนวนมาก (เช่นช่วง ICO) ธุรกรรมอาจจะอยู่ในระหว่างรอและล่าช้าเป็นชั่วโมงหรือเป็นวัน ดังนั้นคุณสามารถค้นหา และ "ยกเลิก" / เปลี่ยนแปลงธุรกรรม (TX) เหล่านั้นผ่านเครื่องมือนี้ ** โดยปกติแล้วคุณไม่จำเป็นต้องทำหรือเพิ่งพาสิ่งนี้ และมันจะสำเร็จก็ต่อเมื่อ TX Pool นั้นเต็มเท่านั้น [กรุณาอ่านเกี่ยวกับเครื่องมือนี้ได้ที่นี่](https://myetherwallet.github.io/knowledge-base/transactions/check-status-of-ethereum-transaction.html)**',
tx_notFound                 : 'ไม่พบการทำธุรกรรม',
tx_notFound_1               : 'ไม่พบธุรกรรม (TX) นี้จากใน TX Pool ของ Node คุณเชื่อมต่ออยู่',
tx_notFound_2               : 'หากคุณเพิ่งทำธุรกรรมการส่ง, กรุณารอ 15 วินาที และกดปุ่ม "ตรวจสอบสถานะของ TX" อีกครั้ง ',
tx_notFound_3               : 'มันอาจจะอยู่ใน TX Pool ของ Node อื่น ซึ่งกำลังรอการขุด',
tx_notFound_4               : 'กรุณาใช้กล่อง dropdown ที่มุมขวาบน & เลือก ETH Node อื่น (เช่น `ETH (Etherscan.io)` หรือ `ETH (Infura.io)` หรือ `ETH (MyEtherWallet)`) และตรวจสอบอีกครั้ง',
tx_foundInPending           : 'ค้นพบธุรกรรมที่อยู่ในระหว่างรอ',
tx_foundInPending_1         : 'ธุรกรรมของคุณถูกระบุอยู่ใน TX Pool ของ Node เดียวกันกับที่คุณเชื่อมต่ออยู่ ',
tx_foundInPending_2         : 'อยู่ในระหว่างรอ (กำลังรอการขุด) ',
tx_foundInPending_3         : 'มีโอกาสที่คุณสามารถ "ยกเลิก" หรือเปลี่ยนแปลงการทำธุรกรรมนี้ ปลดล็อกกระเป๋าขอบคุณด้านล่าง',
tx_FoundOnChain             : 'ค้นพบธุรกรรม',
tx_FoundOnChain_1           : 'ธุรกรรมของคุณได้รับการขุดสำเร็จแล้ว และอยู่ในบล็อคเชน',
tx_FoundOnChain_2           : '**ถ้าหากพบข้อความผิดพลาด `( ! )` สีแดง, `BAD INSTRUCTION` หรือ `OUT OF GAS`** หมายความว่าการทำธุรกรรม *ส่ง* ไม่สำเร็จ และคุณไม่สามารถยกเลิกหรือเปลี่ยนแปลงธุรกรรมนี้ ให้คุณทำธุรกรรมส่งใหม่ แต่ถ้าหากพบข้อความผิดพลาด "Out of Gas" คุณควรจะเพิ่มแก๊สเป็นสองเท่าจากเดิมที่ระบุตอนแรก',
tx_FoundOnChain_3           : '**ถ้าหากไม่พบข้อความผิดพลาดใดๆ หมายความว่าการทำธุรกรรมของคุณถูกส่งสำเร็จ** ETH หรือ Token ของคุณถูกส่งถึงผู้รับแล้ว ถ้าหากเกิน 24+ ชั่วโมงแล้วคุณยังไม่เห็นจำนวน ETH หรือ Token ถูกโอนเข้ากระเป๋าหรือบัญชีบนเว็บแลกเปลี่ยนปลายทาง, กรุณา [ติดต่อที่นี่](https://myetherwallet.github.io/knowledge-base/diving-deeper/ethereum-list-of-support-and-communities.html) ให้แนบ *ลิงก์* ของการทำธุรกรรมคุณเพื่อสอบถามขอความช่วยเหลือ',

/* Gen Wallet Updates */
GEN_Help_1                  : 'ใช้',
GEN_Help_2                  : 'ของคุณเพื่อเข้าถึงบัญชี',
GEN_Help_3                  : 'ใช้อุปกรณ์ * เป็น * กระเป๋าของคุณ',
GEN_Help_4                  : 'คำแนะนำ & คำถามที่พบบ่อย',
GEN_Help_5                  : 'วิธีการสร้างกระเป๋า',
GEN_Help_6                  : 'เริ่มต้น',
GEN_Help_7                  : 'เก็บไว้ให้ปลอดภัย · สำรองข้อมูล · ไม่แชร์ให้กับผู้อื่น · อย่าทำหาย · ถ้าหากคุณทำหาย มันไม่สามารถถูกกู้คืนกลับมาได้ ',
GEN_Help_8                  : 'ไฟล์ไม่เริ่มดาวน์โหลด? ',
GEN_Help_9                  : 'ลองใช้ Google Chrome ',
GEN_Help_10                 : 'คลิกขวา & บันทึกไฟล์ด้วยชื่อ: ',
GEN_Help_11                 : 'ห้ามเปิดไฟล์นี้บนเครื่องคอมพิวเตอร์ของคุณ ',
GEN_Help_12                 : 'ใช้เพื่อปลดล็อกกระเป๋าของคุณผ่าน MyEtherWallet (หรือ Mist, Geth, Parity หรือโปรแกรมกระเป๋าอื่นๆ) ',
GEN_Help_13                 : 'วิธีการสำรองข้อมูลไฟล์ Keystore ',
GEN_Help_14                 : 'ชนิดของไฟล์แบบต่างๆ คืออะไร? ',
GEN_Help_15                 : 'ป้องกันการสูญเสีย &amp; การโจรกรรมเงินของคุณ',
GEN_Help_16                 : 'ชนิดของไฟล์แบบต่างๆ คืออะไร?',
GEN_Help_17                 : 'ทำไมฉันควรจะทำ?',
GEN_Help_18                 : 'เพื่อมีแบ็คอัพสำรองข้อมูล',
GEN_Help_19                 : 'ในกรณีที่คุณลืมรหัสผ่าน',
GEN_Help_20                 : 'Cold Storage',
GET_ConfButton              : 'ฉันเข้าใจ ดำเนินการต่อ',
GEN_Label_5                 : 'บันทึก `กุญแจส่วนตัว (Private Key)` ของคุณ ',
GEN_Unlock                  : 'ปลดล็อกกระเป๋าเพื่อดูที่อยู่ของคุณ',
GAS_PRICE_Desc              : 'ราคาแก๊สคือจำนวนที่คุณจ่ายต่อหนึ่งหน่วยของจำนวนแก๊ส `ค่าธรรมเนียมของ ธุรกรรม (TX) = ราคาแก๊ส * จำนวนจำกัดแก๊ส` และจะถูกจ่ายให้กับผู้ขุดที่ขุด TX ของคุณลงในบล็อค ยิ่งราคาแก๊สสูง = ธุรกรรมก็จะสำเร็จเร็วขึ้น แต่ค่าธรรมเนียมก็จะแพงขึ้นเช่นกัน ค่าเริ่มต้นคือ `21 GWEI`',
GAS_LIMIT_Desc              : 'จำนวนจำกัดแก๊ส คือปริมาณของแก๊สที่จะส่งไปกับธุรกรรม (TX) ของคุณ `ค่าธรรมเนียม TX = ราคาแก๊ส * จำนวนจำกัดแก๊ส และจะถูกจ่ายให้กับผู้ขุดที่ขุด TX ของคุณลงในบล็อค การเพิ่มจำนวนนี้จะไม่ทำให้ TX ของคุณถูกขุดสำเร็จไวขึ้น การส่ง ETH = `21000` หากส่ง Token = ~`200000`',
NONCE_Desc                  : 'ค่า nonce คือตัวเลขของธุรกรรมที่ถูกส่งไปยังที่อยู่ที่ระบุ เพื่อเป็นการยืนยันให้ธุรกรรมถูกส่งได้อย่างถูกต้องตามลำดับ และไม่ซ้ำกัน',
TXFEE_Desc                  : 'ค่าธรรมเนียมธุรกรรม (TX) จะถูกจ่ายให้กับผู้ขุดที่ขุด TX ของคุณลงในบล็อค มีค่าเท่ากับ `จำนวนจำกัดแก๊ส` * `ราคาแก๊ส` [คุณสามารถแปลง GWEI -> ETH ได้ที่นี่](https://www.myetherwallet.com/helpers.html)',


/* Navigation*/
NAV_AddWallet               : 'เพิ่มกระเป๋า ',
NAV_BulkGenerate            : 'สร้างเป็นจำนวนมาก ',
NAV_Contact                 : 'ติดต่อ ',
NAV_Contracts               : 'Contracts ',
NAV_DeployContract          : 'Deploy Contract ',
NAV_ENS                     : 'ENS',
NAV_GenerateWallet_alt      : 'กระเป๋าใหม่ ',
NAV_GenerateWallet          : 'สร้างกระเป๋าใหม่ ',
NAV_Help                    : 'ช่วยเหลือ ',
NAV_InteractContract        : 'จัดการกับ Contract ',
NAV_Multisig                : 'Multisig ',
NAV_MyWallets               : 'กระเป๋าของฉัน ',
NAV_Offline                 : 'ส่งแบบออฟไลน์ ',
NAV_SendEther               : 'ส่ง Ether & Token ',
NAV_SendTokens              : 'ส่ง Token ',
NAV_SignMsg                 : 'เซ็นข้อความ ',
NAV_Swap                    : 'แลกเปลี่ยน ',
NAV_ViewWallet              : 'ดูข้อมูลกระเป๋า ',
NAV_YourWallets             : 'กระเป๋าของคุณ ',

/* General */
x_Access                    : 'เข้าใช้ ',
x_AddessDesc                : 'ที่อยู่ของคุณ หรือสามารถเรียกอีกอย่างว่า `Account #` หรือ `กุญแจสาธารณะ (Public Key)` คือสิ่งที่คุณสามารถแชร์ให้ผู้อื่น เพื่อรอรับ Ether หรือ Token ได้ เพียงมองหาไอคอนของที่อยู่และตรวจสอบให้แน่ใจว่ามันตรงกับกระเป๋ากระดาษของคุณ หรือเมื่อใดก็ตามที่คุณป้อนที่อยู่ของคุณ',
x_Address                   : 'ที่อยู่ของคุณ ',
x_Cancel                    : 'ยกเลิก ',
x_CSV                       : 'ไฟล์ CSV (ไม่ได้ถูกเข้ารหัส) ',
x_Download                  : 'ดาวน์โหลด ',
x_Json                      : 'ไฟล์ JSON (ไม่ได้ถูกเข้ารหัส) ',
x_JsonDesc                  : 'เนื้่อหานี้ไม่ถูกเข้ารหัส ซึ่งเป็น กุญแจส่วนตัว (Private Key) ของคุณที่อยู่รูปแบบ JSON ซึ่งหมายความว่าผู้อื่นที่เข้าถึง JSON นี้ จะสามารถเข้าถึงกระเป๋า & Ether ของคุณได้โดยไม่จำเป็นต้องรู้รหัสผ่านเลย ',
x_Keystore                  : 'ไฟล์ Keystore (UTC / JSON · แนะนำ · เข้ารหัส) ',
x_Keystore2                 : 'ไฟล์ Keystore (UTC / JSON) ',
x_KeystoreDesc              : 'ไฟล์ Keystore นี้เข้ากันได้กับรูปแบบที่ใช้โดย Mist ทำให้คุณสามารถอิมพอร์ตมันได้อย่างง่ายดายในภายหลัง แนะนำให้ใช้ไฟล์ชนิดนี้เพื่อดาวน์โหลดและแบคอัพ ',
x_MetaMask                  : 'Metamask / Mist ',
x_Mnemonic                  : 'Mnemonic Phrase ',
x_ParityPhrase              : 'Parity Phrase ',
x_Password                  : 'รหัสผ่าน ',
x_Print                     : 'พิมพ์กระเป๋ากระดาษ ',
x_PrintDesc                 : 'คำแนะนำจากโปร: คลิกพิมพ์ และบันทึกได้ในรูปแบบ PDF ไฟล์ ถึงแม้ว่าคุณจะไม่มีปริ้นเตอร์ ',
x_PrintShort                : 'พิมพ์ ',
x_PrivKey                   : 'กุญแจส่วนตัว (Private Key) (ไม่ถูกเข้ารหัส) ',
x_PrivKey2                  : 'กุญแจส่วนตัว (Private Key) ',
x_PrivKeyDesc               : 'นี่คือข้อความแบบไม่เข้ารหัสของกุญแจส่วนตัว (Private Key) ของคุณ โดยไม่จำเป็นต้องมีรหัสผ่าน ดังนั้นถ้าหากผู้อื่นรู้กุญแจส่วนตัว (Private key) ที่ไม่ถูกเข้ารหัสของคุณนี้ ผู้นั้นสามารถเข้าถึงกระเป๋าของคุณโดยไม่จำเป็นต้องมีรหัสผ่าน และด้วยเหตุนี้ จึงแนะนำให้ใช้กุญแจแบบเข้ารหัสซึ่งเป็นที่นิยมกว่า ',
x_Save                      : 'บันทึก ',
x_TXT                       : 'ไฟล์ TXT (ไม่ถูกเข้ารหัส) ',
x_Wallet                    : 'กระเป๋า ',

/* Header */
CX_Tagline                  : 'โอเพ่นซอร์ส JavaScript ฝั่งไคลเอนต์สำหรับสร้างกระเป๋า Ether ผ่าน Chrome Extension ',
CX_Warning_1                : 'ยืนยันให้แน่ใจว่าคุณมี **การสำรองข้อมูลจากภายนอก** ของกระเป๋าใดก็ตามที่คุณเก็บไว้ที่นี่ อะไรก็อาจเกิดขึ้นได้ที่ทำให้คุณสูญเสียข้อมูลบน Chrome Extension นี้ รวมถึงการถอดการติดตั้ง และติดตั้ง Extension ใหม่ ซึ่ง Extension นี้ทำให้คุณเข้าถึงกระเป๋าของคุณได้อย่างง่ายดาย **ไม่ใช่** เพื่อการสำรองข้อมูล ',
MEW_Tagline                 : 'โอเพ่นซอร์ส JavaScript ฝั่งไคลเอนต์สำหรับสร้างกระเป๋า Ether ',
MEW_Warning_1               : 'ตรวจสอบ URL ทุกครั้ง ก่อนเข้าใช้กระเป๋าของคุณหรือสร้างกระเป๋าใหม่ ระวังเว็บไซต์ลอกเลียนแบบประสงค์ร้าย! ',

/* Footer */
FOOTER_1                    : 'ฟรี, โอเพ่นซอร์ส, อินเตอร์เฟสฝั่งไคลเอนต์สำหรับสร้างกระเป๋า Ethereum &amp; อื่นๆอีกมากมาย และทำธุรกรรมผ่านบล็อคเชนของ Ethereum ได้อย่างง่ายดาย &amp; ปลอดภัย อย่าลืมตรวจสอบ URL ( .com ) ทุกครั้งก่อนเข้าใช้กระเป๋าของคุณ',
FOOTER_1b                   : 'สร้างขึ้นโดย ',
FOOTER_2                    : 'ยินดีรับบริจาค ',
FOOTER_3                    : 'บริการสร้างกระเป๋าโดย ',
FOOTER_4                    : 'คำปฎิเสธความรับผิดชอบ ',

/* Sidebar */
sidebar_AccountInfo         : 'ข้อมูลบัญชี ',
sidebar_AccountAddr         : 'ที่อยู่บัญชี ',
sidebar_AccountBal          : 'ยอดคงเหลือบัญชี ',
sidebar_TokenBal            : 'ยอดคงเหลือ Token ',
sidebar_Equiv               : 'มูลค่าเทียบเท่า ',
sidebar_TransHistory        : 'ประวัติการทำธุรกรรม ',
sidebar_donation            : 'MyEtherWallet ให้บริการฟรี, และเป็นโอเพ่นซอร์สเพื่อความเป็นส่วนตัว และความปลอดภัยของคุณ ยิ่งเราได้รับการบริจาคมากเท่าไหร่เราก็ยิ่งมีเวลาเพื่อสร้างฟีเจอร์ใหม่ๆ มากขึ้นเท่านั้น, พร้อมรับฟังข้อเสนอแนะ, และตอบสนองตามความต้องการของผู้ใช้ ซึ่งเราเป็นแค่ทีมสองคนที่อยากจะเปลี่ยนแปลงโลกใบนี้ สนใจช่วยเราไหม? ',
sidebar_donate              : 'บริจาค ',
sidebar_thanks              : 'ขอบคุณ!!! ',
sidebar_DisplayOnTrezor     : 'แสดงที่อยู่บน TREZOR',
sidebar_DisplayOnLedger     : 'แสดงที่อยู่บน Ledger',

/* Decrypt Panel */
decrypt_Access              : 'คุณต้องการเข้าถึงกระเป๋าของคุณด้วยวิธีใด? ',
decrypt_Title               : 'เลือกชนิดรูปแบบของกุญแจส่วนตัวของคุณ (Private Key) ',
decrypt_Select              : 'เลือกกระเป๋า ',

/* Mnemonic */
MNEM_1                      : 'โปรดเลือกที่อยู่ที่คุณต้องการจะเข้าใช้งาน ',
MNEM_2                      : 'HD mnemonic phrase ของคุณสามารถเข้าถึง กระเป๋าหลายใบ / ที่อยู่หลายที่อยู่ ได้ โปรดเลือกที่อยู่ที่คุณต้องการจะเข้าใช้งานในขณะนี้ ',
MNEM_more                   : 'ที่อยู่อื่นๆ ',
MNEM_prev                   : 'ที่อยู่ที่แล้ว ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Wallet ',
ADD_Ledger_1                : 'เชื่อมต่อไปยัง Ledger Wallet ',
ADD_Ledger_2                : 'เปิด Ethereum application (หรือ contract application) ',
ADD_Ledger_3                : 'ยืนยันว่า Browser Support ได้ถูกเปิดใช้งานผ่านหน้า Settings ',
ADD_Ledger_4                : 'ถ้าหากไม่พบ Browser Support ในหน้า settings โปรดทำให้แน่ใจว่าคุณกำลังใช้งาน Ledger Wallet [เฟิร์มแวร์เวอร์ชั่น > 1.2](https://www.ledgerwallet.com/apps/manager) ',
ADD_Ledger_0a               : 'คุณต้องเข้าใช้ MyEtherWallet ผ่านทางการเชื่อมต่อที่ปลอดภัย (SSL / HTTPS) ถึงจะสามารถเชื่อมต่อได้ ',
ADD_Ledger_0b               : 'เปิด MyEtherWallet อีกครั้งด้วย [Chrome](https://www.google.com/chrome/browser/desktop/) หรือ [Opera](https://www.opera.com/) ',
ADD_Ledger_scan             : 'เชื่อมต่อไปยัง Ledger Wallet ',

ADD_MetaMask                : 'เชื่อมต่อไปยัง MetaMask ',

x_Trezor                    : 'TREZOR ',
ADD_Trezor_scan             : 'เชื่อมต่อไปยัง TREZOR ',
x_DigitalBitbox             : 'Digital Bitbox ',
ADD_DigitalBitbox_0a        : 'เปิด MyEtherWallet อีกครั้งผ่านการเชื่อมต่อที่ปลอดภัย (SSL) ',
ADD_DigitalBitbox_0b        : 'เปิด MyEtherWallet อีกครั้งด้วย [Chrome](https://www.google.com/chrome/browser/desktop/) หรือ [Opera](https://www.opera.com/) ',
ADD_DigitalBitbox_scan      : 'เชื่อมต่อไปยัง Digital Bitbox ',

/* Add Wallet */
ADD_Label_1                 : 'คุณต้องการจะทำอะไร? ',
ADD_Radio_1                 : 'สร้างกระเป๋าใหม่ ',
ADD_Radio_2                 : 'เลือกไฟล์กระเป๋า (Keystore / JSON) ',
ADD_Radio_2_alt             : 'เลือกไฟล์กระเป๋า ',
ADD_Radio_2_short           : 'เลือกไฟล์กระเป๋า... ',
ADD_Radio_3                 : 'แปะวาง/พิมพ์ Private Key ของคุณ ',
ADD_Radio_4                 : 'เพิ่มบัญชีใหม่เข้ารายการติดตาม ',
ADD_Radio_5                 : 'แปะวาง/พิมพ์ Mnemonic (รหัสช่วยจำ) ',
ADD_Radio_5_Path            : 'เลือก HD derivation path ',
ADD_Radio_5_woTrezor        : '(Jaxx, Metamask, Exodus, imToken)',
ADD_Radio_5_withTrezor      : '(Jaxx, Metamask, Exodus, imToken, TREZOR)',
ADD_Radio_5_PathAlternative : '(Ledger)',
ADD_Radio_5_PathTrezor      : '(TREZOR)',
ADD_Radio_5_PathCustom      : 'กำหนดเอง',
ADD_Label_2                 : 'ตั้งชื่อเล่น ',
ADD_Label_3                 : 'กระเป๋าของคุณถูกเข้ารหัส เยี่ยม! โปรดป้อนรหัสผ่าน ',
ADD_Label_4                 : 'เพิ่มบัญชีเข้ารายการติดตาม ',
ADD_Warning_1               : 'คุณสามารถเพิ่มบัญชีเข้า "รายการติดตาม" จากแท็บของกระเป๋าโดยไม่ต้องอัพโหลด private key ซึ่งการกระทำนี้ ** ไม่ได้ ** หมายความว่าคุณสามารถเข้าถึงกระเป๋านี้ได้ หรือสามารถส่ง Ether ออกจากกระเป๋าได้ ',
ADD_Label_5                 : 'ป้อนที่อยู่ ',
ADD_Label_6                 : 'ปลดล็อกกระเป๋าของคุณ ',
ADD_Label_6_short           : 'ปลดล็อก ',
ADD_Label_7                 : 'เพิ่มบัญชี ',
ADD_Label_8                 : 'รหัสผ่าน (ทางเลือก): ',

/* My Wallet */
MYWAL_Nick                  : 'ชื่อเล่นของกระเป๋า ',
MYWAL_Address               : 'ที่อยู่ของกระเป๋า ',
MYWAL_Bal                   : 'ยอดคงเหลือ ',
MYWAL_Edit                  : 'แก้ไข ',
MYWAL_View                  : 'ดู ',
MYWAL_Remove                : 'ลบออก ',
MYWAL_RemoveWal             : 'ลบกระเป๋าออก ',
MYWAL_WatchOnly             : 'บัญชีในรายการติดตาม ',
MYWAL_Viewing               : 'กำลังดูกระเป๋า ',
MYWAL_Hide                  : 'ซ่อนข้อมูลกระเป๋า ',
MYWAL_Edit_2                : 'แก่ไขกระเป๋า ',
MYWAL_Name                  : 'ชื่อของกระเป๋า ',
MYWAL_Content_1             : 'คำเตือน! คุณกำลังจะลบกระเป๋าของคุณ ',
MYWAL_Content_2             : 'ยืนยันให้แน่ใจว่าคุณได้ **จดบันทึก private key และ/หรือไฟล์ Keystore และรหัสผ่าน** ก่อนที่คุณจำลบมัน ',
MYWAL_Content_3             : 'ถ้าหากคุณต้องการจะใช้กระเป๋านี้ร่วมกับ MyEtherWallet CX ในอนาคต คุณจำเป็นจะต้องเพิ่มกระเป๋าใหม่อีกครั้งด้วย private key/JSON และรหัสผ่าน ',

/* Generate Wallets */
GEN_desc                    : 'หากคุณต้องการสร้างกระเป๋าหลายใบ, คุณสามารถทำได้ที่นี่ ',
GEN_Label_1                 : 'ป้อนรหัสผ่าน',
GEN_Placeholder_1           : 'ควรจดจำรหัสผ่านไว้ และห้ามลืม! ',
GEN_SuccessMsg              : 'สำเร็จ! กระเป๋าของคุณถูกสร้างขึ้นแล้ว ',
GEN_Label_2                 : 'บันทึกไฟล์ `Keystore` ของคุณ ',
GEN_Label_3                 : 'บันทึกที่อยู่ของคุณ ',
GEN_Label_4                 : 'สั่งพิมพ์กระเป๋ากระดาษ หรือ QR โค้ด ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'จำนวนกระเป๋าที่จะสร้าง ',
BULK_Label_2                : 'สร้างกระเป๋า ',
BULK_SuccessMsg             : 'สำเร็จ! กระเป๋าของคุณถูกสร้างขึ้นแล้ว ',

/* Sending Ether and Tokens */
SEND_addr                   : 'ส่งไปยังที่อยู่ ',
SEND_amount                 : 'จำนวนที่จะส่ง ',
SEND_amount_short           : 'จำนวน ',
SEND_custom                 : 'เพิ่ม Custom Token ',
SEND_gas                    : 'แก๊ส ',
SEND_TransferTotal          : 'ส่งด้วยจำนวนทั้งหมด ',
SEND_generate               : 'ทำธุรกรรม ',
SEND_raw                    : 'Raw Transaction ',
SEND_signed                 : 'เซ็นธุรกรรม ',
SEND_trans                  : 'ส่งธุรกรรม ',
SENDModal_Title             : 'คำเตือน! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'คุณกำลังจะส่ง ',
SENDModal_Content_2         : 'ไปยังที่อยู่ ',
SENDModal_Content_3         : 'ยืนยันที่จะดำเนินการต่อ? ',
SENDModal_Content_4         : 'หมายเหตุ: หากคุณพบข้อผิดพลาด โดยส่วนใหญ่แล้วคุณจำเป็นที่จะต้องเพิ่ม Ether เข้าบัญชีเพื่อใช้เป็นค่าแก๊สในการส่ง Token และค่าแก๊สจะถูกจ่ายด้วย Ether ',
SENDModal_No                : 'ไม่, ฉันต้องการออกไปจากที่นี่! ',
SENDModal_Yes               : 'ใช่, ฉันแน่ใจ! ดำเนินการทำธุรกรรมต่อ ',

/* Tokens */
TOKEN_Addr                  : 'ที่อยู่ Token Contract',
TOKEN_Symbol                : 'สัญลักษณ์ Token ',
TOKEN_Dec                   : 'Decimals ',
TOKEN_show                  : 'แสดง Token ทั้งหมด ',
TOKEN_hide                  : 'ซ่อน Token ',

/* Send Transaction */
TRANS_desc                  : 'ถ้าหากคุณต้องการจะส่ง Token โปรดเข้าใช้ผ่านหน้า "ส่ง Token" แทน ',
TRANS_advanced              : '+ขั้นสูง: เพิ่มข้อมูล ',
TRANS_data                  : 'ข้อมูล ',
TRANS_gas                   : 'จำกัดค่าแก๊สที่ ',
TRANS_sendInfo              : 'ธุรกรรมโดยทั่วไปจะใช้ค่าแก๊สจำนวน 21000 แก๊ส ซึ่งมีมูลค่าเท่ากับ 0.000441 ETH เราจะใช้ค่าแก๊สที่สูงกว่าทั่วไปอีก 0.000000021 ETH เพื่อทำให้แน่ใจว่าธุกรรมถูกขุดอย่างรวดเร็ว เราไม่ได้เป็นผู้รับค่าธรรมเนียมในการทำธุรกรรม ',

/* Offline Transaction */
OFFLINE_Title               : 'สร้าง & ทำธุรกรรมการส่ง แบบออฟไลน์ ',
OFFLINE_Desc                : 'การทำธุรกรรมแบบออฟไลน์ สามารถทำได้ในสามขั้นตอน คุณจะทำขั้นตอนที่ 1 และ 3 ออนไลน์ผ่านคอมพิวเตอร์ ยกเว้นขั้นตอนที่ 2 ซึ่งทำแบบออฟไลน์หรือ airgapped computer ได้ ซึ่งเป็นการยืนยันให้แน่ใจว่ากุญแจส่วนตัวของคุณ (Private Key) ไม่ถูกเข้าถึงโดยอุปกรณ์ใดๆ ที่เชื่อมต่ออินเตอร์เน็ต ',
OFFLLINE_Step1_Title        : 'ขั้นตอนที่ 1: สร้างข้อมูล (ออนไลน์ผ่านคอมพิวเตอร์) ',
OFFLINE_Step1_Button        : 'สร้างข้อมูล ',
OFFLINE_Step1_Label_1       : 'ที่อยู่ต้นทาง ',
OFFLINE_Step1_Label_2       : 'หมายเหตุ: นี่คือ ที่อยู่ต้นทาง ไม่ใช่ ที่อยู่ปลายทาง ซึ่ง Nonce จะถูกคำนวนจากบัญชีต้นทาง และหากคุณใช้งานจาก airgapped computer มันจะเป็นที่อยู่ของบัญชีแบบ cold-storage ',
OFFLINE_Step2_Title         : 'ขั้นตอนที่ 2: สร้างธุรกรรม (ออฟไลน์ผ่านคอมพิวเตอร์) ',
OFFLINE_Step2_Label_1       : 'ที่อยู่ปลายทาง ',
OFFLINE_Step2_Label_2       : 'มูลค่า / จำนวนที่จะส่ง ',
OFFLINE_Step2_Label_3       : 'ราคาแก๊ส ',
OFFLINE_Step2_Label_3b      : 'ค่านี้จะถูกแสดงในขั้นตอนที่ 1 บนออนไลน์คอมพิวเตอร์ ',
OFFLINE_Step2_Label_4       : 'จำกัดค่าแก๊สที่ ',
OFFLINE_Step2_Label_4b      : 'ค่าแก๊สถูกจำกัดไว้ที่ 21000 เป็นค่าเริ่มต้น นอกเสียจากว่าคุณทำการส่ง Contract หรือข้อมูลอื่นเพิ่มเติม อาจจะต้องมีการเปลี่ยนแปลงค่านี้ และค่าแก๊สที่ไม่ได้ใช้จะถูกคืนให้คุณ ',
OFFLINE_Step2_Label_5       : 'Nonce ',
OFFLINE_Step2_Label_5b      : 'ค่านี้จะถูกแสดงในขั้นตอนที่ขั้นตอนที่ 1 บนออนไลน์คอมพิวเตอร์ ',
OFFLINE_Step2_Label_6       : 'ข้อมูล ',
OFFLINE_Step2_Label_6b      : 'นี่คือตัวเลือกเพิ่มเติม โดยส่วนใหญ่ ข้อมูลจะถูกใช้ก็ต่อเมื่อคุณทำธุรกรรมส่งไปยัง Contract ',
OFFLINE_Step2_Label_7       : 'ป้อน / เลือกกุญแจส่วนตัวของคุณ (Private Key) / JSON ',
OFFLINE_Step3_Title         : 'ขั้นตอนที่ 3: ส่ง / ทำธุรกรรม (ออนไลน์ผ่านคอมพิวเตอร์) ',
OFFLINE_Step3_Label_1       : 'แปะวางธุรกรรมที่ถูกเซ็นต์กำกับแล้วจากขั้นตอนที่ 2 ลงที่นี่ และกดปุ่ม "ส่งธุรกรรม" ',

/* Contracts */
CONTRACT_Title              : 'ที่อยู่ Contract ',
CONTRACT_Title_2            : 'เลือก Contract ที่มีอยู่แล้ว ',
CONTRACT_Json               : 'ABI / JSON Interface ',
CONTRACT_Interact_Title     : 'อ่าน / เขียน Contract ',
CONTRACT_Interact_CTA       : 'เลือก function ',
CONTRACT_ByteCode           : 'Byte Code ',
CONTRACT_Read               : 'อ่าน ',
CONTRACT_Write              : 'เขียน ',
DEP_generate                : 'สร้าง Bytecode ',
DEP_generated               : 'Bytecode ที่ถูกสร้างขึ้น ',
DEP_signtx                  : 'เซ็นกำกับธุรกรรม ',
DEP_interface               : 'Interface ที่ถูกสร้างขึ้น ',

/* Node Switcher */
NODE_Title                  : 'ติดตั้ง Node แบบกำหนดเอง',
NODE_Subtitle               : 'เชื่อมต่อไปยัง local node...',
NODE_Warning                : 'Node ของคุณจะต้องเป็น HTTPS เพื่อที่จะเชื่อมต่อกับ MyEtherWallet.com คุณสามารถ [ดาวน์โหลดซอร์สโค้ดจาก MyEtherWallet repo & รันบนเครื่องคอมพิวเตอร์ของคุณ](https://github.com/kvhnuke/etherwallet/releases/latest) เพื่อเชื่อมต่อกับ Node ใดๆ หรือสร้างใบรับรอง SSL ผ่าน [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'ชื่อ Node',
NODE_Port                   : 'พอร์ตของ Node',
NODE_CTA                    : 'บันทึก & ใช้ Node แบบกำหนดเอง',

/* Swap / Exchange */
SWAP_rates                  : "อัตราแลกเปลี่ยนปัจจุบัน ",
SWAP_init_1                 : "ฉันต้องการจะแลกเปลี่ยน ",
SWAP_init_2                 : " ของฉันด้วย ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "ดำเนินการต่อ! ", // or "Continue"
SWAP_information            : "ข้อมูลของคุณ ",
SWAP_send_amt               : "จำนวนที่ต้องการส่ง ",
SWAP_rec_amt                : "จำนวนที่ต้องการรับ ",
SWAP_your_rate              : "อัตราแลกเปลี่ยนของคุณ ",
SWAP_rec_add                : "ที่อยู่ที่สำหรับรับ ",
SWAP_start_CTA              : "เริ่มแลกเปลี่ยน ",
SWAP_ref_num                : "หมายเลขอ้างอิง ",
SWAP_time                   : "เวลาที่เหลือสำหรับส่ง ",
SWAP_elapsed                : "เวลาที่ผ่านไปตั้งแต่เริ่มส่ง ",
SWAP_progress_1             : "คำสั่งถูกเริ่มดำเนินการ ",
SWAP_progress_2             : "กำลังรอ ", // Waiting for your BTC...
SWAP_progress_3             : "ได้รับแล้ว! ", // ETH Received!
SWAP_progress_4             : "กำลังส่ง {{orderResult.output.currency}} ",
SWAP_progress_5             : "คำสั่งสำเร็จ ",
SWAP_order_CTA              : "กรุณาส่ง ", // Please send 1 ETH...
SWAP_unlock                 : "ปลดล็อกกระเป๋าของคุณเพื่อส่ง ETH หรือ Token ได้โดยตรงจากหน้านี้ ",

/* Sign Message */
MSG_message                 : 'ข้อความ ',
MSG_date                    : 'วันที่ ',
MSG_signature               : 'ลายเซ็นต์ ',
MSG_verify                  : 'ข้อความยืนยัน ',
MSG_info1                   : 'ใส่วันที่ปัจจุบัน เพื่อทำให้ลายเซ็นต์ไม่สามารถถูกนำกลับมาใช้ซ้ำได้อีกในวันอื่นๆ ',
MSG_info2                   : 'ใส่ชื่อเล่นลงบนตำแหน่งที่ระบุเอง เพื่อป้องกันไม่ให้คนอื่นสามารถใช้มันได้ ',
MSG_info3                   : 'ใส่ข้อความแสดงเจตจำนงที่เฉพาะเจาะจง เพื่อป้องกันไม่ให้มันถูกใช้เพื่อเหตุผลอื่น ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'หน้านี้ทำให้คุณสามารถดาวน์โหลดกุญแจส่วนตัว (Private key) ของคุณได้ในรูปแบบต่างๆ และสั่งพิมพ์กระเป๋ากระดาษของคุณใหม่ ซึ่งคุณอาจจะต้องใช้มันเพื่อ [นำเข้าบัญชีของคุณไปยัง Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/) แต่หากคุณแค่ต้องการจะตรวจสอบยอดคงเหลือของคุณ เราแนะนำให้ใชัเว็บ blockchain explorer เช่น [etherscan.io](http://etherscan.io/) ',
VIEWWALLET_Subtitle_Short   : 'หน้านี้ทำให้คุณสามารถดาวน์โหลดกุญแจส่วนตัว (Private key) ของคุณได้ในรูปแบบต่างๆ และสั่งพิมพ์กระเป๋ากระดาษของคุณใหม่ ',
VIEWWALLET_SuccessMsg       : 'สำเร็จ! นี่คือข้อมูลกระเป๋าของคุณ ',
VIEWWALLET_ShowPrivKey      : '(แสดง)',
VIEWWALLET_HidePrivKey      : '(ซ่อน)',

/* Chrome Extension */
CX_error_1                  : 'คุณไม่มีกระเป๋าที่บันทึกไว้ คลิก ["เพิ่มกระเป๋า"](/cx-wallet.html#add-wallet) เพื่อเพิ่ม! ',
CX_quicksend                : 'ส่ง ', // if no appropriate translation, just use "Send"

/* Error Messages */
ERROR_0                     : 'กรุณาใส่จำนวนที่ถูกต้อง', // 0
ERROR_1                     : 'รหัสผ่านของคุณต้องมีอย่างน้อย 9 ตัวอักษร และควรจะเป็นรหัสผ่านที่คาดเดาได้ยาก ', // 1
ERROR_2                     : 'ขออภัย! เราไม่รู้จักไฟล์กระเป๋ารูปแบบนี้ ', // 2
ERROR_3                     : 'นี่ไม่ใช่ไฟล์กระเป๋าที่ถูกต้อง ', // 3
ERROR_4                     : 'หน่วยที่ระบุไม่มีอยู่จริง โปรดใช้หน่วยที่อยู่ในรายการต่อไปนี้ ', // 4
ERROR_5                     : 'กรุณาใส่ที่อยู่ที่ถูกต้อง ', // 5
ERROR_6                     : 'กรุณาใส่รหัสผ่านที่ถูกต้อง ', // 6
ERROR_7                     : 'กรุณาใส่หน่วยทศนิยมให้ถูกต้อง     (ต้องเป็นตัวเลข ลอง 0-18) ', // 7
ERROR_8                     : 'กรุณาใส่ค่าจำกัดแก๊สให้ถูกต้อง  (ต้องเป็นตัวเลข ลอง 21000-4000000) ', // 8
ERROR_9                     : 'กรุณาใส่ข้อมูลให้ถูกต้อง (ต้องเป็นเลขฐาน 16) ', // 9
ERROR_10                    : 'กรุณาใส่ราคาแก๊สให้ถูกต้อง (ต้องเป็นตัวเลข ลอง 20 GWEI / 20000000000 WEI) ',
ERROR_11                    : 'กรุณาใส่ค่า Nonce ให้ถูกต้อง      (ต้องเป็นตัวเลข) ', // 11
ERROR_12                    : 'ลายเซ็นต์ของธุรกรรมไม่ถูกต้อง ', // 12
ERROR_13                    : 'มีกระเป๋าที่ใช้ชื่อเล่นนี้อยู่แล้ว ', // 13
ERROR_14                    : 'ไม่พบกระเป๋า ', // 14
ERROR_15                    : 'อุ๊บส์ ดูเหมือนจะไม่มีคำร้องขอที่มี ID นี้ หรือมีข้อผิดพลาดในการอ่านคำร้อง ', // 15 - NOT USED
ERROR_16                    : 'กระเป๋าของที่อยู่นี้มีอยู่แล้วในฐานข้อมูล กรุณาตรวจสอบจากหน้ากระเป๋าของคุณ ', // 16
ERROR_17                    : 'มียอดคงเหลือไม่พอในบัญชีที่คุณกำลังจะส่งออก ถ้าหากคุณกำลังจะส่ง Token คุณจะต้องมีอย่างน้อย 0.01 ETH อยู่ในบัญชีของคุณ เพื่อใช้เป็นค่าแก๊ส ', // 17
ERROR_18                    : 'แก๊สทั้งหมดจะถูกใช้ในธุรกรรมนี้ ซึ่งหมายความว่าคุณได้ทำการโหวตให้กับคำร้องขอนี้แล้ว หรือช่วงการโหวตได้จบลงแล้ว', // 18
ERROR_19                    : 'กรุณาใส่สัญลักษณ์ให้ถูกต้อง', // 19
ERROR_20                    : 'ไม่ใช่ ERC-20 Token ที่ถูกต้อง', // 20
ERROR_21                    : 'ไม่สามารถประเมินแก๊สได้ เนื่องจากยอดคงเหลือในบัญชีไม่พอหรืออาจมีข้อผิดพลาดจากที่อยู่ของสัญญา (Contract Address) ให้ใส่ค่าแก๊สด้วยตัวคุณเองและดำเนินการต่อ ข้อความที่เกิดจากความผิดพลาดระหว่างการส่งอาจจะมีเนื้อหาละเอียดกว่า', // 21
ERROR_22                    : 'กรุณาใส่ชื่อ Node ให้ถูกต้อง', // 22
ERROR_23                    : 'กรุณาใส่ URL ให้ถูกต้อง ถ้าหากคุณใช้ https อยู่ URL ของคุณควรจะเป็นแบบ https', // 23
ERROR_24                    : 'กรุณาใส่หมายเลขพอร์ตที่ถูกต้อง. ', // 24
ERROR_25                    : 'กรุณาใส่ chain ID ที่ถูกต้อง ', // 25
ERROR_26                    : 'กรุณาใส่ ABI ที่ถูกต้อง ', // 26
ERROR_27                    : 'จำนวนขั้นต่ำ: 0.01. จำนวนขั้นสูงสุด: ', // 27
ERROR_28                    : 'คุณต้องใช้ `ไฟล์ Keystore + รหัสผ่าน` หรือ `กุญแจส่วนตัว (Private Key)` (ในหน้าถัดไป) เพื่อเข้าถึงกระเป๋าของคุณในภายหลัง ', // 28
ERROR_29                    : 'กรุณาใส่ชื่อผู้ใช้ และรหัสผ่านที่ถูกต้อง ', // 29
ERROR_30                    : 'กรุณาใส่ชื่อที่ถูกต้อง (จำนวน 7+ ตัวอักษร, จำกัดเครื่องหมายวรรคตอน) ', // 30
ERROR_31                    : 'กรุณาใส่ secret phrase ที่ถูกต้อง ', // 31
ERROR_32                    : 'ไม่สามารถเชื่อมต่อไปยัง Node ลองรีเฟรชหน้าใหม่อีกครั้ง, ลองใช้ Node อื่น (มุมขวาบน), หรือตรวจสอบการตั้งค่าไฟวอลล์ของคุณ หรือเช็คค่าการตั้งค่าใน Config ของคุณถ้าหากใช้ Node แบบกำหนดเอง', // 32
ERROR_33                    : 'กระเป๋าที่คุณปลดล็อก มีที่อยู่ไม่ตรงกับที่อยู่ของเจ้าของ ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.github.io/knowledge-base/addresses/not-checksummed-shows-when-i-enter-an-address.html" target="_blank" rel="noopener noreferrer"> More info</a>', // 35
ERROR_36                    : 'กรุณาใส่ TX hash ที่ถูกต้อง', // 36
ERROR_37                    : 'กรุณาใส่เลขฐานสิบหก (0-9, a-f)', // 37

SUCCESS_1                   : 'ที่อยู่ถูกต้อง ',
SUCCESS_2                   : 'กระเป๋าถูกถอดรหัสสำเร็จแล้ว ',
SUCCESS_3                   : 'TX ของคุณได้ถูกเผยแพร่ไปยังเครือข่ายแล้ว และกำลังรอที่จะถูกขุดและรับการยืนยัน ซึ่งถ้าในช่วง ICOs การยืนยันอาจจะล่าช้าได้ถึง 3+ ชั่วโมง ให้ใช้ปุ่ม ยืนยัน & ตรวจสอบ ด้านล่างนี้ได้, TX Hash:  ',
SUCCESS_4                   : 'กระเป๋าของคุณถูกเพิ่มเรียบร้อยแล้ว ',
SUCCESS_5                   : 'ไฟล์ถูกเลือก ',
SUCCESS_6                   : 'การเชื่อมต่อสำเร็จแล้ว ',
SUCCESS_7                   : 'ยืนยันลายเซ็นต์ของข้อความแล้ว',
WARN_Send_Link              : 'คุณเข้าใช้จากลิงก์ที่มีการระบุ ที่อยู่, จำนวนมูลค่า, แก๊ส, รายการข้อมูล, หรือชนิดของการทำธุรกรรม (send mode) ให้คุณล่วงหน้า ซึ่งคุณสามารถเปลี่ยนแปลงข้อมูลได้ก่อนที่จะทำการส่ง ปลดล็อกกระเป๋าของคุณเพื่อเริ่มต้น ',

/* Geth Error Messages */
GETH_InvalidSender          : 'ผู้ส่งไม่ถูกต้อง ',
GETH_Nonce                  : 'ค่า Nonce ต่ำเกินไป ',
GETH_Cheap                  : 'ราคาแก๊สต่ำเกินกว่าจะรับได้ ',
GETH_Balance                : 'ยอดคงเหลือไม่เพียงพอ ',
GETH_NonExistentAccount     : 'บัญชีนี้ไม่มีอยู่จริง หรือยอดคงเหลือในบัญชีไม่เพียงพอ ',
GETH_InsufficientFunds      : 'ยอดมูลค่าไม่เพียงพอสำหรับ จำนวนแก๊ส * ราคาแก๊ส + จำนวนมูลค่า ',
GETH_IntrinsicGas           : 'จำนวนแก๊สต่ำเกินไป ',
GETH_GasLimit               : 'เกินจำนวนจำกัดของแก๊ส ',
GETH_NegativeValue          : 'จำนวนติดลบ ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "ธุรกรรมที่มีค่าแฮชเดียวกันนี้ได้ถูกนำเข้ามาแล้ว",
PARITY_Old                  : "ค่า nonce ของธุรกรรมต่ำเกินไป ลองเพิ่มค่า nonce",
PARITY_TooCheapToReplace    : "ค่าธรรมเนียมธุรกรรมต่ำเกินไป หรือมีธุรกรรมอื่นที่มีค่า nonce เท่ากันนี้อยู่ในคิว ให้ลองเพิ่มค่าธรรมเนียม หรือเพิ่มค่า nonce.",
PARITY_LimitReached         : "มีจำนวนธุรกรรมเยอะเกินไปรออยู่ในคิว ธุรกรรมของคุณถูกละทิ้งเนื่องจากมีจำนวนจำกัด ให้ลงเพิ่มค่าธรรมเนียม",
PARITY_InsufficientGasPrice : "ค่าธรรมเนียมธุรกรรมต่ำเกินไป ไม่เพียงพอสำหรับค่าธรรมเนียมขั้นต่ำของ Node ของคุณ (ขั้นต่ำ: {}, ค่าที่ใช้: {}) ให้ลงเพิ่มค่าธรรมเนียม",
PARITY_InsufficientBalance  : "ยอดคงเหลือในบัญชีไม่เพียงพอ ต้องการ {} wei แต่มีเพียง: {} wei",
PARITY_GasLimitExceeded     : "ค่าธรรมเนียมของธุรกรรมเกินจากค่าจำนวนจำกัดของแก๊ส จำนวนจำกัดแก๊ส: {}, ค่าที่ใช้: {} ลองลดจำนวนแก๊สลง",
PARITY_InvalidGasLimit      : "จำนวนแก๊สที่ใช้เกินจำนวนจำกัด",

/* Tranlsation Info */
translate_version           : '0.1 ',
Translator_Desc             : 'ขอบคุณผู้แปลภาษา ',
TranslatorName_1            : '[Tianissimo (Suteepat)](https://www.myetherwallet.com/?gaslimit=21000&to=0x8d0a185C16ADE28bf69Cb38c5e3df605360df40e&value=1.0#send-transaction) ',
TranslatorAddr_1            : '0x8d0a185C16ADE28bf69Cb38c5e3df605360df40e ',
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

module.exports = th;
