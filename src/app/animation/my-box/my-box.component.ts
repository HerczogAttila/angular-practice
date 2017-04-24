import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-box',
  templateUrl: './my-box.component.html',
  styleUrls: ['./my-box.component.css']
})
export class MyBoxComponent {
  @Input() public group = 1;
  @Input() public visible = true;

  public toggleVisible(): void {
    this.visible = !this.visible;
  }
}
