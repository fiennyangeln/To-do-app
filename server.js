var express = require('./config/express'),
  mongoose = require('./config/mongoose');

var db = mongoose();
var app = express();
app.listen(3000);
module.exports = app;

console.log('Running');