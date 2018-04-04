// Post model
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  author: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

if (!PostSchema.options.toObject) PostSchema.options.toObject = {};
PostSchema.options.toObject.versionKey = false;
PostSchema.options.toObject.transform = function transform(doc, ret) {
  ret.id = ret._id; // eslint-disable-line
  delete ret._id; // eslint-disable-line
  return ret;
};

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
