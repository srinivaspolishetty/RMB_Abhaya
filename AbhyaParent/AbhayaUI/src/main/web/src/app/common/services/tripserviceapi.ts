import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIEndPoints } from '../constants/apiendpointconstants';


@Injectable({
    providedIn: 'root'
})
export class TripServiceApi {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };

    getTripDetails(page: Number, size: Number, searchDate: string, searchValue: string,tripClosed: Boolean, districtId: string, cityId : string, rtoId : string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.trip.tripDetails}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}&isTripClosed=${tripClosed}&districtId=${districtId}&cityId=${cityId}&rtoOfficeId=${rtoId}`;
        return this.httpClient.get(url);
    }
    getTripTracking(tripId) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.trip.tripDetails}`;
        url += `?tripId=${tripId}`;
        return this.httpClient.get(url);
    }
    getPanicDetails(page: Number, size: Number, searchDate: string, searchValue: string, eventType : string, panicClosed: Boolean, districtId: string, cityId : string, rtoId : string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.trip.panicDetails}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}&eventType=${eventType}&closed=${panicClosed}&districtId=${districtId}&cityId=${cityId}&rtoOfficeId=${rtoId}`;
        return this.httpClient.get(url);
    }
    getDevicePanic(page: Number, size: Number, searchDate: string, searchValue: string, panicClosed: Boolean, districtId: string, cityId : string, rtoId : string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.trip.devicePanicDetails}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}&districtId=${districtId}&closed=${panicClosed}&cityId=${cityId}&rtoOfficeId=${rtoId}`;
        return this.httpClient.get(url);
    }
    getRouteDeviationDetails(page: Number, size: Number, searchDate: string, searchValue: string, districtId: string, cityId : string, rtoId : string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.trip.routeDeviation}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}&districtId=${districtId}&cityId=${cityId}&rtoOfficeId=${rtoId}`;
        return this.httpClient.get(url);
    }

}
