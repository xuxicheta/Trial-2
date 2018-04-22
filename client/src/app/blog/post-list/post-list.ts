import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(
    private apiService: ApiService
  ) { }

  getPosts(): void {
    this.apiService.posts.list()
      .subscribe(data => {
        this.posts = data.posts;
      });
  }

  ngOnInit() {
    this.getPosts();
  }



}
