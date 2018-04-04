import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
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
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
