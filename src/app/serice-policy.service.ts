import { Injectable } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
//import {UserService} from '../user.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyserviceService {

  name = '';

  constructor(private route: ActivatedRoute,private http:HttpClientModule,private httpss:HttpClient) { }

 
  productObj : Object = {};

  posts = [];
  fetchData = function() {
   return this.httpss.get("");
  }


  ngOnInit() {
  	console.log(this.route.snapshot.params);
    this.name = this.route.snapshot.params.name;
   // this.fetchData();
  //	this.name = this.user.username;
  //	console.log('Is user logged in? ', this.user.getUserLoggedIn())
  }

}



