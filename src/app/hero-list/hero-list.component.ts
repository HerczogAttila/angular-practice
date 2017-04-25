import { Component, OnInit } from '@angular/core';
import { HeroService } from '../shared/services/hero.service';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../shared/classes/reactive-forms/hero';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  public heroes: Observable<Hero[]>;
  public isLoading = false;
  public selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() { this.getHeroes(); }

  public getHeroes(): void {
    this.isLoading = true;
    this.heroes = this.heroService.getHeroes()
      .finally(() => this.isLoading = false);
    this.selectedHero = undefined;
  }

  public select(hero: Hero): void {
    this.selectedHero = hero;
  }
}
