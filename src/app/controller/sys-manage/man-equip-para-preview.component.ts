import { Component, OnChanges, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ExpParameterService } from '../../service/exp-parameter.service';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
// import {MatTableModule} from '@angular/material'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'man-equip-para-preview',
  templateUrl: '../../view/sys-manage/man-equip-para-preview.component.html',
  styleUrls: ['../../css/sys-management.component.css'],
  providers: [ExpParameterService]
})
export class ManEquipParaPreviewComponent implements OnChanges {

  // expParameterData: Object;
  @Input() expParameter: Object;
  displayedColumns: Array<Object> = [];

  tableData: Array<Object> = [];
  tableKeys: Array<Object> = [];

  constructor(private expParameterSerivce: ExpParameterService) { }

  ngOnChanges() {
    this.tableData = this.expParameter['tableData'];
    this.displayedColumns = this.expParameterSerivce.getValues(this.expParameter['tableHead']);
    this.tableKeys = this.expParameterSerivce.getKeys(this.expParameter['tableHead']);
    // console.log(this.expParameter['tableData']);
    // console.log(this.tableData);
    // console.log(this.displayedColumns);
    // console.log(this.tableKeys);
  }

}

