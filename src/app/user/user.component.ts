

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import { HttpClient } from '@angular/common/http';
import {PolicyserviceService} from '../serice-policy.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name = '';

  constructor(private user: UserService,private policy :PolicyserviceService,private route: ActivatedRoute,private httpss:HttpClient) { }

 
  productObj : Object = {};

  products = [];
  fetchData = function() {
    this.httpss.get("http://localhost:5555/products").subscribe(
      (res: Response) => {
        this.products = res;
      }
    )
  }


  ngOnInit() {
  	console.log(this.route.snapshot.params);
    this.name = this.route.snapshot.params.name;
    this.fetchData();
  	this.name = this.user.username;
  	console.log('Is user logged in? ', this.user.getUserLoggedIn())
  }

}

