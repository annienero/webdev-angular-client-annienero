import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserServiceClient, private router: Router) { }

  username
  password
  password2

  register(username, password, password2) {
    if (password !== password2) {
      alert("Passwords do not match!")
      return
    }
    if (username == null) {
      alert("Enter a username")
      return
    }
    if (password == null) {
      alert("Enter a password")
      return
    }
    this.service.createUser(username, password)
      .then((()=> this.router.navigate(['home']))) //TODO eventually go to profile
  }

  ngOnInit() {
  }

}
