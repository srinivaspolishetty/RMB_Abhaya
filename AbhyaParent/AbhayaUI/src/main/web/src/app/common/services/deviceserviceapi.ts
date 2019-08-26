import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIEndPoints } from '../constants/apiendpointconstants';


@Injectable({
    providedIn: 'root'
})
export class DevicesService {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };

    getAllDevices(page: Number, size: Number, searchDate: string, searchValue: string, districtId: string, cityId: string, rtoId : string) {
        let url = `${environment.apiBase}${environment.version}/${APIEndPoints.devices.deviceDetails}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}&districtId=${districtId}&cityId=${cityId}&rtoOfficeId=${rtoId}`;
        return this.httpClient.get(url);
    }

    getAllDevicesCommunication(page: Number, size: Number, searchDate: string, searchValue: string, districtId: string, cityId: string, rtoId : string,action:string,actionValue:string) {
        let url = `${environment.apiBase}${environment.version}/${APIEndPoints.devices.devicecommunication}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}&districtId=${districtId}&cityId=${cityId}&rtoOfficeId=${rtoId}&${action}=${actionValue}`;
        return this.httpClient.get(url);
    }

    getLiveDevices(stateId) {
        const url = `${environment.apiBase}${environment.version}/${APIEndPoints.devices.liveDevices}`;
    return this.httpClient.get(`${url}&stateId=${stateId}`);;
    }

    getmovementDetails(page: Number, size: Number, searchDate: string, searchValue: string, status: string, vehicleMode: string, stateId: string, districtId: string, cityId: string, rtoId : string) {
        let url = `${environment.apiBase}${environment.version}/${APIEndPoints.devices.movement}`;
        url += `?page=${page}&size=${size}&status=${status}&vehicleMode=${vehicleMode}&stateId=${stateId}&districtId=${districtId}&cityId=${cityId}&searchValue=${searchValue}&searchDate=${searchDate}&rtoOfficeId=${rtoId}`;
        return this.httpClient.get(url);
    }

    getLocationData(page: Number, size: Number, searchDate: string, searchValue: string) {
        let url = `${environment.apiBase}${environment.version}/${APIEndPoints.devices.locationDetails}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}`;
        return this.httpClient.get(url);
    }

    downloadLocation(page: Number, searchDate: string, searchValue: string) {
        let url = `${environment.apiBase}${environment.version}/${APIEndPoints.devices.locationDetails}`;
        url += `?page=${page}&searchDate=${searchDate}&searchValue=${searchValue}`;
        return this.httpClient.get(url);
    }

    getemergancyDetails(page: Number, size: Number, searchDate: string, searchValue: string) {
        let url = `${environment.apiBase}${environment.version}/${APIEndPoints.devices.emergancydetails}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}`;
        return this.httpClient.get(url);
    }

    getHealthData(page: Number, size: Number, searchDate: string, searchValue: string) {
        let url = `${environment.apiBase}${environment.version}/${APIEndPoints.devices.healthDetails}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}`;
        return this.httpClient.get(url);
    }

    getRawData(page: Number, size: Number, searchDate: string, searchValue: string, districtId: string, cityId: string) {
        let url = `${environment.apiBase}${environment.version}/${APIEndPoints.devices.rawdata}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}&districtId=${districtId}&cityId=${cityId}`;
        return this.httpClient.get(url);
    }

    updateDeviceDetails(deviceDetails) {
        const url = `${environment.apiBase}${environment.version}${APIEndPoints.devices.simDetails}`;
        return this.httpClient.post(url, deviceDetails, this.httpOptions);
    }


}
