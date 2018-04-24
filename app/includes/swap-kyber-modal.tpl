<article class="modal fade" id="kyberTransaction" tabindex="-1">
    <section class="modal-dialog">
        <section class="modal-content">

            <div class="modal-body">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close Dialog">&times;</button>

                <h2 class="modal-title text-center">
                    <!--<span translate="SENDModal_Content_1">You are about to authorize</span>...-->
                    <span>You are about to send</span>... <!-- todo: add translate -->
                </h2>

                <table class="table text-center">
                    <tbody>
                    <tr>
                        <td>
                            <div class="addressIdenticon med"
                                 title="Address Indenticon"
                                 blockie-address="{{wallet.getAddressString()}}"
                                 watch-var="wallet.getAddressString()">
                            </div>
                            <p>
                                <strong class="send-modal__addr">
                                    {{wallet.getChecksumAddressString()}}
                                </strong>
                            </p>
                        </td>
                        <td ng-show="!kyberEthToToken" class="mono">
                            ->
                            <br/>
                            <h4 class="text-danger">
                                {{swapOrder.fromVal}} {{swapOrder.fromCoin}}
                            </h4>
                        </td>
                        <td ng-show="kyberEthToToken" class="mono">
                            ->
                            <br/>
                            <h4 class="text-primary">
                                {{parsedKyberTx.value}} {{unitReadable}}
                            </h4>
                        </td>

                        <td ng-show="!kyberEthToToken">
                            <div class="addressIdenticon med" title="Address Indenticon"
                                 blockie-address="{{parsedKyberTx.to}}" watch-var="parsedKyberTx.to"></div>
                            <p>
                                <strong class="send-modal__addr">
                                    {{parsedKyberTx.to}}<br/> (Kyber Network)
                                </strong>
                            </p>
                        </td>
                        <td ng-show="kyberEthToToken">
                            <div class="addressIdenticon med" title="Address Indenticon"
                                 blockie-address="{{parsedKyberTx.to}}" watch-var="parsedKyberTx.to"></div>
                            <p>
                                <strong class="send-modal__addr">
                                    {{parsedKyberTx.to}}<br/> (Kyber Network)
                                </strong>
                            </p>

                        </td>
                    </tr>
                    </tbody>
                </table>

                <br/>
                <!-- KYBER TOKEN TRANSACTION -->
                <table class="table small table-condensed table-hover transaction-modal" ng-if="!kyberEthToToken">
                    <tbody>
                    <tr>
                        <td></td>
                        <td class="text-justifyr">Token Swap Transaction</td>
                    </tr>
                    <tr>
                        <td>Summary:</td>
                    </tr>
                    <tr>
                    <td class="small text-right">To Address:</td>
                    <td class="small text-left mono">{{parsedKyberTx.to}}
                    <br />
                    <em><small>Kyber Network.</small></em>
                    </td>
                    </tr>
                    <tr>
                        <td class="small text-right">{{swapOrder.toCoin}} Deposit Address:</td>
                        <td class="small text-left mono">{{swapOrder.toAddress}}</td>
                    </tr>
                    <tr>
                        <td class="small text-right">Swapping:</td>
                        <td class="small text-left mono">{{swapOrder.fromVal}} {{swapOrder.fromCoin}}</td>
                    </tr>
                    <tr>
                        <td class="small text-right">For:</td>
                        <td class="small text-left mono">{{swapOrder.toVal}} {{swapOrder.toCoin}}</td>
                    </tr>
                    <tr>
                        <td class="small text-right">Network:</td>
                        <td class="small text-left mono">{{ajaxReq.type}} by {{ajaxReq.service}}</td>
                    </tr>
                    <tr>
                        <td class="small text-right">Combined Gas Limit:</td>
                        <td class="small text-left mono">{{parsedTx.totalGasLimit}}</td>
                    </tr>
                    <tr>
                        <td class="small text-right">Avg. Gas Price:</td>
                        <td class="small text-left mono">{{parsedTx.avgGasPrice.gwei}} GWEI
                            <small>({{parsedTx.avgGasPrice.eth}} ETH)</small>
                            <!-- todo: get eth value to display as a decimal not as an exponent-->
                        </td>
                    </tr>
                    <tr>
                        <td class="small text-right">Max Combined TX Fee:</td>
                        <td class="small text-left mono"> {{parsedTx.totalTxFee.eth}} ETH
                            <small>({{parsedTx.totalTxFee.gwei}} GWEI)</small>
                        </td>
                    </tr>
                    <tr>
                        <td class="small text-right">Final Nonce:</td>
                        <td class="small text-left mono">{{parsedKyberTx.nonce}}</td>
                    </tr>
                    </tbody>
                </table>

                <section class="clearfix collapse-container" ng-if="!kyberEthToToken">
                    <div class="text-center" ng-click="adv = !adv">
                        <a class="collapse-button"><span ng-show="adv">+</span><span ng-show="!adv">-</span></a>
                        <h5>Advanced</h5>
                    </div>
                    <table class="table small table-condensed table-hover transaction-modal" ng-show="adv">
                        <tbody >

                        <!----------------------------------------------------------------->
                        <tr>
                            <td class="text-left">Token Swap Transaction <br>
                                <small>via Kyber Network</small>
                            </td>
                        </tr>
                        <tr>
                            <td class="small text-right">To Address:</td>
                            <td class="small text-left mono">{{parsedKyberTx.to}}
                                <br/>
                                <em>
                                    <small>Kyber Network Address.</small>
                                </em>
                            </td>
                        </tr>
                        <tr>
                            <td class="small text-right">From Address:</td>
                            <td class="small text-left mono">{{parsedKyberTx.from}}</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Amount to Send:</td>
                            <td class="small text-left mono">{{parsedKyberTx.value}} ETH</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Account Balance:</td>
                            <td class="small text-left mono">{{parsedKyberTx.balance}}</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Token:</td>
                            <td class="small text-left mono">{{swapOrder.fromCoin}}</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Token Qty:</td>
                            <td class="small text-left mono">{{swapOrder.fromVal}} {{swapOrder.fromCoin}}</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Network:</td>
                            <td class="small text-left mono">{{ajaxReq.type}} by {{ajaxReq.service}}</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Gas Limit:</td>
                            <td class="small text-left mono">{{parsedKyberTx.gasLimit}}</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Gas Price:</td>
                            <td class="small text-left mono">{{parsedKyberTx.gasPrice.gwei}} GWEI
                                <small>({{parsedKyberTx.gasPrice.eth}} ETH)</small>
                            </td>
                        </tr>
                        <tr>
                            <td class="small text-right">Max TX Fee:</td>
                            <td class="small text-left mono"> {{parsedKyberTx.txFee.eth}} ETH
                                <small>({{parsedKyberTx.txFee.gwei}} GWEI)</small>
                            </td>
                        </tr>
                        <tr>
                            <td class="small text-right">Nonce:</td>
                            <td class="small text-left mono">{{parsedKyberTx.nonce}}</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Data:</td>
                            <td class="small text-left mono text-width-limit"><p>{{parsedKyberTx.data}}</p></td>
                        </tr>
                        <!----------------------------------------------------------------->
                        <tr>
                            <td> Token Approval Transaction</td>
                        </tr>
                        <tr>
                            <td class="small text-right">To Address:</td>
                            <td class="small text-left mono">{{parsedKyberTokenTx.to}}
                                <br/>
                                <em><small>The token ({{swapOrder.fromCoin}}) contract address.</small></em>
                            </td>
                        </tr>
                        <tr>
                            <td class="small text-right">From Address:</td>
                            <td class="small text-left mono">{{parsedKyberTokenTx.from}}</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Amount to Send:</td>
                            <td class="small text-left mono">{{parsedKyberTokenTx.value}} ETH</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Account Balance:</td>
                            <td class="small text-left mono">{{parsedKyberTokenTx.balance}}</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Network:</td>
                            <td class="small text-left mono">{{ajaxReq.type}} by {{ajaxReq.service}}</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Gas Limit:</td>
                            <td class="small text-left mono">{{parsedKyberTokenTx.gasLimit}}</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Gas Price:</td>
                            <td class="small text-left mono">{{parsedKyberTokenTx.gasPrice.gwei}} GWEI
                                <small>({{parsedKyberTokenTx.gasPrice.eth}} ETH)</small>
                            </td>
                        </tr>
                        <tr>
                            <td class="small text-right">Max TX Fee:</td>
                            <td class="small text-left mono"> {{parsedKyberTokenTx.txFee.eth}} ETH
                                <small>({{parsedKyberTokenTx.txFee.gwei}} GWEI)</small>
                            </td>
                        </tr>
                        <tr>
                            <td class="small text-right">Nonce:</td>
                            <td class="small text-left mono">{{parsedKyberTokenTx.nonce}}</td>
                        </tr>
                        <tr>
                            <td class="small text-right">Data:</td>
                            <td class="small text-left mono text-width-limit"><p>{{parsedKyberTokenTx.data}}</p></td>
                        </tr>
                        </tbody>
                    </table>
                </section>
                <!-- / KYBER TOKEN TRANSACTION -->
                <!-- KYBER ETH TRANSACTION -->
                <table class="table small table-condensed table-hover transaction-modal" ng-if="kyberEthToToken">
                    <tbody>
                    <tr>
                        <td class="small text-right">To Address:</td>
                        <td class="small text-left mono">{{parsedKyberTx.to}}
                            <br/>
                            <em>

                                <small>Kyber Network Address.</small>
                            </em>
                        </td>
                    </tr>
                    <tr>
                        <td class="small text-right">From Address:</td>
                        <td class="small text-left mono">{{parsedKyberTx.from}}</td>
                    </tr>
                    <tr>
                        <td class="small text-right">Amount to Send:</td>
                        <td class="small text-left mono">{{parsedKyberTx.value}} ETH</td>
                    </tr>
                    <tr>
                        <td class="small text-right">Account Balance:</td>
                        <td class="small text-left mono">{{parsedKyberTx.balance}}</td>
                    </tr>
<!--                    <tr>
                        <td class="small text-right">Coin:</td>
                        <td class="small text-left mono">{{unitReadable}}</td>
                    </tr>-->
                    <tr>
                        <td class="small text-right">Swapping:</td>
                        <td class="small text-left mono">{{swapOrder.fromVal}} {{swapOrder.fromCoin}}</td>
                    </tr>
                    <tr>
                        <td class="small text-right">For:</td>
                        <td class="small text-left mono">{{swapOrder.toVal}} {{swapOrder.toCoin}}</td>
                    </tr>
                    <tr>
                        <td class="small text-right">Network:</td>
                        <td class="small text-left mono">{{ajaxReq.type}} by {{ajaxReq.service}}</td>
                    </tr>
                    <tr>
                        <td class="small text-right">Gas Limit:</td>
                        <td class="small text-left mono">{{parsedKyberTx.gasLimit}}</td>
                    </tr>
                    <tr>
                        <td class="small text-right">Gas Price:</td>
                        <td class="small text-left mono">{{parsedKyberTx.gasPrice.gwei}} GWEI
                            <small>({{parsedKyberTx.gasPrice.eth}} ETH)</small>
                        </td>
                    </tr>
                    <tr>
                        <td class="small text-right">Max TX Fee:</td>
                        <td class="small text-left mono"> {{parsedKyberTx.txFee.eth}} ETH
                            <small>({{parsedKyberTx.txFee.gwei}} GWEI)</small>
                        </td>
                    </tr>
                    <tr>
                        <td class="small text-right">Nonce:</td>
                        <td class="small text-left mono">{{parsedKyberTx.nonce}}</td>
                    </tr>
                    <tr>
                        <td class="small text-right">Data:</td>
                        <td class="small text-left mono text-width-limit"><p>{{parsedKyberTx.data}}</p></td>
                    </tr>

                    </tbody>
                </table>
                <!-- / KYBER ETH TRANSACTION -->
            </div>

            <div class="modal-footer" ng-if="kyberEthToToken">
                <h4 class="text-center">
                    <span translate="SENDModal_Content_1">You are about to send</span>
                    <strong class="mono">{{parsedKyberTx.value}} {{unitReadable}}</strong>
                    <span translate="SENDModal_Content_2">to address</span>
                    <strong class="mono">{{parsedKyberTx.to}}.</strong>
                </h4>
                <p translate="SENDModal_Content_3">
                    Are you sure you want to do this?
                </p>
                <br/>
                <button class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">
                    No, get me out of here!
                </button>
                <button class="btn btn-primary" ng-click="sendKyberTransaction()" translate="SENDModal_Yes">
                    Yes, I am sure! Make transaction.
                </button>
            </div>

            <div class="modal-footer" ng-if="!kyberEthToToken">
                <h4 class="text-center">
                    <span translate="SENDModal_Content_1">You are about to send</span>
                    <strong class="mono">{{swapOrder.fromVal}} {{swapOrder.fromCoin}}</strong>
                    <span translate="SENDModal_Content_2">to address</span>
                    <strong  class="mono">{{parsedKyberTx.to}}.</strong>
                </h4>
                <p translate="SENDModal_Content_3">
                    Are you sure you want to do this?
                </p>
                <br/>
                <button class="btn btn-default" data-dismiss="modal" translate="SENDModal_No">
                    No, get me out of here!
                </button>
                <button class="btn btn-primary" ng-click="sendKyberTransaction()" translate="SENDModal_Yes">
                    Yes, I am sure! Make transaction.
                </button>
            </div>

            <p class="small text-center" style="padding: 0px 5px;">
                <a href="https://myetherwallet.github.io/knowledge-base/transactions/transactions-not-showing-or-pending.html"
                   target="_blank" ref="noopener noreferrer">
                    The network is a bit overloaded. If you're having issues with TXs, please read me.
                </a>
            </p>


        </section>
    </section>
</article>
