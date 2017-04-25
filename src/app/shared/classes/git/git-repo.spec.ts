import { GitRepo } from './git-repo';

describe('GitCommit', () => {
  it('should create', () => {
    expect(new GitRepo()).toBeTruthy();
  });

  it('should create 1 param', () => {
    expect(new GitRepo('Attila')).toBeTruthy();
  });

  it('should create 2 param', () => {
    expect(new GitRepo('Attila', 'github.com/HerczogAttila/tlog16-angular-cli')).toBeTruthy();
  });
});
