import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})

export class LoginComponent implements OnInit { 
  // heroes: Hero[] = [];
  model: any = {};
  loading = false;
  returnUrl: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // console.log(this.returnUrl);
  }
  
  login() {
    this.loading = true;
    console.log('login button pressed')
    this.returnUrl = '/home';
    this.router.navigate([this.returnUrl]);
    
    let myResponse = this.authenticationService.login(this.model.username, this.model.password);
    console.log('ma reponse: ' + myResponse.id);
    console.log('ma reponse: ' + myResponse.username);

    this.router.navigate([this.returnUrl]);
    
    /*
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    */
  }
}