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
  currentSectionId
  editing = false

  loadSections(courseId) {
     this.courseService.findCourseById(courseId)
       .then(course => this.course = course)
      this.sectionService.findAllSectionsForCourse(courseId)
        .then(sections => this.sections = sections)
  }

  createSection() {
    this.sectionService.createSection(this.course.id, this.sectionName, this.seats)
  }

  deleteSection(sectionId) {
    this.sectionService.deleteSection(sectionId)
      .then(response => this.sectionService.findAllSectionsForCourse(this.course.id)
        .then(sections => this.sections = sections))
  }

  editSection(sectionId) {
    this.editing = true
    this.sectionService.findSectionById(sectionId)
    .then(section => {
      this.currentSectionId = section._id
      this.sectionName = section.sectionName
      this.seats = section.seats
    })
  }

  updateSection() {
    const sectionObj = {
      sectionName: this.sectionName,
      seats: this.seats,
      courseId: this.course.id
    }
    this.sectionService.updateSection(this.currentSectionId, sectionObj)
    .then(response => this.sectionService.findAllSectionsForCourse(this.course.id)
      .then(sections => {
        this.sections = sections
        this.sectionName = ''
        this.seats = null
      }))
  }

  ngOnInit() {
  }

}
