import { Component, Input, OnChanges } from '@angular/core';
// import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForOf, NgSwitch } from '@angular/common';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ModelDataService } from '../../service/model-data.service';
// import { Model, Field, source } from '../../model/data-model'
import { Model } from '../../model/data-model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-model-preview',
    templateUrl: '../../view/sys-manage/man-model-preview.component.html',
    styleUrls: ['../../css/sys-management.component.css']
})
export class ManModelPreviewComponent {
    @Input() model: Model;
    // previewTemplate() { }
    constructor(private modelDataService: ModelDataService) { }

    getKeys(item) {
        return this.modelDataService.getKeys(item);
    }
}
