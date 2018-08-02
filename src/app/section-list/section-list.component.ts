import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client'
import { ActivatedRoute } from '../../../node_modules/@angular/router'
import { Course } from '../models/course.model.client'
import { SectionServiceClient } from '../services/section.service.client';
import { Section } from '../models/section.model.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private sectionService: SectionServiceClient, 
      private courseService: CourseServiceClient,
      private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params.courseId))
  }

  course: Course = new Course()
  sections: Section[] = []

  loadSections(courseId) {
    this.courseService.findCourseById(courseId)
      .then(course => this.course = course)
     this.sectionService.findAllSectionsForCourse(courseId)
       .then(sections => this.sections = sections)
  }

  enroll(sectionId) {
    alert(sectionId)
  }

  ngOnInit() {
  }

}
