import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiselectComponent } from './multiselect.component';
import { SelectModule } from 'ng2-select';

describe('MultiselectComponent', () => {
  let comp: MultiselectComponent;
  let fixture: ComponentFixture<MultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectComponent ],
      imports: [ SelectModule ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('refresh value', () => {
    comp.refreshValue('{ \'Athens\' \'Amsterdam\' \'Bremen\' }');
    expect(comp.value).toBe('{ \'Athens\' \'Amsterdam\' \'Bremen\' }');
  });
});
