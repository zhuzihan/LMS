import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ModelDataService } from '../../service/model-data.service';
// import { Model, Field, source } from '../../model/data-model'
import { Template, DataTable, source, DataArray } from '../../model/data-model';
import { DataManageService } from '../../service/data-manage.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-template-composition',
    templateUrl: '../../view/man-template-composition.component.html',
    styleUrls: ['../../css/sys-management.component.css']
})
export class ManTemplateCompositionComponent implements OnChanges, OnInit {
    ngOnInit(): void {
        // this.expParameterSerivce.getExpParameter().then(responseData => {
        //     this.expParameterData = responseData;
        //     this.expParameterList = this.expParameterSerivce.convertParameterList(this.expParameterData);
        //     this.isLoading = false;
        // });
    }
    @Input() template: Template;
    tempForm: FormGroup;


    constructor(
        // private dataManageService: DataManageService,
        private fb: FormBuilder,
        private modelDataService: ModelDataService,
        // private expParameterSerivce: ExpParameterService,
    ) {
        this.createForm();
    }

    createForm() {
        this.tempForm = this.fb.group({
            whole_name: '',
            model_list: this.fb.array([
                // new FormControl('Drew'),
            ]),
        })
    }

    ngOnChanges(): void {
        this.tempForm.reset({
            whole_name: this.template.whole_name,
            model_list: this.template.model_list,
        })
        this.setComposition(this.template.model_list);
        console.log(this.tempForm);
    }

    // 提交表单
    onSubmit() {
        // console.log("onsubmit1");
        // this.model = this.prepareSaveModel();
        // debug
        // console.log(this.model);
        // this.modelDataService.updateModelData(this.model).subscribe(/* error handing */);
        // this.ngOnChanges();
    }
    // 重置内容
    revert() { 
        // this.model_list.reset();
        this.ngOnChanges(); 
    }

    get model_list(): FormArray {
        return this.tempForm.get('model_list') as FormArray;
    };

    deleteListItem(i: number) {
        this.model_list.removeAt(i);
    }

    addListItem() { this.model_list.push(new FormControl()); }

    setComposition(composition: Array<String>) {
        // this.model_list.reset([]);
        // this.model_list
        const len = this.model_list.length;
        let temp_count = 0;
        do{
            this.model_list.removeAt(temp_count);
            temp_count ++;
        }while(temp_count<temp_count);
        this.model_list.removeAt(0);
        for (const item of composition) {
            this.model_list.push(this.fb.control(item));
        }
    }
    previewTemplate() { }
}
