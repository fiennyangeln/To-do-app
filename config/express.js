var express=require('express');
var db = 'mongodb://localhost/mean-book';

module.exports = function(){
  var app =express();

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  app.use(express.static('./public'));

  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/tasks.server.routes.js')(app);
  return app;
}
