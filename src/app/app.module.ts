import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

import { ManModule } from './controller/sys_manage/man.module'
import { IndexModule } from './controller/index/index.module';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent} from './not-found.component'

@NgModule({
  imports: [
    BrowserModule,
    ManModule,
    IndexModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }