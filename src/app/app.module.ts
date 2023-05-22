import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetPostComponent } from './get-post/get-post.component';
import { InsertPostComponent } from './insert-post/insert-post.component';

@NgModule({
  declarations: [
    AppComponent,
    GetPostComponent,
    InsertPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
