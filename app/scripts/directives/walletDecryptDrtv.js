'use strict';

// use this tool to be able to edit in HTML. I'm sorry. http://www.freeformatter.com/javascript-escape.html#ad-output
// if this file hasn't been edited since 2//22017, you can use this instead: https://gist.github.com/tayvano/b348a747f654c22e5a7bb445df539d66

var walletDecryptDrtv = function() {
	return {
        restrict : "E",
        template : '<article class=\"well decrypt-drtv row\" ng-controller=\'decryptWalletCtrl\'>\r\n \
  <!-- Column 1 - Select Type of Key -->\r\n \
  <section class=\"col-md-4 col-sm-6\">\r\n \
    <h4 translate=\"decrypt_Title\"> Select the format of your private key: <\/h4>\r\n \
    <label class=\"radio\"><input type=\"radio\" ng-model=\"walletType\" value=\"fileupload\" \/><span translate=\"x_Keystore2\">Keystore \/ JSON File<\/span><\/label>\r\n \
    <label class=\"radio\"><input type=\"radio\" ng-model=\"walletType\" value=\"pasteprivkey\" \/><span translate=\"x_PrivKey2\">Private Key<\/span><\/label>\r\n \
    <label class=\"radio\"><input type=\"radio\" ng-model=\"walletType\" value=\"pastemnemonic\" \/><span translate=\"x_Mnemonic\">Mnemonic Phrase<\/span><\/label>\r\n \
    <label class=\"radio\" ng-hide=\"globalService.currentTab==globalService.tabs.signMsg.id\"><input type=\"radio\" ng-model=\"walletType\" value=\"ledger\" \/>Ledger Nano S<\/label>\r\n \
    <label class=\"radio\" ng-hide=\"globalService.currentTab==globalService.tabs.signMsg.id\"><input type=\"radio\" ng-model=\"walletType\" value=\"trezor\" \/>TREZOR<\/label>\r\n \
    <label class=\"radio\" ng-hide=\"globalService.currentTab!==globalService.tabs.viewWalletInfo.id\"><input type=\"radio\" ng-model=\"walletType\" value=\"addressOnly\" \/><span>View with Address Only<\/span><\/label>\r\n \
  <\/section>\r\n \
  <!-- Column 1 - Select Type of Key -->\r\n \
  <!-- Column 2 - Unlock That Key -->\r\n \
  <section class=\"col-md-4 col-sm-6\">\r\n \
    <!-- if selected upload -->\r\n \
    <div id=\"selectedUploadKey\" ng-if=\"walletType==\'fileupload\'\">\r\n \
      <h4 translate=\"ADD_Radio_2_alt\">Select your wallet file:<\/h4>\r\n \
      <div class=\"form-group\">\r\n \
        <input style=\"display:none;\" type=\"file\" on-read-file=\"showContent($fileContent)\" id=\"fselector\" \/>\r\n \
        <a class=\"file-input btn btn-block btn-default btn-file marg-v-sm\" ng-click=\"openFileDialog()\" translate=\"ADD_Radio_2_short\">SELECT WALLET FILE... <\/a>\r\n \
        <div id=\"fuploadStatus\" ng-bind-html=\"fileStatus\"><\/div>\r\n \
      <\/div>\r\n \
      <div class=\"form-group\" ng-if=\"requireFPass\">\r\n \
        <p translate=\"ADD_Label_3\"> Your file is encrypted. Please enter the password: <\/p>\r\n \
        <input class=\"form-control\" type=\"password\" placeholder=\"{{ \'x_Password\' | translate }}\" ng-model=\"$parent.$parent.filePassword\" ng-class=\"Validator.isPasswordLenValid($parent.$parent.filePassword,0) ? \'is-valid\' : \'is-invalid\'\" ng-change=\"onFilePassChange()\" \/>\r\n \
      <\/div>\r\n \
    <\/div>\r\n \
    <!-- \/if selected upload -->\r\n \
    <!-- if selected type key-->\r\n \
    <div id=\"selectedTypeKey\" ng-if=\"walletType==\'pasteprivkey\'\">\r\n \
      <h4 translate=\"ADD_Radio_3\"> Paste \/ type your private key: <\/h4>\r\n \
      <div class=\"form-group\">\r\n \
        <textarea rows=\"4\" class=\"form-control\" placeholder=\"{{ \'x_PrivKey2\' | translate }}\" ng-model=\"$parent.$parent.manualprivkey\" ng-class=\"Validator.isValidPrivKey($parent.$parent.manualprivkey.length) ? \'is-valid\' : \'is-invalid\'\" ng-change=\"onPrivKeyChange()\" ng-keyup=\"$event.keyCode == 13 && decryptWallet()\"><\/textarea>\r\n \
      <\/div>\r\n \
      <div class=\"form-group\" ng-if=\"requirePPass\">\r\n \
        <p translate=\"ADD_Label_3\"> Your file is encrypted. Please enter the password: <\/p>\r\n \
        <input class=\"form-control\" type=\"password\" placeholder=\"{{ \'x_Password\' | translate }}\" ng-model=\"$parent.$parent.privPassword\" ng-class=\"Validator.isPasswordLenValid($parent.$parent.privPassword,0) ? \'is-valid\' : \'is-invalid\'\" ng-change=\"onPrivKeyPassChange()\" ng-keyup=\"$event.keyCode == 13 && decryptWallet()\">\r\n \
      <\/div>\r\n \
    <\/div>\r\n \
    <!-- \/if selected type key-->\r\n \
    <!-- if selected type mnemonic-->\r\n \
    <div id=\"selectedTypeMnemonic\" ng-if=\"walletType==\'pastemnemonic\'\">\r\n \
      <h4 translate=\"ADD_Radio_5\"> Paste \/ type your mnemonic: <\/h4>\r\n \
      <div class=\"form-group\">\r\n \
        <textarea rows=\"4\" class=\"form-control\" placeholder=\"{{ \'x_Mnemonic\' | translate}}\" ng-model=\"$parent.$parent.manualmnemonic\" ng-class=\"Validator.isValidMnemonic($parent.$parent.manualmnemonic) ? \'is-valid\' : \'is-invalid\'\" ng-change=\"onMnemonicChange()\" ng-keyup=\"$event.keyCode == 13 && decryptWallet()\"><\/textarea>\r\n \
      <\/div>\r\n \
    <\/div>\r\n \
    <!-- \/if selected type mnemonic-->\r\n \
    <!-- if selected type ledger-->\r\n \
    <div id=\"selectedTypeLedger\" ng-if=\"walletType==\'ledger\'\">\r\n \
      <ol>\r\n \
        <li translate=\"ADD_Ledger_0a\" class=\"text-danger\" ng-hide=\"isSSL\"> Re-open MyEtherWallet on a secure (SSL) connection <\/li>\r\n \
        <li translate=\"ADD_Ledger_0b\" class=\"text-danger\" ng-hide=\"isChrome\"> Re-open MyEtherWallet using Google Chrome or Opera <\/li>\r\n \
        <li translate=\"ADD_Ledger_1\">Connect your Ledger Nano S<\/li>\r\n \
        <li translate=\"ADD_Ledger_2\">Open the Ethereum application (or a contract application)<\/li>\r\n \
        <li translate=\"ADD_Ledger_3\">Verify that Browser Support is enabled in Settings<\/li>\r\n \
        <li translate=\"ADD_Ledger_4\">If no Browser Support is found in settings, verify that you have Firmware >1.2<\/li>\r\n \
      <\/ol>\r\n \
    <\/div>\r\n \
    <!-- \/if selected type ledger-->\r\n \
    <!-- if selected type trezor-->\r\n \
    <div id=\"selectedTypeTrezor\" ng-if=\"walletType==\'trezor\'\">\r\n \
      <div class=\"form-group\"><a class=\"btn btn-primary btn-block btnAction\" ng-show=\"walletType==\'trezor\'\" ng-click=\"scanTrezor()\" translate=\"ADD_Trezor_scan\">SCAN<\/a><\/div>\r\n \
      <p ng-show=\"trezorError\" class=\"text-center text-danger\"><strong>{{trezorErrorString}}<\/strong><\/p>\r\n \
    <\/div>\r\n \
    <!-- \/if selected type ledger-->\r\n \
    <!-- if selected addressOnly-->\r\n \
    <div id=\"selectedTypeKey\" ng-if=\"walletType==\'addressOnly\'\">\r\n \
      <h4 translate=\"x_Address\"> Your Address <\/h4>\r\n \
      <div class=\"form-group\"><textarea rows=\"4\" class=\"form-control\" placeholder=\"{{ \'x_Address\' | translate }}\" ng-model=\"$parent.$parent.addressOnly\" ng-class=\"Validator.isValidAddress($parent.$parent.addressOnly) ? \'is-valid\' : \'is-invalid\'\" ng-change=\"onAddressChange()\"><\/textarea><\/div>\r\n \
    <\/div>\r\n \
    <!-- \/if selected addressOnly-->\r\n \
  <\/section>\r\n \
  <!-- \/ Column 2 - Unlock That Key -->\r\n \
  <!-- Column 3 -The Unlock Button -->\r\n \
  <section class=\"col-md-4 col-sm-6\" ng-show=\"showFDecrypt||showPDecrypt||showMDecrypt||walletType==\'ledger\'||walletType==\'trezor\'||showAOnly\">\r\n \
    <h4 id=\"uploadbtntxt-wallet\" ng-show=\"showFDecrypt||showPDecrypt||showMDecrypt\" translate=\"ADD_Label_6\"> Access Your Wallet:<\/h4>\r\n \
    <div class=\"form-group\"><a class=\"btn btn-primary btn-block btnAction\" ng-show=\"showFDecrypt||showPDecrypt||showMDecrypt\" ng-click=\"decryptWallet()\" translate=\"ADD_Label_6_short\">UNLOCK<\/a><\/div>\r\n \
    <div class=\"form-group\"><a class=\"btn btn-primary btn-block btnAction\" ng-show=\"showAOnly\" ng-click=\"decryptAddressOnly()\" translate=\"ADD_Label_6_short\">UNLOCK<\/a><\/div>\r\n \
    <div class=\"form-group\"><a class=\"btn btn-primary btn-block btnAction\" ng-show=\"walletType==\'ledger\'\" ng-click=\"scanLedger()\" translate=\"ADD_Ledger_scan\">SCAN<\/a><\/div>\r\n \
    <div ng-bind-html=\"decryptStatus\"><\/div>\r\n \
  <\/section>\r\n \
  <!-- \/ Column 3 -The Unlock Button -->\r\n \
  <!-- MODAL -->\r\n \
  <section class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"mnemonicModel\">\r\n \
    <div class=\"modal-dialog\" role=\"document\" style=\"top: 200px\">\r\n \
      <div class=\"modal-content\">\r\n \
        <div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;<\/span><\/button><\/div>\r\n \
        <div class=\"modal-body\">\r\n \
          <!-- Select HD Path -->\r\n \
          <span ng-show="showMDecrypt">\r\n \
          <h4 translate=\"ADD_Radio_5_Path\"> Select HD derivation path: <\/h4>\r\n \
          <div class=\"form-group\">\r\n \
            <div class=\"radio\">\r\n \
              <label>\r\n \
                <input type=\"radio\" id=\"hd_derivation_path_default\" ng-model=\"HDWallet.dPath\" value=\"{{HDWallet.defaultDPath}}\" ng-change=\"onHDDPathChange()\"\/>\r\n \
                <span ng-bind=\"HDWallet.defaultDPath\"><\/span>\r\n \
                <span ng-if=\"!showTrezorSeparate\" translate=\"ADD_Radio_5_withTrezor\">(default with trezor)<\/span>\r\n \
                <span ng-if=\"showTrezorSeparate\" translate=\"ADD_Radio_5_woTrezor\">(default without trezor)<\/span>\r\n \
              <\/label>\r\n \
            <\/div>\r\n \
            <div class=\"radio\">\r\n \
              <label>\r\n \
                <input type=\"radio\" id=\"hd_derivation_path_alternative\" ng-model=\"HDWallet.dPath\" value=\"{{HDWallet.alternativeDPath}}\" ng-change=\"onHDDPathChange()\"\/>\r\n \
                <span ng-bind=\"HDWallet.alternativeDPath\"><\/span>\r\n \
                <span translate=\"ADD_Radio_5_PathAlternative\">(alternative)<\/span>\r\n \
              <\/label>\r\n \
            <\/div>\r\n \
            <div class=\"radio\" ng-if=\"showTrezorSeparate\">\r\n \
              <label>\r\n \
                <input type=\"radio\" id=\"hd_derivation_path_trezor\" ng-model=\"HDWallet.dPath\" value=\"{{getTrezorPath()}}\" ng-change=\"onHDDPathChange()\" \/>\r\n \
                <span ng-bind=\"getTrezorPath()\"><\/span>\r\n \
                <span translate=\"ADD_Radio_5_PathTrezor\">(Trezor)<\/span>\r\n \
              <\/label>\r\n \
            <\/div>\r\n \
            <div class=\"radio\">\r\n \
              <label>\r\n \
                <input type=\"radio\" id=\"hd_derivation_path_custom\" ng-model=\"HDWallet.dPath\" value=\"{{HDWallet.customDPath}}\" ng-change=\"onHDDPathChange()\" \/>\r\n \
                <input type=\"text\" class=\"form-control\" style=\"display: inline; width: 70%\" ng-model=\"HDWallet.customDPath\" id=\"hd_derivation_path_custom_value\" ng-change=\"onCustomHDDPathChange()\" \/>\r\n \
                <span translate=\"ADD_Radio_5_PathCustom\">(custom)<\/span>\r\n \
              <\/label>\r\n \
            <\/div>\r\n \
          <\/div>\r\n \
          </span> \r\n \
          <!-- \/ Select HD Path -->\r\n \
          <!-- Select Address -->\r\n \
          <h4 class=\"modal-title\" translate=\"MNEM_1\"> Please select the address you would like to interact with. <\/h4>\r\n \
          <p translate=\"MNEM_2\"> Your single HD mnemonic phrase can access a number of wallets \/ addresses. Please select the address you would like to interact with at this time. <\/p>\r\n \
          <table class=\"table table-striped table-mnemonic\">\r\n \
            <tr>\r\n \
              <th><\/th>\r\n \
              <th translate=\"x_Address\"> Address <\/th>\r\n \
              <th translate=\"MYWAL_Bal\"> Balance <\/th>\r\n \
            <\/tr>\r\n \
            <tr ng-repeat=\"wallet in HDWallet.wallets track by $index\">\r\n \
              <td><input type=\"radio\" name=\"addressSelect\" value=\"{{$index}}\" ng-model=\"HDWallet.id\" \/><\/td>\r\n \
              <td> {{wallet.getChecksumAddressString()}} <\/td>\r\n \
              <td> {{wallet.getBalance()}} ETH <\/td>\r\n \
            <\/tr>\r\n \
            <tr class=\"m-addresses\">\r\n \
              <td><a ng-show=\"HDWallet.numWallets > 5\" ng-click=\"AddRemoveHDAddresses(false)\" translate=\"MNEM_prev\">Previous Addresses<\/a><\/td>\r\n \
              <td><\/td>\r\n \
              <td><a ng-click=\"AddRemoveHDAddresses(true)\" translate=\"MNEM_more\">More<br \/>Addresses<\/a><\/td>\r\n \
            <\/tr>\r\n \
          <\/table>\r\n \
        <\/div>\r\n \
        <div class=\"modal-footer text-center\">\r\n \
          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" translate=\"x_Cancel\">Cancel<\/button>\r\n \
          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-click=\"setHDWallet()\" translate=\"ADD_Label_6_short\">Access Wallet<\/button>\r\n \
        <\/div>\r\n \
      <\/div>\r\n \
    <\/div>\r\n \
  <\/section>\r\n \
  <!-- \/ MODAL -->\r\n \
<\/article>\r\n \
'
  };
};
module.exports = walletDecryptDrtv;

