import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ModelDataService } from '../../service/model-data.service';
// import { Model, DataCell } from '../../model/form-data-model';
import { Model, DataTable, DataCell, source, DataArray } from '../../model/data-model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-model',
    templateUrl: '../../view/man-model.component.html',
    styleUrls: ['../../css/man-model.component.css']
})
export class ManModelComponent implements OnChanges {
    @Input() model: Model;
    modelForm: FormGroup;
    // source = source;

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
            // model_id: 0,
            // model_name: ['', Validators.required],
            model_standard_name: '',
            has_table: 1,
            has_array: -1,
            // tables_form: this.fb.array([]),
            cells_form: this.fb.array([]),
            // arrays_form: this.fb.array([]),
        });
    }
    ngOnChanges() {
        this.modelForm.reset({
            // model_id: this.model.model_id,
            // model_name: this.model.model_name,
            model_standard_name: this.model.model_standard_name,
            has_table: this.model.has_table,
            has_array: this.model.has_array,
            // field: this.model.field[0] || new Field()
        });
        this.setCells(this.model);
        // this.setTables(this.model.tables);
        // this.setArrays(this.model.arrays);
    }
    setCells(model: Model) {
        const cells = this.modelDataService.getCells(model);
        const cellFGs = cells.map(cells => this.fb.group(cells));
        const cellFormArray = this.fb.array(cellFGs);
        this.modelForm.setControl('cells_form', cellFormArray);
    }
    // setTables(tables: DataTable[]) {
    //     const tableFGs = tables.map(tables => this.fb.group(tables));
    //     const tableFormArray = this.fb.array(tableFGs);
    //     this.modelForm.setControl('tables_form', tableFormArray);
    // }

    // setArrays(arrays: DataArray[]) {
    //     const arrayFGs = arrays.map(arrays => this.fb.group(arrays));
    //     const arrayFormArray = this.fb.array(arrayFGs);
    //     this.modelForm.setControl('arrays_form', arrayFormArray);
    // }
    // 获取数组
    get cells_form(): FormArray {
        return this.modelForm.get('cells_form') as FormArray;
    }
    // get tables_form(): FormArray {
    //     return this.modelForm.get('tables_form') as FormArray;
    // }
    // get arrays_form(): FormArray {
    //     return this.modelForm.get('arrays_form') as FormArray;
    // }

    // 添加记录
    addCell() {
        this.cells_form.push(this.fb.group(new DataCell()));
    }
    // addTable(row: string, col: string) {
    //     this.tables_form.push(this.fb.group(new DataTable(row, col)));
    // }
    // addArray(row: string, col: string) {
    //     this.arrays_form.push(this.fb.group(new DataArray(row, col)));
    // }

    // 删除单元
    removeCell(i: number) {
        this.cells_form.removeAt(i);
    }
    // 删除列表
    // removeTable(i: number) {
    //     this.tables_form.removeAt(i);
    // }
    // 删除数组
    // removeArray(i: number) {
    //     this.arrays_form.removeAt(i);
    // }
    // 提交表单
    onSubmit() {
        // console.log("onsubmit1");
        // this.model = this.prepareSaveModel();
        // debug
        // console.log(this.model);
        this.modelDataService.updateModelData(this.model).subscribe(/* error handing */);
        this.ngOnChanges();
    }
    // prepareSaveModel(): Model {
    //     const formModel = this.modelForm.value;
    //     //deep copy of cells_form
    //     const cellFormDeepCopy: DataCell[] = formModel.cells_form.map(
    //         (cell: DataCell) => Object.assign({}, cell)
    //     );
    //     // deep copy of tables_form
    //     // const tableFormDeepCopy: Table[] = formModel.tables_form.map(
    //     //     (table: Table) => Object.assign({}, table)
    //     // );
    //     // deep copy of arrays_form
    //     // const arrayFormDeepCopy: _Array[] = formModel.fields_form.map(
    //     //     (array: _Array) => Object.assign({}, array)
    //     // );

    //     // return new 'Field' object containing a combination of original model value
    //     // and deep copies of changed form model values
    //     const saveModel: Model = {
    //         model_id: this.model.model_id,
    //         model_name: formModel.model_name as string,
    //         model_standard_name: formModel.model_standard_name as string,
    //         has_table: formModel.has_table,
    //         has_array: formModel.has_array,
    //         cells: cellFormDeepCopy,
    //         // array_list: this.model.array_list,
    //         // arrays: arrayFormDeepCopy,
    //     };
    //     return saveModel;
    // }
    // 监视更改
    // revert() { this.ngOnChanges(); }

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

