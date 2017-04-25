import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiselect2Component } from './multiselect2.component';
import { FormsModule } from '@angular/forms';

describe('Multiselect2Component', () => {
  let comp: Multiselect2Component;
  let fixture: ComponentFixture<Multiselect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ Multiselect2Component ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Multiselect2Component);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('filter', () => {
    comp.query = 'al';
    comp.filter();
    expect(comp.filteredList.length).toBe(4);
  });

  it('filter empty', () => {
    comp.query = '';
    comp.filter();
    expect(comp.filteredList.length).toBe(0);
  });

  it('select', () => {
    comp.select('Albania');
    expect(comp.selected.length).toBe(1);
  });

  it('remove', () => {
    comp.select('Albania');
    comp.select('Iceland');
    comp.select('Russia');
    comp.remove('Iceland');
    expect(comp.selected.length).toBe(2);
  });
});
