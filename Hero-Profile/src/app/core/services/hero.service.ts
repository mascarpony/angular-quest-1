import { Injectable } from '@angular/core';

import Hero from '../../shared/models/hero.model';
import hero from '../mocks/hero.mock';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHero(): Hero {
    return hero;
  }
}
