import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  public search(term: string): Observable<string[]> {
    console.log(term);
    return this.http
      .get('assets/words.json')
      .map(response => response.json()
      .filter(word => word.indexOf(term) !== -1)
      .slice(0, 9) as string[]);
  }
}
