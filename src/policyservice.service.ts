import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
//import {UserService} from '../user.service';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyserviceService {




// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent implements OnInit {

  name = '';

  constructor(private route: ActivatedRoute,private http:HttpClientModule) { }

 
  productObj : Object = {};

  products = [];
  fetchData = function() {
    this.http.get("http://localhost:5555/products").subscribe(
      (res: Response) => {
        this.products = res.json();
      }
    )
  }


  ngOnInit() {
  	console.log(this.route.snapshot.params);
    this.name = this.route.snapshot.params.name;
    this.fetchData();
  //	this.name = this.user.username;
  //	console.log('Is user logged in? ', this.user.getUserLoggedIn())
  }

}


