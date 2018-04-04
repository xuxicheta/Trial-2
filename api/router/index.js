const Router = require('koa-router');
const indexCtrl = require('../controllers');
const postsCtrl = require('../controllers/posts');
const commentsCtrl = require('../controllers/comments');

const api = new Router();


api.get('/api', indexCtrl.api);

// /api/posts
const posts = new Router();
posts
  .get('/', postsCtrl.list)
  .get('/:id', postsCtrl.read)
  .post('/', postsCtrl.create);
api.use('/api/posts', posts.routes());

// /api/comments
const comments = new Router();
comments
  .get('/post/:postId', commentsCtrl.list)
  .get('/:id', commentsCtrl.read)
  .post('/', commentsCtrl.create);
api.use('/api/comments', comments.routes());


module.exports = api;
