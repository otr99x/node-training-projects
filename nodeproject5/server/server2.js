var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var Todo = require('./models/todo.js')(mongoose);
var User = require('./models/user.js')(mongoose);
var {Car} = require('./models/car.js');
var {ObjectID} = require('mongodb');

var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.post('/cars', (req, res) => {
  var car = new Car({
    brand: req.body.text,
  });

  car.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    console.log('invalid id');
    return res.status(404).send();
  }else{
    Todo.findById(id).then((todo) => {
      if(!todo){
        return res.status(404).send();
      }else{
        res.send({todo});
      }
    }).catch((e) => {
      res.status(400).send();
    });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
