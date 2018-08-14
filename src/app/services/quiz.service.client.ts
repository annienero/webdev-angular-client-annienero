import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizServiceClient {
    findAllQuizzes() {
        return fetch("http://localhost:3002/api/quiz")
            .then(response => response.json())
    }

    findQuizById(quizId) {
        return fetch("http://localhost:3002/api/quiz/" + quizId)
        .then(response => response.json())
    }

    submitQuiz(quiz) {
        return fetch("http://localhost:3002/api/quiz/" + quiz._id + "/submission", {
            method: 'post',
            body: JSON.stringify(quiz),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
    }

    getSubmissions(quizId) {
        return fetch("http://localhost:3002/api/quiz/" + quizId + "/submission", {
            credentials: 'include'
        })
        .then(response => response.json())
    }

    getSubmission(quizId, submissionId) {
        return fetch("http://localhost:3002/api/quiz/" + quizId + "/submission/" + submissionId, {
            credentials: 'include'
        })
        .then(response => response.json())
    }
}

