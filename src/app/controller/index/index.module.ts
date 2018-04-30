import { NgModule } from '@angular/core';
// import { FormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview.component';
import { RegistrationComponent } from './registration.component';
import { AnalysisComponent } from './analysis.component';
import { CalculateComponent } from './calculate.component';
import { SysManagementComponent } from './sys-management.component';

import { IndexRoutingModule } from './index-routing.module';
import { MaterialModule } from '../../material.module';
import { FooterComponent } from '../../controller/footer.component'

@NgModule({
  imports: [
    IndexRoutingModule,
    MaterialModule,
    CommonModule
  ],
  declarations: [
    PreviewComponent,
    RegistrationComponent,
    AnalysisComponent,
    CalculateComponent,
    SysManagementComponent,
    FooterComponent
  ],
  providers: [

  ]
})
export class IndexModule { }
