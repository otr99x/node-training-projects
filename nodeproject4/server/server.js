const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send('hello world');
});

app.get('/data', (req,res) => {
  res.status(404).send({
    name: 'Joe',
    number: 55,
  });
});

app.listen(3000, () => {
  console.log('listening on 3000');
});

module.exports.app = app;
