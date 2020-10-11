import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubCornerComponent } from './github-corner/github-corner.component';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { BusyModule } from 'projects/busy/src/public-api';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GithubCornerComponent,
    HeaderComponent,
    OptionsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BusyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
