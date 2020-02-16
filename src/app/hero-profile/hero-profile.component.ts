import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../interfaces/hero";

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent {
  @Input() hero: Hero;
  timerId;
  isProfileOpen = false;

  constructor() {
    console.log(this.hero)
  }

  onClick(cardReval, event: MouseEvent) {
    clearTimeout(this.timerId);
    if ((<HTMLElement>event.target).tagName === "A" || this.isProfileOpen) {
      return;
    }
    this.isProfileOpen = !this.isProfileOpen;
    cardReval.style.display = 'block';
    setTimeout(() => {
      cardReval.style.transform = 'translateY(-100%)'
    }, 0)
  }

  onCloseClick(cardReval, event: MouseEvent) {
    event.stopPropagation();
    this.isProfileOpen = !this.isProfileOpen;
    cardReval.style.transform = 'translateY(0%)';
    this.timerId = setTimeout(() => {
      cardReval.style.display = 'none'
    }, 800)
  }

  getHeroDetails() {
    return Object.entries(this.hero.details)
  }

}
