const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

it('should return hello world response', (done) => {
  request(app)
    .get("/")
    .expect(404)
    .expect('hello world')
    .end(done);
});

it('should return web request json', (done) => {
  request(app)
  .get('/data')
  .expect(404)
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
