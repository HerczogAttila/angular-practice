import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolcComponent } from './polc.component';
import { FormsModule } from '@angular/forms';

describe('PolcComponent', () => {
  let component: PolcComponent;
  let fixture: ComponentFixture<PolcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ PolcComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
