import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolcComponent } from './polc.component';
import { FormsModule } from '@angular/forms';
import { PolcTestComponent } from './polc-test/polc-test.component';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('PolcComponent', () => {
  let component: PolcComponent;
  let fixture: ComponentFixture<PolcComponent>;
  const mockHttpProvider = {
    deps: [ MockBackend, BaseRequestOptions ],
    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        PolcComponent,
        PolcTestComponent,
      ],
      providers: [
        { provide: Http, useValue: mockHttpProvider },
        MockBackend,
        BaseRequestOptions
      ]
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
