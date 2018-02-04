import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'
import {saveInfo, fetchInfo} from '../controllers/info'
import {saveStudent, fetchStudent, fetchStudentDetail} from '../controllers/student'

// 引入schema
import schema from '../graphql/schema'

const router = require('koa-router')()

router.post('/saveinfo', saveInfo)
    .get('/info', fetchInfo)
    .post('/savestudent', saveStudent)
    .get('/student', fetchStudent)
    .get('/studentDetail', fetchStudentDetail)




router.post('/graphql', async (ctx, next) => {
    await graphqlKoa({schema: schema})(ctx, next) // 使用schema
})
    .get('/graphql', async (ctx, next) => {
        await graphqlKoa({schema: schema})(ctx, next) // 使用schema
    })
    .get('/graphiql', async (ctx, next) => {
        await graphiqlKoa({endpointURL: '/graphql'})(ctx, next) // 重定向到graphiql路由
    })
module.exports = router