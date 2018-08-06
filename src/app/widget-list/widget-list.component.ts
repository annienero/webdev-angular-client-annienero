import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WidgetServiceClient } from '../services/widget.service.client';
import { Widget } from '../models/widget.model.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private service: WidgetServiceClient, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.setParams(params))
  }

  context
  lessonId
  widgets: Widget[] = []
  setParams(params) {
    this.context = params
    this.lessonId = params.lessonId
    this.loadWidgets(params.lessonId)
  }

  loadWidgets(lessonId) {
    this.service.findAllWidgetsForLesson(lessonId) 
      .then(widgets => this.widgets = widgets.sort((widget1, widget2) => widget1.widgetOrder > widget2.widgetOrder))
  }

  ngOnInit() {
  }

}
