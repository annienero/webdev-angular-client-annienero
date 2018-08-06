import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonServiceClient {
    findAllLessonsForModule(moduleID) {
        return fetch("https://cs4550-summer2-2018-annienero.herokuapp.com/api/course/0/module/" + moduleID + "/lesson")
            .then(response => response.json())
    }
}