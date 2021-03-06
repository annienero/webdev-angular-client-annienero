import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { QuizServiceClient } from '../services/quiz.service.client';
import { Quiz } from '../models/quiz.model.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private service: QuizServiceClient, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => this.quizId = params['quizId'])
  }

  quizId = ''
  quiz: Quiz = new Quiz()
  ngOnInit() {
    this.service.findQuizById(this.quizId)
      .then(quiz => this.quiz = quiz)
  }

  submitQuiz() {
    this.service.submitQuiz(this.quiz)
    this.router.navigate(['quizzes'])
  }

  cancel() {
    this.router.navigate(['quizzes'])
  }

}
