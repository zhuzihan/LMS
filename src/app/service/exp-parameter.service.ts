import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { baseUrl } from '../globals';

import 'rxjs/add/operator/toPromise';

// 从服务器获取参数表

@Injectable()
export class ExpParameterService {

    private getDataUrl = baseUrl + '/experimentParameter'; // 服务器地址

    constructor(private http: Http) { }

    /*
     * 获取参数表
     * HTTP Method : GET
     * HTTP Url : /experimentParameter
     * Return : Json
     */
    getExpParameter(): Promise<Object> {
        const url = `${this.getDataUrl}`;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Object)
                        .catch(this.handleError);
    }

    /*
     * 更新参数表
     * HTTP Method : PUT
     * id : 参数表 id
     * data : 参数表 json 数据包
     * HTTP Url : /experimentParameter/:id
     * Return : 1 - Success
     */
    updateExpParameter(id: number, data: any): Promise<string> {
        const url = `${this.getDataUrl}/${id}`;
        return this.http.put(url, data)
                        .toPromise()
                        .then(response => response.text() as string)
                        .catch(this.handleError);
    }

    /*
     * 添加参数表
     * HTTP Method : POST
     * data : 参数表 json 数据包
     * HTTP Url : /experimentParameter
     * Return : 新增参数表 id
     */
    insertExpParameter(data: any): Promise<string> {
        const url = `${this.getDataUrl}`;
        return this.http.post(url, data)
                        .toPromise()
                        .then(response => response.text() as string)
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getValues(data: any) {
        const array: Array<any> = new Array();
        for (const data_key of Object.keys(data)){
            array.push(data[data_key]);
        }
        return array;
    }
    getKeys(item) {
        return Object.keys(item);
    }

}
