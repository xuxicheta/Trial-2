import { Component, OnInit } from '@angular/core';
import { Post } from '../types/Post';
import { ApiService } from '../api.service';

@Component({
  selector: 'post-list',
  templateUrl: './template.html',
  styleUrls: ['./styles.css'],
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
