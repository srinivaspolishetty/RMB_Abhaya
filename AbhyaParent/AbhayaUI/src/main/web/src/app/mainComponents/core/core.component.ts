import { Component, OnInit } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { Message } from "../../common/models/message.model";
import { environment } from "../../../environments/environment";
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Router, ActivatedRoute } from '@angular/router';
import { PanicAlerts } from "../../common/models/dashboard.model";
import { DashboardsService } from "../../common/services/dashboardserviceapi";
import { UserDetails } from "../../common/models/userdetails.model";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.sass']
})
export class CoreComponent implements OnInit {

  public spinkit = Spinkit;
  msgs: Array<Message> = [];
  private stompClient = null;
  panicData: PanicAlerts;
  devicePanicData: PanicAlerts;
  totalPanic;
  disabled = true;
  tripId: string;
  userDetails: UserDetails;
  constructor(private router: Router, private dashboardapi: DashboardsService) {
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
  }

  ngOnInit() {
    this.getpanicAlert();
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.msgs = [];
    }
  }

  getpanicAlert() {
    const socket = new SockJS(`${environment.apiBase}/distress`);
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);
      _this.stompClient.subscribe('/topic/messages', function (hello) {
        const message = new Message();
        message.msg = hello.body;
        message.isMobile = (hello.body.split(',')[1] === 'WEB');
        message.tripId = (hello.body.split(',')[3]);
        message.citizenMobileNumber = (hello.body.split(',')[0]);
        _this.msgs.push(message);
        console.log(_this.msgs);
        _this.tripId = _this.msgs[0].tripId;

        _this.dashboardapi.getPanicDetails('', '', '')
          .subscribe((_data: PanicAlerts) => {
            _this.panicData = _data[0].openWeb;
            _this.dashboardapi.getDevicePanic('', '', '')
              .subscribe((_data: PanicAlerts) => {
                _this.devicePanicData = _data[0];
                _this.totalPanic = _this.panicData.openWeb + _this.devicePanicData.openDevicePanic;
              })
          });;



      });
    });
  }


  panicDetailView(panicType) {
    this.msgs = [];
    if (panicType) {
      this.router.navigate(['/trip/triptracking'],
        {
          queryParams: { tripId: this.tripId },
          queryParamsHandling: 'merge'
        })
    }
    else{
      this.router.navigate(['/trip/panicalerts'],
      {
        queryParams: { panicType: 'DEVICE' },
        queryParamsHandling: 'merge'
      })
    }
  }

}
