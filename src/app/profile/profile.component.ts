import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
import { User } from '../models/user.model.client'
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User()
  constructor(private service: UserServiceClient, private router: Router) { }

  ngOnInit() {
    this.service.profile()
    .then(user => this.user = user)
  }

  logout() {
    this.service.logout() 
    this.router.navigate(['login'])
  }

  updateUser() {
    this.service.updateUser(this.user) 
    .then(user => this.user = user)
  }
}
