import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../types/Post';

@Component({
  selector: 'post-list-element',
  templateUrl: './template.html',
  styleUrls: ['./styles.css'],
})
export class PostListElementComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
