import { Context } from 'koa';
import { ApiError } from '../lib/ApiError';

const manifest = {
  version: '0.1',
  routes: [
    {
      endpoint: '/api/posts',
      methods: ['GET', 'POST'],
    },
    {
      endpoint: '/api/comments',
      methods: ['GET', 'POST'],
    },
  ],
};


export class IndexController {
  static manifest({ response: res }: Context) {
    res.body = manifest;
    return 'its ok in bagdad';
  }

  static error() {
    throw new ApiError({
      code: 500,
      message: 'my error message',
      details: { text: 'details text' },
    });
  }
}
