module.exports = function(app){
  var users = require('../controllers/tasks.server.controllers');
  app.get('/create',users.create);
  app.get('/list',users.list);
}
