import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './../models/hero';
import { HeroService } from './../services/hero.service';

@Component({
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: './../views/heroes.component.html',
  styleUrls: [ './../styles/heroes.component.css' ]
})

export class HeroesComponent  implements OnInit{

  constructor(private heroService: HeroService, private router: Router) { }

  heroes: Hero[];
  selectedHero: Hero;
  
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
