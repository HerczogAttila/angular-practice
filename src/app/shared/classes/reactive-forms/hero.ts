import { Address } from './address';

export class Hero {
  constructor(public id = 0, public name = '', public addresses: Address[] = []) { }
}
