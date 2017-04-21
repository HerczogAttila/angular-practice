import { HEROES } from '../classes/hero';
import { FlyingHeroesImpurePipe } from './flying-heroes-impure.pipe';

describe('FlyingHeroesImpurePipe', () => {
  const pipe = new FlyingHeroesImpurePipe();

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('flying heroes count = 2', () => {
    expect(pipe.transform(HEROES).length).toBe(2);
  });
});
