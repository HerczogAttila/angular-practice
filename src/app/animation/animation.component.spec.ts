import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationComponent } from './animation.component';
import { MyBoxComponent } from './my-box/my-box.component';

describe('AnimationComponent', () => {
  let comp: AnimationComponent;
  let fixture: ComponentFixture<AnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AnimationComponent,
        MyBoxComponent,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should create', () => {
    comp.toggleGroupVisible(1);
    expect(comp.boxes[1].visible).toBe(false);
    expect(comp.boxes[4].visible).toBe(false);
  });
});
