import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

// import { Model } from '../../model/data-model'
// import { ModelDataService } from './model-data.service'
import { Model } from '../../model/data-model';
import { ModelDataService } from '../../service/model-data.service';
import { MatPaginatorIntl} from '@angular/material';
import { MatPaginatorIntlCro } from '../../service/mat-paginator-intl';
import { DataManageService } from '../../service/data-manage.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'man-model-list',
    templateUrl: '../../view/man-model-list.component.html',
    styleUrls: ['../../css/sys-management.component.css'],
    providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro}]
})
export class ManModelListComponent implements OnInit {
    displayedColumns = ['model_standard_name', 'remark', 'registrant'];
    // models: Array<Object> = [];
    modelData: Array<Object> = [];
    dataSource = new MatTableDataSource();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    isLoading = false;
    selectedModel: Model;
    showAdd: false;

    constructor(
        private modelDataService: ModelDataService,
        private dataMangerService: DataManageService
    ) { }

    ngOnInit() {
        this.getModels();
        this.dataSource = new MatTableDataSource<Object>(this.modelData);
    }
    getModels() {
        this.isLoading = true;
        this.dataMangerService.getModules().then(responseData => {
            console.log(responseData);
            this.modelData = responseData;
            this.dataSource = new MatTableDataSource<Object>(this.modelData);
            this.isLoading = false;
            this.selectedModel = undefined;
            this.dataSource.paginator = this.paginator;
            // console.log("afterngInit");
        });
        // this.isLoading = true;
        // this.models = this.modelDataService.getModelsData()
        //     // Todo: error handling
        //     .finally(() => {
        //         this.isLoading = false;
        //         this.selectedModel = undefined;
        //         this.dataSource.paginator = this.paginator;
        //     });
        // this.modelData = [];
        // this.models.forEach(models => {
        //     models.forEach(model => {
        //         this.modelData.push(model);
        //     });
        // });
    }
    select(model: Model) { this.selectedModel = model; }
}
