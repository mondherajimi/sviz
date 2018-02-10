import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

import { User } from '../shared/models/user';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})

export class HomeComponent { 
  title = 'Tour of Heroes';
  currentUser: User;
  
  constructor(private authenticationService: AuthenticationService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }  
}