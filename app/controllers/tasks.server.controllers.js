var Task = require('mongoose').model('Task');

module.exports.create = function (req, res, next){
  var task = new Task(req.body);
  task.save(function(err){
    if (err){
      return next(err);
    }
    else {
      console.log(task);
      res.json(task);
    }
  })
}
