import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ManEquipParaComponent }      from './man-equip-para.component';
import { ManBlockComponent }  from './man-block.component';
import { ManTemplateComponent }  from './man-template.component';
import { ManJobModuleComponent }  from './man-job-module.component';

import {ManRoutingModule} from './man-routing.module';

// import {CdkTableModule} from '@angular/cdk/table';
import {MatTableDataSource} from '@angular/material';

import { MaterialModule } from '../../material.module'

@NgModule({
  imports: [
    ManRoutingModule,
    // CdkTableModule
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    ManEquipParaComponent,
    ManBlockComponent,
    ManTemplateComponent,
    ManJobModuleComponent,
  ],
  providers: [
  ]
})
export class ManModule {}