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

module.exports = {
  api({ response: res }) {
    res.body = manifest;
  },
};
