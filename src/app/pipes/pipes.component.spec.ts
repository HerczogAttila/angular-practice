import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesComponent } from './pipes.component';
import { FormsModule } from '@angular/forms';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { FlyingHeroesImpurePipe } from './flying-heroes-impure.pipe';
import { FetchJsonPipe } from './fetch-json.pipe';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import 'rxjs/add/operator/map';

describe('PipesComponent', () => {
  let component: PipesComponent;
  let fixture: ComponentFixture<PipesComponent>;
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
        PipesComponent,
        ExponentialStrengthPipe,
        FlyingHeroesPipe,
        FlyingHeroesImpurePipe,
        FetchJsonPipe,
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
    fixture = TestBed.createComponent(PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
