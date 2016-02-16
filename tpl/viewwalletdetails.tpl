<!-- view wallet info -->
<div class="tab-pane" id="paneViewWalletDetails" style="display: none;">
  <h2> View Wallet Details </h2>
  <p> This allows you to access your wallet so you can view and/or download additional information associated with your account. For example, you could upload your encrypted JSON file to access your wallet and then download an unencrypted private key in order to import into geth. FYI, you can also do this with the <a href="https://chrome.google.com/webstore/detail/myetherwallet-cx/nlbmnnijcnlegkjjpcfjclmcfggfefdm/" target="__blank">MyEtherWallet CX</a> and save your wallet for easier and quicker access.</p>
  <section class="row" id="walletselection">
    <div class="col-md-4 col-sm-6">
      <h4> How would you like to access your wallet? </h4>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" value="fileupload">Upload Your Wallet File <small>(JSON from presale / geth / MyEtherWallet).</small></label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="typeOfKeyRadio" value="pasteprivkey">Paste/Type Your Encrypted or Unencrypted Private Key.</label>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <!-- if selected upload -->
      <div id="selectedUploadKey" style="display: none;">
        <h4>Select your wallet file : </h4>
        <div class="form-group">
          <p id="file-text"></p>
          <a class="file-input btn btn-block btn-default btn-file marg-v-sm" id="fileUpload">SELECT WALLET FILE... <input type="file"></a>
          <div id="fuploadStatus"></div>
        </div>
        <div class="form-group" id="walletPasdiv" style="display: none;">
          <p> your file is encrypted with a password, enter the password here: </p>
          <input class="form-control" type="password" placeholder="Password" id="walletfilepassword">
        </div>
      </div>
      <!-- /if selected upload -->
      <!-- if selected type key-->
      <div id="selectedTypeKey" style="display: none;">
        <h4> Paste / type your private key: </h4>
        <div class="form-group">
          <textarea rows="4" class="form-control" placeholder="Private Key" id="manualprivkey"></textarea>
        </div>
        <div class="form-group" style="display: none;" id="divprikeypassword">
          <p> Your file is encrypted with a password, enter the password here: </p>
          <input class="form-control" type="password" placeholder="Password" id="privkeypassword">
        </div>
      </div>
      <!-- /if selected type key-->
    </div>
    <div class="col-md-4 col-sm-6" style="display: none;" id="walletuploadbutton">
      <h4 id="uploadbtntxt-wallet" style="display: none;"> Decrypt Wallet:</h4>
      <h4 id="uploadbtntxt-privkey" style="display: none;"> Decrypt Private Key: </h4>
      <div class="form-group"><a class="btn btn-primary btn-block" id="decryptdata">DECRYPT</a></div>
      <div id="decryptStatus"></div>
    </div>
  </section>



  <section class="row" id="generatedWallet" style="display:block;">
    <hr />
    <h3 class="text-success col-xs-12">Success! Here are your wallet details.</h3>
    <div class="col-sm-6">
      <div class="row">
        <div class="form-group col-sm-10">
          <h4>
            Your Address:
            <div class="account-help-icon">
              <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
              <span class="account-help-text">You may know this as your "Account #" or your "Public Key". It's what you send people so they can send you ETH.</span>
            </div>
          </h4>
          <input class="form-control" type="text" id="address" readonly="readonly">
        </div>
        <div class="col-sm-2 address-identicon-container">
          <div id="addressIdenticon" title="Address Indenticon"></div>
        </div>
      </div>
      <div class="form-group">
        <h4>
          Your Private Key (encrypted):
          <div class="account-help-icon">
            <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
            <span class="account-help-text">You <strong>need</strong> to save your private key in order to access your wallet in the future. You will need your password to decrypt this private key.</span>
          </div>
        </h4>
        <textarea class="form-control bigger-on-mobile" type="text" id="privkeyenc" readonly="readonly"></textarea>
      </div>
      <div class="form-group">
        <h4>
          Your Private Key (unencrypted):
          <div class="account-help-icon">
            <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
            <span class="account-help-text">You <strong>need</strong> to save your private key in order to access your wallet in the future. You do not need your password to decrypt this private key.</span>
          </div>
        </h4>
        <textarea class="form-control" type="text" id="privkey" readonly="readonly"></textarea>
      </div>
      <div class="row">
        <div class="form-group col-sm-6">
          <h4>Your Address:</h4>
          <div id="qrcodeAdd" width="100%"></div>
        </div>
        <div class="form-group col-sm-6">
          <h4>Private Key (unencrypted):</h4>
          <div id="qrcode" width="100%"></div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <h4>
          Print Paper Wallet:
          <div class="account-help-icon">
            <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
            <span class="account-help-text">ProTip: Click print and save this as a PDF, even if you do not own a printer!</span>
          </div>
        </h4>
        <a class="btn btn-info btn-block" id="printqr">PRINT</a>
      </div>
      <div class="form-group">
        <h4>
          Download JSON file (encrypted):
          <div class="account-help-icon">
            <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
            <span class="account-help-text">The JSON file is just a different way of storing your private key. You will need your password to decrypt this JSON file.</span>
          </div>
        </h4>
        <a class="btn btn-info btn-block" id="encdownload"> DOWNLOAD </a>
      </div>
      <div class="form-group">
        <h4>
          Download JSON file (unencrypted):
          <div class="account-help-icon">
            <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;" xml:space="preserve"><path fill="#2bb2dd" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377 c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004 c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937 C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938 c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907 c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936 c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993 c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477 c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861 c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"/></svg>
            <span class="account-help-text">The JSON file is just a different way of storing your private key. You do not need your password to decrypt this JSON file.</span>
          </div>
        </h4>
        <a class="btn btn-info btn-block" id="unencdownload">DOWNLOAD</a>
      </div>
      <h4>Account Balance:</h4>
      <p>
        <strong class="text-success" id="accountBalance" style="margin-left: 1em"> loading... </strong>
        <br />
        <strong class="text-success" id="accountBalanceUsd" style="margin-left: 1em"> loading... </strong>
        <br />
        <strong class="text-success" id="accountBalanceEur" style="margin-left: 1em"> loading... </strong>
        <br />
        <strong class="text-success" id="accountBalanceBtc" style="margin-left: 1em"> loading... </strong>
      </p>
      <br />
      <h4>A note about encrypted vs unencrypted:</h4>
      <p>MyEtherWallet can decrypt geth / pre-sale wallets, but geth <strong>cannot</strong> decrypt wallets encrypted by MyEtherWallet. If you plan on not touching a wallet created on MyEtherWallet for a long, long time it may be prudent to save the unencrypted private key / JSON file so you can access it via geth, the official Ethereum wallet, or whatever else is around in the distant future.</p>
    </div>
  </section>


</div>
<!-- /view wallet info -->
