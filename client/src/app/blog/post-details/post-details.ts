import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'post-details',
  templateUrl: './post-details.html',
  styleUrls: ['./post-details.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostDetailsComponent implements OnInit {
  @Input() inset: boolean;

  post: Post;
  nowComment: PostComment = this.resetComment();
  comments: PostComment[];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.post.id = this.route.snapshot.paramMap.get('id');
    this.getPost();
    this.getComments();
  }

  getPost(): void {
    this.apiService.posts.read(this.post.id)
      .subscribe(data => {
        this.post = data.post;
        // this.comment.postId = this.post.id;
      });
  }

  getComments(): void {
    this.apiService.comments.list(this.post.id)
      .subscribe(data => {
        this.comments = data.comments;
        console.log(this.comments);
      });
  }

  private resetComment(): PostComment {
    return {
      // id: '',
      author: this.apiService.name,
      postId: this.post.id,
      text: '',
      createdAt: new Date(),
    };
  }

  submitComment(event): void {
    this.apiService.comments.create(this.nowComment)
      .subscribe(() => {
        this.nowComment = this.resetComment();
        this.getComments();
      });
  }

}
