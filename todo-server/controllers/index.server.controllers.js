module.exports.render=function(req,res){
    //res.send('Main page');
    res.render('index', {
      title: 'List of Task',
      body : 'I am Fienny',
    });
}
