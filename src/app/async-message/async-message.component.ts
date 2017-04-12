import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-async-message',
  templateUrl: './async-message.component.html',
  styleUrls: ['./async-message.component.css']
})
export class AsyncMessageComponent implements OnInit {
  message$: Observable<string>;
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() { this.resend(); }

  ngOnInit() {
  }

  resend() {
    this.message$ = Observable.timer(1500, 1500)
      .map(i => this.messages[i])
      .take(this.messages.length);
  }
}
