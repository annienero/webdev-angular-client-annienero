import { Component, OnInit } from '@angular/core'
import { SectionServiceClient } from '../services/section.service.client'
import { ActivatedRoute } from '../../../node_modules/@angular/router'
import { Course } from '../models/course.model.client'

@Component({
  selector: 'app-section-admin',
  templateUrl: './section-admin.component.html',
  styleUrls: ['./section-admin.component.css']
})
export class SectionAdminComponent implements OnInit {

  constructor(private service: SectionServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params.courseId))
  }

  course: Course = new Course()
  sectionName: string
  seats: number

  loadSections(courseId) {
     this.service.findCourseById(courseId)
       .then(course => this.course = course)
  }

  createSection() {
    this.service.createSection(this.sectionName, this.seats)
  }

  ngOnInit() {
  }

}