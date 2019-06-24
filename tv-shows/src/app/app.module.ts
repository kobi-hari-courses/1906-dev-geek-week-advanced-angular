import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowsListComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
