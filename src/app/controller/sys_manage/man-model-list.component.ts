import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

// import { Model } from '../../model/data-model'
// import { ModelDataService } from './model-data.service'
import { Model } from '../../model/data-model'
import { ModelDataService } from './model-data.service'

@Component({
    selector: 'man-model-list',
    templateUrl: '../../view/man-model-list.component.html',
    styleUrls: ['../../css/man-model-list.component.css']
})
export class ManModelListComponent implements OnInit {
    models: Observable<Model[]>;
    isLoading = false;
    selectedModel: Model;

  
    constructor(private modelDataService: ModelDataService) { }
  
    ngOnInit() { this.getModels(); }
  
    getModels() {
      this.isLoading = true;
      this.models = this.modelDataService.getModelData()
                        // Todo: error handling
                        .finally(() => this.isLoading = false);
      this.selectedModel = undefined;
    }
  
    select(model: Model) { this.selectedModel = model; }
}
  