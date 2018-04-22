import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { PostCreateComponent } from '@app/blog/post-create/post-create';
import { PostListComponent } from '@app/blog/post-list/post-list';
import { PostDetailsComponent } from '@app/blog/post-details/post-details';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: PostListComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}