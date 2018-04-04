// user controller
const db = require('../models');
const debug = require('debug')('catch');

module.exports = {
  /**
   * @param {String} req.body.username
   * @param {String} req.body.password
   * @param {String} req.body.role
   */
  async create({ response: res, request: { body } }) {
    try {
      const post = await db.Post.findById(body.postId);

      if (!post) throw new Error('wrong post id');
      const comment = new db.Comment(body);

      await comment.save();
      res.body = {
        success: true,
        comment,
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
   * @param {String} req.params.userId
   */
  async read({ response: res, params }) {
    try {
      if (!params.id) throw new Error('no user id');
      const comment = await db.Comment.findById(params.id);
      if (!comment) throw new Error('user not found');
      res.body = {
        success: true,
        comment,
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
  //  * @param {String} req.body.id
  //  * @param {String} req.body.username
  //  * @param {String} req.body.password
  //  * @param {String} req.body.role
  //  */
  // async update({ response: res, request: req }) {
  //   try {
  //     if (!req.body.id) throw new Error('no user id');
  //     const user = await db.User.findById(req.body.id);
  //     if (req.user.id !== user.id) throw new Error('only owner may edit himself');
  //     // rewrite properties
  //     if (req.body.username) user.username = req.body.username;
  //     if (req.body.role) user.role = req.body.role;
  //     if (req.body.password) user.encryptPassword(req.body.password);
  //     user.updatedAt = Date.now();
  //     await user.save();
  //     res.body = {
  //       success: true,
  //       user,
  //     };
  //   } catch (err) {
  //     res.status = 500;
  //     res.body = {
  //       success: false,
  //     };
  //     debug(err);
  //   }
  // },
  // /**
  //  * @param {String} req.params.userId
  //  */
  // async delete({ response: res, request: req }) {
  //   try {
  //     if (req.user.id === req.params.userId) throw new Error('admin cant delete himself');
  //     await db.User.findByIdAndRemove(req.params.userId);
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
  /**
   * users list
   * @param { ctx.response }
   */
  async list({ response: res, params }) {
    try {
      if (!params.postId) throw new Error('no post id');
      const comments = await db.Comment.find({
        postId: params.postId,
      });

      res.body = {
        success: true,
        comments,
      };
    } catch (err) {
      res.status = 500;
      res.body = {
        success: false,
      };
      debug(err);
    }
  },
};
