import Koa from 'koa'
const app = new Koa()
import CONFIG from './config/config'
import router from 'koa-simple-router'
import render from 'koa-swig'
import co from 'co'
import serve from 'koa-static'
import initController from './controller/initController.js'
import 'babel-polyfill'
// import 'babel-register'
 
app.context.render = co.wrap(render({
  root: CONFIG.get('viewsDir'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
}));

app.use(serve(CONFIG.get('staticDir')))

initController.init(app, router)
 
app.listen(CONFIG.get('port'), () => {
  console.log('server start at 3000')
})

export default app