import { Component } from '@angular/core';
import { Hero } from './hero-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  hero: Hero = {
    firstname: 'Vladislav',
    lastname: 'Tereshkin',
    level: 28,
    status: 'Looking for the summer',
    contacts: [
      '8-800-555-35-35',
      'secretmail@gmail.com',
      'Dreams Avenue, The City of Lost Heaven'
    ],
    survey: [
      { question: 'So, how are things going at work?',
        answer: 'Usual.'
      },
      { question: 'How is the weather today?',
        answer: 'Invigorating.'
      },
      { question: 'What do you like to eat in the mornings?',
        answer: 'We\'re porridge eaters in this house.'
      }
    ]
  };
}
