import { Document, Schema } from 'mongoose';

export interface IComment extends Document {
  author: string;
  text: string;
  createdAt: Date;
  postId: Schema.Types.ObjectId;
}

