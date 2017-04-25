import { TestBed, async } from '@angular/core/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { SearchService } from './search.service';
import 'rxjs/add/operator/map';

describe('SearchService', () => {
  let service;
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
        SearchService,
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(SearchService);
    mockBackend = TestBed.get(MockBackend);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('search', async(() => {
    const sendWords = ['clubfeet', 'clubfoot', 'clubfooted', 'azure'];
    const response = new Response(new ResponseOptions({ body: JSON.stringify(sendWords) }));

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(response);
    });

    service.search('bf').subscribe(words => {
      expect(words.length).toBe(3);
    });
  }));
});
