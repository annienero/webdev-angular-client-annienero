import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";

import { CourseManagerComponent } from './course-manager/course-manager.component';
import { CourseGridComponent } from './course-grid/course-grid.component'
import { CourseServiceClient } from './services/course.service.client';
import { LessonServiceClient } from './services/lesson.service.client';
import { WidgetServiceClient } from './services/widget.service.client';
import { ModuleServiceClient } from './services/module.service.client';
import { UserServiceClient } from './services/user.service.client';

import { routing } from './app.routing';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { HttpModule } from '@angular/http';
import { ProfileComponent } from './profile/profile.component';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionServiceClient } from './services/section.service.client';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseManagerComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    WidgetListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionListComponent,
    AdminPageComponent,
    QuizListComponent,
    QuizTakerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    LessonServiceClient,
    ModuleServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
