import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizServiceClient {
    findAllQuizes() {
        return fetch("http://localhost:8080/api/quiz")
            .then(response => response.json())
    }

    findQuizById(quizId) {
        return fetch("http://localhost:8080/api/quiz/" + quizId)
        .then(response => response.json())
    }
}