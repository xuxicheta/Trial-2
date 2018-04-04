import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../types/Post';
import { Comment } from '../types/Comment';
import { ApiService } from '../api.service';

@Component({
  selector: 'post-details',
  templateUrl: './template.html',
  styleUrls: ['./styles.css'],
})
export class PostDetailsComponent implements OnInit {
  post: Post = {
    id: '',
    title: '',
    body: '',
    author: '',
    createdAt: new Date(),
  };
  comments: Comment[];
  comment: Comment = this.resetComment();
  id: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPost();
    this.getComments();
  }

  getPost(): void {
    this.apiService.posts.read(this.id)
      .subscribe(data => {
        this.post = data.post;
        this.comment.postId = this.post.id;
      });
  }

  getComments(): void {
    this.apiService.comments.list(this.id)
      .subscribe(data => {
        this.comments = data.comments;
        console.log(this.comments);
      });
  }

  private resetComment(): Comment {
    return {
      id: '',
      postId: this.post.id,
      author: this.apiService.name,
      text: '',
      createdAt: new Date(),
    }
  }

  submitComment(event): void {
    this.apiService.comments.create(this.comment)
      .subscribe(() => {
        this.comment = this.resetComment();
        this.getComments();
      });
  }

}
