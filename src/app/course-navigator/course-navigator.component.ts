import { Component, OnInit } from '@angular/core';
import { CourseNavigatorServiceClient } from "../services/course-navigator.service.client"

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient) { }
  selectedCourseId = 0
  selectedModuleId = 0
  selectedLessonId = 0
  courses = []
  modules = []
  lessons = []
  widgets = []

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses)
  }

  selectCourse(courseId) {
    this.selectedCourseId = courseId
    this.service.findAllModulesForCourse(courseId)
      .then(modules => this.modules = modules)
  }

  selectModule(moduleId) {
    this.selectedModuleId = moduleId
    this.service.findAllLessonsForModule(moduleId)
      .then(lessons => this.lessons = lessons)
  }

  selectLesson(lessonId) {
    this.selectedLessonId = lessonId
    this.service.findAllWidgetsForLesson(lessonId)
      .then(widgets => this.widgets = widgets)
  }

}
