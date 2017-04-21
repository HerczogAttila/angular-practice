import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { HEROES } from '../classes/hero';

describe('FlyingHeroesPipe', () => {
  const pipe = new FlyingHeroesPipe();

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('flying heroes count = 2', () => {
    expect(pipe.transform(HEROES).length).toBe(2);
  });
});
