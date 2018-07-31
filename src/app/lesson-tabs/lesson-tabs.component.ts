import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { LessonServiceClient } from '../services/lesson.service.client';
import { Lesson } from '../models/lesson.model.client'

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  courseId
  moduleId
  lessonId
  lessons: Lesson[] = []

  constructor(private service: LessonServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params))
   }

  loadLessons() {
    this.service.findAllLessonsForModule(this.moduleId)
      .then(lessons => this.lessons = lessons)
  }

  setParams(params) {
    this.moduleId = params.moduleId
    this.lessonId = params.lessonId
    this.courseId = params.courseId
    this.loadLessons()
  }

  ngOnInit() {
  }

}
