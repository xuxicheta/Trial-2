const path = require('path');
const Koa = require('koa');
const kLogger = require('koa-logger');
const kStatic = require('koa-static');
const kBody = require('koa-body');
const history = require('koa2-history-api-fallback');
const cors = require('@koa/cors');

const api = require('./router');


const app = new Koa();

app.use(kLogger());
app.use(history({
  index: '/index.html',
}));
app.use(cors());
app.use(kBody());

app.use(api.routes());
app.use(kStatic(path.resolve(__dirname, '..', 'client', 'dist')));

if (!module.parent) app.listen(3000);

module.exports = app;
