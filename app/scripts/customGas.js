// For token sale holders:
// 1. Add the address users are sending to
// 2. Add the gas limit users should use to send successfully (this avoids OOG errors)
// 3. Add any data if applicable
// 4. Add a message if you want.

// Token Calendar:
// http://www.tokensalecalendar.com/
// If you aren't on the above, you should get on it.

module.exports = [
{
  to:         '0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8',
  gasLimit:   21000,
  data:       '',
  msg:        'Thank you for donating to MyEtherWallet. TO THE MOON!'
},
{
  // DCORP
  to:         '0xD42433A8a0A1CEB73c8ff4e432463e2ee109039d',
  gasLimit:   100000,
  data:       '',
  msg:        'DCORP. Ends June 30, 2017.'
},
{
  // TenX PAY
  to:         '0xd43d09ec1bc5e57c8f3d0c64020d403b04c7f783',
  gasLimit:   130000,
  data:       '',
  msg:        'TenX PAY Token Sale. Start: June 24, 2017, 1pm UTC'
},
{
  // BANCOR
  to:         '0xBbc79794599b19274850492394004087cBf89710',
  gasLimit:   200000,
  data:       '',
  msg:        'Bancor. The sale has ended. Please do not send anymore. The network is borked enough as it is.'
},
{
  // FAKE STATUS
  to:         '0xc9f32ce1127e44c51cbd182d6364f3d707fd0d47',
  gasLimit:   -1,
  data:       '',
  msg:        '⚠ DO NOT SEND. THIS IS *** NOT *** THE ADDRESS FOR STATUS!!'
},
{
  // SONM
  to:         '0x0000',
  gasLimit:   200000,
  data:       '',
  msg:        'SuperDAO. Starts June 13, 2017.'
},
{
  // Status
  to:         '0x0000',
  gasLimit:   200000,
  data:       '',
  msg:        'Status. Starts June 17, 2017.'
},
{
  // OpenANX
  to:         '0x0000',
  gasLimit:   200000,
  data:       '',
  msg:        'OpenANX. Starts June 22, 2017.'
},
{
  // Adchain
  to:         '0x0000',
  gasLimit:   200000,
  data:       '',
  msg:        'Adchain. Starts June 26, 2017.'
},
{
  // OmiseGo
  to:         '0x0000',
  gasLimit:   200000,
  data:       '',
  msg:        'OmiseGo. Starts June 27, 2017.'
},
{
  // Santiment
  to:         '0x0000',
  gasLimit:   200000,
  data:       '',
  msg:        'Santiment. Starts June 30, 2017.'
},
{
  // Moeda
  to:         '0x4870E705a3def9DDa6da7A953D1cd3CCEDD08573',
  gasLimit:   200000,
  data:       '',
  msg:        'Moeda. Ends at block 4,111,557.'
}
]

