import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {
  @Input() question

  constructor() { }

  ngOnInit() {
  }

  selected(selected) {
    this.question.trueFalseAnswer = selected
  }

}
