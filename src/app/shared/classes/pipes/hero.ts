
export class Hero {
  constructor(public name = '', public canFly = false) { }

  public toggleFly(): void {
    this.canFly = !this.canFly;
  }

  public isFlyString(): string {
    return this.canFly ? 'Can fly' : 'Can\'t fly';
  }
}

export const HEROES: Hero[] = [
  new Hero('Mr. Nice'),
  new Hero('Narco', true),
  new Hero('Bombasto'),
  new Hero('Celeritas'),
  new Hero('Magneta'),
  new Hero('RubberMan'),
  new Hero('Dynama', true),
  new Hero('Dr IQ'),
  new Hero('Magma'),
  new Hero('Tornado'),
];
