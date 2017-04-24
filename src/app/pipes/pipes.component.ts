import { Component } from '@angular/core';
import { Hero, HEROES } from '../shared/classes/pipes/hero';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public birthday = new Date(1988, 3, 15);
  public toggle = true;
  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }

  public power = 5;
  public factor = 3;

  public heroes: Hero[] = [];
  public heroName = '';
  public canFly = true;

  constructor() {
    this.reset();
  }

  public toggleFormat(): void {
    this.toggle = !this.toggle;
  }

  public addHero(): void {
    if (!this.heroName) {
      return;
    }

    this.heroes.push(new Hero(this.heroName, this.canFly));
    this.heroName = '';
  }

  public reset(): void {
    this.heroes = HEROES.slice();
  }
}
