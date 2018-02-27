import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import { Template, Model, model_test, models_test, template_test, source } from '../../model/data-model';

@Injectable()
export class ModelDataService {
    delayMs = 500;

    // getModelData():Model[] {
    //     return block_test;
    // }
    //获取 key-value 中的 key
    getKeys(item){
        return Object.keys(item);
    }

    getModelData(): Observable<Model> {
        return of(model_test).delay(this.delayMs);
    }
    // 返回模块数组
    getModelsData(): Observable<Model[]> {
        return of(models_test).delay(this.delayMs);
    }

    getTemplateData(): Observable<Template> {
        return of(template_test).delay(this.delayMs);
    }
    // Fake server update; assume nothing can go wrong
    // updateModelData(block: Model): Observable<Model>  {
    //     const oldModelData = block_test.find(b => b.id === block.id);
    //     const newModelData = Object.assign(oldModelData, block); // Demo: mutate cached hero
    //     return of(newModelData).delay(this.delayMs); // simulate latency with delay
    // }
    updateModelData(model: Model): Observable<Model> {
        const oldModelData = model_test; // .find(m => m.model_id === model.model_id);
        const newModelData = Object.assign(oldModelData, model); // Demo: mutate cached hero
        return of(newModelData).delay(this.delayMs); // simulate latency with delay
    }
}
