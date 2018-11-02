/**
 *  (c) 2017 Douglas Bakkum, Shift Devices AG
 *  MIT license
 **/

"use strict";
const u2f = require("u2f-api");
var DigitalBitboxUsb = function(timeoutSeconds) {
  this.timeoutSeconds = timeoutSeconds;
};

// Convert from normal to web-safe, strip trailing "="s
DigitalBitboxUsb.webSafe64 = function(base64) {
  return base64
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};

// Convert from web-safe to normal, add trailing "="s
DigitalBitboxUsb.normal64 = function(base64) {
  return (
    base64.replace(/\-/g, "+").replace(/_/g, "/") +
    "==".substring(0, (3 * base64.length) % 4)
  );
};

DigitalBitboxUsb.prototype.u2fCallback = function(response, callback) {
  if ("signatureData" in response) {
    var data = new Buffer(
      DigitalBitboxUsb.normal64(response.signatureData),
      "base64"
    );
    if (data.length > 7) callback(data.slice(5));
    else return; // Empty frame received, wait for data
  } else {
    callback(undefined, response);
  }
};

DigitalBitboxUsb.prototype.exchange = function(msg, callback) {
  msg = Buffer.from(msg, "ascii");
  var kh_max_len = 128 - 2; // Subtract 2 bytes for `index` and `total` header
  var challenge = new Buffer(
    "dbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdb",
    "hex"
  );
  var total = Math.ceil(msg.length / kh_max_len);
  var self = this;
  var localCallback = function(result) {
    self.u2fCallback(result, callback);
  };
  for (var index = 0; index < total; index++) {
    var kh = Buffer.concat([
      Buffer.from([total]),
      Buffer.from([index]),
      msg.slice(index * kh_max_len, (index + 1) * kh_max_len)
    ]);
    var key = {
      appId: location.origin,
      challenge: DigitalBitboxUsb.webSafe64(challenge.toString("base64")),
      version: "U2F_V2",
      keyHandle: DigitalBitboxUsb.webSafe64(kh.toString("base64"))
    };
    u2f.sign([key], this.timeoutSeconds).then(localCallback);
  }
};

module.exports = DigitalBitboxUsb;
