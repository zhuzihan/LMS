import { Component, OnInit } from '@angular/core';
import { Template, Model, model_test, template_test, DataTable, source } from '../../model/data-model';
import { ModelDataService } from '../../service/model-data.service';
import { Observable } from 'rxjs/Observable';
import { DataManageService } from '../../service/data-manage.service';
import { ExpParameterService } from '../../service/exp-parameter.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-template-list',
    templateUrl: '../../view/man-template-list.component.html',
    styleUrls: ['../../css/man-template-list.component.css']
})
export class ManTemplateListComponent implements OnInit {
    templates: Observable<Template[]>;
    isLoading = true;
    selectedTemplate: Template;
    testTemplate: Template;
    json_str: string;
    json_data: Template;
    expParameterList: Array<Object> = [];
    expParaLoading = false;

    constructor(private dataManageService: DataManageService,
                private expParameterService: ExpParameterService,
                private modelDataService: ModelDataService,
            ) { }

    ngOnInit() {
        this.expParameterService.getExpParameter().then(responseData => {
            if (responseData.length !== this.expParameterList.length) {
                this.expParameterList = this.expParameterService.convertParameterList(responseData);
            }
            this.getTemplates();
        });
    }

    getTemplates() {
        this.isLoading = true;
        // this.dataManageService.getOperationFlow(42).then(jsonData => this.dataJson = jsonData);
        // console.log('Response Data: ', this.dataManageService.getOperationFlow(42));
        // console.log('Response Data: ', this.dataJson);
        // this.selectedTemplate = undefined;
        this.testTemplate = template_test;
        this.templates = this.modelDataService.getTemplatesData()
            .finally(() => this.isLoading = false);
        // console.log(this.testTemplate['models']);
        // for (const keys of Object.keys(template_test)) {
        //     console.log(keys);
        // }
        this.json_str = JSON.stringify(this.testTemplate);
        this.json_data = JSON.parse(this.json_str);
        for (const model_key of Object.keys(this.json_data.models)) {
            this.fillCellValue(this.json_data.models[model_key]);
        }
        // console.log(this.json_data['models']['model.1']['table']['cells']);
    }

    select(template: Template) { this.selectedTemplate = template; }
    previewTemplate() { }

    /*
     * 解析模板中的引用来源，并返回引用值
     */
    fillCellValue(model: Model) {
        const modelTable = model.table;
        for (const cell_key of Object.keys(modelTable.cells)) {
            // 数据源格式为引用
            if (modelTable.cells[cell_key].source_type === '2') {
                const source_sn = modelTable.cells[cell_key].source_sn;
                const source_value = this.fillQuoteCell(source_sn);
                if (source_value != null) {
                    modelTable.cells[cell_key].value = source_value;
                }
            }
            if (modelTable.cells[cell_key].source_type === '3') {
                const source_sn = modelTable.cells[cell_key].source_sn;
                const source_value = this.fillQuoteParameterCell(source_sn);
                if (source_value != null) {
                    console.log(source_value);
                    modelTable.cells[cell_key].source_data = source_value;
                }
            }
        }
    }

    // 填充引用的数组
    fillQuoteCell(quoteSource: String) {
        let quoteSource_str = quoteSource.toString();
        quoteSource_str = quoteSource_str.replace('}', '');
        quoteSource_str = quoteSource_str.replace('{', '');
        const source_list = quoteSource_str.split('#');
        // 解析模块内引用的数据
        if (source_list.length === 2 && source_list[0].includes('model') === true) {
            console.log('find');
            return this.json_data.models[source_list[0]].table.cells[source_list[1]].value;
        } else {
            return null;
        }
    }

    fillQuoteParameterCell(quoteSource: String) {
        let quoteSource_str = quoteSource.toString();
        quoteSource_str = quoteSource_str.replace('}', '');
        quoteSource_str = quoteSource_str.replace('{', '');
        const source_list = quoteSource_str.split('#');
        const source_list_inline = source_list[2].split('.');
        // 解析模块内引用的数据
        if (source_list.length === 3 && source_list[0].includes('expParameter') === true) {
            for (const one_parameter of this.expParameterList) {
                if (one_parameter['tableName'] === source_list[1]) {
                    for (const head_key of Object.keys(one_parameter['tableHead'])) {
                        if (one_parameter['tableHead'][head_key] === source_list_inline[0]) {
                            const source_data: Array<string> = [];
                            for (const para_dict of one_parameter['tableData']) {
                                source_data.push(para_dict[head_key]);
                            }
                            return source_data;
                        }
                    }
                }
            }
        } else {
            return null;
        }
    }

    // tiles = [
    //     {text: '硫酸：（H2SO4，密度1.84g/ml，分析纯）。', cols: 10, rows: 1},
    //     {text: '高氯酸：（HClO4,70%,分析纯）。', cols: 10, rows: 1},
    //     {text: '6mol/L盐酸：浓盐酸（HCl,分析纯）与水按1：1体积混合。', cols: 10, rows: 1},
    //     {text: '配置日期：', cols: 4, rows: 1},
    //     {text: '配置日期：', cols: 3, rows: 1},
    //     {text: '配置人：', cols: 3, rows: 1},
    //   ];
}
