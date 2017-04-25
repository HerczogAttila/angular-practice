import { TestBed, async } from '@angular/core/testing';
import { GithubService } from './github.service';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { GitUser } from '../classes/git/git-user';
import { GitRepo } from '../classes/git/git-repo';
import { GitCommit } from '../classes/git/git-commit';
import { GitTag } from '../classes/git/git-tag';
import 'rxjs/add/operator/map';

describe('GithubService', () => {
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
        GithubService,
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.get(GithubService);
    mockBackend = TestBed.get(MockBackend);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('zen', async(() => {
    const response = new Response(new ResponseOptions({ body: 'zen' }));

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(response);
    });

    service.zen().subscribe(message => {
      expect(message).toBe('zen');
    });
  }));

  it('get user', async(() => {
    const sendUser = new GitUser('Attila');
    const response = new Response(new ResponseOptions({ body: JSON.stringify(sendUser) }));

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(response);
    });

    service.getUser('Attila').subscribe(user => {
      expect(user.login).toBe('Attila');
    });
  }));

  it('get repos', async(() => {
    const sendRepos = [new GitRepo('tlog-angular-cli')];
    const response = new Response(new ResponseOptions({ body: JSON.stringify(sendRepos) }));

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(response);
    });

    service.getRepos('Attila').subscribe(repos => {
      expect(repos[0].name).toBe('tlog-angular-cli');
    });
  }));

  it('get commits', async(() => {
    const sendCommits = [new GitCommit('Create unit tests.')];
    const response = new Response(new ResponseOptions({ body: JSON.stringify(sendCommits) }));

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(response);
    });

    service.getCommits('Attila', 'tlog-angular-cli').subscribe(commit => {
      expect(commit[0].commit.message).toBe('Create unit tests.');
    });
  }));

  it('get tags', async(() => {
    const sendTag = [new GitTag('0.1.0.')];
    const response = new Response(new ResponseOptions({ body: JSON.stringify(sendTag) }));

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(response);
    });

    service.getTags('Attila', 'tlog-angular-cli').subscribe(tags => {
      expect(tags[0].name).toBe('0.1.0.');
    });
  }));
});
