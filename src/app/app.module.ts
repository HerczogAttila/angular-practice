import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AnimationComponent } from './animation/animation.component';
import { Ng2PaginationModule } from 'ng2-pagination';
import { NavigationComponent } from './navigation/navigation.component';
import { routes } from './app.router';
import { PolcComponent } from './polc/polc.component';
import { PolcTestComponent } from './polc/polc-test/polc-test.component';
import { GithubComponent } from './github/github.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileDownloadComponent } from './file-download/file-download.component';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HeroService } from './reactive-forms/hero.service';
import { HeroListComponent } from './reactive-forms/hero-list.component';
import { PipesComponent } from './pipes/pipes.component';
import { ExponentialStrengthPipe } from './pipes/pipe-classes/exponential-strength.pipe';
import { FlyingHeroesPipe } from './pipes/pipe-classes/flying-heroes.pipe';
import { FlyingHeroesImpurePipe } from './pipes/pipe-classes/flying-heroes-impure.pipe';
import { AsyncMessageComponent } from './async-message/async-message.component';
import { FetchJsonPipe } from './pipes/pipe-classes/fetch-json.pipe';
import { AsyncSearchComponent } from './async-search/async-search.component';
import { SearchService } from './async-search/search.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { SelectModule } from 'ng2-select';
import { Multiselect2Component } from './multiselect2/multiselect2.component';
import { HeroComponent } from './pipes/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AnimationComponent,
    PolcComponent,
    PolcTestComponent,
    GithubComponent,
    FileUploadComponent,
    FileDownloadComponent,
    ChartsComponent,
    ReactiveFormsComponent,
    HeroListComponent,
    PipesComponent,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    AsyncMessageComponent,
    FetchJsonPipe,
    AsyncSearchComponent,
    PageNotFoundComponent,
    MultiselectComponent,
    Multiselect2Component,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    Ng2PaginationModule,
    ChartsModule,
    ReactiveFormsModule,
    SelectModule,
  ],
  providers: [
    HeroService,
    SearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
