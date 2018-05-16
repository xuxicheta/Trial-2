// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// external
import { MaterialModule } from '@app/material/material.module';
// components
import { PostListComponent } from './post-list/post-list';
import { PostListElementComponent } from './post-list-element/post-list-element';
import { PostCreateComponent } from './post-create/post-create';
import { PostDetailsComponent } from './post-details/post-details';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    PostListComponent,
    PostListElementComponent,
    PostCreateComponent,
    PostDetailsComponent,
  ],
})
export class BlogModule { }
