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
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FlyingHeroesPipe } from './pipes/flying-heroes.pipe';
import { FlyingHeroesImpurePipe } from './pipes/flying-heroes-impure.pipe';
import { AsyncMessageComponent } from './async-message/async-message.component';
import { FetchJsonPipe } from './pipes/fetch-json.pipe';
import { AsyncSearchComponent } from './async-search/async-search.component';
import { SearchService } from './async-search/search.service';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    Ng2PaginationModule,
    ChartsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HeroService,
    SearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
