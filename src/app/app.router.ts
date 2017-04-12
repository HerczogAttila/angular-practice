import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AnimationComponent } from './animation/animation.component';
import { PolcComponent } from './polc/polc.component';
import { GithubComponent } from './github/github.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileDownloadComponent } from './file-download/file-download.component';
import { ChartsComponent } from './charts/charts.component';
import { HeroListComponent } from './reactive-forms/hero-list.component';
import { PipesComponent } from './pipes/pipes.component';
import { AsyncMessageComponent } from './async-message/async-message.component';
import { AsyncSearchComponent } from './async-search/async-search.component';

export const router: Routes = [
  { path: '', redirectTo: 'animation', pathMatch: 'full' },
  { path: 'animation', component: AnimationComponent },
  { path: 'polc', component: PolcComponent },
  { path: 'github', component: GithubComponent },
  { path: 'file_upload', component: FileUploadComponent },
  { path: 'file_download', component: FileDownloadComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'reactive_forms', component: HeroListComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'async_message', component: AsyncMessageComponent },
  { path: 'async_search', component: AsyncSearchComponent },
  { path: '**', redirectTo: 'animation' },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
