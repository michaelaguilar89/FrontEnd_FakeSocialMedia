import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPostComponent } from './get-post/get-post.component';
import { InsertPostComponent } from './insert-post/insert-post.component';

const routes: Routes = [
  {path:'getPost',component:GetPostComponent},
  {path:'new-Post',component:InsertPostComponent},
  {path:'update-Post',component:InsertPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
