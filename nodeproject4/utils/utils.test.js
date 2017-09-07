const utils = require('./utils');

it('should add 2 numbers', () => {
  var res = utils.add(2,3);
  if(res !== 5){
    throw new Error(`expected 5 but got ${res}`);
  }
});

it('should square 2 numbers', () => {
  var res = utils.square(5);
  if(res !== 25){
    throw new Error(`expected 25 but got ${res}`);
  }
});
