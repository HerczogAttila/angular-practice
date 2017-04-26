import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ninja',
  templateUrl: './ninja.component.html',
  styleUrls: ['./ninja.component.css']
})
export class NinjaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const element = document.createElement('ns-pony');
    document.body.appendChild(element);
  }
}
