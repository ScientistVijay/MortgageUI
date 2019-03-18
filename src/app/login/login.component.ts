

//   loginUser(e) {
//   	e.preventDefault();
//   	console.log(e);
//   	var username = e.target.elements[0].value;
//   	var password = e.target.elements[1].value;
//     console.log(username,password);
    
//   	if(username == 'admin' && password == 'admin') {
//      // this.user.setUserLoggedIn();
//   		this.router.navigate(['dashboard']);
//   	}
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
   
    templateUrl: 'login.component.html'
})

export class LoginFormComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,private authenticationService: AuthenticationService ) { }

    ngOnInit() {
        // reset login status
      //  this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['dashboard'] || '/';
    }

    login() {

        this.loading = true;
        this.authenticationService.login(this.model.userName, this.model.password)
            .subscribe(
                data => {
                  this.router.navigate(["../dashboard"]);
                },
                error => {
                   // this.alertService.error(error);
                    this.loading = false;
                });
    }
}
