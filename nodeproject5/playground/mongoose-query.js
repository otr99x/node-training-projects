var {mongoose} = require('../server/db/mongoose.js');
var User = require('../server/models/user.js')(mongoose);
var {ObjectId} = require('mongodb');

var id = '59b95017738aa0a9f4674828';

if(!ObjectId.isValid(id)){
  console.log('invalid id');
}
else{
  User.findById(id).then((user) => {
    if(!user){
      console.log('user not found');
    }
    else {
      console.log(JSON.stringify(user, undefined, 2));
    }
  }).catch((e) => {
    console.log(e);
  });
}
