import { GitTag } from './git-tag';

describe('GitCommit', () => {
  it('should create', () => {
    expect(new GitTag()).toBeTruthy();
  });

  it('should create 1 param', () => {
    expect(new GitTag('0.1.0')).toBeTruthy();
  });
});
