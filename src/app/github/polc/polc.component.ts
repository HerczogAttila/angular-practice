import { Component, OnInit } from '@angular/core';
import { PolcTest } from '../../shared/classes/polc/polc-test';
import { TestCategory } from '../../shared/classes/polc/test-category';
import { GitUser } from '../../shared/classes/git/git-user';
import { GithubService } from '../../shared/services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-polc',
  templateUrl: './polc.component.html',
  styleUrls: ['./polc.component.css']
})

export class PolcComponent implements OnInit {
  public name = 'HerczogAttila';
  public categories: TestCategory[] = [];
  public project1 = 'example';
  // private project2 = 'TLOG16Java';
  // private project3 = 'TLOG16RS';
  public user: GitUser;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.categories.push(new TestCategory('1. Lesson: Basic git commands', [
      new PolcTest(this.isExampleProjectCreated, 'Create an example GitHub project'),
      new PolcTest(this.isCommitToExampleProject, 'Commit to example project')
    ]));

    this.categories.push(new TestCategory('2. Lesson: Using releases & tags', [
      new PolcTest(this.isTagGitBranch, 'Tag git branch')
    ]));
  }

  public onGetUser(): void {
    this.githubService.getUser(this.name).subscribe((user) => {
      this.user = user;
    });
    for (const cat of this.categories) {
      for (const test of cat.tests) {
        test.test.call(this, test);
      }
    }
  }

  // Topic: 1
  // Lesson: 1
  public isExampleProjectCreated(test: PolcTest): void {
    this.githubService.getRepos(this.name)
      .subscribe(
        repos => {
          for (const repo of repos) {
            if (repo.name === this.project1) {
              test.pass = true;
              return;
            }
          }

          test.pass = false;
        },
        () => {
          test.pass = false;
        });
  }
  public isCommitToExampleProject(test: PolcTest): void {
    this.githubService.getCommits(this.name, this.project1)
      .subscribe(
        commits => {
          if (commits.length > 0) {
            test.pass = true;
            return;
          }

          test.pass = false;
        },
        () => {
          test.pass = false;
        });
  }
  // Lesson: 2
  public isTagGitBranch(test: PolcTest): void {
    this.githubService.getTags(this.name, this.project1)
      .subscribe(
        tags => {
          if (tags.length > 0) {
            if (tags[0].name.indexOf('0.1.0') > -1) {
              test.pass = true;
            }
            return;
          }

          test.pass = false;
        },
        () => {
          test.pass = false;
        });
  }
}
