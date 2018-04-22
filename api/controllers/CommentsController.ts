// user controller
import { Context, Request, Response } from 'koa';
import { ApiError } from '../lib/ApiError';
import { ParameterValidator } from '../lib/ParametersValidator';
import { IComment } from '../types/IComment';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';

interface ICommentRequest extends Request {
  body: IComment;
}

interface ICommentContext extends Context {
  request: ICommentRequest;
  response: Response;
}

export class CommentsController {
  static async create({ response, request }: ICommentContext) {
    const post = await Post.findById(request.body.postId);
    if (!post) {
      throw new ApiError({
        message: 'Post with such id no exists',
        code: 404,
        details: { postId: request.body.postId },
      });
    }

    const comment = new Comment(request.body);
    await comment.save();
    response.body = { comment };
  }

  static async read({ response, params }: Context) {
    ParameterValidator(params, ['id']);
    const comment = await Comment.findById(params.id);
    if (!comment) {
      throw new ApiError({
        message: 'Comment not found',
        code: 404,
        details: { id: params.id },
      });
    }

    response.body = { comment };
  }

  static async list({ response, params }: Context) {
    ParameterValidator(params, ['postId']);
    const comments = await Comment.find({
      postId: params.postId,
    });
    response.body = { comments };
  }
}
