import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ManEquipParaListComponent } from './man-equip-para-list.component';
import { ManEquipParaPreviewComponent } from './man-equip-para-preview.component';
import { ManModelEditComponent } from './man-model-edit.component';
import { ManModelListComponent } from './man-model-list.component';
import { ManModelDetailComponent } from './man-model-detail.component';
import { ManModelPreviewComponent } from './man-model-preview.component';
import { ManModelAddComponent } from './man-model-add.component';
import { ManTemplateListComponent } from './man-template-list.component';
import { ManTemplateEditComponent, SourceSelectDialog, DateSelectDialog } from './man-template-edit.component';
import { ManTemplateCompositionComponent } from './man-template-composition.component';
import { ManTemplatePreviewComponent } from './man-template-preview.component';
import { ManTemplateAddComponent } from './man-template-add.component';
import { ManJobModuleComponent } from './man-job-module.component';
import { MatGridListModule } from '@angular/material/grid-list';

import { ManRoutingModule } from './man-routing.module';

import { DialogTableForm } from './man-model-edit.component';

// import {CdkTableModule} from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';

import { MaterialModule } from '../../material.module';

// import { MyErrorStateMatcher } from '../../controller/error-state-matcher';
// import {ErrorStateMatcher} from '@angular/material/core';

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
    ManModelEditComponent,
    ManModelListComponent,
    ManModelDetailComponent,
    ManModelPreviewComponent,
    ManModelAddComponent,
    ManTemplateListComponent,
    ManTemplatePreviewComponent,
    ManTemplateCompositionComponent,
    ManTemplateEditComponent,
    ManTemplateAddComponent,
    ManJobModuleComponent,
    DialogTableForm,
    SourceSelectDialog,
    DateSelectDialog
  ],
  entryComponents: [
    DialogTableForm,
    SourceSelectDialog,
    DateSelectDialog
  ],
  providers: [
    // {provide: ErrorStateMatcher, useClass: MyErrorStateMatcher}
  ]
})
export class ManModule { }
