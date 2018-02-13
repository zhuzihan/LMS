import { Component, Input, OnChanges } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { BlockDataService } from './block-data.service';
import { Block, Field, source } from '../../model/data-model'

@Component({
    selector: 'man-block',
    templateUrl: '../../view/man-block.component.html',
    styleUrls: ['../../css/man-block.component.css']
})
export class ManBlockComponent implements OnChanges{
    @Input() block : Block;
    blockForm: FormGroup;
    blocks : Block[];
    fields : Field[];
    source = source;
    // name = new FormControl();
    //nameChangeLog: string[] = [];

    constructor(
        private fb: FormBuilder,
        private blockDataService: BlockDataService) {

        this.createForm();
    }
    ngOnChanges() {
        this.blockForm.reset({
            name: this.block.name
            // field: this.block.field[0] || new Field()
        });
        this.setFields(this.block.fields);
    }
    // ngOnInit(): void {
    //     this.getBlock();
    // }
    createForm() {
        this.blockForm = this.fb.group({
            name: ['', Validators.required ],
            description: '',
            fields_form: this.fb.array([]),
            sidekick: ''
        });
    }
    setFields(fields: Field[]) {
        const fieldFGs = fields.map(fields => this.fb.group(fields));
        const fieldFormArray = this.fb.array(fieldFGs);
        this.blockForm.setControl('fields_form', fieldFormArray);
    }
    get fields_form(): FormArray {
        return this.blockForm.get('fields_form') as FormArray;
    }
    //添加记录
    addField() {
        this.fields_form.push(this.fb.group(new Field()));
    }
    //删除记录
    removeField(i : number) {
        this.fields_form.removeAt(i);
    }
    //提交表单
    onSubmit() {
        console.log("onsubmit1");
        this.block = this.prepareSaveBlock();
        //debug
        console.log(this.block);
        this.blockDataService.updateBlockData(this.block).subscribe(/* error handing */);
        this.ngOnChanges();
    }
    prepareSaveBlock(): Block {
        const formModel = this.blockForm.value;

        //deep copy of fields_form
        const fieldFormDeepCopy: Field[] = formModel.fields_form.map(
            (field: Field) => Object.assign({}, field)
        );

        //return new 'Field' object containing a combination of original block value
        //and deep copies of changed form model values
        const saveBlock: Block = {
            id: this.block.id,
            name: formModel.name as string,
            description: formModel.description as string,
            fields: fieldFormDeepCopy
        };
        return saveBlock;
    }
    //监视更改
    revert() { this.ngOnChanges(); }

    // logNameChange() {
    //   const nameControl = this.heroForm.get('name');
    //   nameControl.valueChanges.forEach(
    //     (value: string) => this.nameChangeLog.push(value)
    //   );
    // }


    // constructor(private blockDataService:BlockDataService) {}
    // getBlock(): void {
    //     this.blocks = this.blockDataService.getBlockData();
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

// export class CdkTableBasicExample {
//   displayedColumns = ['userId', 'userName', 'progress', 'color'];
//   exampleDatabase = new ExampleDatabase();
//   dataSource: ExampleDataSource | null;

//   ngOnInit() {
//     this.dataSource = new ExampleDataSource(this.exampleDatabase);
//   }
// }

// /** Constants used to fill up our data base. */
// const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
//   'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
// const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
//   'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
//   'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }

// export class ExampleDatabase {
//   /** Stream that emits whenever the data has been modified. */
//   dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
//   get data(): UserData[] { return this.dataChange.value; }

//   constructor() {
//     // Fill up the database with 100 users.
//     for (let i = 0; i < 100; i++) { this.addUser(); }
//   }

//   /** Adds a new user to the database. */
//   addUser() {
//     const copiedData = this.data.slice();
//     copiedData.push(this.createNewUser());
//     this.dataChange.next(copiedData);
//   }

//   /** Builds and returns a new User. */
//   private createNewUser() {
//     const name =
//         NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//         NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//     return {
//       id: (this.data.length + 1).toString(),
//       name: name,
//       progress: Math.round(Math.random() * 100).toString(),
//       color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//     };
//   }
// }

// export class ExampleDataSource extends DataSource<any> {
//   constructor(private _exampleDatabase: ExampleDatabase) {
//     super();
//   }

//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   connect(): Observable<UserData[]> {
//     return this._exampleDatabase.dataChange;
//   }

//   disconnect() {}
// }
