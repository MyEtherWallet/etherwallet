'use strict';
var daoProposalDrtv = function() {
  return {
    restrict : "E",
        template : '<article class="proposal-item col-xs-12">\n \
          <section>\n \
            <div class="graph-container">\n \
              <div class="graph-unfilled" style="width:100%"></div>\n \
              <div class="graph-needed"   style="width:26%"></div>\n \
              <div class="graph-yes"      style="width:9%"></div>\n \
              <div class="graph-no"       style="width:11%; left: 9%;"></div>\n \
            </div>\n \
            <div class="col-xs-9 clearfix">\n \
              <h4> DAO Support Proposal(description) </h4>\n \
              <p> Proposal ID: <strong >1</strong> &middot; ends: <strong >5/31/2016</strong></p>\n \
            </div>\n \
            <div class="col-xs-3 clearfix text-right">\n \
              <h4> 30.00 </h4>\n \
              <p>  ETH  </p>\n \
            </div>\n \
          </section>\n \
          <section class="proposal-expanded col-xs-12" style="display:block;">\n \
            <table class="table">\n \
              <tr>\n \
                <td class="label">Votes Yea:</td>\n \
                <td class="output votes-yes">50% <em>(19047619047619047)</em></td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Votes Nay:</td>\n \
                <td class="output votes-no">45% <em>(19047619047619047)</em></td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Quroum:</td>\n \
                <td class="output">\n \
                  <div class="votes-needed">10% <em>(needs 26.88%)</em></div>\n \
                </td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Recipient:</td>\n \
                <td class="output"> <div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div></div>\n \
                0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8 </td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Creator:</td>\n \
                <td class="output"><div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{wallet.getAddressString()}}" watch-var="wallet"></div></div>\n \
                0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8</td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Open:</td>\n \
                <td class="output"><span class="boolean-yes"> YES </span></td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Proposal Passed:</td>\n \
                <td class="output"><span class="boolean-no"> NO </span></td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Proposal Hash:</td>\n \
                <td class="output">0x332bb591b0f77251124f30f1a9675590bfd1cadcdf12714e731370d41a8803a3</td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Proposal Deposit:</td>\n \
                <td class="output">0</td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">New Curator:</td>\n \
                <td class="output"><span class="boolean-yes"> YES </span></td>\n \
              </tr>\n \
            </table>\n \
            <div class="form-group">\n \
              <a class="btn btn-primary">VOTE ON THIS PROPOSAL</a>\n \
            </div>\n \
          </section>\n \
        </article>'
  };
};
module.exports = walletDecryptDrtv;
