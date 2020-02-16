import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hero-profile';
  userCard = {name: 'Olya', location: 'SPB', skill: 'JavaScript'};
  condition: boolean = false;
  toggle(){
    this.condition=!this.condition;
  }
  list: object[] = [
    {question: 'What is your favourite animal?', answer: 'Dog', style: true},
    {question: 'Have you ever been on the Moon?', answer: 'Yes, three times'},
    {question: 'Do you like Angular?', answer: 'I don\'t know. I\'d prefer to debug IE6.'},
    {question: 'Have you ever seen a hedgehog?', answer: 'Yes'}
  ];
}
