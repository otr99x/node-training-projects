const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

app.get('/data', (req,res) => {
  res.status(200).send({
    name: 'Joe',
    number: 55,
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Joe',
      title: 'master',
    },
    {
      name: 'phil',
      title: 'mister',
    }
  ]);
});

app.get('/all', (req,res) => {
  res.send(['red','blue','green']);
});

app.listen(3000, () => {
  console.log('listening on 3000');
});

module.exports.app = app;
