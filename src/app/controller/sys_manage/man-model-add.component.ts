import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, FormGroupName } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
// import { FormModelDataService } from './form-model-data.service';
import { ModelDataService } from '../../service/model-data.service';
import { ExpParameterService } from '../../service/exp-parameter.service';
import { Model, DataCell, DataArray, space_model, source, DataTable } from '../../model/data-model';
import { DataManageService } from '../../service/data-manage.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-model-add',
    templateUrl: '../../view/man-model-add.component.html',
    styleUrls: ['../../css/sys-management.component.css']
})
export class ManModelAddComponent implements OnChanges, OnInit {
    // cell: DataCell;
    // cells= [this.cells];
    // model = new Model(0, "", "", -1, -1,this.cells);
    model = space_model;
    modelForm: FormGroup;
    tableForm: FormGroup;
    arraysForm: FormArray;

    source = source;
    // 暂存数据来源类型的临时变量
    sourceControl: Object;
    // 设置的单元格编号
    clickedCellIndex: number;
    isLoading = true;
    // selected_source_name: '';

    /**
     * 设置数据来源为参数表时使用
     */
    Columns: Array<Object> = [];
    tableData: Array<Object> = [];
    tableKeys: Array<Object> = [];
    // 拉取列表每列的数据
    // colData: Array<Object> = [];
    // 列数据的集合
    colDataArray: Array<Object> = [];
    // 原始数据
    expParameterData: Array<Object>;
    // 转换后数据
    expParameterList: Array<Object> = [];
    // 设置来源数据为参数表时保存的表头信息
    savedTableName: string;

    constructor(
        private fb: FormBuilder,
        private modelDataService: ModelDataService,
        private expParameterSerivce: ExpParameterService,
        private dataMangerService: DataManageService) {
        this.createForm();
    }
    ngOnInit(): void {
        // 服务器奔溃，临时屏蔽
        // this.expParameterSerivce.getExpParameter().then(responseData => {
        //     this.expParameterData = responseData;
        //     this.expParameterList = this.expParameterSerivce.convertParameterList(this.expParameterData);
        //     this.isLoading = false;
        // });
        //
        this.isLoading = false;

        this.ngOnChanges();
    }
    // getFrontValue(parameterList: Array<Object>, headKey: string, count: number) {
    //     return this.expParameterSerivce.getFrontValue(parameterList,headKey,count);
    // }
    // 来源数据为参数表时，将数据添加至表单 (格式：expParameter#表名#表头)
    addEquipParaToForm(i: string, tableHead: string) {
        this.cells_form.controls[i].patchValue({
            source_data: '{expParameter#' + this.savedTableName + '#' + tableHead + '}',
        });
        // console.log("#"+this.savedTableName+"#"+tableHead);
    }
    getTableHeads(expPara: Object) {
        this.Columns = this.expParameterSerivce.getValues(expPara['tableHead']);
        let temp_count = 0;
        this.colDataArray = [];
        for (const dataHead of this.expParameterSerivce.getKeys(expPara['tableHead'])) {
            this.colDataArray.push(this.expParameterSerivce.getFrontValue(expPara['tableData'], dataHead, 3));
            // console.log(this.expParameterSerivce.getFrontValue(expPara['tableData'], dataHead[temp_count], 3));
            temp_count++;
        }
        // console.log(this.colDataArray);
    }
    saveTableName(expPara: Object) {
        this.savedTableName = expPara['tableName'];
        // console.log(this.savedTableName);
    }
    patchSourceData(i: number, s: object) {
        this.sourceControl = s;
        this.clickedCellIndex = i;
        // console.log(this.clickedCellIndex);
        this.cells_form.controls[i].patchValue({
            source_name: source['source_name'],
            source_type: source['source_type'],
            value: '',
        });
    }
    createForm() {
        this.modelForm = this.fb.group({
            model_name: '',
            model_standard_name: '',
            registrant: '',
            remark: '',
            state: 1,
            has_table: 1,
            has_array: -1,
        });
        this.tableForm = this.fb.group({});
        this.arraysForm = this.fb.array([]);
        this.modelForm.setControl('table', this.tableForm);
        this.modelForm.setControl('arrays', this.arraysForm);
        // this.setTableForm(this.model.table);
        // this.setArraysForm(this.model.arrays);
        // this.setModel(this.model);
    }
    ngOnChanges() {
        this.modelForm.reset({
            model_id: this.model.model_id,
            model_name: this.model.model_name,
            model_standard_name: this.model.model_standard_name,
            has_table: this.model.has_table,
            has_array: this.model.has_array,
        });
        // this.setCells(this.model.cells);
        this.setTableForm(this.model.table);
        this.setArraysForm(this.model.arrays);
        // 临时保存数据置空
        this.savedTableName = '';
        console.log(this.modelForm);
    }
    // 重置内容
    revert() { this.ngOnChanges(); }

    setTableForm(table: DataTable) {
        this.setCells(table.cells);
        this.setCellLists(table.cell_list);
    }
    setArraysForm(arrays: { [key: string]: DataArray; }) {
        const cellFGs: FormGroup[] = [];
        for (const cell_key of Object.keys(arrays)) {
            cellFGs.push(this.fb.group(arrays[cell_key]));
        }
        const arraysFormArray = this.fb.array(cellFGs);
        this.modelForm.setControl('arrays', arraysFormArray);
    }
    // setModel(model: Model) {
    // this.setCells(model.cells);
    // }
    setCells(cells: { [key: string]: DataCell; }) {
        const cellFGs: FormGroup[] = [];
        for (const cell_key of Object.keys(cells)) {
            /*
             * Angular 表单控件实现产生的错误
             * https://stackoverflow.com/questions/37564574/angular-2-typescript-typeerror-this-validator-is-not-a-function
             * 详见第二条回答
             */
            if (typeof cells[cell_key]['source_data'] === 'object') {
                cells[cell_key]['source_data'] = [cells[cell_key]['source_data']];
            }
            cellFGs.push(this.fb.group(cells[cell_key]));
        }
        const cellFormArray = this.fb.array(cellFGs);
        this.tableForm.setControl('cells', cellFormArray);
    }
    setCellLists(cells: { [key: string]: String; }) {
        const cellFGs: FormGroup[] = [];
        for (const cell_key of Object.keys(cells)) {
            cellFGs.push(this.fb.group(cells[cell_key]));
        }
        const cellsFormArray = this.fb.array(cellFGs);
        this.tableForm.setControl('cell_list', cellsFormArray);
    }
    // setCells(cells: DataCell[]) {
    //     const cellFGs = cells.map(cells => this.fb.group(cells));
    //     const cellFormArray = this.fb.array(cellFGs);
    //     this.modelForm.setControl('cells_form', cellFormArray);
    // }
    // 获取数组
    get cells_form(): FormArray {
        return this.tableForm.get('cells') as FormArray;
    }
    get cell_list_form(): FormArray {
        return this.tableForm.get('cell_list') as FormArray;
    }
    // 添加记录
    addCell() {
        this.cells_form.push(this.fb.group(new DataCell()));
    }
    // 删除单元
    removeCell(i: number) {
        this.cells_form.removeAt(i);
    }
    // 提交表单
    onSubmit() {
        // console.log("onsubmit1");
        this.model = this.prepareSaveModel();
        const model_str: string = JSON.stringify(this.model);
        const formModel = this.modelForm.value;
        // debug
        console.log(formModel);
        // this.modelDataService.addModelData(this.model).subscribe(/* error handing */);
        // tslint:disable-next-line:max-line-length
        this.dataMangerService.saveModules(formModel.model_standard_name, formModel.registrant, Number(formModel.state), formModel.remark, model_str);
        // this.ngOnChanges();
    }
    prepareSaveModel(): Model {
        const formModel = this.modelForm.value;
        // deep copy of cell_lists_form
        const cellListFormDeepCopy: { [key: string]: String; } = formModel.table.cell_list.map(
            (cellList: { [key: string]: String; }) => Object.assign({}, cellList)
        );
        // deep copy of cells_form
        const cellFormDeepCopy: { [key: string]: DataCell; } = formModel.table.cells.map(
            (cell: { [key: string]: DataCell; }) => Object.assign({}, cell)
        );
        // deep copy of arraysForm
        const arraysFormDeepCopy: { [key: string]: DataArray; } = formModel.arrays.map(
            (cell: { [key: string]: DataArray; }) => Object.assign({}, cell)
        );

        // return new 'Field' object containing a combination of original model value
        // and deep copies of changed form model values
        const saveModel: Model = {
            model_id: this.model.model_id,
            model_name: formModel.model_name as string,
            model_standard_name: formModel.model_standard_name as string,
            has_table: formModel.has_table,
            has_array: formModel.has_array,

            table: {
                cells: cellFormDeepCopy,
                cell_list: cellListFormDeepCopy,
            },
            array_list: this.model.array_list,
            arrays: arraysFormDeepCopy,
        };
        return saveModel;
    }
}

