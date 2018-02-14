import { Component, Input, OnChanges } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ModelDataService } from './model-data.service';
// import { Model, Field, source } from '../../model/data-model'
import { Model, Table, _Array} from '../../model/data-model'

@Component({
    selector: 'man-model',
    templateUrl: '../../view/man-model.component.html',
    styleUrls: ['../../css/man-model.component.css']
})
export class ManModelComponent implements OnChanges{
    @Input() model : Model;
    modelForm: FormGroup;
    models : Model[];
    // fields : Field[];
    // source = source;
    tables : Table[];
    arrays : _Array[];

    // name = new FormControl();
    //nameChangeLog: string[] = [];

    constructor(
        private fb: FormBuilder,
        private modelDataService: ModelDataService) {

        this.createForm();
    }
    ngOnChanges() {
        this.modelForm.reset({
            name: this.model.model_name
            // field: this.model.field[0] || new Field()
        });
        // this.setFields(this.model.fields);
        
    }
    // ngOnInit(): void {
    //     this.getModel();
    // }
    createForm() {
        this.modelForm = this.fb.group({
            model_name: ['', Validators.required ],
            // description: '',
            // fields_form: this.fb.array([]),
            has_table : 1,
            has_array : 1,
            tables_form: this.fb.array([]),
            array_list : [],
            arrays_form: this.fb.array([]),
            // sidekick: ''
        });
    }
    // setFields(fields: Field[]) {
    //     const fieldFGs = fields.map(fields => this.fb.group(fields));
    //     const fieldFormArray = this.fb.array(fieldFGs);
    //     this.modelForm.setControl('fields_form', fieldFormArray);
    // }
    setTables(tables: Table[]) {
        const tableFGs = tables.map(tables => this.fb.group(tables));
        const tableFormArray = this.fb.array(tableFGs);
        this.modelForm.setControl('table_form', tableFormArray);
    }
    setArrays(arrays: _Array[]) {
        const arrayFGs = arrays.map(arrays => this.fb.group(arrays));
        const arrayFormArray = this.fb.array(arrayFGs);
        this.modelForm.setControl('array_form', arrayFormArray);
    }
    // get fields_form(): FormArray {
    //     return this.modelForm.get('fields_form') as FormArray;
    // }
    get tables_form(): FormArray {
        return this.modelForm.get('tables_form') as FormArray;
    }
    get arrays_form(): FormArray {
        return this.modelForm.get('arrays_form') as FormArray;
    }
    //添加记录
    // addField() {
    //     this.fields_form.push(this.fb.group(new Field()));
    // }
    addTable() {
        this.tables_form.push(this.fb.group(new Table()));
    }
    addArray() {
        this.arrays_form.push(this.fb.group(new _Array()));
    }

    //删除记录
    // removeField(i : number) {
    //     this.fields_form.removeAt(i);
    // }
    //删除列表
    removeTable(i : number) {
        this.tables_form.removeAt(i);
    }
    //删除数组
    removeArray(i : number) {
        this.arrays_form.removeAt(i);
    }
    //提交表单
    onSubmit() {
        console.log("onsubmit1");
        this.model = this.prepareSaveModel();
        //debug
        console.log(this.model);
        this.modelDataService.updateModelData(this.model).subscribe(/* error handing */);
        this.ngOnChanges();
    }
    prepareSaveModel(): Model {
        const formModel = this.modelForm.value;

        //deep copy of fields_form
        // const fieldFormDeepCopy: Field[] = formModel.fields_form.map(
        //     (field: Field) => Object.assign({}, field)
        // );
        //deep copy of tables_form
        const tableFormDeepCopy: Table[] = formModel.fields_form.map(
            (table: Table) => Object.assign({}, table)
        );
        //deep copy of arrays_form
        const arrayFormDeepCopy: _Array[] = formModel.fields_form.map(
            (array: _Array) => Object.assign({}, array)
        );

        //return new 'Field' object containing a combination of original model value
        //and deep copies of changed form model values
        // const saveModel: Model = {
        //     id: this.model.id,
        //     name: formModel.name as string,
        //     description: formModel.description as string,
        //     fields: fieldFormDeepCopy
        // };

        //return new 'Field' object containing a combination of original model value
        //and deep copies of changed form model values
        const saveModel: Model = {
            model_id: this.model.model_id,
            model_name: this.model.model_name,
            has_table: this.model.has_table,
            has_array: this.model.has_array,
            tables: tableFormDeepCopy,
            array_list: this.model.array_list,
            arrays: arrayFormDeepCopy,
            // name: formModel.name as string,
            // description: formModel.description as string,
            // fields: fieldFormDeepCopy
        };
        return saveModel;
    }
    //监视更改
    revert() { this.ngOnChanges(); }

    // logNameChange() {
    //   const nameControl = this.heroForm.get('name');
    //   nameControl.valueChanges.forEach(
    //     (value: string) => this.nameChangeLog.push(value)
    //   );
    // }


    // constructor(private modelDataService:ModelDataService) {}
    // getModel(): void {
    //     this.models = this.modelDataService.getModelData();
    // }

    field_num = [
        {value: '1', viewValue: '1'},
        {value: '2', viewValue: '2'},
        {value: '3', viewValue: '3'},
        {value: '4', viewValue: '4'},
        {value: '5', viewValue: '5'},
        {value: '6', viewValue: '6'},
        {value: '7', viewValue: '7'},
        {value: '8', viewValue: '8'},
        {value: '9', viewValue: '9'},
        {value: '10', viewValue: '10'},
        {value: '11', viewValue: '11'},
        {value: '12', viewValue: '12'},
    ];
    data_source = [
        {value: 'record', viewValue: '录入'},
        {value: 'date', viewValue: '日期'},
        {value: 'parameters_table', viewValue: '参数表'},
        {value: 'formula', viewValue: '创建公式'}
    ];

}