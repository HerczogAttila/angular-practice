import { Hero } from './hero';

describe('Hero', () => {
  it('should create', () => {
    expect(new Hero()).toBeTruthy();
  });

  it('has name', () => {
    const hero = new Hero('RubberMan');
    expect(hero.name).toBe('RubberMan');
  });

  it('has canFly', () => {
    const hero = new Hero('RubberMan', true);
    expect(hero.canFly).toBe(true);
  });

  it('toggle canFly', () => {
    const hero = new Hero('RubberMan', true);
    hero.toggleFly();
    expect(hero.canFly).toBe(false);
  });

  it('true canFlyString', () => {
    const hero = new Hero('RubberMan', true);
    expect(hero.isFlyString()).toBe('Can fly');
  });

  it('false cantFlyString', () => {
    const hero = new Hero('RubberMan', false);
    expect(hero.isFlyString()).toBe('Can\'t fly');
  });
});
