import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBoxComponent } from './my-box.component';

describe('MyBoxComponent', () => {
  let comp: MyBoxComponent;
  let fixture: ComponentFixture<MyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBoxComponent ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBoxComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('toggle visible false', () => {
    comp.visible = true;
    comp.toggleVisible();
    expect(comp.visible).toBe(false);
  });

  it('toggle visible true', () => {
    comp.visible = false;
    comp.toggleVisible();
    expect(comp.visible).toBe(true);
  });
});
