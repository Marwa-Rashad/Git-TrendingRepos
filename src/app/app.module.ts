import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RepoComponent } from './components/repo/repo.component';
import { from } from 'rxjs';
import { DateDiffPipe } from './shared/pipes/date-diff.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepoComponent,
    DateDiffPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
