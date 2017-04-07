import { Component, Input, OnInit } from '@angular/core';
import { PolcTest } from '../polc-test';

@Component({
  selector: 'app-polc-test',
  templateUrl: './polc-test.component.html',
  styleUrls: ['./polc-test.component.css']
})
export class PolcTestComponent implements OnInit {
   @Input() public test: PolcTest;

  constructor() { }

  ngOnInit() {
  }
}
