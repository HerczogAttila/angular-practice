import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsyncSearchComponent } from './async-search.component';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('AsyncSearchComponent', () => {
  let component: AsyncSearchComponent;
  let fixture: ComponentFixture<AsyncSearchComponent>;
  const mockHttpProvider = {
    deps: [ MockBackend, BaseRequestOptions ],
    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AsyncSearchComponent ],
      providers: [
        { provide: Http, useValue: mockHttpProvider },
        MockBackend,
        BaseRequestOptions
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
