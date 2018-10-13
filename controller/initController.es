import index from "./indexController.js";

const initController = {
  init (app, router) {
    app.use(router(_ => {
      _.get('/index/index', index.index()),
      _.get('/update', index.update())
    }))
  }
}

export default initController