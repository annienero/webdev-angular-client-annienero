import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../services/quiz.service.client';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Submission } from '../models/submission.model.client';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  constructor(private service: QuizServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSubmission(params))
  }

  submission: Submission = new Submission()
  title

  loadSubmission(params) {
    this.service.getSubmission(params['quizId'], params['submissionId'])
    .then(submission => {
      this.submission = submission
      this.title = submission.title
    })
   }

  ngOnInit() {
  }

}
