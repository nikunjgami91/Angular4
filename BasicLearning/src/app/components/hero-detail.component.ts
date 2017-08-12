// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './../services/hero.service';

import {Hero} from './../models/hero';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './../views/hero-detail.component.html',
    styleUrls: [ './../styles/hero-detail.component.css' ]
})
  
  export class HeroDetailComponent implements OnInit {

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
      this.location.back();
    }

    @Input() hero: Hero;
  }