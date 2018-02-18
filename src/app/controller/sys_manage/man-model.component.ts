import { Component, Input, OnChanges } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ModelDataService } from './model-data.service';
// import { Model, Field, source } from '../../model/data-model'
import { Model, Table, source, _Array } from '../../model/data-model'

@Component({
    selector: 'man-model',
    templateUrl: '../../view/man-model.component.html',
    styleUrls: ['../../css/man-model.component.css']
})
export class ManModelComponent implements OnChanges{
    @Input() model : Model;
    modelForm: FormGroup;
    source = source;
    // models : Model[];
    // fields : Field[];

    // tables : Table[];
    // arrays : _Array[];
    // cell_list: cell[];
    // rows: row[];

    // name = new FormControl();
    //nameChangeLog: string[] = [];
    tiles = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      ];
    
    constructor(
        private fb: FormBuilder,
        private modelDataService: ModelDataService) {

        this.createForm();
    }
    // ngOnInit(): void {
    //     this.getModel();
    // }
    createForm() {
        this.modelForm = this.fb.group({
            model_id: 0,
            model_name: ['', Validators.required ],
            // description: '',
            // fields_form: this.fb.array([]),
            has_table : 1,
            has_array : 1,
            tables_form: this.fb.array([]),
            arrays_form: this.fb.array([]),
            // tablesForm: this.fb.group({
            //     cell_list_form: this.fb.array([]),
            //     rows_form: this.fb.array([]),
            // }),
            // array_list : [],
            // arrays_form: this.fb.group({
            //     array_form: this.fb.array([]),
                // array_col: 1,
                // array_row: 1,
                // col_list_form: this.fb.group({
                //     cell_list_form: this.fb.array([]),
                //     rows_form : this.fb.array([]),
                // })
            // }),
        });
    }
    ngOnChanges() {
        this.modelForm.reset({
            model_id: this.model.model_id,
            model_name: this.model.model_name,
            has_table: this.model.has_table,
            has_array: this.model.has_array,
            // field: this.model.field[0] || new Field()
        });
        // this.setFields(this.model.fields);
        this.setTables(this.model.tables);
        this.setArrays(this.model.arrays);
    }
    // setFields(fields: Field[]) {
    //     const fieldFGs = fields.map(fields => this.fb.group(fields));
    //     const fieldFormArray = this.fb.array(fieldFGs);
    //     this.modelForm.setControl('fields_form', fieldFormArray);
    // }
    setTables(tables: Table[]) {
        const tableFGs = tables.map(tables => this.fb.group(tables));
        const tableFormArray = this.fb.array(tableFGs);
        this.modelForm.setControl('tables_form', tableFormArray);
    }
    // setCellList(cell: cell[]) {
    //     const cellFGs = cell.map(cell => this.fb.group(cell));
    //     const cellFormArray = this.fb.array(cellFGs);
    //     this.tablesForm.setControl('cell_form', cellFormArray);  
    //     this.modelForm.
    // }
    setArrays(arrays: _Array[]) {
        const arrayFGs = arrays.map(arrays => this.fb.group(arrays));
        const arrayFormArray = this.fb.array(arrayFGs);
        this.modelForm.setControl('arrays_form', arrayFormArray);
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
    addTable(row : string,col :string) {
        this.tables_form.push(this.fb.group(new Table(row,col)));
    }
    addArray(row : string,col :string) {
        this.arrays_form.push(this.fb.group(new _Array(row,col)));
    }

    //删除记录
    // removeField(i : number) {
    //     this.fields_form.removeAt(i);
    // }
    //删除列表
    removeTable(i : number) {
        this.tables_form.removeAt(i);
    }
    删除数组
    removeArray(i : number) {
        this.arrays_form.removeAt(i);
    }
    //提交表单
    onSubmit() {
        // console.log("onsubmit1");
        this.model = this.prepareSaveModel();
        //debug
        // console.log(this.model);
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
        const tableFormDeepCopy: Table[] = formModel.tables_form.map(
            (table: Table) => Object.assign({}, table)
        );
        const arrayFormDeepCopy: _Array[] = formModel.array_form.map(
            (array: _Array) => Object.assign({}, array)
        );
        //deep copy of arrays_form
        // const arrayFormDeepCopy: _Array[] = formModel.fields_form.map(
        //     (array: _Array) => Object.assign({}, array)
        // );

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
            model_name: formModel.model_name as string,
            has_table: formModel.has_table,
            has_array: formModel.has_array,
            tables: tableFormDeepCopy,
            // array_list: this.model.array_list,
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
}