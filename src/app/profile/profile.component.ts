import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
import { User } from '../models/user.model.client'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User()
  constructor(private service: UserServiceClient) { }

  ngOnInit() {
    this.service.profile()
    .then(user => this.user = user)
  }

}
