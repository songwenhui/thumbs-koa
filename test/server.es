import request from 'supertest'
import app from '../app.js'

function server(app) {
  return request(app.listen())
}

describe('测试接口 /update', function() {
  it('点赞', function(done) {
    server(app)
      .get('/update')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        done()
      })
  })
})