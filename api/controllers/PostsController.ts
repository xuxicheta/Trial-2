/**
 *  route handlers for post
 */
/* eslint no-undef: "off" */
import { Context, Request, Response } from 'koa';
import { ApiError } from '../lib/ApiError';
import { ParameterValidator } from '../lib/ParametersValidator';
import { IPost } from '../types/IPost';
import { Post } from '../models/Post';


interface IPostRequest extends Request {
  body: IPost;
}

interface IPostContext extends Context {
  request: IPostRequest;
  response: Response;
}

export class PostsController {
  static async create({ response, request }: IPostContext) {
    const post = new Post(request.body);
    await post.save();
    response.body = { post };
  }

  static async read({ response, params }: Context) {
    ParameterValidator(params, ['id']);

    const post = await Post.findById(params.id);
    if (!post) {
      throw new ApiError({
        message: 'Post not found',
        code: 404,
        details: { id: params.id },
      });
    }
    response.body = { post };
  }

  static async list({ response }: Context) {
    const posts = await Post.find();
    response.body = { posts };
  }
}
