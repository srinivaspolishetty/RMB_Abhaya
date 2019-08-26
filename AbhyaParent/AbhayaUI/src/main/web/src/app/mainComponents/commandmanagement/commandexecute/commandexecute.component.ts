import { Component, OnInit } from '@angular/core';
import { CommandManagementService } from '../../../common/services/commandmanagementserviceapi';
import { DevicesService } from '../../../common/services/deviceserviceapi';
import { ToasterService } from '../../../common/services/toaster.service';
import { Payload } from '../../../common/models/payLoad.model';
import { deviceDetailsModel } from '../../../common/models/device-details-model';
import { PaginationModel } from '../../../common/models/pagination.model';

@Component({
  selector: 'app-commandexecute',
  templateUrl: './commandexecute.component.html',
  styleUrls: ['./commandexecute.component.sass']
})
export class CommandexecuteComponent implements OnInit {
  public deviceData : Array<deviceDetailsModel> = [];
  public executeType: string;
  public payLoad: string;
  public imeiNumber: string;
  public commandType: string;
  public payloadValue: string;
  public payloadDesc: String;
  public payLoadData : Payload;
  public propertyValue: Boolean = false;
  public showBtn: Boolean = false;
  public btnText: string;

  constructor(private commandApi : CommandManagementService,
            private devicesApi : DevicesService,
            private toasterService: ToasterService) { 
              this.executeType = '';
              this.payLoad = '';
              this.imeiNumber = '';
              this.commandType = '';
            }

  ngOnInit() {
    this.getAllDeviceDetails()
  }

  executechange() {
    this.getPayloadData(this.executeType);
    this.payLoad = '';
    this.imeiNumber = '';
    this.payloadValue = '';
    this.showBtn = true;
    this.propertyValue = (this.executeType === 'SET');
    this.btnText = this.executeType + ' Command';
    //this.resetForm(commandExeForm);
  }

  getPayloadData(type: string) {
    this.commandApi.getpayloadDetails(type)
      .subscribe((data: Payload) => {
          this.payLoadData = data;
    });
  }

  payloadchange(event) {
    const selectedOptions = event.target['options'];
    const selectedIndex = selectedOptions.selectedIndex;
    this.payloadDesc = selectedOptions[selectedIndex].text;
  }

  getAllDeviceDetails() {
    this.devicesApi.getAllDevices(0, 0, '', '','','','')
    .subscribe((data : PaginationModel) => {
        this.deviceData = data.content;
    });
  }

  resetForm(commandExeForm) {
    commandExeForm.resetForm();
    this.executeType = '';
    this.payLoad = '';
    this.imeiNumber = '';
    this.commandType = '';
    this.propertyValue = false;
  }

  executecommand(commandExeForm) {
    const newobj = new Object(
        {
            header: this.executeType,
            payload: this.payLoad + this.payloadValue,
            imeiNumber: this.imeiNumber,
            description: this.payloadDesc
        }
    );
    this.commandApi.sendActivationRequest(JSON.stringify(newobj))
        .subscribe((data: any) => {            
            (data.message === 'Success') ? this.toasterService.showSuccess('bottom-right', 'Successfully Executed ' + this.executeType + ' Command.') :
            (data.message === 'Already Existed') ? this.toasterService.showWarning('bottom-right', 'Command was already Sent Waiting for Response.') :
                this.toasterService.showError('bottom-right', '' + data.message);
            this.resetForm(commandExeForm);
        }, error => {
            console.log('error', error);
        });
}
  

}
