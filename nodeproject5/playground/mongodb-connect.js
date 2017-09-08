const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    console.log('unable to connect to mongoDB');
    return;
  }
  console.log('connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false,
  // }, (err, result) => {
  //   if(err){
  //     return console.log('unbable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Joe',
    age: 50,
  }, (err,result) => {
    if(err){
      return console.log('unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
});
