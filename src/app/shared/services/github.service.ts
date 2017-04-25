import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { GitAuth } from '../../../auth';
import { GitRepo } from '../classes/git/git-repo';
import { GitUser } from '../classes/git/git-user';
import { GitTag } from '../classes/git/git-tag';
import { Observable } from 'rxjs/Observable';
import { GitCommit } from '../classes/git/git-commit';

@Injectable()
export class GithubService {
  private headers = new Headers({ 'Content-Type': 'application/git', 'Authorization': 'token ' + GitAuth.token });
  private options = new RequestOptions({ headers: this.headers });
  private urlBase = 'https://api.github.com/';
  private urlHello = this.urlBase + 'zen';
  private urlUser = this.urlBase + 'users/';

  private static extractDataText(response: Response): string {
    return response.text();
  }

  private static extractDataJson(response: Response) {
    return JSON.parse(response.text());
  }

  constructor(private http: Http) { }

  public zen(): Observable<string> {
    return this.http.get(this.urlHello, this.options)
      .map(GithubService.extractDataText);
  }
  public getUser(name: string): Observable<GitUser> {
    return this.http.get(this.urlUser + name, this.options)
      .map(GithubService.extractDataJson);
  }
  public getRepos(name: string): Observable<GitRepo[]> {
    return this.http.get(this.urlUser + name + '/repos', this.options)
      .map(GithubService.extractDataJson);
  }
  public getCommits(name: string, repo: string): Observable<GitCommit[]> {
    return this.http.get(this.urlBase + 'repos/' + name + '/' + repo + '/commits', this.options)
      .map(GithubService.extractDataJson);
  }
  public getTags(name: string, repo: string): Observable<GitTag[]> {
    return this.http.get(this.urlBase + 'repos/' + name + '/' + repo + '/tags', this.options)
      .map(GithubService.extractDataJson);
  }
}
