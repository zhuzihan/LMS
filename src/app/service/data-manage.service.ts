// tslint:disable-next-line:eofline
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { baseUrl } from '../globals';

import 'rxjs/add/operator/toPromise';

// 获取模板数据

@Injectable()
export class DataManageService {
    private getDataUrl = baseUrl + '/operationFlowById'; // 服务器地址

    constructor(private http: Http) { }

    getOperationFlow(id: number): Promise<String> {
        const url = `${this.getDataUrl}`;
        return this.http.post(url, { 'id': id })
                        .toPromise()
                        .then(response => response.json().json as String)
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
