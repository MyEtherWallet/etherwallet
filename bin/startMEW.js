#! /usr/bin/env node

var open = require("open");
var separator = process.platform=="win32" ? "\\" : "/";
open(require('path').dirname(require.main.filename)+separator+".."+separator+"index.html");
