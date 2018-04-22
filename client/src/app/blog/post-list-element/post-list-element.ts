import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'post-list-element',
  templateUrl: './post-list-element.html',
  styleUrls: ['./post-list-element.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostListElementComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
