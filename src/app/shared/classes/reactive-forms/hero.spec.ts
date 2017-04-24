import { Hero } from './hero';

describe('Hero', () => {
  it('should create', () => {
    expect(new Hero()).toBeTruthy();
  });

  it('has id', () => {
    const hero = new Hero(5);
    expect(hero.id).toBe(5);
  });

  it('has name', () => {
    const hero = new Hero(0, 'RubberMan');
    expect(hero.name).toBe('RubberMan');
  });

  it('has addresses', () => {
    const hero = new Hero(0, 'RubberMan', [
      { street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801' },
      { street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226' },
    ]);
    expect(hero.addresses.length).toBe(2);
  });
});
