import { Component, Input } from '@angular/core';
import { MyBoxData } from '../../shared/classes/animation/my-box-data';

@Component({
  selector: 'app-my-box',
  templateUrl: './my-box.component.html',
  styleUrls: ['./my-box.component.css']
})
export class MyBoxComponent {
  @Input() public data = new MyBoxData();
}
