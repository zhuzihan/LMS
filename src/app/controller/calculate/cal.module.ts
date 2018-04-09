import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { CalIndexComponent } from './cal-index.component';
import { MatGridListModule } from '@angular/material/grid-list';

import { CalRoutingModule } from './cal-routing.module';

// import {CdkTableModule} from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    CalRoutingModule,
    // CdkTableModule
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    MatGridListModule
  ],
  declarations: [
    CalIndexComponent,
  ],
  providers: [
  ]
})
export class CalModule { }
