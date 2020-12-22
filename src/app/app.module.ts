import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RepoComponent } from './components/repo/repo.component';
import { from } from 'rxjs';
import { DateDiffPipe } from './shared/pipes/date-diff.pipe';
import { ToKiloPipe } from './shared/pipes/to-kilo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepoComponent,
    DateDiffPipe,
    ToKiloPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
