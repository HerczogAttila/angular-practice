import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubComponent } from './github.component';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;
  const mockHttpProvider = {
    deps: [ MockBackend, BaseRequestOptions ],
    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ GithubComponent ],
      providers: [
        { provide: Http, useValue: mockHttpProvider },
        MockBackend,
        BaseRequestOptions
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
