import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIEndPoints } from '../constants/apiendpointconstants';


@Injectable({
    providedIn: 'root'
})
export class VehicleServiceApi {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };

    getAllVehicleDetails(page: Number, size: Number, searchDate: string, searchValue: string, districtId: string, cityId : string, rtoId : string) {
        let url = `${environment.apiBase}${environment.version}/${APIEndPoints.vehicles.vehicledetails}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}&districtId=${districtId}&cityId=${cityId}&rtoOfficeId=${rtoId}`;
        return this.httpClient.get(url);
    }
    getAllSusVehicleDetails(page: Number, size: Number, searchDate: string, searchValue: string, districtId: string, cityId : string, rtoId : string) {
        let url = `${environment.apiBase}${environment.version}/${APIEndPoints.vehicles.suspiciousvehicles}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}&districtId=${districtId}&cityId=${cityId}&rtoOfficeId=${rtoId}`;
        return this.httpClient.get(url);
    }

    getAuthVehiclesType(page: Number, size: Number, searchDate: string, districtId: string, cityId : string, rtoId : string,isVehicleAuth: boolean){
        let url = `${environment.apiBase}${environment.version}/${APIEndPoints.vehicles.authVehicles}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&districtId=${districtId}&cityId=${cityId}&rtoOfficeId=${rtoId}&isVehicleAuth=${isVehicleAuth}`;
        return this.httpClient.get(url);
    }
}
