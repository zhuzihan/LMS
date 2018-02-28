import { Component, OnInit, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ExpParameterService } from '../../service/exp-parameter.service';
// import {MatTableModule} from '@angular/material'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'man-equip-para',
  templateUrl: '../../view/man-equip-para-list.component.html',
  styleUrls: ['../../css/man-equip-para.component.css']
})
<<<<<<< HEAD
export class ManEquipParaListComponent implements OnInit {
  displayedColumns = ['tableName', 'tableRegistrant', 'tableRemark', 'tableState'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  expParameterData: Array<Object>;
=======
export class ManEquipParaListComponent implements OnInit,OnChanges {
  displayedColumns = ['tableName', 'tableRegistrant', 'tableRemark', 'tableState'];
  dataSource = new MatTableDataSource;
  expParameterData: Object;
>>>>>>> fb3e1112614a509f5cc55750078428521f997d02
  expParameterList: Array<Object> = [];
  selectedExpParameter: Object;
  isLoading = true;

  constructor(private expParameterSerivce: ExpParameterService) { }

  ngOnInit(): void {
    this.expParameterSerivce.getExpParameter().then(responseData => {
      this.expParameterData = responseData;
      this.getParameterList(this.expParameterData);
    });
  }
<<<<<<< HEAD

  getParameterList(expParaData: Array<Object>) {
    for (const one_para of expParaData) {
=======
  ngOnChanges(){
    console.log(this.selectedExpParameter);
  }
  getParameterList(expParaData: Object) {
    for (const one_para of Object.values(expParaData)) {
>>>>>>> fb3e1112614a509f5cc55750078428521f997d02
      const expParaJsonArray: Array<Object> = JSON.parse(one_para['json']);
      const new_para_data: Object = new Object();
      new_para_data['tableId'] = one_para['id'];
      new_para_data['tableName'] = one_para['name'];
      new_para_data['tableRegistrant'] = one_para['registrant'];
      new_para_data['tableRemark'] = one_para['remark'];
      new_para_data['tableState'] = one_para['state'];
      new_para_data['tableHead'] = expParaJsonArray[0];
      expParaJsonArray.shift();
      new_para_data['tableData'] = expParaJsonArray;
      this.expParameterList.push(new_para_data);
    }
    this.isLoading = false;
    console.log(this.expParameterList);
  }

  select(expParameter: Object) { this.selectedExpParameter = expParameter; }
  // 参数表新旧数据格式转换
  convertNewFormat2OldFormat(newFormatData: Object) {
    const old_format_data: Object = new Object();
    // old_format_data['id'] = newFormatData['tableId'];
    old_format_data['name'] = newFormatData['tableName'];
    old_format_data['registrant'] = newFormatData['tableRegistrant'];
    old_format_data['remark'] = newFormatData['tableRemark'];
    old_format_data['state'] = newFormatData['tableState'];
    const temp_array: Array<Object> = new Array();
    for (const one_data of newFormatData['tableData']) {
      temp_array.push(one_data);
    }
    temp_array.reverse().push(newFormatData['tableHead']);
    temp_array.reverse();
    old_format_data['json'] = JSON.stringify(temp_array);
    return old_format_data;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}