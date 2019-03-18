

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {  RegisterService } from '../register.service';

@Component({
  
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,private registerService:RegisterService
       ) { }

    register() {
        this.loading = true;
        this.registerService.create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                  //  this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    //this.alertService.error(error);
                    this.loading = false;
                });
    }
}
