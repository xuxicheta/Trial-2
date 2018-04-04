/**
 *  route handlers for post
 */
const db = require('../models');
// const settings = require('../config/settings.json');
const debug = require('debug')('catch');

// const pageSize = parseInt(settings.pageSize, 10);

/* post model
title: String,
body: String,
author: String,
createdAt: Date,
updatedAt: Date,
*/

module.exports = {
  /**
   * @param {String} req.body.title
   * @param {String} req.body.body
   * @param {String} req.body.author
   * @param {String} req.body.createdAt
   * if in NOAUTH mode req.body.author is required
   */
  async create({ response: res, request: { body } }) {
    res.type = 'application/json';
    try {
      const post = new db.Post(body);
      await post.save();
      res.body = {
        success: true,
        post,
      };
    } catch (err) {
      res.status = 500;
      res.body = {
        success: false,
      };
      debug(err);
    }
  },
  /**
   * @param {String} req.params.postId
   */
  async read({ response: res, params }) {
    try {
      if (!params.id) throw new Error('no post id');
      const post = await db.Post.findById(params.id);

      if (!post) throw new Error('post not found');
      res.body = {
        success: true,
        post,
      };
    } catch (err) {
      res.status = 500;
      res.body = {
        success: false,
      };
      debug(err);
    }
  },
  // /**
  //  * @param {String} req.body.title
  //  * @param {String} req.body.body
  //  * @param {String} req.body.postId
  //  */
  // async update({ response: res, request: req }) {
  //   try {
  //     if (!req.body.id) throw new Error('no postId');
  //     const post = await db.Post.findById(req.body.id);

  //     // rewrite properties
  //     if (req.body.title) post.title = req.body.title;
  //     if (req.body.body) post.body = req.body.body;
  //     post.updatedAt = Date.now();

  //     await post.save();
  //     res.body = {
  //       success: true,
  //       post,
  //     };
  //   } catch (err) {
  //     res.status = 500;
  //     res.body = {
  //       success: false,
  //     };
  //     debug(err);
  //   }
  // },
  /**
   * @param {String} req.params.postId
   */
  // async delete({ response: res, request: req }) {
  //   try {
  //     await db.Post.findByIdAndRemove(req.params.postId);
  //     res.body = {
  //       success: true,
  //     };
  //   } catch (err) {
  //     res.status = 500;
  //     res.body = {
  //       success: false,
  //     };
  //     debug(err);
  //   }
  // },

  async list({ response: res }) {
    try {
      const posts = await db.Post.find();
      res.body = {
        success: true,
        posts,
      };
    } catch (err) {
      res.status = 500;
      res.body = {
        success: false,
      };
      debug(err);
    }
  },
  // /**
  //  * @param {String} req.params.offset
  //  */
  // async postListPaged({ response: res, request: req }) {
  //   try {
  //     const offset = parseInt(req.params.offset, 10);
  //     const posts = await db.Post.find({
  //     }, [
  //       'id',
  //       'title',
  //     ])
  //       .skip(offset)
  //       .limit(pageSize);
  //     res.body = {
  //       success: true,
  //       offset,
  //       pageSize,
  //       posts,
  //     };
  //   } catch (err) {
  //     res.status = 500;
  //     res.body = {
  //       success: false,
  //     };
  //     debug(err);
  //   }
  // },
};
