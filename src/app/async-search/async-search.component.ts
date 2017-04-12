import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-async-search',
  templateUrl: './async-search.component.html',
  styleUrls: ['./async-search.component.css'],
  providers: [SearchService]
})
export class AsyncSearchComponent implements OnInit {
  public words: Observable<string[]>;
  public term = '';
  private searchTerms = new Subject<string>();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.words = this.searchTerms
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.searchService.search(term)
        : Observable.of<string[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<string[]>([]);
      });
  }

  public onClick(term: string): void {
    this.term = term;
    this.onSearch();
  }

  public onSearch(): void {
    this.searchTerms.next(this.term);
  }
}
