import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsyncMessageComponent } from './async-message.component';

describe('AsyncMessageComponent', () => {
  let comp: AsyncMessageComponent;
  let fixture: ComponentFixture<AsyncMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncMessageComponent ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncMessageComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(comp).toBeTruthy();
  }));
});
