import { Ninja2 } from './ninja2';

export function bet(race, pony) {
  console.log(pony);
  return race;
}

const Log = function () {
  return (target: any, name: string, descriptor: any) => {
    console.log(`call to ${name}`);
    return descriptor;
  };
};

export class Ninja {
  a = true;
  getUser = function (login) {
    return new Promise(function (resolve, reject) {
      if (login === 'user') {
        resolve('data');
      } else {
        reject('No user');
      }
    });
  };

  @Log()
  test1(login) {
    this.getUser(login).then(
      user => console.log(user),
      reject => console.log(reject)
    );
  }

  test2() {
    bet(5, 'test');
    new Ninja2().test1();
    this.a = false;
  }
}
