import { Schema, model } from 'mongoose';
import { IComment } from '../types/IComment';

const CommentSchema = new Schema({
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
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
});

export const Comment = model<IComment>('Comment', CommentSchema);
