import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { heroes } from '../classes/reactive-forms/data-model';
import { Hero } from '../classes/reactive-forms/hero';
import 'rxjs/add/operator/delay';

@Injectable()
export class HeroService {
  public delayMs = 500;

  public getHeroes(): Observable<Hero[]> {
    return of(heroes).delay(this.delayMs);
  }

  public updateHero(hero: Hero): Observable<Hero>  {
    const oldHero = heroes.find(h => h.id === hero.id);
    const newHero = Object.assign(oldHero, hero);
    return of(newHero).delay(this.delayMs);
  }
}
