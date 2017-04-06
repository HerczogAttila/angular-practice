import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GitUser } from './git-user';

@Component({
  selector: 'app-polc',
  templateUrl: './polc.component.html',
  styleUrls: ['./polc.component.css']
})

export class PolcComponent implements OnInit {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private urlBase = 'https://api.github.com/';
  private urlHello = this.urlBase + 'zen';
  private urlUser = this.urlBase + 'users/';
  private answerText: string;
  private user: GitUser;

  private static extractDataText(response: Response): string {
    return response.text();
  }

  private static extractDataJson(response: Response) {
    return JSON.parse(response.text());
  }

  constructor(private http: Http) { }

  ngOnInit() {
  }
  public onHello() {
    this.getHello().subscribe((data) => {
      this.answerText = data;
    });
  }
  public onGetUser(name: string) {
    this.getUser(name).subscribe((data) => {
      this.user = data;
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
}
