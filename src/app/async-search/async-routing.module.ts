import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSearchComponent } from './async-search.component';

const asyncSearchRoutes: Routes = [
  {
    path: '',
    component: AsyncSearchComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(asyncSearchRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export const routes: ModuleWithProviders = RouterModule.forRoot(asyncSearchRoutes);

export class AsyncSearchRoutingModule { }
