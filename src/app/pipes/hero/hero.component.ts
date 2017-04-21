import { Component, Input } from '@angular/core';
import { Hero } from '../classes/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() hero: Hero;
}
