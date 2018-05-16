import { Context } from 'koa';
import { ApiError } from '../lib/ApiError';

export class StateController {
  static state = {
    shalanda: 'kefalei',
    world: 'peace',
  }

  static read(ctx: Context) {
    ctx.body = { 
      ...StateController.state,
      seal: Math.random(),
      nested: {
        nest: {
          o: 'ooooooo',
        },
      },
    };
  }
}
