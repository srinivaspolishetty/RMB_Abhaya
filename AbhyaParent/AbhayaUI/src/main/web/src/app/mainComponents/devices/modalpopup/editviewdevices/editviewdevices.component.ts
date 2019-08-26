import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { deviceDetailsModel } from "../../../../common/models/device-details-model";
import { ToasterService } from '../../../../common/services/toaster.service';
import { DevicesService } from "../../../../common/services/deviceserviceapi";
import { Validations } from '../../../../common/constants/validationconstants';


@Component({
  selector: 'app-editviewdevices',
  templateUrl: './editviewdevices.component.html',
  styleUrls: ['./editviewdevices.component.sass']
})
export class EditviewdevicesComponent implements OnInit {

    @Input() selectedDeviceDetails: deviceDetailsModel;
    public pageTitle: string;
    public viewDetails: Boolean = true;
    public primaryNumber: string;
    public primaryProvider: string;
    public secondaryNumber: string;
    public secondaryProvider: string;
    public simDetails = [];
    mobileNumber = [];
    public Validations: Object = Validations;
    public isDataExists: Boolean = false;
    public mobileNumberField: Boolean = true;

    constructor(public activeModal: NgbActiveModal, private toasterService: ToasterService,
        private devicesServiceapi: DevicesService
        ) {
        this.primaryProvider = '';
        this.secondaryProvider = '';
    }

    ngOnInit() {
        this.simDetails = this.selectedDeviceDetails.simDetails;
        this.viewDetails = !(this.selectedDeviceDetails.selectedEvent === 'edit');
        this.pageTitle = this.viewDetails ? 'View Device Details' : 'Edit Device Details';
        // this.pageTitle += this.selectedDeviceDetails.imeiNumber;
        // this.mobileNumber = !this.viewDetails ? [...this.simDetails] : this.mobileNumber;
        for (let i = 0; i < this.simDetails.length; i++) {
            this.mobileNumber.push(this.simDetails[i].mobileNumber);
        }
    }
    editDeviceDetails() {
        // we can write Array filter to remove all the null values please check it eg: list.filter((obj) => obj )
        for (let i = 0; i < this.mobileNumber.length; i++) {
            if (this.mobileNumber[i] !== null) {
                this.simDetails[i].mobileNumber = this.mobileNumber[i];
                this.simDetails[i].imeiNumber = this.selectedDeviceDetails.imeiNumber;
                this.simDetails[i].createdDate = this.simDetails[i].createdDate.split('+')[0].replace('T', ' ')
            }
        }
        // second one
        for (let i = 0; i < this.simDetails.length; i++) {
            
            if ('' === this.simDetails[i].mobileNumber) {
                this.mobileNumberField = false;
            } else {
                this.mobileNumberField = true;
                break;
            }
        }
        if (this.mobileNumberField) {
            this.devicesServiceapi.updateDeviceDetails(this.simDetails)
                .subscribe((_data: any) => {
                    this.activeModal.close('refreshContent');
                    this.toasterService.showSuccess('bottom-right', 'Successfully updated the device details.');
                }, (_error: any) => {
                    this.activeModal.close('Close click');
                    this.toasterService.showError('bottom-right', 'ERROR: Unable to update the device details.');
                }
            );
        }
    }

}