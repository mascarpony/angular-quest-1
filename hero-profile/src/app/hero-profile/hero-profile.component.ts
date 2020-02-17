import { Component, OnInit } from '@angular/core';
import { IHeroProfile } from '../ihero-profile';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.sass']
})
export class HeroProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  hero: IHeroProfile = {
    name: 'Pavel',
    surname: 'Koshcheev',
    nickname: 'Xx_HELLYEAH_xX',
    age: 22, 
    isMagic: true,

    favoritePhrase: 'Hm... sounds hype',

    primarySkills: [
      'Dark magic',
      'Fencing'
    ],

    factsAboutHero: [
      'Dislikes raisins',
      'Created the pop-punk bands called Unidentified Hyena',
      'Junior bugs hunter'
    ]
  };
}
