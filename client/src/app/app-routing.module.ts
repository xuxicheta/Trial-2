import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { PostCreateComponent } from './post-create';
import { PostListComponent } from './post-list';
import { PostDetailsComponent } from './post-details';

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