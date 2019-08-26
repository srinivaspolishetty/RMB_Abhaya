import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
declare var google: any;
import { MapsAPILoader } from '@agm/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from "../../../../environments/environment";
import { TripModel } from '../../../common/models/trip.model';
import { TripServiceApi } from "../../../common/services/tripserviceapi";
import { DevicesService } from "../../../common/services/deviceserviceapi";
import { ToasterService } from '../../../common/services/toaster.service';
import { UserDetails } from "../../../common/models/userdetails.model";
import { CommandManagementService } from '../../../common/services/commandmanagementserviceapi';
import { deviceCommunicationModel } from "../../../common/models/device-communication-model";
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral } from '@agm/core';


@Component({
  selector: 'app-triptracking',
  templateUrl: './triptracking.component.html',
  styleUrls: ['./triptracking.component.sass']
})
export class TriptrackingComponent implements OnInit {

  tripId: string;
  driverImage: string = '';
  ownerImage :string = '';
  userDetails: UserDetails;
  url: SafeResourceUrl;
  engineStatus: boolean = true;
  noDataText: string = 'No Trip Details Available';
  isDataExists: Boolean = false;
  tripDetails: TripModel;
  deviceCommunicationData: deviceCommunicationModel;
  isDriverDetails: boolean = true;
  engineObj;
  constructor(private activatedRoute: ActivatedRoute, private deviceapi: DevicesService, private toasterService: ToasterService,
    private sanitizer: DomSanitizer, private tripserviceApi: TripServiceApi, private commandApi: CommandManagementService) {
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    this.activatedRoute.queryParams.subscribe(params => {
      this.tripId = params['tripId'] !== undefined ? params['tripId'] : '';
    })
  }

  ngOnInit() {
    if (this.tripId !== '') {
      this.getTripDetails();
    }

    let dynamicUrl = `${environment.apiBase}/triptracking.html`;
    dynamicUrl = (this.tripId !== '') ? `${dynamicUrl}?tripId=${this.tripId}` : dynamicUrl;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(dynamicUrl);

  }
  getTripDetails() {
    this.tripserviceApi.getTripTracking(this.tripId)
      .subscribe((_data: any) => {
        this.tripDetails = _data.content[0];
        console.log(this.tripDetails.tripClosed);
        this.driverImage = 'data:image/jpeg;base64,' + this.tripDetails.image;
        this.ownerImage = 'data:image/jpeg;base64,' + this.tripDetails.ownerImage;
        this.isDataExists = (_data.content.length > 0);
        this.deviceapi.getAllDevicesCommunication(0, 10, '', this.tripDetails.rcNumber, '', '', '','','')
          .subscribe((_data: any) => {
            this.deviceCommunicationData = _data.content[0];
          });
      });
  }

  changeView(value) {
    this.isDriverDetails = value;
  }
  engineOnOff(event) {
    this.engineStatus = !this.engineStatus;
    if (!this.engineStatus) {
      this.engineObj = {
        description: "Engine Status",
        header: "SET",
        imeiNumber: this.deviceCommunicationData.imeiNumber,
        payload: "set-cvp-pancset"
      };
      this.sendCommand();
    }
    if (this.engineStatus) {
      this.engineObj = {
        description: "Panic Enabled/Disable",
        header: "SET",
        imeiNumber: this.deviceCommunicationData.imeiNumber,
        payload: "set-cvp-panicsts=1"
      };
      this.sendCommand();
      setTimeout(() => {
        this.engineObj = {
          description: "Panic Enabled/Disable",
          header: "SET",
          imeiNumber: this.deviceCommunicationData.imeiNumber,
          payload: "set-cvp-panicsts=0"
        };
        this.sendCommand();
      }, 5000);
    }
  }
  sendCommand() {
    console.log(this.engineObj);
    this.commandApi.sendActivationRequest(JSON.stringify(this.engineObj))
      .subscribe((data: any) => {
        (data.message === 'Success') ? this.toasterService.showSuccess('bottom-right', 'Successfully truned Off the Engine for the Vehicle number:  ' + this.tripDetails.rcNumber) :
          (data.message === 'Already Existed') ? this.toasterService.showWarning('bottom-right', 'Unable to trun Off the Engine for the Vehicle number.' + this.tripDetails.rcNumber) :
            this.toasterService.showError('bottom-right', '' + data.message);
      }, error => {
        console.log('error', error);
      })
  }

}
