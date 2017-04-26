import { Component } from '@angular/core';
import { GitUser } from '../shared/classes/git/git-user';
import { GitRepo } from '../shared/classes/git/git-repo';
import { GithubService } from '../shared/services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent {
  public name = 'HerczogAttila';
  public answerText: string;
  public user: GitUser;
  public repos: GitRepo[] = [];

  constructor(private githubService: GithubService) { }

  public onHello(): void {
    this.githubService.zen().subscribe(message => this.answerText = message);
  }

  public onGetUser(): void {
    this.githubService.getUser(this.name).subscribe(user => this.user = user);
    this.githubService.getRepos(this.name).subscribe(repos => this.repos = repos);
  }
}
