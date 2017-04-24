import { PolcTest } from './polc-test';

describe('Hero', () => {
  it('should create', () => {
    expect(new PolcTest(() => { })).toBeTruthy();
  });

  it('has message', () => {
    const polc = new PolcTest(() => { }, 'message');
    expect(polc.message).toBe('message');
  });

  it('has pass', () => {
    const polc = new PolcTest(() => { }, 'message', false);
    expect(polc.pass).toBe(false);
  });
});
