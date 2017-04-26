
export class MyBoxData {
  constructor(public group = 1, public visible = true) { }

  public toggleVisible(): void {
    this.visible = !this.visible;
  }
}
