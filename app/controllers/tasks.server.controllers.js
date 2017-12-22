var Task = require('mongoose').model('Task');

var getErrorMessage = function(err) {
 if (err.errors) {
   for (var errName in err.errors) {
     if (err.errors[errName].message) return err.errors[errName].message;
   }
  }
  else {
    return 'Unknown server error';
  }
};

module.exports.getOneById = function (req, res, next, id){
  Task.findById(id).exec(function(err, task){
    if (err){
      return next(err);
    }
    if (!task){
      return next(new Error ('Failed to load task'));
    }
    req.task=task;
    next();
  })
};

module.exports.read = function (req,res,next){
  var task = req.task;
  return res.json(task);
};

module.exports.create = function (req, res, next){
  var task = new Task(req.body);
  task.save(function(err){
    if (err){
      return res.status(400).send({message: getErrorMessage(err)});
    }
    else {
      console.log(task);
      res.json(task);
    }
  })
};

module.exports.list = function (req,res,next){
  var query=Task.find().select('name status').sort('status');
  query.exec(function(err,tasks){
    if (err){
      return res.status(400).send({message: getErrorMessage(err)});
    }
    else {
      res.json(tasks);
    }
  })
};

module.exports.listNotDone = function (req,res,next){
  var query = Task.find({'status':false}).select('name status').sort('name');
  query.exec(function(err,tasks){
    if (err){
      return res.status(400).send({message: getErrorMessage(err)});
    }
    else {
      res.json(tasks);
    }
  })
};

module.exports.listDone = function (req,res,next){
  var query = Task.find({'status': true}).select('name status').sort('name');
  query.exec(function(err,tasks){
    if (err){
      return res.status(400).send({message: getErrorMessage(err)});
    }
    else {
      res.json(tasks);
    }
  })
};

module.exports.update = function (req,res,next){
  var task = req.task;
  task.name = req.body.name;
  task.status = req.body.status;
  task.save(function(err){
    if (err){
      return res.status(400).send({message: getErrorMessage(err)});
    }
    else{
      res.json(task);
    }
  })
};

module.exports.remove = function (req,res,next){
  var task = req.task;
  task.remove(function(err){
    if (err){
      return res.status(400).send({message : getErrorMessage(err)});
    }
    else{
      res.json(task);
    }
  })
};
