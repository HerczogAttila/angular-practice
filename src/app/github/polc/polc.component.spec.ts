import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PolcComponent } from './polc.component';
import { FormsModule } from '@angular/forms';
import { PolcTestComponent } from './polc-test/polc-test.component';
import { BaseRequestOptions, Http, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { GithubService } from '../../shared/services/github.service';
import { GitUser } from '../../shared/classes/git/git-user';
import { GitRepo } from '../../shared/classes/git/git-repo';
import { GitCommit } from '../../shared/classes/git/git-commit';
import { GitTag } from '../../shared/classes/git/git-tag';

describe('PolcComponent', () => {
  let comp: PolcComponent;
  let fixture: ComponentFixture<PolcComponent>;
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        PolcComponent,
        PolcTestComponent,
      ],
      providers: [
        GithubService,
        MockBackend,
        BaseRequestOptions, {
          provide: Http,
          useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
          deps: [MockBackend, BaseRequestOptions]
        },
      ]
    });
  }));

  beforeEach(() => {
    mockBackend = TestBed.get(MockBackend);
    fixture = TestBed.createComponent(PolcComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('onGetUser pass', async(() => {
    const responses = [];
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify(new GitUser('Attila')) })));
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify([new GitRepo('example')]) })));
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify([new GitCommit()]) })));
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify([new GitTag('0.1.0')]) })));

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(responses.shift());
    });

    comp.name = 'Attila';
    comp.onGetUser();
    expect(comp.user.login).toBe('Attila');
    expect(comp.categories[0].tests[0].pass).toBe(true);
    expect(comp.categories[0].tests[1].pass).toBe(true);
    expect(comp.categories[1].tests[0].pass).toBe(true);
  }));

  it('onGetUser missing', async(() => {
    const responses = [];
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify(new GitUser('Attila')) })));
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify([new GitRepo('tlog16-angular-cli')]) })));
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify([]) })));
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify([]) })));

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(responses.shift());
    });

    comp.name = 'Attila';
    comp.onGetUser();
    expect(comp.user.login).toBe('Attila');
    expect(comp.categories[0].tests[0].pass).toBe(false);
    expect(comp.categories[0].tests[1].pass).toBe(false);
    expect(comp.categories[1].tests[0].pass).toBe(false);
  }));

  it('onGetUser error', async(() => {
    const responses = [];
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify(new GitUser('Attila')) })));

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(responses.shift());
    });

    comp.name = 'Attila';
    comp.onGetUser();
    expect(comp.user.login).toBe('Attila');
    expect(comp.categories[0].tests[0].pass).toBe(false);
    expect(comp.categories[0].tests[1].pass).toBe(false);
    expect(comp.categories[1].tests[0].pass).toBe(false);
  }));

  it('onGetUser wrong', async(() => {
    const responses = [];
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify(new GitUser('Attila')) })));
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify([new GitRepo('tlog16-angular-cli')]) })));
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify([]) })));
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify([new GitTag('wrong')]) })));

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(responses.shift());
    });

    comp.name = 'Attila';
    comp.onGetUser();
    expect(comp.user.login).toBe('Attila');
    expect(comp.categories[0].tests[0].pass).toBe(false);
    expect(comp.categories[0].tests[1].pass).toBe(false);
    expect(comp.categories[1].tests[0].pass).toBe(false);
  }));
});
