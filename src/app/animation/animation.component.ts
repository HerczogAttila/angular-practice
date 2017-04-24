import { Component, OnInit } from '@angular/core';

const count = 3;

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
})

export class AnimationComponent implements OnInit {
  public buttons: number[] = [];
  public groups: number[] = [];

  ngOnInit() {
    for (let i = 0; i < count; i++) {
      this.buttons.push(i);
    }
    for (let i = 0; i < 100; i++) {
      this.groups.push(i % count);
    }
  }

  // public changeGroupVisible(group: number): void {
  //   const divs = this.divs.filter(box => {
  //     return box.group === group;
  //   });
  //   for (const b of divs) {
  //     b.toggleVisible();
  //   }
  // }
}
