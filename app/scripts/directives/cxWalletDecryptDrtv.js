'use strict';
var cxWalletDecryptDrtv = function() {
	return {
        restrict : "E",
        template : '<div class="row">\n \
      <div class="col-md-4 col-sm-6">\n \
        <h4> Select a Wallet: </h4>\n \
        <div class="radio">\n \
          <label><input type="radio" name="selectedWallet" value="0xb9836ec1f42bd48331bceaedb74a6bcdc22832bd"> KVH Test Wallet <small>(626.5540822 Ether)</small></label>\n \
        </div>\n \
        <div class="radio">\n \
          <label><input type="radio" name="selectedWallet" value="0xb9836ec1f42bd48331bceaedb74a6bcdc22832bd"> KVH Test Wallet <small>(626.5540822 Ether)</small></label>\n \
        </div>\n \
      </div>\n \
      <div class="col-md-4 col-sm-6">\n \
        <h4> Enter the Password: </h4>\n \
        <input class="form-control" type="password" placeholder="Password" id="sendTransactionPin">\n \
      </div>\n \
      <div class="col-md-4 col-sm-6" id="walletuploadbutton">\n \
        <h4 id="uploadbtntxt-wallet"> Access Your Wallet:</h4>\n \
        <div class="form-group"><a class="btn btn-primary btn-block" id="decryptSendTx">UNLOCK WALLET</a></div>\n \
        <div id="decryptStatus1"></div>\n \
      </div>\n \
    </div>'
  };
};
module.exports = cxWalletDecryptDrtv;
