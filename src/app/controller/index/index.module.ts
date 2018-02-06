import { NgModule }       from '@angular/core';
// import { FormsModule }    from '@angular/forms';
// import { CommonModule }   from '@angular/common';

import { PreviewComponent }   from './preview.component';
import { RegistrationComponent }      from './registration.component';
import { AnalysisComponent }  from './analysis.component';
import { CalculateComponent }  from './calculate.component';
import { SysManagementComponent }  from './sys-management.component';

import {IndexRoutingModule} from './index-routing.module';

@NgModule({
  imports: [
    IndexRoutingModule
  ],
  declarations: [
    PreviewComponent,
    RegistrationComponent,
    AnalysisComponent,
    CalculateComponent,
    SysManagementComponent
  ],
  providers: [

  ]
})
export class IndexModule {}

