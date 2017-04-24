import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PolcTestComponent } from './polc-test.component';
import { FormsModule } from '@angular/forms';

describe('PolcTestComponent', () => {
  let comp: PolcTestComponent;
  let fixture: ComponentFixture<PolcTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        PolcTestComponent,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolcTestComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});
