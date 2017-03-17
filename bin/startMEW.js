#! /usr/bin/env node

var open = require("open");
var seperator = process.platform=="win32" ? "\\" : "/";
open(require('path').dirname(require.main.filename)+seperator+".."+seperator+"index.html");
