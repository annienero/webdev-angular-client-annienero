import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-essay-question',
  templateUrl: './essay-question.component.html',
  styleUrls: ['./essay-question.component.css']
})
export class EssayQuestionComponent implements OnInit {
  @Input() question

  constructor() { }

  ngOnInit() {
  }

}
