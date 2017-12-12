var Task = require('mongoose').model('Task');

module.exports.create = function (req, res, next){
  var task = new Task(req.query);
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

module.exports.list = function (req,res,next){
  var query=Task.find().sort('-status');
  query.exec(function(err,tasks){
    if (err){
      return next (err);
    }
    else {
      res.json(tasks);
    }
  })
}
