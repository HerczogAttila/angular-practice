import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GitUser } from '../polc/json/git-user';
import { GitRepo } from '../polc/json/git-repo';
import { GitAuth } from '../../auth';
import { PolcComponent } from '../polc/polc.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  private name = 'HerczogAttila';
  private headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'token ' + GitAuth.token });
  private options = new RequestOptions({ headers: this.headers });
  private urlBase = 'https://api.github.com/';
  private urlHello = this.urlBase + 'zen';
  private urlUser = this.urlBase + 'users/';
  private answerText: string;
  private user: GitUser;
  private repos: GitRepo[] = [];

  private static extractDataText(response: Response): string {
    return response.text();
  }

  constructor(private http: Http) { }

  ngOnInit() {
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

    this.getRepos(this.name).subscribe((repos) => {
      this.repos = repos;
    });
  }
  private getHello(): Observable<string> {
    return this.http.get(this.urlHello, this.options)
      .map(GithubComponent.extractDataText);
  }
  private getUser(name: string): Observable<GitUser> {
    return this.http.get(this.urlUser + name, this.options)
      .map(PolcComponent.extractDataJson);
  }
  private getRepos(name: string): Observable<GitRepo[]> {
    return this.http.get(this.urlUser + name + '/repos', this.options)
      .map(PolcComponent.extractDataJson);
  }
}
