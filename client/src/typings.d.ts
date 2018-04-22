/* SystemJS module definition */
// declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface PostComment {
  id?: string;
  author: string;
  postId: string;
  text: string;
  createdAt: Date;
}

interface Post {
  id?: string;
  title: string;
  body: string;
  author: string;
  createdAt: Date;
  comments?: Array<Comment>;
}
