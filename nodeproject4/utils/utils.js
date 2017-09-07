module.exports.add = (a,b) => {
  return a + b;
};

module.exports.square = (a) => {
  return a * a;
};

module.exports.setName = (user, fullname) => {
  var names = fullname.split(' ');
  user.firstname = names[0];
  user.lastname = names[1];
  return user;
};
