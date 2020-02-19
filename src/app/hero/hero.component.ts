import {
  Component, Input, OnChanges, Output, EventEmitter,
} from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../interfaces/Hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnChanges {
  @Input() nickname: string;

  @Output() error: EventEmitter<any> = new EventEmitter();

  hero: Hero;

  isLoading: boolean = false;

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnChanges(): void {
    if (this.nickname) {
      this.getHero();
    }
  }

  private getHero(): void {
    this.isLoading = true;
    this.heroService.getHeroData(this.nickname).subscribe(
      (heroData) => {
        this.hero = {
          name: heroData.name,
          login: heroData.login,
          avatar_url: heroData.avatar_url,
          location: heroData.location,
          public_repos: heroData.public_repos,
          hireable: heroData.hireable,
        };
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
        this.error.emit();
        this.hero = null;
      },
    );
  }
}
