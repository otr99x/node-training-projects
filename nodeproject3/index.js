const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

hbs.registerPartials(__dirname + '/views/partials');
var app = express();
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log =`${now}: ${req.method} ${req.url}`;
  fs.appendFile('server.log', log + '\n');
  console.log(log);
  next();
});

app.use((req, res, next) => {
  res.render('maintenance.hbs');
});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text ) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  // res.send('<h1>hello world</h1>');
  // res.send({
  //   name:'Joe Cheung',
  //   city: 'calgary',
  // });
  res.render('home.hbs', {
    pageTitle: 'welcome page',
    welcomeMessage: 'Welcome message goes here',
  });
});

app.get('/about', (req,res) => {
  res.render('about.hbs', {
    pageTitle: 'about page',
  });
});

app.get('/bad', (req,res) => {
  res.send({
    errorMessage: 'unable to handle requst',public

  });
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
