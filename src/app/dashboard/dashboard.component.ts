

import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {HttpClient } from '@angular/common/http';
import {PolicyserviceService} from '../serice-policy.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 	
  name = '';

  constructor(private user: UserService, private httpss: HttpClient,private policy :PolicyserviceService) {
 
   }

   // products : Object;
//
   products = [];
  // getData = function() {
  //   this.policy.fetchData().subscribe(
  //     (res: Response) => {
  //       this.posts = res;
  //       console.log(res);
  //     }
  //   )
  // }


  addNewProduct = function(products) {
    this.productObj = {
      "transaction_details": products.transaction_details,
      "spend_category":products.spend_category,
      "amount":products.amount,
      "date":products.date,
      "paymentType": products.paymentType

    }
    this.httpss.post("http://localhost:5555/products", this.productObj).subscribe((res:Response) => {
      console.log(res);
     // this.isAdded = true;
    //  this.router.navigateTo("/users");

    })
  }

 

  ngOnInit() {
   // this.getData();
  	this.name = this.user.username;
  //	console.log('Is user logged in? ', this.user.getUserLoggedIn())
  }


}
