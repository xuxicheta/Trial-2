import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Post } from '../types/Post';

@Component({
  selector: 'post-list-element',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostListElementComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
