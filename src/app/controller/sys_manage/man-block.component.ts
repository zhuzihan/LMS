import {Component} from '@angular/core'
import { NgForOf } from '@angular/common';

@Component({
    selector: 'man-block',
    templateUrl: '../../view/man-block.component.html',
    styleUrls: ['../../css/man-block.component.css']
})
export class ManBlockComponent {
    data_source = [
        {value: 'record', viewValue: '录入'},
        {value: 'date', viewValue: '日期'},
        {value: 'parameters_table', viewValue: '参数表'},
        {value: 'formula', viewValue: '创建公式'}
    ];
}