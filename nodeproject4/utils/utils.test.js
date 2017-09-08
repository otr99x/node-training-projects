const utils = require('./utils');
const expect = require('expect');

describe('utils', () => {
  describe('simple', () => {
    it('should add 2 numbers', () => {
      var res = utils.add(2,3);
      expect(res).toBe(5).toBeA('number');
    });

    it('should square 2 numbers', () => {
      var res = utils.square(5);
      if(res !== 25){
        throw new Error(`expected 25 but got ${res}`);
      }
    });
  });

  it('should be a Car', () => {
    var acar = new Car();
    expect(acar).toBeA(Car);
  });

  function Boat(){

  }

  function Car(){

  }

  it('should expect some value', () => {

    expect({
      name: "joe",
      age: 50,
    }).toEqual({
      name: "joe",
      age: 50,
    });

    expect({
      name: "joe",
      age: 50,
    }).toNotBe({
      name: "joe",
      age: 50,
    });


  });

  it('should verify first and last names are set', () => {
    var user = utils.setName({
      age: 15,
      location: 'calgary',
    }, 'Joe Cheung');

    expect(user).toInclude({
      firstname: 'Joe',
      lastname: 'Cheung',
    });
  });

  describe('async', () => {
    it('should async add 2 numbers', (done) => {
      utils.asyncAdd(2,3, (sum) => {
        expect(sum).toBe(5).toBeA('number');
        done();
      });
    });

    it('should async square 2 numbers', (done) => {
      utils.asyncSquare(5, (square) => {
        expect(square).toBe(25).toBeA('number');
        done();
      });
    });
        
  });

});
