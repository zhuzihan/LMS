import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ModelDataService } from './model-data.service';
// import { Model, Field, source } from '../../model/data-model'
import { Model, DataTable, source, DataArray } from '../../model/data-model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-model-preview',
    templateUrl: '../../view/man-model-preview.component.html',
    styleUrls: ['../../css/man-model-preview.component.css']
})
export class ManModelPreviewComponent {
    @Input() model: Model;
    previewTemplate() { }

    // getTable() {
    //     this.template.models[0].tables
    // }
    getKeys(item){
        return Object.keys(item);
    }
}
