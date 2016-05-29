'use strict';
var daoProposalDrtv = function() {
  return {
    restrict : "E",
    template : '<article class="proposal-item col-xs-12" ng-show="objProposal.show" ng-repeat="objProposal in AllProposals track by $index">\n \
          <section class="proposal-top clearfix" ng-click="showProposal($index)">\n \
            <div class="graph-container">\n \
              <div class="graph-unfilled" style="width:100%"></div>\n \
              <div class="graph-needed"   style="width:{{ objProposal.quorumPer | number:2 }}%"></div>\n \
              <div class="graph-yes"      style="width:{{ ( objProposal.yea * 100 ) / token.totRaised | number:2 }}%"></div>\n \
              <div class="graph-no"       style="width:{{ ( objProposal.nay * 100 ) / token.totRaised | number:2 }}%;\n \
                                                 left: {{ ( objProposal.yea * 100 ) / token.totRaised | number:2 }}%;"></div>\n \
            </div>\n \
            <div class="col-xs-9 clearfix">\n \
              <h4>{{objProposal.description}} </h4>\n \
              <p>\n \
                Proposal ID: <strong >{{objProposal.id}}</strong> &middot;\n \
                <span class="text-success" ng-show="objProposal.votingDeadline.getTime() >= objProposal.today.getTime()">ends: <strong>{{objProposal.votingDeadline | date:\'medium\'}}</strong></span>\n \
                <span class="text-danger" ng-show="objProposal.votingDeadline.getTime() < objProposal.today.getTime()">ended: <strong>{{objProposal.votingDeadline | date:\'medium\'}}</strong>\n \
              </p></span>\n \
            </div>\n \
            <div class="col-xs-3 clearfix text-right" ng-show="objProposal.split==\'No\'">\n \
              <h4> {{objProposal.amount | number:4 | number}} </h4>\n \
              <p>  ETH  </p>\n \
            </div>\n \
          </section>\n \
          <section class="proposal-expanded col-xs-12" ng-show="objProposal.showprop">\n \
            <p class="description-html" ng-show="objProposal.descriptionHTML!==null"> {{ objProposal.descriptionHTML }} </p>\n \
            <p ng-show="objProposal.split==\'Yes\'"><em>This is a proposal to Split the DAO. If you vote yes, you must then call the SplitDAO function via Mist in order to join this new Split DAO. <a href="https://daowiki.atlassian.net/wiki/display/DAO/Step-by-Step%3A+Splitting+the+DAO" target="_blank"> Lean More Here.</a></em></p>\n \
            <table class="table">\n \
              <tr>\n \
                <td class="label">Votes Yea:</td>\n \
                <td class="output votes-yes">\n \
                  {{ ( objProposal.yea * 100 ) / token.totRaised | number:2 }}% of total\n \
                  &middot;\n \
                  {{objProposal.yeaPer | number:2}}% of votes\n \
                  &middot;\n \
                  <em>({{objProposal.yea | number:2 }})</em></td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Votes Nay:</td>\n \
                <td class="output votes-no">\n \
                  {{ ( objProposal.nay * 100 ) / token.totRaised | number:2 }}% of total\n \
                  &middot;\n \
                  {{objProposal.nayPer | number:2}}% of votes\n \
                  &middot;\n \
                  <em>({{objProposal.nay | number:2 }})</em></td>\n \
              </tr>\n \
              <tr ng-show="objProposal.split==\'No\'">\n \
                <td class="label">Quroum:</td>\n \
                <td class="output">\n \
                  <div class="votes-needed">{{ objProposal.quorumCurrent | number:2 }}% of {{ objProposal.quorumPer | number:2}}%</div>\n \
                </td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Creator:</td>\n \
                <td class="output"><div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{objProposal.creator}}" watch-var="objProposal"></div></div>\n \
                {{objProposal.creator}}</td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Recipient:</td>\n \
                <td class="output"> <div class="address-identicon-container small"><div id="addressIdenticon" title="Address Indenticon" blockie-address="{{objProposal.recipient}}" watch-var="objProposal"></div></div>\n \
                {{objProposal.recipient}} </td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">New Curator:</td>\n \
                <td class="output"><span ng-class="objProposal.split==\'Yes\' ? \'boolean-yes\' : \'boolean-no\'"> {{objProposal.split}} </span></td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Open:</td>\n \
                <td class="output"><span ng-class="objProposal.open==\'Yes\' ? \'boolean-yes\' : \'boolean-no\'"> {{objProposal.open}} </span></td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Proposal Passed:</td>\n \
                <td class="output"><span ng-class="objProposal.proposalPassed==\'Yes\' ? \'boolean-yes\' : \'boolean-no\'"> {{objProposal.proposalPassed}} </span></td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Proposal Hash:</td>\n \
                <td class="output">{{objProposal.proposalHash}}</td>\n \
              </tr>\n \
              <tr>\n \
                <td class="label">Proposal Deposit:</td>\n \
                <td class="output">{{objProposal.proposalDeposit}} Ether</td>\n \
              </tr>\n \
            </table>\n \
          </section>\n \
        </article>'
  };
};
module.exports = daoProposalDrtv;
