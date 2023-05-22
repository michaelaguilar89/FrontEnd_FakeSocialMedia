import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable} from 'rxjs';
import { post } from '../models/post';
import { ServicePostService } from '../services/service-post.service';

@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.component.html',
  styleUrls: ['./get-post.component.css']
})
export class GetPostComponent {

 
  constructor(public service:ServicePostService){


  }

  ngOnInit():void{
    this.service.getPost();
  }
}
