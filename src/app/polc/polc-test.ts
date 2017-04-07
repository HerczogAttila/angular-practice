
export class PolcTest {
  public message: string;
  public test: Function;
  public pass: boolean;

  constructor(message: string, test: Function) {
    this.message = message;
    this.test = test;
    this.pass = false;
  }
}
