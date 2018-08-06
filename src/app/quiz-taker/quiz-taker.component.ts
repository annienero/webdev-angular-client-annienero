import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { QuizServiceClient } from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private service: QuizServiceClient, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => this.quizId = params['quizId'])
  }

  quizId = ''
  ngOnInit() {
    this.service.findQuizById(this.quizId)
    .then(quiz => alert(quiz))
  }

}
