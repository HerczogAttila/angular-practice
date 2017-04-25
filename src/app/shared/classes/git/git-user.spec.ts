import { GitUser } from './git-user';

describe('GitCommit', () => {
  it('should create', () => {
    expect(new GitUser()).toBeTruthy();
  });

  it('should create 1 param', () => {
    expect(new GitUser('Attila')).toBeTruthy();
  });

  it('should create 2 param', () => {
    expect(new GitUser('Attila', 'https://avatars1.githubusercontent.com/u/19515448?v=3&s=460')).toBeTruthy();
  });
});
