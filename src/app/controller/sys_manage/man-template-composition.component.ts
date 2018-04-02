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
import { Template, DataTable, DataArray, model_list_local, Model } from '../../model/data-model';
import { DataManageService } from '../../service/data-manage.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-template-composition',
    templateUrl: '../../view/man-template-composition.component.html',
    styleUrls: ['../../css/sys-management.component.css']
})
export class ManTemplateCompositionComponent implements OnChanges, OnInit {
    @Input()template: Template;
    modelsData: Model[];
    models: Observable<Model[]>;
    tempForm: FormGroup;
    // model_list_local = model_list_local;
    selected = '试剂准备';

    ngOnInit(): void {
        // this.expParameterSerivce.getExpParameter().then(responseData => {
        //     this.expParameterData = responseData;
        //     this.expParameterList = this.expParameterSerivce.convertParameterList(this.expParameterData);
        //     this.isLoading = false;
        // });
        this.models = this.modelDataService.getModelsData()
        // Todo: error handling
        .finally(() => {
            // this.isLoading = false;
            // this.selectedModel = undefined;
        });
        this.modelsData = [];
        this.models.forEach(models => {
            models.forEach(model => {
                this.modelsData.push(model);
            });
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
            // model_list: this.fb.array([
            // new FormControl('Drew'),
            // ]),
        });
        // this.modelListForm = this.fb.array([]);
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
        this.setModelsOfTemplate();
        this.template = this.prepareSaveTemplateList();
        this.modelDataService.updateTemplateData(this.template).subscribe(/* error handing */);
        this.ngOnChanges();
        console.log('submit');
    }
    // 重置内容
    revert() {
        // console.log(this.template.model_list);
        this.ngOnChanges();
    }

    get modelListForm(): FormArray {
        return this.tempForm.get('model_list') as FormArray;
    }

    deleteListItem(i: number) {
        this.modelListForm.removeAt(i);
        // this.setComposition(this.template.model_list);
        // this.tempForm.pristine = true;
    }

    addListItem() {
        this.modelListForm.push(this.fb.control(''));
    }

    setComposition(composition: Array<String>) {
        const modelListFormArray = this.fb.array(composition);
        this.tempForm.setControl('model_list', modelListFormArray);
    }

    setModelsOfTemplate () {
        const modelFGs: FormGroup[] = [];
        if(!this.modelListForm.pristine){
            for(const model_name of this.modelListForm.value){
                modelFGs.push(this.fb.group(this.modelDataService.getModelOfTemplate(model_name)));
            }
            const modelsFormArray = this.fb.array(modelFGs);
            this.tempForm.setControl("models", modelsFormArray);
            // console.log(this.modelsForm);
        }
    }

    // previewTemplate() { }
    prepareSaveTemplateList(): Template {
        const formTemp = this.tempForm.value;
        const saveTemplate: Template = {
            template_id: this.template.template_id,
            whole_name: formTemp.whole_name,
            model_list: formTemp.model_list as string[],
            models: formTemp.models,
        };
        // console.log(saveTemplate);
        return saveTemplate;
    }
}
