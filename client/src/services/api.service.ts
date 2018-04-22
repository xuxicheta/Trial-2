import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {
  name: string = '';
  private baseUrl = 'http://localhost:3000/api';

  private endpoints = {
    posts:  `${this.baseUrl}/posts`,
    comments: `${this.baseUrl}/comments`,
  };

  constructor(
    private http: HttpClient,
  ) {
    this.restoreName();
  }

  posts = {
    create: (post: Post): Observable<any> => {
      this.name = post.author;
      this.saveName();
      return this.http.post(this.endpoints.posts, post, httpOptions);
    },
    read: (id: string): Observable<any> => {
      return this.http.get(`${this.endpoints.posts}/${id}`, httpOptions);
    },
    list: (): Observable<any> => {
      return this.http.get(this.endpoints.posts, httpOptions);
    }
  };

  comments = {
    create: (comment: PostComment): Observable<any> => {
      this.name = comment.author;
      this.saveName();
      return this.http.post(this.endpoints.comments, comment, httpOptions);
    },
    read: (index: number): Observable<any> => {
      return this.http.get(`${this.endpoints.comments}/${index}`, httpOptions);
    },
    list: (postId: string): Observable<any> => {
      return this.http.get(`${this.endpoints.comments}/post/${postId}`, httpOptions);
    }
  };

  saveName(): void {
    localStorage.setItem('name', this.name);
  }

  restoreName(): void {
    const name: string = localStorage.getItem('name');
    if (name) this.name = name;
  }
};
