import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModuleServiceClient {
    findAllModulesForCourse(courseId) {
        return fetch("https://cs4550-summer2-2018-annienero.herokuapp.com/api/course/" + courseId + "/module")
            .then(response => response.json())
    }
}