import {Component} from '@angular/core'
import { NgForOf } from '@angular/common';

@Component({
    selector: 'man-block',
    templateUrl: '../../view/man-block.component.html',
    styleUrls: ['../../css/man-block.component.css']
})
export class ManBlockComponent {
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