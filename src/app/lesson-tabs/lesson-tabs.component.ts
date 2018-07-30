import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadLessons(params.moduleId))
   }

  moduleId
  loadLessons(moduleId) {
    this.moduleId = moduleId
  }

  ngOnInit() {
  }

}
