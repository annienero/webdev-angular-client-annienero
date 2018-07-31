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

  constructor(private service: LessonServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params))
   }

  courseId
  moduleId
  lesosnId
  lessons: Lesson[] = []
  loadLessons() {
    this.service.findAllLessonsForModule(this.moduleId)
      .then(lessons => this.lessons = lessons)
  }

  setParams(params) {
    this.moduleId = params.moduleId
    this.lesosnId = params.lesosnId
    this.courseId = params.courseId
    this.loadLessons()
  }

  ngOnInit() {
  }

}
