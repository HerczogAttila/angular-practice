import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { AnimationComponent } from './animation/animation.component';
import { PolcComponent } from './polc/polc.component';

export const router: Routes = [
  { path: '', redirectTo: 'animation', pathMatch: 'full' },
  { path: 'animation', component: AnimationComponent },
  { path: 'polc', component: PolcComponent },
  { path: '**', redirectTo: 'animation' },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
