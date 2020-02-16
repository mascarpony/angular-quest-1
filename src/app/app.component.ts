import { Component } from "@angular/core";
import { IHeroProfile } from "./hero-profile";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  hero: IHeroProfile = {
    name: "Igor",
    level: 12,
    isMale: true,
    alignment: {
      goodOrEvil: "Evil",
      lawfulOfChaotic: "Chaotic"
    },
    questionnaire: [
      {
        question: "What is your favorite food?",
        answer: "McDonalds"
      },
      {
        question: "Why do I hate you?",
        answer: "I am ugly"
      }
    ]
  };

  getPicture(): string {
    return this.hero.profilePictureUrl ? this.hero.profilePictureUrl : "";
  }
}
