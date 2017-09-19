'use strict';
var customNode = require('./customNode');
var metamask = function() {
    var _temp = new customNode('');
    for (var attr in _temp) {
        this[attr] = _temp[attr];
    }

    this.rawPost = function(req, callback) {

      const ids = []
      forEachPayload(req, function(payload){
        ids.push(payload.id)
      })
      // console.log(`${ids}:`, req)

      // metamask requires params array
      forEachPayload(req, function(payload){
        payload.params = payload.params || []
      })

      window.web3.currentProvider.sendAsync(req, function(err, res) {
        // console.log(`${ids} =>`, err || res)
        // move error onto json rpc response
        if (err) {
          res = {
            id: req.id,
            error: err,
          }
        }
        callback(res)
      })
    }
}
module.exports = metamask;

function forEachPayload(maybeArray, fn){
  const array = Array.isArray(maybeArray) ? maybeArray : [maybeArray]
  array.forEach(fn)
}