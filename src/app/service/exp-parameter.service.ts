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
    getExpParameter(): Promise<Array<Object>> {
        const url = `${this.getDataUrl}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Array<Object>)
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
        for (const data_key of Object.keys(data)) {
            array.push(data[data_key]);
        }
        return array;
    }

    getKeys(item) {
        return Object.keys(item);
    }

    convertParameterList(expParaData: Array<Object>) {
        const expParameterList: Array<Object> = [];
        for (const one_para of expParaData) {
            const expParaJsonArray: Array<Object> = JSON.parse(one_para['json']);
            const new_para_data: Object = new Object();
            new_para_data['tableId'] = one_para['id'];
            new_para_data['tableName'] = one_para['name'];
            new_para_data['tableRegistrant'] = one_para['registrant'];
            new_para_data['tableRemark'] = one_para['remark'];
            new_para_data['tableState'] = one_para['state'];
            new_para_data['tableHead'] = expParaJsonArray[0];
            expParaJsonArray.shift();
            new_para_data['tableData'] = expParaJsonArray;
            expParameterList.push(new_para_data);
        }
        console.log(expParameterList);
        return expParameterList;
    }

}
