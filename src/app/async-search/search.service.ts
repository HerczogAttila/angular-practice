import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<string[]> {
    return this.http
      .get('assets/words.json')
      .map(response => response.json().filter(word => word.indexOf(term) !== -1) as string[]);
  }
}
