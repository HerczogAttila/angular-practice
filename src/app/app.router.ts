import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AnimationComponent } from './animation/animation.component';
import { PolcComponent } from './github/polc/polc.component';
import { GithubComponent } from './github/github.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileDownloadComponent } from './file-download/file-download.component';
import { ChartsComponent } from './charts/charts.component';
import { PipesComponent } from './pipes/pipes.component';
import { AsyncMessageComponent } from './async-message/async-message.component';
import { AsyncSearchComponent } from './async-search/async-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { Multiselect2Component } from './multiselect2/multiselect2.component';
import { NinjaComponent } from './ninja/ninja.component';

export const router: Routes = [
  { path: '', redirectTo: 'animation', pathMatch: 'full' },
  { path: 'animation', component: AnimationComponent },
  { path: 'polc', component: PolcComponent },
  { path: 'github', component: GithubComponent },
  { path: 'file_upload', component: FileUploadComponent },
  { path: 'file_download', component: FileDownloadComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'async_message', component: AsyncMessageComponent },
  // { path: 'async_search', loadChildren: 'app/async-search/async-search.module#AsyncSearchModule' },
  { path: 'async_search', component: AsyncSearchComponent },
  { path: 'multi_select', component: MultiselectComponent },
  { path: 'multi_select2', component: Multiselect2Component },
  { path: 'ninja', component: NinjaComponent },
  { path: '**', component: PageNotFoundComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { preloadingStrategy: PreloadAllModules });
