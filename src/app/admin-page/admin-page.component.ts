import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '../../../node_modules/@angular/router'
import { Course } from '../models/course.model.client'
import { Section } from '../models/section.model.client'
import { SectionServiceClient } from '../services/section.service.client';
import { CourseServiceClient } from '../services/course.service.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private sectionService: SectionServiceClient, 
    private courseService: CourseServiceClient) {}


selectedCourseId
courses: Course[] = []
course: Course = new Course()
sectionName: string
seats: number
sections: Section[] = []
currentSectionId
editing = false

createSection() {
  this.sectionService.createSection(this.course.id, this.sectionName, this.seats)
  .then(() => this.sectionService.findAllSectionsForCourse(this.course.id)
  .then(sections => this.sections = sections))
}

deleteSection(sectionId) {
  this.sectionService.deleteSection(sectionId)
    .then(() => this.sectionService.findAllSectionsForCourse(this.course.id)
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
  this.editing = false
  const sectionObj = {
    sectionName: this.sectionName,
    seats: this.seats,
    courseId: this.course.id
  }
  this.sectionService.updateSection(this.currentSectionId, sectionObj)
  .then(() => this.sectionService.findAllSectionsForCourse(this.course.id)
    .then(sections => {
      this.sections = sections
      this.sectionName = this.course.title + ' 1'
      this.seats = null
    }))
}

selectCourse(courseId) {
  this.selectedCourseId = courseId
  this.courseService.findCourseById(courseId)
    .then(course => {
      this.course = course
      this.sectionName = this.course.title + ' 1'
    })
  this.sectionService.findAllSectionsForCourse(courseId)
    .then(sections => this.sections = sections)
}

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses)
  }

}
