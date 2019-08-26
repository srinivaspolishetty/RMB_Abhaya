import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIEndPoints } from '../constants/apiendpointconstants';


@Injectable({
    providedIn: 'root'
})
export class UserServiceApi {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };

    getAllUsers(page: Number, size: Number, searchDate: string, searchValue: string, districtId: string, cityId : string, rtoId : string) {
        let url = `${environment.apiBase}${environment.version}/${APIEndPoints.users.userdetails}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}&districtId=${districtId}&cityId=${cityId}&rtoOfficeId=${rtoId}`;
        return this.httpClient.get(url);
    }
}
