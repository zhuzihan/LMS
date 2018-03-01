import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, FormGroupName } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { FormModelDataService } from './form-model-data.service';
import { ExpParameterService } from '../../service/exp-parameter.service';
// import { Model, DataCell } from '../../model/form-data-model';
import { Model, DataCell, source, form_model_test } from '../../model/form-data-model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-model-add',
    templateUrl: '../../view/man-model-add.component.html',
    styleUrls: ['../../css/man-model.component.css']
})
export class ManModelAddComponent implements OnChanges {
    // cell: DataCell;
    // cells= [this.cells];
    // model = new Model(0, "", "", -1, -1,this.cells);
    model = form_model_test[0];
    modelForm: FormGroup;
    source = source;
    sourceControl: Object;
    // selected_source_name: '';

    //new for test
    Columns: Array<Object> = [];
    tableData: Array<Object> = [];
    tableKeys: Array<Object> = [];
    //拉取列表每列的数据
    // colData: Array<Object> = [];
    //列数据的集合
    colDataArray: Array<Object> = [];
    //原始数据
    expParameterData: Array<Object>;
    //转换后数据
    expParameterList: Array<Object> = [];
    //设置来源数据为参数表时保存的表头信息
    savedTableName: string;
    isLoading = true;

    constructor(
        private fb: FormBuilder,
        private modelDataService: FormModelDataService,
        private expParameterSerivce: ExpParameterService) {
        this.createForm();
        this.setCells(this.model.cells);
    }
    ngOnInit(): void {
        this.expParameterSerivce.getExpParameter().then(responseData => {
            this.expParameterData = responseData;
            this.expParameterList = this.expParameterSerivce.convertParameterList(this.expParameterData);
            this.isLoading = false;
        });
    }
    // getFrontValue(parameterList: Array<Object>, headKey: string, count: number) {
    //     return this.expParameterSerivce.getFrontValue(parameterList,headKey,count);
    // }
    //来源数据为参数表时，将数据添加至表单 (格式：expParameter#表名#表头)
    addEquipParaToForm(i: string, tableHead: string){
        this.cells_form.controls[i].patchValue({
            source_data: "expParameter#"+this.savedTableName+"#"+tableHead,
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
    saveTableName(expPara: Object){
        this.savedTableName = expPara['tableName'];
        // console.log(this.savedTableName);
    }
    patchSourceData(i: string, source: object) {
        // i.control.patchValue({ source_name: 'cipchk' });
        this.cells_form.controls[i].patchValue({
            source_name: source['source_name'],
            source_type: source['source_type'],
            value: '',
        });
    }
    createForm() {
        this.modelForm = this.fb.group({
            // model_id: 0,
            // model_name: ['', Validators.required],
            model_standard_name: '',
            has_table: 1,
            has_array: -1,
            // tables_form: this.fb.array([]),
            cells_form: this.fb.array([
                {
                    name: new FormControl(),
                }
            ]),
            // arrays_form: this.fb.array([]),
        });
        // const cellFGs = cells.map(cells => this.fb.group(cells));
        // const cellFormArray = this.fb.array(cellFGs);
        // this.modelForm.setControl('cells_form', this.cells_form);
        // this.cells_form.push(this.fb.group(new DataCell()));
    }
    ngOnChanges() {
        this.modelForm.reset({
            model_id: this.model.model_id,
            model_name: this.model.model_name,
            model_standard_name: this.model.model_standard_name,
            has_table: this.model.has_table,
            has_array: this.model.has_array,
        });
        this.setCells(this.model.cells);
        //临时保存数据置空
        this.savedTableName = '';
        // console.log(this.modelForm);
    }
    //重置内容
    revert() { this.ngOnChanges(); }

    setCells(cells: DataCell[]) {
        const cellFGs = cells.map(cells => this.fb.group(cells));
        const cellFormArray = this.fb.array(cellFGs);
        this.modelForm.setControl('cells_form', cellFormArray);
    }
    // 获取数组
    get cells_form(): FormArray {
        return this.modelForm.get('cells_form') as FormArray;
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
        // debug
        // console.log(this.model);
        this.modelDataService.updateModelData(this.model).subscribe(/* error handing */);
        this.ngOnChanges();
    }
    prepareSaveModel(): Model {
        const formModel = this.modelForm.value;
        // deep copy of cells_form
        const cellFormDeepCopy: DataCell[] = formModel.cells_form.map(
            (cell: DataCell) => Object.assign({}, cell)
        );
        // return new 'Field' object containing a combination of original model value
        // and deep copies of changed form model values
        const saveModel: Model = {
            model_id: this.model.model_id,
            model_name: formModel.model_name as string,
            model_standard_name: formModel.model_standard_name as string,
            has_table: formModel.has_table,
            has_array: formModel.has_array,
            cells: cellFormDeepCopy,
            // array_list: this.model.array_list,
            // arrays: arrayFormDeepCopy,
        };
        return saveModel;
    }
}

