const koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>Hello World</h1>'
    
    // ctx;
    // ctx.request;
    // ctx.response;
    // this;
    // this.request;
    // this.response;
    
    
    // http://localhost:3000/?search=koa&keywords=context
    ctx.response.body = {
        url: ctx.request.url,      // 获取请求URL
        query: ctx.request.query,  // 获取解析的查询字符串
        querystring: ctx.request.querystring  // 获取原始查询字符串
    }
    
    
})

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})