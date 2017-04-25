import { CommitData } from './commit-data';

export class GitCommit {
  public commit: CommitData;

  constructor(message = '') {
    this.commit = new CommitData(message);
  }
}
