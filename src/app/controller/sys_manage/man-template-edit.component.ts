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
    selector: 'man-template-edit',
    templateUrl: '../../view/man-template-edit.component.html',
    styleUrls: ['../../css/sys-management.component.css']
})
export class ManTemplateEditComponent implements OnChanges{
    ngOnChanges(): void {
        
    }
    @Input() template: Template;

    constructor(private dataManageService: DataManageService) { }

    previewTemplate() { }
}
