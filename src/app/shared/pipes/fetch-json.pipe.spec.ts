import { TestBed, async } from '@angular/core/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FetchJsonPipe } from './fetch-json.pipe';
import { Hero } from '../classes/pipes/hero';
import 'rxjs/add/operator/map';

describe('FetchJsonPipe', () => {
  let pipe;
  let mockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions, {
          provide: Http,
          useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
          deps: [MockBackend, BaseRequestOptions]
        },
        FetchJsonPipe,
      ]
    });
  });

  beforeEach(() => {
    pipe = TestBed.get(FetchJsonPipe);
    mockBackend = TestBed.get(MockBackend);
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('search', async(() => {
    const sendWords = [new Hero('Batman', true)];
    const response = new Response(new ResponseOptions({ body: JSON.stringify(sendWords) }));

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(response);
    });

    expect(pipe.transform('heroes.git')[0].name).toBe('Batman');
  }));
});
