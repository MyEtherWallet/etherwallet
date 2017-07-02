// Russian
'use strict';
var ru = function() {}
ru.code = 'ru';
ru.data = {

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
WALL_Add               : 'Добавить кошелёк ',
BULK_Generate            : 'Создать несколько кошельков ',
x_Contact                 : 'Контакты ',
CONTRACT_Title               : 'контракт ',
CONTRACT_Deploy          : 'Опубликовать контракт ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Создать кошелёк ',
x_Help                    : 'Справка ',
CONTRACT_Interact        : 'Interact with Contract ',
CONTRACT_Multisig                : 'Multisig ',
WALL_walletViewCX               : 'Мои кошельки ',
x_Offline                 : 'Оффлайн-перевод ',
TX_Send_Title             : 'Перевести эфир (ether) и токены ',
TX_Send_ShortTokens              : 'Перевести токены ',
MSG_Sign                 : 'Подписать сообщение ',
SWAP_Title                    : 'Обмен ',
WALL_View              : 'Информация о кошельке ',
WALL_Your             : 'Ваши кошельки ',

/* General */
x_Access                    : 'Подключиться ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Это можно назвать "номер Вашего счёта" или "Ваш открытый ключ". Вы сообщаете этот адрес людям, чтобы они могли отправлять Вам эфир (ether). Картинка позволяет легко опознать Ваш адрес среди других адресов. ',
ADDR_                   : 'Ваш адрес ',
x_Cancel                    : 'Отменить ',
x_CSV                       : 'Файл CSV (не зашифрован) ',
x_Download                  : 'Скачать ',
x_Json                      : 'Файл JSON (не зашифрован) ',
x_JsonDesc                  : 'Это Ваш незашифрованный закрытый ключ в формате JSON, для использования которого не требуется воодить пароль. Любой, у кого есть этот файл, может распоряжаться вашим кошельком и эфиром (ether) без ввода пароля. ',
x_Keystore                  : 'Файл Keystore (UTC / JSON · рекомендуется · зашифрован) ',
x_Keystore2                 : 'Файл Keystore (UTC / JSON) ',
x_KeystoreDesc              : 'Этот файл Keystore использует формат совместимый с Mist. Вы сможете в будущем импортировать его. Рекомендуется скачать этот файл и сделать резервную копию. ',
x_Mnemonic                  : 'Кодовая фраза ',
x_ParityPhrase              : 'Parity Phrase ',
PW_                  : 'Пароль ',
x_Print                     : 'Напечатать бумажный кошелёк ',
x_PrintDesc                 : 'Для профи: Нажмите "Печать" и сохраните это в формате PDF, если у Вас нет принтера! ',
x_PrintShort                : 'Печать ',
x_PrivKey                   : 'Закрытый ключ (не зашифрован) ',
x_PrivKey2                  : 'Закрытый ключ ',
x_PrivKeyDesc               : 'Это незашифрованное текстовое представление Вашего закрытого ключа, для использования которого не требуется вводить пароль. Если посторонние узнают Ваш закрытый ключ, они смогут распоряжаться Вашим кошельком без ввода пароля. По этой причине, обычно рекомендуют использовать зашифрованную версию закрытого ключа. ',
x_Save                      : 'Сохранить ',
x_TXT                       : 'Файл TXT (не зашифрован) ',
WALL_                    : 'кошелёк ',

/* Header */
WARN_01               : 'Всегда проверяйте URL перед тем, как воспользоваться существующим кошельком или создать новый. Опасайтесь поддельных (фишинговых) сайтов! ',
WARN_04                : 'Всегда имейте **резервную копию** всех кошельков, которые Вы храните здесь. Различные обстоятельства могут привести к тому, что данные, хранимые в этом расширении браузера Chrome, могут быть потеряны, например если Вы удалите или переустановите расширение. Это расширение облегчает использование Ваших кошельков, но оно **не является** надежным местом для их хранения. ',
FOOTER_Tagline                 : 'Ethereum кошелёк на javascript с открытым исходным кодом ',
CX_Tagline                  : 'Ethereum кошелёк на javascript с открытым исходным кодом в виде расширения для браузера Chrome ',

/* Footer */
FOOTER_1                    : 'Написанный на javascript инструмент с открытым исходным кодом для создания Ethereum кошельков и выполнения транзакций. ',
FOOTER_1b                   : 'Авторы: ',
FOOTER_2                    : 'Пожертвования приветствуются: ',
FOOTER_3                    : 'Создание кошелька на стороне клиента от ',
FOOTER_4                    : 'Отказ от ответственности ',

/* Sidebar */
ACCOUNT_Info         : 'Информация о счёте ',
ACCOUNT_Address         : 'Адрес (номер) счёта ',
ACCOUNT_Balance          : 'Баланс счёта ',
TOKEN_Balance            : 'Балансы токенов ',
SIDEBAR_Equiv               : 'Эквивалентные значения ',
TX_History        : 'История транзакций ',
SIDEBAR_donation            : 'MyEtherWallet — это бесплатный сервис с открытым исходным кодом, заботящийся о Вашей безопасности и неприкосновенности Вашей частной жизни. Чем больше пожертвований мы получаем, тем больше времени мы проводим, добавляя новые возможности, прислушиваясь к Вашим пожеланиям и предоставляя Вам то, что Вам необходимо. Мы — всего лишь два человека, пытающиеся изменить Мир. Вы поможете нам? ',
SIDEBAR_donate              : 'Пожертвовать ',
SIDEBAR_thanks              : 'СПАСИБО!!! ',

/* Decrypt Panel */
DECRYPT_Access              : 'Каким способом Вы хотите получать доступ к своему кошельку? ',
DECRYPT_Title               : 'Выберите формат Вашего закрытого ключа: ',
WALL_Select              : 'Выберите кошелёк: ',

/* Add Wallet */
DECRYPT_Label_1                 : 'Что Вы хотите сделать? ',
WALL_GenerateNew                 : 'Создать новый кошелёк ',
DECRYPT_Radio_2                 : 'Выбрать файл с кошельком (Keystore/JSON) ',
DECRYPT_Radio_2_alt             : 'Выбрать файл с кошельком ',
DECRYPT_Radio_2_short           : 'ВЫБРАТЬ ФАЙЛ С КОШЕЛЬКОМ... ',
DECRYPT_Radio_3                 : 'Вставить или ввести Ваш закрытый ключ ',
ACCOUNT_AddWatch                 : 'Добавить счёт в список слежения ',
MNEM_Enter                 : 'Скопируйте или введите кодовую фразу ',
MNEM_Enter_Path            : 'Select HD derivation path ',
MNEM_Enter_PathCustom      : '(Custom) ',
DECRYPT_Label_2                 : 'Присвоить название: ',
DECRYPT_Label_3                 : 'Ваш кошелёк зашифрован.  Пожалуйста, введите пароль ',
DECRYPT_Label_4                 : 'Добавить счёт в список слежения ',
WARN_03               : 'Вы можете добавить счёт в "список слежения" на вкладке "кошельки", не загружая закрытый ключ. Добавление счёта в список слежения не означает, что вы имеете доступ к этому счёту, или можете распоряжаться эфиром (ether), лежащим на нём. ',
DECRYPT_Label_5                 : 'Введите адрес ',
WALL_Unlock                 : 'Отпереть кошелёк ',
WALL_Unlock_Short           : 'Отпереть ',
ACCOUNT_Add                 : 'Добавить счёт ',

/* Generate Wallets */
GEN_desc                    : 'Если Вы хотите создать несколько кошельков, Вы можете сделать это здесь ',
PW_Enter                 : 'Введите сложный пароль (не менее 9 символов) ',
PW_Enter           : 'Не забудьте сохранить это! ',
GEN_SuccessMsg              : 'Поздравляем! Ваш кошелёк успешно создан. ',
x_Keystore_Save                 : 'Сохраните Ваш файл Keystore/JSON или закрытый ключ. Не забывайте Ваш пароль! ',
ADDR_Save                 : 'Сохраните Ваш адрес. ',
GEN_Label_4                 : 'Напечатайте бумажный кошелёк или сохраните QR код. (по желанию) ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Сколько кошельков создать ',
BULK_Label_2                : 'Создать кошельки ',
BULK_SuccessMsg             : 'Поздравляем! Ваши кошельки успешно созданы. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'Адрес получателя ',
x_Amount                 : 'Сумма перевода ',
x_Amount_short           : 'Сумма ',
TOKEN_AddCustom                 : 'Другое ',
x_GasLimit                    : 'Газ ',
TX_Send_All          : 'Перевести весь доступный баланс ', // updated to be shorter
TX_Generate               : 'Сформировать транзакцию ',
TX_Unsigned                    : 'Готовая транзакция ',
TX_Signed                 : 'Подписанная транзакция ',
TX_Send_Short                  : 'Отправить транзакцию ',
SENDModal_Title             : 'Внимание! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Вы собираетесь перевести ',
SENDModal_Content_2         : 'на адрес ',
SENDModal_Content_3         : 'Вы уверены, что хотите сделать это? ',
SENDModal_Content_4         : 'К СВЕДЕНИЮ: Если произошла ошибка, Вам скорее всего надо положить ещё немного эфира (ether) на Ваш счёт, чтобы покрыть расходы на газ при пре переводе токенов. Расходы на газ оплачиваются эфиром (ether). ',
SENDModal_No                : 'Нет, отменить транзакцию! ',
SENDModal_Yes               : 'Да, я уверен! Выполнить транзакцию. ',

/* Tokens */
ADDR_Short                  : 'Адрес ',
TOKEN_Symbol                : 'Символ токена ',
TOKEN_Dec                   : 'Дробность (знаков после запятой) ',

/* Send Transaction */
TX_desc                  : 'Если Вы хотите перевести токены, используйте страницу "Отправить токены". ',
TX_warning               : 'Если Вы используете функции "только ETH" или "только ETC", перевод будет выполнен с помощью контракта. У некоторых сервисов могут возникнуть проблемы с приёмом таких переводов. Уточните этот вопрос. ',
SEND_Advanced              : '+Дополнительно: добавить данные ',
x_Data                  : 'Данные ',
TX_Send_ShortInfo              : 'Стандартная транзакция, использующая 21000 газа, будет стоить 0,000441 эфира (ether). Мы указываем цену газа немного выше минимально возможной: 0,000000021 эфира (ether), для того, чтобы ускорить выполнение танзакций. Мы не берём комиссию за выполнение транзакций. ',

/* Send Transaction Modals */
TRANSModal_Title            : 'Транзакции вида "только ETH" и "только ETC" ',
TRANSModal_Content_0        : 'О видах транзакций и сервисах: ',
TRANSModal_Content_1        : '**Эфир (ether, обычная транзакция): ** Выполняет обычный перевод напрямую с одного адреса на другой. Используется стандартное количесвто газа: 21000. В большинстве случаев, перевод ETH, выполненный этим способом, можно будет продублировать для ETC. ',
TRANSModal_Content_2        : '**Только ETH: ** Выполняет перевод через [контракт Тимона Раппа, защищающий от дублирования переводов (рекомендован ВБ)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/), поэтому перевод будет выполнен только в **ETH**. ',
TRANSModal_Content_3        : '**Только ETC: ** Выполняет перевод через [контракт Тимона Раппа, защищающий от дублирования переводов (рекомендован ВБ)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/), поэтому перевод будет выполнен только в **ETC**. ',
TRANSModal_Content_4        : '**Coinbase и ShapeShift: ** Отправляйте им только обычные транзакции. Если Вы отправите им транзакцию вида "только ...", то Вам придётся обращаться к их службе поддержки, чтобы они вручную пополнили Ваш баланс или вернули бы Вам Ваш эфир (ether). [Вы также можете попробовать использовать инструмент "split" от Shapeshift.](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex:** Проблем не выявлено.  Можно использовать транзакции любого вида. ',
TRANSModal_Yes              : 'Спасибо, я всё понял. ',
TRANSModal_No               : 'Чёрт, теперь я окончательно запутался.  Помогите мне. ',

/* Offline Transaction */
OFFLINE_Title               : 'Сформировать и отправить оффлайн транзакцию ',
OFFLINE_Desc                : 'Оффлайн транзакция формируется за тра шага. Вы должны выполнить шаги №1 и №3 на компьютере, подключённом к интернету (на онлайн компьютере), а шаг №2 на компьютере, отсоединённом от сети (на оффлайн компьютере). Это гарантирует, что подключённые к интернет устройства не получат доступа к Вашим закрытым ключам. ',
OFFLLINE_Step1_Title        : 'Шаг №1: Подготовка информации (онлайн компьютер) ',
OFFLINE_Step1_Button        : 'Подготовка информации ',
ADDR_From       : 'Адрес отправителя ',
OFFLINE_Step1_Label_2       : 'Внимание: Это адрес ОТПРАВИТЕЛЯ, а не адрес получателя. № перевода (nonce) определяется для адреса отправителя. При использовании оффлайн компьютера, физически изолированного от сети, это будет адрес счёта "холодного хранения" (cold-storage). ',
OFFLINE_Step2_Title         : 'Шаг №2: Формирование транзакции (оффлайн компьютер) ',
ADDR_To       : 'Адрес получателя ',
OFFLINE_Step2_Label_2       : 'Сумма перевода ',
x_GasPrice                  : 'Цена газа ',
x_GasPriceDesc                 : 'Это отображалось на шаге №1 на Вашем онлайн компьютере. ',
x_GasLimit       : 'Лимит газа ',
x_GasLimitDesc      : 'Лимит газа по умолчанию: 21000. При использовании контрактов или передаче дополнительных данных может быть необходимо указать другое значение. Неистраченный газ будет Вам возвращён. ',
x_Nonce                     : '№ перевода (nonce) ',
x_NonceDesc                 : 'Это отображалось на шаге №1 на Вашем онлайн компьютере. ',
x_Data       : 'Данные ',
x_DataDesc      : 'Это необязательный параметр. Данные обычно указывают при использовании контрактов. ',
OFFLINE_Step2_Label_7       : 'Выберите или введите ваш закрытый ключ или JSON. ',
OFFLINE_Step3_Title         : 'Шаг №3: Выполнить транзакцию (онлайн компьютер) ',
OFFLINE_Step3_Label_1       : 'Вставьте подписанную транзакцию с шага №2 и нажмите кнопку "ВЫПОЛНИТЬ ТРАНЗАКЦИЮ". ',

/* Deploy Contracts */
CONTRACT_GenBytecode                : 'Сформировать байткод ',
CONTRACT_GenBytecoded               : 'Сформированный байткод ',
TX_Sign                  : 'Подписать транзакцию ',
CONTRACT_GenInterface               : 'Сформированный интерфейс ',

/* My Wallet */
WALL_Nickname                  : 'Название кошелька ',
MYWAL_Address               : 'Адрес кошелька ',
ACCOUNT_Balance                   : 'Баланс ',
WALL_Edit_Short                  : 'Редактировать ',
WALL_View_Short                  : 'Просмотреть ',
WALL_Remove                : 'Удалить ',
WALL_RemoveWal             : 'Удалить кошелёк: ',
WALL_WatchOnlyAccounts             : 'Список слежения ',
WALL_Viewing               : 'Просматриваемый кошелёк ',
WALL_Hide                  : 'Скрыть информацию о кошельке ',
WALL_Edit                : 'Редактировать кошелёк ',
WALL_Name                  : 'Имя кошелька ',
WARN_06             : 'Внимание! Вы собираетесь удалить кошелёк ',
WARN_07             : 'Убедитесь, что Вы **сохранили закрытый ключ или файл Keystore / JSON и пароль** от этого кошелька, прежде чем Вы удалите этот кошелёк. ',
WARN_08             : 'Если Вы планируете в будущем использовать этот кошелёк в MyEtherWallet CX, Вам надо будет вручную заново добавить его, указав закрытый ключ или файл JSON и пароль. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Позволяет скачать закрытые ключи в различных форматах, а также повторно напечатать Ваши бумажные кошельки. Вам это понадобится, когда Вы захотите [импортировать Ваши счета в geth или Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Для проверки баланса Ваших счетов мы рекомендуем использовать браузер блокчейна, например [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Позволяет Вам скачать Ваши закрытые ключи в различных форматах, а также повторно напечатать Ваши бумажные кошельки. ',
VIEWWALLET_SuccessMsg       : 'Поздравляем! Вот информация о Вашем кошельке. ',

/* Chrome Extension */
ERROR_CX_01                  : 'У Вас нет сохранённых кошельков. Чтобы создать кошелёк, нажмите ["Создать кошелёк"](/cx-wallet.html#add-wallet)! ',
CX_quicksend                : 'Моментальный перевод ', // if no appropriate translation, just use "Send"

/* Node Switcher */
NODE_Title                  : 'Настроить собственный узел',
NODE_Subtitle               : 'Для подключения к локальному узлу...',
WARN_05                : 'Ваш узел должен использовать протокол HTTPS, чтобы MyEtherWallet.com мог с ним работать. Вы можете [скачать репозиторий MyEtherWallet & и запустить его локально](https://github.com/kvhnuke/etherwallet/releases/latest) чтобы иметь возможность работать с любыми узлами, или получите бесплатный SSL сертификат на [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Имя узла',
NODE_Port                   : 'Порт узла',
NODE_CTA                    : 'Сохранить и подключиться к собственному узлу',

/* Contracts */
CONTRACT_Title              : 'Адрес контракта ',
CONTRACT_Title_2            : 'Выбрать имеющийся контракт ',
CONTRACT_Json               : 'ABI / JSON интерфейс ',
CONTRACT_Interact_Title     : 'Прочитать / записать контракт ',
CONTRACT_Interact_CTA       : 'Выбрать функцию ',
CONTRACT_Bytecode           : 'Байткод ',
CONTRACT_Read               : 'ПРОЧИТАТь ',
CONTRACT_Write              : 'ЗАПИСАТЬ ',

/* Swap / Exchange */
SWAP_rates                  : "Текущие котировки ",
SWAP_init_1                 : "Я хочу обменять мои ",
SWAP_init_2                 : " на ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Поехали! ", // or "Continue"
SWAP_information            : "Информация об операции",
x_Amount               : "Сумма для отправки ",
SWAP_rec_amt                : "Сумма к получению ",
SWAP_your_rate              : "Ваш курс ",
SWAP_rec_add                : "Адрес получателя ",
SWAP_start_CTA              : "Начать обмен ",
SWAP_ref_num                : "Идентификатор операции ",
SWAP_time                   : "Время до отправки ",
SWAP_progress_1             : "Заявка выставлена ",
SWAP_progress_2             : "Ждём получения ваших ", // Waiting for your BTC...
SWAP_progress_3             : "Получено! ", // ETH Received!
SWAP_progress_4             : "Отправляем ваши {{orderResult.output.currency}} ",
SWAP_progress_5             : "Заявка выполнена ",
SWAP_order_CTA              : "Пожалуйста, отправьте ", // Please send 1 ETH...
SWAP_unlock                 : "Отоприте ваш кошелёк для отправки ETH или Tokens непосредственно с этой страницы. ",

/* Sign Message */
MSG_message                 : 'Сообщение ',
MSG_date                    : 'Дата ',
MSG_signature               : 'Подпись ',
MSG_verify                  : 'Проверить сообщение ',
MSG_info1                   : 'Укажите сегдоняшную дату, чтобы подпись не могла быть повторно использована в другой день. ',
MSG_info2                   : 'Укажите ваш псевдоним и то, где вы этот псевдоним используете, чтобы никто другой не смог его использовать. ',
MSG_info3                   : 'Укажите цель отправки сообщения, чтобы оно не могло быть использовно с другой целью. ',

/* Mnemonic */
MNEM_1                      : 'Пожалуйста, выберите адрес для выполнения операции. ',
MNEM_2                      : 'Одна кодовая фраза может использоваться для получения доступа к нескольким кошелькам или адресам. Пожалуйста, выберите адрес, который вы хотите использовать в этот раз. ',
MNEM_more                   : 'Следующие адреса ',
MNEM_prev                   : 'Предыдущие адреса ',
TOKEN_AddCustom                 : 'Добавить свой токен ',
TOKEN_hide                  : 'Спрятать токены ',
TOKEN_show                  : 'Отправить все токены ',
x_GasLimit                   : 'Лимит газа ', // changd in ENG to Gas Limit:
WARN_02              : 'Вы попали сюда по ссылке, которая уже содержит в себе адрес, сумму, лимит газа и дополнительные параметры транзакции. ВЫ можете изменить эти данные перед отправкой транзакции. Для начала отоприте ваш кошелёк. ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S ',
DECRYPT_Ledger_1                : 'Присоедините ваш Ledger Nano S ',
DECRYPT_Ledger_2                : 'Запустите приложение Ethereum (или приложение контракта) ',
DECRYPT_Ledger_3                : 'Убедитесь, что использование из браузера разрешено в настройках ',
DECRYPT_Ledger_4                : 'Если в настройках нет использования из браузера, убедитесь, что у вас [прошивка версии >1.2](https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_0a               : 'Перезапустите MyEtherWallet через безопасное (SSL) соединение ',
DECRYPT_Ledger_0b               : 'Перезапустите MyEtherWallet с браузере [Chrome](https://www.google.com/chrome/browser/desktop/) или [Opera](https://www.opera.com/) ',
DECRYPT_Ledger_scan             : 'Подключиться к Ledger Nano S ',
x_Trezor                    : 'TREZOR ',
DECRYPT_Trezor_scan             : 'Подключиться к TREZOR ',
DECRYPT_Trezor_select           : 'Это код восстановления TREZOR ',

/* Error Messages */
ERROR_0                     : 'Пожалуйста, введите сумму корректно. ',
ERROR_1                     : 'Пароль должен содержать не менее 9 символов. Пожалуйста, используйте сложный пароль. ',
ERROR_2                     : 'К сожалению, мы не смогли определить формат файла кошелька. ',
ERROR_3                     : 'Этот файл не является файлом кошелька. ',
ERROR_4                     : 'Такая единица измерения не существует. Пожалуйста, укажите одну из следующих единиц измерения ',
ERROR_5                     : 'Неправильный адрес. ',
ERROR_6                     : 'Неверный пароль. ',
ERROR_7                     : 'Некорректная сумма. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Некорректно указан лимит газа. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Недопустимые данные. (Must be hex.) ', // 9
ERROR_10                    : 'Некорректно указано количество газа. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Неверный номер перевода (nonce). (Must be integer.) ', // 11
ERROR_12                    : 'Подписанная транзакция некорректна. ',
ERROR_13                    : 'Кошелёк с таким названием уже существует. ',
ERROR_14                    : 'Кошелёк не найден. ',
ERROR_15                    : 'Предложение с таким идентификатором не существует или при чтении предложения произошла ошибка. ',
ERROR_16                    : 'Кошелёк с таким адресом уже находится в хранилище. Просмотрите в списке кошельков. ',
ERROR_17                    : 'Недостаточно средств. На счёте, с которого вы пытаетесь отправить транзакцию, не хватает средств. Вам необходимо иметь не менее 0.01 эфира (ether) на Вашем счету, чтобы покрыть расходы на газ. Пожалуйста, пложите немного эфира (ether) на счёт и попробуйте снова. ',
ERROR_18                    : 'Транзакция могла бы истратить весь газ. Это значит, что Вы уже голосовали по данному предложению, или период обсуждения данного предложения закончился. ',
ERROR_19                    : 'Неправильный символ ',
ERROR_20                    : 'Not a valid ERC-20 token', // 20
ERROR_21                    : 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative.', // 21
ERROR_22                    : 'Please enter a valid node name', // 22
ERROR_23                    : 'Please enter a valid URL. If you are on https, your URL must be https', // 23
ERROR_24                    : 'Please enter a valid port. ', // 24
ERROR_25                    : 'Please enter a valid chain ID. ', // 25
ERROR_26                    : 'Please enter a valid ABI. ', // 26
ERROR_27                    : 'Minimum amount: 0.01. Maximum Amount: ',
ERROR_28                    : 'В будущем, для доступа к этому кошельку **Вам понадобится либо файл Keystore/JSON вместе с паролем,  либо закрытый ключ**. Пожалуйста, сохраните их и сделайте резервную копию! Если Вы потеряете их, то не сможете восстановить доступ к Вашему кошельку. Обратитесь к [справке](https://www.myetherwallet.com/#help) за инструкциями. ',
ERROR_29                    : 'Please enter a valid user and password. ', // 29
ERROR_30                    : 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
ERROR_31                    : 'Please enter a valid secret phrase. ', // 31
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : 'Адрес указан верно ',
SUCCESS_2                   : 'Кошелёк успешно расшифрован ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ',
SUCCESS_4                   : 'Ваш кошелёк успешно добавлен ',
SUCCESS_5                   : 'Выбранный файл ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',

/* Geth Error Messages */
GETH_InvalidSender          : 'Неверный адрес отправителя ',
GETH_Nonce                  : 'Номер перевода (nonce) слишком мал ',
GETH_Cheap                  : 'Цена газа слишком низкая ',
GETH_Balance                : 'Баланс недостаточен ',
GETH_NonExistentAccount     : 'Счёт не существует или баланс счёта слишком мал ',
GETH_InsufficientFunds      : 'Недостаточно средств для ГАЗ * ЦЕНА + СУММА ',
GETH_IntrinsicGas           : 'Недостаточно газа для выполнения транзакции ',
GETH_GasLimit               : 'Превышен лимит газа на блок ',
GETH_NegativeValue          : 'Отрицательная сумма ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "Транзакция с данным хэшем уже импортирована.",
PARITY_Old                  : "Номер перевода (nonce) слишком маленький. Попробуйте увеличить номер перевода (nonce).",
PARITY_TooCheapToReplace    : "Комиссия транзакции слишком низкая. В очереди уже есть другая транзакция с таким же номером перевода (nonce). Попробуйте увеличитьразмер комиссии или номер перевода (nonce).",
PARITY_LimitReached         : "Слишком много транзакций в очереди. Ваша транзакция была удалена из-за превышения лимита. Попробуйте увеличить размер комиссии.",
PARITY_InsufficientGasPrice : "Комиссия транзакции слишком низкая. Она не соответствует минимальному размеру комиссии для вашего узла (минимальная комиссия: {}, ваша комиссия: {}). Попробуйте увеличить размер комиссии.",
PARITY_InsufficientBalance  : "Недостаточно средств. На счёте, с которого вы пытаетесь отправить транзакцию, не хватает средств. Требуется {}, а имеется только: {}.",
PARITY_GasLimitExceeded     : "Цена транзакции превышает текущий лимит газа. Лимит: {}, цена: {}. Поробуйте уменьшить отведённое количество газа.",
PARITY_InvalidGasLimit      : "Отведённое количество газа меньше лимита.",

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : 'Спасибо нашим переводчикам ',
z_TRANSLATE1            : '[Михаил Владимиров](https://www.myetherwallet.com/?gaslimit=21000&to=0x6ff323e36bfdb20502b23780695f4e77e36cde95&value=0.1#send-transaction) ',
z_TRANSLATE2            : '',
z_TRANSLATE3            : '',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''

};

module.exports = ru;
