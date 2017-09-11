var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
});

// var newUser = new User({
//   email: 'myemail',
// });
//
// newUser.save().then((doc) => {
//   console.log('save user', doc);
// }, (e) => {
//   console.log('unable to save user', e);
// });

module.exports = {User};
