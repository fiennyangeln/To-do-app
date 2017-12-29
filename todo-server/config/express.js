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
  //app.use(express.static(path.join(__dirname, '../todo-client/dist'))); //TODO: WHAT IS THIS FOR
  //console.log(path.join(__dirname, 'dist'));
  //app.use('/tasks', express.static(path.join(__dirname, '../todo-client/dist'))); //TODO: WHAT IS THIS FOR
  app.set('views', '../views');
  app.set('view engine', 'ejs');
  // Add headers
  app.use(function (req, res, next) {

      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');

      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);

      // Pass to next layer of middleware
      next();
  });
  //app.use(express.static('../client'));

  //require('../app/routes/index.server.routes.js')(app);
  require('../routes/tasks.server.routes.js')(app);
  return app;
}
