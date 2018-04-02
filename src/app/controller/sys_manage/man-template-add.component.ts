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
import { Model, Template, DataTable, model_list_local, DataArray, space_template } from '../../model/data-model';
import { DataManageService } from '../../service/data-manage.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-template-add',
    templateUrl: '../../view/man-template-add.component.html',
    styleUrls: ['../../css/sys-management.component.css']
})
export class ManTemplateAddComponent implements OnChanges, OnInit {

    template = space_template;
    tempForm: FormGroup;
    modelListForm: FormArray;
    // modelsForm: {[key: string]: Model[]}
    model_list_local : Observable<string[]>;
    // model_list_local = model_list_local;
    selected = '试剂准备';

    ngOnInit(): void {
        // this.expParameterSerivce.getExpParameter().then(responseData => {
        //     this.expParameterData = responseData;
        //     this.expParameterList = this.expParameterSerivce.convertParameterList(this.expParameterData);
        //     this.isLoading = false;
        // });
        this.ngOnChanges();
        this.model_list_local = this.modelDataService.getModelsName()
            .finally(() => {
                this.ngOnChanges();
            });
    }

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
        });
        this.modelListForm = this.fb.array([]);
    }

    ngOnChanges(): void {
        this.tempForm.reset({
            whole_name: this.template.whole_name,
            // model_list: this.template.model_list,
        });
        this.setComposition(this.template.model_list);
        // console.log(this.tempForm);
    }

    // 提交表单
    onSubmit() {
        this.template = this.prepareSaveTemplateList();
        this.modelDataService.addTemplateData(this.template).subscribe(/* error handing */);
        this.ngOnChanges();
        console.log('submit');
    }
    // 重置内容
    revert() {
        // console.log(this.template.model_list);
        this.ngOnChanges();
    }

    get model_list_form(): FormArray {
        return this.tempForm.get('model_list') as FormArray;
    }

    deleteListItem(i: number) {
        this.model_list_form.removeAt(i);
    }

    addListItem() {
        this.model_list_form.push(this.fb.control(''));
    }

    setComposition(composition: Array<String>) {
        const modelListFormArray = this.fb.array(composition);
        this.tempForm.setControl('model_list', modelListFormArray);
        // console.log(this.tempForm);
    }
    //选择模块后，添加对应模块内容至表单
    setModelsOfTemplate (model_list: any[]) {
        // models: {[key: string]: Model[]}
        
        // const modelFGs: FormGroup[] = [];
        // for (const model_name of model_list) {
        //     this.modelDataService.getModelOfTemplate(model_name);
        // }
        // const modelsFormArray = this.fb.array(modelFGs);
        // this.tempForm.setControl("models", modelsFormArray);
    }
    // addModelToTemplateForm (model_list: any[]){
    // }
    // previewTemplate() { }
    prepareSaveTemplateList(): Template {
        const formTemp = this.tempForm.value;
        const saveTemplate: Template = {
            template_id: this.template.template_id,
            whole_name: formTemp.whole_name,
            model_list: formTemp.model_list as string[],
            models: this.template.models,
        };
        // console.log(saveTemplate);
        return saveTemplate;
    }
}
