import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

const count = 3;

export class MyBox {
  public see = true;
  public type: number;
  constructor(type: number) {
    this.type = type;
  }

  public onClick(): void {
    this.see = !this.see;
  }
}

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
})

export class AnimationComponent implements OnInit {
  public divs: MyBox[] = [];
  public sortDivs: MyBox[] = [];
  public buttons: number[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < count; i++) {
      this.buttons.push(i);
    }
    for (let i = 0; i < 100; i++) {
      this.divs.push(new MyBox(i % count));
    }
    this.sortDivs = this.divs;
  }

  public changeType(type: number): void {
    for (const b of this.divs) {
      if (b.type === type) {
        if (!b.see) {
          // this.sortDivs.push(b);
        }
        b.see = !b.see;
      }
    }
    // Observable.timer(1500).subscribe(() => this.removeAll(type));
  }
  // public remove(box: MyBox) {
  //   box.onClick();
    // Observable.timer(1500).subscribe(() => this.sortDivs = this.sortDivs.filter(s => s !== box));
  // }

  // public removeAll(type: number): void {
    // this.sortDivs = this.sortDivs.filter(s => s.see && s.type !== type);
  // }
}
