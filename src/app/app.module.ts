import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Router } from '@angular/router';

import { IndexModule } from './controller/index/index.module';
import { CalModule } from './controller/calculate/cal.module';
import { ManModule } from './controller/sys-manage/man.module';

import { AppRoutingModule } from './app-routing.module';

// import { FooterComponent } from './controller/footer.component'
import { PageNotFoundComponent } from './not-found.component';

import { PizzaPartyAppModule } from './pizza-party-app.module';
import { MaterialModule } from './material.module';
import './polyfill';

// Import Service
import { DataManageService } from './service/data-manage.service';
import { ModelDataService } from './service/model-data.service';
import { FormModelDataService } from './controller/sys-manage/form-model-data.service';
import { ExpParameterService } from './service/exp-parameter.service';
import { MatPaginatorIntlCro } from './service/mat-paginator-intl'

@NgModule({
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    // FormsModule,
    HttpModule,
    ManModule,
    CalModule,
    IndexModule,
    AppRoutingModule,

    PizzaPartyAppModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    // FooterComponent
  ],
  providers: [
    ModelDataService,
    FormModelDataService,
    DataManageService,
    ExpParameterService,
    MatPaginatorIntlCro,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
