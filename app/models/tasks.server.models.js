var mongoose = require ('mongoose'),
Schema = mongoose.Schema;

var taskSchema = new Schema ({
  name : String,
  status : {type: Boolean, default: false}
});

var Task = mongoose.model ('Task', taskSchema);
