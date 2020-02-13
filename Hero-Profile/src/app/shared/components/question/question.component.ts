import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question: string;
  @Input() answer: string;

  expanded: boolean;

  toggle() {
    this.expanded = !this.expanded;
  }
}
