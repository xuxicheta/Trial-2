import { Context } from 'koa';

export async function successHandler({ response }: Context, next: Function) {
  const details = await next();
  if (!response.body) {
    response.body = {};
  }
  response.body.result = true;
  if (process.env.SUCCESS_DETAILS && details) {
    response.body.details = details;
  }
}
