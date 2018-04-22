import { Context } from 'koa';
import { log } from '../lib/Log';

export async function errorHandler(ctx: Context, next: Function) {
  try {
    await next();
  } catch (error) {
    ctx.status = error.code || 500;
    ctx.body = {
      result: false,
      message: error.message || 'Common Internal Server Error',
      code: ctx.status,
    };
    if (process.env.ERROR_DETAILS && error.details) {
      ctx.body.details = error.details;
    }
    log.error(error);
  }
}
