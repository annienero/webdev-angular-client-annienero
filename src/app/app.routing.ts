import {Routes, RouterModule } from '@angular/router'
import {CourseManagerComponent} from './course-manager/course-manager.component'
import { CourseViewerComponent } from './course-viewer/course-viewer.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ProfileComponent } from './profile/profile.component'
import { SectionListComponent } from './section-list/section-list.component'
import { AdminPageComponent } from './admin-page/admin-page.component'

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: CourseManagerComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'course/:courseId', component: CourseViewerComponent},
    {path: 'course/:courseId/sections', component: SectionListComponent},
    {path: 'admin', component: AdminPageComponent},
    {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
    {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
    {path: '**', component: CourseManagerComponent}
]

export const routing = RouterModule.forRoot(appRoutes)