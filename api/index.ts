import * as path from 'path';
import * as Koa from 'koa';
import * as koaLogger from 'koa-logger';
import * as koaStatic from 'koa-static';
import * as koaBody from 'koa-body';
import * as cors from '@koa/cors';
import * as historyFallback from 'koa2-history-api-fallback';
import * as dotenv from 'dotenv';
import { router } from './router/index';
import { errorHandler } from './middleware/ErrorHandler';
import { successHandler } from './middleware/SuccessHandler';
import './models';

dotenv.config();

export const app: Koa = new Koa();
const staticPath = path.resolve(__dirname, '../client', 'dist');

if (process.env.CORS === 'enabled') {
  app.use(cors());
}

app.use(koaLogger());
app.use(koaBody());

app.use(errorHandler);
app.use(successHandler);

app.use(router.routes());

app.use(historyFallback({
  index: '/index.html',
}));


app.use(koaStatic(staticPath));
if (!module.parent) app.listen(3000);
