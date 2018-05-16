import * as Router from 'koa-router';
import { IndexController } from '../controllers/IndexController';
import { PostsController } from '../controllers/PostsController';
import { CommentsController } from '../controllers/CommentsController';
import { StateController } from '../controllers/StateController';

export const router: Router = new Router();

router.get('/api', IndexController.manifest);
router.get('/error', IndexController.error);

// state
const state: Router = new Router();
state
  .get('/', StateController.read);
router.use('/api/state', state.routes());

// /api/posts
const posts: Router = new Router();
posts
  .get('/', PostsController.list)
  .get('/:id', PostsController.read)
  .post('/', PostsController.create);
router.use('/api/posts', posts.routes());

// /api/comments
const comments: Router = new Router();
comments
  .get('/post/:postId', CommentsController.list)
  .get('/:id', CommentsController.read)
  .post('/', CommentsController.create);
router.use('/api/comments', comments.routes());

