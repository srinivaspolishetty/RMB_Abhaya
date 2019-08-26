import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DriverDuty } from 'src/app/common/models/driverDuty.model';

@Component({
  selector: 'app-editviewdriverduty',
  templateUrl: './editviewdriverduty.component.html',
  styleUrls: ['./editviewdriverduty.component.sass']
})
export class EditviewdriverdutyComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() selectedDriverDutyDetails : DriverDuty;
  driverImage: string;
  ownerImage: string;
  ngOnInit() {
    this.driverImage = 'data:image/jpeg;base64,' + this.selectedDriverDutyDetails.image;
    this.ownerImage = 'data:image/jpeg;base64,' + this.selectedDriverDutyDetails.ownerImage;
  }
}