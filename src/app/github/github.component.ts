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
    this.githubService.zen().subscribe(this.setAnswerText);
  }

  private setAnswerText(message: string) {
    this.answerText = message;
  }

  public onGetUser(): void {
    this.githubService.getUser(this.name).subscribe(this.setUser);
    this.githubService.getRepos(this.name).subscribe(this.setRepos);
  }

  private setUser(user: GitUser): void {
    console.log(user);
    this.user = user;
  }

  private setRepos(repos: GitRepo[]): void {
    console.log(repos);
    this.repos = repos;
  }
}
