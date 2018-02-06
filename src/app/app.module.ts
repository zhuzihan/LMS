import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ManRoutingModule } from "./man-routing.module";
import { AppRoutingModule } from './app-routing.module';

import { ManEquipParaComponent }   from './man-equip-para.component';
import { ManBlockComponent }      from './man-block.component';
import { ManTemplateComponent }  from './man-template.component';
import { ManJobModuleComponent }  from './man-job-module.component';

import { PreviewComponent }   from './preview.component';
import { RegistrationComponent }      from './registration.component';
import { AnalysisComponent }  from './analysis.component';
import { CalculateComponent }  from './calculate.component';
import { SysManagementComponent }  from './sys-management.component';
@NgModule({
  imports: [
    BrowserModule,
    ManRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,

    ManEquipParaComponent,
    ManBlockComponent,
    ManTemplateComponent,
    ManJobModuleComponent,

    PreviewComponent,
    RegistrationComponent,
    AnalysisComponent,
    CalculateComponent,
    SysManagementComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }