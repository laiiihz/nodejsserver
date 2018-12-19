var https = require('https');
var express = require("express");
var fs=require('fs');
var app=express();


var options={
    key:fs.readFileSync('./key.key'),
    cert:fs.readFileSync('./cert.crt')
};

app.get('/', function(req, res) {
    res.sendfile('./index.html');
 });

var server=https.createServer(options,app).listen(3021);