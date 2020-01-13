const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa')
const {saveInfo, fetchInfo} = require('../controllers/info')
const {saveStudent, fetchStudent, fetchStudentDetail} = require('../controllers/student')

const router = require('koa-router')()

router.post('/saveinfo', saveInfo)
      .get('/info', fetchInfo)
      .post('/savestudent', saveStudent)
      .get('/student', fetchStudent)
      .get('/studentDetail', fetchStudentDetail)
      .get('/graphiql', graphiqlKoa({
        endpointURL: '/graphql'
      }))
      // .get('/graphiql', async (ctx, next) => {
      //   await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
      // })

module.exports = router
