import { Component, Input, OnChanges } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ModelDataService } from './model-data.service';
// import { Model, Field, source } from '../../model/data-model'
import { Template, Table, source, _Array } from '../../model/data-model'

@Component({
    selector: 'man-template',
    templateUrl: '../../view/man-template.component.html',
    styleUrls: ['../../css/man-template.component.css']
})
export class ManTemplateComponent {
    @Input() template : Template;
    previewTemplate() {}
    
    // tiles = [
    //     {text: '硫酸：（H2SO4，密度1.84g/ml，分析纯）。', cols: 10, rows: 1},
    //     {text: '高氯酸：（HClO4,70%,分析纯）。', cols: 10, rows: 1},
    //     {text: '6mol/L盐酸：浓盐酸（HCl,分析纯）与水按1：1体积混合。', cols: 10, rows: 1},
    //     {text: '配置日期：', cols: 4, rows: 1},
    //     {text: '配置日期：', cols: 3, rows: 1},
    //     {text: '配置人：', cols: 3, rows: 1},
    //   ];
}