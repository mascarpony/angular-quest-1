import { Component } from '@angular/core';
import { IMyProfile } from './my-profile'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  myProfile: IMyProfile = {

    name: 'Artem',
    age: 29,

    questionnaire: [{
      question: 'What is your favorite music band?',
      answer: 'Within Temptation',
    }],

  }

}
