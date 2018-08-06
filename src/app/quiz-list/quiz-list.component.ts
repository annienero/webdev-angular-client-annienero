import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../services/quiz.service.client';
import { Quiz } from '../models/quiz.model.client';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizes: Quiz[] = []
  constructor(private service: QuizServiceClient) { }

  ngOnInit() {
    this.service.findAllQuizes()
      .then(quizes => this.quizes = quizes)
  }

}
