import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiselectComponent } from './multiselect.component';
import { SelectModule } from 'ng2-select';

describe('MultiselectComponent', () => {
  let component: MultiselectComponent;
  let fixture: ComponentFixture<MultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectComponent ],
      imports: [ SelectModule ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
