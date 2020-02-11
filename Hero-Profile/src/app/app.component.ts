import { Component } from '@angular/core';
import Hero from './shared/models/hero.model';
import { HeroService } from './core/services/hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  objectKeys = Object.keys;
  hero: Hero;

  constructor(private heroService: HeroService) {
    this.hero = heroService.getHero();
  }

  toogleAnswer(target) {
    console.log(target);
    target.parentNode.parentNode.parentNode.classList.toggle('hide-answer');
  }
}
