import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
// import { Template, Model, model_test, models_test, template_test, source } from '../../model/data-model';
import { Template, Model, form_model_test } from '../../model/form-data-model';
@Injectable()
export class FormModelDataService {
    delayMs = 500;
    //获取 key-value 中的 key
    
    getKeys(item) {
        return Object.keys(item);
    }

    getModelsData(): Observable<Model[]> {
        return of(form_model_test).delay(this.delayMs);
    }

    updateModelData(model: Model): Observable<Model> {
        const oldModelData = form_model_test; // .find(m => m.model_id === model.model_id);
        const newModelData = Object.assign(oldModelData, model); // Demo: mutate cached hero
        return of(newModelData).delay(this.delayMs); // simulate latency with delay
    }
}
