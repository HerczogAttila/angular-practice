import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AnimationComponent,
    PolcComponent,
    PolcTestComponent,
    GithubComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    Ng2PaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
