const koa = require('koa')
const app = new koa()
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const router = new Router()

router.get('/', (ctx, next) => {
    ctx.type = 'html'
    let html =
        `
            <h1>登录</h1>
            <form method="POST" action="/">
                <p>用户名</p>
                <input name="userName" /><br/>
                <p>密码</p>
                <input name="password" /><br/>
                <button type="submit">submit</button>
            </form>`

    ctx.body = html
})

router.post('/', (ctx, next) => {
    let postData = ctx.request.body
    ctx.body = postData
})


app.use(bodyParser()).use(router.routes()).use(router.allowedMethods())
// app.use(async (ctx, next) => {
//     if (ctx.url === '/' && ctx.method === 'GET') {
//         ctx.type = 'html'
//         let html = `
//         <h1>登录</h1>
//         <form method="POST" action="/">
//             <p>用户名</p>
//             <input name="userName" /><br/>
//             <p>密码</p>
//             <input name="password" /><br/>
//             <button type="submit">submit</button>
//         </form>`

//         ctx.body = html
//     } else if (ctx.url === '/' && ctx.method === 'POST') {
//         let postData = ctx.request.body
//         ctx.body = postData
//     }
// })

// app.use(async (ctx, next) => {
//     await next()
//     ctx.response.type = 'text/html'
//     ctx.response.body = '<h1>Hello World</h1>'

//     // ctx;
//     // ctx.request;
//     // ctx.response;
//     // this;
//     // this.request;
//     // this.response;

//     ctx.response.body = {
//         url: ctx.request.url,      // 获取请求URL
//         query: ctx.request.query,  // 获取解析的查询字符串
//         querystring: ctx.request.querystring  // 获取原始查询字符串
//     }

//     // http://localhost:3000/?search=koa&keywords=context
//     {
//         "url": "/?search=koa&keywords=context",
//         "query": { "search": "koa", "keywords": "context" },
//         "querystring": "search=koa&keywords=context"
//     }

// })

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})
