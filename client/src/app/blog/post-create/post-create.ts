import { Component, OnInit, EventEmitter, Output, OnDestroy, ViewEncapsulation } from '@angular/core';
// import { Post } from '../../../types/Post';
import { ApiService } from '@services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.html',
  styleUrls: ['./post-create.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostCreateComponent implements OnInit, OnDestroy {
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
    if (event.key === 'Escape') {
      this.closeMe(event);
    }
  }

  submitMe(event): void {
    event.preventDefault();
    this.apiService.posts.create(this.post)
      .subscribe(post => console.log(post));
    // TODO message about result of post creation
    this.closeMe(null);
  }

  closeMe(event): void {
    if (event) {
      event.preventDefault();
    }
    this.location.back();
  }

  ngOnInit() {
    window.addEventListener('keydown', this.keyHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('keydown', this.keyHandler);
  }


}
