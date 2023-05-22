import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicePostService {

  url='localhost:5001/api/Post';
  myPost:any;
  constructor(private http:HttpClient) { }

  getPost(){
    this.http.get(this.url).toPromise().then(data=>{
      this.myPost= data ;
    }
      )
  }
}
