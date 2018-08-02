import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WidgetServiceClient {
    findAllWidgetsForLesson(lessonId) {
        return fetch("http://localhost:8080/api/lesson/" + lessonId + "/widget")
            .then(response => response.json())
    }
}