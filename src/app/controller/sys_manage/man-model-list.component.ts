import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

// import { Model } from '../../model/data-model'
// import { ModelDataService } from './model-data.service'
import { Model } from '../../model/data-model';
import { ModelDataService } from '../../service/model-data.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-model-list',
    templateUrl: '../../view/man-model-list.component.html',
    // styleUrls: ['../../css/sys-management.component.css']
})
export class ManModelListComponent implements OnInit {
    displayedColumns = ['model_standard_name', 'has_table', 'has_array'];
    models: Observable<Model[]>;
    dataSource = new MatTableDataSource();

    isLoading = false;
    selectedModel: Model;
    showAdd: false;

    constructor(private modelDataService: ModelDataService) { }

    ngOnInit() { 
        this.getModels(); 
    }

    getModels() {
        this.isLoading = true;
        this.models = this.modelDataService.getModelsData()
            // Todo: error handling
            .finally(() => {
                // this.dataSource = new MatTableDataSource<Object>(this.models);
                this.isLoading = false;
                this.selectedModel = undefined;
            });
        //   console.log(this.modelDataService.getModelData());
        // console.log(this.isLoading);
    }

    select(model: Model) { this.selectedModel = model; }
}
