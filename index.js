const Koa = require('koa');
const Router = require('koa-router');
const mockList = require('./mock/index');

const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();

async function getRes(fn) {
  return new Promise(resolve=>{
    setTimeout(()=>{
      const res = fn();
      resolve(res);
    },1000)
  })
}

// 注册mock路由
mockList.forEach(item=>{
  const {url,method,response} = item;
  router[item.method](url,async ctx=>{
    const res = await getRes(response);
    ctx.body = res; //输出
  })
})

app.use(cors());
app.use(router.routes());

app.listen(3000)