import rp from 'request-promise'

class indexModel {
  constructor (ctx) {
    this.ctx = ctx
  }

  updateNum () {
    const option = {
      uri: 'http://localhost/praise.php',
      method: 'get'
    }
    return new Promise((resolve, reject) => {
      rp(option).then((data) => {
        let result = JSON.parse(data)
        if (result.status === 0) {
          resolve(result)
        } else {
          reject(result)
        }
      }).then((err) => {
        reject(err)
      })
    })
  }
}

export default indexModel
