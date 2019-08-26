import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIEndPoints } from '../constants/apiendpointconstants';


@Injectable({
    providedIn: 'root'
})
export class DashboardsService {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };

    getLiveTracking(searchDate: string, districtId: string, cityId: string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.dashboard.liveTracking}`;
        url += `?searchDate=${searchDate}&districtId=${districtId}&cityId=${cityId}`;
        return this.httpClient.get(url);
    }

    getRouteDeviation(searchDate: string, districtId: string, cityId: string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.dashboard.outedeviation}`;
        url += `?searchDate=${searchDate}&districtId=${districtId}&cityId=${cityId}`;
        return this.httpClient.get(url);
    }

    getAuthDetails(searchDate: string, districtId: string, cityId: string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.dashboard.vehicleauth}`;
        url += `?searchDate=${searchDate}&districtId=${districtId}&cityId=${cityId}`;
        return this.httpClient.get(url);
    }

    getPanicDetails(searchDate: string, districtId: string, cityId: string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.dashboard.panicAlerts}`;
        url += `?searchDate=${searchDate}&districtId=${districtId}&cityId=${cityId}`;
        return this.httpClient.get(url);
    }

    getDevicePanic(searchDate: string, districtId: string, cityId: string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.dashboard.devicePanic}`;
        url += `?searchDate=${searchDate}&districtId=${districtId}&cityId=${cityId}`;
        return this.httpClient.get(url);
    }

    getDeviceDetails(searchDate: string, districtId: string, cityId: string, actions) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.dashboard.devicestatus}`;
        url += `?searchDate=${searchDate}&districtId=${districtId}&cityId=${cityId}&action=${actions}`;
        return this.httpClient.get(url);
    }
}
