import { Comment } from './Comment';

export class Post {
  id?: string;
  title: string;
  body: string;
  author: string;
  createdAt: Date;
  comments?: Array<Comment>;
}