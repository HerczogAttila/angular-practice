import { HeroService } from './hero.service';
import { Hero } from '../classes/reactive-forms/hero';

describe('HeroService', () => {
  it('should create', () => {
    expect(new HeroService()).toBeTruthy();
  });

  it('get heroes', () => {
    const service = new HeroService();
    service.getHeroes().subscribe(heroes => {
      expect(heroes.length).toBe(11);
    });
  });

  it('update hero', () => {
    const service = new HeroService();
    const hero = new Hero(2, 'Bombastic');
    expect(hero.name).toBe('Bombastic');
    hero.name = 'Qwerty';
    service.updateHero(hero).subscribe(newHero => {
      expect(newHero.name).toBe('Qwerty');
    });
  });
});
