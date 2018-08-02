import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '../../../node_modules/@angular/router'
import { Course } from '../models/course.model.client'
import { Section } from '../models/section.model.client'
import { SectionServiceClient } from '../services/section.service.client';
import { CourseServiceClient } from '../services/course.service.client';

@Component({
  selector: 'app-section-admin',
  templateUrl: './section-admin.component.html',
  styleUrls: ['./section-admin.component.css']
})
export class SectionAdminComponent implements OnInit {

  constructor(private sectionService: SectionServiceClient, 
      private courseService: CourseServiceClient,
      private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params.courseId))
  }

  course: Course = new Course()
  sectionName: string
  seats: number
  sections: Section[] = []

  loadSections(courseId) {
     this.courseService.findCourseById(courseId)
       .then(course => this.course = course)
      this.sectionService.findAllSectionsForCourse(courseId)
        .then(sections => this.sections = sections)
  }

  createSection() {
    this.sectionService.createSection(this.course.id, this.sectionName, this.seats)
  }

  ngOnInit() {
  }

}
