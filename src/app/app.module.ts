import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";

import { CourseNavigatorServiceClient } from "./services/course-navigator.service.client";
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { CourseManagerComponent } from './course-manager/course-manager.component';
import { CourseGridComponent } from './course-grid/course-grid.component'
import { CourseServiceClient } from './services/course.service.client';
// import { LessonServiceClient } from './services/lesson.service.client';
// import { WidgetServiceClient } from './services/widget.service.client';
// import { ModuleServiceClient } from './services/module.service.client';

import { routing } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseManagerComponent,
    CourseGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient
    // LessonServiceClient,
    // ModuleServiceClient,
    // WidgetServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
