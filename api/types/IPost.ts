import { Document } from 'mongoose';
import { IComment } from './IComment';

export interface IPost extends Document {
  title: string;
  body: string;
  author: string;
  createdAt: Date;
  comments?: Array<IComment>;
}
