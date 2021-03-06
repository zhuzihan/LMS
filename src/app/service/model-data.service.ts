import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { Template, Model, DataCell, model_test, models_test, template_test, templates_test, source } from '../model/data-model';

@Injectable()
export class ModelDataService {
    delayMs = 500;

    // getModelData():Model[] {
    //     return block_test;
    // }
    // 获取 key-value 中的 key
    getKeys(item) {
        return Object.keys(item);
    }
    // 提取 cells 中的 Datacell 组合为数组
    getCells(model: Model) {
        const cells: DataCell[] = [];
        for (const cell_key of this.getKeys(model.table.cells)) {
            cells.push(model.table.cells[cell_key]);
        }
        return cells;
    }

    getModelData(): Observable<Model> {
        return of(model_test).delay(this.delayMs);
    }
    // 返回模块数组
    getModelsData(): Observable<Model[]> {
        return of(models_test).delay(this.delayMs);
    }
    getModelsName(): Observable<string[]> {
        const modelsName: string[] = [];
        for (const model of models_test) {
            modelsName.push(model.model_name);
        }
        return of(modelsName).delay(this.delayMs);
    }
    getTemplateData(): Observable<Template> {
        return of(template_test).delay(this.delayMs);
    }
    getTemplatesData(): Observable<Template[]> {
        return of(templates_test).delay(this.delayMs);
    }
    // Fake server update; assume nothing can go wrong
    // updateModelData(block: Model): Observable<Model>  {
    //     const oldModelData = block_test.find(b => b.id === block.id);
    //     const newModelData = Object.assign(oldModelData, block); // Demo: mutate cached hero
    //     return of(newModelData).delay(this.delayMs); // simulate latency with delay
    // }
    updateModelData(model: Model): Observable<Model> {
        const oldModelData = models_test.find(m => m.model_id === model.model_id);
        const newModelData = Object.assign(oldModelData, model); // Demo: mutate cached hero
        return of(newModelData).delay(this.delayMs); // simulate latency with delay
    }
    addModelData(model: Model): Observable<Model> {
        model.model_id = models_test.length + 1;
        models_test.push(model);
        return of(model).delay(this.delayMs); // simulate latency with delay
    }
    removeModelData(model: Model) {

    }
    updateTemplateData(temp: Template): Observable<Template> {
        const oldTemplateData = templates_test.find(t => t.template_id === temp.template_id);
        const newTemplateData = Object.assign(oldTemplateData, temp); // Demo: mutate cached hero
        return of(newTemplateData).delay(this.delayMs); // simulate latency with delay
    }
    addTemplateData(template: Template): Observable<Template> {
        template.template_id = this.randomString(8);
        templates_test.push(template);
        return of(template).delay(this.delayMs);
    }
    // 获得对应模块名的模块
    getModelOfTemplate(model_name: string) {
        // console.log("find");
        return models_test.find(m => m.model_name === model_name);
    }

    randomString(len: Number) {
        len = len || 32;
        const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678@#$%&';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        const maxPos = $chars.length;
        let pwd = '';
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }
}
