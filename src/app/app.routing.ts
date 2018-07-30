import {Routes, RouterModule } from '@angular/router'
import {CourseManagerComponent} from './course-manager/course-manager.component'
import { CourseViewerComponent } from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: CourseManagerComponent},
    {path: 'course/:courseId', component: CourseViewerComponent},
    {path: '**', component: CourseManagerComponent}
]

export const routing = RouterModule.forRoot(appRoutes)