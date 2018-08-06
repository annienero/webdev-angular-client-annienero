import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client';
import { Course } from '../models/course.model.client'
import { UserServiceClient } from '../services/user.service.client';
import { SectionServiceClient } from '../services/section.service.client';
import { Section } from '../models/section.model.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient, 
              private userService: UserServiceClient,
              private sectionService: SectionServiceClient) { }

  courses: Course[] = []
  sections: Section[] = []
  user = false

  ngOnInit() {
    this.userService.profile()
      .then(() => { this.user = true })
    this.service.findAllCourses()
      .then(courses => this.courses = courses)
    this.sectionService.findSectionsForStudent()
      .then(sections => this.sections = sections)
  }
}
