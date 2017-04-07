import { PolcTest } from './polc-test';

export class TestCategory {
  public title: string;
  public tests: PolcTest[] = [];

  constructor(title: string, tests: PolcTest[]) {
    this.title = title;
    this.tests = tests;
  }
}
