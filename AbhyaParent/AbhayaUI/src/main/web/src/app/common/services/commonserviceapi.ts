import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIEndPoints } from '../constants/apiendpointconstants';


@Injectable({
    providedIn: 'root'
})
export class CommonsService {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };

    getComboData(action:string, id:number) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.common.comboData}`;
        url += `?actionType=${action}&extraParams=${id}`;
        return this.httpClient.get(url);
    }
    getConfigData() {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.common.config}`;
        return this.httpClient.get(url);
    }
    saveConfig(configdata) {
        const url = `${environment.apiBase}${environment.version}${APIEndPoints.common.config}`;
        return this.httpClient.post(url, configdata, this.httpOptions);
    }
}
