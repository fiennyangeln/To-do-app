var uri = 'mongodb://localhost/mean-book';
//var db = require('mongoose').connect(uri);//

var config = require('./express'),
  mongoose = require('mongoose');

module.exports = function(){
  var db = mongoose.connect(uri);

  require ('../models/tasks.server.models')
  return db;
}
