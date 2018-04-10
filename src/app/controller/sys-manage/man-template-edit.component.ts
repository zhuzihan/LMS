import { Component, Input, OnChanges, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

import { Model } from '../../model/data-model';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ModelDataService } from '../../service/model-data.service';
import { DataManageService } from '../../service/data-manage.service';
// import { Model, Field, source } from '../../model/data-model'
import { Template, DataTable, source, DataArray, DataCell } from '../../model/data-model';
import { FormControl } from '@angular/forms';
// import { DataManageService } from '../../service/data-manage.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-template-edit',
    templateUrl: '../../view/sys-manage/man-template-edit.component.html',
    styleUrls: ['../../css/sys-management.component.css']
})
export class ManTemplateEditComponent implements OnChanges {
    @Input() template: Template;
    // 数据来源传入数据
    source: string;
    dateOfDialog: string;

    constructor(
        private modelDataService: ModelDataService,
        public dialog: MatDialog
    ) { }

    openSourceSelectDialog(): void {
        let dialogRef = this.dialog.open(SourceSelectDialog, {
            width: '600px',
            data: { source: this.source }
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log(result);
            console.log('source sub:' + result);
            this.source = result;
            //   console.log('The dialog was closed');
            //   console.log(this.source_dialog);
        });
    }

    openDateSelectDialog(): void {
        let dialogRef = this.dialog.open(DateSelectDialog, {
            width: '300px',
            data: { date: this.dateOfDialog }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('date sub:' + result);
            console.log('dateOfDialog:' + this.dateOfDialog);
            this.dateOfDialog = result;
        });
    }


    previewTemplate() { }

    getKeys(item) {
        return this.modelDataService.getKeys(item);
    }

    ngOnChanges(): void {
        // console.log(this.template);
    }
}

@Component({
    selector: 'dialog-source-select-dialog',
    templateUrl: '../../view/dialog/dialog-source-select-dialog.html',
    styleUrls: ['../../css/sys-management.component.css']
})
export class SourceSelectDialog {
    displayedColumns = ['model_standard_name', 'remark', 'registrant'];
    // models: Array<Object> = [];
    modelData: Array<Object> = [];

    isLoading = false;
    selectedModelName: String;
    selectedCellName: String;
    cells: Array<Object> = [];
    showAdd: false;

    constructor(
        private modelDataService: ModelDataService,
        private dataMangerService: DataManageService,
        public dialogRef: MatDialogRef<SourceSelectDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {
        this.selectedCellName = null;
        this.selectedModelName = null;
        this.getModels();
    }
    getModels() {
        this.isLoading = true;
        this.dataMangerService.getModules().then(responseData => {
            // console.log(responseData);
            this.modelData = responseData;
            // console.log(this.modelData);
            this.isLoading = false;
            this.selectedModelName = undefined;
        });
    }
    // select(model: Model) {
    //     console.log(JSON.parse(model['json']));
    //     this.selectedModel = JSON.parse(model['json']);
    // }
    onNoClick(): void {
        this.dialogRef.close();
    }

    // 提取 cells 中的 Datacell 组合为数组
    getCells(model: Object) {
        const cells: Object[] = [];
        // console.log(JSON.parse(model['json'])['table']['cells']);
        this.cells = JSON.parse(model['json'])['table']['cells'];
    }

    // 保存模块名
    selectModel(model: Object) {
        this.selectedModelName = JSON.parse(model['json'])['model_name'];;
        // console.log(this.selectedModelName);
        this.getCells(model);
    }
    selectCell(cell: Object) {
        this.selectedCellName = cell['sn'];
        this.data.source = '{' + '#' + this.selectedModelName + '#' + this.selectedCellName + '}';
        // console.log(this.source);
    }
    // console.log("#"+this.savedModelName+"#"+cell);
}

@Component({
    selector: 'dialog-date-select-dialog',
    templateUrl: '../../view/dialog/dialog-date-select-dialog.html',
    styleUrls: ['../../css/sys-management.component.css']
})
export class DateSelectDialog {
    dateValue: string;
    // dateValue: FormControl;
    constructor(
        public dialogRef: MatDialogRef<DateSelectDialog>,

        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.dateValue = '';
    }

    ngOnInit() {
    }
    onClick(): void {
        const dateValueStr = this.dateValue.toString();
        const strList = dateValueStr.split(' ');
        let month = '';
        let day = '';
        let year = '';
        switch (strList[1]) {
            case 'Jan':
                month = '01';
                break;
            case 'Feb':
                month = '02';
                break;
            case 'Mar':
                month = '03';
                break;
            case 'Apr':
                month = '04';
                break;
            case 'May':
                month = '05';
                break;
            case 'Jun':
                month = '06';
                break;
            case 'Jul':
                month = '07';
                break;
            case 'Aug':
                month = '08';
                break;
            case 'Sep':
                month = '09';
                break;
            case 'Oct':
                month = '10';
                break;
            case 'Nov':
                month = '11';
                break;
            case 'Dec':
                month = '12';
                break;
        }
        year = strList[3];
        day = strList[2];
        this.dateValue = year + '-' + month + '-' + day;
        console.log('onClick:' + this.dateValue);
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
}
