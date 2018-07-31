import {Routes, RouterModule } from '@angular/router'
import {CourseManagerComponent} from './course-manager/course-manager.component'
import { CourseViewerComponent } from './course-viewer/course-viewer.component'
import { LoginComponent } from './login/login.component'

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: CourseManagerComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: CourseManagerComponent},
    {path: 'course/:courseId', component: CourseViewerComponent},
    {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
    {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
    {path: '**', component: CourseManagerComponent}
]

export const routing = RouterModule.forRoot(appRoutes)