const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe('webs', () => {
  it('should return hello world response', (done) => {
    request(app)
      .get("/")
      .expect(200)
      .expect('hello world')
      .end(done);
  });

  it('should return web request json', (done) => {
    request(app)
    .get('/data')
    .expect(200)
    .expect({
      name: 'Joe',
      number: 55,
    })
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Joe',
      });
    })
    .end(done);
  });

  it('should return web request specific user', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Joe',
        title: 'master',
      });
    })
    .end(done);
  });  
});
