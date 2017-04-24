import { Address } from './data-model';

export class Hero {
  constructor(public id = 0, public name = '', public addresses: Address[] = []) { }
}
