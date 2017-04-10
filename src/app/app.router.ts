import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { AnimationComponent } from './animation/animation.component';
import { PolcComponent } from './polc/polc.component';
import { GithubComponent } from './github/github.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

export const router: Routes = [
  { path: '', redirectTo: 'animation', pathMatch: 'full' },
  { path: 'animation', component: AnimationComponent },
  { path: 'polc', component: PolcComponent },
  { path: 'github', component: GithubComponent },
  { path: 'file_upload', component: FileUploadComponent },
  { path: '**', redirectTo: 'animation' },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
