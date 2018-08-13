import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserServiceClient, private router: Router) { }
  username
  password

  login(username, password) {
    if (username == null) {
      alert("Enter a username")
      return
    }
    else if (password == null) {
      alert("Enter a password")
      return
    }
    this.service.login(username, password)
    .then(() => this.router.navigate(['profile']),
      () => alert('Invalid credentials'))
  }

  ngOnInit() {
  }

}
