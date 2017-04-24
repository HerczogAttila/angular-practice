import { Hero } from './hero';
import { Address } from './address';

export const heroes: Hero[] = [
  new Hero(1, 'Whirlwind', [
    new Address('123 Main', 'Anywhere', 'CA', '94801'),
    new Address('456 Maple', 'Somewhere', 'VA', '23226'),
  ]),
  new Hero(2, 'Bombastic', [
    new Address('789 Elm', 'Smallville', 'OH', '04501'),
  ]),
  new Hero(3, 'Magneta'),
];

export const states = ['CA', 'MD', 'OH', 'VA'];
