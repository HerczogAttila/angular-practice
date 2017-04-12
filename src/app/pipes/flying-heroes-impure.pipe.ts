import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroesImpure',
  pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe implements PipeTransform {}
