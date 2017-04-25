import { CommitData } from './commit-data';

describe('CommitData', () => {
  it('should create', () => {
    expect(new CommitData()).toBeTruthy();
  });

  it('should create 1 param', () => {
    expect(new CommitData('test message')).toBeTruthy();
  });
});
