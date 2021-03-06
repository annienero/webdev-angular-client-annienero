import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input() question

  selectedChoiceValue
  constructor() { }

  ngOnInit() {
  }

  selected(value) {
    this.selectedChoiceValue = value
    this.question.multipleChoiceAnswer = value
  }

}
