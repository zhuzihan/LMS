import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { baseUrl } from '../globals';

import 'rxjs/add/operator/toPromise';

// 从服务器获取参数表

@Injectable()
export class ExpParameterService {

    private getDataUrl = baseUrl + '/experimentParameter'; // 服务器地址

    constructor(private http: Http) { }

    getExpParameter(): Promise<Object> {
        const url = `${this.getDataUrl}`;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Object)
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}
