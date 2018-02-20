import {Component,OnInit} from '@angular/core'
import { Template } from '../../model/data-model'
import { ModelDataService } from './model-data.service'
import { Observable }        from 'rxjs/Observable';

@Component({
    selector: 'man-template-list',
    templateUrl: '../../view/man-template-list.component.html',
    styleUrls: ['../../css/man-template-list.component.css']
})
export class ManTemplateListComponent implements OnInit{
    templates: Observable<Template[]>;
    isLoading = false;
    selectedTemplate: Template;

    constructor(private modelDataService: ModelDataService) { }
  
    ngOnInit() { this.getTemplates(); }

    getTemplates() {
        this.isLoading = true;
        this.templates = this.modelDataService.getTemplateData()
                          // Todo: error handling
                          .finally(() => this.isLoading = false);
        this.selectedTemplate = undefined;
    }

    select(template: Template) { this.selectedTemplate = template; }
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