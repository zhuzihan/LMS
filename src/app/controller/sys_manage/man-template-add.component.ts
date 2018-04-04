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
import { Model, Template, DataTable, DataArray, space_template } from '../../model/data-model';
import { DataManageService } from '../../service/data-manage.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-template-add',
    templateUrl: '../../view/man-template-add.component.html',
    styleUrls: ['../../css/sys-management.component.css']
})
export class ManTemplateAddComponent implements OnChanges, OnInit {
    modelsData: Model[];
    models: Observable<Model[]>;
    template = space_template;
    tempForm: FormGroup;
    // modelsForm: FormArray;
    // modelsName: Observable<string[]>;
    // model_list_local : string[];
    // model_list_local = model_list_local;
    selected = '试剂准备';

    ngOnInit(): void {
        // this.expParameterSerivce.getExpParameter().then(responseData => {
        //     this.expParameterData = responseData;
        //     this.expParameterList = this.expParameterSerivce.convertParameterList(this.expParameterData);
        //     this.isLoading = false;
        // });
        this.ngOnChanges();
        // console.log("init");
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
        // this.modelsName = this.modelDataService.getModelsName()
        //     .finally(() => {
        //         // console.log("finally");
        //         // console.log(this.model_list_local);
        //     });
        // this.model_list_local = [];
        // this.modelsName.forEach(modelsName => {
        //     modelsName.forEach(modelName => {
        //         this.model_list_local.push(modelName);
        //     })
        // });
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
        // this.modelListForm = this.fb.array([]);
        // this.modelsForm = this.fb.array([]);

        this.tempForm.setControl('model_list', this.fb.array([""]));
        this.tempForm.setControl('models', this.fb.array([]));
    }

    ngOnChanges(): void {
        this.tempForm.reset({
            whole_name: this.template.whole_name,
            // model_list: this.template.model_list,
        });
        this.tempForm.setControl('model_list', this.fb.array(['']));
        this.tempForm.setControl('models', this.fb.array([]));
        // this.setComposition(this.template.model_list);
        // console.log(this.tempForm);
    }

    // 提交表单
    onSubmit() {
        this.template = this.prepareSaveTemplateList();
        this.modelDataService.addTemplateData(this.template).subscribe(/* error handing */);
        this.ngOnChanges();
        console.log('submit');
        // console.log(this.template);
    }
    // 重置内容
    revert() {
        // console.log(this.template.model_list);
        this.ngOnChanges();
    }

    get modelListForm(): FormArray {
        return this.tempForm.get('model_list') as FormArray;
    }
    get modelsForm(): FormArray {
        return this.tempForm.get('models') as FormArray;
    }
    deleteListItem(i: number) {
        this.modelListForm.removeAt(i);
    }

    addListItem() {
        this.modelListForm.push(this.fb.control(''));
    }

    // setComposition(composition: Array<String>) {
    //     const modelListFormArray = this.fb.array(composition);
    //     this.tempForm.setControl('model_list', modelListFormArray);
    // }

    setModelsOfTemplate() {
        const modelFGs: FormGroup[] = [];
        if (!this.modelListForm.pristine) {
            for (const model_name of this.modelListForm.value) {
                modelFGs.push(this.fb.group(this.modelDataService.getModelOfTemplate(model_name)));
            }
            const modelsFormArray = this.fb.array(modelFGs);
            this.tempForm.setControl('models', modelsFormArray);
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
            models: this.template.models,
        };
        // console.log(saveTemplate);
        return saveTemplate;
    }
    getKeys(item) {
        return this.modelDataService.getKeys(item);
    }
}
