import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModuleServiceClient {
    findAllModulesForCourse(courseId) {
        return fetch("http://localhost:8080/api/course/" + courseId + "/module")
            .then(response => response.json())
    }
}