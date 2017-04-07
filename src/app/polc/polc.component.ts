import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GitUser } from './json/git-user';
import { GitRepo } from './json/git-repo';
import { PolcTest } from './polc-test';
import { GitAuth } from '../../auth';

@Component({
  selector: 'app-polc',
  templateUrl: './polc.component.html',
  styleUrls: ['./polc.component.css']
})

export class PolcComponent implements OnInit {
  public name = 'HerczogAttila';
  private headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'token ' + GitAuth.token });
  private options = new RequestOptions({ headers: this.headers });
  private urlBase = 'https://api.github.com/';
  private urlHello = this.urlBase + 'zen';
  private urlUser = this.urlBase + 'users/';
  private answerText: string;
  private user: GitUser;
  // private repos: GitRepo[] = [];
  public tests: PolcTest[] = [];
  private testIndex: number;

  private static extractDataText(response: Response): string {
    return response.text();
  }

  private static extractDataJson(response: Response) {
    return JSON.parse(response.text());
  }

  constructor(private http: Http) { }

  ngOnInit() {
    this.tests.push(new PolcTest('Create an example GitHub project', this.isExampleProjectCreated));
    this.tests.push(new PolcTest('Commit to example project', this.isCommitToExampleProject));
  }
  public onHello() {
    this.getHello().subscribe((data) => {
      this.answerText = data;
    });
  }
  public onGetUser() {
    this.getUser(this.name).subscribe((user) => {
      this.user = user;
    });
    this.testIndex = 0;

    // this.getRepos(this.name).subscribe((repos) => {
    //   this.repos = repos;
    // });
    for (const test of this.tests) {
      test.test.call(this, test);
    }
  }

  // Topic: 1, Lesson: 1
  public isExampleProjectCreated(test: PolcTest): void {
    this.getRepos(this.name)
      .subscribe(repos => {
        for (const repo of repos) {
          if (repo.name === 'example') {
            test.pass = true;
            return;
          }
        }

        test.pass = false;
      });
  }
  public isCommitToExampleProject(test: PolcTest): void {
    this.getCommits(this.name, 'example')
      .subscribe(commits => {
        console.log(commits);
        if (commits.length > 0) {
          test.pass = true;
          return;
        }

        test.pass = false;
      });
  }

  private getHello(): Observable<string> {
    return this.http.get(this.urlHello, this.options)
      .map(PolcComponent.extractDataText);
  }
  private getUser(name: string): Observable<GitUser> {
    return this.http.get(this.urlUser + name, this.options)
      .map(PolcComponent.extractDataJson);
  }
  private getRepos(name: string): Observable<GitRepo[]> {
    return this.http.get(this.urlUser + name + '/repos', this.options)
      .map(PolcComponent.extractDataJson);
  }
  private getCommits(name: string, repo: string): Observable<any> {
    return this.http.get(this.urlBase + 'repos/' + name + '/' + repo + '/commits', this.options)
      .map(PolcComponent.extractDataJson);
  }
}
