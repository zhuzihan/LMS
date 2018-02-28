import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ManEquipParaComponent } from './man-equip-para.component';
import { ManEquipParaListComponent } from './man-equip-para-list.component';
import { ManEquipParaPreviewComponent } from './man-equip-para-preview.component';
import { ManModelComponent } from './man-model.component';
import { ManModelListComponent } from './man-model-list.component';
import { ManModelPreviewComponent } from './man-model-preview.component';
import { ManModelAddComponent } from './man-model-add.component';
import { ManTemplateListComponent } from './man-template-list.component';
import { ManTemplateComponent } from './man-template.component';
import { ManJobModuleComponent } from './man-job-module.component';
import { MatGridListModule } from '@angular/material/grid-list';

import { ManRoutingModule } from './man-routing.module';

// import {CdkTableModule} from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';

import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    ManRoutingModule,
    // CdkTableModule
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    MatGridListModule
  ],
  declarations: [
    ManEquipParaListComponent,
    ManEquipParaPreviewComponent,
    ManEquipParaComponent,
    ManModelComponent,
    ManModelListComponent,
    ManModelPreviewComponent,
    ManModelAddComponent,
    ManTemplateComponent,
    ManTemplateListComponent,
    ManJobModuleComponent,
  ],
  providers: [
  ]
})
export class ManModule { }
