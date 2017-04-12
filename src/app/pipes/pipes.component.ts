import { Component, OnInit } from '@angular/core';
import { HEROES } from './heroes';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public birthday = new Date(1988, 3, 15);
  public toggle = true; // start with true == shortDate

  public power = 5;
  public factor = 1;

  heroes: any[] = [];
  canFly = true;

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  constructor() {
    this.reset();
  }

  ngOnInit() {
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = {name, canFly: this.canFly};
    this.heroes.push(hero);
  }

  reset() { this.heroes = HEROES.slice(); }
}
