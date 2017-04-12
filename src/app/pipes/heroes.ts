
export class Hero {
  id: number;
  name: string;
  canFly: boolean;
}

export class Flyer extends Hero {
}

export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', canFly: false },
  { id: 12, name: 'Narco', canFly: true },
  { id: 13, name: 'Bombasto', canFly: false },
  { id: 14, name: 'Celeritas', canFly: false },
  { id: 15, name: 'Magneta', canFly: false },
  { id: 16, name: 'RubberMan', canFly: false },
  { id: 17, name: 'Dynama', canFly: true },
  { id: 18, name: 'Dr IQ', canFly: false },
  { id: 19, name: 'Magma', canFly: false },
  { id: 20, name: 'Tornado', canFly: false }
];
