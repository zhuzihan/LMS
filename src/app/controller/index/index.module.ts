import { NgModule }       from '@angular/core';
// import { FormsModule }    from '@angular/forms';

import { PreviewComponent }   from './preview.component';
import { RegistrationComponent }      from './registration.component';
import { AnalysisComponent }  from './analysis.component';
import { CalculateComponent }  from './calculate.component';
import { SysManagementComponent }  from './sys-management.component';

import {IndexRoutingModule} from './index-routing.module';
import { MaterialModule } from '../../material.module'

@NgModule({
  imports: [
    IndexRoutingModule,
    MaterialModule
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

