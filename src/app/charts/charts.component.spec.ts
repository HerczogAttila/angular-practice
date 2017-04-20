import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsComponent } from './charts.component';
import { ChartsModule } from 'ng2-charts/';

describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ChartsModule ],
      declarations: [ ChartsComponent ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
