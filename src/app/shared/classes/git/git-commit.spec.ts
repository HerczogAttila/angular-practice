import { GitCommit } from './git-commit';

describe('GitCommit', () => {
  it('should create', () => {
    expect(new GitCommit()).toBeTruthy();
  });

  it('should create 1 param', () => {
    expect(new GitCommit('test message')).toBeTruthy();
  });
});
