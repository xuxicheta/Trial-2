// Post model
import { Schema, model } from 'mongoose';
import { IPost } from '../types/IPost';

const PostSchema = new Schema({
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

export const Post = model<IPost>('Post', PostSchema);

