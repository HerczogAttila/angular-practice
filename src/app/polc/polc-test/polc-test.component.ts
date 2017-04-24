import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-polc-test',
  templateUrl: './polc-test.component.html',
  styleUrls: ['./polc-test.component.css']
})
export class PolcTestComponent {
   @Input() public test;
}
