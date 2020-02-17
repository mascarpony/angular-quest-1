import { Component } from '@angular/core';
import { Hero } from './hero-interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hero: Hero = {
    firstName: 'Ekaterina',
    lastName: 'Ivanova',
    level: 25,
    status: 'Annoyed.',
    contacts: [
      '8 800 777 37 37',
      'forthealliance@mail.ru'
    ],
    survey: [
      {
        question: 'What is your favourite color?',
        answer: 'Blue'
      },{
        question: 'What are you afraid of?',
        answer: 'Spiders'
      },{
        question: 'Maybe some sport?',
        answer: 'Snowboarding of course'
      }
    ]
  };
}
