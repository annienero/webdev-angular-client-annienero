import {Routes, RouterModule } from '@angular/router'
import {CourseManagerComponent} from './course-manager/course-manager.component'

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: CourseManagerComponent},
    {path: '**', component: CourseManagerComponent}
]

export const routing = RouterModule.forRoot(appRoutes)