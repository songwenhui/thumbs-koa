'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require('../app.js');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function server(app) {
  return (0, _supertest2.default)(app.listen());
}

describe('测试接口 /update', function () {
  it('点赞', function (done) {
    server(_app2.default).get('/update').expect(200).end(function (err, res) {
      if (err) return done(err);
      done();
    });
  });
});