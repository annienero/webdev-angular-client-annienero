import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client'
import { ActivatedRoute } from '../../../node_modules/@angular/router'
import { Course } from '../models/course.model.client'

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: CourseServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params.courseId))
  }

  course: Course = new Course()

  loadSections(courseId) {
    // this.service.findCourseById(courseId)
    //   .then(course => this.course = course)
  }

  ngOnInit() {
  }

}
