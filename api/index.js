const path = require('path');
const Koa = require('koa');
const kLogger = require('koa-logger');
const kStatic = require('koa-static');
const kBody = require('koa-body');
// const kSession = require('koa-session');
const cors = require('@koa/cors');

// const { secret } = require('./config/secret.json');

const api = require('./router');


const app = new Koa();
app.use(kLogger());
app.use(cors());
app.use(kBody());

// app.keys = [secret];
// app.use(kSession({}, app));

app.use(api.routes());
app.use(kStatic(path.resolve(__dirname, '..', 'client', 'dist')));

if (!module.parent) app.listen(3000);

module.exports = app;
