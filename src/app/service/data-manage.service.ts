// tslint:disable-next-line:eofline
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { baseUrl } from '../globals';

import 'rxjs/add/operator/toPromise';

// 从服务器获取模板数据, 采用Promise异步

@Injectable()
export class DataManageService {
    private getDataUrl = baseUrl + '/operationFlowById'; // 服务器地址
    private getModuleUrl = baseUrl + '/module/'; // 获取模板 Api

    constructor(private http: Http) { }

    getOperationFlow(id: number): Promise<String> {
        const url = `${this.getDataUrl}`;
        return this.http.post(url, { 'id': id })
            .toPromise()
            .then(response => response.json().json as String)
            .catch(this.handleError);
    }

    // 获取服务器模块列表
    getModules(): Promise<Array<Object>> {
        const url = `${this.getModuleUrl}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Array<Object>)
            .catch(this.handleError);
    }

    // 保存服务器模块列表
    saveModules(name: string, registrant: string, state: Number, remark: string, json: string): Promise<Array<Object>> {
        const url = `${this.getModuleUrl}`;
        // tslint:disable-next-line:max-line-length
        return this.http.post(url, { 'name': name, 'registrant': registrant, 'state': state, 'moduletype': 0, 'remark': remark, 'json': json })
            .toPromise()
            .then(response => response.json() as Array<Object>)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
