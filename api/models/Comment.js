// Post model
// export class Comment {
//   id: string;
//   author: string;
//   text: string;
//   createdAt: Date;
// }
const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  author: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  postId: {
    type: ObjectId,
    ref: 'Post',
  },
});

if (!CommentSchema.options.toObject) CommentSchema.options.toObject = {};
CommentSchema.options.toObject.versionKey = false;
CommentSchema.options.toObject.transform = function transform(doc, ret) {
  ret.id = ret._id; // eslint-disable-line
  delete ret._id; // eslint-disable-line
  return ret;
};

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
