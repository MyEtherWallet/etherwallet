#! /usr/bin/env node

var open = require("open");
open(require('path').dirname(require.main.filename)+"/../index.html");
