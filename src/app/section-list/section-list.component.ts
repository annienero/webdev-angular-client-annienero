import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client'
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router'
import { Course } from '../models/course.model.client'
import { SectionServiceClient } from '../services/section.service.client';
import { Section } from '../models/section.model.client';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private sectionService: SectionServiceClient, 
      private courseService: CourseServiceClient,
      private userService: UserServiceClient,
      private router: Router,
      private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params.courseId))
  }

  user = false
  course: Course = new Course()
  sections: Section[] = []
  courseId

  loadSections(courseId) {
    this.courseId = courseId
    this.courseService.findCourseById(courseId)
      .then(course => this.course = course)
     this.sectionService.findAllSectionsForCourse(courseId)
       .then(sections => this.sections = sections)
  }

  enroll(sectionId) {
    this.sectionService.enrollStudentInSection(sectionId)
    .then(() => this.router.navigate(['profile']))
  }

  ngOnInit() {
    this.userService.profile()
      .then(() => { this.user = true })
  }

}
