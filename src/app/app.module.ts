import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Router } from '@angular/router';

import { ManModule } from './controller/sys_manage/man.module';
import { IndexModule } from './controller/index/index.module';

import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './not-found.component';

import { PizzaPartyAppModule } from './pizza-party-app.module';
import { MaterialModule } from './material.module';
import './polyfill';

// Import Service
import { DataManageService } from './service/data-manage.service';
import { ModelDataService } from './service/model-data.service';
import { FormModelDataService } from './controller/sys_manage/form-model-data.service';
import { ExpParameterService } from './service/exp-parameter.service';

@NgModule({
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    // FormsModule,
    HttpModule,
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
  providers: [ModelDataService, FormModelDataService, DataManageService, ExpParameterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
