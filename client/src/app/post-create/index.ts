import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Post } from '../types/Post';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'post-create',
  templateUrl: './template.html',
  styleUrls: ['./styles.css'],
})
export class PostCreateComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  @Output() submit = new EventEmitter<Post>();

  post: Post = {
    title: '',
    body: '',
    author: '',
    createdAt: new Date(),
  };

  constructor(
    private apiService: ApiService,
    private location: Location,
  ) { }

  private keyHandler = (event) => {
    if (event.key === "Escape") {
      this.closeMe(event);
    }
  };

  submitMe(event): void {
    event.preventDefault();
    this.apiService.posts.create(this.post)
      .subscribe(post => console.log(post));
    // TODO message about result of post creation
    this.closeMe(null);
  }

  closeMe(event): void {
    if (event) event.preventDefault();
    this.location.back();
  }

  ngOnInit() {
    window.addEventListener('keydown', this.keyHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('keydown', this.keyHandler);
  }


}
