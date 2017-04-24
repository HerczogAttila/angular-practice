import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-async-message',
  templateUrl: './async-message.component.html',
  styleUrls: ['./async-message.component.css']
})
export class AsyncMessageComponent {
  public message$: Observable<string>;
  public wait = 1500;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() { this.resend(); }

  public resend(): void {
    this.message$ = Observable.timer(0, this.wait)
      .map(i => this.messages[i])
      .take(this.messages.length);
  }
}
