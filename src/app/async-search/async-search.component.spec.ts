import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsyncSearchComponent } from './async-search.component';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

let comp: AsyncSearchComponent;
let fixture: ComponentFixture<AsyncSearchComponent>;

describe('AsyncSearchComponent', () => {
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
    .compileComponents()
    .then(createComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncSearchComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(comp).toBeTruthy();
  }));

  it('onSearch', async(() => {
    comp.term = 'asd';
    comp.onSearch();
    expect(comp.term).toBe('asd');
  }));

  it('onClick', () => {
    comp.term = 'asd';
    comp.onClick('dryasdust');
    expect(comp.term).toBe('dryasdust');
  });
});

function createComponent() {
  fixture = TestBed.createComponent(AsyncSearchComponent);
  comp = fixture.componentInstance;

  fixture.detectChanges();
}
