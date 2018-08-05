import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
import { User } from '../models/user.model.client'
import { Router } from '../../../node_modules/@angular/router';
import { Enrollment } from '../models/enrollment.model.client';
import { SectionServiceClient } from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User()
  enrollments
  constructor(private service: UserServiceClient, private sectionService: SectionServiceClient, private router: Router) { }

  ngOnInit() {
    this.service.profile()
    .then(user => this.user = user)

    this.sectionService.findSectionsForStudent()
    .then(enrollments => this.enrollments = enrollments)
  }

  logout() {
    this.service.logout() 
    this.router.navigate(['login'])
  }

  updateUser() {
    this.service.updateUser(this.user) 
    .then(user => this.user = user)
  }

  dropCourse(sectionId, enrollmentId) {
    this.sectionService.dropCourse(sectionId, enrollmentId)
    .then(() => this.sectionService.findSectionsForStudent()
      .then(enrollments => this.enrollments = enrollments))
  }
}
