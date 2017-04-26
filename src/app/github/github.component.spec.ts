import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubComponent } from './github.component';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { GithubService } from '../shared/services/github.service';
import { GitUser } from '../shared/classes/git/git-user';
import { GitRepo } from '../shared/classes/git/git-repo';
import 'rxjs/add/operator/map';

describe('GithubComponent', () => {
  let comp: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ GithubComponent ],
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
    fixture = TestBed.createComponent(GithubComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('onHello', async(() => {
    const sendData = 'zen';
    const response = new Response(new ResponseOptions({ body: sendData }));

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(response);
    });

    comp.onHello();
    expect(comp.answerText).toBe('zen');
  }));

  it('onGetUser', async(() => {
    const responses = [];
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify(new GitUser('Attila')) })));
    responses.push(new Response(new ResponseOptions({ body: JSON.stringify([new GitRepo('tlog16-angular-cli')]) })));

    mockBackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(responses.shift());
    });

    comp.onGetUser();
    expect(comp.user.login).toBe('Attila');
  }));
});
