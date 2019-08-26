import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { APIEndPoints } from '../constants/apiendpointconstants';


@Injectable({
    providedIn: 'root'
})
export class CommandManagementService {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'my-auth-token'
        })
    };

    sendActivationRequest(packetDetails) {
        const url = `${environment.apiBase}${environment.version}${APIEndPoints.command.executeTask}`;
        return this.httpClient.post(url, packetDetails, this.httpOptions);
    }

    getCommandList(page: Number, size: Number, searchDate: string, searchValue: string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.command.taskDetails}`;
        url += `?page=${page}&size=${size}&searchDate=${searchDate}&searchValue=${searchValue}`;
        return this.httpClient.get(url);
    }

    getpayloadDetails(type: string) {
        let url = `${environment.apiBase}${environment.version}${APIEndPoints.command.smsPacketTypes}`;
        url += `?commandType=${type}`;
        return this.httpClient.get(url);
    }
}
