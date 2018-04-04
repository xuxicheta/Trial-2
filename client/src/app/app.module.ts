import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// routing
import { AppRoutingModule } from './/app-routing.module';
// components
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list';
import { PostListElementComponent } from './post-list-element';
import { PostCreateComponent } from './post-create';
import { PostDetailsComponent } from './post-details';

// services
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListElementComponent,
    PostCreateComponent,
    PostDetailsComponent,
  ],
  exports: [
    MatCardModule,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
