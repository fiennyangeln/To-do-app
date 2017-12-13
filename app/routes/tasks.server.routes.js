module.exports = function(app){
  var tasks = require('../controllers/tasks.server.controllers');
  /*app.get('/create',users.create);
  app.get('/list',users.list);
  app.get('/listNotDone', users.listNotDone);
  */

  app.get('/listNotDone', tasks.listNotDone);
  app.get('/listDone', tasks.listDone);

  app.route('/tasks').get(tasks.list).post(tasks.create);
  app.route('/tasks/:taskId').get(tasks.getOneById, tasks.read).put(tasks.update).delete(tasks.remove);

  app.param('taskId',tasks.getOneById);

}
