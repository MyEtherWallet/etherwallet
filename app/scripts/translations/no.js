// Norwegian
'use strict';
var no = function() {}
no.code = 'no';
no.data = {

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
WALL_Add               : 'Legg til lommebok ',
BULK_Generate            : 'Opprett flere lommebøker ',
x_Contact                 : 'Kontakt ',
CONTRACT_Title               : 'Kontrakt ',
CONTRACT_Deploy          : 'Utplasser kontrakt ',
ENS_Title                     : 'ENS',
WALL_Create            : 'Create Wallet ',
WALL_Create            : 'Opprett lommebok ',
x_Help                    : 'Hjelp ',
CONTRACT_Interact        : 'Samhandle med Kontrakt ',
CONTRACT_Multisig                : 'Multisig ',
WALL_walletViewCX               : 'Mine lommebøker ',
x_Offline                 : 'Send Offline ',
TX_Send_Title             : 'Send Ether & Tokens ',
TX_Send_ShortTokens              : 'Send Tokens ',
MSG_Sign                 : 'Signér Melding ',
SWAP_Title                    : 'Veksling ',
WALL_View              : 'Vis lommebok-info ',
WALL_Your             : 'Dine lommebøker ',

/* General */
x_Access                    : 'Åpne ',
ADDR_Desc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Du kjenner kanskje dette som ditt "kontonummer" eller din "offentlige nøkkel". Dette er informasjonen som du sender til folk så de kan sende deg ether (en lang rekke tilfeldige tall og bokstaver som starter med "0x"). Ikonet er en enkel måte å kjenne igjen adressen din på. ',
ADDR_                   : 'Din adresse ',
x_Cancel                    : 'x_Annuler ',
x_CSV                       : 'CSV-fil (ukryptert) ',
x_Download                  : 'Last ned ',
x_Json                      : 'JSON-fil (ukryptert) ',
x_JsonDesc                  : 'Dette er det ukrypterte JSON-formatet av din private nøkkel. Dette betyr at du ikke trenger noe passord, men også at den som finner din JSON kan få tilgang til lommeboken din og etherne dine uten passord. ',
x_Keystore                  : 'Keystore-fil (UTC / JSON · Anbefalt · Kryptert) ',
x_Keystore2                 : 'Keystore-fil (UTC / JSON) ',
x_KeystoreDesc              : 'Denne Keystore-filen samsvarer med formatet som brukes av Mist, så du enkelt kan importere den i fremtiden. Det er den anbefalte filen å laste ned og sikkerhetskopiere. ',
x_Mnemonic                  : 'Mnemonisk Frase ',
x_ParityPhrase              : 'Parity-frase ',
PW_                  : 'Passord ',
x_Print                     : 'Skriv ut papirlommebok ',
x_PrintDesc                 : 'Profftips: Klikk "skriv ut" og lagre som PDF, selv om du ikke har noen skriver! ',
x_PrintShort                : 'Skriv ut ',
x_PrivKey                   : 'Privat nøkkel (ukryptert) ',
x_PrivKey2                  : 'Privat nøkkel ',
x_PrivKeyDesc               : 'Dette er den ukrypterte tekstversjonen av den private nøkkelen din, noe som betyr at det ikke er nødvendig med noe passord. Hvis noen skulle få tak i den ukrypterte private nøkkelen din, ville de få tilgang til lommeboken din uten å bruke passord. Derfor er krypterte nøkler vanligvis å anbefale. ',
x_Save                      : 'x_Lagre ',
x_TXT                       : 'TXT-fil (ukryptert) ',
WALL_                    : 'Lommebok ',

/* Header */
WARN_01               : 'Sjekk alltid nettsideadressen før du bruker eller oppretter en lommebok. Pass opp for "phishing"-nettsider! ',
WARN_04                : 'Sørg for at du har **eksterne sikkerhetskopier** av alle lommebøker som du lagrer her. Mye kan hende som vil kunne medføre at du mister informasjonen i denne Chrome-utvidelsen, inkludert avinstallasjon og reinstallasjon av utvidelsen. Denne utvidelsen gir deg enkel tilgang til lommebøkene dine, men er **ikke** en måte å sikkerhetskopiere dem på. ',
FOOTER_Tagline                 : 'Open Source JavaScript Client-Side Ether Wallet ', /* Intentionally not translated */
CX_Tagline                  : 'Open Source JavaScript Client-Side Ether Wallet Chrome Extension ', /* Intentionally not translated */

/* Footer */
FOOTER_1                    : 'Et åpen-kildekode-, javascript-, klient-side-verktøy for å opprette Ethereum-lommebøker & sende transaksjoner. ',
FOOTER_1b                   : 'Skapt av ',
FOOTER_2                    : 'Donasjoner mottas med takk: ',
FOOTER_3                    : 'Klient-side lommebok-oppretting av ',
FOOTER_4                    : 'Ansvarsfraskrivelse ',

/* Sidebar */
ACCOUNT_Info         : 'Kontoinformasjon ',
ACCOUNT_Address         : 'Kontoadresse ',
ACCOUNT_Balance          : 'Saldo på konto ',
TOKEN_Balance            : 'Token-saldo ',
SIDEBAR_Equiv               : 'Tilsvarende verdier ',
TX_History        : 'Transaksjonshistorikk ',
SIDEBAR_donation            : 'MyEtherWallet er en gratis åpen-kildekode-service som er dedikert til å ivareta ditt personvern og din sikkerhet. Jo flere donasjoner vi får, jo mer tid kan vi bruke til å lage nye funksjoner, lytte til tilbakemeldinger, og gi deg det du ønsker. Vi er bare to personer som prøver å forandre verden. Vil du hjelpe oss? ',
SIDEBAR_donate              : 'Doner ',
SIDEBAR_thanks              : 'TAKK!!! ',

/* Decrypt Panel */
DECRYPT_Access              : 'Hvordan ønsker du å få tilgang til lommeboken din? ',
DECRYPT_Title               : 'Velg formatet på din private nøkkel: ',
WALL_Select              : 'Velg en lommebok: ',

/* Add Wallet */
DECRYPT_Label_1                 : 'Hva ønsker du å gjøre? ',
WALL_GenerateNew                 : 'Opprett ny lommebok ',
DECRYPT_Radio_2                 : 'Velg lommebok-filen din (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : 'Velg lommebok-fil ',
DECRYPT_Radio_2_short           : 'VELG LOMMEBOK-FIL... ',
DECRYPT_Radio_3                 : 'Lim/skriv inn din private nøkkel ',
ACCOUNT_AddWatch                 : 'Legg til en konto for overvåkning ',
MNEM_Enter_Path            : 'Velg "HD derivation" variant ',
MNEM_Enter_PathCustom      : '(tilpasset) ',
MNEM_Enter                 : 'Lim inn/tast din mnemoniske frase ',
DECRYPT_Label_2                 : 'Lag et kallenavn: ',
DECRYPT_Label_3                 : 'Filen din er kryptert. Vennligst oppgi passordet ',
DECRYPT_Label_4                 : 'Legg til en konto for overvåkning ',
WARN_03               : 'Du kan legge til hvilken som helst konto som du vil overvåke på lommebok-siden uten å laste opp en privat nøkkel. Dette betyr ** ikke ** at du har tilgang til denne lommeboken, eller at du kan overføre ether fra den. ',
DECRYPT_Label_5                 : 'Oppgi adressen ',
WALL_Unlock                 : 'Lås opp lommeboen din ',
WALL_Unlock_Short           : 'Lås opp ',
ACCOUNT_Add                 : 'Legg til konto ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S ',
DECRYPT_Ledger_1                : 'Koble til din Ledger Nano S ',
DECRYPT_Ledger_2                : 'Åpne Ethereum-applikasjonen (eller kontraktsapplikasjonen) ',
DECRYPT_Ledger_3                : 'Sjekk at nettleserstøtte er aktivert i innstillingene. ',
DECRYPT_Ledger_4                : 'Hvis du ikke finner noen nettleserstøtte i innstillingene, sjekk at du har [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_0a               : 'Åpne MyEtherWallet på nytt på en sikker (SSL) forbindelse. ',
DECRYPT_Ledger_0b               : 'Åpne MyEtherWallet på nytt med [Chrome](https://www.google.com/chrome/browser/desktop/) eller [Opera](https://www.opera.com/) ',
DECRYPT_Ledger_scan             : 'Koble til Ledger Nano S ',
x_Trezor                    : 'TREZOR ',
DECRYPT_Trezor_scan             : 'Koble til TREZOR ',
DECRYPT_Trezor_select           : 'Dette er en TREZOR seed ',

/* Generate Wallets */
GEN_desc                    : 'Hvis du vil opprette flere lommebøker, kan du gjøre det her ',
PW_Enter                 : 'Oppgi et sterkt passord (minst 9 tegn) ',
PW_Enter           : 'Glem IKKE å ta vare på dette! ',
GEN_SuccessMsg              : 'Suksess! Lommeboken din har blitt opprettet. ',
x_Keystore_Save                 : 'Lagre din Keystore-fil og/eller private nøkkel. Ikke glem passordet ditt ovenfor. ',
ADDR_Save                 : 'Lagre adressen din. ',
GEN_Label_4                 : 'Valgfritt: Skriv ut din papir-lommebok, eller lagre en QR-kode-versjon.',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Antall lommebøker som skal opprettes ',
BULK_Label_2                : 'Opprett lommebøker ',
BULK_SuccessMsg             : 'Suksess! Lommebøkene dine har blitt opprettet. ',

/* Sending Ether and Tokens */
ADDR_To                   : 'Til-adresse ',
x_Amount                 : 'Beløp som skal sendes ',
x_Amount_short           : 'Beløp ',
TOKEN_AddCustom                 : 'Tilpasning ',
x_GasLimit                    : 'Gas ',
TX_Send_All          : 'Overfør total tilgjengelig saldo ',  // updated to read 'Send Entire Balance'
TX_Generate               : 'Generer transaksjon ',
TX_Unsigned                    : 'Rå-transaksjon ',
TX_Signed                 : 'Signert transaksjon ',
TX_Send_Short                  : 'Send transaksjon ',
TOKEN_AddCustom                 : 'Legg til Token ',
SENDModal_Title             : 'Advarsel! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Du er i ferd med å sende ',
SENDModal_Content_2         : 'til adressen ',
SENDModal_Content_3         : 'Er du sikker på at du ønsker å gjøre dette? ',
SENDModal_Content_4         : 'NB: Hvis det oppstår en feil, må du sannsynligvis legge til ether til kontoen din for å dekke "gas"-kostnaden for å sende ether/token. "Gas" betales i ether. ',
SENDModal_No                : 'Nei, få meg ut herfra! ',
SENDModal_Yes               : 'Ja, jeg er sikker! Gjennomfør transaksjonen. ',

/* Tokens */
ADDR_Short                  : 'Adresse ',
TOKEN_Symbol                : 'Token-symbol ',
TOKEN_Dec                   : 'Desimaler ',
TOKEN_show                  : 'Vis Alle Tokens ',
TOKEN_hide                  : 'Skjul Tokens ',

/* Send Transaction */
TX_desc                  : 'Hvis du ønsker å sende token, vennligst bruk "Send Token"-siden i stedet. ',
TX_warning               : 'Hvis du bruker "Kun ETH"- eller "Kun ETC"-funksjonene, sender du via en kontrakt. Noen tjenester har problemer med å akseptere disse transaksjonene. Les mer. ',
SEND_Advanced              : '+Avansert: Legg til data ',
x_Data                  : 'Data ',
x_GasLimit                   : 'Gas Limit ',
TX_Send_ShortInfo              : 'En standard transaksjon som bruker 21000 gas vil koste 0,000441 ETH. Vi bruker en litt-over-minimum gas-pris på 0,000000021 ETH for å sikre at transaksjonen blir raskt behandlet. Vi tar ikke noe transaksjonsgebyr. ',

/* Send Transaction Modals */
TRANSModal_Title            : '"Kun ETH"- og "Kun ETC"-transaksjoner ',
TRANSModal_Content_0        : 'En notis om forskjellige transaksjoner og tjenester: ',
TRANSModal_Content_1        : '**ETH (Standardtransaksjon): ** Dette Oppretter en standardtransaksjon direkte fra en adresse ti en annen. Den har standard gas på 21000. Det er sannsynlig at ETH som sendes med denne metoden også vil bli sendt som ETC på ETC-kjeden (hvis kontoen inneholder både ETH og ETC). Dette er anbefalt metode hvis kontoen kun inneholder ETH. ',
TRANSModal_Content_2        : '**Kun ETH: ** Dette sender via [Timon Rapp\'s replay-beskyttelseskontrakt (som anbefalt av VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) slik at du kun sender på **ETH**-kjeden. ',
TRANSModal_Content_3        : '**Kun ETC: ** Dette sender via [Timon Rapp\'s replay-beskyttelseskontrakt (som anbefalt av VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) slik at du kun sender på **ETC**-kjeden. ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift: ** Send kun via Standard transaksjon. Hvis du sender via "Kun"-kontraktene, vil du måtte ta kontakt med deres kundestøttepersonell for å manuelt legge til saldoen din eller få en tilbakebetaling. [Du kan også prøve Shapeshift sitt "splitte"-verktøy.](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex:** Ingen kjente problemer. Bruk det som passer. ',
TRANSModal_Yes              : 'Flott, jeg skjønner det nå. ',
TRANSModal_No               : 'Trøste og bære, nå er jeg bare enda mer forvirret. Hjelp meg. ',

/* Offline Transaction */
OFFLINE_Title               : 'Generer & send offline transaksjon ',
OFFLINE_Desc                : 'Generering av offline-transaksjoner kan utføres i tre steg. Du utfører steg 1 og 3 på en internettilknyttet datamaskin, og steg 2 på en offline/frakoblet datamaskon. Dette sikrer at dine private nøkler ikke kommer i kontakt med en internettilknyttet enhet. ',
OFFLLINE_Step1_Title        : 'Steg 1: Generer informasjon (internettilknyttet datamaskin) ',
OFFLINE_Step1_Button        : 'Generer informasjon ',
ADDR_From       : 'Fra-adresse ',
OFFLINE_Step1_Label_2       : 'NB: Dette er FRA-adressen, ikke TIL-adressen. "Nonce" genereres fra den opprinnelige kontoen. Hvis du bruker en frakoblet datamaskin, vil dette være adressen til "kald-lager"-kontoen (dvs. kontoen som lagres frakoblet internett). ',
OFFLINE_Step2_Title         : 'Steg 2: Generer transaksjon (frakoblet datamaskin) ',
ADDR_To       : 'Til-adresse ',
OFFLINE_Step2_Label_2       : 'Verdi / Beløp å sende ',
x_GasPrice                  : 'Gas-pris ',
x_GasPriceDesc                 : 'Dette kom fram i steg 1 på den internettilknyttede maskinen. ',
x_GasLimit       : 'Gas-grense ',
x_GasLimitDesc      : '21000 er standard gas-grense. Når du sender kontrakter eller ekstra data, kan det hende at grensen må settes høyere. Eventuelt ubrukt gas blir returnert til deg. ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'Dette kom fram i steg 1 på den internettilknyttede maskinen. ',
x_Data       : 'Data ',
x_DataDesc      : 'Dette er valgfritt. Data brukes ofte når du sender transaksjoner til kontrakter. ',
OFFLINE_Step2_Label_7       : 'Skriv inn / Velg din private nøkkel / JSON. ',
OFFLINE_Step3_Title         : 'Steg 3: Send / Publiser transaksjon (internettilknyttet datamaskin) ',
OFFLINE_Step3_Label_1       : 'Overfør (f.eks. via USB-minnepinne) den signerte transaksjonen fra steg 2 og lim den inn her. Trykk så "SEND TRANSAKSJON"-knappen. ',

/* Sign Message */
MSG_message                 : 'Melding ',
MSG_date                    : 'Dato ',
MSG_signature               : 'Signatur ',
MSG_verify                  : 'Verifiser Melding ',
MSG_info1                   : 'Inkluder dagens dato slik at signaturen ikke kan brukes på nytt på en annen dato. ',
MSG_info2                   : 'Inkluder brukernavnet ditt og hvor du benytter dette navnet slik at ingen andre kan benytte det. ',
MSG_info3                   : 'Inkluder en spesifikk grunn for meldingen så den ikke kan brukes på nytt for et annet formål. ',

/* Mnemonic */
MNEM_1                      : 'Vennligst velg adressen du vil jobbe med. ',
MNEM_2                      : 'Din "HD-mnemoniske frase" kan gi deg tilgang til flere lommebøker / adresser. Vennligst velg den adressen du vil jobbe med denne gangen. ',
MNEM_more                   : 'Flere Adresser ',
MNEM_prev                   : 'Forrige Adresse ',

/* Node Switcher */
NODE_Title                  : 'Sett opp en alternativ node',
NODE_Subtitle               : 'For å koble til en lokal node...',
WARN_05                : 'Noden din må være HTTPS for å muliggjøre tilkobling via MyEtherWallet.com. Du kan [laste ned MyEtherWallet-repoet & kjøre det lokalt](https://github.com/kvhnuke/etherwallet/releases/latest) for å koble til en hvilken som helst node. Eller du kan skaffe deg et gratis SSL-sertifikat via [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Nodens navn',
NODE_Port                   : 'Nodens port',
NODE_CTA                    : 'Lagre & bruk alternativ node',

/* Contracts */
CONTRACT_Title              : 'Kontraktadresse ',
CONTRACT_Title_2            : 'Velg eksisterende kontrakt ',
CONTRACT_Json               : 'ABI / JSON grensesnitt ',
CONTRACT_Interact_Title     : 'Les fra / Skriv til kontrakt ',
CONTRACT_Interact_CTA       : 'Velg en funksjon ',
CONTRACT_Bytecode           : 'Bytecode',
CONTRACT_Read               : 'LES ',
CONTRACT_Write              : 'SKRIV ',
CONTRACT_GenBytecode                : 'Generer Bytecode ',
CONTRACT_GenBytecoded               : 'Generert Bytecode ',
TX_Sign                  : 'Signer transaksjon ',
CONTRACT_GenInterface               : 'Generer grensesnitt ',

/* Swap / Exchange */
SWAP_rates                  : "Aktuelle vekslingskurser ",
SWAP_init_1                 : "Jeg vil veksle mine ",
SWAP_init_2                 : " med ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Gjennomfør! ", // "Let's do this!" or "Continue"
SWAP_information            : "Din informasjon ",
x_Amount               : "Beløp som sendes ",
SWAP_rec_amt                : "Beløp som mottas ",
SWAP_your_rate              : "Din vekslingskurs ",
SWAP_rec_add                : "Din mottakeradresse ",
SWAP_start_CTA              : "Start byttet ",
SWAP_ref_num                : "Ditt referansenummer ",
SWAP_time                   : "Gjenstående tid til å sende ",
SWAP_progress_1             : "Ordre initiert ",
SWAP_progress_2             : "Venter på dine ", // Waiting for your BTC...
SWAP_progress_3             : "Mottatt! ", // ETH Received!
SWAP_progress_4             : "Sender dine {{orderResult.output.currency}} ",
SWAP_progress_5             : "Ordre fullført ",
SWAP_order_CTA              : "Vennligst send ", // Please send 1 ETH...
SWAP_unlock                 : "Lås opp din lommebok for å sende ETH eller Tokens direkte fra denne siden. ",

/* My Wallet */
WALL_Nickname                  : 'Lommebok-kallenavn ',
MYWAL_Address               : 'Lommebok-adresse ',
ACCOUNT_Balance                   : 'Saldo ',
WALL_Edit_Short                  : 'Rediger ',
WALL_View_Short                  : 'Se på ',
WALL_Remove                : 'Fjern ',
WALL_RemoveWal             : 'Fjern lommebok: ',
WALL_WatchOnlyAccounts             : 'Dine "bare-se"-kontoer ',
WALL_Viewing               : 'Viser lommebok ',
WALL_Hide                  : 'Skjul lommebok-info ',
WALL_Edit                : 'Rediger lommebok ',
WALL_Name                  : 'Lommeboknavn ',
WARN_06             : 'Advarsel! Du er i ferd med å fjerne lommeboken din ',
WARN_07             : 'Vær sikker på at du har **lagret den private nøkkelen/JSON-filen og passordet** tilknyttet denne lommeboken før du fjerner den. ',
WARN_08             : 'Hvis du ønsker å bruke denne lommeboken med din MyEtherWallet Chrome-utvidelse i fremtiden, må du manuelt legge den til igjen ved å bruke den private nøkkelen/JSON og passord. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Dette gir deg muligheten til å laste ned ulike versjoner av private nøkler og skrive ut papirlommeboken din på nytt. Du vil kanskje gjøre dette for å [importere kontoen din til Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Hvis du bare ønsker å sjekke saldoen din, anbefaler vi at du bruker en "blockchain explorer" som f.eks. [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Dette gir deg muligheten til å laste ned ulike versjoner av private nøkler og skrive ut papirlommeboken din på nytt. ',
VIEWWALLET_SuccessMsg       : 'Suksess! Her er detaljene om din lommebok. ',

/* Chrome Extension */
ERROR_CX_01                  : 'Du har ennå ikke lagret noen lommebok. Klikk ["Legg til lommebok"](/cx-wallet.html#add-wallet) for å legge til en! ',
CX_quicksend                : 'Send ', // if no appropriate translation, just use "Send"

/* Error Messages */
ERROR_0                     : 'Vennligst oppgi et gyldig beløp. ',
ERROR_1                     : 'Passordet ditt må inneholde minst 9 tegn. Vennligst sørg for at det er et sterkt passord. ',
ERROR_2                     : 'Beklager! Vi kjenner ikke igjen denne typen lommebok-fil. ',
ERROR_3                     : 'Dette er ikke en gyldig lommebok-fil. ',
ERROR_4                     : 'Denne enheten eksisterer ikke, vennligst benytt en av de følgende enhetene ',
ERROR_5                     : 'Ugyldig adresse. ',
ERROR_6                     : 'Ugyldig passord. ',
ERROR_7                     : 'Ugyldig beløp. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Ugyldig gas-grense. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Ugyldig dataverdi. (Must be hex.) ', // 9
ERROR_10                    : 'Ugyldig gas-mengde. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Ugyldig nonce. (Must be integer.) ', // 11
ERROR_12                    : 'Ugyldig signert transaksjon. ',
ERROR_13                    : 'En lommebok med dette kallenavnet eksisterer allerede. ',
ERROR_14                    : 'Lommebok ikke funnet. ',
ERROR_15                    : 'Det ser ikke ut til at et forslag med denne ID-en eksisterer ennå, eller det er en feil ved innlesning av dette forslaget. ',
ERROR_16                    : 'En lommebok med denne adressen er allerede lagret. Vennligst sjekk lommebok-siden din. ',
ERROR_17                    : 'Utilstrekkelige midler. Kontoen du prøver å sende transaksjon fra har ikke nok midler. Du trenger minst 0,01 ether på kontoen din for å dekke gas-kostnaden. Vennligst legg til litt ether og prøv igjen. ',
ERROR_18                    : 'All gas vil bli brukt på denne transaksjonen. Dette betyr at du allerede har stemt på dette forslaget, eller at debatt-perioden er over. ',
ERROR_19                    : 'Ugyldig symbol ',
ERROR_20                    : 'er ikke en gyldig ERC-20-token. Hvis andre tokens holder på å lastes, vennligst fjern denne token og prøv igjen. ',
ERROR_21                    : 'Kunne ikke estimere gas. Det er enten ikke nok midler på kontoen, eller så gir den mottakende kontraktadressen en feilmelding. Prøv å justere gas-mengden manuelt, og fortsett. Feilmeldingen du får når du sender kan være mer informativ. ',
ERROR_22                    : 'Vennligst oppgi gyldig nodenavn ',
ERROR_23                    : 'Oppgi gyldig URL (internett-adresse), hvis du er på https må URL-en starte med https ',
ERROR_24                    : 'Vennligst oppgi gyldig port ',
ERROR_25                    : 'Vennligst oppgi gyldig kjede-ID ',
ERROR_26                    : 'Vennligst oppgi gyldig ABI ',
ERROR_27                    : 'Minimumsbeløp 0.01 ',
ERROR_28                    : '**Du trenger din Keystore-fil & passord eller din private nøkkel** for å få tilgang til denne lommeboken i framtiden. Vennligst lagre og sikkerhetskopier den eksternt! Det finnes ingen måte å gjenopprette en lommebok på hvis du ikke lagrer den. Les [hjelpesiden](https://www.myetherwallet.com/#help) for ytterligere instruksjoner (foreløpig kun på engelsk). ',
ERROR_29                    : 'Vennligst oppgi gyldig brukernavn og passord ',
ERROR_30                    : 'Vennligst oppgi et gyldig ENS-navn ',
ERROR_31                    : 'Ugyldig hemmelig frase ',
ERROR_32                    : 'Kunne ikke bytte node eller koble til noden du valgte.  Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'Lommeboken du har låst opp stemmer ikke overens med eierens adresse. ', // 33
ERROR_34                    : 'Navnet du prøver å avsløre er ikke likt navnet du har tastet inn. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : 'Gyldig adresse ',
SUCCESS_2                   : 'Dekrypteringen av lommeboken var vellykket ',
SUCCESS_3                   : 'Transaksjonen ble kringkastet til blokkjeden. Klikk for å se transaksjonen din og verifisere at den ble inkludert (mined), og at den ikke ga noen tom-for-gas- eller kontrakt-utførelsesfeil.  TX Hash:  ', //'Transaksjonen ble sendt inn. TX Hash ',
SUCCESS_4                   : 'Lommeboken din ble lagt til ',
SUCCESS_5                   : 'Valgt fil ',
SUCCESS_6                   : 'Tilkobling ble opprettet ',
SUCCESS_7                   : 'Meldingssignatur bekreftet',
WARN_02              : 'Du ankom via en lenke hvor adresse, verdi, gas, datafelt og/eller transaksjonstype (sendingsmodus) var ferdigutfylt. Du kan endre denne informasjonen før du sender. Lås opp lommeboken din for å komme i gang. ',

/* Geth Error Messages */
GETH_InvalidSender          : 'Feil på avsender ',
GETH_Nonce                  : 'For liten Nonce ',
GETH_Cheap                  : 'Gas-pris for lav til å kunne aksepteres ',
GETH_Balance                : 'Utilstrekkelig saldo ',
GETH_NonExistentAccount     : 'Kontoen eksisterer ikke eller saldoen er for lav ',
GETH_InsufficientFunds      : 'Utilstrekkelig med midler for gas * pris + verdi ',
GETH_IntrinsicGas           : 'Gas-egenverdi for lav ',
GETH_GasLimit               : 'Overskrider blokkens gas-grense ',
GETH_NegativeValue          : 'Negativ verdi ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "En transaksjon med samme hash har allerede blitt importert.",
PARITY_Old                  : "Transaksjonens nonce er for lav. Prøv å øke nonce gradvis (+1).",
PARITY_TooCheapToReplace    : "Transaksjonsavgiften er for lav. Det er en annen transaksjon med samme nonce i køen. Prøv å øke avgiften eller øke nonce (+1).",
PARITY_LimitReached         : "Det er for mange transaksjoner i køen. Transaksjonen din ble derfor droppet. Prøv å øke avgiften.",
PARITY_InsufficientGasPrice : "Transaksjonsavgiften er for lav. Den tilfredsstiller ikke minimumsavgiften til noden din. (minimum: {}, fått: {}). Prøv å øke avgiften.",
PARITY_InsufficientBalance  : "Utilstrekkelige midler. Kontoen du prøver å sende transaksjon fra har ikke nok midler. Påkrevd {} og fått: {}.",
PARITY_GasLimitExceeded     : "Transaksjonskostnaden overskrider nåværende gas-grense. Grense: {}, fått: {}. Prøv å redusere tilført gas.",
PARITY_InvalidGasLimit      : "Tilført mengde gas er over grensen.",

/* Translation Info */
// // Translation Info  [YOUR_NAME](https        : //www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · ·
z_TRANSLATEVersion           : '4.0',
z_TRANSLATEDesc             : 'Takk til oversetterne våre ',
z_TRANSLATE1            : '[mrstormlars](https://www.myetherwallet.com/?gaslimit=21000&to=0x6Dd9530b2Cb8B2d7d9f7D5D898b6456EC5D94f08&value=0.1#send-transaction) ',
z_TRANSLATE2            : '',
z_TRANSLATE3            : '',
z_TRANSLATE4            : '',
z_TRANSLATE5            : ''

};

module.exports = no;
