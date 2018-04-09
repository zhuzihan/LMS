import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

// import { Model } from '../../model/data-model'
// import { ModelDataService } from './model-data.service'
import { Model } from '../../model/data-model';
import { ModelDataService } from '../../service/model-data.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-model-detail',
    templateUrl: '../../view/sys-manage/man-model-detail.component.html',
    styleUrls: ['../../css/sys-management.component.css']
})
export class ManModelDetailComponent implements OnInit {
    // models: Observable<Model[]>;
    // isLoading = false;
    // selectedModel: Model;
    // showAdd: false;

    // constructor(private modelDataService: ModelDataService) { }

    ngOnInit() {
        // this.getModels();
    }

    // getModels() {
    //     this.isLoading = true;
    //     this.models = this.modelDataService.getModelsData()
    //         // Todo: error handling
    //         .finally(() => this.isLoading = false);
    //     this.selectedModel = undefined;
    //     //   console.log(this.modelDataService.getModelData());
    //     console.log(this.isLoading);
    // }

    // select(model: Model) { this.selectedModel = model; }
}
