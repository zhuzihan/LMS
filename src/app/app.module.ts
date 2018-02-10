import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Router } from '@angular/router';

import { ManModule } from './controller/sys_manage/man.module'
import { IndexModule } from './controller/index/index.module';
import { BlockDataService } from './controller/sys_manage/block-data.service'
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent} from './not-found.component'

import { PizzaPartyAppModule } from './pizza-party-app.module'
import { MaterialModule } from './material.module'
import './polyfill';



@NgModule({
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    // FormsModule,

    ManModule,
    IndexModule,
    AppRoutingModule,

    PizzaPartyAppModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  providers: [BlockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }