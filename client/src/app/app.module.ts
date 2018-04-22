// angular
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// project modules
import { BlogModule } from '@app/blog/blog.module';
// routing
import { AppRoutingModule } from '@app/app-routing.module';
// main component
import { AppComponent } from '@app/app.component';
// services
import { ApiService } from '@services/api.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BlogModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
