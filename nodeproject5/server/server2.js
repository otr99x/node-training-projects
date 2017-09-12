var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var Todo = require('./models/todo.js')(mongoose);
var User = require('./models/user.js')(mongoose);
var {Car} = require('./models/car.js');

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

app.listen(3000, () => {
  console.log('listening on port 3000');
});
