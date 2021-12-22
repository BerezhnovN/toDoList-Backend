const tasks = [];
const Task = require('../../db/models/task/index')

module.exports.getAllTasks = async (req, res) => {
  Task.find().then(result => {
    res.send({data: result});
  });
};

module.exports.createNewTask = (req, res) => {
  const body = req.body;
  if (body.hasOwnProperty('text') && body.hasOwnProperty('isCheck')) {
    // body.id = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
    const task = new Task(req.body);
    task.save().then(result => {
      res.send('creatred!');
    });
  } else {
    res.status(422).send('Error! Params not correct');
  }
};

module.exports.changeTaskInfo = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
    const body = req.body;
    if (body.hasOwnProperty('_id') && (body.hasOwnProperty('text') || body.hasOwnProperty('isCheck'))) {
      Task.updateOne({_id: body._id}, {$set: {text: body.text}})
      .then((result) => {
            res.send({data : result});
      })
      .catch(err => console.log(err));
    }
};

module.exports.changeTaskFilter = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const body = req.body;
  if (body.hasOwnProperty('_id') && (body.hasOwnProperty('text') || body.hasOwnProperty('isCheck'))) {
    Task.updateOne({_id: body._id}, {$set: {isCheck: body.isCheck}})
    .then((result) => {
          res.send({data : result});
    })
    .catch(err => console.log(err));
  }
};

module.exports.deleteTask = (req, res) => {
   const id = req.query.id;
    if(id) {
    Task.deleteOne({_id: id}).then(result => {
        res.send('Deleted')
    }).catch(err => {
      res.send(err)
  })
};
};