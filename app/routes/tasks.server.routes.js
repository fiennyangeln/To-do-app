module.exports = function(app){
  var tasks = require('../controllers/tasks.server.controllers');
  app.get('/create',tasks.create);
}
