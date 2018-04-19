// tslint:disable-next-line:eofline
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { baseUrl } from '../globals';
import 'rxjs/add/operator/toPromise';

// 从服务器获取模板数据, 采用Promise异步

@Injectable()
export class DataManageService {
    private getDataUrl = baseUrl + '/operationFlowById'; // 服务器地址
    private getModuleUrl = baseUrl + '/module/'; // 获取模块 Api
    private getTemplateUrl = baseUrl + '/operationFlow/'; // 获取模板 Api

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
        const post_data = { 'name': name, 'registrant': registrant, 'state': state, 'moduletype': 0, 'remark': remark, 'json': json };
        return this.http.post(url, post_data)
            .toPromise()
            .then(response => response.json() as Array<Object>)
            .catch(this.handleError);
    }

    // 从服务器获取模板列表
    getTemplates(): Promise<Array<Object>> {
        const url = `${this.getTemplateUrl}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Array<Object>)
            .catch(this.handleError);
    }

    // 保存模板到服务器
    // tslint:disable-next-line:max-line-length
    saveTemplates(name: string, registrant: string, instructionbook: Number, remark: string, state: string, json: String): Promise<Array<Object>> {
        const url = `${this.getTemplateUrl}`;
        // tslint:disable-next-line:max-line-length
        const post_data = { 'name': name, 'registrant': registrant, 'instructionbook': instructionbook, 'remark': remark, 'state': state, 'json': json};
        return this.http.post(url, post_data)
            .toPromise()
            .then(response => response.json() as Array<Object>)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
