import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WidgetServiceClient {
    findAllWidgetsForLesson(lessonId) {
        return fetch("https://cs4550-summer2-2018-annienero.herokuapp.com/api/lesson/" + lessonId + "/widget")
            .then(response => response.json())
    }
}