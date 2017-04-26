import { Ninja } from './ninja';

describe('Ninja', () => {
  const ninja = new Ninja();

  it('promise resolve', () => {
    ninja.test1('user');
  });

  it('promise reject', () => {
    ninja.test1('');
  });

  it('test 2', () => {
    ninja.test2();
  });
});
