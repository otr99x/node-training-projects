module.exports = (mongooseObj) => {
  var mongoose = mongooseObj;
  var User = mongoose.model('User', {
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
    },
  });
  return User;
};
