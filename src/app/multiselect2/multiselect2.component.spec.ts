import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiselect2Component } from './multiselect2.component';
import { FormsModule } from '@angular/forms';

describe('Multiselect2Component', () => {
  let component: Multiselect2Component;
  let fixture: ComponentFixture<Multiselect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ Multiselect2Component ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Multiselect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
