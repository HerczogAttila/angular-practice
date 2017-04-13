import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PolcTestComponent } from './polc-test.component';
import { FormsModule } from '@angular/forms';

describe('PolcTestComponent', () => {
  let component: PolcTestComponent;
  let fixture: ComponentFixture<PolcTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ PolcTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolcTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
