"use strict";
const u2f = require("u2f-api");
var SecalotUsb = function(timeoutSeconds) {
  this.timeoutSeconds = timeoutSeconds;
};

// Convert from normal to web-safe, strip trailing "="s
SecalotUsb.webSafe64 = function(base64) {
  return base64
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};

// Convert from web-safe to normal, add trailing "="s
SecalotUsb.normal64 = function(base64) {
  return (
    base64.replace(/\-/g, "+").replace(/_/g, "/") +
    "==".substring(0, (3 * base64.length) % 4)
  );
};

SecalotUsb.prototype.u2fCallback = function(response, callback) {
  if (typeof response["signatureData"] != "undefined") {
    var data = new Buffer(
      SecalotUsb.normal64(response["signatureData"]),
      "base64"
    );
    callback(data.toString("hex"));
  } else {
    callback(undefined, response);
  }
};

// callback is function(response, error)
SecalotUsb.prototype.exchange = function(apduHex, callback) {
  var apdu = new Buffer("1122334455667788" + apduHex, "hex");
  var challenge = new Buffer(
    "0000000000000000000000000000000000000000000000000000000000000000",
    "hex"
  );
  var key = {};
  key["appId"] = location.origin;
  key["challenge"] = SecalotUsb.webSafe64(challenge.toString("base64"));
  key["version"] = "U2F_V2";
  key["keyHandle"] = SecalotUsb.webSafe64(apdu.toString("base64"));
  var self = this;
  var localCallback = function(result) {
    self.u2fCallback(result, callback);
  };
  u2f.sign([key], this.timeoutSeconds).then(localCallback);
};

module.exports = SecalotUsb;
