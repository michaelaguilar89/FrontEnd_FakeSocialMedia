import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetPostComponent } from './get-post/get-post.component';
import { InsertPostComponent } from './insert-post/insert-post.component';
import { HeaderComponent } from './header/header.component';

import{ HttpClientModule} from '@angular/common/http';
import { ServicePostService } from './services/service-post.service';

@NgModule({
  declarations: [
    AppComponent,
    GetPostComponent,
    InsertPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicePostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
