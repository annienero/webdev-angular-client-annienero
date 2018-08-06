import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseServiceClient {
    findAllCourses() {
        return fetch("https://cs4550-summer2-2018-annienero.herokuapp.com/api/course")
            .then(response => response.json())
    }

    findCourseById(courseId) {
        return fetch("https://cs4550-summer2-2018-annienero.herokuapp.com/api/course/" + courseId)
        .then(response => response.json())
    }
}