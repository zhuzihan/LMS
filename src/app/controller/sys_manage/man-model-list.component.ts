import { Component, OnInit, ViewChild } from '@angular/core';
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
    styleUrls: ['../../css/sys-management.component.css']
})
export class ManModelListComponent implements OnInit {
    displayedColumns = ['model_standard_name', 'has_table', 'has_array'];
    models: Observable<Model[]>;
    modelData: Array<Object> = [];
    dataSource = new MatTableDataSource();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    isLoading = false;
    selectedModel: Model;
    showAdd: false;

    constructor(private modelDataService: ModelDataService) { }

    ngOnInit() { 
        this.getModels();
        this.dataSource = new MatTableDataSource<Object>(this.modelData);
    }
    getModels() {
        this.isLoading = true;
        this.models = this.modelDataService.getModelsData()
            // Todo: error handling
            .finally(() => {
                this.isLoading = false;
                this.selectedModel = undefined;
                this.dataSource.paginator = this.paginator;
            });
        this.modelData = [];
        this.models.forEach(models => {
            models.forEach(model => {
                this.modelData.push(model);
            })
        });
    }
    select(model: Model) { this.selectedModel = model; }
}
