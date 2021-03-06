import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { load } from '../../../node_modules/@angular/core/src/render3/instructions';
import { Submission } from '../models/submission.model.client';
import { QuizServiceClient } from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  constructor(private service: QuizServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSubmissions(params['quizId']))
  }

  submissions: Submission[] = []

  loadSubmissions(quizId) {
    this.service.getSubmissions(quizId)
    .then(submissions => this.submissions = submissions)
   }

  ngOnInit() {
  }

}
