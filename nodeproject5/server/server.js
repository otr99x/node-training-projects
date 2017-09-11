var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength:1,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null,
  },
});

var newTodo = new Todo({
  text: '     edit this video    ',
});

newTodo.save().then((doc) => {
  console.log('saved todo', doc);
}, (e) => {
  console.log('unable to save todo', e);
});

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
});

var newUser = new User({
  email: 'myemail',
});

newUser.save().then((doc) => {
  console.log('save user', doc);
}, (e) => {
  console.log('unable to save user', e);
});
