import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { PreviewComponent }   from './preview.component';
import { RegistrationComponent }      from './registration.component';
import { AnalysisComponent }  from './analysis.component';
import { CalculateComponent }  from './calculate.component';
import { SysManagementComponent }  from './sys-management.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
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