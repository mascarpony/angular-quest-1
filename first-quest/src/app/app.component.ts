import { Component, OnInit } from "@angular/core";
import Hero from "../types/heroInterface";

const today = Date.now();
const birthDate = new Date(1989, 6, 9).getTime();
const ageDate = new Date(today - birthDate);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title: string = "Hero's card";
  hero: Hero = {
    firstName: "Natalia",
    lastName: "Volkova",
    age: Math.abs(ageDate.getFullYear() - 1970),
    avatarURL: "https://avatars0.githubusercontent.com/u/42462120?s=460&v=4",
    contacts: [
      {
        type: "Telegram: ",
        value: "@unikvozm",
        href: "https://telegram.im/@unikvozm"
      },
      {
        type: "Mobile: ",
        value: "+7 950 449 43 66",
        href: "tel:8-950-449-43-66",
      },
      {
        type: "Github: ",
        value: "unikvozm",
        href: 'https://github.com/unikvozm',
      },
      {
        type: "Email: ",
        value: "natalia.volkofff@gmail.com",
        href: "mailto:natalia.volkova@gmail.com"
      }
    ],
    questionnaire: [
      {
        id: 0,
        question: "What is your goal",
        answer: "To be the best of the best",
        isShown: false,
        symbol: "plus"
      },
      {
        id: 1,
        question: "What motivates you most",
        answer:
          "My achievements and the achievements of people who I've helped",
        isShown: false,
        symbol: "plus"
      },
      {
        id: 2,
        question: "What is your credo?",
        answer: "If you do something, do it well!",
        isShown: false,
        symbol: "plus"
      }
    ]
  };
  public isShown: boolean = false;
  public buttonName: string = "Show the age";

  ngOnInit() {}

  toggleAge() {
    this.isShown = !this.isShown;

    if (this.isShown) this.buttonName = "Hide the age";
    else this.buttonName = "Show the age";
  }

  toggleAnswer(id) {
    this.hero.questionnaire[id].isShown = !this.hero.questionnaire[id].isShown;
    if (this.hero.questionnaire[id].isShown) {
      this.hero.questionnaire[id].symbol = "plus";
    } else {
      this.hero.questionnaire[id].symbol = "minus";
    }
  }
}
