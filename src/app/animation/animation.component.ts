import { Component, OnInit } from '@angular/core';
import { MyBoxData } from '../shared/classes/animation/my-box-data';

const groupCount = 3;

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
})

export class AnimationComponent implements OnInit {
  public buttons: number[] = [];
  public boxes: MyBoxData[] = [];

  ngOnInit() {
    for (let i = 0; i < groupCount; i++) {
      this.buttons.push(i);
    }
    for (let i = 0; i < 100; i++) {
      this.boxes.push(new MyBoxData(i % groupCount));
    }
  }

  public toggleGroupVisible(group: number): void {
    const divs = this.boxes.filter(box => {
      return box.group === group;
    });
    for (const b of divs) {
      b.toggleVisible();
    }
  }
}
