// 引入模块
const Koa = require('koa')
const KoaStatic = require('koa-static')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const { database } = require('./mongodb')
const {saveInfo, fetchInfo} = require('./controllers/info')
const {saveStudent, fetchStudent, fetchStudentDetail} = require('./controllers/student')

database() // 链接数据库并且初始化数据模型

const GraphqlRouter = require('./router')

const app = new Koa()
const router = new Router();

// 使用 bodyParser 和 KoaStatic 中间件
app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

router.use('', GraphqlRouter.routes())

// 路由设置test
router.get('/test', (ctx, next) => {
  ctx.body="test page"
});

// 设置每一个路由对应的相对的控制器
// router.post('/saveinfo', saveInfo)
// router.get('/info', fetchInfo)

// router.post('/savestudent', saveStudent)
// router.get('/student', fetchStudent)
// router.get('/studentDetail', fetchStudentDetail)

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000);

console.log('graphQL server listen port: ' + 4000)
