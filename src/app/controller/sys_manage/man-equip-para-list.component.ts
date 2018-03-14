import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ExpParameterService } from '../../service/exp-parameter.service';
import { delay } from 'rxjs/operator/delay';
// import {MatTableModule} from '@angular/material'

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-equip-para',
    templateUrl: '../../view/man-equip-para-list.component.html',
    styleUrls: ['../../css/man-equip-para.component.css']
})

export class ManEquipParaListComponent implements OnInit, OnChanges {
    displayedColumns = ['tableName', 'tableRegistrant', 'tableRemark', 'tableState'];
    expParameterData: Array<Object>;
    expParameterList: Array<Object> = [];
    dataSource = new MatTableDataSource();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    selectedExpParameter: Object;
    isLoading = true;

    // new for test
    Columns: Array<Object> = [];
    tableData: Array<Object> = [];
    tableKeys: Array<Object> = [];
    colData: Array<Object> = [];

    constructor(private expParameterSerivce: ExpParameterService) { }

    ngOnInit(): void {
        // this.isLoading = false;
        this.expParameterSerivce.getExpParameter().then(responseData => {
            this.expParameterData = responseData;
            this.expParameterList = this.expParameterSerivce.convertParameterList(this.expParameterData);
            this.dataSource = new MatTableDataSource<Object>(this.expParameterList);
            this.dataSource.paginator = this.paginator;
            this.isLoading = false;
            // console.log("afterngInit");
        });
    }
    // ngAfterViewInit() {
    //     this.dataSource.paginator = this.paginator;
    // }
    ngOnChanges() {
        console.log(this.selectedExpParameter);
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
// export interface Element {
//     name: string;
//     registrant: string;
//     remark: string;
//     state: string;
// }