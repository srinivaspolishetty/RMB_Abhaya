import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIEndPoints } from '../constants/apiendpointconstants';


@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };

    createDistrict(createObject) {
        return this.httpClient.post(`${environment.apiBase}${environment.version}${APIEndPoints.admin.createDistrict}`, createObject, this.httpOptions);
    }

    createCity(createObject) {
        return this.httpClient.post(`${environment.apiBase}${environment.version}${APIEndPoints.admin.createCity}`, createObject, this.httpOptions);
    }


}
