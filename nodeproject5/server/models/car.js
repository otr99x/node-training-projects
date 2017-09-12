var mongoose = require('mongoose');

var Car = mongoose.model('Car', {
  brand: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
});

module.exports = {Car};
