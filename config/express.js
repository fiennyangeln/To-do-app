var express=require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override')
  path = require('path');

var db = 'mongodb://localhost/mean-book';

module.exports = function(){
  var app =express();

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(express.static(path.join(__dirname, '../todo-client/dist')));
  console.log(path.join(__dirname, 'dist'));
  app.use('', express.static(path.join(__dirname, '../todo-client/dist')));
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  //app.use(express.static('../client'));

  //require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/tasks.server.routes.js')(app);
  return app;
}
