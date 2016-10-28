var fs = require('fs');
var vhost = require('vhost');
var express = require('express');
var http = require('http');
var app = express();
app.use(vhost('localhost', require('./index.js').app));
var httpServer = http.createServer(app);
httpServer.listen(80);