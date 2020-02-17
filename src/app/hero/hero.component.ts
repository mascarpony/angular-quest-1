import { Component, OnInit } from '@angular/core';
import { hero } from "../info-hero";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less']
})
export class HeroComponent implements OnInit {
  hero = hero;

  constructor() { }

  ngOnInit(): void {
  }

  get fullName(): string {
    return `${this.hero.firstName} ${this.hero.lastName}`;
  }

}
