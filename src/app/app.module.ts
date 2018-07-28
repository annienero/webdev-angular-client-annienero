import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";

import { CourseNavigatorServiceClient } from "./services/course-navigator.service.client";
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { CourseManagerComponent } from './course-manager/course-manager.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseNavigatorServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
