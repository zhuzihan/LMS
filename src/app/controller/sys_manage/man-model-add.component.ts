import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { FormModelDataService } from './form-model-data.service';
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

    constructor(
        private fb: FormBuilder,
        private modelDataService: FormModelDataService) {
        this.createForm();
        this.setCells(this.model.cells);
    }
    // ngOnInit(): void {
    // }
    createForm() {
        this.modelForm = this.fb.group({
            // model_id: 0,
            // model_name: ['', Validators.required],
            model_standard_name: "",
            has_table: 1,
            has_array: -1,
            // tables_form: this.fb.array([]),
            cells_form: this.fb.array([
                {
                    name: new FormControl()
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

    }
    setCells(cells: DataCell[]) {
        const cellFGs = cells.map(cells => this.fb.group(cells));
        const cellFormArray = this.fb.array(cellFGs);
        this.modelForm.setControl('cells_form', cellFormArray);
    }
    //获取数组
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
        //deep copy of cells_form
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

