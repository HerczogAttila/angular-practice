import { Pipe, PipeTransform } from '@angular/core';
import { Flyer } from '../classes/flyer';

@Pipe({ name: 'flyingHeroes' })
export class FlyingHeroesPipe implements PipeTransform {
  public transform(allHeroes: Flyer[]): Flyer[] {
    return allHeroes.filter(hero => hero.canFly);
  }
}
